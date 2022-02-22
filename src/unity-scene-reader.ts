import { Uri, workspace } from 'vscode';
import * as yaml from 'js-yaml';
import { logger } from './extension';
import { TextDecoder } from 'util';
import { performance } from 'perf_hooks';

export class SceneEventConnection {
    public readonly sceneUri: Uri;
    public readonly calledClassName: string | undefined;
    public calledClassGuid: string | undefined;
    public readonly calledMethod: string;
    public readonly event: string;
    public readonly callingClassGuid: string;
    public readonly gameObjectId: string;
    public get scene(): string {
        return nameWithoutExtension(this.sceneUri) || 'Scene';
    }
    public get calledClass(): string {
        return this.calledClassName || guidsToClassNames.get(this.calledClassGuid || '') || '';
    }
    public get callingClass(): string {
        return guidsToClassNames.get(this.callingClassGuid) || '';
    }
    public get gameObject(): string {
        return urisToGameObjectIds.get(this.sceneUri)?.get(String(this.gameObjectId)) || 'Unknown Game Object';
    }

    constructor(sceneUri: Uri,
            calledClassName: string | undefined,
            calledClassGuid: string | undefined,
            calledMethod: string,
            event: string,
            callingClassGuid: string,
            gameObjectId: string) {
        this.sceneUri = sceneUri;
        this.calledClassName = calledClassName;
        this.calledClassGuid = calledClassGuid;
        this.calledMethod = calledMethod;
        this.event = event;
        this.callingClassGuid = callingClassGuid;
        this.gameObjectId = gameObjectId;
    }
}

export async function getConnections(uri: Uri): Promise<SceneEventConnection[]> {
    const className = nameWithoutExtension(uri);
    if (!className) { return []; }

    await readUnitySceneFiles();
    if (!metasRead && !!sceneEventConnections.find(connection => !connection.calledClassName)) {
        await readUnityMetaFiles();
    }

    return sceneEventConnections.filter(
        connection => connection.calledClass.indexOf(className) >= 0
            || connection.callingClass === className);
}

export let unityMetadataVersion = 0;

let metasRead = false;
let scenesRead = false;
let metaFilesPromise: Promise<void>;
let sceneFilesPromise: Promise<void>;
let sceneEventConnections: SceneEventConnection[] = [];
let scenePaths: string[] = [];
let guidsToClassNames = new Map<string, string>();
let urisToGuids = new Map<Uri, string>();
let urisToGameObjectIds = new Map<Uri, Map<string, string>>();

const buildSettingsGlob = '**/ProjectSettings/EditorBuildSettings.asset';
const unitySceneGlob = '**/Assets/**/*.unity';
const cSharpMetaGlob = '**/Assets/**/*.cs.meta';

export async function readUnityMetaFiles(force = false): Promise<void> {
    if (metasRead && !force) {
        return;
    }
    if (!metaFilesPromise || (force && metasRead)) {
        metaFilesPromise = doReadUnityMetaFiles();
    }
    await metaFilesPromise;
    metasRead = true;
}

export async function readUnitySceneFiles(force = false): Promise<void> {
    if (scenesRead && !force) {
        return;
    }
    if (!sceneFilesPromise || (force && scenesRead)) {
        sceneFilesPromise = doReadUnitySceneFiles();
    }
    await sceneFilesPromise;
    scenesRead = true;
}

async function doReadUnityMetaFiles(): Promise<void> {
    const metaUris = await workspace.findFiles(cSharpMetaGlob, null);
    for (const uri of metaUris) {
        await findGuid(uri);
    }

    // TODO: maybe also look up meta files in the whole project (but don't wait for them).
    // This would allow showing built-in component names like `Button`.

    const metaWatcher = workspace.createFileSystemWatcher(cSharpMetaGlob, false, true);
    metaWatcher.onDidCreate(findGuid);
    metaWatcher.onDidDelete(uri => {
        const guid = urisToGuids.get(uri);
        if (guid) {
            guidsToClassNames.delete(guid);
            urisToGuids.delete(uri);
        }
    });
}

async function findGuid(uri: Uri) {
    ++unityMetadataVersion;
    try {
        const startTime = performance.now();
        const yamlBytes = await workspace.fs.readFile(uri);
        const yamlText = new TextDecoder().decode(yamlBytes);
        let guid: string = '';
        const tree = yaml.load(yamlText) as any;
        if (tree && tree.guid) {
            guid = tree.guid;
            urisToGuids.set(uri, guid);
            const className = nameWithoutExtension(uri);
            if (className) {
                guidsToClassNames.set(guid, className);
            }
        }
        const endTime = performance.now();
        logger.debug('Found GUID %s from %s in %d milliseconds', guid, uri, endTime - startTime);
    } catch (error) {
        logger.warn('Unable to find GUID from %s: %s', uri, error);
    }
}

async function doReadUnitySceneFiles(): Promise<void> {
    if (workspace.getConfiguration('unity-event-lens').get('onlyScenesInBuildSettings') === true) {
        await readProjectScenePaths();

        const buildSettingsWatcher = workspace.createFileSystemWatcher(buildSettingsGlob, true, false, true);
        buildSettingsWatcher.onDidChange(readProjectScenePaths);
    }

    const sceneUris = await workspace.findFiles(unitySceneGlob, null);
    for (const uri of sceneUris) {
        await parseScene(uri);
    }

    const sceneWatcher = workspace.createFileSystemWatcher(unitySceneGlob);
    sceneWatcher.onDidChange(parseScene);
    sceneWatcher.onDidCreate(parseScene);
    sceneWatcher.onDidDelete(uri => sceneEventConnections = sceneEventConnections.filter(connection => connection.sceneUri.path !== uri.path));
}

async function readProjectScenePaths() {
    let settingsUris = await workspace.findFiles(buildSettingsGlob, null);
    settingsUris = settingsUris.filter(uri => uri.path.indexOf('/Assets/') === -1);
    try {
        if (settingsUris.length > 0) {
            const startTime = performance.now();
            const yamlBytes = await workspace.fs.readFile(settingsUris[0]);
            const yamlText = new TextDecoder().decode(yamlBytes);
            const tree = yaml.load(yamlText, { schema: SCHEMA }) as UnityTag;
            if (tree && tree.data.EditorBuildSettings && tree.data.EditorBuildSettings.m_Scenes) {
                for (const scene of tree.data.EditorBuildSettings.m_Scenes) {
                    if (scene.path) {
                        scenePaths.push(scene.path);
                    }
                }
            }
            const endTime = performance.now();
            logger.debug('Finished reading scene paths [%s] from EditorBuildSettings.asset in %d milliseconds', scenePaths.join(', '), endTime - startTime);
        }
    } catch (error) {
        logger.warn('Unable to read EditorBuildSettings.asset; will parse all scene files: %s', settingsUris, error);
    }
}

async function parseScene(uri: Uri) {
    if (!shouldParseScene(uri)) {
        logger.debug('Skipping scene %s', uri);
        return;
    }

    const startTime = performance.now();

    ++unityMetadataVersion;
    if (!urisToGameObjectIds.has(uri)) {
        urisToGameObjectIds.set(uri, new Map());
    }

    sceneEventConnections = sceneEventConnections.filter(connection => connection.sceneUri.path !== uri.path);

    const yamlBytes = await workspace.fs.readFile(uri);
    const yamlText = new TextDecoder().decode(yamlBytes);
    const fileIdsToGuids = new Map<string, string>();
    let connections: SceneEventConnection[] = [];

    const startDoc = /^---\s+!u!(\d+)\s+&(\d+)( +.+)?$/gm;
    let match = startDoc.exec(yamlText);
    let endMatch: RegExpExecArray | null;
    while (match && (endMatch = startDoc.exec(yamlText)) !== null) {
        if (match[1] === '1' || match[1] === '114') {
            const itemYaml = yamlText.substring(match.index + match[0].length, endMatch.index);
            connections = connections.concat(parseDoc(itemYaml, match[2], uri, fileIdsToGuids));
        }
        match = endMatch;
    }

    if (match && (match[1] === '1' || match[1] === '114')) {
        const itemYaml = yamlText.substring(match.index + match[0].length);
        connections = connections.concat(parseDoc(itemYaml, match[2], uri, fileIdsToGuids));
    }

    // we stored fileIds for calledClassGuid;
    // once fully parsed we can replace them with actual GUIDs
    for (const connection of connections) {
        if (connection.calledClassGuid) {
            connection.calledClassGuid = fileIdsToGuids.get(connection.calledClassGuid);
        }
        sceneEventConnections.push(connection);
    }

    const endTime = performance.now();
    logger.debug('Parsed scene %s in %d milliseconds and found %d event bindings', uri, endTime - startTime, connections.length);
}

function parseDoc(itemYaml: string, fileId: string, uri: Uri, fileIdsToGuids: Map<string, string>): SceneEventConnection[] {
    try {
        const tree = yaml.load(itemYaml) as any;
        if (tree.GameObject) {
            urisToGameObjectIds.get(uri)?.set(fileId, tree.GameObject.m_Name);
        } else if (tree.MonoBehaviour) {
            const behavior = tree.MonoBehaviour;
            const guid = behavior.m_Script?.guid;
            const gameObjectId = behavior.m_GameObject?.fileID;
            if (!guid || !gameObjectId) {
                return [];
            }
            fileIdsToGuids.set(fileId, guid);

            const connections: SceneEventConnection[] = [];
            for (const field in behavior) {
                if (behavior[field]?.m_PersistentCalls) {
                    for (const call of behavior[field].m_PersistentCalls.m_Calls) {
                        let calledClassName: string | undefined;
                        let calledClassGuid: string | undefined;
                        if (call.m_TargetAssemblyTypeName) {
                            calledClassName = call.m_TargetAssemblyTypeName.split(',').shift();
                        } else if (call.m_Target?.fileID) {
                            calledClassGuid = call.m_Target.fileID;
                        }
                        connections.push(new SceneEventConnection(
                            uri,
                            calledClassName,
                            calledClassGuid,
                            call.m_MethodName,
                            field,
                            guid,
                            gameObjectId));
                    }
                }
            }

            return connections;
        }
    } catch (error) {
        logger.warn('Unable to parse document %s in scene %s: %s', fileId, uri, error);
    }

    return [];
}

function shouldParseScene(uri: Uri): boolean {
    return scenePaths.length === 0 || !!scenePaths.find(path => uri.path.indexOf(path) !== -1);
}

function nameWithoutExtension(uri: Uri) {
    const fileName = uri.path.split('/').pop();
    return fileName?.split('.').shift();
}

class UnityTag {
    type: string | undefined;
    data: any;
    constructor(type: string | undefined, data: any) {
        this.type = type;
        this.data = data;
    }
}

const tagConstructorOptions = {
    kind: 'mapping',
    multi: true,
    representName: function (object: any) {
        return object.type;
    },
    represent: function (object: any) {
        return object.data;
    },
    instanceOf: UnityTag,
    construct: function (data, type) {
        return new UnityTag(type, data);
    }
} as yaml.TypeConstructorOptions;

const unityTag = new yaml.Type('tag:unity3d.com', tagConstructorOptions);

const SCHEMA = yaml.DEFAULT_SCHEMA.extend([unityTag]);

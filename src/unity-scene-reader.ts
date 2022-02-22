import { Uri, workspace } from 'vscode';
import * as yaml from 'js-yaml';
import { logger } from './extension';
import { nameWithoutExtension } from './util';

export class SceneEventConnection {
    public readonly sceneUri: Uri;
    public readonly calledClass: string;
    public readonly calledMethod: string;
    public readonly event: string;
    public readonly callingGuid: string;
    public readonly gameObjectId: string;
    public get scene(): string {
        return nameWithoutExtension(this.sceneUri) || 'Scene';
    }
    public get callingClass(): string {
        return guidsToClassNames.get(this.callingGuid) || '';
    }
    public get gameObject(): string {
        return urisToGameObjectIds.get(this.sceneUri)?.get(String(this.gameObjectId)) || 'Unknown Game Object';
    }

    constructor(sceneUri: Uri,
            calledClass: string,
            calledMethod: string,
            event: string,
            callingGuid: string,
            gameObjectId: string) {
        this.sceneUri = sceneUri;
        this.calledClass = calledClass;
        this.calledMethod = calledMethod;
        this.event = event;
        this.callingGuid = callingGuid;
        this.gameObjectId = gameObjectId;
    }
}

export async function getConnections(uri: Uri): Promise<SceneEventConnection[]> {
    await readUnityFiles();
    const className = nameWithoutExtension(uri);
    if (!className) { return []; }
    return sceneEventConnections.filter(connection => connection.calledClass.indexOf(className) >= 0 || connection.callingClass === className);
}

let initialized = false;
let startupPromise: Promise<void>;
let sceneEventConnections: SceneEventConnection[] = [];
let guidsToClassNames = new Map<string, string>();
let urisToGuids = new Map<Uri, string>();
let urisToGameObjectIds = new Map<Uri, Map<string, string>>();

const unitySceneGlob = '**/Assets/**/*.unity';
const cSharpMetaGlob = '**/Assets/**/*.cs.meta';

export async function readUnityFiles(): Promise<void> {
    if (initialized) {
        return;
    }
    if (!startupPromise) {
        startupPromise = doReadUnityFiles();
    }
    await startupPromise;
    initialized = true;
}

async function doReadUnityFiles(): Promise<void> {
    const metaUris = await workspace.findFiles(cSharpMetaGlob, null);
    for (const uri of metaUris) {
        await findGuid(uri);
    }

// TODO: maybe also look up meta files in the whole project (but don't wait for them)

    const metaWatcher = workspace.createFileSystemWatcher(cSharpMetaGlob, false, true);
    metaWatcher.onDidCreate(findGuid);
    metaWatcher.onDidDelete(uri => {
        const guid = urisToGuids.get(uri);
        if (guid) {
            guidsToClassNames.delete(guid);
            urisToGuids.delete(uri);
        }
    });

    const sceneUris = await workspace.findFiles(unitySceneGlob, null);
    for (const uri of sceneUris) {
        await parseScene(uri);
    }

    const sceneWatcher = workspace.createFileSystemWatcher(unitySceneGlob);
    sceneWatcher.onDidChange(parseScene);
    sceneWatcher.onDidCreate(parseScene);
    sceneWatcher.onDidDelete(uri => sceneEventConnections = sceneEventConnections.filter(connection => connection.sceneUri !== uri));
}

async function findGuid(uri: Uri) {
    try {
        const yamlDocument = await workspace.openTextDocument(uri);
        const tree = yaml.load(yamlDocument.getText()) as any;
        if (tree && tree.guid) {
            urisToGuids.set(uri, tree.guid);
            const className = nameWithoutExtension(uri);
            if (className) {
                guidsToClassNames.set(tree.guid, className);
            }
        }
    } catch (error) {
        logger.warn('Unable to find GUID from %s', uri, error);
    }
}

async function parseScene(uri: Uri) {
    if (!urisToGameObjectIds.has(uri)) {
        urisToGameObjectIds.set(uri, new Map());
    }

    const yamlDocument = await workspace.openTextDocument(uri);
    const yamlText = yamlDocument.getText();

    const startDoc = /^---\s+!u!(\d+)\s+&(\d+)$/gm;
    let match = startDoc.exec(yamlText);
    let endMatch: RegExpExecArray | null;
    while (match && (endMatch = startDoc.exec(yamlText)) !== null) {
        if (match[1] === '1' || match[1] === '114') {
            const itemYaml = yamlText.substring(match.index + match[0].length, endMatch.index);
            parseDoc(itemYaml, match[2], uri);
        }
        match = endMatch;
    }

    if (match && (match[1] === '1' || match[1] === '114')) {
        const itemYaml = yamlText.substring(match.index + match[0].length);
        parseDoc(itemYaml, match[2], uri);
    }

// const yamlText = yamlDocument.getText().replace(/!u!(\d+)/g, '!<tag:unity3d.com,2011:$1>');
//     const trees = yaml.loadAll(yamlText, undefined, { schema: SCHEMA });
//     trees.forEach(tree => {
//         let tag = tree as UnityTag;
// console.log('loaded scene ' + uri);
// console.log(tree);
//         if (tag.data.MonoBehaviour) {
// console.log('got MonoBehaviour!');
//             const behavior = tag.data.MonoBehaviour;
//             const guid = behavior.m_Script?.guid;
//             const gameObjectId = behavior.m_GameObject?.fileID;
//             if (!guid || !gameObjectId) {
//                 return;
//             }
//             for (const field in behavior) {
//                 if (behavior[field]?.m_PersistentCalls) {
//                     for (const call of behavior[field].m_PersistentCalls.m_Calls) {
//                         let calledClass = call.m_TargetAssemblyTypeName.split(',').shift();
//                         sceneEventConnections.push(new SceneEventConnection(
//                             uri,
//                             calledClass,
//                             call.m_MethodName,
//                             field,
//                             guid,
//                             gameObjectId));
//                     }
//                 }
//             }
//         }
//     });
}

function parseDoc(itemYaml: string, fileId: string, uri: Uri) {
    try {
        const tree = yaml.load(itemYaml) as any;
        if (tree.GameObject) {
            urisToGameObjectIds.get(uri)?.set(fileId, tree.GameObject.m_Name);
        } else if (tree.MonoBehaviour) {
            const behavior = tree.MonoBehaviour;
            const guid = behavior.m_Script?.guid;
            const gameObjectId = behavior.m_GameObject?.fileID;
            if (!guid || !gameObjectId) {
                return;
            }
            for (const field in behavior) {
                if (behavior[field]?.m_PersistentCalls) {
                    for (const call of behavior[field].m_PersistentCalls.m_Calls) {
                        let calledClass = call.m_TargetAssemblyTypeName.split(',').shift();
                        sceneEventConnections.push(new SceneEventConnection(
                            uri,
                            calledClass,
                            call.m_MethodName,
                            field,
                            guid,
                            gameObjectId));
                    }
                }
            }
        }
    } catch (error) {
        logger.warn('Unable to parse document %s in scene %s', fileId, uri, error);
    }
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

import { commands, ExtensionContext, languages, window, workspace } from "vscode";
import UnityEventReferencesCodeLensProvider, { showEventReferences } from './code-lens-provider';
import UnityEventReferencesHoverProvider from "./hover-provider";
import { readUnityMetaFiles, readUnitySceneFiles } from "./unity-scene-reader";
import { getExtensionLogger, IVSCodeExtLogger } from "@vscode-logging/logger";

export let logger: IVSCodeExtLogger;

export function activate(context: ExtensionContext) {
	const title = 'Unity Event Lens';
	const logOutputChannel = window.createOutputChannel(title);
	logger = getExtensionLogger({
		extName: title,
		level: getLogLevel(),
		logPath: context.logUri.fsPath,
		logOutputChannel: logOutputChannel,
		sourceLocationTracking: false,
		logConsole: false
	});

	readUnitySceneFiles();
	readUnityMetaFiles();

	const configChangeDisposable = workspace.onDidChangeConfiguration(e => {
		if (e.affectsConfiguration('unity-event-lens.debugLogging')) {
			logger.changeLevel(getLogLevel());
		} else if (e.affectsConfiguration('unity-event-lens.onlyScenesInBuildSettings')) {
			readUnitySceneFiles(true);
		}
	});

	const commandDisposable = commands.registerCommand(
		'unity-event-lens.showEventReferences',
		showEventReferences);

	const docSelector = {
		language: "csharp"
	};

	const codeLensProviderDisposable = languages.registerCodeLensProvider(
		docSelector,
		new UnityEventReferencesCodeLensProvider()
	);

	const hoverProviderDisposable = languages.registerHoverProvider(
		docSelector,
		new UnityEventReferencesHoverProvider());

	context.subscriptions.push(configChangeDisposable);
	context.subscriptions.push(commandDisposable);
	context.subscriptions.push(codeLensProviderDisposable);
	context.subscriptions.push(hoverProviderDisposable);
}

function getLogLevel() {
	return workspace.getConfiguration('unity-event-lens').get('debugLogging') === true ? 'debug' : 'info';
}

// this method is called when your extension is deactivated
export function deactivate() {}

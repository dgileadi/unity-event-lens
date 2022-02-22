import { commands, ExtensionContext, languages, window } from "vscode";
import UnityEventReferencesCodeLensProvider, { showEventReferences } from './code-lens-provider';
import UnityEventReferencesHoverProvider from "./hover-provider";
import { readUnityFiles } from "./unity-scene-reader";
import { getExtensionLogger, IVSCodeExtLogger } from "@vscode-logging/logger";

export let logger: IVSCodeExtLogger;

export function activate(context: ExtensionContext) {
	const title = 'Unity Event Lens';
	const logOutputChannel = window.createOutputChannel(title);
	logger = getExtensionLogger({
		extName: title,
		level: 'info', // See LogLevel type in @vscode-logging/types for possible logLevels
		logPath: context.logUri.fsPath,
		logOutputChannel: logOutputChannel,
		sourceLocationTracking: false,
		logConsole: false
	});

	readUnityFiles();

	let commandDisposable = commands.registerCommand(
		'unity-event-lens.showEventReferences',
		showEventReferences);

	let docSelector = {
		language: "csharp"
	};

	let codeLensProviderDisposable = languages.registerCodeLensProvider(
		docSelector,
		new UnityEventReferencesCodeLensProvider()
	);

	let hoverProviderDisposable = languages.registerHoverProvider(
		docSelector,
		new UnityEventReferencesHoverProvider());

	context.subscriptions.push(commandDisposable);
	context.subscriptions.push(codeLensProviderDisposable);
	context.subscriptions.push(hoverProviderDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

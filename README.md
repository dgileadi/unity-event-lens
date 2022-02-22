# Unity Event Lens

A code lens for event bindings in the Unity editor. In other words, it uses this in the Unity editor:

![Unity event binding](images/event-binding.png)

To show this in Visual Studio Code:

![Unity event code lens](images/code-lens.gif)

This extension was created by David Gileadi and is not affiliated in any way with Unity Technologies.

## Extension Settings

This extension contributes the following settings:

* `unity-event-lens.onlyScenesInBuildSettings`: This extension reads `.unity` scene files to find event bindings. When this setting is `true` (the default) it reads ProjectSettings/EditorBuildSettings.asset to determine which scenes are included in the game, and only looks in those scenes for event bindings. Change this setting to `false` to look for event bindings in all scenes under the Assets directory. This is quite a bit slower but can be necessary if you use scenes in [Addressables](https://docs.unity3d.com/Manual/com.unity.addressables.html) or if you want to display event bindings for scenes in purchased assets, for example.
* `unity-event-lens.useAccurateParsing`: This extension parses C# files to find `UnityEvent` members and the public methods they call. When this setting is `false` (the default) it uses regular expressions to parse them which is fast but occasionally inaccurate. Change this setting to `true` to parse the C# files with an [ANTLR parser](https://github.com/tunnelvisionlabs/antlr4ts) and [C# grammar](https://github.com/antlr/grammars-v4/tree/master/csharp), which is slower but potentially more accurate.
* `unity-event-lens.debugLogging`: Change this setting to `true` to turn on debug logging for this extension, including timings.

## Known Issues

* This extension currently doesn't distinguish between method overloads, so if you have multiple methods with the same name and one of them has an event binding to it, the other overloads will show the same binding too.

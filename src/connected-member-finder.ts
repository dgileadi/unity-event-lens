import { ParserRuleContext } from "antlr4ts";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import { Range, TextDocument, Uri, workspace } from "vscode";
import { logger } from "./extension";
import { parseCSharp } from "./parser/CSharpANTLRParser";
import { Class_definitionContext, Class_member_declarationContext, Field_declarationContext, Method_declarationContext, Namespace_declarationContext, Typed_member_declarationContext } from "./parser/CSharpParser";
import { CSharpParserVisitor } from "./parser/CSharpParserVisitor";
import { getConnections, SceneEventConnection } from "./unity-scene-reader";

let connectedMembers: ConnectedMember[] = [];
let documentUri: Uri;
let version = Number.MIN_VALUE;

export async function findConnectedMembers(document: TextDocument): Promise<ConnectedMember[]> {
    if (documentUri === document.uri && version === document.version) {
        return connectedMembers;
    }

    const connections = await getConnections(document.uri);
    if (!connections) {
        return [];
    }

    let gotMembers = false;
    if (workspace.getConfiguration('unity-event-lens').get('useAccurateParsing') === true) {
        try {
            connectedMembers = new CSharpParsingConnectionRangeFinder().findConnectedMembers(document, connections);
            gotMembers = true;
        } catch (error) {
            logger.warn('Unable to parse C# file %s', document.uri, error);
        }
    }

    if (!gotMembers) {
        connectedMembers = new RegexMatchingConnectionRangeFinder().findConnectedMembers(document, connections);
    }

    documentUri = document.uri;
    version = document.version;
    return connectedMembers;
}

interface ConnectedMemberFinder {
    findConnectedMembers(document: TextDocument, connections: SceneEventConnection[]): ConnectedMember[];
}

export class ConnectedMember {
    public readonly kind: ConnectionEnd;
    public readonly connections: SceneEventConnection[];
    public readonly range: Range;

    public constructor(kind: ConnectionEnd, connections: SceneEventConnection[], range: Range) {
        this.kind = kind;
        this.range = range;
        this.connections = connections;
    }
}

export enum ConnectionEnd {
    event,
    calledMethod
}

class RegexMatchingConnectionRangeFinder implements ConnectedMemberFinder {
    private readonly namespaceRegex = /\bnamespace\s+([\w\.]+)\b/gm;
    private readonly classRegex = /\bpublic\s+class\s+(\w+)\b/gm;
    private readonly unityEventRegex = /\bUnityEvent(<[^>]+>)?\s+(\w+)\b/gm;
    private readonly publicMethodRegex = /\bpublic\s+\w+\s+(\w+)\s*\(/gm;

    findConnectedMembers(document: TextDocument, allConnections: SceneEventConnection[]): ConnectedMember[] {
        const sourceCode = document.getText();
        const connectionRanges: ConnectedMember[] = [];

        const classMatches = this.findAllMatches(this.classRegex, sourceCode).reverse();
        if (!classMatches.length) { return []; }

        const namespaceMatches = this.findAllMatches(this.namespaceRegex, sourceCode).reverse();

        let unityEventMatch: RegExpExecArray | null;
        while ((unityEventMatch = this.unityEventRegex.exec(sourceCode)) !== null) {
            const className = this.findClassName(unityEventMatch, classMatches, namespaceMatches);
            if (!className) { continue; }

            const event = unityEventMatch[2];

            const connections = allConnections.filter(c => c.event === event && c.callingClass === className);

            const inset = unityEventMatch[0].indexOf(event);
            const start = document.positionAt(unityEventMatch.index + inset);
            const end = document.positionAt(unityEventMatch.index + inset + event.length);
            connectionRanges.push(new ConnectedMember(
                ConnectionEnd.event,
                connections,
                new Range(start, end)));
        }

        let methodMatch: RegExpExecArray | null;
        while ((methodMatch = this.publicMethodRegex.exec(sourceCode)) !== null) {
            const className = this.findClassName(methodMatch, classMatches, namespaceMatches);
            if (!className) { continue; }

            const method = methodMatch[1];

            const connections = allConnections.filter(c => c.calledMethod === method && c.calledClass === className);
            if (!connections.length) { continue; }

            const inset = methodMatch[0].indexOf(method);
            const start = document.positionAt(methodMatch.index + inset);
            const end = document.positionAt(methodMatch.index + inset + method.length);
            connectionRanges.push(new ConnectedMember(
                ConnectionEnd.calledMethod,
                connections,
                new Range(start, end)));
        }

        return connectionRanges;
    }

    findAllMatches(regexp: RegExp, sourceCode: string): RegExpExecArray[] {
        const results: RegExpExecArray[] = [];
        let result: RegExpExecArray | null;
        while ((result = regexp.exec(sourceCode)) !== null) {
            results.push(result);
        }
        return results;
    }

    findClassName(memberMatch: RegExpExecArray, classMatches: RegExpExecArray[], namespaceMatches: RegExpExecArray[]): string | undefined {
        const classMatch = classMatches.find(match => match.index < memberMatch.index);
        if (!classMatch) { return; }
        let className = classMatch[1];

        const namespaceMatch = namespaceMatches.find(match => match.index < classMatch.index);
        if (namespaceMatch) {
            className = namespaceMatch[1] + '.' + className;
        }

        return className;
    }
}

class CSharpParsingConnectionRangeFinder extends AbstractParseTreeVisitor<void> implements CSharpParserVisitor<void>, ConnectedMemberFinder {

    private connections: SceneEventConnection[] = [];
    private connectionRanges: ConnectedMember[] = [];

    findConnectedMembers(document: TextDocument, connections: SceneEventConnection[]): ConnectedMember[] {
        const tree = parseCSharp(document.getText());
        this.connections = connections;
        this.visit(tree);
        return this.connectionRanges;
    }

    defaultResult() { return undefined; }

    visitField_declaration(ctx: Field_declarationContext): void {
        const typed = this.findAncestor(ctx, Typed_member_declarationContext);
        if (!typed) { return; }
        const typeName = typed.type_().base_type().class_type()?.namespace_or_type_name()?.identifier(0).text;
        if (typeName !== 'UnityEvent') { return; }

        const className = this.containingClassName(typed);
        if (!className) { return; }

        for (const declarator of ctx.variable_declarators().variable_declarator()) {
            const symbol = declarator.identifier().IDENTIFIER()?.symbol;
            if (!symbol || !symbol.text) { continue; }

            const connections = this.connections.filter(c => c.event === symbol.text && c.callingClass === className);

            const line = symbol.line - 1;
            const char = symbol.charPositionInLine;
            const endChar = char + (symbol.text?.length || 0);
            this.connectionRanges.push(new ConnectedMember(
                ConnectionEnd.event,
                connections,
                new Range(line, char, line, endChar)));
        }
    }

    visitMethod_declaration(ctx: Method_declarationContext): void {
        const symbol = ctx.method_member_name()?.identifier()[0]?.IDENTIFIER()?.symbol;
        if (!symbol || !symbol.text) { return; }

        const memberDeclaration = this.findAncestor(ctx, Class_member_declarationContext);
        if (!memberDeclaration) { return; }
        const declaredPublic = memberDeclaration.all_member_modifiers()?.all_member_modifier().find(member => !!member.PUBLIC());
        if (!declaredPublic) { return; }

        const className = this.containingClassName(memberDeclaration);
        if (!className) { return; }

        const connections = this.connections.filter(c => c.calledMethod === symbol.text && c.calledClass === className);
        if (!connections.length) { return; }

        const line = symbol.line - 1;
        const char = symbol.charPositionInLine;
        const endChar = char + (symbol.text?.length || 0);
        this.connectionRanges.push(new ConnectedMember(
            ConnectionEnd.calledMethod,
            connections,
            new Range(line, char, line, endChar)));
    }

    private containingClassName(ctx: ParserRuleContext): string | undefined {
        const classDefinition = this.findAncestor(ctx, Class_definitionContext);
        if (!classDefinition) { return; }
        let className = classDefinition.identifier().text;

        const namespaceDeclaration = this.findAncestor(ctx, Namespace_declarationContext);
        if (namespaceDeclaration) {
            className = namespaceDeclaration._qi.text + '.' + className;
        }

        return className;
    }

    private findAncestor<T extends ParserRuleContext>(ctx: ParserRuleContext, ctxType: {
        new(...args: any[]): T;
    }): T | undefined {
        let parent = ctx.parent;
        while (parent && !(parent instanceof ctxType)) {
            parent = parent.parent;
        }
        return parent;
    }
}

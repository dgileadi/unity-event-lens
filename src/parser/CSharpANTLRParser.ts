import { CharStreams, CommonTokenStream, Lexer, ListTokenSource, Token } from "antlr4ts";
import { CSharpLexer } from "./CSharpLexer";
import { Compilation_unitContext, CSharpParser } from "./CSharpParser";
import { CSharpPreprocessorParser } from "./CSharpPreprocessorParser";

export function parseCSharp(sourceCode: string): Compilation_unitContext {
    let codeTokens: Token[] = [];
    let commentTokens: Token[] = [];

    let preprocessorLexer = new CSharpLexer(CharStreams.fromString(sourceCode));
    // Collect all tokens with lexer (CSharpLexer.g4).
    var tokens = preprocessorLexer.getAllTokens();
    var directiveTokens: Token[] = [];
    var directiveTokenSource = new ListTokenSource(directiveTokens);
    var directiveTokenStream = new CommonTokenStream(directiveTokenSource, CSharpLexer.DIRECTIVE);
    let preprocessorParser = new CSharpPreprocessorParser(directiveTokenStream);

    let index = 0;
    let compiledTokens = true;
    while (index < tokens.length) {
        var token = tokens[index];
        if (token.type === CSharpLexer.SHARP) {
            directiveTokens = [];
            let directiveTokenIndex = index + 1;
            // Collect all preprocessor directive tokens.
            while (directiveTokenIndex < tokens.length &&
                tokens[directiveTokenIndex].type !== CSharpLexer.EOF &&
                tokens[directiveTokenIndex].type !== CSharpLexer.DIRECTIVE_NEW_LINE &&
                tokens[directiveTokenIndex].type !== CSharpLexer.SHARP) {
                if (tokens[directiveTokenIndex].channel === CSharpLexer.COMMENTS_CHANNEL) {
                    commentTokens.push(tokens[directiveTokenIndex]);
                }
                else if (tokens[directiveTokenIndex].channel !== Lexer.HIDDEN) {
                    directiveTokens.push(tokens[directiveTokenIndex]);
                }
                directiveTokenIndex++;
            }

            directiveTokenSource = new ListTokenSource(directiveTokens);
            directiveTokenStream = new CommonTokenStream(directiveTokenSource, CSharpLexer.DIRECTIVE);
            preprocessorParser.inputStream = directiveTokenStream;
            preprocessorParser.reset();
            // Parse condition in preprocessor directive (based on CSharpPreprocessorParser.g4 grammar).
            let directive = preprocessorParser.preprocessor_directive();
            // if true than next code is valid and not ignored.
            compiledTokens = directive.value;
            let directiveStr = tokens[index + 1].text?.trim();
            if ("line" === directiveStr || "error" === directiveStr || "warning" === directiveStr || "define" === directiveStr || "endregion" === directiveStr || "endif" === directiveStr || "pragma" === directiveStr) {
                compiledTokens = true;
            }
            let conditionalSymbol = null;
            if ("define" === tokens[index + 1].text) {
                // add to the conditional symbols
                conditionalSymbol = tokens[index + 2].text || '';
                preprocessorParser.conditionalSymbols.add(conditionalSymbol);
            }
            if ("undef" === tokens[index + 1].text) {
                conditionalSymbol = tokens[index + 2].text || '';
                preprocessorParser.conditionalSymbols.delete(conditionalSymbol);
            }
            index = directiveTokenIndex - 1;
        }
        else if (token.channel === CSharpLexer.COMMENTS_CHANNEL) {
            commentTokens.push(token); // Collect comment tokens (if required).
        }
        else if (token.channel !== Lexer.HIDDEN && token.type !== CSharpLexer.DIRECTIVE_NEW_LINE && compiledTokens) {
            codeTokens.push(token); // Collect code tokens.
        }
        index++;
    }

    // At second stage tokens parsed in usual way.
    var codeTokenSource = new ListTokenSource(tokens);
    var codeTokenStream = new CommonTokenStream(codeTokenSource);
    let parser = new CSharpParser(codeTokenStream);
    // Parse syntax tree (CSharpParser.g4)
    return parser.compilation_unit();
}

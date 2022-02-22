// Generated from src/grammar/CSharpPreprocessorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { PreprocessorDeclarationContext } from "./CSharpPreprocessorParser";
import { PreprocessorConditionalContext } from "./CSharpPreprocessorParser";
import { PreprocessorLineContext } from "./CSharpPreprocessorParser";
import { PreprocessorDiagnosticContext } from "./CSharpPreprocessorParser";
import { PreprocessorRegionContext } from "./CSharpPreprocessorParser";
import { PreprocessorPragmaContext } from "./CSharpPreprocessorParser";
import { PreprocessorNullableContext } from "./CSharpPreprocessorParser";
import { Preprocessor_directiveContext } from "./CSharpPreprocessorParser";
import { Directive_new_line_or_sharpContext } from "./CSharpPreprocessorParser";
import { Preprocessor_expressionContext } from "./CSharpPreprocessorParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CSharpPreprocessorParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CSharpPreprocessorParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `preprocessorDeclaration`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorDeclaration?: (ctx: PreprocessorDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorLine`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorLine?: (ctx: PreprocessorLineContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorDiagnostic`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorDiagnostic?: (ctx: PreprocessorDiagnosticContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorRegion`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorRegion?: (ctx: PreprocessorRegionContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => Result;

	/**
	 * Visit a parse tree produced by the `preprocessorNullable`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessorNullable?: (ctx: PreprocessorNullableContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessor_directive?: (ctx: Preprocessor_directiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpPreprocessorParser.directive_new_line_or_sharp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDirective_new_line_or_sharp?: (ctx: Directive_new_line_or_sharpContext) => Result;

	/**
	 * Visit a parse tree produced by `CSharpPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => Result;
}


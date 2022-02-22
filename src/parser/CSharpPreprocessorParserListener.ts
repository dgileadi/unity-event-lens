// Generated from src/grammar/CSharpPreprocessorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CSharpPreprocessorParser`.
 */
export interface CSharpPreprocessorParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `preprocessorDeclaration`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorDeclaration?: (ctx: PreprocessorDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorDeclaration`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorDeclaration?: (ctx: PreprocessorDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorConditional`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorConditional?: (ctx: PreprocessorConditionalContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorLine`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorLine?: (ctx: PreprocessorLineContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorLine`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorLine?: (ctx: PreprocessorLineContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorDiagnostic`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorDiagnostic?: (ctx: PreprocessorDiagnosticContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorDiagnostic`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorDiagnostic?: (ctx: PreprocessorDiagnosticContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorRegion`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorRegion?: (ctx: PreprocessorRegionContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorRegion`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorRegion?: (ctx: PreprocessorRegionContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorPragma`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorPragma?: (ctx: PreprocessorPragmaContext) => void;

	/**
	 * Enter a parse tree produced by the `preprocessorNullable`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessorNullable?: (ctx: PreprocessorNullableContext) => void;
	/**
	 * Exit a parse tree produced by the `preprocessorNullable`
	 * labeled alternative in `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessorNullable?: (ctx: PreprocessorNullableContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	enterPreprocessor_directive?: (ctx: Preprocessor_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpPreprocessorParser.preprocessor_directive`.
	 * @param ctx the parse tree
	 */
	exitPreprocessor_directive?: (ctx: Preprocessor_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpPreprocessorParser.directive_new_line_or_sharp`.
	 * @param ctx the parse tree
	 */
	enterDirective_new_line_or_sharp?: (ctx: Directive_new_line_or_sharpContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpPreprocessorParser.directive_new_line_or_sharp`.
	 * @param ctx the parse tree
	 */
	exitDirective_new_line_or_sharp?: (ctx: Directive_new_line_or_sharpContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	enterPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpPreprocessorParser.preprocessor_expression`.
	 * @param ctx the parse tree
	 */
	exitPreprocessor_expression?: (ctx: Preprocessor_expressionContext) => void;
}


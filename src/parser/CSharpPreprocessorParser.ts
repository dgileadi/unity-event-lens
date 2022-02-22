// Generated from src/grammar/CSharpPreprocessorParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CSharpPreprocessorParserListener } from "./CSharpPreprocessorParserListener";
import { CSharpPreprocessorParserVisitor } from "./CSharpPreprocessorParserVisitor";
import { CSharpPreprocessorParserBase } from "./CSharpPreprocessorBase";


export class CSharpPreprocessorParser extends CSharpPreprocessorParserBase {
	public static readonly BYTE_ORDER_MARK = 1;
	public static readonly SINGLE_LINE_DOC_COMMENT = 2;
	public static readonly EMPTY_DELIMITED_DOC_COMMENT = 3;
	public static readonly DELIMITED_DOC_COMMENT = 4;
	public static readonly SINGLE_LINE_COMMENT = 5;
	public static readonly DELIMITED_COMMENT = 6;
	public static readonly WHITESPACES = 7;
	public static readonly SHARP = 8;
	public static readonly ABSTRACT = 9;
	public static readonly ADD = 10;
	public static readonly ALIAS = 11;
	public static readonly ARGLIST = 12;
	public static readonly AS = 13;
	public static readonly ASCENDING = 14;
	public static readonly ASYNC = 15;
	public static readonly AWAIT = 16;
	public static readonly BASE = 17;
	public static readonly BOOL = 18;
	public static readonly BREAK = 19;
	public static readonly BY = 20;
	public static readonly BYTE = 21;
	public static readonly CASE = 22;
	public static readonly CATCH = 23;
	public static readonly CHAR = 24;
	public static readonly CHECKED = 25;
	public static readonly CLASS = 26;
	public static readonly CONST = 27;
	public static readonly CONTINUE = 28;
	public static readonly DECIMAL = 29;
	public static readonly DEFAULT = 30;
	public static readonly DELEGATE = 31;
	public static readonly DESCENDING = 32;
	public static readonly DO = 33;
	public static readonly DOUBLE = 34;
	public static readonly DYNAMIC = 35;
	public static readonly ELSE = 36;
	public static readonly ENUM = 37;
	public static readonly EQUALS = 38;
	public static readonly EVENT = 39;
	public static readonly EXPLICIT = 40;
	public static readonly EXTERN = 41;
	public static readonly FALSE = 42;
	public static readonly FINALLY = 43;
	public static readonly FIXED = 44;
	public static readonly FLOAT = 45;
	public static readonly FOR = 46;
	public static readonly FOREACH = 47;
	public static readonly FROM = 48;
	public static readonly GET = 49;
	public static readonly GOTO = 50;
	public static readonly GROUP = 51;
	public static readonly IF = 52;
	public static readonly IMPLICIT = 53;
	public static readonly IN = 54;
	public static readonly INT = 55;
	public static readonly INTERFACE = 56;
	public static readonly INTERNAL = 57;
	public static readonly INTO = 58;
	public static readonly IS = 59;
	public static readonly JOIN = 60;
	public static readonly LET = 61;
	public static readonly LOCK = 62;
	public static readonly LONG = 63;
	public static readonly NAMEOF = 64;
	public static readonly NAMESPACE = 65;
	public static readonly NEW = 66;
	public static readonly NULL_ = 67;
	public static readonly OBJECT = 68;
	public static readonly ON = 69;
	public static readonly OPERATOR = 70;
	public static readonly ORDERBY = 71;
	public static readonly OUT = 72;
	public static readonly OVERRIDE = 73;
	public static readonly PARAMS = 74;
	public static readonly PARTIAL = 75;
	public static readonly PRIVATE = 76;
	public static readonly PROTECTED = 77;
	public static readonly PUBLIC = 78;
	public static readonly READONLY = 79;
	public static readonly REF = 80;
	public static readonly REMOVE = 81;
	public static readonly RETURN = 82;
	public static readonly SBYTE = 83;
	public static readonly SEALED = 84;
	public static readonly SELECT = 85;
	public static readonly SET = 86;
	public static readonly SHORT = 87;
	public static readonly SIZEOF = 88;
	public static readonly STACKALLOC = 89;
	public static readonly STATIC = 90;
	public static readonly STRING = 91;
	public static readonly STRUCT = 92;
	public static readonly SWITCH = 93;
	public static readonly THIS = 94;
	public static readonly THROW = 95;
	public static readonly TRUE = 96;
	public static readonly TRY = 97;
	public static readonly TYPEOF = 98;
	public static readonly UINT = 99;
	public static readonly ULONG = 100;
	public static readonly UNCHECKED = 101;
	public static readonly UNMANAGED = 102;
	public static readonly UNSAFE = 103;
	public static readonly USHORT = 104;
	public static readonly USING = 105;
	public static readonly VAR = 106;
	public static readonly VIRTUAL = 107;
	public static readonly VOID = 108;
	public static readonly VOLATILE = 109;
	public static readonly WHEN = 110;
	public static readonly WHERE = 111;
	public static readonly WHILE = 112;
	public static readonly YIELD = 113;
	public static readonly IDENTIFIER = 114;
	public static readonly LITERAL_ACCESS = 115;
	public static readonly INTEGER_LITERAL = 116;
	public static readonly HEX_INTEGER_LITERAL = 117;
	public static readonly BIN_INTEGER_LITERAL = 118;
	public static readonly REAL_LITERAL = 119;
	public static readonly CHARACTER_LITERAL = 120;
	public static readonly REGULAR_STRING = 121;
	public static readonly VERBATIUM_STRING = 122;
	public static readonly INTERPOLATED_REGULAR_STRING_START = 123;
	public static readonly INTERPOLATED_VERBATIUM_STRING_START = 124;
	public static readonly OPEN_BRACE = 125;
	public static readonly CLOSE_BRACE = 126;
	public static readonly OPEN_BRACKET = 127;
	public static readonly CLOSE_BRACKET = 128;
	public static readonly OPEN_PARENS = 129;
	public static readonly CLOSE_PARENS = 130;
	public static readonly DOT = 131;
	public static readonly COMMA = 132;
	public static readonly COLON = 133;
	public static readonly SEMICOLON = 134;
	public static readonly PLUS = 135;
	public static readonly MINUS = 136;
	public static readonly STAR = 137;
	public static readonly DIV = 138;
	public static readonly PERCENT = 139;
	public static readonly AMP = 140;
	public static readonly BITWISE_OR = 141;
	public static readonly CARET = 142;
	public static readonly BANG = 143;
	public static readonly TILDE = 144;
	public static readonly ASSIGNMENT = 145;
	public static readonly LT = 146;
	public static readonly GT = 147;
	public static readonly INTERR = 148;
	public static readonly DOUBLE_COLON = 149;
	public static readonly OP_COALESCING = 150;
	public static readonly OP_INC = 151;
	public static readonly OP_DEC = 152;
	public static readonly OP_AND = 153;
	public static readonly OP_OR = 154;
	public static readonly OP_PTR = 155;
	public static readonly OP_EQ = 156;
	public static readonly OP_NE = 157;
	public static readonly OP_LE = 158;
	public static readonly OP_GE = 159;
	public static readonly OP_ADD_ASSIGNMENT = 160;
	public static readonly OP_SUB_ASSIGNMENT = 161;
	public static readonly OP_MULT_ASSIGNMENT = 162;
	public static readonly OP_DIV_ASSIGNMENT = 163;
	public static readonly OP_MOD_ASSIGNMENT = 164;
	public static readonly OP_AND_ASSIGNMENT = 165;
	public static readonly OP_OR_ASSIGNMENT = 166;
	public static readonly OP_XOR_ASSIGNMENT = 167;
	public static readonly OP_LEFT_SHIFT = 168;
	public static readonly OP_LEFT_SHIFT_ASSIGNMENT = 169;
	public static readonly OP_COALESCING_ASSIGNMENT = 170;
	public static readonly OP_RANGE = 171;
	public static readonly DOUBLE_CURLY_INSIDE = 172;
	public static readonly OPEN_BRACE_INSIDE = 173;
	public static readonly REGULAR_CHAR_INSIDE = 174;
	public static readonly VERBATIUM_DOUBLE_QUOTE_INSIDE = 175;
	public static readonly DOUBLE_QUOTE_INSIDE = 176;
	public static readonly REGULAR_STRING_INSIDE = 177;
	public static readonly VERBATIUM_INSIDE_STRING = 178;
	public static readonly CLOSE_BRACE_INSIDE = 179;
	public static readonly FORMAT_STRING = 180;
	public static readonly DIRECTIVE_WHITESPACES = 181;
	public static readonly DIGITS = 182;
	public static readonly DEFINE = 183;
	public static readonly UNDEF = 184;
	public static readonly ELIF = 185;
	public static readonly ENDIF = 186;
	public static readonly LINE = 187;
	public static readonly ERROR = 188;
	public static readonly WARNING = 189;
	public static readonly REGION = 190;
	public static readonly ENDREGION = 191;
	public static readonly PRAGMA = 192;
	public static readonly NULLABLE = 193;
	public static readonly DIRECTIVE_HIDDEN = 194;
	public static readonly CONDITIONAL_SYMBOL = 195;
	public static readonly DIRECTIVE_NEW_LINE = 196;
	public static readonly TEXT = 197;
	public static readonly DOUBLE_CURLY_CLOSE_INSIDE = 198;
	public static readonly RULE_preprocessor_directive = 0;
	public static readonly RULE_directive_new_line_or_sharp = 1;
	public static readonly RULE_preprocessor_expression = 2;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"preprocessor_directive", "directive_new_line_or_sharp", "preprocessor_expression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'\u00EFu00BB\u00BF'", undefined, "'/***/'", undefined, undefined,
		undefined, undefined, "'#'", "'abstract'", "'add'", "'alias'", "'__arglist'",
		"'as'", "'ascending'", "'async'", "'await'", "'base'", "'bool'", "'break'",
		"'by'", "'byte'", "'case'", "'catch'", "'char'", "'checked'", "'class'",
		"'const'", "'continue'", "'decimal'", "'default'", "'delegate'", "'descending'",
		"'do'", "'double'", "'dynamic'", "'else'", "'enum'", "'equals'", "'event'",
		"'explicit'", "'extern'", "'false'", "'finally'", "'fixed'", "'float'",
		"'for'", "'foreach'", "'from'", "'get'", "'goto'", "'group'", "'if'",
		"'implicit'", "'in'", "'int'", "'interface'", "'internal'", "'into'",
		"'is'", "'join'", "'let'", "'lock'", "'long'", "'nameof'", "'namespace'",
		"'new'", "'null'", "'object'", "'on'", "'operator'", "'orderby'", "'out'",
		"'override'", "'params'", "'partial'", "'private'", "'protected'", "'public'",
		"'readonly'", "'ref'", "'remove'", "'return'", "'sbyte'", "'sealed'",
		"'select'", "'set'", "'short'", "'sizeof'", "'stackalloc'", "'static'",
		"'string'", "'struct'", "'switch'", "'this'", "'throw'", "'true'", "'try'",
		"'typeof'", "'uint'", "'ulong'", "'unchecked'", "'unmanaged'", "'unsafe'",
		"'ushort'", "'using'", "'var'", "'virtual'", "'void'", "'volatile'", "'when'",
		"'where'", "'while'", "'yield'", undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		"'{'", "'}'", "'['", "']'", "'('", "')'", "'.'", "','", "':'", "';'",
		"'+'", "'-'", "'*'", "'/'", "'%'", "'&'", "'|'", "'^'", "'!'", "'~'",
		"'='", "'<'", "'>'", "'?'", "'::'", "'??'", "'++'", "'--'", "'&&'", "'||'",
		"'->'", "'=='", "'!='", "'<='", "'>='", "'+='", "'-='", "'*='", "'/='",
		"'%='", "'&='", "'|='", "'^='", "'<<'", "'<<='", "'??='", "'..'", "'{{'",
		undefined, undefined, undefined, undefined, undefined, undefined, undefined,
		undefined, undefined, undefined, "'define'", "'undef'", "'elif'", "'endif'",
		"'line'", undefined, undefined, undefined, undefined, undefined, undefined,
		"'hidden'", undefined, undefined, undefined, "'}}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "BYTE_ORDER_MARK", "SINGLE_LINE_DOC_COMMENT", "EMPTY_DELIMITED_DOC_COMMENT",
		"DELIMITED_DOC_COMMENT", "SINGLE_LINE_COMMENT", "DELIMITED_COMMENT", "WHITESPACES",
		"SHARP", "ABSTRACT", "ADD", "ALIAS", "ARGLIST", "AS", "ASCENDING", "ASYNC",
		"AWAIT", "BASE", "BOOL", "BREAK", "BY", "BYTE", "CASE", "CATCH", "CHAR",
		"CHECKED", "CLASS", "CONST", "CONTINUE", "DECIMAL", "DEFAULT", "DELEGATE",
		"DESCENDING", "DO", "DOUBLE", "DYNAMIC", "ELSE", "ENUM", "EQUALS", "EVENT",
		"EXPLICIT", "EXTERN", "FALSE", "FINALLY", "FIXED", "FLOAT", "FOR", "FOREACH",
		"FROM", "GET", "GOTO", "GROUP", "IF", "IMPLICIT", "IN", "INT", "INTERFACE",
		"INTERNAL", "INTO", "IS", "JOIN", "LET", "LOCK", "LONG", "NAMEOF", "NAMESPACE",
		"NEW", "NULL_", "OBJECT", "ON", "OPERATOR", "ORDERBY", "OUT", "OVERRIDE",
		"PARAMS", "PARTIAL", "PRIVATE", "PROTECTED", "PUBLIC", "READONLY", "REF",
		"REMOVE", "RETURN", "SBYTE", "SEALED", "SELECT", "SET", "SHORT", "SIZEOF",
		"STACKALLOC", "STATIC", "STRING", "STRUCT", "SWITCH", "THIS", "THROW",
		"TRUE", "TRY", "TYPEOF", "UINT", "ULONG", "UNCHECKED", "UNMANAGED", "UNSAFE",
		"USHORT", "USING", "VAR", "VIRTUAL", "VOID", "VOLATILE", "WHEN", "WHERE",
		"WHILE", "YIELD", "IDENTIFIER", "LITERAL_ACCESS", "INTEGER_LITERAL", "HEX_INTEGER_LITERAL",
		"BIN_INTEGER_LITERAL", "REAL_LITERAL", "CHARACTER_LITERAL", "REGULAR_STRING",
		"VERBATIUM_STRING", "INTERPOLATED_REGULAR_STRING_START", "INTERPOLATED_VERBATIUM_STRING_START",
		"OPEN_BRACE", "CLOSE_BRACE", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PARENS",
		"CLOSE_PARENS", "DOT", "COMMA", "COLON", "SEMICOLON", "PLUS", "MINUS",
		"STAR", "DIV", "PERCENT", "AMP", "BITWISE_OR", "CARET", "BANG", "TILDE",
		"ASSIGNMENT", "LT", "GT", "INTERR", "DOUBLE_COLON", "OP_COALESCING", "OP_INC",
		"OP_DEC", "OP_AND", "OP_OR", "OP_PTR", "OP_EQ", "OP_NE", "OP_LE", "OP_GE",
		"OP_ADD_ASSIGNMENT", "OP_SUB_ASSIGNMENT", "OP_MULT_ASSIGNMENT", "OP_DIV_ASSIGNMENT",
		"OP_MOD_ASSIGNMENT", "OP_AND_ASSIGNMENT", "OP_OR_ASSIGNMENT", "OP_XOR_ASSIGNMENT",
		"OP_LEFT_SHIFT", "OP_LEFT_SHIFT_ASSIGNMENT", "OP_COALESCING_ASSIGNMENT",
		"OP_RANGE", "DOUBLE_CURLY_INSIDE", "OPEN_BRACE_INSIDE", "REGULAR_CHAR_INSIDE",
		"VERBATIUM_DOUBLE_QUOTE_INSIDE", "DOUBLE_QUOTE_INSIDE", "REGULAR_STRING_INSIDE",
		"VERBATIUM_INSIDE_STRING", "CLOSE_BRACE_INSIDE", "FORMAT_STRING", "DIRECTIVE_WHITESPACES",
		"DIGITS", "DEFINE", "UNDEF", "ELIF", "ENDIF", "LINE", "ERROR", "WARNING",
		"REGION", "ENDREGION", "PRAGMA", "NULLABLE", "DIRECTIVE_HIDDEN", "CONDITIONAL_SYMBOL",
		"DIRECTIVE_NEW_LINE", "TEXT", "DOUBLE_CURLY_CLOSE_INSIDE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSharpPreprocessorParser._LITERAL_NAMES, CSharpPreprocessorParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSharpPreprocessorParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSharpPreprocessorParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSharpPreprocessorParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSharpPreprocessorParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSharpPreprocessorParser._ATN, this);
	}
	// @RuleVersion(0)
	public preprocessor_directive(): Preprocessor_directiveContext {
		let _localctx: Preprocessor_directiveContext = new Preprocessor_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSharpPreprocessorParser.RULE_preprocessor_directive);
		let _la: number;
		try {
			this.state = 80;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpPreprocessorParser.DEFINE:
				_localctx = new PreprocessorDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 6;
				this.match(CSharpPreprocessorParser.DEFINE);
				this.state = 7;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 8;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveDefine();
				}
				break;
			case CSharpPreprocessorParser.UNDEF:
				_localctx = new PreprocessorDeclarationContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 11;
				this.match(CSharpPreprocessorParser.UNDEF);
				this.state = 12;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				this.state = 13;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveUndef();
				}
				break;
			case CSharpPreprocessorParser.IF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 16;
				this.match(CSharpPreprocessorParser.IF);
				this.state = 17;
				(_localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 18;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveIf();
				}
				break;
			case CSharpPreprocessorParser.ELIF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 21;
				this.match(CSharpPreprocessorParser.ELIF);
				this.state = 22;
				(_localctx as PreprocessorConditionalContext)._expr = this.preprocessor_expression(0);
				this.state = 23;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveElif();
				}
				break;
			case CSharpPreprocessorParser.ELSE:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 26;
				this.match(CSharpPreprocessorParser.ELSE);
				this.state = 27;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveElse();
				}
				break;
			case CSharpPreprocessorParser.ENDIF:
				_localctx = new PreprocessorConditionalContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 30;
				this.match(CSharpPreprocessorParser.ENDIF);
				this.state = 31;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveEndif();
				}
				break;
			case CSharpPreprocessorParser.LINE:
				_localctx = new PreprocessorLineContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 34;
				this.match(CSharpPreprocessorParser.LINE);
				this.state = 41;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpPreprocessorParser.DIGITS:
					{
					this.state = 35;
					this.match(CSharpPreprocessorParser.DIGITS);
					this.state = 37;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpPreprocessorParser.STRING) {
						{
						this.state = 36;
						this.match(CSharpPreprocessorParser.STRING);
						}
					}

					}
					break;
				case CSharpPreprocessorParser.DEFAULT:
					{
					this.state = 39;
					this.match(CSharpPreprocessorParser.DEFAULT);
					}
					break;
				case CSharpPreprocessorParser.DIRECTIVE_HIDDEN:
					{
					this.state = 40;
					this.match(CSharpPreprocessorParser.DIRECTIVE_HIDDEN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 43;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveLine();
				}
				break;
			case CSharpPreprocessorParser.ERROR:
				_localctx = new PreprocessorDiagnosticContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 46;
				this.match(CSharpPreprocessorParser.ERROR);
				this.state = 47;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 48;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveError();
				}
				break;
			case CSharpPreprocessorParser.WARNING:
				_localctx = new PreprocessorDiagnosticContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 51;
				this.match(CSharpPreprocessorParser.WARNING);
				this.state = 52;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 53;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveWarning();
				}
				break;
			case CSharpPreprocessorParser.REGION:
				_localctx = new PreprocessorRegionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 56;
				this.match(CSharpPreprocessorParser.REGION);
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpPreprocessorParser.TEXT) {
					{
					this.state = 57;
					this.match(CSharpPreprocessorParser.TEXT);
					}
				}

				this.state = 60;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveRegion();
				}
				break;
			case CSharpPreprocessorParser.ENDREGION:
				_localctx = new PreprocessorRegionContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 63;
				this.match(CSharpPreprocessorParser.ENDREGION);
				this.state = 65;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpPreprocessorParser.TEXT) {
					{
					this.state = 64;
					this.match(CSharpPreprocessorParser.TEXT);
					}
				}

				this.state = 67;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveEndregion();
				}
				break;
			case CSharpPreprocessorParser.PRAGMA:
				_localctx = new PreprocessorPragmaContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 70;
				this.match(CSharpPreprocessorParser.PRAGMA);
				this.state = 71;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 72;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectivePragma();
				}
				break;
			case CSharpPreprocessorParser.NULLABLE:
				_localctx = new PreprocessorNullableContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 75;
				this.match(CSharpPreprocessorParser.NULLABLE);
				this.state = 76;
				this.match(CSharpPreprocessorParser.TEXT);
				this.state = 77;
				this.directive_new_line_or_sharp();
				 this.OnPreprocessorDirectiveNullable();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		let _localctx: Directive_new_line_or_sharpContext = new Directive_new_line_or_sharpContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CSharpPreprocessorParser.RULE_directive_new_line_or_sharp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			_la = this._input.LA(1);
			if (!(_la === CSharpPreprocessorParser.EOF || _la === CSharpPreprocessorParser.DIRECTIVE_NEW_LINE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public preprocessor_expression(): Preprocessor_expressionContext;
	public preprocessor_expression(_p: number): Preprocessor_expressionContext;
	// @RuleVersion(0)
	public preprocessor_expression(_p?: number): Preprocessor_expressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Preprocessor_expressionContext = new Preprocessor_expressionContext(this._ctx, _parentState);
		let _prevctx: Preprocessor_expressionContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, CSharpPreprocessorParser.RULE_preprocessor_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpPreprocessorParser.TRUE:
				{
				this.state = 85;
				this.match(CSharpPreprocessorParser.TRUE);
				 this.OnPreprocessorExpressionTrue();
				}
				break;
			case CSharpPreprocessorParser.FALSE:
				{
				this.state = 87;
				this.match(CSharpPreprocessorParser.FALSE);
				 this.OnPreprocessorExpressionFalse();
				}
				break;
			case CSharpPreprocessorParser.CONDITIONAL_SYMBOL:
				{
				this.state = 89;
				this.match(CSharpPreprocessorParser.CONDITIONAL_SYMBOL);
				 this.OnPreprocessorExpressionConditionalSymbol();
				}
				break;
			case CSharpPreprocessorParser.OPEN_PARENS:
				{
				this.state = 91;
				this.match(CSharpPreprocessorParser.OPEN_PARENS);
				this.state = 92;
				_localctx._expr = this.preprocessor_expression(0);
				this.state = 93;
				this.match(CSharpPreprocessorParser.CLOSE_PARENS);
				 this.OnPreprocessorExpressionConditionalOpenParens();
				}
				break;
			case CSharpPreprocessorParser.BANG:
				{
				this.state = 96;
				this.match(CSharpPreprocessorParser.BANG);
				this.state = 97;
				_localctx._expr = this.preprocessor_expression(5);
				 this.OnPreprocessorExpressionConditionalBang();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 122;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 103;
						this.match(CSharpPreprocessorParser.OP_EQ);
						this.state = 104;
						_localctx._expr2 = this.preprocessor_expression(5);
						 this.OnPreprocessorExpressionConditionalEq();
						}
						break;

					case 2:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 107;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 108;
						this.match(CSharpPreprocessorParser.OP_NE);
						this.state = 109;
						_localctx._expr2 = this.preprocessor_expression(4);
						 this.OnPreprocessorExpressionConditionalNe();
						}
						break;

					case 3:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 113;
						this.match(CSharpPreprocessorParser.OP_AND);
						this.state = 114;
						_localctx._expr2 = this.preprocessor_expression(3);
						 this.OnPreprocessorExpressionConditionalAnd();
						}
						break;

					case 4:
						{
						_localctx = new Preprocessor_expressionContext(_parentctx, _parentState);
						_localctx._expr1 = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, CSharpPreprocessorParser.RULE_preprocessor_expression);
						this.state = 117;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 118;
						this.match(CSharpPreprocessorParser.OP_OR);
						this.state = 119;
						_localctx._expr2 = this.preprocessor_expression(2);
						 this.OnPreprocessorExpressionConditionalOr();
						}
						break;
					}
					}
				}
				this.state = 126;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.preprocessor_expression_sempred(_localctx as Preprocessor_expressionContext, predIndex);
		}
		return true;
	}
	private preprocessor_expression_sempred(_localctx: Preprocessor_expressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);

		case 2:
			return this.precpred(this._ctx, 2);

		case 3:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC8\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05" +
		"\x02(\n\x02\x03\x02\x03\x02\x05\x02,\n\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x05\x02=\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x05\x02D\n\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x05\x02S\n\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04g\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04}\n\x04\f\x04\x0E\x04\x80\v\x04\x03" +
		"\x04\x02\x02\x03\x06\x05\x02\x02\x04\x02\x06\x02\x02\x03\x03\x03\xC6\xC6" +
		"\x02\x97\x02R\x03\x02\x02\x02\x04T\x03\x02\x02\x02\x06f\x03\x02\x02\x02" +
		"\b\t\x07\xB9\x02\x02\t\n\x07\xC5\x02\x02\n\v\x05\x04\x03\x02\v\f\b\x02" +
		"\x01\x02\fS\x03\x02\x02\x02\r\x0E\x07\xBA\x02\x02\x0E\x0F\x07\xC5\x02" +
		"\x02\x0F\x10\x05\x04\x03\x02\x10\x11\b\x02\x01\x02\x11S\x03\x02\x02\x02" +
		"\x12\x13\x076\x02\x02\x13\x14\x05\x06\x04\x02\x14\x15\x05\x04\x03\x02" +
		"\x15\x16\b\x02\x01\x02\x16S\x03\x02\x02\x02\x17\x18\x07\xBB\x02\x02\x18" +
		"\x19\x05\x06\x04\x02\x19\x1A\x05\x04\x03\x02\x1A\x1B\b\x02\x01\x02\x1B" +
		"S\x03\x02\x02\x02\x1C\x1D\x07&\x02\x02\x1D\x1E\x05\x04\x03\x02\x1E\x1F" +
		"\b\x02\x01\x02\x1FS\x03\x02\x02\x02 !\x07\xBC\x02\x02!\"\x05\x04\x03\x02" +
		"\"#\b\x02\x01\x02#S\x03\x02\x02\x02$+\x07\xBD\x02\x02%\'\x07\xB8\x02\x02" +
		"&(\x07]\x02\x02\'&\x03\x02\x02\x02\'(\x03\x02\x02\x02(,\x03\x02\x02\x02" +
		"),\x07 \x02\x02*,\x07\xC4\x02\x02+%\x03\x02\x02\x02+)\x03\x02\x02\x02" +
		"+*\x03\x02\x02\x02,-\x03\x02\x02\x02-.\x05\x04\x03\x02./\b\x02\x01\x02" +
		"/S\x03\x02\x02\x0201\x07\xBE\x02\x0212\x07\xC7\x02\x0223\x05\x04\x03\x02" +
		"34\b\x02\x01\x024S\x03\x02\x02\x0256\x07\xBF\x02\x0267\x07\xC7\x02\x02" +
		"78\x05\x04\x03\x0289\b\x02\x01\x029S\x03\x02\x02\x02:<\x07\xC0\x02\x02" +
		";=\x07\xC7\x02\x02<;\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x03\x02\x02\x02" +
		">?\x05\x04\x03\x02?@\b\x02\x01\x02@S\x03\x02\x02\x02AC\x07\xC1\x02\x02" +
		"BD\x07\xC7\x02\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EF\x05\x04\x03\x02FG\b\x02\x01\x02GS\x03\x02\x02\x02HI\x07\xC2\x02\x02" +
		"IJ\x07\xC7\x02\x02JK\x05\x04\x03\x02KL\b\x02\x01\x02LS\x03\x02\x02\x02" +
		"MN\x07\xC3\x02\x02NO\x07\xC7\x02\x02OP\x05\x04\x03\x02PQ\b\x02\x01\x02" +
		"QS\x03\x02\x02\x02R\b\x03\x02\x02\x02R\r\x03\x02\x02\x02R\x12\x03\x02" +
		"\x02\x02R\x17\x03\x02\x02\x02R\x1C\x03\x02\x02\x02R \x03\x02\x02\x02R" +
		"$\x03\x02\x02\x02R0\x03\x02\x02\x02R5\x03\x02\x02\x02R:\x03\x02\x02\x02" +
		"RA\x03\x02\x02\x02RH\x03\x02\x02\x02RM\x03\x02\x02\x02S\x03\x03\x02\x02" +
		"\x02TU\t\x02\x02\x02U\x05\x03\x02\x02\x02VW\b\x04\x01\x02WX\x07b\x02\x02" +
		"Xg\b\x04\x01\x02YZ\x07,\x02\x02Zg\b\x04\x01\x02[\\\x07\xC5\x02\x02\\g" +
		"\b\x04\x01\x02]^\x07\x83\x02\x02^_\x05\x06\x04\x02_`\x07\x84\x02\x02`" +
		"a\b\x04\x01\x02ag\x03\x02\x02\x02bc\x07\x91\x02\x02cd\x05\x06\x04\x07" +
		"de\b\x04\x01\x02eg\x03\x02\x02\x02fV\x03\x02\x02\x02fY\x03\x02\x02\x02" +
		"f[\x03\x02\x02\x02f]\x03\x02\x02\x02fb\x03\x02\x02\x02g~\x03\x02\x02\x02" +
		"hi\f\x06\x02\x02ij\x07\x9E\x02\x02jk\x05\x06\x04\x07kl\b\x04\x01\x02l" +
		"}\x03\x02\x02\x02mn\f\x05\x02\x02no\x07\x9F\x02\x02op\x05\x06\x04\x06" +
		"pq\b\x04\x01\x02q}\x03\x02\x02\x02rs\f\x04\x02\x02st\x07\x9B\x02\x02t" +
		"u\x05\x06\x04\x05uv\b\x04\x01\x02v}\x03\x02\x02\x02wx\f\x03\x02\x02xy" +
		"\x07\x9C\x02\x02yz\x05\x06\x04\x04z{\b\x04\x01\x02{}\x03\x02\x02\x02|" +
		"h\x03\x02\x02\x02|m\x03\x02\x02\x02|r\x03\x02\x02\x02|w\x03\x02\x02\x02" +
		"}\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x07\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\n\'+<CRf|~";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSharpPreprocessorParser.__ATN) {
			CSharpPreprocessorParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSharpPreprocessorParser._serializedATN));
		}

		return CSharpPreprocessorParser.__ATN;
	}

}

export class Preprocessor_directiveContext extends ParserRuleContext {
	public value = false;
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_preprocessor_directive; }
	public copyFrom(ctx: Preprocessor_directiveContext): void {
		super.copyFrom(ctx);
		this.value = ctx.value;
	}
}
export class PreprocessorDeclarationContext extends Preprocessor_directiveContext {
	public DEFINE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DEFINE, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode { return this.getToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public UNDEF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.UNDEF, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorDeclaration) {
			listener.enterPreprocessorDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorDeclaration) {
			listener.exitPreprocessorDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDeclaration) {
			return visitor.visitPreprocessorDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorConditionalContext extends Preprocessor_directiveContext {
	public _expr!: Preprocessor_expressionContext;
	public IF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.IF, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public preprocessor_expression(): Preprocessor_expressionContext | undefined {
		return this.tryGetRuleContext(0, Preprocessor_expressionContext);
	}
	public ELIF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ELIF, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ELSE, 0); }
	public ENDIF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ENDIF, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorConditional) {
			listener.enterPreprocessorConditional(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorConditional) {
			listener.exitPreprocessorConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorConditional) {
			return visitor.visitPreprocessorConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorLineContext extends Preprocessor_directiveContext {
	public LINE(): TerminalNode { return this.getToken(CSharpPreprocessorParser.LINE, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public DIGITS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIGITS, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DEFAULT, 0); }
	public DIRECTIVE_HIDDEN(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_HIDDEN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.STRING, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorLine) {
			listener.enterPreprocessorLine(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorLine) {
			listener.exitPreprocessorLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorLine) {
			return visitor.visitPreprocessorLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorDiagnosticContext extends Preprocessor_directiveContext {
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ERROR, 0); }
	public TEXT(): TerminalNode { return this.getToken(CSharpPreprocessorParser.TEXT, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public WARNING(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.WARNING, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorDiagnostic) {
			listener.enterPreprocessorDiagnostic(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorDiagnostic) {
			listener.exitPreprocessorDiagnostic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorDiagnostic) {
			return visitor.visitPreprocessorDiagnostic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorRegionContext extends Preprocessor_directiveContext {
	public REGION(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.REGION, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.TEXT, 0); }
	public ENDREGION(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.ENDREGION, 0); }
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorRegion) {
			listener.enterPreprocessorRegion(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorRegion) {
			listener.exitPreprocessorRegion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorRegion) {
			return visitor.visitPreprocessorRegion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorPragmaContext extends Preprocessor_directiveContext {
	public PRAGMA(): TerminalNode { return this.getToken(CSharpPreprocessorParser.PRAGMA, 0); }
	public TEXT(): TerminalNode { return this.getToken(CSharpPreprocessorParser.TEXT, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorPragma) {
			listener.enterPreprocessorPragma(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorPragma) {
			listener.exitPreprocessorPragma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorPragma) {
			return visitor.visitPreprocessorPragma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PreprocessorNullableContext extends Preprocessor_directiveContext {
	public NULLABLE(): TerminalNode { return this.getToken(CSharpPreprocessorParser.NULLABLE, 0); }
	public TEXT(): TerminalNode { return this.getToken(CSharpPreprocessorParser.TEXT, 0); }
	public directive_new_line_or_sharp(): Directive_new_line_or_sharpContext {
		return this.getRuleContext(0, Directive_new_line_or_sharpContext);
	}
	constructor(ctx: Preprocessor_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessorNullable) {
			listener.enterPreprocessorNullable(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessorNullable) {
			listener.exitPreprocessorNullable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessorNullable) {
			return visitor.visitPreprocessorNullable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Directive_new_line_or_sharpContext extends ParserRuleContext {
	public DIRECTIVE_NEW_LINE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.DIRECTIVE_NEW_LINE, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_directive_new_line_or_sharp; }
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterDirective_new_line_or_sharp) {
			listener.enterDirective_new_line_or_sharp(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitDirective_new_line_or_sharp) {
			listener.exitDirective_new_line_or_sharp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitDirective_new_line_or_sharp) {
			return visitor.visitDirective_new_line_or_sharp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Preprocessor_expressionContext extends ParserRuleContext {
	public value = '';
	public _expr1!: Preprocessor_expressionContext;
	public _expr!: Preprocessor_expressionContext;
	public _expr2!: Preprocessor_expressionContext;
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.FALSE, 0); }
	public CONDITIONAL_SYMBOL(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.CONDITIONAL_SYMBOL, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.CLOSE_PARENS, 0); }
	public preprocessor_expression(): Preprocessor_expressionContext[];
	public preprocessor_expression(i: number): Preprocessor_expressionContext;
	public preprocessor_expression(i?: number): Preprocessor_expressionContext | Preprocessor_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Preprocessor_expressionContext);
		} else {
			return this.getRuleContext(i, Preprocessor_expressionContext);
		}
	}
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.BANG, 0); }
	public OP_EQ(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_EQ, 0); }
	public OP_NE(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_NE, 0); }
	public OP_AND(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_AND, 0); }
	public OP_OR(): TerminalNode | undefined { return this.tryGetToken(CSharpPreprocessorParser.OP_OR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpPreprocessorParser.RULE_preprocessor_expression; }
	// @Override
	public enterRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.enterPreprocessor_expression) {
			listener.enterPreprocessor_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpPreprocessorParserListener): void {
		if (listener.exitPreprocessor_expression) {
			listener.exitPreprocessor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpPreprocessorParserVisitor<Result>): Result {
		if (visitor.visitPreprocessor_expression) {
			return visitor.visitPreprocessor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



// Generated from src/grammar/CSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { CSharpParserListener } from "./CSharpParserListener";
import { CSharpParserVisitor } from "./CSharpParserVisitor";
import { CSharpParserBase } from "./CSharpParserBase";


export class CSharpParser extends CSharpParserBase {
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
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_namespace_or_type_name = 1;
	public static readonly RULE_type_ = 2;
	public static readonly RULE_base_type = 3;
	public static readonly RULE_tuple_type = 4;
	public static readonly RULE_tuple_element = 5;
	public static readonly RULE_simple_type = 6;
	public static readonly RULE_numeric_type = 7;
	public static readonly RULE_integral_type = 8;
	public static readonly RULE_floating_point_type = 9;
	public static readonly RULE_class_type = 10;
	public static readonly RULE_type_argument_list = 11;
	public static readonly RULE_argument_list = 12;
	public static readonly RULE_argument = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_non_assignment_expression = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_assignment_operator = 17;
	public static readonly RULE_conditional_expression = 18;
	public static readonly RULE_null_coalescing_expression = 19;
	public static readonly RULE_conditional_or_expression = 20;
	public static readonly RULE_conditional_and_expression = 21;
	public static readonly RULE_inclusive_or_expression = 22;
	public static readonly RULE_exclusive_or_expression = 23;
	public static readonly RULE_and_expression = 24;
	public static readonly RULE_equality_expression = 25;
	public static readonly RULE_relational_expression = 26;
	public static readonly RULE_shift_expression = 27;
	public static readonly RULE_additive_expression = 28;
	public static readonly RULE_multiplicative_expression = 29;
	public static readonly RULE_switch_expression = 30;
	public static readonly RULE_switch_expression_arms = 31;
	public static readonly RULE_switch_expression_arm = 32;
	public static readonly RULE_range_expression = 33;
	public static readonly RULE_unary_expression = 34;
	public static readonly RULE_primary_expression = 35;
	public static readonly RULE_primary_expression_start = 36;
	public static readonly RULE_throwable_expression = 37;
	public static readonly RULE_throw_expression = 38;
	public static readonly RULE_member_access = 39;
	public static readonly RULE_bracket_expression = 40;
	public static readonly RULE_indexer_argument = 41;
	public static readonly RULE_predefined_type = 42;
	public static readonly RULE_expression_list = 43;
	public static readonly RULE_object_or_collection_initializer = 44;
	public static readonly RULE_object_initializer = 45;
	public static readonly RULE_member_initializer_list = 46;
	public static readonly RULE_member_initializer = 47;
	public static readonly RULE_initializer_value = 48;
	public static readonly RULE_collection_initializer = 49;
	public static readonly RULE_element_initializer = 50;
	public static readonly RULE_anonymous_object_initializer = 51;
	public static readonly RULE_member_declarator_list = 52;
	public static readonly RULE_member_declarator = 53;
	public static readonly RULE_unbound_type_name = 54;
	public static readonly RULE_generic_dimension_specifier = 55;
	public static readonly RULE_isType = 56;
	public static readonly RULE_isTypePatternArms = 57;
	public static readonly RULE_isTypePatternArm = 58;
	public static readonly RULE_lambda_expression = 59;
	public static readonly RULE_anonymous_function_signature = 60;
	public static readonly RULE_explicit_anonymous_function_parameter_list = 61;
	public static readonly RULE_explicit_anonymous_function_parameter = 62;
	public static readonly RULE_implicit_anonymous_function_parameter_list = 63;
	public static readonly RULE_anonymous_function_body = 64;
	public static readonly RULE_query_expression = 65;
	public static readonly RULE_from_clause = 66;
	public static readonly RULE_query_body = 67;
	public static readonly RULE_query_body_clause = 68;
	public static readonly RULE_let_clause = 69;
	public static readonly RULE_where_clause = 70;
	public static readonly RULE_combined_join_clause = 71;
	public static readonly RULE_orderby_clause = 72;
	public static readonly RULE_ordering = 73;
	public static readonly RULE_select_or_group_clause = 74;
	public static readonly RULE_query_continuation = 75;
	public static readonly RULE_statement = 76;
	public static readonly RULE_declarationStatement = 77;
	public static readonly RULE_local_function_declaration = 78;
	public static readonly RULE_local_function_header = 79;
	public static readonly RULE_local_function_modifiers = 80;
	public static readonly RULE_local_function_body = 81;
	public static readonly RULE_labeled_Statement = 82;
	public static readonly RULE_embedded_statement = 83;
	public static readonly RULE_simple_embedded_statement = 84;
	public static readonly RULE_block = 85;
	public static readonly RULE_local_variable_declaration = 86;
	public static readonly RULE_local_variable_type = 87;
	public static readonly RULE_local_variable_declarator = 88;
	public static readonly RULE_local_variable_initializer = 89;
	public static readonly RULE_local_constant_declaration = 90;
	public static readonly RULE_if_body = 91;
	public static readonly RULE_switch_section = 92;
	public static readonly RULE_switch_label = 93;
	public static readonly RULE_case_guard = 94;
	public static readonly RULE_statement_list = 95;
	public static readonly RULE_for_initializer = 96;
	public static readonly RULE_for_iterator = 97;
	public static readonly RULE_catch_clauses = 98;
	public static readonly RULE_specific_catch_clause = 99;
	public static readonly RULE_general_catch_clause = 100;
	public static readonly RULE_exception_filter = 101;
	public static readonly RULE_finally_clause = 102;
	public static readonly RULE_resource_acquisition = 103;
	public static readonly RULE_namespace_declaration = 104;
	public static readonly RULE_qualified_identifier = 105;
	public static readonly RULE_namespace_body = 106;
	public static readonly RULE_extern_alias_directives = 107;
	public static readonly RULE_extern_alias_directive = 108;
	public static readonly RULE_using_directives = 109;
	public static readonly RULE_using_directive = 110;
	public static readonly RULE_namespace_member_declarations = 111;
	public static readonly RULE_namespace_member_declaration = 112;
	public static readonly RULE_type_declaration = 113;
	public static readonly RULE_qualified_alias_member = 114;
	public static readonly RULE_type_parameter_list = 115;
	public static readonly RULE_type_parameter = 116;
	public static readonly RULE_class_base = 117;
	public static readonly RULE_interface_type_list = 118;
	public static readonly RULE_type_parameter_constraints_clauses = 119;
	public static readonly RULE_type_parameter_constraints_clause = 120;
	public static readonly RULE_type_parameter_constraints = 121;
	public static readonly RULE_primary_constraint = 122;
	public static readonly RULE_secondary_constraints = 123;
	public static readonly RULE_constructor_constraint = 124;
	public static readonly RULE_class_body = 125;
	public static readonly RULE_class_member_declarations = 126;
	public static readonly RULE_class_member_declaration = 127;
	public static readonly RULE_all_member_modifiers = 128;
	public static readonly RULE_all_member_modifier = 129;
	public static readonly RULE_common_member_declaration = 130;
	public static readonly RULE_typed_member_declaration = 131;
	public static readonly RULE_constant_declarators = 132;
	public static readonly RULE_constant_declarator = 133;
	public static readonly RULE_variable_declarators = 134;
	public static readonly RULE_variable_declarator = 135;
	public static readonly RULE_variable_initializer = 136;
	public static readonly RULE_return_type = 137;
	public static readonly RULE_member_name = 138;
	public static readonly RULE_method_body = 139;
	public static readonly RULE_formal_parameter_list = 140;
	public static readonly RULE_fixed_parameters = 141;
	public static readonly RULE_fixed_parameter = 142;
	public static readonly RULE_parameter_modifier = 143;
	public static readonly RULE_parameter_array = 144;
	public static readonly RULE_accessor_declarations = 145;
	public static readonly RULE_get_accessor_declaration = 146;
	public static readonly RULE_set_accessor_declaration = 147;
	public static readonly RULE_accessor_modifier = 148;
	public static readonly RULE_accessor_body = 149;
	public static readonly RULE_event_accessor_declarations = 150;
	public static readonly RULE_add_accessor_declaration = 151;
	public static readonly RULE_remove_accessor_declaration = 152;
	public static readonly RULE_overloadable_operator = 153;
	public static readonly RULE_conversion_operator_declarator = 154;
	public static readonly RULE_constructor_initializer = 155;
	public static readonly RULE_body = 156;
	public static readonly RULE_struct_interfaces = 157;
	public static readonly RULE_struct_body = 158;
	public static readonly RULE_struct_member_declaration = 159;
	public static readonly RULE_array_type = 160;
	public static readonly RULE_rank_specifier = 161;
	public static readonly RULE_array_initializer = 162;
	public static readonly RULE_variant_type_parameter_list = 163;
	public static readonly RULE_variant_type_parameter = 164;
	public static readonly RULE_variance_annotation = 165;
	public static readonly RULE_interface_base = 166;
	public static readonly RULE_interface_body = 167;
	public static readonly RULE_interface_member_declaration = 168;
	public static readonly RULE_interface_accessors = 169;
	public static readonly RULE_enum_base = 170;
	public static readonly RULE_enum_body = 171;
	public static readonly RULE_enum_member_declaration = 172;
	public static readonly RULE_global_attribute_section = 173;
	public static readonly RULE_global_attribute_target = 174;
	public static readonly RULE_attributes = 175;
	public static readonly RULE_attribute_section = 176;
	public static readonly RULE_attribute_target = 177;
	public static readonly RULE_attribute_list = 178;
	public static readonly RULE_attribute = 179;
	public static readonly RULE_attribute_argument = 180;
	public static readonly RULE_pointer_type = 181;
	public static readonly RULE_fixed_pointer_declarators = 182;
	public static readonly RULE_fixed_pointer_declarator = 183;
	public static readonly RULE_fixed_pointer_initializer = 184;
	public static readonly RULE_fixed_size_buffer_declarator = 185;
	public static readonly RULE_stackalloc_initializer = 186;
	public static readonly RULE_right_arrow = 187;
	public static readonly RULE_right_shift = 188;
	public static readonly RULE_right_shift_assignment = 189;
	public static readonly RULE_literal = 190;
	public static readonly RULE_boolean_literal = 191;
	public static readonly RULE_string_literal = 192;
	public static readonly RULE_interpolated_regular_string = 193;
	public static readonly RULE_interpolated_verbatium_string = 194;
	public static readonly RULE_interpolated_regular_string_part = 195;
	public static readonly RULE_interpolated_verbatium_string_part = 196;
	public static readonly RULE_interpolated_string_expression = 197;
	public static readonly RULE_keyword = 198;
	public static readonly RULE_class_definition = 199;
	public static readonly RULE_struct_definition = 200;
	public static readonly RULE_interface_definition = 201;
	public static readonly RULE_enum_definition = 202;
	public static readonly RULE_delegate_definition = 203;
	public static readonly RULE_event_declaration = 204;
	public static readonly RULE_field_declaration = 205;
	public static readonly RULE_property_declaration = 206;
	public static readonly RULE_constant_declaration = 207;
	public static readonly RULE_indexer_declaration = 208;
	public static readonly RULE_destructor_definition = 209;
	public static readonly RULE_constructor_declaration = 210;
	public static readonly RULE_method_declaration = 211;
	public static readonly RULE_method_member_name = 212;
	public static readonly RULE_operator_declaration = 213;
	public static readonly RULE_arg_declaration = 214;
	public static readonly RULE_method_invocation = 215;
	public static readonly RULE_object_creation_expression = 216;
	public static readonly RULE_identifier = 217;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "namespace_or_type_name", "type_", "base_type", "tuple_type",
		"tuple_element", "simple_type", "numeric_type", "integral_type", "floating_point_type",
		"class_type", "type_argument_list", "argument_list", "argument", "expression",
		"non_assignment_expression", "assignment", "assignment_operator", "conditional_expression",
		"null_coalescing_expression", "conditional_or_expression", "conditional_and_expression",
		"inclusive_or_expression", "exclusive_or_expression", "and_expression",
		"equality_expression", "relational_expression", "shift_expression", "additive_expression",
		"multiplicative_expression", "switch_expression", "switch_expression_arms",
		"switch_expression_arm", "range_expression", "unary_expression", "primary_expression",
		"primary_expression_start", "throwable_expression", "throw_expression",
		"member_access", "bracket_expression", "indexer_argument", "predefined_type",
		"expression_list", "object_or_collection_initializer", "object_initializer",
		"member_initializer_list", "member_initializer", "initializer_value",
		"collection_initializer", "element_initializer", "anonymous_object_initializer",
		"member_declarator_list", "member_declarator", "unbound_type_name", "generic_dimension_specifier",
		"isType", "isTypePatternArms", "isTypePatternArm", "lambda_expression",
		"anonymous_function_signature", "explicit_anonymous_function_parameter_list",
		"explicit_anonymous_function_parameter", "implicit_anonymous_function_parameter_list",
		"anonymous_function_body", "query_expression", "from_clause", "query_body",
		"query_body_clause", "let_clause", "where_clause", "combined_join_clause",
		"orderby_clause", "ordering", "select_or_group_clause", "query_continuation",
		"statement", "declarationStatement", "local_function_declaration", "local_function_header",
		"local_function_modifiers", "local_function_body", "labeled_Statement",
		"embedded_statement", "simple_embedded_statement", "block", "local_variable_declaration",
		"local_variable_type", "local_variable_declarator", "local_variable_initializer",
		"local_constant_declaration", "if_body", "switch_section", "switch_label",
		"case_guard", "statement_list", "for_initializer", "for_iterator", "catch_clauses",
		"specific_catch_clause", "general_catch_clause", "exception_filter", "finally_clause",
		"resource_acquisition", "namespace_declaration", "qualified_identifier",
		"namespace_body", "extern_alias_directives", "extern_alias_directive",
		"using_directives", "using_directive", "namespace_member_declarations",
		"namespace_member_declaration", "type_declaration", "qualified_alias_member",
		"type_parameter_list", "type_parameter", "class_base", "interface_type_list",
		"type_parameter_constraints_clauses", "type_parameter_constraints_clause",
		"type_parameter_constraints", "primary_constraint", "secondary_constraints",
		"constructor_constraint", "class_body", "class_member_declarations", "class_member_declaration",
		"all_member_modifiers", "all_member_modifier", "common_member_declaration",
		"typed_member_declaration", "constant_declarators", "constant_declarator",
		"variable_declarators", "variable_declarator", "variable_initializer",
		"return_type", "member_name", "method_body", "formal_parameter_list",
		"fixed_parameters", "fixed_parameter", "parameter_modifier", "parameter_array",
		"accessor_declarations", "get_accessor_declaration", "set_accessor_declaration",
		"accessor_modifier", "accessor_body", "event_accessor_declarations", "add_accessor_declaration",
		"remove_accessor_declaration", "overloadable_operator", "conversion_operator_declarator",
		"constructor_initializer", "body", "struct_interfaces", "struct_body",
		"struct_member_declaration", "array_type", "rank_specifier", "array_initializer",
		"variant_type_parameter_list", "variant_type_parameter", "variance_annotation",
		"interface_base", "interface_body", "interface_member_declaration", "interface_accessors",
		"enum_base", "enum_body", "enum_member_declaration", "global_attribute_section",
		"global_attribute_target", "attributes", "attribute_section", "attribute_target",
		"attribute_list", "attribute", "attribute_argument", "pointer_type", "fixed_pointer_declarators",
		"fixed_pointer_declarator", "fixed_pointer_initializer", "fixed_size_buffer_declarator",
		"stackalloc_initializer", "right_arrow", "right_shift", "right_shift_assignment",
		"literal", "boolean_literal", "string_literal", "interpolated_regular_string",
		"interpolated_verbatium_string", "interpolated_regular_string_part", "interpolated_verbatium_string_part",
		"interpolated_string_expression", "keyword", "class_definition", "struct_definition",
		"interface_definition", "enum_definition", "delegate_definition", "event_declaration",
		"field_declaration", "property_declaration", "constant_declaration", "indexer_declaration",
		"destructor_definition", "constructor_declaration", "method_declaration",
		"method_member_name", "operator_declaration", "arg_declaration", "method_invocation",
		"object_creation_expression", "identifier",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CSharpParser._LITERAL_NAMES, CSharpParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CSharpParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "CSharpParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return CSharpParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CSharpParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CSharpParser._ATN, this);
	}
	// @RuleVersion(0)
	public compilation_unit(): Compilation_unitContext {
		let _localctx: Compilation_unitContext = new Compilation_unitContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CSharpParser.RULE_compilation_unit);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.BYTE_ORDER_MARK) {
				{
				this.state = 436;
				this.match(CSharpParser.BYTE_ORDER_MARK);
				}
			}

			this.state = 440;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 439;
				this.extern_alias_directives();
				}
				break;
			}
			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.USING) {
				{
				this.state = 442;
				this.using_directives();
				}
			}

			this.state = 448;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 445;
					this.global_attribute_section();
					}
					}
				}
				this.state = 450;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 452;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CSharpParser.ENUM - 37)) | (1 << (CSharpParser.EXTERN - 37)) | (1 << (CSharpParser.INTERFACE - 37)) | (1 << (CSharpParser.INTERNAL - 37)) | (1 << (CSharpParser.NAMESPACE - 37)) | (1 << (CSharpParser.NEW - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CSharpParser.OVERRIDE - 73)) | (1 << (CSharpParser.PARTIAL - 73)) | (1 << (CSharpParser.PRIVATE - 73)) | (1 << (CSharpParser.PROTECTED - 73)) | (1 << (CSharpParser.PUBLIC - 73)) | (1 << (CSharpParser.READONLY - 73)) | (1 << (CSharpParser.REF - 73)) | (1 << (CSharpParser.SEALED - 73)) | (1 << (CSharpParser.STATIC - 73)) | (1 << (CSharpParser.STRUCT - 73)) | (1 << (CSharpParser.UNSAFE - 73)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CSharpParser.VIRTUAL - 107)) | (1 << (CSharpParser.VOLATILE - 107)) | (1 << (CSharpParser.OPEN_BRACKET - 107)))) !== 0)) {
				{
				this.state = 451;
				this.namespace_member_declarations();
				}
			}

			this.state = 454;
			this.match(CSharpParser.EOF);
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
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		let _localctx: Namespace_or_type_nameContext = new Namespace_or_type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CSharpParser.RULE_namespace_or_type_name);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 456;
				this.identifier();
				this.state = 458;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 457;
					this.type_argument_list();
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 460;
				this.qualified_alias_member();
				}
				break;
			}
			this.state = 470;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 463;
					this.match(CSharpParser.DOT);
					this.state = 464;
					this.identifier();
					this.state = 466;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						this.state = 465;
						this.type_argument_list();
						}
						break;
					}
					}
					}
				}
				this.state = 472;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
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
	// @RuleVersion(0)
	public type_(): Type_Context {
		let _localctx: Type_Context = new Type_Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, CSharpParser.RULE_type_);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 473;
			this.base_type();
			this.state = 479;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 477;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.INTERR:
						{
						this.state = 474;
						this.match(CSharpParser.INTERR);
						}
						break;
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 475;
						this.rank_specifier();
						}
						break;
					case CSharpParser.STAR:
						{
						this.state = 476;
						this.match(CSharpParser.STAR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 481;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
	// @RuleVersion(0)
	public base_type(): Base_typeContext {
		let _localctx: Base_typeContext = new Base_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CSharpParser.RULE_base_type);
		try {
			this.state = 487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BOOL:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.simple_type();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.STRING:
			case CSharpParser.UNMANAGED:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.class_type();
				}
				break;
			case CSharpParser.VOID:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 484;
				this.match(CSharpParser.VOID);
				this.state = 485;
				this.match(CSharpParser.STAR);
				}
				break;
			case CSharpParser.OPEN_PARENS:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 486;
				this.tuple_type();
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
	public tuple_type(): Tuple_typeContext {
		let _localctx: Tuple_typeContext = new Tuple_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CSharpParser.RULE_tuple_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 489;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 490;
			this.tuple_element();
			this.state = 493;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 491;
				this.match(CSharpParser.COMMA);
				this.state = 492;
				this.tuple_element();
				}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.COMMA);
			this.state = 497;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public tuple_element(): Tuple_elementContext {
		let _localctx: Tuple_elementContext = new Tuple_elementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CSharpParser.RULE_tuple_element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.type_();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)))) !== 0)) {
				{
				this.state = 500;
				this.identifier();
				}
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
	// @RuleVersion(0)
	public simple_type(): Simple_typeContext {
		let _localctx: Simple_typeContext = new Simple_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CSharpParser.RULE_simple_type);
		try {
			this.state = 505;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 503;
				this.numeric_type();
				}
				break;
			case CSharpParser.BOOL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 504;
				this.match(CSharpParser.BOOL);
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
	public numeric_type(): Numeric_typeContext {
		let _localctx: Numeric_typeContext = new Numeric_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CSharpParser.RULE_numeric_type);
		try {
			this.state = 510;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.INT:
			case CSharpParser.LONG:
			case CSharpParser.SBYTE:
			case CSharpParser.SHORT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.USHORT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 507;
				this.integral_type();
				}
				break;
			case CSharpParser.DOUBLE:
			case CSharpParser.FLOAT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 508;
				this.floating_point_type();
				}
				break;
			case CSharpParser.DECIMAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 509;
				this.match(CSharpParser.DECIMAL);
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
	public integral_type(): Integral_typeContext {
		let _localctx: Integral_typeContext = new Integral_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CSharpParser.RULE_integral_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 512;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.BYTE || _la === CSharpParser.CHAR || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CSharpParser.INT - 55)) | (1 << (CSharpParser.LONG - 55)) | (1 << (CSharpParser.SBYTE - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CSharpParser.SHORT - 87)) | (1 << (CSharpParser.UINT - 87)) | (1 << (CSharpParser.ULONG - 87)) | (1 << (CSharpParser.USHORT - 87)))) !== 0))) {
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
	// @RuleVersion(0)
	public floating_point_type(): Floating_point_typeContext {
		let _localctx: Floating_point_typeContext = new Floating_point_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CSharpParser.RULE_floating_point_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 514;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.DOUBLE || _la === CSharpParser.FLOAT)) {
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
	// @RuleVersion(0)
	public class_type(): Class_typeContext {
		let _localctx: Class_typeContext = new Class_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CSharpParser.RULE_class_type);
		try {
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 516;
				this.namespace_or_type_name();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 517;
				this.match(CSharpParser.OBJECT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 518;
				this.match(CSharpParser.DYNAMIC);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 519;
				this.match(CSharpParser.STRING);
				}
				break;
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
	public type_argument_list(): Type_argument_listContext {
		let _localctx: Type_argument_listContext = new Type_argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CSharpParser.RULE_type_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 522;
			this.match(CSharpParser.LT);
			this.state = 523;
			this.type_();
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 524;
				this.match(CSharpParser.COMMA);
				this.state = 525;
				this.type_();
				}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 531;
			this.match(CSharpParser.GT);
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
	public argument_list(): Argument_listContext {
		let _localctx: Argument_listContext = new Argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CSharpParser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.argument();
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 534;
				this.match(CSharpParser.COMMA);
				this.state = 535;
				this.argument();
				}
				}
				this.state = 540;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public argument(): ArgumentContext {
		let _localctx: ArgumentContext = new ArgumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CSharpParser.RULE_argument);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 541;
				this.identifier();
				this.state = 542;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 547;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 546;
				_localctx._refout = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.IN - 54)) | (1 << (CSharpParser.OUT - 54)) | (1 << (CSharpParser.REF - 54)))) !== 0))) {
					_localctx._refout = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 549;
				this.match(CSharpParser.VAR);
				}
				break;

			case 2:
				{
				this.state = 550;
				this.type_();
				}
				break;
			}
			this.state = 553;
			this.expression();
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
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CSharpParser.RULE_expression);
		try {
			this.state = 559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 555;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 556;
				this.non_assignment_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 557;
				this.match(CSharpParser.REF);
				this.state = 558;
				this.non_assignment_expression();
				}
				break;
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
	public non_assignment_expression(): Non_assignment_expressionContext {
		let _localctx: Non_assignment_expressionContext = new Non_assignment_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CSharpParser.RULE_non_assignment_expression);
		try {
			this.state = 564;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 561;
				this.lambda_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 562;
				this.query_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 563;
				this.conditional_expression();
				}
				break;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CSharpParser.RULE_assignment);
		try {
			this.state = 574;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 566;
				this.unary_expression();
				this.state = 567;
				this.assignment_operator();
				this.state = 568;
				this.expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 570;
				this.unary_expression();
				this.state = 571;
				this.match(CSharpParser.OP_COALESCING_ASSIGNMENT);
				this.state = 572;
				this.throwable_expression();
				}
				break;
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
	public assignment_operator(): Assignment_operatorContext {
		let _localctx: Assignment_operatorContext = new Assignment_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CSharpParser.RULE_assignment_operator);
		try {
			this.state = 587;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ASSIGNMENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 576;
				this.match(CSharpParser.ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_ADD_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 577;
				this.match(CSharpParser.OP_ADD_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_SUB_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 578;
				this.match(CSharpParser.OP_SUB_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_MULT_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 579;
				this.match(CSharpParser.OP_MULT_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_DIV_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 580;
				this.match(CSharpParser.OP_DIV_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_MOD_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 581;
				this.match(CSharpParser.OP_MOD_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_AND_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 582;
				this.match(CSharpParser.OP_AND_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_OR_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 583;
				this.match(CSharpParser.OP_OR_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_XOR_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 584;
				this.match(CSharpParser.OP_XOR_ASSIGNMENT);
				}
				break;
			case CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 585;
				this.match(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT);
				}
				break;
			case CSharpParser.GT:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 586;
				this.right_shift_assignment();
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
	public conditional_expression(): Conditional_expressionContext {
		let _localctx: Conditional_expressionContext = new Conditional_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CSharpParser.RULE_conditional_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this.null_coalescing_expression();
			this.state = 595;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 590;
				this.match(CSharpParser.INTERR);
				this.state = 591;
				this.throwable_expression();
				this.state = 592;
				this.match(CSharpParser.COLON);
				this.state = 593;
				this.throwable_expression();
				}
				break;
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
	// @RuleVersion(0)
	public null_coalescing_expression(): Null_coalescing_expressionContext {
		let _localctx: Null_coalescing_expressionContext = new Null_coalescing_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CSharpParser.RULE_null_coalescing_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.conditional_or_expression();
			this.state = 603;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 598;
				this.match(CSharpParser.OP_COALESCING);
				this.state = 601;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BASE:
				case CSharpParser.BOOL:
				case CSharpParser.BY:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.CHECKED:
				case CSharpParser.DECIMAL:
				case CSharpParser.DEFAULT:
				case CSharpParser.DELEGATE:
				case CSharpParser.DESCENDING:
				case CSharpParser.DOUBLE:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FALSE:
				case CSharpParser.FLOAT:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INT:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.LONG:
				case CSharpParser.NAMEOF:
				case CSharpParser.NEW:
				case CSharpParser.NULL_:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SBYTE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.SHORT:
				case CSharpParser.SIZEOF:
				case CSharpParser.STRING:
				case CSharpParser.THIS:
				case CSharpParser.TRUE:
				case CSharpParser.TYPEOF:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.UNCHECKED:
				case CSharpParser.UNMANAGED:
				case CSharpParser.USHORT:
				case CSharpParser.VAR:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
				case CSharpParser.LITERAL_ACCESS:
				case CSharpParser.INTEGER_LITERAL:
				case CSharpParser.HEX_INTEGER_LITERAL:
				case CSharpParser.BIN_INTEGER_LITERAL:
				case CSharpParser.REAL_LITERAL:
				case CSharpParser.CHARACTER_LITERAL:
				case CSharpParser.REGULAR_STRING:
				case CSharpParser.VERBATIUM_STRING:
				case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
				case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
				case CSharpParser.OPEN_PARENS:
				case CSharpParser.PLUS:
				case CSharpParser.MINUS:
				case CSharpParser.STAR:
				case CSharpParser.AMP:
				case CSharpParser.CARET:
				case CSharpParser.BANG:
				case CSharpParser.TILDE:
				case CSharpParser.OP_INC:
				case CSharpParser.OP_DEC:
				case CSharpParser.OP_RANGE:
					{
					this.state = 599;
					this.null_coalescing_expression();
					}
					break;
				case CSharpParser.THROW:
					{
					this.state = 600;
					this.throw_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
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
	// @RuleVersion(0)
	public conditional_or_expression(): Conditional_or_expressionContext {
		let _localctx: Conditional_or_expressionContext = new Conditional_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CSharpParser.RULE_conditional_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 605;
			this.conditional_and_expression();
			this.state = 610;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 606;
					this.match(CSharpParser.OP_OR);
					this.state = 607;
					this.conditional_and_expression();
					}
					}
				}
				this.state = 612;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
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
	// @RuleVersion(0)
	public conditional_and_expression(): Conditional_and_expressionContext {
		let _localctx: Conditional_and_expressionContext = new Conditional_and_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CSharpParser.RULE_conditional_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 613;
			this.inclusive_or_expression();
			this.state = 618;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 614;
					this.match(CSharpParser.OP_AND);
					this.state = 615;
					this.inclusive_or_expression();
					}
					}
				}
				this.state = 620;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
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
	// @RuleVersion(0)
	public inclusive_or_expression(): Inclusive_or_expressionContext {
		let _localctx: Inclusive_or_expressionContext = new Inclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CSharpParser.RULE_inclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.exclusive_or_expression();
			this.state = 626;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 622;
					this.match(CSharpParser.BITWISE_OR);
					this.state = 623;
					this.exclusive_or_expression();
					}
					}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	// @RuleVersion(0)
	public exclusive_or_expression(): Exclusive_or_expressionContext {
		let _localctx: Exclusive_or_expressionContext = new Exclusive_or_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CSharpParser.RULE_exclusive_or_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.and_expression();
			this.state = 634;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 630;
					this.match(CSharpParser.CARET);
					this.state = 631;
					this.and_expression();
					}
					}
				}
				this.state = 636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
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
	// @RuleVersion(0)
	public and_expression(): And_expressionContext {
		let _localctx: And_expressionContext = new And_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CSharpParser.RULE_and_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 637;
			this.equality_expression();
			this.state = 642;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 638;
					this.match(CSharpParser.AMP);
					this.state = 639;
					this.equality_expression();
					}
					}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
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
	// @RuleVersion(0)
	public equality_expression(): Equality_expressionContext {
		let _localctx: Equality_expressionContext = new Equality_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CSharpParser.RULE_equality_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.relational_expression();
			this.state = 650;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 646;
					_la = this._input.LA(1);
					if (!(_la === CSharpParser.OP_EQ || _la === CSharpParser.OP_NE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 647;
					this.relational_expression();
					}
					}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
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
	// @RuleVersion(0)
	public relational_expression(): Relational_expressionContext {
		let _localctx: Relational_expressionContext = new Relational_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CSharpParser.RULE_relational_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.shift_expression();
			this.state = 662;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 660;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.LT:
					case CSharpParser.GT:
					case CSharpParser.OP_LE:
					case CSharpParser.OP_GE:
						{
						this.state = 654;
						_la = this._input.LA(1);
						if (!(((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (CSharpParser.LT - 146)) | (1 << (CSharpParser.GT - 146)) | (1 << (CSharpParser.OP_LE - 146)) | (1 << (CSharpParser.OP_GE - 146)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 655;
						this.shift_expression();
						}
						break;
					case CSharpParser.IS:
						{
						this.state = 656;
						this.match(CSharpParser.IS);
						this.state = 657;
						this.isType();
						}
						break;
					case CSharpParser.AS:
						{
						this.state = 658;
						this.match(CSharpParser.AS);
						this.state = 659;
						this.type_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 664;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
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
	// @RuleVersion(0)
	public shift_expression(): Shift_expressionContext {
		let _localctx: Shift_expressionContext = new Shift_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CSharpParser.RULE_shift_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.additive_expression();
			this.state = 673;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 668;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OP_LEFT_SHIFT:
						{
						this.state = 666;
						this.match(CSharpParser.OP_LEFT_SHIFT);
						}
						break;
					case CSharpParser.GT:
						{
						this.state = 667;
						this.right_shift();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 670;
					this.additive_expression();
					}
					}
				}
				this.state = 675;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
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
	// @RuleVersion(0)
	public additive_expression(): Additive_expressionContext {
		let _localctx: Additive_expressionContext = new Additive_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CSharpParser.RULE_additive_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 676;
			this.multiplicative_expression();
			this.state = 681;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 677;
					_la = this._input.LA(1);
					if (!(_la === CSharpParser.PLUS || _la === CSharpParser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 678;
					this.multiplicative_expression();
					}
					}
				}
				this.state = 683;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
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
	// @RuleVersion(0)
	public multiplicative_expression(): Multiplicative_expressionContext {
		let _localctx: Multiplicative_expressionContext = new Multiplicative_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CSharpParser.RULE_multiplicative_expression);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.switch_expression();
			this.state = 689;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 685;
					_la = this._input.LA(1);
					if (!(((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (CSharpParser.STAR - 137)) | (1 << (CSharpParser.DIV - 137)) | (1 << (CSharpParser.PERCENT - 137)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 686;
					this.switch_expression();
					}
					}
				}
				this.state = 691;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
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
	// @RuleVersion(0)
	public switch_expression(): Switch_expressionContext {
		let _localctx: Switch_expressionContext = new Switch_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CSharpParser.RULE_switch_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 692;
			this.range_expression();
			this.state = 702;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 693;
				this.match(CSharpParser.SWITCH);
				this.state = 694;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 699;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 695;
					this.switch_expression_arms();
					this.state = 697;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.COMMA) {
						{
						this.state = 696;
						this.match(CSharpParser.COMMA);
						}
					}

					}
				}

				this.state = 701;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;
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
	// @RuleVersion(0)
	public switch_expression_arms(): Switch_expression_armsContext {
		let _localctx: Switch_expression_armsContext = new Switch_expression_armsContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CSharpParser.RULE_switch_expression_arms);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 704;
			this.switch_expression_arm();
			this.state = 709;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 705;
					this.match(CSharpParser.COMMA);
					this.state = 706;
					this.switch_expression_arm();
					}
					}
				}
				this.state = 711;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
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
	// @RuleVersion(0)
	public switch_expression_arm(): Switch_expression_armContext {
		let _localctx: Switch_expression_armContext = new Switch_expression_armContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CSharpParser.RULE_switch_expression_arm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 712;
			this.expression();
			this.state = 714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHEN) {
				{
				this.state = 713;
				this.case_guard();
				}
			}

			this.state = 716;
			this.right_arrow();
			this.state = 717;
			this.throwable_expression();
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
	public range_expression(): Range_expressionContext {
		let _localctx: Range_expressionContext = new Range_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CSharpParser.RULE_range_expression);
		let _la: number;
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 719;
				this.unary_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FALSE - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.NULL_ - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.SIZEOF - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CSharpParser.TRUE - 96)) | (1 << (CSharpParser.TYPEOF - 96)) | (1 << (CSharpParser.UINT - 96)) | (1 << (CSharpParser.ULONG - 96)) | (1 << (CSharpParser.UNCHECKED - 96)) | (1 << (CSharpParser.UNMANAGED - 96)) | (1 << (CSharpParser.USHORT - 96)) | (1 << (CSharpParser.VAR - 96)) | (1 << (CSharpParser.WHEN - 96)) | (1 << (CSharpParser.WHERE - 96)) | (1 << (CSharpParser.YIELD - 96)) | (1 << (CSharpParser.IDENTIFIER - 96)) | (1 << (CSharpParser.LITERAL_ACCESS - 96)) | (1 << (CSharpParser.INTEGER_LITERAL - 96)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.REAL_LITERAL - 96)) | (1 << (CSharpParser.CHARACTER_LITERAL - 96)) | (1 << (CSharpParser.REGULAR_STRING - 96)) | (1 << (CSharpParser.VERBATIUM_STRING - 96)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 96)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CSharpParser.OPEN_PARENS - 129)) | (1 << (CSharpParser.PLUS - 129)) | (1 << (CSharpParser.MINUS - 129)) | (1 << (CSharpParser.STAR - 129)) | (1 << (CSharpParser.AMP - 129)) | (1 << (CSharpParser.CARET - 129)) | (1 << (CSharpParser.BANG - 129)) | (1 << (CSharpParser.TILDE - 129)) | (1 << (CSharpParser.OP_INC - 129)) | (1 << (CSharpParser.OP_DEC - 129)))) !== 0)) {
					{
					this.state = 720;
					this.unary_expression();
					}
				}

				this.state = 723;
				this.match(CSharpParser.OP_RANGE);
				this.state = 725;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
				case 1:
					{
					this.state = 724;
					this.unary_expression();
					}
					break;
				}
				}
				break;
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
	public unary_expression(): Unary_expressionContext {
		let _localctx: Unary_expressionContext = new Unary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CSharpParser.RULE_unary_expression);
		try {
			this.state = 755;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 729;
				this.primary_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 730;
				this.match(CSharpParser.PLUS);
				this.state = 731;
				this.unary_expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 732;
				this.match(CSharpParser.MINUS);
				this.state = 733;
				this.unary_expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 734;
				this.match(CSharpParser.BANG);
				this.state = 735;
				this.unary_expression();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 736;
				this.match(CSharpParser.TILDE);
				this.state = 737;
				this.unary_expression();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 738;
				this.match(CSharpParser.OP_INC);
				this.state = 739;
				this.unary_expression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 740;
				this.match(CSharpParser.OP_DEC);
				this.state = 741;
				this.unary_expression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 742;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 743;
				this.type_();
				this.state = 744;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 745;
				this.unary_expression();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 747;
				this.match(CSharpParser.AWAIT);
				this.state = 748;
				this.unary_expression();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 749;
				this.match(CSharpParser.AMP);
				this.state = 750;
				this.unary_expression();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 751;
				this.match(CSharpParser.STAR);
				this.state = 752;
				this.unary_expression();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 753;
				this.match(CSharpParser.CARET);
				this.state = 754;
				this.unary_expression();
				}
				break;
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
	public primary_expression(): Primary_expressionContext {
		let _localctx: Primary_expressionContext = new Primary_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CSharpParser.RULE_primary_expression);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 757;
			_localctx._pe = this.primary_expression_start();
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 758;
				this.match(CSharpParser.BANG);
				}
				break;
			}
			this.state = 764;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 761;
					this.bracket_expression();
					}
					}
				}
				this.state = 766;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
			}
			this.state = 768;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				{
				this.state = 767;
				this.match(CSharpParser.BANG);
				}
				break;
			}
			this.state = 792;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					{
					this.state = 776;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.DOT:
					case CSharpParser.INTERR:
						{
						this.state = 770;
						this.member_access();
						}
						break;
					case CSharpParser.OPEN_PARENS:
						{
						this.state = 771;
						this.method_invocation();
						}
						break;
					case CSharpParser.OP_INC:
						{
						this.state = 772;
						this.match(CSharpParser.OP_INC);
						}
						break;
					case CSharpParser.OP_DEC:
						{
						this.state = 773;
						this.match(CSharpParser.OP_DEC);
						}
						break;
					case CSharpParser.OP_PTR:
						{
						this.state = 774;
						this.match(CSharpParser.OP_PTR);
						this.state = 775;
						this.identifier();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 779;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
					case 1:
						{
						this.state = 778;
						this.match(CSharpParser.BANG);
						}
						break;
					}
					}
					this.state = 784;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 781;
							this.bracket_expression();
							}
							}
						}
						this.state = 786;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
					}
					this.state = 788;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
					case 1:
						{
						this.state = 787;
						this.match(CSharpParser.BANG);
						}
						break;
					}
					}
					}
				}
				this.state = 794;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
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
	// @RuleVersion(0)
	public primary_expression_start(): Primary_expression_startContext {
		let _localctx: Primary_expression_startContext = new Primary_expression_startContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CSharpParser.RULE_primary_expression_start);
		let _la: number;
		try {
			let _alt: number;
			this.state = 916;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				_localctx = new LiteralExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 795;
				this.literal();
				}
				break;

			case 2:
				_localctx = new SimpleNameExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 796;
				this.identifier();
				this.state = 798;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 797;
					this.type_argument_list();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new ParenthesisExpressionsContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 800;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 801;
				this.expression();
				this.state = 802;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 4:
				_localctx = new MemberAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 804;
				this.predefined_type();
				}
				break;

			case 5:
				_localctx = new MemberAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 805;
				this.qualified_alias_member();
				}
				break;

			case 6:
				_localctx = new LiteralAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 806;
				this.match(CSharpParser.LITERAL_ACCESS);
				}
				break;

			case 7:
				_localctx = new ThisReferenceExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 807;
				this.match(CSharpParser.THIS);
				}
				break;

			case 8:
				_localctx = new BaseAccessExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 808;
				this.match(CSharpParser.BASE);
				this.state = 818;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.DOT:
					{
					this.state = 809;
					this.match(CSharpParser.DOT);
					this.state = 810;
					this.identifier();
					this.state = 812;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						this.state = 811;
						this.type_argument_list();
						}
						break;
					}
					}
					break;
				case CSharpParser.OPEN_BRACKET:
					{
					this.state = 814;
					this.match(CSharpParser.OPEN_BRACKET);
					this.state = 815;
					this.expression_list();
					this.state = 816;
					this.match(CSharpParser.CLOSE_BRACKET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 9:
				_localctx = new ObjectCreationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 820;
				this.match(CSharpParser.NEW);
				this.state = 849;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BOOL:
				case CSharpParser.BY:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.DECIMAL:
				case CSharpParser.DESCENDING:
				case CSharpParser.DOUBLE:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FLOAT:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INT:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.LONG:
				case CSharpParser.NAMEOF:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SBYTE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.SHORT:
				case CSharpParser.STRING:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.UNMANAGED:
				case CSharpParser.USHORT:
				case CSharpParser.VAR:
				case CSharpParser.VOID:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
				case CSharpParser.OPEN_PARENS:
					{
					this.state = 821;
					this.type_();
					this.state = 843;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 64, this._ctx) ) {
					case 1:
						{
						this.state = 822;
						this.object_creation_expression();
						}
						break;

					case 2:
						{
						this.state = 823;
						this.object_or_collection_initializer();
						}
						break;

					case 3:
						{
						this.state = 824;
						this.match(CSharpParser.OPEN_BRACKET);
						this.state = 825;
						this.expression_list();
						this.state = 826;
						this.match(CSharpParser.CLOSE_BRACKET);
						this.state = 830;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 827;
								this.rank_specifier();
								}
								}
							}
							this.state = 832;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 61, this._ctx);
						}
						this.state = 834;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
						case 1:
							{
							this.state = 833;
							this.array_initializer();
							}
							break;
						}
						}
						break;

					case 4:
						{
						this.state = 837;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 836;
							this.rank_specifier();
							}
							}
							this.state = 839;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === CSharpParser.OPEN_BRACKET);
						this.state = 841;
						this.array_initializer();
						}
						break;
					}
					}
					break;
				case CSharpParser.OPEN_BRACE:
					{
					this.state = 845;
					this.anonymous_object_initializer();
					}
					break;
				case CSharpParser.OPEN_BRACKET:
					{
					this.state = 846;
					this.rank_specifier();
					this.state = 847;
					this.array_initializer();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				_localctx = new TupleExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 851;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 852;
				this.argument();
				this.state = 855;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 853;
					this.match(CSharpParser.COMMA);
					this.state = 854;
					this.argument();
					}
					}
					this.state = 857;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CSharpParser.COMMA);
				this.state = 859;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 11:
				_localctx = new TypeofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 861;
				this.match(CSharpParser.TYPEOF);
				this.state = 862;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 866;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
				case 1:
					{
					this.state = 863;
					this.unbound_type_name();
					}
					break;

				case 2:
					{
					this.state = 864;
					this.type_();
					}
					break;

				case 3:
					{
					this.state = 865;
					this.match(CSharpParser.VOID);
					}
					break;
				}
				this.state = 868;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 12:
				_localctx = new CheckedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 869;
				this.match(CSharpParser.CHECKED);
				this.state = 870;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 871;
				this.expression();
				this.state = 872;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 13:
				_localctx = new UncheckedExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 874;
				this.match(CSharpParser.UNCHECKED);
				this.state = 875;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 876;
				this.expression();
				this.state = 877;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 14:
				_localctx = new DefaultValueExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 879;
				this.match(CSharpParser.DEFAULT);
				this.state = 884;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
				case 1:
					{
					this.state = 880;
					this.match(CSharpParser.OPEN_PARENS);
					this.state = 881;
					this.type_();
					this.state = 882;
					this.match(CSharpParser.CLOSE_PARENS);
					}
					break;
				}
				}
				break;

			case 15:
				_localctx = new AnonymousMethodExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 887;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.ASYNC) {
					{
					this.state = 886;
					this.match(CSharpParser.ASYNC);
					}
				}

				this.state = 889;
				this.match(CSharpParser.DELEGATE);
				this.state = 895;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.OPEN_PARENS) {
					{
					this.state = 890;
					this.match(CSharpParser.OPEN_PARENS);
					this.state = 892;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
						{
						this.state = 891;
						this.explicit_anonymous_function_parameter_list();
						}
					}

					this.state = 894;
					this.match(CSharpParser.CLOSE_PARENS);
					}
				}

				this.state = 897;
				this.block();
				}
				break;

			case 16:
				_localctx = new SizeofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 898;
				this.match(CSharpParser.SIZEOF);
				this.state = 899;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 900;
				this.type_();
				this.state = 901;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 17:
				_localctx = new NameofExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 903;
				this.match(CSharpParser.NAMEOF);
				this.state = 904;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 910;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 905;
						this.identifier();
						this.state = 906;
						this.match(CSharpParser.DOT);
						}
						}
					}
					this.state = 912;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 72, this._ctx);
				}
				this.state = 913;
				this.identifier();
				this.state = 914;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;
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
	public throwable_expression(): Throwable_expressionContext {
		let _localctx: Throwable_expressionContext = new Throwable_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CSharpParser.RULE_throwable_expression);
		try {
			this.state = 920;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 918;
				this.expression();
				}
				break;
			case CSharpParser.THROW:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 919;
				this.throw_expression();
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
	public throw_expression(): Throw_expressionContext {
		let _localctx: Throw_expressionContext = new Throw_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CSharpParser.RULE_throw_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 922;
			this.match(CSharpParser.THROW);
			this.state = 923;
			this.expression();
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
	public member_access(): Member_accessContext {
		let _localctx: Member_accessContext = new Member_accessContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CSharpParser.RULE_member_access);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 926;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTERR) {
				{
				this.state = 925;
				this.match(CSharpParser.INTERR);
				}
			}

			this.state = 928;
			this.match(CSharpParser.DOT);
			this.state = 929;
			this.identifier();
			this.state = 931;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				{
				this.state = 930;
				this.type_argument_list();
				}
				break;
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
	// @RuleVersion(0)
	public bracket_expression(): Bracket_expressionContext {
		let _localctx: Bracket_expressionContext = new Bracket_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CSharpParser.RULE_bracket_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTERR) {
				{
				this.state = 933;
				this.match(CSharpParser.INTERR);
				}
			}

			this.state = 936;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 937;
			this.indexer_argument();
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 938;
				this.match(CSharpParser.COMMA);
				this.state = 939;
				this.indexer_argument();
				}
				}
				this.state = 944;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 945;
			this.match(CSharpParser.CLOSE_BRACKET);
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
	public indexer_argument(): Indexer_argumentContext {
		let _localctx: Indexer_argumentContext = new Indexer_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CSharpParser.RULE_indexer_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 79, this._ctx) ) {
			case 1:
				{
				this.state = 947;
				this.identifier();
				this.state = 948;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 952;
			this.expression();
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
	public predefined_type(): Predefined_typeContext {
		let _localctx: Predefined_typeContext = new Predefined_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CSharpParser.RULE_predefined_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 954;
			_la = this._input.LA(1);
			if (!(((((_la - 18)) & ~0x1F) === 0 && ((1 << (_la - 18)) & ((1 << (CSharpParser.BOOL - 18)) | (1 << (CSharpParser.BYTE - 18)) | (1 << (CSharpParser.CHAR - 18)) | (1 << (CSharpParser.DECIMAL - 18)) | (1 << (CSharpParser.DOUBLE - 18)) | (1 << (CSharpParser.FLOAT - 18)))) !== 0) || ((((_la - 55)) & ~0x1F) === 0 && ((1 << (_la - 55)) & ((1 << (CSharpParser.INT - 55)) | (1 << (CSharpParser.LONG - 55)) | (1 << (CSharpParser.OBJECT - 55)) | (1 << (CSharpParser.SBYTE - 55)))) !== 0) || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & ((1 << (CSharpParser.SHORT - 87)) | (1 << (CSharpParser.STRING - 87)) | (1 << (CSharpParser.UINT - 87)) | (1 << (CSharpParser.ULONG - 87)) | (1 << (CSharpParser.USHORT - 87)))) !== 0))) {
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
	// @RuleVersion(0)
	public expression_list(): Expression_listContext {
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CSharpParser.RULE_expression_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.expression();
			this.state = 961;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 957;
				this.match(CSharpParser.COMMA);
				this.state = 958;
				this.expression();
				}
				}
				this.state = 963;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public object_or_collection_initializer(): Object_or_collection_initializerContext {
		let _localctx: Object_or_collection_initializerContext = new Object_or_collection_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CSharpParser.RULE_object_or_collection_initializer);
		try {
			this.state = 966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 964;
				this.object_initializer();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 965;
				this.collection_initializer();
				}
				break;
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
	public object_initializer(): Object_initializerContext {
		let _localctx: Object_initializerContext = new Object_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CSharpParser.RULE_object_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)) | (1 << (CSharpParser.OPEN_BRACKET - 102)))) !== 0)) {
				{
				this.state = 969;
				this.member_initializer_list();
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 970;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 975;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public member_initializer_list(): Member_initializer_listContext {
		let _localctx: Member_initializer_listContext = new Member_initializer_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CSharpParser.RULE_member_initializer_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 977;
			this.member_initializer();
			this.state = 982;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 978;
					this.match(CSharpParser.COMMA);
					this.state = 979;
					this.member_initializer();
					}
					}
				}
				this.state = 984;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
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
	// @RuleVersion(0)
	public member_initializer(): Member_initializerContext {
		let _localctx: Member_initializerContext = new Member_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CSharpParser.RULE_member_initializer);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 990;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.UNMANAGED:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				{
				this.state = 985;
				this.identifier();
				}
				break;
			case CSharpParser.OPEN_BRACKET:
				{
				this.state = 986;
				this.match(CSharpParser.OPEN_BRACKET);
				this.state = 987;
				this.expression();
				this.state = 988;
				this.match(CSharpParser.CLOSE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 992;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 993;
			this.initializer_value();
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
	public initializer_value(): Initializer_valueContext {
		let _localctx: Initializer_valueContext = new Initializer_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CSharpParser.RULE_initializer_value);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 995;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 996;
				this.object_or_collection_initializer();
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
	public collection_initializer(): Collection_initializerContext {
		let _localctx: Collection_initializerContext = new Collection_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CSharpParser.RULE_collection_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 999;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1000;
			this.element_initializer();
			this.state = 1005;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1001;
					this.match(CSharpParser.COMMA);
					this.state = 1002;
					this.element_initializer();
					}
					}
				}
				this.state = 1007;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 87, this._ctx);
			}
			this.state = 1009;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 1008;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 1011;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public element_initializer(): Element_initializerContext {
		let _localctx: Element_initializerContext = new Element_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CSharpParser.RULE_element_initializer);
		try {
			this.state = 1018;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1013;
				this.non_assignment_expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1014;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 1015;
				this.expression_list();
				this.state = 1016;
				this.match(CSharpParser.CLOSE_BRACE);
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
	public anonymous_object_initializer(): Anonymous_object_initializerContext {
		let _localctx: Anonymous_object_initializerContext = new Anonymous_object_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CSharpParser.RULE_anonymous_object_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1020;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1025;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)))) !== 0)) {
				{
				this.state = 1021;
				this.member_declarator_list();
				this.state = 1023;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1022;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 1027;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public member_declarator_list(): Member_declarator_listContext {
		let _localctx: Member_declarator_listContext = new Member_declarator_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CSharpParser.RULE_member_declarator_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1029;
			this.member_declarator();
			this.state = 1034;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1030;
					this.match(CSharpParser.COMMA);
					this.state = 1031;
					this.member_declarator();
					}
					}
				}
				this.state = 1036;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
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
	// @RuleVersion(0)
	public member_declarator(): Member_declaratorContext {
		let _localctx: Member_declaratorContext = new Member_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CSharpParser.RULE_member_declarator);
		try {
			this.state = 1042;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 93, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1037;
				this.primary_expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1038;
				this.identifier();
				this.state = 1039;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1040;
				this.expression();
				}
				break;
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
	public unbound_type_name(): Unbound_type_nameContext {
		let _localctx: Unbound_type_nameContext = new Unbound_type_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CSharpParser.RULE_unbound_type_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1044;
			this.identifier();
			this.state = 1053;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CLOSE_PARENS:
			case CSharpParser.DOT:
			case CSharpParser.LT:
				{
				this.state = 1046;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 1045;
					this.generic_dimension_specifier();
					}
				}

				}
				break;
			case CSharpParser.DOUBLE_COLON:
				{
				this.state = 1048;
				this.match(CSharpParser.DOUBLE_COLON);
				this.state = 1049;
				this.identifier();
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 1050;
					this.generic_dimension_specifier();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1062;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.DOT) {
				{
				{
				this.state = 1055;
				this.match(CSharpParser.DOT);
				this.state = 1056;
				this.identifier();
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 1057;
					this.generic_dimension_specifier();
					}
				}

				}
				}
				this.state = 1064;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public generic_dimension_specifier(): Generic_dimension_specifierContext {
		let _localctx: Generic_dimension_specifierContext = new Generic_dimension_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CSharpParser.RULE_generic_dimension_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1065;
			this.match(CSharpParser.LT);
			this.state = 1069;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1066;
				this.match(CSharpParser.COMMA);
				}
				}
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1072;
			this.match(CSharpParser.GT);
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
	public isType(): IsTypeContext {
		let _localctx: IsTypeContext = new IsTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CSharpParser.RULE_isType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1074;
			this.base_type();
			this.state = 1079;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 1077;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 1075;
						this.rank_specifier();
						}
						break;
					case CSharpParser.STAR:
						{
						this.state = 1076;
						this.match(CSharpParser.STAR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 1081;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 101, this._ctx);
			}
			this.state = 1083;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 1082;
				this.match(CSharpParser.INTERR);
				}
				break;
			}
			this.state = 1086;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 1085;
				this.isTypePatternArms();
				}
				break;
			}
			this.state = 1089;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 1088;
				this.identifier();
				}
				break;
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
	// @RuleVersion(0)
	public isTypePatternArms(): IsTypePatternArmsContext {
		let _localctx: IsTypePatternArmsContext = new IsTypePatternArmsContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CSharpParser.RULE_isTypePatternArms);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1091;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1092;
			this.isTypePatternArm();
			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1093;
				this.match(CSharpParser.COMMA);
				this.state = 1094;
				this.isTypePatternArm();
				}
				}
				this.state = 1099;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1100;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public isTypePatternArm(): IsTypePatternArmContext {
		let _localctx: IsTypePatternArmContext = new IsTypePatternArmContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CSharpParser.RULE_isTypePatternArm);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1102;
			this.identifier();
			this.state = 1103;
			this.match(CSharpParser.COLON);
			this.state = 1104;
			this.expression();
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
	public lambda_expression(): Lambda_expressionContext {
		let _localctx: Lambda_expressionContext = new Lambda_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CSharpParser.RULE_lambda_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1107;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 1106;
				this.match(CSharpParser.ASYNC);
				}
				break;
			}
			this.state = 1109;
			this.anonymous_function_signature();
			this.state = 1110;
			this.right_arrow();
			this.state = 1111;
			this.anonymous_function_body();
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
	public anonymous_function_signature(): Anonymous_function_signatureContext {
		let _localctx: Anonymous_function_signatureContext = new Anonymous_function_signatureContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CSharpParser.RULE_anonymous_function_signature);
		try {
			this.state = 1124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1113;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1114;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1115;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1116;
				this.explicit_anonymous_function_parameter_list();
				this.state = 1117;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1119;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1120;
				this.implicit_anonymous_function_parameter_list();
				this.state = 1121;
				this.match(CSharpParser.CLOSE_PARENS);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1123;
				this.identifier();
				}
				break;
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
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext {
		let _localctx: Explicit_anonymous_function_parameter_listContext = new Explicit_anonymous_function_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CSharpParser.RULE_explicit_anonymous_function_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1126;
			this.explicit_anonymous_function_parameter();
			this.state = 1131;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1127;
				this.match(CSharpParser.COMMA);
				this.state = 1128;
				this.explicit_anonymous_function_parameter();
				}
				}
				this.state = 1133;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public explicit_anonymous_function_parameter(): Explicit_anonymous_function_parameterContext {
		let _localctx: Explicit_anonymous_function_parameterContext = new Explicit_anonymous_function_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CSharpParser.RULE_explicit_anonymous_function_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.IN - 54)) | (1 << (CSharpParser.OUT - 54)) | (1 << (CSharpParser.REF - 54)))) !== 0)) {
				{
				this.state = 1134;
				_localctx._refout = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.IN - 54)) | (1 << (CSharpParser.OUT - 54)) | (1 << (CSharpParser.REF - 54)))) !== 0))) {
					_localctx._refout = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1137;
			this.type_();
			this.state = 1138;
			this.identifier();
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
	public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext {
		let _localctx: Implicit_anonymous_function_parameter_listContext = new Implicit_anonymous_function_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CSharpParser.RULE_implicit_anonymous_function_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1140;
			this.identifier();
			this.state = 1145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1141;
				this.match(CSharpParser.COMMA);
				this.state = 1142;
				this.identifier();
				}
				}
				this.state = 1147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public anonymous_function_body(): Anonymous_function_bodyContext {
		let _localctx: Anonymous_function_bodyContext = new Anonymous_function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CSharpParser.RULE_anonymous_function_body);
		try {
			this.state = 1150;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1148;
				this.throwable_expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1149;
				this.block();
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
	public query_expression(): Query_expressionContext {
		let _localctx: Query_expressionContext = new Query_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CSharpParser.RULE_query_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this.from_clause();
			this.state = 1153;
			this.query_body();
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
	public from_clause(): From_clauseContext {
		let _localctx: From_clauseContext = new From_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CSharpParser.RULE_from_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1155;
			this.match(CSharpParser.FROM);
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				{
				this.state = 1156;
				this.type_();
				}
				break;
			}
			this.state = 1159;
			this.identifier();
			this.state = 1160;
			this.match(CSharpParser.IN);
			this.state = 1161;
			this.expression();
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
	public query_body(): Query_bodyContext {
		let _localctx: Query_bodyContext = new Query_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CSharpParser.RULE_query_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (CSharpParser.FROM - 48)) | (1 << (CSharpParser.JOIN - 48)) | (1 << (CSharpParser.LET - 48)) | (1 << (CSharpParser.ORDERBY - 48)))) !== 0) || _la === CSharpParser.WHERE) {
				{
				{
				this.state = 1163;
				this.query_body_clause();
				}
				}
				this.state = 1168;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1169;
			this.select_or_group_clause();
			this.state = 1171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 114, this._ctx) ) {
			case 1:
				{
				this.state = 1170;
				this.query_continuation();
				}
				break;
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
	// @RuleVersion(0)
	public query_body_clause(): Query_body_clauseContext {
		let _localctx: Query_body_clauseContext = new Query_body_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CSharpParser.RULE_query_body_clause);
		try {
			this.state = 1178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.FROM:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1173;
				this.from_clause();
				}
				break;
			case CSharpParser.LET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1174;
				this.let_clause();
				}
				break;
			case CSharpParser.WHERE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1175;
				this.where_clause();
				}
				break;
			case CSharpParser.JOIN:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1176;
				this.combined_join_clause();
				}
				break;
			case CSharpParser.ORDERBY:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1177;
				this.orderby_clause();
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
	public let_clause(): Let_clauseContext {
		let _localctx: Let_clauseContext = new Let_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CSharpParser.RULE_let_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1180;
			this.match(CSharpParser.LET);
			this.state = 1181;
			this.identifier();
			this.state = 1182;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 1183;
			this.expression();
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
	public where_clause(): Where_clauseContext {
		let _localctx: Where_clauseContext = new Where_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CSharpParser.RULE_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1185;
			this.match(CSharpParser.WHERE);
			this.state = 1186;
			this.expression();
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
	public combined_join_clause(): Combined_join_clauseContext {
		let _localctx: Combined_join_clauseContext = new Combined_join_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CSharpParser.RULE_combined_join_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1188;
			this.match(CSharpParser.JOIN);
			this.state = 1190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				{
				this.state = 1189;
				this.type_();
				}
				break;
			}
			this.state = 1192;
			this.identifier();
			this.state = 1193;
			this.match(CSharpParser.IN);
			this.state = 1194;
			this.expression();
			this.state = 1195;
			this.match(CSharpParser.ON);
			this.state = 1196;
			this.expression();
			this.state = 1197;
			this.match(CSharpParser.EQUALS);
			this.state = 1198;
			this.expression();
			this.state = 1201;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.INTO) {
				{
				this.state = 1199;
				this.match(CSharpParser.INTO);
				this.state = 1200;
				this.identifier();
				}
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
	// @RuleVersion(0)
	public orderby_clause(): Orderby_clauseContext {
		let _localctx: Orderby_clauseContext = new Orderby_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CSharpParser.RULE_orderby_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1203;
			this.match(CSharpParser.ORDERBY);
			this.state = 1204;
			this.ordering();
			this.state = 1209;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1205;
				this.match(CSharpParser.COMMA);
				this.state = 1206;
				this.ordering();
				}
				}
				this.state = 1211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public ordering(): OrderingContext {
		let _localctx: OrderingContext = new OrderingContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CSharpParser.RULE_ordering);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1212;
			this.expression();
			this.state = 1214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASCENDING || _la === CSharpParser.DESCENDING) {
				{
				this.state = 1213;
				_localctx._dir = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.ASCENDING || _la === CSharpParser.DESCENDING)) {
					_localctx._dir = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
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
	// @RuleVersion(0)
	public select_or_group_clause(): Select_or_group_clauseContext {
		let _localctx: Select_or_group_clauseContext = new Select_or_group_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CSharpParser.RULE_select_or_group_clause);
		try {
			this.state = 1223;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.SELECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1216;
				this.match(CSharpParser.SELECT);
				this.state = 1217;
				this.expression();
				}
				break;
			case CSharpParser.GROUP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1218;
				this.match(CSharpParser.GROUP);
				this.state = 1219;
				this.expression();
				this.state = 1220;
				this.match(CSharpParser.BY);
				this.state = 1221;
				this.expression();
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
	public query_continuation(): Query_continuationContext {
		let _localctx: Query_continuationContext = new Query_continuationContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CSharpParser.RULE_query_continuation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1225;
			this.match(CSharpParser.INTO);
			this.state = 1226;
			this.identifier();
			this.state = 1227;
			this.query_body();
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
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CSharpParser.RULE_statement);
		try {
			this.state = 1232;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1229;
				this.labeled_Statement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1230;
				this.declarationStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1231;
				this.embedded_statement();
				}
				break;
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
	public declarationStatement(): DeclarationStatementContext {
		let _localctx: DeclarationStatementContext = new DeclarationStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CSharpParser.RULE_declarationStatement);
		try {
			this.state = 1241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 122, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1234;
				this.local_variable_declaration();
				this.state = 1235;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1237;
				this.local_constant_declaration();
				this.state = 1238;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1240;
				this.local_function_declaration();
				}
				break;
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
	public local_function_declaration(): Local_function_declarationContext {
		let _localctx: Local_function_declarationContext = new Local_function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CSharpParser.RULE_local_function_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1243;
			this.local_function_header();
			this.state = 1244;
			this.local_function_body();
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
	public local_function_header(): Local_function_headerContext {
		let _localctx: Local_function_headerContext = new Local_function_headerContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CSharpParser.RULE_local_function_header);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 123, this._ctx) ) {
			case 1:
				{
				this.state = 1246;
				this.local_function_modifiers();
				}
				break;
			}
			this.state = 1249;
			this.return_type();
			this.state = 1250;
			this.identifier();
			this.state = 1252;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 1251;
				this.type_parameter_list();
				}
			}

			this.state = 1254;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				this.state = 1255;
				this.formal_parameter_list();
				}
			}

			this.state = 1258;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 1260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 1259;
				this.type_parameter_constraints_clauses();
				}
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
	// @RuleVersion(0)
	public local_function_modifiers(): Local_function_modifiersContext {
		let _localctx: Local_function_modifiersContext = new Local_function_modifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CSharpParser.RULE_local_function_modifiers);
		let _la: number;
		try {
			this.state = 1268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ASYNC:
			case CSharpParser.UNSAFE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1262;
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.ASYNC || _la === CSharpParser.UNSAFE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1264;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.STATIC) {
					{
					this.state = 1263;
					this.match(CSharpParser.STATIC);
					}
				}

				}
				break;
			case CSharpParser.STATIC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1266;
				this.match(CSharpParser.STATIC);
				this.state = 1267;
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.ASYNC || _la === CSharpParser.UNSAFE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
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
	public local_function_body(): Local_function_bodyContext {
		let _localctx: Local_function_bodyContext = new Local_function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CSharpParser.RULE_local_function_body);
		try {
			this.state = 1275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1270;
				this.block();
				}
				break;
			case CSharpParser.ASSIGNMENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1271;
				this.right_arrow();
				this.state = 1272;
				this.throwable_expression();
				this.state = 1273;
				this.match(CSharpParser.SEMICOLON);
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
	public labeled_Statement(): Labeled_StatementContext {
		let _localctx: Labeled_StatementContext = new Labeled_StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CSharpParser.RULE_labeled_Statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1277;
			this.identifier();
			this.state = 1278;
			this.match(CSharpParser.COLON);
			this.state = 1279;
			this.statement();
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
	public embedded_statement(): Embedded_statementContext {
		let _localctx: Embedded_statementContext = new Embedded_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CSharpParser.RULE_embedded_statement);
		try {
			this.state = 1283;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1281;
				this.block();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GOTO:
			case CSharpParser.GROUP:
			case CSharpParser.IF:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.WHILE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.SEMICOLON:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1282;
				this.simple_embedded_statement();
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
	public simple_embedded_statement(): Simple_embedded_statementContext {
		let _localctx: Simple_embedded_statementContext = new Simple_embedded_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CSharpParser.RULE_simple_embedded_statement);
		let _la: number;
		try {
			this.state = 1415;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 143, this._ctx) ) {
			case 1:
				_localctx = new TheEmptyStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1285;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1286;
				this.expression();
				this.state = 1287;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1289;
				this.match(CSharpParser.IF);
				this.state = 1290;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1291;
				this.expression();
				this.state = 1292;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1293;
				this.if_body();
				this.state = 1296;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
				case 1:
					{
					this.state = 1294;
					this.match(CSharpParser.ELSE);
					this.state = 1295;
					this.if_body();
					}
					break;
				}
				}
				break;

			case 4:
				_localctx = new SwitchStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1298;
				this.match(CSharpParser.SWITCH);
				this.state = 1299;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1300;
				this.expression();
				this.state = 1301;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1302;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 1306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.CASE || _la === CSharpParser.DEFAULT) {
					{
					{
					this.state = 1303;
					this.switch_section();
					}
					}
					this.state = 1308;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1309;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;

			case 5:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1311;
				this.match(CSharpParser.WHILE);
				this.state = 1312;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1313;
				this.expression();
				this.state = 1314;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1315;
				this.embedded_statement();
				}
				break;

			case 6:
				_localctx = new DoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1317;
				this.match(CSharpParser.DO);
				this.state = 1318;
				this.embedded_statement();
				this.state = 1319;
				this.match(CSharpParser.WHILE);
				this.state = 1320;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1321;
				this.expression();
				this.state = 1322;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1323;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 7:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1325;
				this.match(CSharpParser.FOR);
				this.state = 1326;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FIXED - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.USING - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CSharpParser.VOID - 108)) | (1 << (CSharpParser.WHEN - 108)) | (1 << (CSharpParser.WHERE - 108)) | (1 << (CSharpParser.YIELD - 108)) | (1 << (CSharpParser.IDENTIFIER - 108)) | (1 << (CSharpParser.LITERAL_ACCESS - 108)) | (1 << (CSharpParser.INTEGER_LITERAL - 108)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.REAL_LITERAL - 108)) | (1 << (CSharpParser.CHARACTER_LITERAL - 108)) | (1 << (CSharpParser.REGULAR_STRING - 108)) | (1 << (CSharpParser.VERBATIUM_STRING - 108)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 108)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 108)) | (1 << (CSharpParser.OPEN_PARENS - 108)) | (1 << (CSharpParser.PLUS - 108)) | (1 << (CSharpParser.MINUS - 108)) | (1 << (CSharpParser.STAR - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (CSharpParser.AMP - 140)) | (1 << (CSharpParser.CARET - 140)) | (1 << (CSharpParser.BANG - 140)) | (1 << (CSharpParser.TILDE - 140)) | (1 << (CSharpParser.OP_INC - 140)) | (1 << (CSharpParser.OP_DEC - 140)) | (1 << (CSharpParser.OP_RANGE - 140)))) !== 0)) {
					{
					this.state = 1327;
					this.for_initializer();
					}
				}

				this.state = 1330;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1332;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 1331;
					this.expression();
					}
				}

				this.state = 1334;
				this.match(CSharpParser.SEMICOLON);
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 1335;
					this.for_iterator();
					}
				}

				this.state = 1338;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1339;
				this.embedded_statement();
				}
				break;

			case 8:
				_localctx = new ForeachStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.AWAIT) {
					{
					this.state = 1340;
					this.match(CSharpParser.AWAIT);
					}
				}

				this.state = 1343;
				this.match(CSharpParser.FOREACH);
				this.state = 1344;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1345;
				this.local_variable_type();
				this.state = 1346;
				this.identifier();
				this.state = 1347;
				this.match(CSharpParser.IN);
				this.state = 1348;
				this.expression();
				this.state = 1349;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1350;
				this.embedded_statement();
				}
				break;

			case 9:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1352;
				this.match(CSharpParser.BREAK);
				this.state = 1353;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 10:
				_localctx = new ContinueStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1354;
				this.match(CSharpParser.CONTINUE);
				this.state = 1355;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 11:
				_localctx = new GotoStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1356;
				this.match(CSharpParser.GOTO);
				this.state = 1361;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BY:
				case CSharpParser.DESCENDING:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.NAMEOF:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.UNMANAGED:
				case CSharpParser.VAR:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 1357;
					this.identifier();
					}
					break;
				case CSharpParser.CASE:
					{
					this.state = 1358;
					this.match(CSharpParser.CASE);
					this.state = 1359;
					this.expression();
					}
					break;
				case CSharpParser.DEFAULT:
					{
					this.state = 1360;
					this.match(CSharpParser.DEFAULT);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1363;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 12:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1364;
				this.match(CSharpParser.RETURN);
				this.state = 1366;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 1365;
					this.expression();
					}
				}

				this.state = 1368;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 13:
				_localctx = new ThrowStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1369;
				this.match(CSharpParser.THROW);
				this.state = 1371;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 1370;
					this.expression();
					}
				}

				this.state = 1373;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 14:
				_localctx = new TryStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1374;
				this.match(CSharpParser.TRY);
				this.state = 1375;
				this.block();
				this.state = 1381;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.CATCH:
					{
					this.state = 1376;
					this.catch_clauses();
					this.state = 1378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.FINALLY) {
						{
						this.state = 1377;
						this.finally_clause();
						}
					}

					}
					break;
				case CSharpParser.FINALLY:
					{
					this.state = 1380;
					this.finally_clause();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 15:
				_localctx = new CheckedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1383;
				this.match(CSharpParser.CHECKED);
				this.state = 1384;
				this.block();
				}
				break;

			case 16:
				_localctx = new UncheckedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1385;
				this.match(CSharpParser.UNCHECKED);
				this.state = 1386;
				this.block();
				}
				break;

			case 17:
				_localctx = new LockStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1387;
				this.match(CSharpParser.LOCK);
				this.state = 1388;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1389;
				this.expression();
				this.state = 1390;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1391;
				this.embedded_statement();
				}
				break;

			case 18:
				_localctx = new UsingStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1393;
				this.match(CSharpParser.USING);
				this.state = 1394;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1395;
				this.resource_acquisition();
				this.state = 1396;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1397;
				this.embedded_statement();
				}
				break;

			case 19:
				_localctx = new YieldStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1399;
				this.match(CSharpParser.YIELD);
				this.state = 1403;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.RETURN:
					{
					this.state = 1400;
					this.match(CSharpParser.RETURN);
					this.state = 1401;
					this.expression();
					}
					break;
				case CSharpParser.BREAK:
					{
					this.state = 1402;
					this.match(CSharpParser.BREAK);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1405;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 20:
				_localctx = new UnsafeStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1406;
				this.match(CSharpParser.UNSAFE);
				this.state = 1407;
				this.block();
				}
				break;

			case 21:
				_localctx = new FixedStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1408;
				this.match(CSharpParser.FIXED);
				this.state = 1409;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 1410;
				this.pointer_type();
				this.state = 1411;
				this.fixed_pointer_declarators();
				this.state = 1412;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 1413;
				this.embedded_statement();
				}
				break;
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
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CSharpParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1417;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BREAK - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.CONST - 10)) | (1 << (CSharpParser.CONTINUE - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DO - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FIXED - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FOR - 42)) | (1 << (CSharpParser.FOREACH - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GOTO - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.IF - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LOCK - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.RETURN - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STATIC - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.SWITCH - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.THROW - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TRY - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.UNSAFE - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.USING - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CSharpParser.VOID - 108)) | (1 << (CSharpParser.WHEN - 108)) | (1 << (CSharpParser.WHERE - 108)) | (1 << (CSharpParser.WHILE - 108)) | (1 << (CSharpParser.YIELD - 108)) | (1 << (CSharpParser.IDENTIFIER - 108)) | (1 << (CSharpParser.LITERAL_ACCESS - 108)) | (1 << (CSharpParser.INTEGER_LITERAL - 108)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.REAL_LITERAL - 108)) | (1 << (CSharpParser.CHARACTER_LITERAL - 108)) | (1 << (CSharpParser.REGULAR_STRING - 108)) | (1 << (CSharpParser.VERBATIUM_STRING - 108)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 108)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 108)) | (1 << (CSharpParser.OPEN_BRACE - 108)) | (1 << (CSharpParser.OPEN_PARENS - 108)) | (1 << (CSharpParser.SEMICOLON - 108)) | (1 << (CSharpParser.PLUS - 108)) | (1 << (CSharpParser.MINUS - 108)) | (1 << (CSharpParser.STAR - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (CSharpParser.AMP - 140)) | (1 << (CSharpParser.CARET - 140)) | (1 << (CSharpParser.BANG - 140)) | (1 << (CSharpParser.TILDE - 140)) | (1 << (CSharpParser.OP_INC - 140)) | (1 << (CSharpParser.OP_DEC - 140)) | (1 << (CSharpParser.OP_RANGE - 140)))) !== 0)) {
				{
				this.state = 1418;
				this.statement_list();
				}
			}

			this.state = 1421;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public local_variable_declaration(): Local_variable_declarationContext {
		let _localctx: Local_variable_declarationContext = new Local_variable_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CSharpParser.RULE_local_variable_declaration);
		let _la: number;
		try {
			this.state = 1444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VAR:
			case CSharpParser.VOID:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.OPEN_PARENS:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1427;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
				case 1:
					{
					this.state = 1423;
					this.match(CSharpParser.USING);
					}
					break;

				case 2:
					{
					this.state = 1424;
					this.match(CSharpParser.REF);
					}
					break;

				case 3:
					{
					this.state = 1425;
					this.match(CSharpParser.REF);
					this.state = 1426;
					this.match(CSharpParser.READONLY);
					}
					break;
				}
				this.state = 1429;
				this.local_variable_type();
				this.state = 1430;
				this.local_variable_declarator();
				this.state = 1437;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.COMMA) {
					{
					{
					this.state = 1431;
					this.match(CSharpParser.COMMA);
					this.state = 1432;
					this.local_variable_declarator();
					this.state = 1433;
					if (!( this.IsLocalVariableDeclaration() )) {
						throw this.createFailedPredicateException(" this.IsLocalVariableDeclaration() ");
					}
					}
					}
					this.state = 1439;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case CSharpParser.FIXED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1440;
				this.match(CSharpParser.FIXED);
				this.state = 1441;
				this.pointer_type();
				this.state = 1442;
				this.fixed_pointer_declarators();
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
	public local_variable_type(): Local_variable_typeContext {
		let _localctx: Local_variable_typeContext = new Local_variable_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CSharpParser.RULE_local_variable_type);
		try {
			this.state = 1448;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 148, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1446;
				this.match(CSharpParser.VAR);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1447;
				this.type_();
				}
				break;
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
	public local_variable_declarator(): Local_variable_declaratorContext {
		let _localctx: Local_variable_declaratorContext = new Local_variable_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CSharpParser.RULE_local_variable_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1450;
			this.identifier();
			this.state = 1456;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 150, this._ctx) ) {
			case 1:
				{
				this.state = 1451;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1453;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 149, this._ctx) ) {
				case 1:
					{
					this.state = 1452;
					this.match(CSharpParser.REF);
					}
					break;
				}
				this.state = 1455;
				this.local_variable_initializer();
				}
				break;
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
	// @RuleVersion(0)
	public local_variable_initializer(): Local_variable_initializerContext {
		let _localctx: Local_variable_initializerContext = new Local_variable_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CSharpParser.RULE_local_variable_initializer);
		try {
			this.state = 1461;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1458;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1459;
				this.array_initializer();
				}
				break;
			case CSharpParser.STACKALLOC:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1460;
				this.stackalloc_initializer();
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
	public local_constant_declaration(): Local_constant_declarationContext {
		let _localctx: Local_constant_declarationContext = new Local_constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CSharpParser.RULE_local_constant_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1463;
			this.match(CSharpParser.CONST);
			this.state = 1464;
			this.type_();
			this.state = 1465;
			this.constant_declarators();
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
	public if_body(): If_bodyContext {
		let _localctx: If_bodyContext = new If_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CSharpParser.RULE_if_body);
		try {
			this.state = 1469;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1467;
				this.block();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BREAK:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.CONTINUE:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DO:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FIXED:
			case CSharpParser.FLOAT:
			case CSharpParser.FOR:
			case CSharpParser.FOREACH:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GOTO:
			case CSharpParser.GROUP:
			case CSharpParser.IF:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LOCK:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.RETURN:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.SWITCH:
			case CSharpParser.THIS:
			case CSharpParser.THROW:
			case CSharpParser.TRUE:
			case CSharpParser.TRY:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.UNSAFE:
			case CSharpParser.USHORT:
			case CSharpParser.USING:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.WHILE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.SEMICOLON:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1468;
				this.simple_embedded_statement();
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
	public switch_section(): Switch_sectionContext {
		let _localctx: Switch_sectionContext = new Switch_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CSharpParser.RULE_switch_section);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1472;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1471;
					this.switch_label();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1474;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 153, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 1476;
			this.statement_list();
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
	public switch_label(): Switch_labelContext {
		let _localctx: Switch_labelContext = new Switch_labelContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CSharpParser.RULE_switch_label);
		let _la: number;
		try {
			this.state = 1487;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CASE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1478;
				this.match(CSharpParser.CASE);
				this.state = 1479;
				this.expression();
				this.state = 1481;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.WHEN) {
					{
					this.state = 1480;
					this.case_guard();
					}
				}

				this.state = 1483;
				this.match(CSharpParser.COLON);
				}
				break;
			case CSharpParser.DEFAULT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1485;
				this.match(CSharpParser.DEFAULT);
				this.state = 1486;
				this.match(CSharpParser.COLON);
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
	public case_guard(): Case_guardContext {
		let _localctx: Case_guardContext = new Case_guardContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CSharpParser.RULE_case_guard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.match(CSharpParser.WHEN);
			this.state = 1490;
			this.expression();
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
	public statement_list(): Statement_listContext {
		let _localctx: Statement_listContext = new Statement_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CSharpParser.RULE_statement_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1493;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1492;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1495;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 156, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public for_initializer(): For_initializerContext {
		let _localctx: For_initializerContext = new For_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CSharpParser.RULE_for_initializer);
		let _la: number;
		try {
			this.state = 1506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1497;
				this.local_variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1498;
				this.expression();
				this.state = 1503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.COMMA) {
					{
					{
					this.state = 1499;
					this.match(CSharpParser.COMMA);
					this.state = 1500;
					this.expression();
					}
					}
					this.state = 1505;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
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
	public for_iterator(): For_iteratorContext {
		let _localctx: For_iteratorContext = new For_iteratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CSharpParser.RULE_for_iterator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1508;
			this.expression();
			this.state = 1513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1509;
				this.match(CSharpParser.COMMA);
				this.state = 1510;
				this.expression();
				}
				}
				this.state = 1515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public catch_clauses(): Catch_clausesContext {
		let _localctx: Catch_clausesContext = new Catch_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, CSharpParser.RULE_catch_clauses);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 162, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1516;
				this.specific_catch_clause();
				this.state = 1520;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1517;
						this.specific_catch_clause();
						}
						}
					}
					this.state = 1522;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 160, this._ctx);
				}
				this.state = 1524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.CATCH) {
					{
					this.state = 1523;
					this.general_catch_clause();
					}
				}

				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1526;
				this.general_catch_clause();
				}
				break;
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
	public specific_catch_clause(): Specific_catch_clauseContext {
		let _localctx: Specific_catch_clauseContext = new Specific_catch_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, CSharpParser.RULE_specific_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1529;
			this.match(CSharpParser.CATCH);
			this.state = 1530;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1531;
			this.class_type();
			this.state = 1533;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)))) !== 0)) {
				{
				this.state = 1532;
				this.identifier();
				}
			}

			this.state = 1535;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 1537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHEN) {
				{
				this.state = 1536;
				this.exception_filter();
				}
			}

			this.state = 1539;
			this.block();
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
	public general_catch_clause(): General_catch_clauseContext {
		let _localctx: General_catch_clauseContext = new General_catch_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, CSharpParser.RULE_general_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1541;
			this.match(CSharpParser.CATCH);
			this.state = 1543;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHEN) {
				{
				this.state = 1542;
				this.exception_filter();
				}
			}

			this.state = 1545;
			this.block();
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
	public exception_filter(): Exception_filterContext {
		let _localctx: Exception_filterContext = new Exception_filterContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, CSharpParser.RULE_exception_filter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1547;
			this.match(CSharpParser.WHEN);
			this.state = 1548;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1549;
			this.expression();
			this.state = 1550;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public finally_clause(): Finally_clauseContext {
		let _localctx: Finally_clauseContext = new Finally_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, CSharpParser.RULE_finally_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1552;
			this.match(CSharpParser.FINALLY);
			this.state = 1553;
			this.block();
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
	public resource_acquisition(): Resource_acquisitionContext {
		let _localctx: Resource_acquisitionContext = new Resource_acquisitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, CSharpParser.RULE_resource_acquisition);
		try {
			this.state = 1557;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 166, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1555;
				this.local_variable_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1556;
				this.expression();
				}
				break;
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
	public namespace_declaration(): Namespace_declarationContext {
		let _localctx: Namespace_declarationContext = new Namespace_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, CSharpParser.RULE_namespace_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1559;
			this.match(CSharpParser.NAMESPACE);
			this.state = 1560;
			_localctx._qi = this.qualified_identifier();
			this.state = 1561;
			this.namespace_body();
			this.state = 1563;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 1562;
				this.match(CSharpParser.SEMICOLON);
				}
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
	// @RuleVersion(0)
	public qualified_identifier(): Qualified_identifierContext {
		let _localctx: Qualified_identifierContext = new Qualified_identifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, CSharpParser.RULE_qualified_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1565;
			this.identifier();
			this.state = 1570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.DOT) {
				{
				{
				this.state = 1566;
				this.match(CSharpParser.DOT);
				this.state = 1567;
				this.identifier();
				}
				}
				this.state = 1572;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public namespace_body(): Namespace_bodyContext {
		let _localctx: Namespace_bodyContext = new Namespace_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, CSharpParser.RULE_namespace_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1573;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1575;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
			case 1:
				{
				this.state = 1574;
				this.extern_alias_directives();
				}
				break;
			}
			this.state = 1578;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.USING) {
				{
				this.state = 1577;
				this.using_directives();
				}
			}

			this.state = 1581;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CSharpParser.ENUM - 37)) | (1 << (CSharpParser.EXTERN - 37)) | (1 << (CSharpParser.INTERFACE - 37)) | (1 << (CSharpParser.INTERNAL - 37)) | (1 << (CSharpParser.NAMESPACE - 37)) | (1 << (CSharpParser.NEW - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CSharpParser.OVERRIDE - 73)) | (1 << (CSharpParser.PARTIAL - 73)) | (1 << (CSharpParser.PRIVATE - 73)) | (1 << (CSharpParser.PROTECTED - 73)) | (1 << (CSharpParser.PUBLIC - 73)) | (1 << (CSharpParser.READONLY - 73)) | (1 << (CSharpParser.REF - 73)) | (1 << (CSharpParser.SEALED - 73)) | (1 << (CSharpParser.STATIC - 73)) | (1 << (CSharpParser.STRUCT - 73)) | (1 << (CSharpParser.UNSAFE - 73)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CSharpParser.VIRTUAL - 107)) | (1 << (CSharpParser.VOLATILE - 107)) | (1 << (CSharpParser.OPEN_BRACKET - 107)))) !== 0)) {
				{
				this.state = 1580;
				this.namespace_member_declarations();
				}
			}

			this.state = 1583;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public extern_alias_directives(): Extern_alias_directivesContext {
		let _localctx: Extern_alias_directivesContext = new Extern_alias_directivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, CSharpParser.RULE_extern_alias_directives);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1586;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1585;
					this.extern_alias_directive();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1588;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 172, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public extern_alias_directive(): Extern_alias_directiveContext {
		let _localctx: Extern_alias_directiveContext = new Extern_alias_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, CSharpParser.RULE_extern_alias_directive);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1590;
			this.match(CSharpParser.EXTERN);
			this.state = 1591;
			this.match(CSharpParser.ALIAS);
			this.state = 1592;
			this.identifier();
			this.state = 1593;
			this.match(CSharpParser.SEMICOLON);
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
	public using_directives(): Using_directivesContext {
		let _localctx: Using_directivesContext = new Using_directivesContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, CSharpParser.RULE_using_directives);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1596;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1595;
				this.using_directive();
				}
				}
				this.state = 1598;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.USING);
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
	public using_directive(): Using_directiveContext {
		let _localctx: Using_directiveContext = new Using_directiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, CSharpParser.RULE_using_directive);
		try {
			this.state = 1615;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 174, this._ctx) ) {
			case 1:
				_localctx = new UsingAliasDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1600;
				this.match(CSharpParser.USING);
				this.state = 1601;
				this.identifier();
				this.state = 1602;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1603;
				this.namespace_or_type_name();
				this.state = 1604;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				_localctx = new UsingNamespaceDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1606;
				this.match(CSharpParser.USING);
				this.state = 1607;
				this.namespace_or_type_name();
				this.state = 1608;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				_localctx = new UsingStaticDirectiveContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1610;
				this.match(CSharpParser.USING);
				this.state = 1611;
				this.match(CSharpParser.STATIC);
				this.state = 1612;
				this.namespace_or_type_name();
				this.state = 1613;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
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
	public namespace_member_declarations(): Namespace_member_declarationsContext {
		let _localctx: Namespace_member_declarationsContext = new Namespace_member_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, CSharpParser.RULE_namespace_member_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1618;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1617;
				this.namespace_member_declaration();
				}
				}
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (CSharpParser.ENUM - 37)) | (1 << (CSharpParser.EXTERN - 37)) | (1 << (CSharpParser.INTERFACE - 37)) | (1 << (CSharpParser.INTERNAL - 37)) | (1 << (CSharpParser.NAMESPACE - 37)) | (1 << (CSharpParser.NEW - 37)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CSharpParser.OVERRIDE - 73)) | (1 << (CSharpParser.PARTIAL - 73)) | (1 << (CSharpParser.PRIVATE - 73)) | (1 << (CSharpParser.PROTECTED - 73)) | (1 << (CSharpParser.PUBLIC - 73)) | (1 << (CSharpParser.READONLY - 73)) | (1 << (CSharpParser.REF - 73)) | (1 << (CSharpParser.SEALED - 73)) | (1 << (CSharpParser.STATIC - 73)) | (1 << (CSharpParser.STRUCT - 73)) | (1 << (CSharpParser.UNSAFE - 73)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (CSharpParser.VIRTUAL - 107)) | (1 << (CSharpParser.VOLATILE - 107)) | (1 << (CSharpParser.OPEN_BRACKET - 107)))) !== 0));
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
	public namespace_member_declaration(): Namespace_member_declarationContext {
		let _localctx: Namespace_member_declarationContext = new Namespace_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, CSharpParser.RULE_namespace_member_declaration);
		try {
			this.state = 1624;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.NAMESPACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1622;
				this.namespace_declaration();
				}
				break;
			case CSharpParser.ABSTRACT:
			case CSharpParser.ASYNC:
			case CSharpParser.CLASS:
			case CSharpParser.DELEGATE:
			case CSharpParser.ENUM:
			case CSharpParser.EXTERN:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTERNAL:
			case CSharpParser.NEW:
			case CSharpParser.OVERRIDE:
			case CSharpParser.PARTIAL:
			case CSharpParser.PRIVATE:
			case CSharpParser.PROTECTED:
			case CSharpParser.PUBLIC:
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.SEALED:
			case CSharpParser.STATIC:
			case CSharpParser.STRUCT:
			case CSharpParser.UNSAFE:
			case CSharpParser.VIRTUAL:
			case CSharpParser.VOLATILE:
			case CSharpParser.OPEN_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1623;
				this.type_declaration();
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
	public type_declaration(): Type_declarationContext {
		let _localctx: Type_declarationContext = new Type_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, CSharpParser.RULE_type_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1626;
				this.attributes();
				}
			}

			this.state = 1630;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
			case 1:
				{
				this.state = 1629;
				this.all_member_modifiers();
				}
				break;
			}
			this.state = 1637;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.CLASS:
				{
				this.state = 1632;
				this.class_definition();
				}
				break;
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.STRUCT:
				{
				this.state = 1633;
				this.struct_definition();
				}
				break;
			case CSharpParser.INTERFACE:
				{
				this.state = 1634;
				this.interface_definition();
				}
				break;
			case CSharpParser.ENUM:
				{
				this.state = 1635;
				this.enum_definition();
				}
				break;
			case CSharpParser.DELEGATE:
				{
				this.state = 1636;
				this.delegate_definition();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public qualified_alias_member(): Qualified_alias_memberContext {
		let _localctx: Qualified_alias_memberContext = new Qualified_alias_memberContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, CSharpParser.RULE_qualified_alias_member);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1639;
			this.identifier();
			this.state = 1640;
			this.match(CSharpParser.DOUBLE_COLON);
			this.state = 1641;
			this.identifier();
			this.state = 1643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 180, this._ctx) ) {
			case 1:
				{
				this.state = 1642;
				this.type_argument_list();
				}
				break;
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
	// @RuleVersion(0)
	public type_parameter_list(): Type_parameter_listContext {
		let _localctx: Type_parameter_listContext = new Type_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, CSharpParser.RULE_type_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1645;
			this.match(CSharpParser.LT);
			this.state = 1646;
			this.type_parameter();
			this.state = 1651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1647;
				this.match(CSharpParser.COMMA);
				this.state = 1648;
				this.type_parameter();
				}
				}
				this.state = 1653;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1654;
			this.match(CSharpParser.GT);
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
	public type_parameter(): Type_parameterContext {
		let _localctx: Type_parameterContext = new Type_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, CSharpParser.RULE_type_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1657;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1656;
				this.attributes();
				}
			}

			this.state = 1659;
			this.identifier();
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
	public class_base(): Class_baseContext {
		let _localctx: Class_baseContext = new Class_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, CSharpParser.RULE_class_base);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1661;
			this.match(CSharpParser.COLON);
			this.state = 1662;
			this.class_type();
			this.state = 1667;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1663;
				this.match(CSharpParser.COMMA);
				this.state = 1664;
				this.namespace_or_type_name();
				}
				}
				this.state = 1669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public interface_type_list(): Interface_type_listContext {
		let _localctx: Interface_type_listContext = new Interface_type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, CSharpParser.RULE_interface_type_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1670;
			this.namespace_or_type_name();
			this.state = 1675;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1671;
				this.match(CSharpParser.COMMA);
				this.state = 1672;
				this.namespace_or_type_name();
				}
				}
				this.state = 1677;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext {
		let _localctx: Type_parameter_constraints_clausesContext = new Type_parameter_constraints_clausesContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, CSharpParser.RULE_type_parameter_constraints_clauses);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1679;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1678;
				this.type_parameter_constraints_clause();
				}
				}
				this.state = 1681;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.WHERE);
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
	public type_parameter_constraints_clause(): Type_parameter_constraints_clauseContext {
		let _localctx: Type_parameter_constraints_clauseContext = new Type_parameter_constraints_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, CSharpParser.RULE_type_parameter_constraints_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1683;
			this.match(CSharpParser.WHERE);
			this.state = 1684;
			this.identifier();
			this.state = 1685;
			this.match(CSharpParser.COLON);
			this.state = 1686;
			this.type_parameter_constraints();
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
	public type_parameter_constraints(): Type_parameter_constraintsContext {
		let _localctx: Type_parameter_constraintsContext = new Type_parameter_constraintsContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, CSharpParser.RULE_type_parameter_constraints);
		let _la: number;
		try {
			this.state = 1698;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.NEW:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1688;
				this.constructor_constraint();
				}
				break;
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BY:
			case CSharpParser.CLASS:
			case CSharpParser.DESCENDING:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.UNMANAGED:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1689;
				this.primary_constraint();
				this.state = 1692;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 186, this._ctx) ) {
				case 1:
					{
					this.state = 1690;
					this.match(CSharpParser.COMMA);
					this.state = 1691;
					this.secondary_constraints();
					}
					break;
				}
				this.state = 1696;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1694;
					this.match(CSharpParser.COMMA);
					this.state = 1695;
					this.constructor_constraint();
					}
				}

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
	public primary_constraint(): Primary_constraintContext {
		let _localctx: Primary_constraintContext = new Primary_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, CSharpParser.RULE_primary_constraint);
		let _la: number;
		try {
			this.state = 1707;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 190, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1700;
				this.class_type();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1701;
				this.match(CSharpParser.CLASS);
				this.state = 1703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.INTERR) {
					{
					this.state = 1702;
					this.match(CSharpParser.INTERR);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1705;
				this.match(CSharpParser.STRUCT);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1706;
				this.match(CSharpParser.UNMANAGED);
				}
				break;
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
	public secondary_constraints(): Secondary_constraintsContext {
		let _localctx: Secondary_constraintsContext = new Secondary_constraintsContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, CSharpParser.RULE_secondary_constraints);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1709;
			this.namespace_or_type_name();
			this.state = 1714;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1710;
					this.match(CSharpParser.COMMA);
					this.state = 1711;
					this.namespace_or_type_name();
					}
					}
				}
				this.state = 1716;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
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
	// @RuleVersion(0)
	public constructor_constraint(): Constructor_constraintContext {
		let _localctx: Constructor_constraintContext = new Constructor_constraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, CSharpParser.RULE_constructor_constraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1717;
			this.match(CSharpParser.NEW);
			this.state = 1718;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1719;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public class_body(): Class_bodyContext {
		let _localctx: Class_bodyContext = new Class_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, CSharpParser.RULE_class_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1721;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1723;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.ENUM - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.EVENT - 32)) | (1 << (CSharpParser.EXPLICIT - 32)) | (1 << (CSharpParser.EXTERN - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IMPLICIT - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTERFACE - 32)) | (1 << (CSharpParser.INTERNAL - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OVERRIDE - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.PRIVATE - 64)) | (1 << (CSharpParser.PROTECTED - 64)) | (1 << (CSharpParser.PUBLIC - 64)) | (1 << (CSharpParser.READONLY - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SEALED - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STATIC - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.STRUCT - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.UNSAFE - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VIRTUAL - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.VOLATILE - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0) || _la === CSharpParser.TILDE) {
				{
				this.state = 1722;
				this.class_member_declarations();
				}
			}

			this.state = 1725;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public class_member_declarations(): Class_member_declarationsContext {
		let _localctx: Class_member_declarationsContext = new Class_member_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, CSharpParser.RULE_class_member_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1728;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1727;
				this.class_member_declaration();
				}
				}
				this.state = 1730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.ENUM - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.EVENT - 32)) | (1 << (CSharpParser.EXPLICIT - 32)) | (1 << (CSharpParser.EXTERN - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IMPLICIT - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTERFACE - 32)) | (1 << (CSharpParser.INTERNAL - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OVERRIDE - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.PRIVATE - 64)) | (1 << (CSharpParser.PROTECTED - 64)) | (1 << (CSharpParser.PUBLIC - 64)) | (1 << (CSharpParser.READONLY - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SEALED - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STATIC - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.STRUCT - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.UNSAFE - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VIRTUAL - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.VOLATILE - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0) || _la === CSharpParser.TILDE);
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
	public class_member_declaration(): Class_member_declarationContext {
		let _localctx: Class_member_declarationContext = new Class_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, CSharpParser.RULE_class_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1732;
				this.attributes();
				}
			}

			this.state = 1736;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 195, this._ctx) ) {
			case 1:
				{
				this.state = 1735;
				this.all_member_modifiers();
				}
				break;
			}
			this.state = 1740;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.DECIMAL:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.ENUM:
			case CSharpParser.EQUALS:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.IMPLICIT:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.VOID:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.OPEN_PARENS:
				{
				this.state = 1738;
				this.common_member_declaration();
				}
				break;
			case CSharpParser.TILDE:
				{
				this.state = 1739;
				this.destructor_definition();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public all_member_modifiers(): All_member_modifiersContext {
		let _localctx: All_member_modifiersContext = new All_member_modifiersContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, CSharpParser.RULE_all_member_modifiers);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1743;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1742;
					this.all_member_modifier();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1745;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 197, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
	public all_member_modifier(): All_member_modifierContext {
		let _localctx: All_member_modifierContext = new All_member_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, CSharpParser.RULE_all_member_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1747;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.ABSTRACT || _la === CSharpParser.ASYNC || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (CSharpParser.EXTERN - 41)) | (1 << (CSharpParser.INTERNAL - 41)) | (1 << (CSharpParser.NEW - 41)))) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (CSharpParser.OVERRIDE - 73)) | (1 << (CSharpParser.PARTIAL - 73)) | (1 << (CSharpParser.PRIVATE - 73)) | (1 << (CSharpParser.PROTECTED - 73)) | (1 << (CSharpParser.PUBLIC - 73)) | (1 << (CSharpParser.READONLY - 73)) | (1 << (CSharpParser.SEALED - 73)) | (1 << (CSharpParser.STATIC - 73)) | (1 << (CSharpParser.UNSAFE - 73)))) !== 0) || _la === CSharpParser.VIRTUAL || _la === CSharpParser.VOLATILE)) {
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
	// @RuleVersion(0)
	public common_member_declaration(): Common_member_declarationContext {
		let _localctx: Common_member_declarationContext = new Common_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, CSharpParser.RULE_common_member_declaration);
		try {
			this.state = 1768;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1749;
				this.constant_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1750;
				this.typed_member_declaration();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1751;
				this.event_declaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1752;
				this.conversion_operator_declarator();
				this.state = 1758;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.OPEN_BRACE:
				case CSharpParser.SEMICOLON:
					{
					this.state = 1753;
					this.body();
					}
					break;
				case CSharpParser.ASSIGNMENT:
					{
					this.state = 1754;
					this.right_arrow();
					this.state = 1755;
					this.throwable_expression();
					this.state = 1756;
					this.match(CSharpParser.SEMICOLON);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1760;
				this.constructor_declaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1761;
				this.match(CSharpParser.VOID);
				this.state = 1762;
				this.method_declaration();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1763;
				this.class_definition();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1764;
				this.struct_definition();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1765;
				this.interface_definition();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1766;
				this.enum_definition();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1767;
				this.delegate_definition();
				}
				break;
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
	public typed_member_declaration(): Typed_member_declarationContext {
		let _localctx: Typed_member_declarationContext = new Typed_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, CSharpParser.RULE_typed_member_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1775;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 200, this._ctx) ) {
			case 1:
				{
				this.state = 1770;
				this.match(CSharpParser.REF);
				}
				break;

			case 2:
				{
				this.state = 1771;
				this.match(CSharpParser.READONLY);
				this.state = 1772;
				this.match(CSharpParser.REF);
				}
				break;

			case 3:
				{
				this.state = 1773;
				this.match(CSharpParser.REF);
				this.state = 1774;
				this.match(CSharpParser.READONLY);
				}
				break;
			}
			this.state = 1777;
			this.type_();
			this.state = 1787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 201, this._ctx) ) {
			case 1:
				{
				this.state = 1778;
				this.namespace_or_type_name();
				this.state = 1779;
				this.match(CSharpParser.DOT);
				this.state = 1780;
				this.indexer_declaration();
				}
				break;

			case 2:
				{
				this.state = 1782;
				this.method_declaration();
				}
				break;

			case 3:
				{
				this.state = 1783;
				this.property_declaration();
				}
				break;

			case 4:
				{
				this.state = 1784;
				this.indexer_declaration();
				}
				break;

			case 5:
				{
				this.state = 1785;
				this.operator_declaration();
				}
				break;

			case 6:
				{
				this.state = 1786;
				this.field_declaration();
				}
				break;
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
	// @RuleVersion(0)
	public constant_declarators(): Constant_declaratorsContext {
		let _localctx: Constant_declaratorsContext = new Constant_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, CSharpParser.RULE_constant_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1789;
			this.constant_declarator();
			this.state = 1794;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1790;
				this.match(CSharpParser.COMMA);
				this.state = 1791;
				this.constant_declarator();
				}
				}
				this.state = 1796;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public constant_declarator(): Constant_declaratorContext {
		let _localctx: Constant_declaratorContext = new Constant_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, CSharpParser.RULE_constant_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1797;
			this.identifier();
			this.state = 1798;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 1799;
			this.expression();
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
	public variable_declarators(): Variable_declaratorsContext {
		let _localctx: Variable_declaratorsContext = new Variable_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, CSharpParser.RULE_variable_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1801;
			this.variable_declarator();
			this.state = 1806;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 1802;
				this.match(CSharpParser.COMMA);
				this.state = 1803;
				this.variable_declarator();
				}
				}
				this.state = 1808;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public variable_declarator(): Variable_declaratorContext {
		let _localctx: Variable_declaratorContext = new Variable_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, CSharpParser.RULE_variable_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1809;
			this.identifier();
			this.state = 1812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 1810;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 1811;
				this.variable_initializer();
				}
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
	// @RuleVersion(0)
	public variable_initializer(): Variable_initializerContext {
		let _localctx: Variable_initializerContext = new Variable_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, CSharpParser.RULE_variable_initializer);
		try {
			this.state = 1816;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1814;
				this.expression();
				}
				break;
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1815;
				this.array_initializer();
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
	public return_type(): Return_typeContext {
		let _localctx: Return_typeContext = new Return_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, CSharpParser.RULE_return_type);
		try {
			this.state = 1820;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 206, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1818;
				this.type_();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1819;
				this.match(CSharpParser.VOID);
				}
				break;
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
	public member_name(): Member_nameContext {
		let _localctx: Member_nameContext = new Member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, CSharpParser.RULE_member_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1822;
			this.namespace_or_type_name();
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
	public method_body(): Method_bodyContext {
		let _localctx: Method_bodyContext = new Method_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, CSharpParser.RULE_method_body);
		try {
			this.state = 1826;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1824;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1825;
				this.match(CSharpParser.SEMICOLON);
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
	public formal_parameter_list(): Formal_parameter_listContext {
		let _localctx: Formal_parameter_listContext = new Formal_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, CSharpParser.RULE_formal_parameter_list);
		let _la: number;
		try {
			this.state = 1834;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 209, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1828;
				this.parameter_array();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1829;
				this.fixed_parameters();
				this.state = 1832;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 1830;
					this.match(CSharpParser.COMMA);
					this.state = 1831;
					this.parameter_array();
					}
				}

				}
				break;
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
	public fixed_parameters(): Fixed_parametersContext {
		let _localctx: Fixed_parametersContext = new Fixed_parametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, CSharpParser.RULE_fixed_parameters);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1836;
			this.fixed_parameter();
			this.state = 1841;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1837;
					this.match(CSharpParser.COMMA);
					this.state = 1838;
					this.fixed_parameter();
					}
					}
				}
				this.state = 1843;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 210, this._ctx);
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
	// @RuleVersion(0)
	public fixed_parameter(): Fixed_parameterContext {
		let _localctx: Fixed_parameterContext = new Fixed_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, CSharpParser.RULE_fixed_parameter);
		let _la: number;
		try {
			this.state = 1852;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1844;
					this.attributes();
					}
				}

				this.state = 1848;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CSharpParser.IN - 54)) | (1 << (CSharpParser.OUT - 54)) | (1 << (CSharpParser.REF - 54)))) !== 0) || _la === CSharpParser.THIS) {
					{
					this.state = 1847;
					this.parameter_modifier();
					}
				}

				this.state = 1850;
				this.arg_declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1851;
				this.match(CSharpParser.ARGLIST);
				}
				break;
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
	public parameter_modifier(): Parameter_modifierContext {
		let _localctx: Parameter_modifierContext = new Parameter_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, CSharpParser.RULE_parameter_modifier);
		try {
			this.state = 1862;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 214, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1854;
				this.match(CSharpParser.REF);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1855;
				this.match(CSharpParser.OUT);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1856;
				this.match(CSharpParser.IN);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1857;
				this.match(CSharpParser.REF);
				this.state = 1858;
				this.match(CSharpParser.THIS);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1859;
				this.match(CSharpParser.IN);
				this.state = 1860;
				this.match(CSharpParser.THIS);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1861;
				this.match(CSharpParser.THIS);
				}
				break;
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
	public parameter_array(): Parameter_arrayContext {
		let _localctx: Parameter_arrayContext = new Parameter_arrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, CSharpParser.RULE_parameter_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1864;
				this.attributes();
				}
			}

			this.state = 1867;
			this.match(CSharpParser.PARAMS);
			this.state = 1868;
			this.array_type();
			this.state = 1869;
			this.identifier();
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
	public accessor_declarations(): Accessor_declarationsContext {
		let _localctx: Accessor_declarationsContext = new Accessor_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, CSharpParser.RULE_accessor_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1871;
				_localctx._attrs = this.attributes();
				}
			}

			this.state = 1875;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CSharpParser.INTERNAL - 57)) | (1 << (CSharpParser.PRIVATE - 57)) | (1 << (CSharpParser.PROTECTED - 57)))) !== 0)) {
				{
				this.state = 1874;
				_localctx._mods = this.accessor_modifier();
				}
			}

			this.state = 1887;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.GET:
				{
				this.state = 1877;
				this.match(CSharpParser.GET);
				this.state = 1878;
				this.accessor_body();
				this.state = 1880;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CSharpParser.INTERNAL - 57)) | (1 << (CSharpParser.PRIVATE - 57)) | (1 << (CSharpParser.PROTECTED - 57)) | (1 << (CSharpParser.SET - 57)))) !== 0) || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1879;
					this.set_accessor_declaration();
					}
				}

				}
				break;
			case CSharpParser.SET:
				{
				this.state = 1882;
				this.match(CSharpParser.SET);
				this.state = 1883;
				this.accessor_body();
				this.state = 1885;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (CSharpParser.GET - 49)) | (1 << (CSharpParser.INTERNAL - 49)) | (1 << (CSharpParser.PRIVATE - 49)) | (1 << (CSharpParser.PROTECTED - 49)))) !== 0) || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 1884;
					this.get_accessor_declaration();
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public get_accessor_declaration(): Get_accessor_declarationContext {
		let _localctx: Get_accessor_declarationContext = new Get_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, CSharpParser.RULE_get_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1889;
				this.attributes();
				}
			}

			this.state = 1893;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CSharpParser.INTERNAL - 57)) | (1 << (CSharpParser.PRIVATE - 57)) | (1 << (CSharpParser.PROTECTED - 57)))) !== 0)) {
				{
				this.state = 1892;
				this.accessor_modifier();
				}
			}

			this.state = 1895;
			this.match(CSharpParser.GET);
			this.state = 1896;
			this.accessor_body();
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
	public set_accessor_declaration(): Set_accessor_declarationContext {
		let _localctx: Set_accessor_declarationContext = new Set_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, CSharpParser.RULE_set_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1899;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1898;
				this.attributes();
				}
			}

			this.state = 1902;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (CSharpParser.INTERNAL - 57)) | (1 << (CSharpParser.PRIVATE - 57)) | (1 << (CSharpParser.PROTECTED - 57)))) !== 0)) {
				{
				this.state = 1901;
				this.accessor_modifier();
				}
			}

			this.state = 1904;
			this.match(CSharpParser.SET);
			this.state = 1905;
			this.accessor_body();
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
	public accessor_modifier(): Accessor_modifierContext {
		let _localctx: Accessor_modifierContext = new Accessor_modifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, CSharpParser.RULE_accessor_modifier);
		try {
			this.state = 1914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1907;
				this.match(CSharpParser.PROTECTED);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1908;
				this.match(CSharpParser.INTERNAL);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1909;
				this.match(CSharpParser.PRIVATE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1910;
				this.match(CSharpParser.PROTECTED);
				this.state = 1911;
				this.match(CSharpParser.INTERNAL);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1912;
				this.match(CSharpParser.INTERNAL);
				this.state = 1913;
				this.match(CSharpParser.PROTECTED);
				}
				break;
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
	public accessor_body(): Accessor_bodyContext {
		let _localctx: Accessor_bodyContext = new Accessor_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, CSharpParser.RULE_accessor_body);
		try {
			this.state = 1918;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1916;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1917;
				this.match(CSharpParser.SEMICOLON);
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
	public event_accessor_declarations(): Event_accessor_declarationsContext {
		let _localctx: Event_accessor_declarationsContext = new Event_accessor_declarationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, CSharpParser.RULE_event_accessor_declarations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1920;
				this.attributes();
				}
			}

			this.state = 1931;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
				{
				this.state = 1923;
				this.match(CSharpParser.ADD);
				this.state = 1924;
				this.block();
				this.state = 1925;
				this.remove_accessor_declaration();
				}
				break;
			case CSharpParser.REMOVE:
				{
				this.state = 1927;
				this.match(CSharpParser.REMOVE);
				this.state = 1928;
				this.block();
				this.state = 1929;
				this.add_accessor_declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public add_accessor_declaration(): Add_accessor_declarationContext {
		let _localctx: Add_accessor_declarationContext = new Add_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, CSharpParser.RULE_add_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1933;
				this.attributes();
				}
			}

			this.state = 1936;
			this.match(CSharpParser.ADD);
			this.state = 1937;
			this.block();
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
	public remove_accessor_declaration(): Remove_accessor_declarationContext {
		let _localctx: Remove_accessor_declarationContext = new Remove_accessor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, CSharpParser.RULE_remove_accessor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1940;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 1939;
				this.attributes();
				}
			}

			this.state = 1942;
			this.match(CSharpParser.REMOVE);
			this.state = 1943;
			this.block();
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
	public overloadable_operator(): Overloadable_operatorContext {
		let _localctx: Overloadable_operatorContext = new Overloadable_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, CSharpParser.RULE_overloadable_operator);
		try {
			this.state = 1967;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1945;
				this.match(CSharpParser.PLUS);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1946;
				this.match(CSharpParser.MINUS);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1947;
				this.match(CSharpParser.BANG);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1948;
				this.match(CSharpParser.TILDE);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1949;
				this.match(CSharpParser.OP_INC);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1950;
				this.match(CSharpParser.OP_DEC);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1951;
				this.match(CSharpParser.TRUE);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1952;
				this.match(CSharpParser.FALSE);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1953;
				this.match(CSharpParser.STAR);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1954;
				this.match(CSharpParser.DIV);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1955;
				this.match(CSharpParser.PERCENT);
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1956;
				this.match(CSharpParser.AMP);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1957;
				this.match(CSharpParser.BITWISE_OR);
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1958;
				this.match(CSharpParser.CARET);
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1959;
				this.match(CSharpParser.OP_LEFT_SHIFT);
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1960;
				this.right_shift();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1961;
				this.match(CSharpParser.OP_EQ);
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1962;
				this.match(CSharpParser.OP_NE);
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1963;
				this.match(CSharpParser.GT);
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1964;
				this.match(CSharpParser.LT);
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1965;
				this.match(CSharpParser.OP_GE);
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1966;
				this.match(CSharpParser.OP_LE);
				}
				break;
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
	public conversion_operator_declarator(): Conversion_operator_declaratorContext {
		let _localctx: Conversion_operator_declaratorContext = new Conversion_operator_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, CSharpParser.RULE_conversion_operator_declarator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1969;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.EXPLICIT || _la === CSharpParser.IMPLICIT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1970;
			this.match(CSharpParser.OPERATOR);
			this.state = 1971;
			this.type_();
			this.state = 1972;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1973;
			this.arg_declaration();
			this.state = 1974;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public constructor_initializer(): Constructor_initializerContext {
		let _localctx: Constructor_initializerContext = new Constructor_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, CSharpParser.RULE_constructor_initializer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1976;
			this.match(CSharpParser.COLON);
			this.state = 1977;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.BASE || _la === CSharpParser.THIS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1978;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 1980;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.IN - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)) | (1 << (CSharpParser.OUT - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CSharpParser.VOID - 108)) | (1 << (CSharpParser.WHEN - 108)) | (1 << (CSharpParser.WHERE - 108)) | (1 << (CSharpParser.YIELD - 108)) | (1 << (CSharpParser.IDENTIFIER - 108)) | (1 << (CSharpParser.LITERAL_ACCESS - 108)) | (1 << (CSharpParser.INTEGER_LITERAL - 108)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.REAL_LITERAL - 108)) | (1 << (CSharpParser.CHARACTER_LITERAL - 108)) | (1 << (CSharpParser.REGULAR_STRING - 108)) | (1 << (CSharpParser.VERBATIUM_STRING - 108)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 108)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 108)) | (1 << (CSharpParser.OPEN_PARENS - 108)) | (1 << (CSharpParser.PLUS - 108)) | (1 << (CSharpParser.MINUS - 108)) | (1 << (CSharpParser.STAR - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (CSharpParser.AMP - 140)) | (1 << (CSharpParser.CARET - 140)) | (1 << (CSharpParser.BANG - 140)) | (1 << (CSharpParser.TILDE - 140)) | (1 << (CSharpParser.OP_INC - 140)) | (1 << (CSharpParser.OP_DEC - 140)) | (1 << (CSharpParser.OP_RANGE - 140)))) !== 0)) {
				{
				this.state = 1979;
				this.argument_list();
				}
			}

			this.state = 1982;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, CSharpParser.RULE_body);
		try {
			this.state = 1986;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1984;
				this.block();
				}
				break;
			case CSharpParser.SEMICOLON:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1985;
				this.match(CSharpParser.SEMICOLON);
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
	public struct_interfaces(): Struct_interfacesContext {
		let _localctx: Struct_interfacesContext = new Struct_interfacesContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, CSharpParser.RULE_struct_interfaces);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1988;
			this.match(CSharpParser.COLON);
			this.state = 1989;
			this.interface_type_list();
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
	public struct_body(): Struct_bodyContext {
		let _localctx: Struct_bodyContext = new Struct_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, CSharpParser.RULE_struct_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1991;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 1995;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.ENUM - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.EVENT - 32)) | (1 << (CSharpParser.EXPLICIT - 32)) | (1 << (CSharpParser.EXTERN - 32)) | (1 << (CSharpParser.FIXED - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IMPLICIT - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTERFACE - 32)) | (1 << (CSharpParser.INTERNAL - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OVERRIDE - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.PRIVATE - 64)) | (1 << (CSharpParser.PROTECTED - 64)) | (1 << (CSharpParser.PUBLIC - 64)) | (1 << (CSharpParser.READONLY - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SEALED - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STATIC - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.STRUCT - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.UNSAFE - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VIRTUAL - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.VOLATILE - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				{
				this.state = 1992;
				this.struct_member_declaration();
				}
				}
				this.state = 1997;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1998;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public struct_member_declaration(): Struct_member_declarationContext {
		let _localctx: Struct_member_declarationContext = new Struct_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, CSharpParser.RULE_struct_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2001;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 2000;
				this.attributes();
				}
			}

			this.state = 2004;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 236, this._ctx) ) {
			case 1:
				{
				this.state = 2003;
				this.all_member_modifiers();
				}
				break;
			}
			this.state = 2016;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CLASS:
			case CSharpParser.CONST:
			case CSharpParser.DECIMAL:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.ENUM:
			case CSharpParser.EQUALS:
			case CSharpParser.EVENT:
			case CSharpParser.EXPLICIT:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.IMPLICIT:
			case CSharpParser.INT:
			case CSharpParser.INTERFACE:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.READONLY:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.STRUCT:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.VOID:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.OPEN_PARENS:
				{
				this.state = 2006;
				this.common_member_declaration();
				}
				break;
			case CSharpParser.FIXED:
				{
				this.state = 2007;
				this.match(CSharpParser.FIXED);
				this.state = 2008;
				this.type_();
				this.state = 2010;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2009;
					this.fixed_size_buffer_declarator();
					}
					}
					this.state = 2012;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)))) !== 0));
				this.state = 2014;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, CSharpParser.RULE_array_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2018;
			this.base_type();
			this.state = 2026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2022;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.STAR || _la === CSharpParser.INTERR) {
					{
					{
					this.state = 2019;
					_la = this._input.LA(1);
					if (!(_la === CSharpParser.STAR || _la === CSharpParser.INTERR)) {
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
					this.state = 2024;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2025;
				this.rank_specifier();
				}
				}
				this.state = 2028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 127)) & ~0x1F) === 0 && ((1 << (_la - 127)) & ((1 << (CSharpParser.OPEN_BRACKET - 127)) | (1 << (CSharpParser.STAR - 127)) | (1 << (CSharpParser.INTERR - 127)))) !== 0));
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
	public rank_specifier(): Rank_specifierContext {
		let _localctx: Rank_specifierContext = new Rank_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, CSharpParser.RULE_rank_specifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2030;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2031;
				this.match(CSharpParser.COMMA);
				}
				}
				this.state = 2036;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2037;
			this.match(CSharpParser.CLOSE_BRACKET);
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
	public array_initializer(): Array_initializerContext {
		let _localctx: Array_initializerContext = new Array_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, CSharpParser.RULE_array_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2039;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 2051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_BRACE - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
				{
				this.state = 2040;
				this.variable_initializer();
				this.state = 2045;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2041;
						this.match(CSharpParser.COMMA);
						this.state = 2042;
						this.variable_initializer();
						}
						}
					}
					this.state = 2047;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 242, this._ctx);
				}
				this.state = 2049;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 2048;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 2053;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public variant_type_parameter_list(): Variant_type_parameter_listContext {
		let _localctx: Variant_type_parameter_listContext = new Variant_type_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, CSharpParser.RULE_variant_type_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2055;
			this.match(CSharpParser.LT);
			this.state = 2056;
			this.variant_type_parameter();
			this.state = 2061;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2057;
				this.match(CSharpParser.COMMA);
				this.state = 2058;
				this.variant_type_parameter();
				}
				}
				this.state = 2063;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2064;
			this.match(CSharpParser.GT);
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
	public variant_type_parameter(): Variant_type_parameterContext {
		let _localctx: Variant_type_parameterContext = new Variant_type_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, CSharpParser.RULE_variant_type_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 2066;
				this.attributes();
				}
			}

			this.state = 2070;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.IN || _la === CSharpParser.OUT) {
				{
				this.state = 2069;
				this.variance_annotation();
				}
			}

			this.state = 2072;
			this.identifier();
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
	public variance_annotation(): Variance_annotationContext {
		let _localctx: Variance_annotationContext = new Variance_annotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, CSharpParser.RULE_variance_annotation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2074;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.IN || _la === CSharpParser.OUT)) {
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
	// @RuleVersion(0)
	public interface_base(): Interface_baseContext {
		let _localctx: Interface_baseContext = new Interface_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, CSharpParser.RULE_interface_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2076;
			this.match(CSharpParser.COLON);
			this.state = 2077;
			this.interface_type_list();
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
	public interface_body(): Interface_bodyContext {
		let _localctx: Interface_bodyContext = new Interface_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, CSharpParser.RULE_interface_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2079;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 2083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.EVENT - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.READONLY - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.UNSAFE - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				{
				this.state = 2080;
				this.interface_member_declaration();
				}
				}
				this.state = 2085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2086;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public interface_member_declaration(): Interface_member_declarationContext {
		let _localctx: Interface_member_declarationContext = new Interface_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, CSharpParser.RULE_interface_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 2088;
				this.attributes();
				}
			}

			this.state = 2092;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.NEW) {
				{
				this.state = 2091;
				this.match(CSharpParser.NEW);
				}
			}

			this.state = 2157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				{
				this.state = 2095;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.UNSAFE) {
					{
					this.state = 2094;
					this.match(CSharpParser.UNSAFE);
					}
				}

				this.state = 2102;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
				case 1:
					{
					this.state = 2097;
					this.match(CSharpParser.REF);
					}
					break;

				case 2:
					{
					this.state = 2098;
					this.match(CSharpParser.REF);
					this.state = 2099;
					this.match(CSharpParser.READONLY);
					}
					break;

				case 3:
					{
					this.state = 2100;
					this.match(CSharpParser.READONLY);
					this.state = 2101;
					this.match(CSharpParser.REF);
					}
					break;
				}
				this.state = 2104;
				this.type_();
				this.state = 2132;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 2105;
					this.identifier();
					this.state = 2107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.LT) {
						{
						this.state = 2106;
						this.type_parameter_list();
						}
					}

					this.state = 2109;
					this.match(CSharpParser.OPEN_PARENS);
					this.state = 2111;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
						{
						this.state = 2110;
						this.formal_parameter_list();
						}
					}

					this.state = 2113;
					this.match(CSharpParser.CLOSE_PARENS);
					this.state = 2115;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.WHERE) {
						{
						this.state = 2114;
						this.type_parameter_constraints_clauses();
						}
					}

					this.state = 2117;
					this.match(CSharpParser.SEMICOLON);
					}
					break;

				case 2:
					{
					this.state = 2119;
					this.identifier();
					this.state = 2120;
					this.match(CSharpParser.OPEN_BRACE);
					this.state = 2121;
					this.interface_accessors();
					this.state = 2122;
					this.match(CSharpParser.CLOSE_BRACE);
					}
					break;

				case 3:
					{
					this.state = 2124;
					this.match(CSharpParser.THIS);
					this.state = 2125;
					this.match(CSharpParser.OPEN_BRACKET);
					this.state = 2126;
					this.formal_parameter_list();
					this.state = 2127;
					this.match(CSharpParser.CLOSE_BRACKET);
					this.state = 2128;
					this.match(CSharpParser.OPEN_BRACE);
					this.state = 2129;
					this.interface_accessors();
					this.state = 2130;
					this.match(CSharpParser.CLOSE_BRACE);
					}
					break;
				}
				}
				break;

			case 2:
				{
				this.state = 2135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.UNSAFE) {
					{
					this.state = 2134;
					this.match(CSharpParser.UNSAFE);
					}
				}

				this.state = 2137;
				this.match(CSharpParser.VOID);
				this.state = 2138;
				this.identifier();
				this.state = 2140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.LT) {
					{
					this.state = 2139;
					this.type_parameter_list();
					}
				}

				this.state = 2142;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 2144;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
					{
					this.state = 2143;
					this.formal_parameter_list();
					}
				}

				this.state = 2146;
				this.match(CSharpParser.CLOSE_PARENS);
				this.state = 2148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.WHERE) {
					{
					this.state = 2147;
					this.type_parameter_constraints_clauses();
					}
				}

				this.state = 2150;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 3:
				{
				this.state = 2152;
				this.match(CSharpParser.EVENT);
				this.state = 2153;
				this.type_();
				this.state = 2154;
				this.identifier();
				this.state = 2155;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
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
	// @RuleVersion(0)
	public interface_accessors(): Interface_accessorsContext {
		let _localctx: Interface_accessorsContext = new Interface_accessorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, CSharpParser.RULE_interface_accessors);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 2159;
				this.attributes();
				}
			}

			this.state = 2180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.GET:
				{
				this.state = 2162;
				this.match(CSharpParser.GET);
				this.state = 2163;
				this.match(CSharpParser.SEMICOLON);
				this.state = 2169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.SET || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 2165;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.OPEN_BRACKET) {
						{
						this.state = 2164;
						this.attributes();
						}
					}

					this.state = 2167;
					this.match(CSharpParser.SET);
					this.state = 2168;
					this.match(CSharpParser.SEMICOLON);
					}
				}

				}
				break;
			case CSharpParser.SET:
				{
				this.state = 2171;
				this.match(CSharpParser.SET);
				this.state = 2172;
				this.match(CSharpParser.SEMICOLON);
				this.state = 2178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.GET || _la === CSharpParser.OPEN_BRACKET) {
					{
					this.state = 2174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.OPEN_BRACKET) {
						{
						this.state = 2173;
						this.attributes();
						}
					}

					this.state = 2176;
					this.match(CSharpParser.GET);
					this.state = 2177;
					this.match(CSharpParser.SEMICOLON);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public enum_base(): Enum_baseContext {
		let _localctx: Enum_baseContext = new Enum_baseContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, CSharpParser.RULE_enum_base);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2182;
			this.match(CSharpParser.COLON);
			this.state = 2183;
			this.type_();
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
	public enum_body(): Enum_bodyContext {
		let _localctx: Enum_bodyContext = new Enum_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, CSharpParser.RULE_enum_body);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2185;
			this.match(CSharpParser.OPEN_BRACE);
			this.state = 2197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)) | (1 << (CSharpParser.OPEN_BRACKET - 102)))) !== 0)) {
				{
				this.state = 2186;
				this.enum_member_declaration();
				this.state = 2191;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2187;
						this.match(CSharpParser.COMMA);
						this.state = 2188;
						this.enum_member_declaration();
						}
						}
					}
					this.state = 2193;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 268, this._ctx);
				}
				this.state = 2195;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 2194;
					this.match(CSharpParser.COMMA);
					}
				}

				}
			}

			this.state = 2199;
			this.match(CSharpParser.CLOSE_BRACE);
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
	public enum_member_declaration(): Enum_member_declarationContext {
		let _localctx: Enum_member_declarationContext = new Enum_member_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, CSharpParser.RULE_enum_member_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_BRACKET) {
				{
				this.state = 2201;
				this.attributes();
				}
			}

			this.state = 2204;
			this.identifier();
			this.state = 2207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 2205;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 2206;
				this.expression();
				}
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
	// @RuleVersion(0)
	public global_attribute_section(): Global_attribute_sectionContext {
		let _localctx: Global_attribute_sectionContext = new Global_attribute_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, CSharpParser.RULE_global_attribute_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2209;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2210;
			this.global_attribute_target();
			this.state = 2211;
			this.match(CSharpParser.COLON);
			this.state = 2212;
			this.attribute_list();
			this.state = 2214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 2213;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 2216;
			this.match(CSharpParser.CLOSE_BRACKET);
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
	public global_attribute_target(): Global_attribute_targetContext {
		let _localctx: Global_attribute_targetContext = new Global_attribute_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, CSharpParser.RULE_global_attribute_target);
		try {
			this.state = 2220;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2218;
				this.keyword();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2219;
				this.identifier();
				}
				break;
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
	public attributes(): AttributesContext {
		let _localctx: AttributesContext = new AttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, CSharpParser.RULE_attributes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2222;
				this.attribute_section();
				}
				}
				this.state = 2225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === CSharpParser.OPEN_BRACKET);
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
	public attribute_section(): Attribute_sectionContext {
		let _localctx: Attribute_sectionContext = new Attribute_sectionContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, CSharpParser.RULE_attribute_section);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2227;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2231;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				{
				this.state = 2228;
				this.attribute_target();
				this.state = 2229;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 2233;
			this.attribute_list();
			this.state = 2235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 2234;
				this.match(CSharpParser.COMMA);
				}
			}

			this.state = 2237;
			this.match(CSharpParser.CLOSE_BRACKET);
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
	public attribute_target(): Attribute_targetContext {
		let _localctx: Attribute_targetContext = new Attribute_targetContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, CSharpParser.RULE_attribute_target);
		try {
			this.state = 2241;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2239;
				this.keyword();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2240;
				this.identifier();
				}
				break;
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
	public attribute_list(): Attribute_listContext {
		let _localctx: Attribute_listContext = new Attribute_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, CSharpParser.RULE_attribute_list);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2243;
			this.attribute();
			this.state = 2248;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2244;
					this.match(CSharpParser.COMMA);
					this.state = 2245;
					this.attribute();
					}
					}
				}
				this.state = 2250;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
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
	// @RuleVersion(0)
	public attribute(): AttributeContext {
		let _localctx: AttributeContext = new AttributeContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, CSharpParser.RULE_attribute);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2251;
			this.namespace_or_type_name();
			this.state = 2264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.OPEN_PARENS) {
				{
				this.state = 2252;
				this.match(CSharpParser.OPEN_PARENS);
				this.state = 2261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 2253;
					this.attribute_argument();
					this.state = 2258;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === CSharpParser.COMMA) {
						{
						{
						this.state = 2254;
						this.match(CSharpParser.COMMA);
						this.state = 2255;
						this.attribute_argument();
						}
						}
						this.state = 2260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 2263;
				this.match(CSharpParser.CLOSE_PARENS);
				}
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
	// @RuleVersion(0)
	public attribute_argument(): Attribute_argumentContext {
		let _localctx: Attribute_argumentContext = new Attribute_argumentContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, CSharpParser.RULE_attribute_argument);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2269;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 283, this._ctx) ) {
			case 1:
				{
				this.state = 2266;
				this.identifier();
				this.state = 2267;
				this.match(CSharpParser.COLON);
				}
				break;
			}
			this.state = 2271;
			this.expression();
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
	public pointer_type(): Pointer_typeContext {
		let _localctx: Pointer_typeContext = new Pointer_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, CSharpParser.RULE_pointer_type);
		let _la: number;
		try {
			this.state = 2288;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.DECIMAL:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.STRING:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2275;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CSharpParser.BOOL:
				case CSharpParser.BYTE:
				case CSharpParser.CHAR:
				case CSharpParser.DECIMAL:
				case CSharpParser.DOUBLE:
				case CSharpParser.FLOAT:
				case CSharpParser.INT:
				case CSharpParser.LONG:
				case CSharpParser.SBYTE:
				case CSharpParser.SHORT:
				case CSharpParser.UINT:
				case CSharpParser.ULONG:
				case CSharpParser.USHORT:
					{
					this.state = 2273;
					this.simple_type();
					}
					break;
				case CSharpParser.ADD:
				case CSharpParser.ALIAS:
				case CSharpParser.ARGLIST:
				case CSharpParser.ASCENDING:
				case CSharpParser.ASYNC:
				case CSharpParser.AWAIT:
				case CSharpParser.BY:
				case CSharpParser.DESCENDING:
				case CSharpParser.DYNAMIC:
				case CSharpParser.EQUALS:
				case CSharpParser.FROM:
				case CSharpParser.GET:
				case CSharpParser.GROUP:
				case CSharpParser.INTO:
				case CSharpParser.JOIN:
				case CSharpParser.LET:
				case CSharpParser.NAMEOF:
				case CSharpParser.OBJECT:
				case CSharpParser.ON:
				case CSharpParser.ORDERBY:
				case CSharpParser.PARTIAL:
				case CSharpParser.REMOVE:
				case CSharpParser.SELECT:
				case CSharpParser.SET:
				case CSharpParser.STRING:
				case CSharpParser.UNMANAGED:
				case CSharpParser.VAR:
				case CSharpParser.WHEN:
				case CSharpParser.WHERE:
				case CSharpParser.YIELD:
				case CSharpParser.IDENTIFIER:
					{
					this.state = 2274;
					this.class_type();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2281;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CSharpParser.OPEN_BRACKET || _la === CSharpParser.INTERR) {
					{
					this.state = 2279;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case CSharpParser.OPEN_BRACKET:
						{
						this.state = 2277;
						this.rank_specifier();
						}
						break;
					case CSharpParser.INTERR:
						{
						this.state = 2278;
						this.match(CSharpParser.INTERR);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2283;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 2284;
				this.match(CSharpParser.STAR);
				}
				break;
			case CSharpParser.VOID:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2286;
				this.match(CSharpParser.VOID);
				this.state = 2287;
				this.match(CSharpParser.STAR);
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
	public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
		let _localctx: Fixed_pointer_declaratorsContext = new Fixed_pointer_declaratorsContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, CSharpParser.RULE_fixed_pointer_declarators);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2290;
			this.fixed_pointer_declarator();
			this.state = 2295;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2291;
				this.match(CSharpParser.COMMA);
				this.state = 2292;
				this.fixed_pointer_declarator();
				}
				}
				this.state = 2297;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
	// @RuleVersion(0)
	public fixed_pointer_declarator(): Fixed_pointer_declaratorContext {
		let _localctx: Fixed_pointer_declaratorContext = new Fixed_pointer_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, CSharpParser.RULE_fixed_pointer_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2298;
			this.identifier();
			this.state = 2299;
			this.match(CSharpParser.ASSIGNMENT);
			this.state = 2300;
			this.fixed_pointer_initializer();
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
	public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
		let _localctx: Fixed_pointer_initializerContext = new Fixed_pointer_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, CSharpParser.RULE_fixed_pointer_initializer);
		try {
			this.state = 2307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2303;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 289, this._ctx) ) {
				case 1:
					{
					this.state = 2302;
					this.match(CSharpParser.AMP);
					}
					break;
				}
				this.state = 2305;
				this.expression();
				}
				break;
			case CSharpParser.STACKALLOC:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2306;
				this.stackalloc_initializer();
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
	public fixed_size_buffer_declarator(): Fixed_size_buffer_declaratorContext {
		let _localctx: Fixed_size_buffer_declaratorContext = new Fixed_size_buffer_declaratorContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, CSharpParser.RULE_fixed_size_buffer_declarator);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2309;
			this.identifier();
			this.state = 2310;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2311;
			this.expression();
			this.state = 2312;
			this.match(CSharpParser.CLOSE_BRACKET);
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
	public stackalloc_initializer(): Stackalloc_initializerContext {
		let _localctx: Stackalloc_initializerContext = new Stackalloc_initializerContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, CSharpParser.RULE_stackalloc_initializer);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2343;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 295, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2314;
				this.match(CSharpParser.STACKALLOC);
				this.state = 2315;
				this.type_();
				this.state = 2316;
				this.match(CSharpParser.OPEN_BRACKET);
				this.state = 2317;
				this.expression();
				this.state = 2318;
				this.match(CSharpParser.CLOSE_BRACKET);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2320;
				this.match(CSharpParser.STACKALLOC);
				this.state = 2322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
					{
					this.state = 2321;
					this.type_();
					}
				}

				this.state = 2324;
				this.match(CSharpParser.OPEN_BRACKET);
				this.state = 2326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & ((1 << (CSharpParser.WHEN - 110)) | (1 << (CSharpParser.WHERE - 110)) | (1 << (CSharpParser.YIELD - 110)) | (1 << (CSharpParser.IDENTIFIER - 110)) | (1 << (CSharpParser.LITERAL_ACCESS - 110)) | (1 << (CSharpParser.INTEGER_LITERAL - 110)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 110)) | (1 << (CSharpParser.REAL_LITERAL - 110)) | (1 << (CSharpParser.CHARACTER_LITERAL - 110)) | (1 << (CSharpParser.REGULAR_STRING - 110)) | (1 << (CSharpParser.VERBATIUM_STRING - 110)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 110)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 110)) | (1 << (CSharpParser.OPEN_PARENS - 110)) | (1 << (CSharpParser.PLUS - 110)) | (1 << (CSharpParser.MINUS - 110)) | (1 << (CSharpParser.STAR - 110)) | (1 << (CSharpParser.AMP - 110)))) !== 0) || ((((_la - 142)) & ~0x1F) === 0 && ((1 << (_la - 142)) & ((1 << (CSharpParser.CARET - 142)) | (1 << (CSharpParser.BANG - 142)) | (1 << (CSharpParser.TILDE - 142)) | (1 << (CSharpParser.OP_INC - 142)) | (1 << (CSharpParser.OP_DEC - 142)) | (1 << (CSharpParser.OP_RANGE - 142)))) !== 0)) {
					{
					this.state = 2325;
					this.expression();
					}
				}

				this.state = 2328;
				this.match(CSharpParser.CLOSE_BRACKET);
				this.state = 2329;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2330;
				this.expression();
				this.state = 2335;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2331;
						this.match(CSharpParser.COMMA);
						this.state = 2332;
						this.expression();
						}
						}
					}
					this.state = 2337;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
				}
				this.state = 2339;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.COMMA) {
					{
					this.state = 2338;
					this.match(CSharpParser.COMMA);
					}
				}

				this.state = 2341;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;
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
	public right_arrow(): Right_arrowContext {
		let _localctx: Right_arrowContext = new Right_arrowContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, CSharpParser.RULE_right_arrow);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2345;
			_localctx._first = this.match(CSharpParser.ASSIGNMENT);
			this.state = 2346;
			_localctx._second = this.match(CSharpParser.GT);
			this.state = 2347;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw this.createFailedPredicateException("$first.index + 1 == $second.index");
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
	// @RuleVersion(0)
	public right_shift(): Right_shiftContext {
		let _localctx: Right_shiftContext = new Right_shiftContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, CSharpParser.RULE_right_shift);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2349;
			_localctx._first = this.match(CSharpParser.GT);
			this.state = 2350;
			_localctx._second = this.match(CSharpParser.GT);
			this.state = 2351;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw this.createFailedPredicateException("$first.index + 1 == $second.index");
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
	// @RuleVersion(0)
	public right_shift_assignment(): Right_shift_assignmentContext {
		let _localctx: Right_shift_assignmentContext = new Right_shift_assignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, CSharpParser.RULE_right_shift_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2353;
			_localctx._first = this.match(CSharpParser.GT);
			this.state = 2354;
			_localctx._second = this.match(CSharpParser.OP_GE);
			this.state = 2355;
			if (!((_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0))) {
				throw this.createFailedPredicateException("$first.index + 1 == $second.index");
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
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, CSharpParser.RULE_literal);
		try {
			this.state = 2365;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.FALSE:
			case CSharpParser.TRUE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2357;
				this.boolean_literal();
				}
				break;
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2358;
				this.string_literal();
				}
				break;
			case CSharpParser.INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2359;
				this.match(CSharpParser.INTEGER_LITERAL);
				}
				break;
			case CSharpParser.HEX_INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2360;
				this.match(CSharpParser.HEX_INTEGER_LITERAL);
				}
				break;
			case CSharpParser.BIN_INTEGER_LITERAL:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 2361;
				this.match(CSharpParser.BIN_INTEGER_LITERAL);
				}
				break;
			case CSharpParser.REAL_LITERAL:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 2362;
				this.match(CSharpParser.REAL_LITERAL);
				}
				break;
			case CSharpParser.CHARACTER_LITERAL:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 2363;
				this.match(CSharpParser.CHARACTER_LITERAL);
				}
				break;
			case CSharpParser.NULL_:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 2364;
				this.match(CSharpParser.NULL_);
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
	public boolean_literal(): Boolean_literalContext {
		let _localctx: Boolean_literalContext = new Boolean_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, CSharpParser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2367;
			_la = this._input.LA(1);
			if (!(_la === CSharpParser.FALSE || _la === CSharpParser.TRUE)) {
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
	// @RuleVersion(0)
	public string_literal(): String_literalContext {
		let _localctx: String_literalContext = new String_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, CSharpParser.RULE_string_literal);
		try {
			this.state = 2373;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2369;
				this.interpolated_regular_string();
				}
				break;
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2370;
				this.interpolated_verbatium_string();
				}
				break;
			case CSharpParser.REGULAR_STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2371;
				this.match(CSharpParser.REGULAR_STRING);
				}
				break;
			case CSharpParser.VERBATIUM_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2372;
				this.match(CSharpParser.VERBATIUM_STRING);
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
	public interpolated_regular_string(): Interpolated_regular_stringContext {
		let _localctx: Interpolated_regular_stringContext = new Interpolated_regular_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, CSharpParser.RULE_interpolated_regular_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2375;
			this.match(CSharpParser.INTERPOLATED_REGULAR_STRING_START);
			this.state = 2379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FALSE - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.NULL_ - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.SIZEOF - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CSharpParser.TRUE - 96)) | (1 << (CSharpParser.TYPEOF - 96)) | (1 << (CSharpParser.UINT - 96)) | (1 << (CSharpParser.ULONG - 96)) | (1 << (CSharpParser.UNCHECKED - 96)) | (1 << (CSharpParser.UNMANAGED - 96)) | (1 << (CSharpParser.USHORT - 96)) | (1 << (CSharpParser.VAR - 96)) | (1 << (CSharpParser.WHEN - 96)) | (1 << (CSharpParser.WHERE - 96)) | (1 << (CSharpParser.YIELD - 96)) | (1 << (CSharpParser.IDENTIFIER - 96)) | (1 << (CSharpParser.LITERAL_ACCESS - 96)) | (1 << (CSharpParser.INTEGER_LITERAL - 96)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.REAL_LITERAL - 96)) | (1 << (CSharpParser.CHARACTER_LITERAL - 96)) | (1 << (CSharpParser.REGULAR_STRING - 96)) | (1 << (CSharpParser.VERBATIUM_STRING - 96)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 96)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CSharpParser.OPEN_PARENS - 129)) | (1 << (CSharpParser.PLUS - 129)) | (1 << (CSharpParser.MINUS - 129)) | (1 << (CSharpParser.STAR - 129)) | (1 << (CSharpParser.AMP - 129)) | (1 << (CSharpParser.CARET - 129)) | (1 << (CSharpParser.BANG - 129)) | (1 << (CSharpParser.TILDE - 129)) | (1 << (CSharpParser.OP_INC - 129)) | (1 << (CSharpParser.OP_DEC - 129)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (CSharpParser.OP_RANGE - 171)) | (1 << (CSharpParser.DOUBLE_CURLY_INSIDE - 171)) | (1 << (CSharpParser.REGULAR_CHAR_INSIDE - 171)) | (1 << (CSharpParser.REGULAR_STRING_INSIDE - 171)))) !== 0)) {
				{
				{
				this.state = 2376;
				this.interpolated_regular_string_part();
				}
				}
				this.state = 2381;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2382;
			this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
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
	public interpolated_verbatium_string(): Interpolated_verbatium_stringContext {
		let _localctx: Interpolated_verbatium_stringContext = new Interpolated_verbatium_stringContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, CSharpParser.RULE_interpolated_verbatium_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2384;
			this.match(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START);
			this.state = 2388;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FALSE - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.NEW - 64)) | (1 << (CSharpParser.NULL_ - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.SIZEOF - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (CSharpParser.TRUE - 96)) | (1 << (CSharpParser.TYPEOF - 96)) | (1 << (CSharpParser.UINT - 96)) | (1 << (CSharpParser.ULONG - 96)) | (1 << (CSharpParser.UNCHECKED - 96)) | (1 << (CSharpParser.UNMANAGED - 96)) | (1 << (CSharpParser.USHORT - 96)) | (1 << (CSharpParser.VAR - 96)) | (1 << (CSharpParser.WHEN - 96)) | (1 << (CSharpParser.WHERE - 96)) | (1 << (CSharpParser.YIELD - 96)) | (1 << (CSharpParser.IDENTIFIER - 96)) | (1 << (CSharpParser.LITERAL_ACCESS - 96)) | (1 << (CSharpParser.INTEGER_LITERAL - 96)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 96)) | (1 << (CSharpParser.REAL_LITERAL - 96)) | (1 << (CSharpParser.CHARACTER_LITERAL - 96)) | (1 << (CSharpParser.REGULAR_STRING - 96)) | (1 << (CSharpParser.VERBATIUM_STRING - 96)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 96)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (CSharpParser.OPEN_PARENS - 129)) | (1 << (CSharpParser.PLUS - 129)) | (1 << (CSharpParser.MINUS - 129)) | (1 << (CSharpParser.STAR - 129)) | (1 << (CSharpParser.AMP - 129)) | (1 << (CSharpParser.CARET - 129)) | (1 << (CSharpParser.BANG - 129)) | (1 << (CSharpParser.TILDE - 129)) | (1 << (CSharpParser.OP_INC - 129)) | (1 << (CSharpParser.OP_DEC - 129)))) !== 0) || ((((_la - 171)) & ~0x1F) === 0 && ((1 << (_la - 171)) & ((1 << (CSharpParser.OP_RANGE - 171)) | (1 << (CSharpParser.DOUBLE_CURLY_INSIDE - 171)) | (1 << (CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE - 171)) | (1 << (CSharpParser.VERBATIUM_INSIDE_STRING - 171)))) !== 0)) {
				{
				{
				this.state = 2385;
				this.interpolated_verbatium_string_part();
				}
				}
				this.state = 2390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2391;
			this.match(CSharpParser.DOUBLE_QUOTE_INSIDE);
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
	public interpolated_regular_string_part(): Interpolated_regular_string_partContext {
		let _localctx: Interpolated_regular_string_partContext = new Interpolated_regular_string_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, CSharpParser.RULE_interpolated_regular_string_part);
		try {
			this.state = 2397;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2393;
				this.interpolated_string_expression();
				}
				break;
			case CSharpParser.DOUBLE_CURLY_INSIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2394;
				this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
				}
				break;
			case CSharpParser.REGULAR_CHAR_INSIDE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2395;
				this.match(CSharpParser.REGULAR_CHAR_INSIDE);
				}
				break;
			case CSharpParser.REGULAR_STRING_INSIDE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2396;
				this.match(CSharpParser.REGULAR_STRING_INSIDE);
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
	public interpolated_verbatium_string_part(): Interpolated_verbatium_string_partContext {
		let _localctx: Interpolated_verbatium_string_partContext = new Interpolated_verbatium_string_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 392, CSharpParser.RULE_interpolated_verbatium_string_part);
		try {
			this.state = 2403;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.ADD:
			case CSharpParser.ALIAS:
			case CSharpParser.ARGLIST:
			case CSharpParser.ASCENDING:
			case CSharpParser.ASYNC:
			case CSharpParser.AWAIT:
			case CSharpParser.BASE:
			case CSharpParser.BOOL:
			case CSharpParser.BY:
			case CSharpParser.BYTE:
			case CSharpParser.CHAR:
			case CSharpParser.CHECKED:
			case CSharpParser.DECIMAL:
			case CSharpParser.DEFAULT:
			case CSharpParser.DELEGATE:
			case CSharpParser.DESCENDING:
			case CSharpParser.DOUBLE:
			case CSharpParser.DYNAMIC:
			case CSharpParser.EQUALS:
			case CSharpParser.FALSE:
			case CSharpParser.FLOAT:
			case CSharpParser.FROM:
			case CSharpParser.GET:
			case CSharpParser.GROUP:
			case CSharpParser.INT:
			case CSharpParser.INTO:
			case CSharpParser.JOIN:
			case CSharpParser.LET:
			case CSharpParser.LONG:
			case CSharpParser.NAMEOF:
			case CSharpParser.NEW:
			case CSharpParser.NULL_:
			case CSharpParser.OBJECT:
			case CSharpParser.ON:
			case CSharpParser.ORDERBY:
			case CSharpParser.PARTIAL:
			case CSharpParser.REF:
			case CSharpParser.REMOVE:
			case CSharpParser.SBYTE:
			case CSharpParser.SELECT:
			case CSharpParser.SET:
			case CSharpParser.SHORT:
			case CSharpParser.SIZEOF:
			case CSharpParser.STRING:
			case CSharpParser.THIS:
			case CSharpParser.TRUE:
			case CSharpParser.TYPEOF:
			case CSharpParser.UINT:
			case CSharpParser.ULONG:
			case CSharpParser.UNCHECKED:
			case CSharpParser.UNMANAGED:
			case CSharpParser.USHORT:
			case CSharpParser.VAR:
			case CSharpParser.WHEN:
			case CSharpParser.WHERE:
			case CSharpParser.YIELD:
			case CSharpParser.IDENTIFIER:
			case CSharpParser.LITERAL_ACCESS:
			case CSharpParser.INTEGER_LITERAL:
			case CSharpParser.HEX_INTEGER_LITERAL:
			case CSharpParser.BIN_INTEGER_LITERAL:
			case CSharpParser.REAL_LITERAL:
			case CSharpParser.CHARACTER_LITERAL:
			case CSharpParser.REGULAR_STRING:
			case CSharpParser.VERBATIUM_STRING:
			case CSharpParser.INTERPOLATED_REGULAR_STRING_START:
			case CSharpParser.INTERPOLATED_VERBATIUM_STRING_START:
			case CSharpParser.OPEN_PARENS:
			case CSharpParser.PLUS:
			case CSharpParser.MINUS:
			case CSharpParser.STAR:
			case CSharpParser.AMP:
			case CSharpParser.CARET:
			case CSharpParser.BANG:
			case CSharpParser.TILDE:
			case CSharpParser.OP_INC:
			case CSharpParser.OP_DEC:
			case CSharpParser.OP_RANGE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2399;
				this.interpolated_string_expression();
				}
				break;
			case CSharpParser.DOUBLE_CURLY_INSIDE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2400;
				this.match(CSharpParser.DOUBLE_CURLY_INSIDE);
				}
				break;
			case CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2401;
				this.match(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE);
				}
				break;
			case CSharpParser.VERBATIUM_INSIDE_STRING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2402;
				this.match(CSharpParser.VERBATIUM_INSIDE_STRING);
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
	public interpolated_string_expression(): Interpolated_string_expressionContext {
		let _localctx: Interpolated_string_expressionContext = new Interpolated_string_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 394, CSharpParser.RULE_interpolated_string_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2405;
			this.expression();
			this.state = 2410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CSharpParser.COMMA) {
				{
				{
				this.state = 2406;
				this.match(CSharpParser.COMMA);
				this.state = 2407;
				this.expression();
				}
				}
				this.state = 2412;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2419;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2413;
				this.match(CSharpParser.COLON);
				this.state = 2415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2414;
					this.match(CSharpParser.FORMAT_STRING);
					}
					}
					this.state = 2417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CSharpParser.FORMAT_STRING);
				}
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
	// @RuleVersion(0)
	public keyword(): KeywordContext {
		let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 396, CSharpParser.RULE_keyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2421;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ABSTRACT) | (1 << CSharpParser.AS) | (1 << CSharpParser.BASE) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BREAK) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CASE) | (1 << CSharpParser.CATCH) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.CHECKED) | (1 << CSharpParser.CLASS) | (1 << CSharpParser.CONST) | (1 << CSharpParser.CONTINUE) | (1 << CSharpParser.DECIMAL) | (1 << CSharpParser.DEFAULT) | (1 << CSharpParser.DELEGATE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (CSharpParser.DO - 33)) | (1 << (CSharpParser.DOUBLE - 33)) | (1 << (CSharpParser.ELSE - 33)) | (1 << (CSharpParser.ENUM - 33)) | (1 << (CSharpParser.EVENT - 33)) | (1 << (CSharpParser.EXPLICIT - 33)) | (1 << (CSharpParser.EXTERN - 33)) | (1 << (CSharpParser.FALSE - 33)) | (1 << (CSharpParser.FINALLY - 33)) | (1 << (CSharpParser.FIXED - 33)) | (1 << (CSharpParser.FLOAT - 33)) | (1 << (CSharpParser.FOR - 33)) | (1 << (CSharpParser.FOREACH - 33)) | (1 << (CSharpParser.GOTO - 33)) | (1 << (CSharpParser.IF - 33)) | (1 << (CSharpParser.IMPLICIT - 33)) | (1 << (CSharpParser.IN - 33)) | (1 << (CSharpParser.INT - 33)) | (1 << (CSharpParser.INTERFACE - 33)) | (1 << (CSharpParser.INTERNAL - 33)) | (1 << (CSharpParser.IS - 33)) | (1 << (CSharpParser.LOCK - 33)) | (1 << (CSharpParser.LONG - 33)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (CSharpParser.NAMESPACE - 65)) | (1 << (CSharpParser.NEW - 65)) | (1 << (CSharpParser.NULL_ - 65)) | (1 << (CSharpParser.OBJECT - 65)) | (1 << (CSharpParser.OPERATOR - 65)) | (1 << (CSharpParser.OUT - 65)) | (1 << (CSharpParser.OVERRIDE - 65)) | (1 << (CSharpParser.PARAMS - 65)) | (1 << (CSharpParser.PRIVATE - 65)) | (1 << (CSharpParser.PROTECTED - 65)) | (1 << (CSharpParser.PUBLIC - 65)) | (1 << (CSharpParser.READONLY - 65)) | (1 << (CSharpParser.REF - 65)) | (1 << (CSharpParser.RETURN - 65)) | (1 << (CSharpParser.SBYTE - 65)) | (1 << (CSharpParser.SEALED - 65)) | (1 << (CSharpParser.SHORT - 65)) | (1 << (CSharpParser.SIZEOF - 65)) | (1 << (CSharpParser.STACKALLOC - 65)) | (1 << (CSharpParser.STATIC - 65)) | (1 << (CSharpParser.STRING - 65)) | (1 << (CSharpParser.STRUCT - 65)) | (1 << (CSharpParser.SWITCH - 65)) | (1 << (CSharpParser.THIS - 65)) | (1 << (CSharpParser.THROW - 65)) | (1 << (CSharpParser.TRUE - 65)))) !== 0) || ((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (CSharpParser.TRY - 97)) | (1 << (CSharpParser.TYPEOF - 97)) | (1 << (CSharpParser.UINT - 97)) | (1 << (CSharpParser.ULONG - 97)) | (1 << (CSharpParser.UNCHECKED - 97)) | (1 << (CSharpParser.UNMANAGED - 97)) | (1 << (CSharpParser.UNSAFE - 97)) | (1 << (CSharpParser.USHORT - 97)) | (1 << (CSharpParser.USING - 97)) | (1 << (CSharpParser.VIRTUAL - 97)) | (1 << (CSharpParser.VOID - 97)) | (1 << (CSharpParser.VOLATILE - 97)) | (1 << (CSharpParser.WHILE - 97)))) !== 0))) {
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
	// @RuleVersion(0)
	public class_definition(): Class_definitionContext {
		let _localctx: Class_definitionContext = new Class_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 398, CSharpParser.RULE_class_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2423;
			this.match(CSharpParser.CLASS);
			this.state = 2424;
			this.identifier();
			this.state = 2426;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2425;
				this.type_parameter_list();
				}
			}

			this.state = 2429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2428;
				this.class_base();
				}
			}

			this.state = 2432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2431;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2434;
			this.class_body();
			this.state = 2436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2435;
				this.match(CSharpParser.SEMICOLON);
				}
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
	// @RuleVersion(0)
	public struct_definition(): Struct_definitionContext {
		let _localctx: Struct_definitionContext = new Struct_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 400, CSharpParser.RULE_struct_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.READONLY || _la === CSharpParser.REF) {
				{
				this.state = 2438;
				_la = this._input.LA(1);
				if (!(_la === CSharpParser.READONLY || _la === CSharpParser.REF)) {
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

			this.state = 2441;
			this.match(CSharpParser.STRUCT);
			this.state = 2442;
			this.identifier();
			this.state = 2444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2443;
				this.type_parameter_list();
				}
			}

			this.state = 2447;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2446;
				this.struct_interfaces();
				}
			}

			this.state = 2450;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2449;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2452;
			this.struct_body();
			this.state = 2454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2453;
				this.match(CSharpParser.SEMICOLON);
				}
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
	// @RuleVersion(0)
	public interface_definition(): Interface_definitionContext {
		let _localctx: Interface_definitionContext = new Interface_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 402, CSharpParser.RULE_interface_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2456;
			this.match(CSharpParser.INTERFACE);
			this.state = 2457;
			this.identifier();
			this.state = 2459;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2458;
				this.variant_type_parameter_list();
				}
			}

			this.state = 2462;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2461;
				this.interface_base();
				}
			}

			this.state = 2465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2464;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2467;
			this.class_body();
			this.state = 2469;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2468;
				this.match(CSharpParser.SEMICOLON);
				}
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
	// @RuleVersion(0)
	public enum_definition(): Enum_definitionContext {
		let _localctx: Enum_definitionContext = new Enum_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 404, CSharpParser.RULE_enum_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2471;
			this.match(CSharpParser.ENUM);
			this.state = 2472;
			this.identifier();
			this.state = 2474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2473;
				this.enum_base();
				}
			}

			this.state = 2476;
			this.enum_body();
			this.state = 2478;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.SEMICOLON) {
				{
				this.state = 2477;
				this.match(CSharpParser.SEMICOLON);
				}
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
	// @RuleVersion(0)
	public delegate_definition(): Delegate_definitionContext {
		let _localctx: Delegate_definitionContext = new Delegate_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 406, CSharpParser.RULE_delegate_definition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2480;
			this.match(CSharpParser.DELEGATE);
			this.state = 2481;
			this.return_type();
			this.state = 2482;
			this.identifier();
			this.state = 2484;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2483;
				this.variant_type_parameter_list();
				}
			}

			this.state = 2486;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				this.state = 2487;
				this.formal_parameter_list();
				}
			}

			this.state = 2490;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2491;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2494;
			this.match(CSharpParser.SEMICOLON);
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
	public event_declaration(): Event_declarationContext {
		let _localctx: Event_declarationContext = new Event_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 408, CSharpParser.RULE_event_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2496;
			this.match(CSharpParser.EVENT);
			this.state = 2497;
			this.type_();
			this.state = 2506;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				{
				this.state = 2498;
				this.variable_declarators();
				this.state = 2499;
				this.match(CSharpParser.SEMICOLON);
				}
				break;

			case 2:
				{
				this.state = 2501;
				this.member_name();
				this.state = 2502;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2503;
				this.event_accessor_declarations();
				this.state = 2504;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;
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
	// @RuleVersion(0)
	public field_declaration(): Field_declarationContext {
		let _localctx: Field_declarationContext = new Field_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 410, CSharpParser.RULE_field_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2508;
			this.variable_declarators();
			this.state = 2509;
			this.match(CSharpParser.SEMICOLON);
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
	public property_declaration(): Property_declarationContext {
		let _localctx: Property_declarationContext = new Property_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 412, CSharpParser.RULE_property_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2511;
			this.member_name();
			this.state = 2525;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				{
				this.state = 2512;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2513;
				this.accessor_declarations();
				this.state = 2514;
				this.match(CSharpParser.CLOSE_BRACE);
				this.state = 2519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.ASSIGNMENT) {
					{
					this.state = 2515;
					this.match(CSharpParser.ASSIGNMENT);
					this.state = 2516;
					this.variable_initializer();
					this.state = 2517;
					this.match(CSharpParser.SEMICOLON);
					}
				}

				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2521;
				this.right_arrow();
				this.state = 2522;
				this.throwable_expression();
				this.state = 2523;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public constant_declaration(): Constant_declarationContext {
		let _localctx: Constant_declarationContext = new Constant_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 414, CSharpParser.RULE_constant_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2527;
			this.match(CSharpParser.CONST);
			this.state = 2528;
			this.type_();
			this.state = 2529;
			this.constant_declarators();
			this.state = 2530;
			this.match(CSharpParser.SEMICOLON);
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
	public indexer_declaration(): Indexer_declarationContext {
		let _localctx: Indexer_declarationContext = new Indexer_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 416, CSharpParser.RULE_indexer_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2532;
			this.match(CSharpParser.THIS);
			this.state = 2533;
			this.match(CSharpParser.OPEN_BRACKET);
			this.state = 2534;
			this.formal_parameter_list();
			this.state = 2535;
			this.match(CSharpParser.CLOSE_BRACKET);
			this.state = 2544;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
				{
				this.state = 2536;
				this.match(CSharpParser.OPEN_BRACE);
				this.state = 2537;
				this.accessor_declarations();
				this.state = 2538;
				this.match(CSharpParser.CLOSE_BRACE);
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2540;
				this.right_arrow();
				this.state = 2541;
				this.throwable_expression();
				this.state = 2542;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public destructor_definition(): Destructor_definitionContext {
		let _localctx: Destructor_definitionContext = new Destructor_definitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 418, CSharpParser.RULE_destructor_definition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2546;
			this.match(CSharpParser.TILDE);
			this.state = 2547;
			this.identifier();
			this.state = 2548;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2549;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2550;
			this.body();
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
	public constructor_declaration(): Constructor_declarationContext {
		let _localctx: Constructor_declarationContext = new Constructor_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 420, CSharpParser.RULE_constructor_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2552;
			this.identifier();
			this.state = 2553;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				this.state = 2554;
				this.formal_parameter_list();
				}
			}

			this.state = 2557;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2559;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COLON) {
				{
				this.state = 2558;
				this.constructor_initializer();
				}
			}

			this.state = 2561;
			this.body();
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
	public method_declaration(): Method_declarationContext {
		let _localctx: Method_declarationContext = new Method_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 422, CSharpParser.RULE_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2563;
			this.method_member_name();
			this.state = 2565;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.LT) {
				{
				this.state = 2564;
				this.type_parameter_list();
				}
			}

			this.state = 2567;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2569;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BOOL) | (1 << CSharpParser.BY) | (1 << CSharpParser.BYTE) | (1 << CSharpParser.CHAR) | (1 << CSharpParser.DECIMAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DOUBLE - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FLOAT - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.IN - 32)) | (1 << (CSharpParser.INT - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)) | (1 << (CSharpParser.LONG - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.OBJECT - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.OUT - 64)) | (1 << (CSharpParser.PARAMS - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REF - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SBYTE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)) | (1 << (CSharpParser.SHORT - 64)) | (1 << (CSharpParser.STRING - 64)) | (1 << (CSharpParser.THIS - 64)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (CSharpParser.UINT - 99)) | (1 << (CSharpParser.ULONG - 99)) | (1 << (CSharpParser.UNMANAGED - 99)) | (1 << (CSharpParser.USHORT - 99)) | (1 << (CSharpParser.VAR - 99)) | (1 << (CSharpParser.VOID - 99)) | (1 << (CSharpParser.WHEN - 99)) | (1 << (CSharpParser.WHERE - 99)) | (1 << (CSharpParser.YIELD - 99)) | (1 << (CSharpParser.IDENTIFIER - 99)) | (1 << (CSharpParser.OPEN_BRACKET - 99)) | (1 << (CSharpParser.OPEN_PARENS - 99)))) !== 0)) {
				{
				this.state = 2568;
				this.formal_parameter_list();
				}
			}

			this.state = 2571;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.WHERE) {
				{
				this.state = 2572;
				this.type_parameter_constraints_clauses();
				}
			}

			this.state = 2580;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
			case CSharpParser.SEMICOLON:
				{
				this.state = 2575;
				this.method_body();
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2576;
				this.right_arrow();
				this.state = 2577;
				this.throwable_expression();
				this.state = 2578;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public method_member_name(): Method_member_nameContext {
		let _localctx: Method_member_nameContext = new Method_member_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 424, CSharpParser.RULE_method_member_name);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2587;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 333, this._ctx) ) {
			case 1:
				{
				this.state = 2582;
				this.identifier();
				}
				break;

			case 2:
				{
				this.state = 2583;
				this.identifier();
				this.state = 2584;
				this.match(CSharpParser.DOUBLE_COLON);
				this.state = 2585;
				this.identifier();
				}
				break;
			}
			this.state = 2596;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2590;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === CSharpParser.LT) {
						{
						this.state = 2589;
						this.type_argument_list();
						}
					}

					this.state = 2592;
					this.match(CSharpParser.DOT);
					this.state = 2593;
					this.identifier();
					}
					}
				}
				this.state = 2598;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
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
	// @RuleVersion(0)
	public operator_declaration(): Operator_declarationContext {
		let _localctx: Operator_declarationContext = new Operator_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 426, CSharpParser.RULE_operator_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2599;
			this.match(CSharpParser.OPERATOR);
			this.state = 2600;
			this.overloadable_operator();
			this.state = 2601;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2603;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.IN) {
				{
				this.state = 2602;
				this.match(CSharpParser.IN);
				}
			}

			this.state = 2605;
			this.arg_declaration();
			this.state = 2611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.COMMA) {
				{
				this.state = 2606;
				this.match(CSharpParser.COMMA);
				this.state = 2608;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CSharpParser.IN) {
					{
					this.state = 2607;
					this.match(CSharpParser.IN);
					}
				}

				this.state = 2610;
				this.arg_declaration();
				}
			}

			this.state = 2613;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2619;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CSharpParser.OPEN_BRACE:
			case CSharpParser.SEMICOLON:
				{
				this.state = 2614;
				this.body();
				}
				break;
			case CSharpParser.ASSIGNMENT:
				{
				this.state = 2615;
				this.right_arrow();
				this.state = 2616;
				this.throwable_expression();
				this.state = 2617;
				this.match(CSharpParser.SEMICOLON);
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public arg_declaration(): Arg_declarationContext {
		let _localctx: Arg_declarationContext = new Arg_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 428, CSharpParser.RULE_arg_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2621;
			this.type_();
			this.state = 2622;
			this.identifier();
			this.state = 2625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CSharpParser.ASSIGNMENT) {
				{
				this.state = 2623;
				this.match(CSharpParser.ASSIGNMENT);
				this.state = 2624;
				this.expression();
				}
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
	// @RuleVersion(0)
	public method_invocation(): Method_invocationContext {
		let _localctx: Method_invocationContext = new Method_invocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 430, CSharpParser.RULE_method_invocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2627;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2629;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.IN - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)) | (1 << (CSharpParser.OUT - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CSharpParser.VOID - 108)) | (1 << (CSharpParser.WHEN - 108)) | (1 << (CSharpParser.WHERE - 108)) | (1 << (CSharpParser.YIELD - 108)) | (1 << (CSharpParser.IDENTIFIER - 108)) | (1 << (CSharpParser.LITERAL_ACCESS - 108)) | (1 << (CSharpParser.INTEGER_LITERAL - 108)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.REAL_LITERAL - 108)) | (1 << (CSharpParser.CHARACTER_LITERAL - 108)) | (1 << (CSharpParser.REGULAR_STRING - 108)) | (1 << (CSharpParser.VERBATIUM_STRING - 108)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 108)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 108)) | (1 << (CSharpParser.OPEN_PARENS - 108)) | (1 << (CSharpParser.PLUS - 108)) | (1 << (CSharpParser.MINUS - 108)) | (1 << (CSharpParser.STAR - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (CSharpParser.AMP - 140)) | (1 << (CSharpParser.CARET - 140)) | (1 << (CSharpParser.BANG - 140)) | (1 << (CSharpParser.TILDE - 140)) | (1 << (CSharpParser.OP_INC - 140)) | (1 << (CSharpParser.OP_DEC - 140)) | (1 << (CSharpParser.OP_RANGE - 140)))) !== 0)) {
				{
				this.state = 2628;
				this.argument_list();
				}
			}

			this.state = 2631;
			this.match(CSharpParser.CLOSE_PARENS);
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
	public object_creation_expression(): Object_creation_expressionContext {
		let _localctx: Object_creation_expressionContext = new Object_creation_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 432, CSharpParser.RULE_object_creation_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2633;
			this.match(CSharpParser.OPEN_PARENS);
			this.state = 2635;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 10)) & ~0x1F) === 0 && ((1 << (_la - 10)) & ((1 << (CSharpParser.ADD - 10)) | (1 << (CSharpParser.ALIAS - 10)) | (1 << (CSharpParser.ARGLIST - 10)) | (1 << (CSharpParser.ASCENDING - 10)) | (1 << (CSharpParser.ASYNC - 10)) | (1 << (CSharpParser.AWAIT - 10)) | (1 << (CSharpParser.BASE - 10)) | (1 << (CSharpParser.BOOL - 10)) | (1 << (CSharpParser.BY - 10)) | (1 << (CSharpParser.BYTE - 10)) | (1 << (CSharpParser.CHAR - 10)) | (1 << (CSharpParser.CHECKED - 10)) | (1 << (CSharpParser.DECIMAL - 10)) | (1 << (CSharpParser.DEFAULT - 10)) | (1 << (CSharpParser.DELEGATE - 10)) | (1 << (CSharpParser.DESCENDING - 10)) | (1 << (CSharpParser.DOUBLE - 10)) | (1 << (CSharpParser.DYNAMIC - 10)) | (1 << (CSharpParser.EQUALS - 10)))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CSharpParser.FALSE - 42)) | (1 << (CSharpParser.FLOAT - 42)) | (1 << (CSharpParser.FROM - 42)) | (1 << (CSharpParser.GET - 42)) | (1 << (CSharpParser.GROUP - 42)) | (1 << (CSharpParser.IN - 42)) | (1 << (CSharpParser.INT - 42)) | (1 << (CSharpParser.INTO - 42)) | (1 << (CSharpParser.JOIN - 42)) | (1 << (CSharpParser.LET - 42)) | (1 << (CSharpParser.LONG - 42)) | (1 << (CSharpParser.NAMEOF - 42)) | (1 << (CSharpParser.NEW - 42)) | (1 << (CSharpParser.NULL_ - 42)) | (1 << (CSharpParser.OBJECT - 42)) | (1 << (CSharpParser.ON - 42)) | (1 << (CSharpParser.ORDERBY - 42)) | (1 << (CSharpParser.OUT - 42)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (CSharpParser.PARTIAL - 75)) | (1 << (CSharpParser.REF - 75)) | (1 << (CSharpParser.REMOVE - 75)) | (1 << (CSharpParser.SBYTE - 75)) | (1 << (CSharpParser.SELECT - 75)) | (1 << (CSharpParser.SET - 75)) | (1 << (CSharpParser.SHORT - 75)) | (1 << (CSharpParser.SIZEOF - 75)) | (1 << (CSharpParser.STRING - 75)) | (1 << (CSharpParser.THIS - 75)) | (1 << (CSharpParser.TRUE - 75)) | (1 << (CSharpParser.TYPEOF - 75)) | (1 << (CSharpParser.UINT - 75)) | (1 << (CSharpParser.ULONG - 75)) | (1 << (CSharpParser.UNCHECKED - 75)) | (1 << (CSharpParser.UNMANAGED - 75)) | (1 << (CSharpParser.USHORT - 75)) | (1 << (CSharpParser.VAR - 75)))) !== 0) || ((((_la - 108)) & ~0x1F) === 0 && ((1 << (_la - 108)) & ((1 << (CSharpParser.VOID - 108)) | (1 << (CSharpParser.WHEN - 108)) | (1 << (CSharpParser.WHERE - 108)) | (1 << (CSharpParser.YIELD - 108)) | (1 << (CSharpParser.IDENTIFIER - 108)) | (1 << (CSharpParser.LITERAL_ACCESS - 108)) | (1 << (CSharpParser.INTEGER_LITERAL - 108)) | (1 << (CSharpParser.HEX_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.BIN_INTEGER_LITERAL - 108)) | (1 << (CSharpParser.REAL_LITERAL - 108)) | (1 << (CSharpParser.CHARACTER_LITERAL - 108)) | (1 << (CSharpParser.REGULAR_STRING - 108)) | (1 << (CSharpParser.VERBATIUM_STRING - 108)) | (1 << (CSharpParser.INTERPOLATED_REGULAR_STRING_START - 108)) | (1 << (CSharpParser.INTERPOLATED_VERBATIUM_STRING_START - 108)) | (1 << (CSharpParser.OPEN_PARENS - 108)) | (1 << (CSharpParser.PLUS - 108)) | (1 << (CSharpParser.MINUS - 108)) | (1 << (CSharpParser.STAR - 108)))) !== 0) || ((((_la - 140)) & ~0x1F) === 0 && ((1 << (_la - 140)) & ((1 << (CSharpParser.AMP - 140)) | (1 << (CSharpParser.CARET - 140)) | (1 << (CSharpParser.BANG - 140)) | (1 << (CSharpParser.TILDE - 140)) | (1 << (CSharpParser.OP_INC - 140)) | (1 << (CSharpParser.OP_DEC - 140)) | (1 << (CSharpParser.OP_RANGE - 140)))) !== 0)) {
				{
				this.state = 2634;
				this.argument_list();
				}
			}

			this.state = 2637;
			this.match(CSharpParser.CLOSE_PARENS);
			this.state = 2639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				this.state = 2638;
				this.object_or_collection_initializer();
				}
				break;
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
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 434, CSharpParser.RULE_identifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2641;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CSharpParser.ADD) | (1 << CSharpParser.ALIAS) | (1 << CSharpParser.ARGLIST) | (1 << CSharpParser.ASCENDING) | (1 << CSharpParser.ASYNC) | (1 << CSharpParser.AWAIT) | (1 << CSharpParser.BY))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CSharpParser.DESCENDING - 32)) | (1 << (CSharpParser.DYNAMIC - 32)) | (1 << (CSharpParser.EQUALS - 32)) | (1 << (CSharpParser.FROM - 32)) | (1 << (CSharpParser.GET - 32)) | (1 << (CSharpParser.GROUP - 32)) | (1 << (CSharpParser.INTO - 32)) | (1 << (CSharpParser.JOIN - 32)) | (1 << (CSharpParser.LET - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (CSharpParser.NAMEOF - 64)) | (1 << (CSharpParser.ON - 64)) | (1 << (CSharpParser.ORDERBY - 64)) | (1 << (CSharpParser.PARTIAL - 64)) | (1 << (CSharpParser.REMOVE - 64)) | (1 << (CSharpParser.SELECT - 64)) | (1 << (CSharpParser.SET - 64)))) !== 0) || ((((_la - 102)) & ~0x1F) === 0 && ((1 << (_la - 102)) & ((1 << (CSharpParser.UNMANAGED - 102)) | (1 << (CSharpParser.VAR - 102)) | (1 << (CSharpParser.WHEN - 102)) | (1 << (CSharpParser.WHERE - 102)) | (1 << (CSharpParser.YIELD - 102)) | (1 << (CSharpParser.IDENTIFIER - 102)))) !== 0))) {
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 86:
			return this.local_variable_declaration_sempred(_localctx as Local_variable_declarationContext, predIndex);

		case 187:
			return this.right_arrow_sempred(_localctx as Right_arrowContext, predIndex);

		case 188:
			return this.right_shift_sempred(_localctx as Right_shiftContext, predIndex);

		case 189:
			return this.right_shift_assignment_sempred(_localctx as Right_shift_assignmentContext, predIndex);
		}
		return true;
	}
	private local_variable_declaration_sempred(_localctx: Local_variable_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.IsLocalVariableDeclaration() ;
		}
		return true;
	}
	private right_arrow_sempred(_localctx: Right_arrowContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}
	private right_shift_sempred(_localctx: Right_shiftContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}
	private right_shift_assignment_sempred(_localctx: Right_shift_assignmentContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return (_localctx._first != null ? _localctx._first.tokenIndex : 0) + 1 == (_localctx._second != null ? _localctx._second.tokenIndex : 0);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 5;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xC8\u0A56\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x04\xC6\t\xC6\x04\xC7\t\xC7" +
		"\x04\xC8\t\xC8\x04\xC9\t\xC9\x04\xCA\t\xCA\x04\xCB\t\xCB\x04\xCC\t\xCC" +
		"\x04\xCD\t\xCD\x04\xCE\t\xCE\x04\xCF\t\xCF\x04\xD0\t\xD0\x04\xD1\t\xD1" +
		"\x04\xD2\t\xD2\x04\xD3\t\xD3\x04\xD4\t\xD4\x04\xD5\t\xD5\x04\xD6\t\xD6" +
		"\x04\xD7\t\xD7\x04\xD8\t\xD8\x04\xD9\t\xD9\x04\xDA\t\xDA\x04\xDB\t\xDB" +
		"\x03\x02\x05\x02\u01B8\n\x02\x03\x02\x05\x02\u01BB\n\x02\x03\x02\x05\x02" +
		"\u01BE\n\x02\x03\x02\x07\x02\u01C1\n\x02\f\x02\x0E\x02\u01C4\v\x02\x03" +
		"\x02\x05\x02\u01C7\n\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\u01CD" +
		"\n\x03\x03\x03\x05\x03\u01D0\n\x03\x03\x03\x03\x03\x03\x03\x05\x03\u01D5" +
		"\n\x03\x07\x03\u01D7\n\x03\f\x03\x0E\x03\u01DA\v\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\u01E0\n\x04\f\x04\x0E\x04\u01E3\v\x04\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x05\x05\u01EA\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x06\x06\u01F0\n\x06\r\x06\x0E\x06\u01F1\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x05\x07\u01F8\n\x07\x03\b\x03\b\x05\b\u01FC\n\b\x03\t\x03\t\x03" +
		"\t\x05\t\u0201\n\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\u020B\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\u0211\n\r\f\r\x0E\r\u0214\v" +
		"\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07\x0E\u021B\n\x0E\f\x0E\x0E\x0E" +
		"\u021E\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0223\n\x0F\x03\x0F\x05\x0F" +
		"\u0226\n\x0F\x03\x0F\x03\x0F\x05\x0F\u022A\n\x0F\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\u0232\n\x10\x03\x11\x03\x11\x03\x11\x05" +
		"\x11\u0237\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u0241\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u024E\n\x13\x03\x14" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0256\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x05\x15\u025C\n\x15\x05\x15\u025E\n\x15\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\u0263\n\x16\f\x16\x0E\x16\u0266\v\x16\x03\x17\x03" +
		"\x17\x03\x17\x07\x17\u026B\n\x17\f\x17\x0E\x17\u026E\v\x17\x03\x18\x03" +
		"\x18\x03\x18\x07\x18\u0273\n\x18\f\x18\x0E\x18\u0276\v\x18\x03\x19\x03" +
		"\x19\x03\x19\x07\x19\u027B\n\x19\f\x19\x0E\x19\u027E\v\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u0283\n\x1A\f\x1A\x0E\x1A\u0286\v\x1A\x03\x1B\x03" +
		"\x1B\x03\x1B\x07\x1B\u028B\n\x1B\f\x1B\x0E\x1B\u028E\v\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0297\n\x1C\f\x1C" +
		"\x0E\x1C\u029A\v\x1C\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u029F\n\x1D\x03\x1D" +
		"\x07\x1D\u02A2\n\x1D\f\x1D\x0E\x1D\u02A5\v\x1D\x03\x1E\x03\x1E\x03\x1E" +
		"\x07\x1E\u02AA\n\x1E\f\x1E\x0E\x1E\u02AD\v\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u02B2\n\x1F\f\x1F\x0E\x1F\u02B5\v\x1F\x03 \x03 \x03 \x03 \x03" +
		" \x05 \u02BC\n \x05 \u02BE\n \x03 \x05 \u02C1\n \x03!\x03!\x03!\x07!\u02C6" +
		"\n!\f!\x0E!\u02C9\v!\x03\"\x03\"\x05\"\u02CD\n\"\x03\"\x03\"\x03\"\x03" +
		"#\x03#\x05#\u02D4\n#\x03#\x03#\x05#\u02D8\n#\x05#\u02DA\n#\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03" +
		"$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u02F6\n$\x03%\x03" +
		"%\x05%\u02FA\n%\x03%\x07%\u02FD\n%\f%\x0E%\u0300\v%\x03%\x05%\u0303\n" +
		"%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u030B\n%\x03%\x05%\u030E\n%\x03%" +
		"\x07%\u0311\n%\f%\x0E%\u0314\v%\x03%\x05%\u0317\n%\x07%\u0319\n%\f%\x0E" +
		"%\u031C\v%\x03&\x03&\x03&\x05&\u0321\n&\x03&\x03&\x03&\x03&\x03&\x03&" +
		"\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u032F\n&\x03&\x03&\x03&\x03&\x05&" +
		"\u0335\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x07&\u033F\n&\f&\x0E" +
		"&\u0342\v&\x03&\x05&\u0345\n&\x03&\x06&\u0348\n&\r&\x0E&\u0349\x03&\x03" +
		"&\x05&\u034E\n&\x03&\x03&\x03&\x03&\x05&\u0354\n&\x03&\x03&\x03&\x03&" +
		"\x06&\u035A\n&\r&\x0E&\u035B\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u0365" +
		"\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x03&\x05&\u0377\n&\x03&\x05&\u037A\n&\x03&\x03&\x03&\x05&\u037F" +
		"\n&\x03&\x05&\u0382\n&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03" +
		"&\x03&\x07&\u038F\n&\f&\x0E&\u0392\v&\x03&\x03&\x03&\x05&\u0397\n&\x03" +
		"\'\x03\'\x05\'\u039B\n\'\x03(\x03(\x03(\x03)\x05)\u03A1\n)\x03)\x03)\x03" +
		")\x05)\u03A6\n)\x03*\x05*\u03A9\n*\x03*\x03*\x03*\x03*\x07*\u03AF\n*\f" +
		"*\x0E*\u03B2\v*\x03*\x03*\x03+\x03+\x03+\x05+\u03B9\n+\x03+\x03+\x03," +
		"\x03,\x03-\x03-\x03-\x07-\u03C2\n-\f-\x0E-\u03C5\v-\x03.\x03.\x05.\u03C9" +
		"\n.\x03/\x03/\x03/\x05/\u03CE\n/\x05/\u03D0\n/\x03/\x03/\x030\x030\x03" +
		"0\x070\u03D7\n0\f0\x0E0\u03DA\v0\x031\x031\x031\x031\x031\x051\u03E1\n" +
		"1\x031\x031\x031\x032\x032\x052\u03E8\n2\x033\x033\x033\x033\x073\u03EE" +
		"\n3\f3\x0E3\u03F1\v3\x033\x053\u03F4\n3\x033\x033\x034\x034\x034\x034" +
		"\x034\x054\u03FD\n4\x035\x035\x035\x055\u0402\n5\x055\u0404\n5\x035\x03" +
		"5\x036\x036\x036\x076\u040B\n6\f6\x0E6\u040E\v6\x037\x037\x037\x037\x03" +
		"7\x057\u0415\n7\x038\x038\x058\u0419\n8\x038\x038\x038\x058\u041E\n8\x05" +
		"8\u0420\n8\x038\x038\x038\x058\u0425\n8\x078\u0427\n8\f8\x0E8\u042A\v" +
		"8\x039\x039\x079\u042E\n9\f9\x0E9\u0431\v9\x039\x039\x03:\x03:\x03:\x07" +
		":\u0438\n:\f:\x0E:\u043B\v:\x03:\x05:\u043E\n:\x03:\x05:\u0441\n:\x03" +
		":\x05:\u0444\n:\x03;\x03;\x03;\x03;\x07;\u044A\n;\f;\x0E;\u044D\v;\x03" +
		";\x03;\x03<\x03<\x03<\x03<\x03=\x05=\u0456\n=\x03=\x03=\x03=\x03=\x03" +
		">\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x03>\x05>\u0467\n>\x03" +
		"?\x03?\x03?\x07?\u046C\n?\f?\x0E?\u046F\v?\x03@\x05@\u0472\n@\x03@\x03" +
		"@\x03@\x03A\x03A\x03A\x07A\u047A\nA\fA\x0EA\u047D\vA\x03B\x03B\x05B\u0481" +
		"\nB\x03C\x03C\x03C\x03D\x03D\x05D\u0488\nD\x03D\x03D\x03D\x03D\x03E\x07" +
		"E\u048F\nE\fE\x0EE\u0492\vE\x03E\x03E\x05E\u0496\nE\x03F\x03F\x03F\x03" +
		"F\x03F\x05F\u049D\nF\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03H\x03I\x03" +
		"I\x05I\u04A9\nI\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x05I\u04B4" +
		"\nI\x03J\x03J\x03J\x03J\x07J\u04BA\nJ\fJ\x0EJ\u04BD\vJ\x03K\x03K\x05K" +
		"\u04C1\nK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u04CA\nL\x03M\x03M\x03" +
		"M\x03M\x03N\x03N\x03N\x05N\u04D3\nN\x03O\x03O\x03O\x03O\x03O\x03O\x03" +
		"O\x05O\u04DC\nO\x03P\x03P\x03P\x03Q\x05Q\u04E2\nQ\x03Q\x03Q\x03Q\x05Q" +
		"\u04E7\nQ\x03Q\x03Q\x05Q\u04EB\nQ\x03Q\x03Q\x05Q\u04EF\nQ\x03R\x03R\x05" +
		"R\u04F3\nR\x03R\x03R\x05R\u04F7\nR\x03S\x03S\x03S\x03S\x03S\x05S\u04FE" +
		"\nS\x03T\x03T\x03T\x03T\x03U\x03U\x05U\u0506\nU\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0513\nV\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x07V\u051B\nV\fV\x0EV\u051E\vV\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0533" +
		"\nV\x03V\x03V\x05V\u0537\nV\x03V\x03V\x05V\u053B\nV\x03V\x03V\x03V\x05" +
		"V\u0540\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0554\nV\x03V\x03V\x03V\x05V\u0559" +
		"\nV\x03V\x03V\x03V\x05V\u055E\nV\x03V\x03V\x03V\x03V\x03V\x05V\u0565\n" +
		"V\x03V\x05V\u0568\nV\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u057E\nV\x03" +
		"V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u058A\nV\x03W\x03" +
		"W\x05W\u058E\nW\x03W\x03W\x03X\x03X\x03X\x03X\x05X\u0596\nX\x03X\x03X" +
		"\x03X\x03X\x03X\x03X\x07X\u059E\nX\fX\x0EX\u05A1\vX\x03X\x03X\x03X\x03" +
		"X\x05X\u05A7\nX\x03Y\x03Y\x05Y\u05AB\nY\x03Z\x03Z\x03Z\x05Z\u05B0\nZ\x03" +
		"Z\x05Z\u05B3\nZ\x03[\x03[\x03[\x05[\u05B8\n[\x03\\\x03\\\x03\\\x03\\\x03" +
		"]\x03]\x05]\u05C0\n]\x03^\x06^\u05C3\n^\r^\x0E^\u05C4\x03^\x03^\x03_\x03" +
		"_\x03_\x05_\u05CC\n_\x03_\x03_\x03_\x03_\x05_\u05D2\n_\x03`\x03`\x03`" +
		"\x03a\x06a\u05D8\na\ra\x0Ea\u05D9\x03b\x03b\x03b\x03b\x07b\u05E0\nb\f" +
		"b\x0Eb\u05E3\vb\x05b\u05E5\nb\x03c\x03c\x03c\x07c\u05EA\nc\fc\x0Ec\u05ED" +
		"\vc\x03d\x03d\x07d\u05F1\nd\fd\x0Ed\u05F4\vd\x03d\x05d\u05F7\nd\x03d\x05" +
		"d\u05FA\nd\x03e\x03e\x03e\x03e\x05e\u0600\ne\x03e\x03e\x05e\u0604\ne\x03" +
		"e\x03e\x03f\x03f\x05f\u060A\nf\x03f\x03f\x03g\x03g\x03g\x03g\x03g\x03" +
		"h\x03h\x03h\x03i\x03i\x05i\u0618\ni\x03j\x03j\x03j\x03j\x05j\u061E\nj" +
		"\x03k\x03k\x03k\x07k\u0623\nk\fk\x0Ek\u0626\vk\x03l\x03l\x05l\u062A\n" +
		"l\x03l\x05l\u062D\nl\x03l\x05l\u0630\nl\x03l\x03l\x03m\x06m\u0635\nm\r" +
		"m\x0Em\u0636\x03n\x03n\x03n\x03n\x03n\x03o\x06o\u063F\no\ro\x0Eo\u0640" +
		"\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x05p\u0652\np\x03q\x06q\u0655\nq\rq\x0Eq\u0656\x03r\x03r\x05r\u065B" +
		"\nr\x03s\x05s\u065E\ns\x03s\x05s\u0661\ns\x03s\x03s\x03s\x03s\x03s\x05" +
		"s\u0668\ns\x03t\x03t\x03t\x03t\x05t\u066E\nt\x03u\x03u\x03u\x03u\x07u" +
		"\u0674\nu\fu\x0Eu\u0677\vu\x03u\x03u\x03v\x05v\u067C\nv\x03v\x03v\x03" +
		"w\x03w\x03w\x03w\x07w\u0684\nw\fw\x0Ew\u0687\vw\x03x\x03x\x03x\x07x\u068C" +
		"\nx\fx\x0Ex\u068F\vx\x03y\x06y\u0692\ny\ry\x0Ey\u0693\x03z\x03z\x03z\x03" +
		"z\x03z\x03{\x03{\x03{\x03{\x05{\u069F\n{\x03{\x03{\x05{\u06A3\n{\x05{" +
		"\u06A5\n{\x03|\x03|\x03|\x05|\u06AA\n|\x03|\x03|\x05|\u06AE\n|\x03}\x03" +
		"}\x03}\x07}\u06B3\n}\f}\x0E}\u06B6\v}\x03~\x03~\x03~\x03~\x03\x7F\x03" +
		"\x7F\x05\x7F\u06BE\n\x7F\x03\x7F\x03\x7F\x03\x80\x06\x80\u06C3\n\x80\r" +
		"\x80\x0E\x80\u06C4\x03\x81\x05\x81\u06C8\n\x81\x03\x81\x05\x81\u06CB\n" +
		"\x81\x03\x81\x03\x81\x05\x81\u06CF\n\x81\x03\x82\x06\x82\u06D2\n\x82\r" +
		"\x82\x0E\x82\u06D3\x03\x83\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03" +
		"\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06E1\n\x84\x03\x84\x03\x84" +
		"\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x05\x84\u06EB\n\x84\x03" +
		"\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85\u06F2\n\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x03\x85\x05\x85" +
		"\u06FE\n\x85\x03\x86\x03\x86\x03\x86\x07\x86\u0703\n\x86\f\x86\x0E\x86" +
		"\u0706\v\x86\x03\x87\x03\x87\x03\x87\x03\x87\x03\x88\x03\x88\x03\x88\x07" +
		"\x88\u070F\n\x88\f\x88\x0E\x88\u0712\v\x88\x03\x89\x03\x89\x03\x89\x05" +
		"\x89\u0717\n\x89\x03\x8A\x03\x8A\x05\x8A\u071B\n\x8A\x03\x8B\x03\x8B\x05" +
		"\x8B\u071F\n\x8B\x03\x8C\x03\x8C\x03\x8D\x03\x8D\x05\x8D\u0725\n\x8D\x03" +
		"\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u072B\n\x8E\x05\x8E\u072D\n\x8E\x03" +
		"\x8F\x03\x8F\x03\x8F\x07\x8F\u0732\n\x8F\f\x8F\x0E\x8F\u0735\v\x8F\x03" +
		"\x90\x05\x90\u0738\n\x90\x03\x90\x05\x90\u073B\n\x90\x03\x90\x03\x90\x05" +
		"\x90\u073F\n\x90\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91\x03\x91" +
		"\x03\x91\x05\x91\u0749\n\x91\x03\x92\x05\x92\u074C\n\x92\x03\x92\x03\x92" +
		"\x03\x92\x03\x92\x03\x93\x05\x93\u0753\n\x93\x03\x93\x05\x93\u0756\n\x93" +
		"\x03\x93\x03\x93\x03\x93\x05\x93\u075B\n\x93\x03\x93\x03\x93\x03\x93\x05" +
		"\x93\u0760\n\x93\x05\x93\u0762\n\x93\x03\x94\x05\x94\u0765\n\x94\x03\x94" +
		"\x05\x94\u0768\n\x94\x03\x94\x03\x94\x03\x94\x03\x95\x05\x95\u076E\n\x95" +
		"\x03\x95\x05\x95\u0771\n\x95\x03\x95\x03\x95\x03\x95\x03\x96\x03\x96\x03" +
		"\x96\x03\x96\x03\x96\x03\x96\x03\x96\x05\x96\u077D\n\x96\x03\x97\x03\x97" +
		"\x05\x97\u0781\n\x97\x03\x98\x05\x98\u0784\n\x98\x03\x98\x03\x98\x03\x98" +
		"\x03\x98\x03\x98\x03\x98\x03\x98\x03\x98\x05\x98\u078E\n\x98\x03\x99\x05" +
		"\x99\u0791\n\x99\x03\x99\x03\x99\x03\x99\x03\x9A\x05\x9A\u0797\n\x9A\x03" +
		"\x9A\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03" +
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03" +
		"\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u07B2\n\x9B" +
		"\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9D\x03\x9D" +
		"\x03\x9D\x03\x9D\x05\x9D\u07BF\n\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x05" +
		"\x9E\u07C5\n\x9E\x03\x9F\x03\x9F\x03\x9F\x03\xA0\x03\xA0\x07\xA0\u07CC" +
		"\n\xA0\f\xA0\x0E\xA0\u07CF\v\xA0\x03\xA0\x03\xA0\x03\xA1\x05\xA1\u07D4" +
		"\n\xA1\x03\xA1\x05\xA1\u07D7\n\xA1\x03\xA1\x03\xA1\x03\xA1\x03\xA1\x06" +
		"\xA1\u07DD\n\xA1\r\xA1\x0E\xA1\u07DE\x03\xA1\x03\xA1\x05\xA1\u07E3\n\xA1" +
		"\x03\xA2\x03\xA2\x07\xA2\u07E7\n\xA2\f\xA2\x0E\xA2\u07EA\v\xA2\x03\xA2" +
		"\x06\xA2\u07ED\n\xA2\r\xA2\x0E\xA2\u07EE\x03\xA3\x03\xA3\x07\xA3\u07F3" +
		"\n\xA3\f\xA3\x0E\xA3\u07F6\v\xA3\x03\xA3\x03\xA3\x03\xA4\x03\xA4\x03\xA4" +
		"\x03\xA4\x07\xA4\u07FE\n\xA4\f\xA4\x0E\xA4\u0801\v\xA4\x03\xA4\x05\xA4" +
		"\u0804\n\xA4\x05\xA4\u0806\n\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA5" +
		"\x03\xA5\x07\xA5\u080E\n\xA5\f\xA5\x0E\xA5\u0811\v\xA5\x03\xA5\x03\xA5" +
		"\x03\xA6\x05\xA6\u0816\n\xA6\x03\xA6\x05\xA6\u0819\n\xA6\x03\xA6\x03\xA6" +
		"\x03\xA7\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA9\x03\xA9\x07\xA9\u0824" +
		"\n\xA9\f\xA9\x0E\xA9\u0827\v\xA9\x03\xA9\x03\xA9\x03\xAA\x05\xAA\u082C" +
		"\n\xAA\x03\xAA\x05\xAA\u082F\n\xAA\x03\xAA\x05\xAA\u0832\n\xAA\x03\xAA" +
		"\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x05\xAA\u0839\n\xAA\x03\xAA\x03\xAA\x03" +
		"\xAA\x05\xAA\u083E\n\xAA\x03\xAA\x03\xAA\x05\xAA\u0842\n\xAA\x03\xAA\x03" +
		"\xAA\x05\xAA\u0846\n\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA" +
		"\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA" +
		"\x05\xAA\u0857\n\xAA\x03\xAA\x05\xAA\u085A\n\xAA\x03\xAA\x03\xAA\x03\xAA" +
		"\x05\xAA\u085F\n\xAA\x03\xAA\x03\xAA\x05\xAA\u0863\n\xAA\x03\xAA\x03\xAA" +
		"\x05\xAA\u0867\n\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03" +
		"\xAA\x05\xAA\u0870\n\xAA\x03\xAB\x05\xAB\u0873\n\xAB\x03\xAB\x03\xAB\x03" +
		"\xAB\x05\xAB\u0878\n\xAB\x03\xAB\x03\xAB\x05\xAB\u087C\n\xAB\x03\xAB\x03" +
		"\xAB\x03\xAB\x05\xAB\u0881\n\xAB\x03\xAB\x03\xAB\x05\xAB\u0885\n\xAB\x05" +
		"\xAB\u0887\n\xAB\x03\xAC\x03\xAC\x03\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAD" +
		"\x07\xAD\u0890\n\xAD\f\xAD\x0E\xAD\u0893\v\xAD\x03\xAD\x05\xAD\u0896\n" +
		"\xAD\x05\xAD\u0898\n\xAD\x03\xAD\x03\xAD\x03\xAE\x05\xAE\u089D\n\xAE\x03" +
		"\xAE\x03\xAE\x03\xAE\x05\xAE\u08A2\n\xAE\x03\xAF\x03\xAF\x03\xAF\x03\xAF" +
		"\x03\xAF\x05\xAF\u08A9\n\xAF\x03\xAF\x03\xAF\x03\xB0\x03\xB0\x05\xB0\u08AF" +
		"\n\xB0\x03\xB1\x06\xB1\u08B2\n\xB1\r\xB1\x0E\xB1\u08B3\x03\xB2\x03\xB2" +
		"\x03\xB2\x03\xB2\x05\xB2\u08BA\n\xB2\x03\xB2\x03\xB2\x05\xB2\u08BE\n\xB2" +
		"\x03\xB2\x03\xB2\x03\xB3\x03\xB3\x05\xB3\u08C4\n\xB3\x03\xB4\x03\xB4\x03" +
		"\xB4\x07\xB4\u08C9\n\xB4\f\xB4\x0E\xB4\u08CC\v\xB4\x03\xB5\x03\xB5\x03" +
		"\xB5\x03\xB5\x03\xB5\x07\xB5\u08D3\n\xB5\f\xB5\x0E\xB5\u08D6\v\xB5\x05" +
		"\xB5\u08D8\n\xB5\x03\xB5\x05\xB5\u08DB\n\xB5\x03\xB6\x03\xB6\x03\xB6\x05" +
		"\xB6\u08E0\n\xB6\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x05\xB7\u08E6\n\xB7\x03" +
		"\xB7\x03\xB7\x07\xB7\u08EA\n\xB7\f\xB7\x0E\xB7\u08ED\v\xB7\x03\xB7\x03" +
		"\xB7\x03\xB7\x03\xB7\x05\xB7\u08F3\n\xB7\x03\xB8\x03\xB8\x03\xB8\x07\xB8" +
		"\u08F8\n\xB8\f\xB8\x0E\xB8\u08FB\v\xB8\x03\xB9\x03\xB9\x03\xB9\x03\xB9" +
		"\x03\xBA\x05\xBA\u0902\n\xBA\x03\xBA\x03\xBA\x05\xBA\u0906\n\xBA\x03\xBB" +
		"\x03\xBB\x03\xBB\x03\xBB\x03\xBB\x03";
	private static readonly _serializedATNSegment1: string =
		"\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x03\xBC\x05\xBC\u0915" +
		"\n\xBC\x03\xBC\x03\xBC\x05\xBC\u0919\n\xBC\x03\xBC\x03\xBC\x03\xBC\x03" +
		"\xBC\x03\xBC\x07\xBC\u0920\n\xBC\f\xBC\x0E\xBC\u0923\v\xBC\x03\xBC\x05" +
		"\xBC\u0926\n\xBC\x03\xBC\x03\xBC\x05\xBC\u092A\n\xBC\x03\xBD\x03\xBD\x03" +
		"\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xBF\x03" +
		"\xBF\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x03\xC0\x05" +
		"\xC0\u0940\n\xC0\x03\xC1\x03\xC1\x03\xC2\x03\xC2\x03\xC2\x03\xC2\x05\xC2" +
		"\u0948\n\xC2\x03\xC3\x03\xC3\x07\xC3\u094C\n\xC3\f\xC3\x0E\xC3\u094F\v" +
		"\xC3\x03\xC3\x03\xC3\x03\xC4\x03\xC4\x07\xC4\u0955\n\xC4\f\xC4\x0E\xC4" +
		"\u0958\v\xC4\x03\xC4\x03\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u0960" +
		"\n\xC5\x03\xC6\x03\xC6\x03\xC6\x03\xC6\x05\xC6\u0966\n\xC6\x03\xC7\x03" +
		"\xC7\x03\xC7\x07\xC7\u096B\n\xC7\f\xC7\x0E\xC7\u096E\v\xC7\x03\xC7\x03" +
		"\xC7\x06\xC7\u0972\n\xC7\r\xC7\x0E\xC7\u0973\x05\xC7\u0976\n\xC7\x03\xC8" +
		"\x03\xC8\x03\xC9\x03\xC9\x03\xC9\x05\xC9\u097D\n\xC9\x03\xC9\x05\xC9\u0980" +
		"\n\xC9\x03\xC9\x05\xC9\u0983\n\xC9\x03\xC9\x03\xC9\x05\xC9\u0987\n\xC9" +
		"\x03\xCA\x05\xCA\u098A\n\xCA\x03\xCA\x03\xCA\x03\xCA\x05\xCA\u098F\n\xCA" +
		"\x03\xCA\x05\xCA\u0992\n\xCA\x03\xCA\x05\xCA\u0995\n\xCA\x03\xCA\x03\xCA" +
		"\x05\xCA\u0999\n\xCA\x03\xCB\x03\xCB\x03\xCB\x05\xCB\u099E\n\xCB\x03\xCB" +
		"\x05\xCB\u09A1\n\xCB\x03\xCB\x05\xCB\u09A4\n\xCB\x03\xCB\x03\xCB\x05\xCB" +
		"\u09A8\n\xCB\x03\xCC\x03\xCC\x03\xCC\x05\xCC\u09AD\n\xCC\x03\xCC\x03\xCC" +
		"\x05\xCC\u09B1\n\xCC\x03\xCD\x03\xCD\x03\xCD\x03\xCD\x05\xCD\u09B7\n\xCD" +
		"\x03\xCD\x03\xCD\x05\xCD\u09BB\n\xCD\x03\xCD\x03\xCD\x05\xCD\u09BF\n\xCD" +
		"\x03\xCD\x03\xCD\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE\x03\xCE" +
		"\x03\xCE\x03\xCE\x03\xCE\x05\xCE\u09CD\n\xCE\x03\xCF\x03\xCF\x03\xCF\x03" +
		"\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u09DA" +
		"\n\xD0\x03\xD0\x03\xD0\x03\xD0\x03\xD0\x05\xD0\u09E0\n\xD0\x03\xD1\x03" +
		"\xD1\x03\xD1\x03\xD1\x03\xD1\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03" +
		"\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x03\xD2\x05\xD2\u09F3\n\xD2" +
		"\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD3\x03\xD4\x03\xD4\x03\xD4" +
		"\x05\xD4\u09FE\n\xD4\x03\xD4\x03\xD4\x05\xD4\u0A02\n\xD4\x03\xD4\x03\xD4" +
		"\x03\xD5\x03\xD5\x05\xD5\u0A08\n\xD5\x03\xD5\x03\xD5\x05\xD5\u0A0C\n\xD5" +
		"\x03\xD5\x03\xD5\x05\xD5\u0A10\n\xD5\x03\xD5\x03\xD5\x03\xD5\x03\xD5\x03" +
		"\xD5\x05\xD5\u0A17\n\xD5\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x03\xD6\x05\xD6" +
		"\u0A1E\n\xD6\x03\xD6\x05\xD6\u0A21\n\xD6\x03\xD6\x03\xD6\x07\xD6\u0A25" +
		"\n\xD6\f\xD6\x0E\xD6\u0A28\v\xD6\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x05\xD7" +
		"\u0A2E\n\xD7\x03\xD7\x03\xD7\x03\xD7\x05\xD7\u0A33\n\xD7\x03\xD7\x05\xD7" +
		"\u0A36\n\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x03\xD7\x05\xD7\u0A3E" +
		"\n\xD7\x03\xD8\x03\xD8\x03\xD8\x03\xD8\x05\xD8\u0A44\n\xD8\x03\xD9\x03" +
		"\xD9\x05\xD9\u0A48\n\xD9\x03\xD9\x03\xD9\x03\xDA\x03\xDA\x05\xDA\u0A4E" +
		"\n\xDA\x03\xDA\x03\xDA\x05\xDA\u0A52\n\xDA\x03\xDB\x03\xDB\x03\xDB\x02" +
		"\x02\x02\xDC\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
		"z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
		"\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
		"\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
		"\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
		"\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
		"\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
		"\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
		"\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
		"\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
		"\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
		"\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
		"\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
		"\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E" +
		"\x02\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C" +
		"\x02\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A" +
		"\x02\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178" +
		"\x02\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186" +
		"\x02\u0188\x02\u018A\x02\u018C\x02\u018E\x02\u0190\x02\u0192\x02\u0194" +
		"\x02\u0196\x02\u0198\x02\u019A\x02\u019C\x02\u019E\x02\u01A0\x02\u01A2" +
		"\x02\u01A4\x02\u01A6\x02\u01A8\x02\u01AA\x02\u01AC\x02\u01AE\x02\u01B0" +
		"\x02\u01B2\x02\u01B4\x02\x02\x15\n\x02\x17\x17\x1A\x1A99AAUUYYefjj\x04" +
		"\x02$$//\x05\x0288JJRR\x03\x02\x9E\x9F\x04\x02\x94\x95\xA0\xA1\x03\x02" +
		"\x89\x8A\x03\x02\x8B\x8D\x10\x02\x14\x14\x17\x17\x1A\x1A\x1F\x1F$$//9" +
		"9AAFFUUYY]]efjj\x04\x02\x10\x10\"\"\x04\x02\x11\x11ii\x0E\x02\v\v\x11" +
		"\x11++;;DDKKMQVV\\\\iimmoo\x04\x02**77\x04\x02\x13\x13``\x04\x02\x8B\x8B" +
		"\x96\x96\x04\x0288JJ\x04\x02,,bb\x15\x02\v\v\x0F\x0F\x13\x15\x17!#$&\'" +
		")1446;==@ACFHHJLNRTVYkmorr\x03\x02QR\x16\x02\f\x0E\x10\x12\x16\x16\"\"" +
		"%%((2355<<>?BBGGIIMMSSWXhhllpqst\x02\u0B64\x02\u01B7\x03\x02\x02\x02\x04" +
		"\u01CF\x03\x02\x02\x02\x06\u01DB\x03\x02\x02\x02\b\u01E9\x03\x02\x02\x02" +
		"\n\u01EB\x03\x02\x02\x02\f\u01F5\x03\x02\x02\x02\x0E\u01FB\x03\x02\x02" +
		"\x02\x10\u0200\x03\x02\x02\x02\x12\u0202\x03\x02\x02\x02\x14\u0204\x03" +
		"\x02\x02\x02\x16\u020A\x03\x02\x02\x02\x18\u020C\x03\x02\x02\x02\x1A\u0217" +
		"\x03\x02\x02\x02\x1C\u0222\x03\x02\x02\x02\x1E\u0231\x03\x02\x02\x02 " +
		"\u0236\x03\x02\x02\x02\"\u0240\x03\x02\x02\x02$\u024D\x03\x02\x02\x02" +
		"&\u024F\x03\x02\x02\x02(\u0257\x03\x02\x02\x02*\u025F\x03\x02\x02\x02" +
		",\u0267\x03\x02\x02\x02.\u026F\x03\x02\x02\x020\u0277\x03\x02\x02\x02" +
		"2\u027F\x03\x02\x02\x024\u0287\x03\x02\x02\x026\u028F\x03\x02\x02\x02" +
		"8\u029B\x03\x02\x02\x02:\u02A6\x03\x02\x02\x02<\u02AE\x03\x02\x02\x02" +
		">\u02B6\x03\x02\x02\x02@\u02C2\x03\x02\x02\x02B\u02CA\x03\x02\x02\x02" +
		"D\u02D9\x03\x02\x02\x02F\u02F5\x03\x02\x02\x02H\u02F7\x03\x02\x02\x02" +
		"J\u0396\x03\x02\x02\x02L\u039A\x03\x02\x02\x02N\u039C\x03\x02\x02\x02" +
		"P\u03A0\x03\x02\x02\x02R\u03A8\x03\x02\x02\x02T\u03B8\x03\x02\x02\x02" +
		"V\u03BC\x03\x02\x02\x02X\u03BE\x03\x02\x02\x02Z\u03C8\x03\x02\x02\x02" +
		"\\\u03CA\x03\x02\x02\x02^\u03D3\x03\x02\x02\x02`\u03E0\x03\x02\x02\x02" +
		"b\u03E7\x03\x02\x02\x02d\u03E9\x03\x02\x02\x02f\u03FC\x03\x02\x02\x02" +
		"h\u03FE\x03\x02\x02\x02j\u0407\x03\x02\x02\x02l\u0414\x03\x02\x02\x02" +
		"n\u0416\x03\x02\x02\x02p\u042B\x03\x02\x02\x02r\u0434\x03\x02\x02\x02" +
		"t\u0445\x03\x02\x02\x02v\u0450\x03\x02\x02\x02x\u0455\x03\x02\x02\x02" +
		"z\u0466\x03\x02\x02\x02|\u0468\x03\x02\x02\x02~\u0471\x03\x02\x02\x02" +
		"\x80\u0476\x03\x02\x02\x02\x82\u0480\x03\x02\x02\x02\x84\u0482\x03\x02" +
		"\x02\x02\x86\u0485\x03\x02\x02\x02\x88\u0490\x03\x02\x02\x02\x8A\u049C" +
		"\x03\x02\x02\x02\x8C\u049E\x03\x02\x02\x02\x8E\u04A3\x03\x02\x02\x02\x90" +
		"\u04A6\x03\x02\x02\x02\x92\u04B5\x03\x02\x02\x02\x94\u04BE\x03\x02\x02" +
		"\x02\x96\u04C9\x03\x02\x02\x02\x98\u04CB\x03\x02\x02\x02\x9A\u04D2\x03" +
		"\x02\x02\x02\x9C\u04DB\x03\x02\x02\x02\x9E\u04DD\x03\x02\x02\x02\xA0\u04E1" +
		"\x03\x02\x02\x02\xA2\u04F6\x03\x02\x02\x02\xA4\u04FD\x03\x02\x02\x02\xA6" +
		"\u04FF\x03\x02\x02\x02\xA8\u0505\x03\x02\x02\x02\xAA\u0589\x03\x02\x02" +
		"\x02\xAC\u058B\x03\x02\x02\x02\xAE\u05A6\x03\x02\x02\x02\xB0\u05AA\x03" +
		"\x02\x02\x02\xB2\u05AC\x03\x02\x02\x02\xB4\u05B7\x03\x02\x02\x02\xB6\u05B9" +
		"\x03\x02\x02\x02\xB8\u05BF\x03\x02\x02\x02\xBA\u05C2\x03\x02\x02\x02\xBC" +
		"\u05D1\x03\x02\x02\x02\xBE\u05D3\x03\x02\x02\x02\xC0\u05D7\x03\x02\x02" +
		"\x02\xC2\u05E4\x03\x02\x02\x02\xC4\u05E6\x03\x02\x02\x02\xC6\u05F9\x03" +
		"\x02\x02\x02\xC8\u05FB\x03\x02\x02\x02\xCA\u0607\x03\x02\x02\x02\xCC\u060D" +
		"\x03\x02\x02\x02\xCE\u0612\x03\x02\x02\x02\xD0\u0617\x03\x02\x02\x02\xD2" +
		"\u0619\x03\x02\x02\x02\xD4\u061F\x03\x02\x02\x02\xD6\u0627\x03\x02\x02" +
		"\x02\xD8\u0634\x03\x02\x02\x02\xDA\u0638\x03\x02\x02\x02\xDC\u063E\x03" +
		"\x02\x02\x02\xDE\u0651\x03\x02\x02\x02\xE0\u0654\x03\x02\x02\x02\xE2\u065A" +
		"\x03\x02\x02\x02\xE4\u065D\x03\x02\x02\x02\xE6\u0669\x03\x02\x02\x02\xE8" +
		"\u066F\x03\x02\x02\x02\xEA\u067B\x03\x02\x02\x02\xEC\u067F\x03\x02\x02" +
		"\x02\xEE\u0688\x03\x02\x02\x02\xF0\u0691\x03\x02\x02\x02\xF2\u0695\x03" +
		"\x02\x02\x02\xF4\u06A4\x03\x02\x02\x02\xF6\u06AD\x03\x02\x02\x02\xF8\u06AF" +
		"\x03\x02\x02\x02\xFA\u06B7\x03\x02\x02\x02\xFC\u06BB\x03\x02\x02\x02\xFE" +
		"\u06C2\x03\x02\x02\x02\u0100\u06C7\x03\x02\x02\x02\u0102\u06D1\x03\x02" +
		"\x02\x02\u0104\u06D5\x03\x02\x02\x02\u0106\u06EA\x03\x02\x02\x02\u0108" +
		"\u06F1\x03\x02\x02\x02\u010A\u06FF\x03\x02\x02\x02\u010C\u0707\x03\x02" +
		"\x02\x02\u010E\u070B\x03\x02\x02\x02\u0110\u0713\x03\x02\x02\x02\u0112" +
		"\u071A\x03\x02\x02\x02\u0114\u071E\x03\x02\x02\x02\u0116\u0720\x03\x02" +
		"\x02\x02\u0118\u0724\x03\x02\x02\x02\u011A\u072C\x03\x02\x02\x02\u011C" +
		"\u072E\x03\x02\x02\x02\u011E\u073E\x03\x02\x02\x02\u0120\u0748\x03\x02" +
		"\x02\x02\u0122\u074B\x03\x02\x02\x02\u0124\u0752\x03\x02\x02\x02\u0126" +
		"\u0764\x03\x02\x02\x02\u0128\u076D\x03\x02\x02\x02\u012A\u077C\x03\x02" +
		"\x02\x02\u012C\u0780\x03\x02\x02\x02\u012E\u0783\x03\x02\x02\x02\u0130" +
		"\u0790\x03\x02\x02\x02\u0132\u0796\x03\x02\x02\x02\u0134\u07B1\x03\x02" +
		"\x02\x02\u0136\u07B3\x03\x02\x02\x02\u0138\u07BA\x03\x02\x02\x02\u013A" +
		"\u07C4\x03\x02\x02\x02\u013C\u07C6\x03\x02\x02\x02\u013E\u07C9\x03\x02" +
		"\x02\x02\u0140\u07D3\x03\x02\x02\x02\u0142\u07E4\x03\x02\x02\x02\u0144" +
		"\u07F0\x03\x02\x02\x02\u0146\u07F9\x03\x02\x02\x02\u0148\u0809\x03\x02" +
		"\x02\x02\u014A\u0815\x03\x02\x02\x02\u014C\u081C\x03\x02\x02\x02\u014E" +
		"\u081E\x03\x02\x02\x02\u0150\u0821\x03\x02\x02\x02\u0152\u082B\x03\x02" +
		"\x02\x02\u0154\u0872\x03\x02\x02\x02\u0156\u0888\x03\x02\x02\x02\u0158" +
		"\u088B\x03\x02\x02\x02\u015A\u089C\x03\x02\x02\x02\u015C\u08A3\x03\x02" +
		"\x02\x02\u015E\u08AE\x03\x02\x02\x02\u0160\u08B1\x03\x02\x02\x02\u0162" +
		"\u08B5\x03\x02\x02\x02\u0164\u08C3\x03\x02\x02\x02\u0166\u08C5\x03\x02" +
		"\x02\x02\u0168\u08CD\x03\x02\x02\x02\u016A\u08DF\x03\x02\x02\x02\u016C" +
		"\u08F2\x03\x02\x02\x02\u016E\u08F4\x03\x02\x02\x02\u0170\u08FC\x03\x02" +
		"\x02\x02\u0172\u0905\x03\x02\x02\x02\u0174\u0907\x03\x02\x02\x02\u0176" +
		"\u0929\x03\x02\x02\x02\u0178\u092B\x03\x02\x02\x02\u017A\u092F\x03\x02" +
		"\x02\x02\u017C\u0933\x03\x02\x02\x02\u017E\u093F\x03\x02\x02\x02\u0180" +
		"\u0941\x03\x02\x02\x02\u0182\u0947\x03\x02\x02\x02\u0184\u0949\x03\x02" +
		"\x02\x02\u0186\u0952\x03\x02\x02\x02\u0188\u095F\x03\x02\x02\x02\u018A" +
		"\u0965\x03\x02\x02\x02\u018C\u0967\x03\x02\x02\x02\u018E\u0977\x03\x02" +
		"\x02\x02\u0190\u0979\x03\x02\x02\x02\u0192\u0989\x03\x02\x02\x02\u0194" +
		"\u099A\x03\x02\x02\x02\u0196\u09A9\x03\x02\x02\x02\u0198\u09B2\x03\x02" +
		"\x02\x02\u019A\u09C2\x03\x02\x02\x02\u019C\u09CE\x03\x02\x02\x02\u019E" +
		"\u09D1\x03\x02\x02\x02\u01A0\u09E1\x03\x02\x02\x02\u01A2\u09E6\x03\x02" +
		"\x02\x02\u01A4\u09F4\x03\x02\x02\x02\u01A6\u09FA\x03\x02\x02\x02\u01A8" +
		"\u0A05\x03\x02\x02\x02\u01AA\u0A1D\x03\x02\x02\x02\u01AC\u0A29\x03\x02" +
		"\x02\x02\u01AE\u0A3F\x03\x02\x02\x02\u01B0\u0A45\x03\x02\x02\x02\u01B2" +
		"\u0A4B\x03\x02\x02\x02\u01B4\u0A53\x03\x02\x02\x02\u01B6\u01B8\x07\x03" +
		"\x02\x02\u01B7\u01B6\x03\x02\x02\x02\u01B7\u01B8\x03\x02\x02\x02\u01B8" +
		"\u01BA\x03\x02\x02\x02\u01B9\u01BB\x05\xD8m\x02\u01BA\u01B9\x03\x02\x02" +
		"\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01BD\x03\x02\x02\x02\u01BC\u01BE" +
		"\x05\xDCo\x02\u01BD\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02" +
		"\u01BE\u01C2\x03\x02\x02\x02\u01BF\u01C1\x05\u015C\xAF\x02\u01C0\u01BF" +
		"\x03\x02\x02\x02\u01C1\u01C4\x03\x02\x02\x02\u01C2\u01C0\x03\x02\x02\x02" +
		"\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C6\x03\x02\x02\x02\u01C4\u01C2\x03" +
		"\x02\x02\x02\u01C5\u01C7\x05\xE0q\x02\u01C6\u01C5\x03\x02\x02\x02\u01C6" +
		"\u01C7\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01C9\x07\x02" +
		"\x02\x03\u01C9\x03\x03\x02\x02\x02\u01CA\u01CC\x05\u01B4\xDB\x02\u01CB" +
		"\u01CD\x05\x18\r\x02\u01CC\u01CB\x03\x02\x02\x02\u01CC\u01CD\x03\x02\x02" +
		"\x02\u01CD\u01D0\x03\x02\x02\x02\u01CE\u01D0\x05\xE6t\x02\u01CF\u01CA" +
		"\x03\x02\x02\x02\u01CF\u01CE\x03\x02\x02\x02\u01D0\u01D8\x03\x02\x02\x02" +
		"\u01D1\u01D2\x07\x85\x02\x02\u01D2\u01D4\x05\u01B4\xDB\x02\u01D3\u01D5" +
		"\x05\x18\r\x02\u01D4\u01D3\x03\x02\x02\x02\u01D4\u01D5\x03\x02\x02\x02" +
		"\u01D5\u01D7\x03\x02\x02\x02\u01D6\u01D1\x03\x02\x02\x02\u01D7\u01DA\x03" +
		"\x02\x02\x02\u01D8\u01D6\x03\x02\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9" +
		"\x05\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DB\u01E1\x05\b\x05" +
		"\x02\u01DC\u01E0\x07\x96\x02\x02\u01DD\u01E0\x05\u0144\xA3\x02\u01DE\u01E0" +
		"\x07\x8B\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01DF\u01DD\x03\x02\x02\x02" +
		"\u01DF\u01DE\x03\x02\x02\x02\u01E0\u01E3\x03\x02\x02\x02\u01E1\u01DF\x03" +
		"\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2\x07\x03\x02\x02\x02\u01E3" +
		"\u01E1\x03\x02\x02\x02\u01E4\u01EA\x05\x0E\b\x02\u01E5\u01EA\x05\x16\f" +
		"\x02\u01E6\u01E7\x07n\x02\x02\u01E7\u01EA\x07\x8B\x02\x02\u01E8\u01EA" +
		"\x05\n\x06\x02\u01E9\u01E4\x03\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02" +
		"\u01E9\u01E6\x03\x02\x02\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA\t\x03\x02" +
		"\x02\x02\u01EB\u01EC\x07\x83\x02\x02\u01EC\u01EF\x05\f\x07\x02\u01ED\u01EE" +
		"\x07\x86\x02\x02\u01EE\u01F0\x05\f\x07\x02\u01EF\u01ED\x03\x02\x02\x02" +
		"\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F1\u01F2\x03" +
		"\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x07\x84\x02\x02\u01F4" +
		"\v\x03\x02\x02\x02\u01F5\u01F7\x05\x06\x04\x02\u01F6\u01F8\x05\u01B4\xDB" +
		"\x02\u01F7\u01F6\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8\r\x03" +
		"\x02\x02\x02\u01F9\u01FC\x05\x10\t\x02\u01FA\u01FC\x07\x14\x02\x02\u01FB" +
		"\u01F9\x03\x02\x02\x02\u01FB\u01FA\x03\x02\x02\x02\u01FC\x0F\x03\x02\x02" +
		"\x02\u01FD\u0201\x05\x12\n\x02\u01FE\u0201\x05\x14\v\x02\u01FF\u0201\x07" +
		"\x1F\x02\x02\u0200\u01FD\x03\x02\x02\x02\u0200\u01FE\x03\x02\x02\x02\u0200" +
		"\u01FF\x03\x02\x02\x02\u0201\x11\x03\x02\x02\x02\u0202\u0203\t\x02\x02" +
		"\x02\u0203\x13\x03\x02\x02\x02\u0204\u0205\t\x03\x02\x02\u0205\x15\x03" +
		"\x02\x02\x02\u0206\u020B\x05\x04\x03\x02\u0207\u020B\x07F\x02\x02\u0208" +
		"\u020B\x07%\x02\x02\u0209\u020B\x07]\x02\x02\u020A\u0206\x03\x02\x02\x02" +
		"\u020A\u0207\x03\x02\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u0209\x03" +
		"\x02\x02\x02\u020B\x17\x03\x02\x02\x02\u020C\u020D\x07\x94\x02\x02\u020D" +
		"\u0212\x05\x06\x04\x02\u020E\u020F\x07\x86\x02\x02\u020F\u0211\x05\x06" +
		"\x04\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02" +
		"\x02\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x07\x95\x02\x02\u0216" +
		"\x19\x03\x02\x02\x02\u0217\u021C\x05\x1C\x0F\x02\u0218\u0219\x07\x86\x02" +
		"\x02\u0219\u021B\x05\x1C\x0F\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021E" +
		"\x03\x02\x02\x02\u021C\u021A\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02" +
		"\u021D\x1B\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021F\u0220\x05" +
		"\u01B4\xDB\x02\u0220\u0221\x07\x87\x02\x02\u0221\u0223\x03\x02\x02\x02" +
		"\u0222\u021F\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x03" +
		"\x02\x02\x02\u0224\u0226\t\x04\x02\x02\u0225\u0224\x03\x02\x02\x02\u0225" +
		"\u0226\x03\x02\x02\x02\u0226\u0229\x03\x02\x02\x02\u0227\u022A\x07l\x02" +
		"\x02\u0228\u022A\x05\x06\x04\x02\u0229\u0227\x03\x02\x02\x02\u0229\u0228" +
		"\x03\x02\x02\x02\u0229\u022A\x03\x02\x02\x02\u022A\u022B\x03\x02\x02\x02" +
		"\u022B\u022C\x05\x1E\x10\x02\u022C\x1D\x03\x02\x02\x02\u022D\u0232\x05" +
		"\"\x12\x02\u022E\u0232\x05 \x11\x02\u022F\u0230\x07R\x02\x02\u0230\u0232" +
		"\x05 \x11\x02\u0231\u022D\x03\x02\x02\x02\u0231\u022E\x03\x02\x02\x02" +
		"\u0231\u022F\x03\x02\x02\x02\u0232\x1F\x03\x02\x02\x02\u0233\u0237\x05" +
		"x=\x02\u0234\u0237\x05\x84C\x02\u0235\u0237\x05&\x14\x02\u0236\u0233\x03" +
		"\x02\x02\x02\u0236\u0234\x03\x02\x02\x02\u0236\u0235\x03\x02\x02\x02\u0237" +
		"!\x03\x02\x02\x02\u0238\u0239\x05F$\x02\u0239\u023A\x05$\x13\x02\u023A" +
		"\u023B\x05\x1E\x10\x02\u023B\u0241\x03\x02\x02\x02\u023C\u023D\x05F$\x02" +
		"\u023D\u023E\x07\xAC\x02\x02\u023E\u023F\x05L\'\x02\u023F\u0241\x03\x02" +
		"\x02\x02\u0240\u0238\x03\x02\x02\x02\u0240\u023C\x03\x02\x02\x02\u0241" +
		"#\x03\x02\x02\x02\u0242\u024E\x07\x93\x02\x02\u0243\u024E\x07\xA2\x02" +
		"\x02\u0244\u024E\x07\xA3\x02\x02\u0245\u024E\x07\xA4\x02\x02\u0246\u024E" +
		"\x07\xA5\x02\x02\u0247\u024E\x07\xA6\x02\x02\u0248\u024E\x07\xA7\x02\x02" +
		"\u0249\u024E\x07\xA8\x02\x02\u024A\u024E\x07\xA9\x02\x02\u024B\u024E\x07" +
		"\xAB\x02\x02\u024C\u024E\x05\u017C\xBF\x02\u024D\u0242\x03\x02\x02\x02" +
		"\u024D\u0243\x03\x02\x02\x02\u024D\u0244\x03\x02\x02\x02\u024D\u0245\x03" +
		"\x02\x02\x02\u024D\u0246\x03\x02\x02\x02\u024D\u0247\x03\x02\x02\x02\u024D" +
		"\u0248\x03\x02\x02\x02\u024D\u0249\x03\x02\x02\x02\u024D\u024A\x03\x02" +
		"\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D\u024C\x03\x02\x02\x02\u024E" +
		"%\x03\x02\x02\x02\u024F\u0255\x05(\x15\x02\u0250\u0251\x07\x96\x02\x02" +
		"\u0251\u0252\x05L\'\x02\u0252\u0253\x07\x87\x02\x02\u0253\u0254\x05L\'" +
		"\x02\u0254\u0256\x03\x02\x02\x02\u0255\u0250\x03\x02\x02\x02\u0255\u0256" +
		"\x03\x02\x02\x02\u0256\'\x03\x02\x02\x02\u0257\u025D\x05*\x16\x02\u0258" +
		"\u025B\x07\x98\x02\x02\u0259\u025C\x05(\x15\x02\u025A\u025C\x05N(\x02" +
		"\u025B\u0259\x03\x02\x02\x02\u025B\u025A\x03\x02\x02\x02\u025C\u025E\x03" +
		"\x02\x02\x02\u025D\u0258\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E" +
		")\x03\x02\x02\x02\u025F\u0264\x05,\x17\x02\u0260\u0261\x07\x9C\x02\x02" +
		"\u0261\u0263\x05,\x17\x02\u0262\u0260\x03\x02\x02\x02\u0263\u0266\x03" +
		"\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265" +
		"+\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267\u026C\x05.\x18\x02" +
		"\u0268\u0269\x07\x9B\x02\x02\u0269\u026B\x05.\x18\x02\u026A\u0268\x03" +
		"\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026A\x03\x02\x02\x02\u026C" +
		"\u026D\x03\x02\x02\x02\u026D-\x03\x02\x02\x02\u026E\u026C\x03\x02\x02" +
		"\x02\u026F\u0274\x050\x19\x02\u0270\u0271\x07\x8F\x02\x02\u0271\u0273" +
		"\x050\x19\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02" +
		"\u0274\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275/\x03\x02" +
		"\x02\x02\u0276\u0274\x03\x02\x02\x02\u0277\u027C\x052\x1A\x02\u0278\u0279" +
		"\x07\x90\x02\x02\u0279\u027B\x052\x1A\x02\u027A\u0278\x03\x02\x02\x02" +
		"\u027B\u027E\x03\x02\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03" +
		"\x02\x02\x02\u027D1\x03\x02\x02\x02\u027E\u027C\x03\x02\x02\x02\u027F" +
		"\u0284\x054\x1B\x02\u0280\u0281\x07\x8E\x02\x02\u0281\u0283\x054\x1B\x02" +
		"\u0282\u0280\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282\x03" +
		"\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u02853\x03\x02\x02\x02\u0286" +
		"\u0284\x03\x02\x02\x02\u0287\u028C\x056\x1C\x02\u0288\u0289\t\x05\x02" +
		"\x02\u0289\u028B\x056\x1C\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E" +
		"\x03\x02\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02" +
		"\u028D5\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0298\x058\x1D" +
		"\x02\u0290\u0291\t\x06\x02\x02\u0291\u0297\x058\x1D\x02\u0292\u0293\x07" +
		"=\x02\x02\u0293\u0297\x05r:\x02\u0294\u0295\x07\x0F\x02\x02\u0295\u0297" +
		"\x05\x06\x04\x02\u0296\u0290\x03\x02\x02\x02\u0296\u0292\x03\x02\x02\x02" +
		"\u0296\u0294\x03\x02\x02\x02\u0297\u029A\x03\x02\x02\x02\u0298\u0296\x03" +
		"\x02\x02\x02\u0298\u0299\x03\x02\x02\x02\u02997\x03\x02\x02\x02\u029A" +
		"\u0298\x03\x02\x02\x02\u029B\u02A3\x05:\x1E\x02\u029C\u029F\x07\xAA\x02" +
		"\x02\u029D\u029F\x05\u017A\xBE\x02\u029E\u029C\x03\x02\x02\x02\u029E\u029D" +
		"\x03\x02\x02\x02\u029F\u02A0\x03\x02\x02\x02\u02A0\u02A2\x05:\x1E\x02" +
		"\u02A1\u029E\x03\x02\x02\x02\u02A2\u02A5\x03\x02\x02\x02\u02A3\u02A1\x03" +
		"\x02\x02\x02\u02A3\u02A4\x03\x02\x02\x02\u02A49\x03\x02\x02\x02\u02A5" +
		"\u02A3\x03\x02\x02\x02\u02A6\u02AB\x05<\x1F\x02\u02A7\u02A8\t\x07\x02" +
		"\x02\u02A8\u02AA\x05<\x1F\x02\u02A9\u02A7\x03\x02\x02\x02\u02AA\u02AD" +
		"\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AC\x03\x02\x02\x02" +
		"\u02AC;\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AE\u02B3\x05> " +
		"\x02\u02AF\u02B0\t\b\x02\x02\u02B0\u02B2\x05> \x02\u02B1\u02AF\x03\x02" +
		"\x02\x02\u02B2\u02B5\x03\x02\x02\x02\u02B3\u02B1\x03\x02\x02\x02\u02B3" +
		"\u02B4\x03\x02\x02\x02\u02B4=\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02" +
		"\x02\u02B6\u02C0\x05D#\x02\u02B7\u02B8\x07_\x02\x02\u02B8\u02BD\x07\x7F" +
		"\x02\x02\u02B9\u02BB\x05@!\x02\u02BA\u02BC\x07\x86\x02\x02\u02BB\u02BA" +
		"\x03\x02\x02\x02\u02BB\u02BC\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02" +
		"\u02BD\u02B9\x03\x02\x02\x02\u02BD\u02BE\x03\x02\x02\x02\u02BE\u02BF\x03" +
		"\x02\x02\x02\u02BF\u02C1\x07\x80\x02\x02\u02C0\u02B7\x03\x02\x02\x02\u02C0" +
		"\u02C1\x03\x02\x02\x02\u02C1?\x03\x02\x02\x02\u02C2\u02C7\x05B\"\x02\u02C3" +
		"\u02C4\x07\x86\x02\x02\u02C4\u02C6\x05B\"\x02\u02C5\u02C3\x03\x02\x02" +
		"\x02\u02C6\u02C9\x03\x02\x02\x02\u02C7\u02C5\x03\x02\x02\x02\u02C7\u02C8" +
		"\x03\x02\x02\x02\u02C8A\x03\x02\x02\x02\u02C9\u02C7\x03\x02\x02\x02\u02CA" +
		"\u02CC\x05\x1E\x10\x02\u02CB\u02CD\x05\xBE`\x02\u02CC\u02CB\x03\x02\x02" +
		"\x02\u02CC\u02CD\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02CF" +
		"\x05\u0178\xBD\x02\u02CF\u02D0\x05L\'\x02\u02D0C\x03\x02\x02\x02\u02D1" +
		"\u02DA\x05F$\x02\u02D2\u02D4\x05F$\x02\u02D3\u02D2\x03\x02\x02\x02\u02D3" +
		"\u02D4\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7\x07\xAD" +
		"\x02\x02\u02D6\u02D8\x05F$\x02\u02D7\u02D6\x03\x02\x02\x02\u02D7\u02D8" +
		"\x03\x02\x02\x02\u02D8\u02DA\x03\x02\x02\x02\u02D9\u02D1\x03\x02\x02\x02" +
		"\u02D9\u02D3\x03\x02\x02\x02\u02DAE\x03\x02\x02\x02\u02DB\u02F6\x05H%" +
		"\x02\u02DC\u02DD\x07\x89\x02\x02\u02DD\u02F6\x05F$\x02\u02DE\u02DF\x07" +
		"\x8A\x02\x02\u02DF\u02F6\x05F$\x02\u02E0\u02E1\x07\x91\x02\x02\u02E1\u02F6" +
		"\x05F$\x02\u02E2\u02E3\x07\x92\x02\x02\u02E3\u02F6\x05F$\x02\u02E4\u02E5" +
		"\x07\x99\x02\x02\u02E5\u02F6\x05F$\x02\u02E6\u02E7\x07\x9A\x02\x02\u02E7" +
		"\u02F6\x05F$\x02\u02E8\u02E9\x07\x83\x02\x02\u02E9\u02EA\x05\x06\x04\x02" +
		"\u02EA\u02EB\x07\x84\x02\x02\u02EB\u02EC\x05F$\x02\u02EC\u02F6\x03\x02" +
		"\x02\x02\u02ED\u02EE\x07\x12\x02\x02\u02EE\u02F6\x05F$\x02\u02EF\u02F0" +
		"\x07\x8E\x02\x02\u02F0\u02F6\x05F";
	private static readonly _serializedATNSegment2: string =
		"$\x02\u02F1\u02F2\x07\x8B\x02\x02\u02F2\u02F6\x05F$\x02\u02F3\u02F4\x07" +
		"\x90\x02\x02\u02F4\u02F6\x05F$\x02\u02F5\u02DB\x03\x02\x02\x02\u02F5\u02DC" +
		"\x03\x02\x02\x02\u02F5\u02DE\x03\x02\x02\x02\u02F5\u02E0\x03\x02\x02\x02" +
		"\u02F5\u02E2\x03\x02\x02\x02\u02F5\u02E4\x03\x02\x02\x02\u02F5\u02E6\x03" +
		"\x02\x02\x02\u02F5\u02E8\x03\x02\x02\x02\u02F5\u02ED\x03\x02\x02\x02\u02F5" +
		"\u02EF\x03\x02\x02\x02\u02F5\u02F1\x03\x02\x02\x02\u02F5\u02F3\x03\x02" +
		"\x02\x02\u02F6G\x03\x02\x02\x02\u02F7\u02F9\x05J&\x02\u02F8\u02FA\x07" +
		"\x91\x02\x02\u02F9\u02F8\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA" +
		"\u02FE\x03\x02\x02\x02\u02FB\u02FD\x05R*\x02\u02FC\u02FB\x03\x02\x02\x02" +
		"\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE\u02FF\x03" +
		"\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02\u0301" +
		"\u0303\x07\x91\x02\x02\u0302\u0301\x03\x02\x02\x02\u0302\u0303\x03\x02" +
		"\x02\x02\u0303\u031A\x03\x02\x02\x02\u0304\u030B\x05P)\x02\u0305\u030B" +
		"\x05\u01B0\xD9\x02\u0306\u030B\x07\x99\x02\x02\u0307\u030B\x07\x9A\x02" +
		"\x02\u0308\u0309\x07\x9D\x02\x02\u0309\u030B\x05\u01B4\xDB\x02\u030A\u0304" +
		"\x03\x02\x02\x02\u030A\u0305\x03\x02\x02\x02\u030A\u0306\x03\x02\x02\x02" +
		"\u030A\u0307\x03\x02\x02\x02\u030A\u0308\x03\x02\x02\x02\u030B\u030D\x03" +
		"\x02\x02\x02\u030C\u030E\x07\x91\x02\x02\u030D\u030C\x03\x02\x02\x02\u030D" +
		"\u030E\x03\x02\x02\x02\u030E\u0312\x03\x02\x02\x02\u030F\u0311\x05R*\x02" +
		"\u0310\u030F\x03\x02\x02\x02\u0311\u0314\x03\x02\x02\x02\u0312\u0310\x03" +
		"\x02\x02\x02\u0312\u0313\x03\x02\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314" +
		"\u0312\x03\x02\x02\x02\u0315\u0317\x07\x91\x02\x02\u0316\u0315\x03\x02" +
		"\x02\x02\u0316\u0317\x03\x02\x02\x02\u0317\u0319\x03\x02\x02\x02\u0318" +
		"\u030A\x03\x02\x02\x02\u0319\u031C\x03\x02\x02\x02\u031A\u0318\x03\x02" +
		"\x02\x02\u031A\u031B\x03\x02\x02\x02\u031BI\x03\x02\x02\x02\u031C\u031A" +
		"\x03\x02\x02\x02\u031D\u0397\x05\u017E\xC0\x02\u031E\u0320\x05\u01B4\xDB" +
		"\x02\u031F\u0321\x05\x18\r\x02\u0320\u031F\x03\x02\x02\x02\u0320\u0321" +
		"\x03\x02\x02\x02\u0321\u0397\x03\x02\x02\x02\u0322\u0323\x07\x83\x02\x02" +
		"\u0323\u0324\x05\x1E\x10\x02\u0324\u0325\x07\x84\x02\x02\u0325\u0397\x03" +
		"\x02\x02\x02\u0326\u0397\x05V,\x02\u0327\u0397\x05\xE6t\x02\u0328\u0397" +
		"\x07u\x02\x02\u0329\u0397\x07`\x02\x02\u032A\u0334\x07\x13\x02\x02\u032B" +
		"\u032C\x07\x85\x02\x02\u032C\u032E\x05\u01B4\xDB\x02\u032D\u032F\x05\x18" +
		"\r\x02\u032E\u032D\x03\x02\x02\x02\u032E\u032F\x03\x02\x02\x02\u032F\u0335" +
		"\x03\x02\x02\x02\u0330\u0331\x07\x81\x02\x02\u0331\u0332\x05X-\x02\u0332" +
		"\u0333\x07\x82\x02\x02\u0333\u0335\x03\x02\x02\x02\u0334\u032B\x03\x02" +
		"\x02\x02\u0334\u0330\x03\x02\x02\x02\u0335\u0397\x03\x02\x02\x02\u0336" +
		"\u0353\x07D\x02\x02\u0337\u034D\x05\x06\x04\x02\u0338\u034E\x05\u01B2" +
		"\xDA\x02\u0339\u034E\x05Z.\x02\u033A\u033B\x07\x81\x02\x02\u033B\u033C" +
		"\x05X-\x02\u033C\u0340\x07\x82\x02\x02\u033D\u033F\x05\u0144\xA3\x02\u033E" +
		"\u033D\x03\x02\x02\x02\u033F\u0342\x03\x02\x02\x02\u0340\u033E\x03\x02" +
		"\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0344\x03\x02\x02\x02\u0342" +
		"\u0340\x03\x02\x02\x02\u0343\u0345\x05\u0146\xA4\x02\u0344\u0343\x03\x02" +
		"\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345\u034E\x03\x02\x02\x02\u0346" +
		"\u0348\x05\u0144\xA3\x02\u0347\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02" +
		"\x02\x02\u0349\u0347\x03\x02\x02\x02\u0349\u034A\x03\x02\x02\x02\u034A" +
		"\u034B\x03\x02\x02\x02\u034B\u034C\x05\u0146\xA4\x02\u034C\u034E\x03\x02" +
		"\x02\x02\u034D\u0338\x03\x02\x02\x02\u034D\u0339\x03\x02\x02\x02\u034D" +
		"\u033A\x03\x02\x02\x02\u034D\u0347\x03\x02\x02\x02\u034E\u0354\x03\x02" +
		"\x02\x02\u034F\u0354\x05h5\x02\u0350\u0351\x05\u0144\xA3\x02\u0351\u0352" +
		"\x05\u0146\xA4\x02\u0352\u0354\x03\x02\x02\x02\u0353\u0337\x03\x02\x02" +
		"\x02\u0353\u034F\x03\x02\x02\x02\u0353\u0350\x03\x02\x02\x02\u0354\u0397" +
		"\x03\x02\x02\x02\u0355\u0356\x07\x83\x02\x02\u0356\u0359\x05\x1C\x0F\x02" +
		"\u0357\u0358\x07\x86\x02\x02\u0358\u035A\x05\x1C\x0F\x02\u0359\u0357\x03" +
		"\x02\x02\x02\u035A\u035B\x03\x02\x02\x02\u035B\u0359\x03\x02\x02\x02\u035B" +
		"\u035C\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x07\x84" +
		"\x02\x02\u035E\u0397\x03\x02\x02\x02\u035F\u0360\x07d\x02\x02\u0360\u0364" +
		"\x07\x83\x02\x02\u0361\u0365\x05n8\x02\u0362\u0365\x05\x06\x04\x02\u0363" +
		"\u0365\x07n\x02\x02\u0364\u0361\x03\x02\x02\x02\u0364\u0362\x03\x02\x02" +
		"\x02\u0364\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0397" +
		"\x07\x84\x02\x02\u0367\u0368\x07\x1B\x02\x02\u0368\u0369\x07\x83\x02\x02" +
		"\u0369\u036A\x05\x1E\x10\x02\u036A\u036B\x07\x84\x02\x02\u036B\u0397\x03" +
		"\x02\x02\x02\u036C\u036D\x07g\x02\x02\u036D\u036E\x07\x83\x02\x02\u036E" +
		"\u036F\x05\x1E\x10\x02\u036F\u0370\x07\x84\x02\x02\u0370\u0397\x03\x02" +
		"\x02\x02\u0371\u0376\x07 \x02\x02\u0372\u0373\x07\x83\x02\x02\u0373\u0374" +
		"\x05\x06\x04\x02\u0374\u0375\x07\x84\x02\x02\u0375\u0377\x03\x02\x02\x02" +
		"\u0376\u0372\x03\x02\x02\x02\u0376\u0377\x03\x02\x02\x02\u0377\u0397\x03" +
		"\x02\x02\x02\u0378\u037A\x07\x11\x02\x02\u0379\u0378\x03\x02\x02\x02\u0379" +
		"\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02\x02\x02\u037B\u0381\x07!\x02" +
		"\x02\u037C\u037E\x07\x83\x02\x02\u037D\u037F\x05|?\x02\u037E\u037D\x03" +
		"\x02\x02\x02\u037E\u037F\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380" +
		"\u0382\x07\x84\x02\x02\u0381\u037C\x03\x02\x02\x02\u0381\u0382\x03\x02" +
		"\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0397\x05\xACW\x02\u0384\u0385" +
		"\x07Z\x02\x02\u0385\u0386\x07\x83\x02\x02\u0386\u0387\x05\x06\x04\x02" +
		"\u0387\u0388\x07\x84\x02\x02\u0388\u0397\x03\x02\x02\x02\u0389\u038A\x07" +
		"B\x02\x02\u038A\u0390\x07\x83\x02\x02\u038B\u038C\x05\u01B4\xDB\x02\u038C" +
		"\u038D\x07\x85\x02\x02\u038D\u038F\x03\x02\x02\x02\u038E\u038B\x03\x02" +
		"\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02\x02\x02\u0390" +
		"\u0391\x03\x02\x02\x02\u0391\u0393\x03\x02\x02\x02\u0392\u0390\x03\x02" +
		"\x02\x02\u0393\u0394\x05\u01B4\xDB\x02\u0394\u0395\x07\x84\x02\x02\u0395" +
		"\u0397\x03\x02\x02\x02\u0396\u031D\x03\x02\x02\x02\u0396\u031E\x03\x02" +
		"\x02\x02\u0396\u0322\x03\x02\x02\x02\u0396\u0326\x03\x02\x02\x02\u0396" +
		"\u0327\x03\x02\x02\x02\u0396\u0328\x03\x02\x02\x02\u0396\u0329\x03\x02" +
		"\x02\x02\u0396\u032A\x03\x02\x02\x02\u0396\u0336\x03\x02\x02\x02\u0396" +
		"\u0355\x03\x02\x02\x02\u0396\u035F\x03\x02\x02\x02\u0396\u0367\x03\x02" +
		"\x02\x02\u0396\u036C\x03\x02\x02\x02\u0396\u0371\x03\x02\x02\x02\u0396" +
		"\u0379\x03\x02\x02\x02\u0396\u0384\x03\x02\x02\x02\u0396\u0389\x03\x02" +
		"\x02\x02\u0397K\x03\x02\x02\x02\u0398\u039B\x05\x1E\x10\x02\u0399\u039B" +
		"\x05N(\x02\u039A\u0398\x03\x02\x02\x02\u039A\u0399\x03\x02\x02\x02\u039B" +
		"M\x03\x02\x02\x02\u039C\u039D\x07a\x02\x02\u039D\u039E\x05\x1E\x10\x02" +
		"\u039EO\x03\x02\x02\x02\u039F\u03A1\x07\x96\x02\x02\u03A0\u039F\x03\x02" +
		"\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1\u03A2\x03\x02\x02\x02\u03A2" +
		"\u03A3\x07\x85\x02\x02\u03A3\u03A5\x05\u01B4\xDB\x02\u03A4\u03A6\x05\x18" +
		"\r\x02\u03A5\u03A4\x03\x02\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6Q" +
		"\x03\x02\x02\x02\u03A7\u03A9\x07\x96\x02\x02\u03A8\u03A7\x03\x02\x02\x02" +
		"\u03A8\u03A9\x03\x02\x02\x02\u03A9\u03AA\x03\x02\x02\x02\u03AA\u03AB\x07" +
		"\x81\x02\x02\u03AB\u03B0\x05T+\x02\u03AC\u03AD\x07\x86\x02\x02\u03AD\u03AF" +
		"\x05T+\x02\u03AE\u03AC\x03\x02\x02\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0" +
		"\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B3\x03\x02" +
		"\x02\x02\u03B2\u03B0\x03\x02\x02\x02\u03B3\u03B4\x07\x82\x02\x02\u03B4" +
		"S\x03\x02\x02\x02\u03B5\u03B6\x05\u01B4\xDB\x02\u03B6\u03B7\x07\x87\x02" +
		"\x02\u03B7\u03B9\x03\x02\x02\x02\u03B8\u03B5\x03\x02\x02\x02\u03B8\u03B9" +
		"\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03BB\x05\x1E\x10\x02" +
		"\u03BBU\x03\x02\x02\x02\u03BC\u03BD\t\t\x02\x02\u03BDW\x03\x02\x02\x02" +
		"\u03BE\u03C3\x05\x1E\x10\x02\u03BF\u03C0\x07\x86\x02\x02\u03C0\u03C2\x05" +
		"\x1E\x10\x02\u03C1\u03BF\x03\x02\x02\x02\u03C2\u03C5\x03\x02\x02\x02\u03C3" +
		"\u03C1\x03\x02\x02\x02\u03C3\u03C4\x03\x02\x02\x02\u03C4Y\x03\x02\x02" +
		"\x02\u03C5\u03C3\x03\x02\x02\x02\u03C6\u03C9\x05\\/\x02\u03C7\u03C9\x05" +
		"d3\x02\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9[" +
		"\x03\x02\x02\x02\u03CA\u03CF\x07\x7F\x02\x02\u03CB\u03CD\x05^0\x02\u03CC" +
		"\u03CE\x07\x86\x02\x02\u03CD\u03CC\x03\x02\x02\x02\u03CD\u03CE\x03\x02" +
		"\x02\x02\u03CE\u03D0\x03\x02\x02\x02\u03CF\u03CB\x03\x02\x02\x02\u03CF" +
		"\u03D0\x03\x02\x02\x02\u03D0\u03D1\x03\x02\x02\x02\u03D1\u03D2\x07\x80" +
		"\x02\x02\u03D2]\x03\x02\x02\x02\u03D3\u03D8\x05`1\x02\u03D4\u03D5\x07" +
		"\x86\x02\x02\u03D5\u03D7\x05`1\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DA" +
		"\x03\x02\x02\x02\u03D8\u03D6\x03\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02" +
		"\u03D9_\x03\x02\x02\x02\u03DA\u03D8\x03\x02\x02\x02\u03DB\u03E1\x05\u01B4" +
		"\xDB\x02\u03DC\u03DD\x07\x81\x02\x02\u03DD\u03DE\x05\x1E\x10\x02\u03DE" +
		"\u03DF\x07\x82\x02\x02\u03DF\u03E1\x03\x02\x02\x02\u03E0\u03DB\x03\x02" +
		"\x02\x02\u03E0\u03DC\x03\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2" +
		"\u03E3\x07\x93\x02\x02\u03E3\u03E4\x05b2\x02\u03E4a\x03\x02\x02\x02\u03E5" +
		"\u03E8\x05\x1E\x10\x02\u03E6\u03E8\x05Z.\x02\u03E7\u03E5\x03\x02\x02\x02" +
		"\u03E7\u03E6\x03\x02\x02\x02\u03E8c\x03\x02\x02\x02\u03E9\u03EA\x07\x7F" +
		"\x02\x02\u03EA\u03EF\x05f4\x02\u03EB\u03EC\x07\x86\x02\x02\u03EC\u03EE" +
		"\x05f4\x02\u03ED\u03EB\x03\x02\x02\x02\u03EE\u03F1\x03\x02\x02\x02\u03EF" +
		"\u03ED\x03\x02\x02\x02\u03EF\u03F0\x03\x02\x02\x02\u03F0\u03F3\x03\x02" +
		"\x02\x02\u03F1\u03EF\x03\x02\x02\x02\u03F2\u03F4\x07\x86\x02\x02\u03F3" +
		"\u03F2\x03\x02\x02\x02\u03F3\u03F4\x03\x02\x02\x02\u03F4\u03F5\x03\x02" +
		"\x02\x02\u03F5\u03F6\x07\x80\x02\x02\u03F6e\x03\x02\x02\x02\u03F7\u03FD" +
		"\x05 \x11\x02\u03F8\u03F9\x07\x7F\x02\x02\u03F9\u03FA\x05X-\x02\u03FA" +
		"\u03FB\x07\x80\x02\x02\u03FB\u03FD\x03\x02\x02\x02\u03FC\u03F7\x03\x02" +
		"\x02\x02\u03FC\u03F8\x03\x02\x02\x02\u03FDg\x03\x02\x02\x02\u03FE\u0403" +
		"\x07\x7F\x02\x02\u03FF\u0401\x05j6\x02\u0400\u0402\x07\x86\x02\x02\u0401" +
		"\u0400\x03\x02\x02\x02\u0401\u0402\x03\x02\x02\x02\u0402\u0404\x03\x02" +
		"\x02\x02\u0403\u03FF\x03\x02\x02\x02\u0403\u0404\x03\x02\x02\x02\u0404" +
		"\u0405\x03\x02\x02\x02\u0405\u0406\x07\x80\x02\x02\u0406i\x03\x02\x02" +
		"\x02\u0407\u040C\x05l7\x02\u0408\u0409\x07\x86\x02\x02\u0409\u040B\x05" +
		"l7\x02\u040A\u0408\x03\x02\x02\x02\u040B\u040E\x03\x02\x02\x02\u040C\u040A" +
		"\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040Dk\x03\x02\x02\x02\u040E" +
		"\u040C\x03\x02\x02\x02\u040F\u0415\x05H%\x02\u0410\u0411\x05\u01B4\xDB" +
		"\x02\u0411\u0412\x07\x93\x02\x02\u0412\u0413\x05\x1E\x10\x02\u0413\u0415" +
		"\x03\x02\x02\x02\u0414\u040F\x03\x02\x02\x02\u0414\u0410\x03\x02\x02\x02" +
		"\u0415m\x03\x02\x02\x02\u0416\u041F\x05\u01B4\xDB\x02\u0417\u0419\x05" +
		"p9\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02\x02\x02\u0419\u0420" +
		"\x03\x02\x02\x02\u041A\u041B\x07\x97\x02\x02\u041B\u041D\x05\u01B4\xDB" +
		"\x02\u041C\u041E\x05p9\x02\u041D\u041C\x03\x02\x02\x02\u041D\u041E\x03" +
		"\x02\x02\x02\u041E\u0420\x03\x02\x02\x02\u041F\u0418\x03\x02\x02\x02\u041F" +
		"\u041A\x03\x02\x02\x02\u0420\u0428\x03\x02\x02\x02\u0421\u0422\x07\x85" +
		"\x02\x02\u0422\u0424\x05\u01B4\xDB\x02\u0423\u0425\x05p9\x02\u0424\u0423" +
		"\x03\x02\x02\x02\u0424\u0425\x03\x02\x02\x02\u0425\u0427\x03\x02\x02\x02" +
		"\u0426\u0421\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u0426\x03" +
		"\x02\x02\x02\u0428\u0429\x03\x02\x02\x02\u0429o\x03\x02\x02\x02\u042A" +
		"\u0428\x03\x02\x02\x02\u042B\u042F\x07\x94\x02\x02\u042C\u042E\x07\x86" +
		"\x02\x02\u042D\u042C\x03\x02\x02\x02\u042E\u0431\x03\x02\x02\x02\u042F" +
		"\u042D\x03\x02\x02\x02\u042F\u0430\x03\x02\x02\x02\u0430\u0432\x03\x02" +
		"\x02\x02\u0431\u042F\x03\x02\x02\x02\u0432\u0433\x07\x95\x02\x02\u0433" +
		"q\x03\x02\x02\x02\u0434\u0439\x05\b\x05\x02\u0435\u0438\x05\u0144\xA3" +
		"\x02\u0436\u0438\x07\x8B\x02\x02\u0437\u0435\x03\x02\x02\x02\u0437\u0436" +
		"\x03\x02\x02\x02\u0438\u043B\x03\x02\x02\x02\u0439\u0437\x03\x02\x02\x02" +
		"\u0439\u043A\x03\x02\x02\x02\u043A\u043D\x03\x02\x02\x02\u043B\u0439\x03" +
		"\x02\x02\x02\u043C\u043E\x07\x96\x02\x02\u043D\u043C\x03\x02\x02\x02\u043D" +
		"\u043E\x03\x02\x02\x02\u043E\u0440\x03\x02\x02\x02\u043F\u0441\x05t;\x02" +
		"\u0440\u043F\x03\x02\x02\x02\u0440\u0441\x03\x02\x02\x02\u0441\u0443\x03" +
		"\x02\x02\x02\u0442\u0444\x05\u01B4\xDB\x02\u0443\u0442\x03\x02\x02\x02" +
		"\u0443\u0444\x03\x02\x02\x02\u0444s\x03\x02\x02\x02\u0445\u0446\x07\x7F" +
		"\x02\x02\u0446\u044B\x05v<\x02\u0447\u0448\x07\x86\x02\x02\u0448\u044A" +
		"\x05v<\x02\u0449\u0447\x03\x02\x02\x02\u044A\u044D\x03\x02\x02\x02\u044B" +
		"\u0449\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044E\x03\x02" +
		"\x02\x02\u044D\u044B\x03\x02\x02\x02\u044E\u044F\x07\x80\x02\x02\u044F" +
		"u\x03\x02\x02\x02\u0450\u0451\x05\u01B4\xDB\x02\u0451\u0452\x07\x87\x02" +
		"\x02\u0452\u0453\x05\x1E\x10\x02\u0453w\x03\x02\x02\x02\u0454\u0456\x07" +
		"\x11\x02\x02\u0455\u0454\x03\x02\x02\x02\u0455\u0456\x03\x02\x02\x02\u0456" +
		"\u0457\x03\x02\x02\x02\u0457\u0458\x05z>\x02\u0458\u0459\x05\u0178\xBD" +
		"\x02\u0459\u045A\x05\x82B\x02\u045Ay\x03\x02\x02\x02\u045B\u045C\x07\x83" +
		"\x02\x02\u045C\u0467\x07\x84\x02\x02\u045D\u045E\x07\x83\x02\x02\u045E" +
		"\u045F\x05|?\x02\u045F\u0460\x07\x84\x02\x02\u0460\u0467\x03\x02\x02\x02" +
		"\u0461\u0462\x07\x83\x02\x02\u0462\u0463\x05\x80A\x02\u0463\u0464\x07" +
		"\x84\x02\x02\u0464\u0467\x03\x02\x02\x02\u0465\u0467\x05\u01B4\xDB\x02" +
		"\u0466\u045B\x03\x02\x02\x02\u0466\u045D\x03\x02\x02\x02\u0466\u0461\x03" +
		"\x02\x02\x02\u0466\u0465\x03\x02\x02\x02\u0467{\x03\x02\x02\x02\u0468" +
		"\u046D\x05~@\x02\u0469\u046A\x07\x86\x02\x02\u046A\u046C\x05~@\x02\u046B" +
		"\u0469\x03\x02\x02\x02\u046C\u046F\x03\x02\x02\x02\u046D\u046B\x03\x02" +
		"\x02\x02\u046D\u046E\x03\x02\x02\x02\u046E}\x03\x02\x02\x02\u046F\u046D" +
		"\x03\x02\x02\x02\u0470\u0472\t\x04\x02\x02\u0471\u0470\x03\x02\x02\x02" +
		"\u0471\u0472\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0474\x05" +
		"\x06\x04\x02\u0474\u0475\x05\u01B4\xDB\x02\u0475\x7F\x03\x02\x02\x02\u0476" +
		"\u047B\x05\u01B4\xDB\x02\u0477\u0478\x07\x86\x02\x02\u0478\u047A\x05\u01B4" +
		"\xDB\x02\u0479\u0477\x03\x02\x02\x02\u047A\u047D\x03\x02\x02\x02\u047B" +
		"\u0479\x03\x02\x02\x02\u047B\u047C\x03\x02\x02\x02\u047C\x81\x03\x02\x02" +
		"\x02\u047D\u047B\x03\x02\x02\x02\u047E\u0481\x05L\'\x02\u047F\u0481\x05" +
		"\xACW\x02\u0480\u047E\x03\x02\x02\x02\u0480\u047F\x03\x02\x02\x02\u0481" +
		"\x83\x03\x02\x02\x02\u0482\u0483\x05\x86D\x02\u0483\u0484\x05\x88E\x02" +
		"\u0484\x85\x03\x02\x02\x02\u0485\u0487\x072\x02\x02\u0486\u0488\x05\x06" +
		"\x04\x02\u0487\u0486\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488" +
		"\u0489\x03\x02\x02\x02\u0489\u048A\x05\u01B4\xDB\x02\u048A\u048B\x078" +
		"\x02\x02\u048B\u048C\x05\x1E\x10\x02\u048C\x87\x03\x02\x02\x02\u048D\u048F" +
		"\x05\x8AF\x02\u048E\u048D\x03\x02\x02\x02\u048F\u0492\x03\x02\x02\x02" +
		"\u0490\u048E\x03\x02\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0493\x03" +
		"\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0493\u0495\x05\x96L\x02\u0494" +
		"\u0496\x05\x98M\x02\u0495\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02" +
		"\x02\u0496\x89\x03\x02\x02\x02\u0497\u049D\x05\x86D\x02\u0498\u049D\x05" +
		"\x8CG\x02\u0499\u049D\x05\x8EH\x02\u049A\u049D\x05\x90I\x02\u049B\u049D" +
		"\x05\x92J\x02\u049C\u0497\x03\x02\x02\x02\u049C\u0498\x03\x02\x02\x02" +
		"\u049C\u0499\x03\x02\x02\x02\u049C\u049A\x03\x02\x02\x02\u049C\u049B\x03" +
		"\x02\x02\x02\u049D\x8B\x03\x02\x02\x02\u049E\u049F\x07?\x02\x02\u049F" +
		"\u04A0\x05\u01B4\xDB\x02\u04A0\u04A1\x07\x93\x02\x02\u04A1\u04A2\x05\x1E" +
		"\x10\x02\u04A2\x8D\x03\x02\x02\x02\u04A3\u04A4\x07q\x02\x02\u04A4\u04A5" +
		"\x05\x1E\x10\x02\u04A5\x8F\x03\x02\x02\x02\u04A6\u04A8\x07>\x02\x02\u04A7" +
		"\u04A9\x05\x06\x04\x02\u04A8\u04A7\x03\x02\x02\x02\u04A8\u04A9\x03\x02" +
		"\x02\x02\u04A9\u04AA\x03\x02\x02\x02\u04AA\u04AB\x05\u01B4\xDB\x02\u04AB" +
		"\u04AC\x078\x02\x02\u04AC\u04AD\x05\x1E\x10\x02\u04AD\u04AE\x07G\x02\x02" +
		"\u04AE\u04AF\x05\x1E\x10\x02\u04AF\u04B0\x07(\x02\x02\u04B0\u04B3\x05" +
		"\x1E\x10\x02\u04B1\u04B2\x07<\x02\x02\u04B2\u04B4\x05\u01B4\xDB\x02\u04B3" +
		"\u04B1\x03\x02\x02\x02\u04B3\u04B4\x03\x02\x02\x02\u04B4\x91\x03\x02\x02" +
		"\x02\u04B5\u04B6\x07I\x02\x02\u04B6\u04BB\x05\x94K\x02\u04B7\u04B8\x07" +
		"\x86\x02\x02\u04B8\u04BA\x05\x94K\x02\u04B9\u04B7\x03\x02\x02\x02\u04BA" +
		"\u04BD\x03\x02\x02\x02\u04BB\u04B9\x03\x02\x02\x02\u04BB\u04BC\x03\x02" +
		"\x02\x02\u04BC\x93\x03\x02\x02\x02\u04BD\u04BB\x03\x02\x02\x02\u04BE\u04C0" +
		"\x05\x1E\x10\x02\u04BF\u04C1\t\n\x02\x02\u04C0\u04BF\x03\x02\x02\x02\u04C0" +
		"\u04C1\x03\x02\x02\x02\u04C1\x95\x03\x02\x02\x02\u04C2\u04C3\x07W\x02" +
		"\x02\u04C3\u04CA\x05\x1E\x10\x02\u04C4\u04C5\x075\x02\x02\u04C5\u04C6" +
		"\x05\x1E\x10\x02\u04C6\u04C7\x07\x16\x02\x02\u04C7\u04C8\x05\x1E\x10\x02" +
		"\u04C8\u04CA\x03\x02\x02\x02\u04C9\u04C2\x03\x02\x02\x02\u04C9\u04C4\x03" +
		"\x02\x02\x02\u04CA\x97\x03\x02\x02\x02\u04CB\u04CC\x07<\x02\x02\u04CC" +
		"\u04CD\x05\u01B4\xDB\x02\u04CD\u04CE\x05\x88E\x02\u04CE\x99\x03\x02\x02" +
		"\x02\u04CF\u04D3\x05\xA6T\x02\u04D0\u04D3\x05\x9CO\x02\u04D1\u04D3\x05" +
		"\xA8U\x02\u04D2\u04CF\x03\x02\x02\x02\u04D2\u04D0\x03\x02\x02\x02\u04D2" +
		"\u04D1\x03\x02\x02\x02\u04D3\x9B\x03\x02\x02\x02\u04D4\u04D5\x05\xAEX" +
		"\x02\u04D5\u04D6\x07\x88\x02\x02\u04D6\u04DC\x03\x02\x02\x02\u04D7\u04D8" +
		"\x05\xB6\\\x02\u04D8\u04D9\x07\x88\x02\x02\u04D9\u04DC\x03\x02\x02\x02" +
		"\u04DA\u04DC\x05\x9EP\x02\u04DB\u04D4\x03\x02\x02\x02\u04DB\u04D7\x03" +
		"\x02\x02\x02\u04DB\u04DA\x03\x02\x02\x02\u04DC\x9D\x03\x02\x02\x02\u04DD" +
		"\u04DE\x05\xA0Q\x02\u04DE\u04DF\x05\xA4S\x02\u04DF\x9F\x03\x02\x02\x02" +
		"\u04E0\u04E2\x05\xA2R\x02\u04E1\u04E0\x03\x02\x02\x02\u04E1\u04E2\x03" +
		"\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u04E4\x05\u0114\x8B\x02" +
		"\u04E4\u04E6\x05\u01B4\xDB\x02\u04E5\u04E7\x05\xE8u\x02\u04E6\u04E5\x03" +
		"\x02\x02\x02\u04E6\u04E7\x03\x02\x02\x02\u04E7\u04E8\x03\x02\x02\x02\u04E8" +
		"\u04EA\x07\x83\x02\x02\u04E9\u04EB\x05\u011A\x8E\x02\u04EA\u04E9\x03\x02" +
		"\x02\x02\u04EA\u04EB\x03\x02\x02\x02\u04EB\u04EC\x03\x02\x02\x02\u04EC" +
		"\u04EE\x07\x84\x02\x02\u04ED\u04EF\x05\xF0y\x02\u04EE\u04ED\x03\x02\x02" +
		"\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\xA1\x03\x02\x02\x02\u04F0\u04F2" +
		"\t\v\x02\x02\u04F1\u04F3\x07\\\x02\x02\u04F2\u04F1\x03\x02\x02\x02\u04F2" +
		"\u04F3\x03\x02\x02\x02\u04F3\u04F7\x03\x02\x02\x02\u04F4\u04F5\x07\\\x02" +
		"\x02\u04F5\u04F7\t\v\x02\x02\u04F6\u04F0\x03\x02\x02\x02\u04F6\u04F4\x03" +
		"\x02\x02\x02\u04F7\xA3\x03\x02\x02\x02\u04F8\u04FE\x05\xACW\x02\u04F9" +
		"\u04FA\x05\u0178\xBD\x02\u04FA\u04FB\x05L\'\x02\u04FB\u04FC\x07\x88\x02" +
		"\x02\u04FC\u04FE\x03\x02\x02\x02\u04FD\u04F8\x03\x02\x02\x02\u04FD\u04F9" +
		"\x03\x02\x02\x02\u04FE\xA5\x03\x02\x02\x02\u04FF\u0500\x05\u01B4\xDB\x02" +
		"\u0500\u0501\x07\x87\x02\x02\u0501\u0502\x05\x9AN\x02\u0502\xA7\x03\x02" +
		"\x02\x02\u0503\u0506\x05\xACW\x02\u0504\u0506\x05\xAAV\x02\u0505\u0503" +
		"\x03\x02\x02\x02\u0505\u0504\x03\x02\x02\x02\u0506\xA9\x03\x02\x02\x02" +
		"\u0507\u058A\x07\x88\x02\x02\u0508\u0509\x05\x1E\x10\x02\u0509\u050A\x07" +
		"\x88\x02\x02\u050A\u058A\x03\x02\x02\x02\u050B\u050C\x076\x02\x02\u050C" +
		"\u050D\x07\x83\x02\x02\u050D\u050E\x05\x1E\x10\x02\u050E\u050F\x07\x84" +
		"\x02\x02\u050F\u0512\x05\xB8]\x02\u0510\u0511\x07&\x02\x02\u0511\u0513" +
		"\x05\xB8]\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02\x02\x02" +
		"\u0513\u058A\x03\x02\x02\x02\u0514\u0515\x07_\x02\x02\u0515\u0516\x07" +
		"\x83\x02\x02\u0516\u0517\x05\x1E\x10\x02\u0517\u0518\x07\x84\x02\x02\u0518" +
		"\u051C\x07\x7F\x02\x02\u0519\u051B\x05\xBA^\x02\u051A\u0519\x03\x02\x02" +
		"\x02\u051B\u051E\x03\x02\x02\x02\u051C\u051A\x03\x02\x02\x02\u051C\u051D" +
		"\x03\x02\x02\x02\u051D\u051F\x03\x02\x02\x02\u051E\u051C\x03\x02\x02\x02" +
		"\u051F\u0520\x07\x80\x02\x02\u0520\u058A\x03\x02\x02\x02\u0521\u0522\x07" +
		"r\x02\x02\u0522\u0523\x07\x83\x02\x02\u0523\u0524\x05\x1E\x10\x02\u0524" +
		"\u0525\x07\x84\x02\x02\u0525\u0526\x05\xA8U\x02\u0526\u058A\x03\x02\x02" +
		"\x02\u0527\u0528\x07#\x02\x02\u0528\u0529\x05\xA8U\x02\u0529\u052A\x07" +
		"r\x02\x02\u052A\u052B\x07\x83\x02\x02\u052B\u052C\x05\x1E\x10\x02\u052C" +
		"\u052D\x07\x84\x02\x02\u052D\u052E\x07\x88\x02\x02\u052E\u058A\x03\x02" +
		"\x02\x02\u052F\u0530\x070\x02\x02\u0530\u0532\x07\x83\x02\x02\u0531\u0533" +
		"\x05\xC2b\x02\u0532\u0531\x03\x02\x02\x02\u0532\u0533\x03\x02\x02\x02" +
		"\u0533\u0534\x03\x02\x02\x02\u0534\u0536\x07\x88\x02\x02\u0535\u0537\x05" +
		"\x1E\x10\x02\u0536\u0535\x03\x02\x02\x02\u0536\u0537\x03\x02\x02\x02\u0537" +
		"\u0538\x03\x02\x02\x02\u0538\u053A\x07\x88\x02\x02\u0539\u053B\x05\xC4" +
		"c\x02\u053A\u0539\x03\x02\x02\x02\u053A\u053B\x03\x02\x02\x02\u053B\u053C" +
		"\x03\x02\x02\x02\u053C\u053D\x07\x84\x02\x02\u053D\u058A\x05\xA8U\x02" +
		"\u053E\u0540\x07\x12\x02\x02\u053F\u053E\x03\x02\x02\x02\u053F\u0540\x03" +
		"\x02\x02\x02\u0540\u0541\x03\x02\x02\x02\u0541\u0542\x071\x02\x02\u0542" +
		"\u0543\x07\x83\x02\x02\u0543\u0544\x05\xB0Y\x02\u0544\u0545\x05\u01B4" +
		"\xDB\x02\u0545\u0546\x078\x02\x02\u0546\u0547\x05\x1E\x10\x02\u0547\u0548" +
		"\x07\x84\x02\x02\u0548\u0549\x05\xA8U\x02\u0549\u058A\x03\x02\x02\x02" +
		"\u054A\u054B\x07\x15\x02\x02\u054B\u058A\x07\x88\x02\x02\u054C\u054D\x07" +
		"\x1E\x02\x02\u054D\u058A\x07\x88\x02\x02\u054E\u0553\x074\x02\x02\u054F" +
		"\u0554\x05\u01B4\xDB\x02\u0550\u0551\x07\x18\x02\x02\u0551\u0554\x05\x1E" +
		"\x10\x02\u0552\u0554\x07 \x02\x02\u0553\u054F\x03\x02\x02\x02\u0553\u0550" +
		"\x03\x02\x02\x02\u0553\u0552\x03\x02\x02\x02\u0554\u0555\x03\x02\x02\x02" +
		"\u0555\u058A\x07\x88\x02\x02\u0556\u0558\x07T\x02\x02\u0557\u0559\x05" +
		"\x1E\x10\x02\u0558\u0557\x03\x02\x02\x02\u0558\u0559\x03\x02\x02\x02\u0559" +
		"\u055A\x03\x02\x02\x02\u055A\u058A\x07\x88\x02\x02\u055B\u055D\x07a\x02" +
		"\x02\u055C\u055E\x05\x1E\x10\x02\u055D\u055C\x03\x02\x02\x02\u055D\u055E" +
		"\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u058A\x07\x88\x02\x02" +
		"\u0560\u0561\x07c\x02\x02\u0561\u0567\x05\xACW\x02\u0562\u0564\x05\xC6" +
		"d\x02\u0563\u0565\x05\xCEh\x02\u0564\u0563\x03\x02\x02\x02\u0564\u0565" +
		"\x03\x02\x02\x02\u0565\u0568\x03\x02\x02\x02\u0566\u0568\x05\xCEh\x02" +
		"\u0567\u0562\x03\x02\x02\x02\u0567\u0566\x03\x02\x02\x02\u0568\u058A\x03" +
		"\x02\x02\x02\u0569\u056A\x07\x1B\x02\x02\u056A\u058A\x05\xACW\x02\u056B" +
		"\u056C\x07g\x02\x02\u056C\u058A\x05\xACW\x02\u056D\u056E\x07@\x02\x02" +
		"\u056E\u056F\x07\x83\x02\x02\u056F\u0570\x05\x1E\x10\x02\u0570\u0571\x07" +
		"\x84\x02\x02\u0571\u0572\x05\xA8U\x02\u0572\u058A\x03\x02\x02\x02\u0573" +
		"\u0574\x07k\x02\x02\u0574\u0575\x07\x83\x02\x02\u0575\u0576\x05\xD0i\x02" +
		"\u0576\u0577\x07\x84\x02\x02\u0577\u0578\x05\xA8U\x02\u0578\u058A\x03" +
		"\x02\x02\x02\u0579\u057D\x07s\x02\x02\u057A\u057B\x07T\x02\x02\u057B\u057E" +
		"\x05\x1E\x10\x02\u057C\u057E\x07\x15\x02\x02\u057D\u057A\x03\x02\x02\x02" +
		"\u057D\u057C\x03\x02\x02\x02\u057E\u057F\x03\x02\x02\x02\u057F\u058A\x07" +
		"\x88\x02\x02\u0580\u0581\x07i\x02\x02\u0581\u058A\x05\xACW\x02\u0582\u0583" +
		"\x07.\x02\x02\u0583\u0584\x07\x83\x02\x02\u0584\u0585\x05\u016C\xB7\x02" +
		"\u0585\u0586\x05\u016E\xB8\x02\u0586\u0587\x07\x84\x02\x02\u0587\u0588" +
		"\x05\xA8U\x02\u0588\u058A\x03\x02\x02\x02\u0589\u0507\x03\x02\x02\x02" +
		"\u0589\u0508\x03\x02\x02\x02\u0589\u050B\x03\x02\x02\x02\u0589\u0514\x03" +
		"\x02\x02\x02\u0589\u0521\x03\x02\x02\x02\u0589\u0527\x03\x02\x02\x02\u0589" +
		"\u052F\x03\x02\x02\x02\u0589\u053F\x03\x02\x02\x02\u0589\u054A\x03\x02" +
		"\x02\x02\u0589\u054C\x03\x02\x02\x02\u0589\u054E\x03\x02\x02\x02\u0589" +
		"\u0556\x03\x02\x02\x02\u0589\u055B\x03\x02\x02\x02\u0589\u0560\x03\x02" +
		"\x02\x02\u0589\u0569\x03\x02\x02\x02\u0589\u056B\x03\x02\x02\x02\u0589" +
		"\u056D\x03\x02\x02\x02\u0589\u0573\x03\x02\x02\x02\u0589\u0579\x03\x02" +
		"\x02\x02\u0589\u0580\x03\x02\x02\x02\u0589\u0582\x03\x02\x02\x02\u058A" +
		"\xAB\x03\x02\x02\x02\u058B\u058D\x07\x7F\x02\x02\u058C\u058E\x05\xC0a" +
		"\x02\u058D\u058C\x03\x02\x02\x02\u058D\u058E\x03\x02\x02\x02\u058E\u058F" +
		"\x03\x02\x02\x02\u058F\u0590\x07\x80\x02\x02\u0590\xAD\x03\x02\x02\x02" +
		"\u0591\u0596\x07k\x02\x02\u0592\u0596\x07R\x02\x02\u0593\u0594\x07R\x02" +
		"\x02\u0594\u0596\x07Q\x02\x02\u0595\u0591\x03\x02\x02\x02\u0595\u0592" +
		"\x03\x02\x02\x02";
	private static readonly _serializedATNSegment3: string =
		"\u0595\u0593\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02\u0596\u0597\x03" +
		"\x02\x02\x02\u0597\u0598\x05\xB0Y\x02\u0598\u059F\x05\xB2Z\x02\u0599\u059A" +
		"\x07\x86\x02\x02\u059A\u059B\x05\xB2Z\x02\u059B\u059C\x06X\x02\x02\u059C" +
		"\u059E\x03\x02\x02\x02\u059D\u0599\x03\x02\x02\x02\u059E\u05A1\x03\x02" +
		"\x02\x02\u059F\u059D\x03\x02\x02\x02\u059F\u05A0\x03\x02\x02\x02\u05A0" +
		"\u05A7\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A2\u05A3\x07.\x02" +
		"\x02\u05A3\u05A4\x05\u016C\xB7\x02\u05A4\u05A5\x05\u016E\xB8\x02\u05A5" +
		"\u05A7\x03\x02\x02\x02\u05A6\u0595\x03\x02\x02\x02\u05A6\u05A2\x03\x02" +
		"\x02\x02\u05A7\xAF\x03\x02\x02\x02\u05A8\u05AB\x07l\x02\x02\u05A9\u05AB" +
		"\x05\x06\x04\x02\u05AA\u05A8\x03\x02\x02\x02\u05AA\u05A9\x03\x02\x02\x02" +
		"\u05AB\xB1\x03\x02\x02\x02\u05AC\u05B2\x05\u01B4\xDB\x02\u05AD\u05AF\x07" +
		"\x93\x02\x02\u05AE\u05B0\x07R\x02\x02\u05AF\u05AE\x03\x02\x02\x02\u05AF" +
		"\u05B0\x03\x02\x02\x02\u05B0\u05B1\x03\x02\x02\x02\u05B1\u05B3\x05\xB4" +
		"[\x02\u05B2\u05AD\x03\x02\x02\x02\u05B2\u05B3\x03\x02\x02\x02\u05B3\xB3" +
		"\x03\x02\x02\x02\u05B4\u05B8\x05\x1E\x10\x02\u05B5\u05B8\x05\u0146\xA4" +
		"\x02\u05B6\u05B8\x05\u0176\xBC\x02\u05B7\u05B4\x03\x02\x02\x02\u05B7\u05B5" +
		"\x03\x02\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B8\xB5\x03\x02\x02\x02" +
		"\u05B9\u05BA\x07\x1D\x02\x02\u05BA\u05BB\x05\x06\x04\x02\u05BB\u05BC\x05" +
		"\u010A\x86\x02\u05BC\xB7\x03\x02\x02\x02\u05BD\u05C0\x05\xACW\x02\u05BE" +
		"\u05C0\x05\xAAV\x02\u05BF\u05BD\x03\x02\x02\x02\u05BF\u05BE\x03\x02\x02" +
		"\x02\u05C0\xB9\x03\x02\x02\x02\u05C1\u05C3\x05\xBC_\x02\u05C2\u05C1\x03" +
		"\x02\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C2\x03\x02\x02\x02\u05C4" +
		"\u05C5\x03\x02\x02\x02\u05C5\u05C6\x03\x02\x02\x02\u05C6\u05C7\x05\xC0" +
		"a\x02\u05C7\xBB\x03\x02\x02\x02\u05C8\u05C9\x07\x18\x02\x02\u05C9\u05CB" +
		"\x05\x1E\x10\x02\u05CA\u05CC\x05\xBE`\x02\u05CB\u05CA\x03\x02\x02\x02" +
		"\u05CB\u05CC\x03\x02\x02\x02\u05CC\u05CD\x03\x02\x02\x02\u05CD\u05CE\x07" +
		"\x87\x02\x02\u05CE\u05D2\x03\x02\x02\x02\u05CF\u05D0\x07 \x02\x02\u05D0" +
		"\u05D2\x07\x87\x02\x02\u05D1\u05C8\x03\x02\x02\x02\u05D1\u05CF\x03\x02" +
		"\x02\x02\u05D2\xBD\x03\x02\x02\x02\u05D3\u05D4\x07p\x02\x02\u05D4\u05D5" +
		"\x05\x1E\x10\x02\u05D5\xBF\x03\x02\x02\x02\u05D6\u05D8\x05\x9AN\x02\u05D7" +
		"\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9\u05D7\x03\x02" +
		"\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\xC1\x03\x02\x02\x02\u05DB\u05E5" +
		"\x05\xAEX\x02\u05DC\u05E1\x05\x1E\x10\x02\u05DD\u05DE\x07\x86\x02\x02" +
		"\u05DE\u05E0\x05\x1E\x10\x02\u05DF\u05DD\x03\x02\x02\x02\u05E0\u05E3\x03" +
		"\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02\u05E1\u05E2\x03\x02\x02\x02\u05E2" +
		"\u05E5\x03\x02\x02\x02\u05E3\u05E1\x03\x02\x02\x02\u05E4\u05DB\x03\x02" +
		"\x02\x02\u05E4\u05DC\x03\x02\x02\x02\u05E5\xC3\x03\x02\x02\x02\u05E6\u05EB" +
		"\x05\x1E\x10\x02\u05E7\u05E8\x07\x86\x02\x02\u05E8\u05EA\x05\x1E\x10\x02" +
		"\u05E9\u05E7\x03\x02\x02\x02\u05EA\u05ED\x03\x02\x02\x02\u05EB\u05E9\x03" +
		"\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\xC5\x03\x02\x02\x02\u05ED" +
		"\u05EB\x03\x02\x02\x02\u05EE\u05F2\x05\xC8e\x02\u05EF\u05F1\x05\xC8e\x02" +
		"\u05F0\u05EF\x03\x02\x02\x02\u05F1\u05F4\x03\x02\x02\x02\u05F2\u05F0\x03" +
		"\x02\x02\x02\u05F2\u05F3\x03\x02\x02\x02\u05F3\u05F6\x03\x02\x02\x02\u05F4" +
		"\u05F2\x03\x02\x02\x02\u05F5\u05F7\x05\xCAf\x02\u05F6\u05F5\x03\x02\x02" +
		"\x02\u05F6\u05F7\x03\x02\x02\x02\u05F7\u05FA\x03\x02\x02\x02\u05F8\u05FA" +
		"\x05\xCAf\x02\u05F9\u05EE\x03\x02\x02\x02\u05F9\u05F8\x03\x02\x02\x02" +
		"\u05FA\xC7\x03\x02\x02\x02\u05FB\u05FC\x07\x19\x02\x02\u05FC\u05FD\x07" +
		"\x83\x02\x02\u05FD\u05FF\x05\x16\f\x02\u05FE\u0600\x05\u01B4\xDB\x02\u05FF" +
		"\u05FE\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600\u0601\x03\x02" +
		"\x02\x02\u0601\u0603\x07\x84\x02\x02\u0602\u0604\x05\xCCg\x02\u0603\u0602" +
		"\x03\x02\x02\x02\u0603\u0604\x03\x02\x02\x02\u0604\u0605\x03\x02\x02\x02" +
		"\u0605\u0606\x05\xACW\x02\u0606\xC9\x03\x02\x02\x02\u0607\u0609\x07\x19" +
		"\x02\x02\u0608\u060A\x05\xCCg\x02\u0609\u0608\x03\x02\x02\x02\u0609\u060A" +
		"\x03\x02\x02\x02\u060A\u060B\x03\x02\x02\x02\u060B\u060C\x05\xACW\x02" +
		"\u060C\xCB\x03\x02\x02\x02\u060D\u060E\x07p\x02\x02\u060E\u060F\x07\x83" +
		"\x02\x02\u060F\u0610\x05\x1E\x10\x02\u0610\u0611\x07\x84\x02\x02\u0611" +
		"\xCD\x03\x02\x02\x02\u0612\u0613\x07-\x02\x02\u0613\u0614\x05\xACW\x02" +
		"\u0614\xCF\x03\x02\x02\x02\u0615\u0618\x05\xAEX\x02\u0616\u0618\x05\x1E" +
		"\x10\x02\u0617\u0615\x03\x02\x02\x02\u0617\u0616\x03\x02\x02\x02\u0618" +
		"\xD1\x03\x02\x02\x02\u0619\u061A\x07C\x02\x02\u061A\u061B\x05\xD4k\x02" +
		"\u061B\u061D\x05\xD6l\x02\u061C\u061E\x07\x88\x02\x02\u061D\u061C\x03" +
		"\x02\x02\x02\u061D\u061E\x03\x02\x02\x02\u061E\xD3\x03\x02\x02\x02\u061F" +
		"\u0624\x05\u01B4\xDB\x02\u0620\u0621\x07\x85\x02\x02\u0621\u0623\x05\u01B4" +
		"\xDB\x02\u0622\u0620\x03\x02\x02\x02\u0623\u0626\x03\x02\x02\x02\u0624" +
		"\u0622\x03\x02\x02\x02\u0624\u0625\x03\x02\x02\x02\u0625\xD5\x03\x02\x02" +
		"\x02\u0626\u0624\x03\x02\x02\x02\u0627\u0629\x07\x7F\x02\x02\u0628\u062A" +
		"\x05\xD8m\x02\u0629\u0628\x03\x02\x02\x02\u0629\u062A\x03\x02\x02\x02" +
		"\u062A\u062C\x03\x02\x02\x02\u062B\u062D\x05\xDCo\x02\u062C\u062B\x03" +
		"\x02\x02\x02\u062C\u062D\x03\x02\x02\x02\u062D\u062F\x03\x02\x02\x02\u062E" +
		"\u0630\x05\xE0q\x02\u062F\u062E\x03\x02\x02\x02\u062F\u0630\x03\x02\x02" +
		"\x02\u0630\u0631\x03\x02\x02\x02\u0631\u0632\x07\x80\x02\x02\u0632\xD7" +
		"\x03\x02\x02\x02\u0633\u0635\x05\xDAn\x02\u0634\u0633\x03\x02\x02\x02" +
		"\u0635\u0636\x03\x02\x02\x02\u0636\u0634\x03\x02\x02\x02\u0636\u0637\x03" +
		"\x02\x02\x02\u0637\xD9\x03\x02\x02\x02\u0638\u0639\x07+\x02\x02\u0639" +
		"\u063A\x07\r\x02\x02\u063A\u063B\x05\u01B4\xDB\x02\u063B\u063C\x07\x88" +
		"\x02\x02\u063C\xDB\x03\x02\x02\x02\u063D\u063F\x05\xDEp\x02\u063E\u063D" +
		"\x03\x02\x02\x02\u063F\u0640\x03\x02\x02\x02\u0640\u063E\x03\x02\x02\x02" +
		"\u0640\u0641\x03\x02\x02\x02\u0641\xDD\x03\x02\x02\x02\u0642\u0643\x07" +
		"k\x02\x02\u0643\u0644\x05\u01B4\xDB\x02\u0644\u0645\x07\x93\x02\x02\u0645" +
		"\u0646\x05\x04\x03\x02\u0646\u0647\x07\x88\x02\x02\u0647\u0652\x03\x02" +
		"\x02\x02\u0648\u0649\x07k\x02\x02\u0649\u064A\x05\x04\x03\x02\u064A\u064B" +
		"\x07\x88\x02\x02\u064B\u0652\x03\x02\x02\x02\u064C\u064D\x07k\x02\x02" +
		"\u064D\u064E\x07\\\x02\x02\u064E\u064F\x05\x04\x03\x02\u064F\u0650\x07" +
		"\x88\x02\x02\u0650\u0652\x03\x02\x02\x02\u0651\u0642\x03\x02\x02\x02\u0651" +
		"\u0648\x03\x02\x02\x02\u0651\u064C\x03\x02\x02\x02\u0652\xDF\x03\x02\x02" +
		"\x02\u0653\u0655\x05\xE2r\x02\u0654\u0653\x03\x02\x02\x02\u0655\u0656" +
		"\x03\x02\x02\x02\u0656\u0654\x03\x02\x02\x02\u0656\u0657\x03\x02\x02\x02" +
		"\u0657\xE1\x03\x02\x02\x02\u0658\u065B\x05\xD2j\x02\u0659\u065B\x05\xE4" +
		"s\x02\u065A\u0658\x03\x02\x02\x02\u065A\u0659\x03\x02\x02\x02\u065B\xE3" +
		"\x03\x02\x02\x02\u065C\u065E\x05\u0160\xB1\x02\u065D\u065C\x03\x02\x02" +
		"\x02\u065D\u065E\x03\x02\x02\x02\u065E\u0660\x03\x02\x02\x02\u065F\u0661" +
		"\x05\u0102\x82\x02\u0660\u065F\x03\x02\x02\x02\u0660\u0661\x03\x02\x02" +
		"\x02\u0661\u0667\x03\x02\x02\x02\u0662\u0668\x05\u0190\xC9\x02\u0663\u0668" +
		"\x05\u0192\xCA\x02\u0664\u0668\x05\u0194\xCB\x02\u0665\u0668\x05\u0196" +
		"\xCC\x02\u0666\u0668\x05\u0198\xCD\x02\u0667\u0662\x03\x02\x02\x02\u0667" +
		"\u0663\x03\x02\x02\x02\u0667\u0664\x03\x02\x02\x02\u0667\u0665\x03\x02" +
		"\x02\x02\u0667\u0666\x03\x02\x02\x02\u0668\xE5\x03\x02\x02\x02\u0669\u066A" +
		"\x05\u01B4\xDB\x02\u066A\u066B\x07\x97\x02\x02\u066B\u066D\x05\u01B4\xDB" +
		"\x02\u066C\u066E\x05\x18\r\x02\u066D\u066C\x03\x02\x02\x02\u066D\u066E" +
		"\x03\x02\x02\x02\u066E\xE7\x03\x02\x02\x02\u066F\u0670\x07\x94\x02\x02" +
		"\u0670\u0675\x05\xEAv\x02\u0671\u0672\x07\x86\x02\x02\u0672\u0674\x05" +
		"\xEAv\x02\u0673\u0671\x03\x02\x02\x02\u0674\u0677\x03\x02\x02\x02\u0675" +
		"\u0673\x03\x02\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676\u0678\x03\x02" +
		"\x02\x02\u0677\u0675\x03\x02\x02\x02\u0678\u0679\x07\x95\x02\x02\u0679" +
		"\xE9\x03\x02\x02\x02\u067A\u067C\x05\u0160\xB1\x02\u067B\u067A\x03\x02" +
		"\x02\x02\u067B\u067C\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D" +
		"\u067E\x05\u01B4\xDB\x02\u067E\xEB\x03\x02\x02\x02\u067F\u0680\x07\x87" +
		"\x02\x02\u0680\u0685\x05\x16\f\x02\u0681\u0682\x07\x86\x02\x02\u0682\u0684" +
		"\x05\x04\x03\x02\u0683\u0681\x03\x02\x02\x02\u0684\u0687\x03\x02\x02\x02" +
		"\u0685\u0683\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\xED\x03" +
		"\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0688\u068D\x05\x04\x03\x02\u0689" +
		"\u068A\x07\x86\x02\x02\u068A\u068C\x05\x04\x03\x02\u068B\u0689\x03\x02" +
		"\x02\x02\u068C\u068F\x03\x02\x02\x02\u068D\u068B\x03\x02\x02\x02\u068D" +
		"\u068E\x03\x02\x02\x02\u068E\xEF\x03\x02\x02\x02\u068F\u068D\x03\x02\x02" +
		"\x02\u0690\u0692\x05\xF2z\x02\u0691\u0690\x03\x02\x02\x02\u0692\u0693" +
		"\x03\x02\x02\x02\u0693\u0691\x03\x02\x02\x02\u0693\u0694\x03\x02\x02\x02" +
		"\u0694\xF1\x03\x02\x02\x02\u0695\u0696\x07q\x02\x02\u0696\u0697\x05\u01B4" +
		"\xDB\x02\u0697\u0698\x07\x87\x02\x02\u0698\u0699\x05\xF4{\x02\u0699\xF3" +
		"\x03\x02\x02\x02\u069A\u06A5\x05\xFA~\x02\u069B\u069E\x05\xF6|\x02\u069C" +
		"\u069D\x07\x86\x02\x02\u069D\u069F\x05\xF8}\x02\u069E\u069C\x03\x02\x02" +
		"\x02\u069E\u069F\x03\x02\x02\x02\u069F\u06A2\x03\x02\x02\x02\u06A0\u06A1" +
		"\x07\x86\x02\x02\u06A1\u06A3\x05\xFA~\x02\u06A2\u06A0\x03\x02\x02\x02" +
		"\u06A2\u06A3\x03\x02\x02\x02\u06A3\u06A5\x03\x02\x02\x02\u06A4\u069A\x03" +
		"\x02\x02\x02\u06A4\u069B\x03\x02\x02\x02\u06A5\xF5\x03\x02\x02\x02\u06A6" +
		"\u06AE\x05\x16\f\x02\u06A7\u06A9\x07\x1C\x02\x02\u06A8\u06AA\x07\x96\x02" +
		"\x02\u06A9\u06A8\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02\u06AA\u06AE" +
		"\x03\x02\x02\x02\u06AB\u06AE\x07^\x02\x02\u06AC\u06AE\x07h\x02\x02\u06AD" +
		"\u06A6\x03\x02\x02\x02\u06AD\u06A7\x03\x02\x02\x02\u06AD\u06AB\x03\x02" +
		"\x02\x02\u06AD\u06AC\x03\x02\x02\x02\u06AE\xF7\x03\x02\x02\x02\u06AF\u06B4" +
		"\x05\x04\x03\x02\u06B0\u06B1\x07\x86\x02\x02\u06B1\u06B3\x05\x04\x03\x02" +
		"\u06B2\u06B0\x03\x02\x02\x02\u06B3\u06B6\x03\x02\x02\x02\u06B4\u06B2\x03" +
		"\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\xF9\x03\x02\x02\x02\u06B6" +
		"\u06B4\x03\x02\x02\x02\u06B7\u06B8\x07D\x02\x02\u06B8\u06B9\x07\x83\x02" +
		"\x02\u06B9\u06BA\x07\x84\x02\x02\u06BA\xFB\x03\x02\x02\x02\u06BB\u06BD" +
		"\x07\x7F\x02\x02\u06BC\u06BE\x05\xFE\x80\x02\u06BD\u06BC\x03\x02\x02\x02" +
		"\u06BD\u06BE\x03\x02\x02\x02\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C0\x07" +
		"\x80\x02\x02\u06C0\xFD\x03\x02\x02\x02\u06C1\u06C3\x05\u0100\x81\x02\u06C2" +
		"\u06C1\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C2\x03\x02" +
		"\x02\x02\u06C4\u06C5\x03\x02\x02\x02\u06C5\xFF\x03\x02\x02\x02\u06C6\u06C8" +
		"\x05\u0160\xB1\x02\u06C7\u06C6\x03\x02\x02\x02\u06C7\u06C8\x03\x02\x02" +
		"\x02\u06C8\u06CA\x03\x02\x02\x02\u06C9\u06CB\x05\u0102\x82\x02\u06CA\u06C9" +
		"\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CE\x03\x02\x02\x02" +
		"\u06CC\u06CF\x05\u0106\x84\x02\u06CD\u06CF\x05\u01A4\xD3\x02\u06CE\u06CC" +
		"\x03\x02\x02\x02\u06CE\u06CD\x03\x02\x02\x02\u06CF\u0101\x03\x02\x02\x02" +
		"\u06D0\u06D2\x05\u0104\x83\x02\u06D1\u06D0\x03\x02\x02\x02\u06D2\u06D3" +
		"\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02\u06D3\u06D4\x03\x02\x02\x02" +
		"\u06D4\u0103\x03\x02\x02\x02\u06D5\u06D6\t\f\x02\x02\u06D6\u0105\x03\x02" +
		"\x02\x02\u06D7\u06EB\x05\u01A0\xD1\x02\u06D8\u06EB\x05\u0108\x85\x02\u06D9" +
		"\u06EB\x05\u019A\xCE\x02\u06DA\u06E0\x05\u0136\x9C\x02\u06DB\u06E1\x05" +
		"\u013A\x9E\x02\u06DC\u06DD\x05\u0178\xBD\x02\u06DD\u06DE\x05L\'\x02\u06DE" +
		"\u06DF\x07\x88\x02\x02\u06DF\u06E1\x03\x02\x02\x02\u06E0\u06DB\x03\x02" +
		"\x02\x02\u06E0\u06DC\x03\x02\x02\x02\u06E1\u06EB\x03\x02\x02\x02\u06E2" +
		"\u06EB\x05\u01A6\xD4\x02\u06E3\u06E4\x07n\x02\x02\u06E4\u06EB\x05\u01A8" +
		"\xD5\x02\u06E5\u06EB\x05\u0190\xC9\x02\u06E6\u06EB\x05\u0192\xCA\x02\u06E7" +
		"\u06EB\x05\u0194\xCB\x02\u06E8\u06EB\x05\u0196\xCC\x02\u06E9\u06EB\x05" +
		"\u0198\xCD\x02\u06EA\u06D7\x03\x02\x02\x02\u06EA\u06D8\x03\x02\x02\x02" +
		"\u06EA\u06D9\x03\x02\x02\x02\u06EA\u06DA\x03\x02\x02\x02\u06EA\u06E2\x03" +
		"\x02\x02\x02\u06EA\u06E3\x03\x02\x02\x02\u06EA\u06E5\x03\x02\x02\x02\u06EA" +
		"\u06E6\x03\x02\x02\x02\u06EA\u06E7\x03\x02\x02\x02\u06EA\u06E8\x03\x02" +
		"\x02\x02\u06EA\u06E9\x03\x02\x02\x02\u06EB\u0107\x03\x02\x02\x02\u06EC" +
		"\u06F2\x07R\x02\x02\u06ED\u06EE\x07Q\x02\x02\u06EE\u06F2\x07R\x02\x02" +
		"\u06EF\u06F0\x07R\x02\x02\u06F0\u06F2\x07Q\x02\x02\u06F1\u06EC\x03\x02" +
		"\x02\x02\u06F1\u06ED\x03\x02\x02\x02\u06F1\u06EF\x03\x02\x02\x02\u06F1" +
		"\u06F2\x03\x02\x02\x02\u06F2\u06F3\x03\x02\x02\x02\u06F3\u06FD\x05\x06" +
		"\x04\x02\u06F4\u06F5\x05\x04\x03\x02\u06F5\u06F6\x07\x85\x02\x02\u06F6" +
		"\u06F7\x05\u01A2\xD2\x02\u06F7\u06FE\x03\x02\x02\x02\u06F8\u06FE\x05\u01A8" +
		"\xD5\x02\u06F9\u06FE\x05\u019E\xD0\x02\u06FA\u06FE\x05\u01A2\xD2\x02\u06FB" +
		"\u06FE\x05\u01AC\xD7\x02\u06FC\u06FE\x05\u019C\xCF\x02\u06FD\u06F4\x03" +
		"\x02\x02\x02\u06FD\u06F8\x03\x02\x02\x02\u06FD\u06F9\x03\x02\x02\x02\u06FD" +
		"\u06FA\x03\x02\x02\x02\u06FD\u06FB\x03\x02\x02\x02\u06FD\u06FC\x03\x02" +
		"\x02\x02\u06FE\u0109\x03\x02\x02\x02\u06FF\u0704\x05\u010C\x87\x02\u0700" +
		"\u0701\x07\x86\x02\x02\u0701\u0703\x05\u010C\x87\x02\u0702\u0700\x03\x02" +
		"\x02\x02\u0703\u0706\x03\x02\x02\x02\u0704\u0702\x03\x02\x02\x02\u0704" +
		"\u0705\x03\x02\x02\x02\u0705\u010B\x03\x02\x02\x02\u0706\u0704\x03\x02" +
		"\x02\x02\u0707\u0708\x05\u01B4\xDB\x02\u0708\u0709\x07\x93\x02\x02\u0709" +
		"\u070A\x05\x1E\x10\x02\u070A\u010D\x03\x02\x02\x02\u070B\u0710\x05\u0110" +
		"\x89\x02\u070C\u070D\x07\x86\x02\x02\u070D\u070F\x05\u0110\x89\x02\u070E" +
		"\u070C\x03\x02\x02\x02\u070F\u0712\x03\x02\x02\x02\u0710\u070E\x03\x02" +
		"\x02\x02\u0710\u0711\x03\x02\x02\x02\u0711\u010F\x03\x02\x02\x02\u0712" +
		"\u0710\x03\x02\x02\x02\u0713\u0716\x05\u01B4\xDB\x02\u0714\u0715\x07\x93" +
		"\x02\x02\u0715\u0717\x05\u0112\x8A\x02\u0716\u0714\x03\x02\x02\x02\u0716" +
		"\u0717\x03\x02\x02\x02\u0717\u0111\x03\x02\x02\x02\u0718\u071B\x05\x1E" +
		"\x10\x02\u0719\u071B\x05\u0146\xA4\x02\u071A\u0718\x03\x02\x02\x02\u071A" +
		"\u0719\x03\x02\x02\x02\u071B\u0113\x03\x02\x02\x02\u071C\u071F\x05\x06" +
		"\x04\x02\u071D\u071F\x07n\x02\x02\u071E\u071C\x03\x02\x02\x02\u071E\u071D" +
		"\x03\x02\x02\x02\u071F\u0115\x03\x02\x02\x02\u0720\u0721\x05\x04\x03\x02" +
		"\u0721\u0117\x03\x02\x02\x02\u0722\u0725\x05\xACW\x02\u0723\u0725\x07" +
		"\x88\x02\x02\u0724\u0722\x03\x02\x02\x02\u0724\u0723\x03\x02\x02\x02\u0725" +
		"\u0119\x03\x02\x02\x02\u0726\u072D\x05\u0122\x92\x02\u0727\u072A\x05\u011C" +
		"\x8F\x02\u0728\u0729\x07\x86\x02\x02\u0729\u072B\x05\u0122\x92\x02\u072A" +
		"\u0728\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B\u072D\x03\x02" +
		"\x02\x02\u072C\u0726\x03\x02\x02\x02\u072C\u0727\x03\x02\x02\x02\u072D" +
		"\u011B\x03\x02\x02\x02\u072E\u0733\x05\u011E\x90\x02\u072F\u0730\x07\x86" +
		"\x02\x02\u0730\u0732\x05\u011E\x90\x02\u0731\u072F\x03\x02\x02\x02\u0732" +
		"\u0735\x03\x02\x02\x02\u0733\u0731\x03\x02\x02\x02\u0733\u0734\x03\x02" +
		"\x02\x02\u0734\u011D\x03\x02\x02\x02\u0735\u0733\x03\x02\x02\x02\u0736" +
		"\u0738\x05\u0160\xB1\x02\u0737\u0736\x03\x02\x02\x02\u0737\u0738\x03\x02" +
		"\x02\x02\u0738\u073A\x03\x02\x02\x02\u0739\u073B\x05\u0120\x91\x02\u073A" +
		"\u0739\x03\x02\x02\x02\u073A\u073B\x03\x02\x02\x02\u073B\u073C\x03\x02" +
		"\x02\x02\u073C\u073F\x05\u01AE\xD8\x02\u073D\u073F\x07\x0E\x02\x02\u073E" +
		"\u0737\x03\x02\x02\x02\u073E\u073D\x03\x02\x02\x02\u073F\u011F\x03\x02" +
		"\x02\x02\u0740\u0749\x07R\x02\x02\u0741\u0749\x07J\x02\x02\u0742\u0749" +
		"\x078\x02\x02\u0743\u0744\x07R\x02\x02\u0744\u0749\x07`\x02\x02\u0745" +
		"\u0746\x078\x02\x02\u0746\u0749\x07`\x02\x02\u0747\u0749\x07`\x02\x02" +
		"\u0748\u0740\x03\x02\x02\x02\u0748\u0741\x03\x02\x02\x02\u0748\u0742\x03" +
		"\x02\x02\x02\u0748\u0743\x03\x02\x02\x02\u0748\u0745\x03\x02\x02\x02\u0748" +
		"\u0747\x03\x02\x02\x02\u0749\u0121\x03\x02\x02\x02\u074A\u074C\x05\u0160" +
		"\xB1\x02\u074B\u074A\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C" +
		"\u074D\x03\x02\x02\x02\u074D\u074E\x07L\x02\x02\u074E\u074F\x05\u0142" +
		"\xA2\x02\u074F\u0750\x05\u01B4\xDB\x02\u0750\u0123\x03\x02\x02\x02\u0751" +
		"\u0753\x05\u0160\xB1\x02\u0752\u0751\x03\x02\x02\x02\u0752\u0753\x03\x02" +
		"\x02\x02\u0753\u0755\x03\x02\x02\x02\u0754\u0756\x05\u012A\x96\x02\u0755" +
		"\u0754\x03\x02\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756\u0761\x03\x02" +
		"\x02\x02\u0757\u0758\x073\x02\x02\u0758\u075A\x05\u012C\x97\x02\u0759" +
		"\u075B\x05\u0128\x95\x02\u075A\u0759\x03\x02\x02\x02\u075A\u075B\x03\x02" +
		"\x02\x02\u075B\u0762\x03\x02\x02\x02\u075C\u075D\x07X\x02\x02\u075D\u075F" +
		"\x05\u012C\x97\x02\u075E\u0760\x05\u0126\x94\x02\u075F\u075E\x03\x02\x02" +
		"\x02\u075F\u0760\x03\x02\x02\x02\u0760\u0762\x03\x02\x02\x02\u0761\u0757" +
		"\x03\x02\x02\x02\u0761\u075C\x03\x02\x02\x02\u0762\u0125\x03\x02\x02\x02" +
		"\u0763\u0765\x05\u0160\xB1\x02\u0764\u0763\x03\x02\x02\x02\u0764\u0765" +
		"\x03\x02\x02\x02\u0765\u0767\x03\x02\x02\x02\u0766\u0768\x05\u012A\x96" +
		"\x02\u0767\u0766\x03\x02\x02\x02\u0767\u0768\x03\x02\x02\x02\u0768\u0769" +
		"\x03\x02\x02\x02\u0769\u076A\x073\x02\x02\u076A\u076B\x05\u012C\x97\x02" +
		"\u076B\u0127\x03\x02\x02\x02\u076C\u076E\x05\u0160\xB1\x02\u076D\u076C" +
		"\x03\x02\x02\x02\u076D\u076E\x03\x02\x02\x02\u076E\u0770\x03\x02\x02\x02" +
		"\u076F\u0771\x05\u012A\x96\x02\u0770\u076F\x03\x02\x02\x02\u0770\u0771" +
		"\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\u0773\x07X\x02\x02" +
		"\u0773\u0774\x05\u012C\x97\x02\u0774\u0129\x03\x02\x02\x02\u0775\u077D" +
		"\x07O\x02\x02\u0776\u077D\x07;\x02\x02\u0777\u077D\x07N\x02\x02\u0778" +
		"\u0779\x07O\x02\x02\u0779\u077D\x07;\x02\x02\u077A\u077B\x07;\x02\x02" +
		"\u077B\u077D\x07O\x02\x02\u077C\u0775\x03\x02\x02\x02\u077C\u0776\x03" +
		"\x02\x02\x02\u077C\u0777\x03\x02\x02\x02\u077C\u0778\x03\x02\x02\x02\u077C" +
		"\u077A\x03\x02\x02\x02\u077D\u012B\x03\x02\x02\x02\u077E\u0781\x05\xAC" +
		"W\x02\u077F\u0781\x07\x88\x02\x02\u0780\u077E\x03\x02\x02\x02\u0780\u077F" +
		"\x03\x02\x02\x02\u0781\u012D\x03\x02\x02\x02\u0782\u0784\x05\u0160\xB1" +
		"\x02\u0783\u0782\x03\x02\x02\x02\u0783\u0784\x03\x02\x02\x02\u0784\u078D" +
		"\x03\x02\x02\x02\u0785\u0786\x07\f\x02\x02\u0786\u0787\x05\xACW\x02\u0787" +
		"\u0788\x05\u0132\x9A\x02\u0788\u078E\x03\x02\x02\x02\u0789\u078A\x07S" +
		"\x02\x02\u078A\u078B\x05\xACW\x02\u078B\u078C\x05\u0130\x99\x02\u078C" +
		"\u078E\x03\x02\x02\x02\u078D\u0785\x03\x02\x02\x02\u078D\u0789\x03\x02" +
		"\x02\x02\u078E\u012F\x03\x02\x02\x02\u078F\u0791\x05\u0160\xB1\x02\u0790" +
		"\u078F\x03\x02\x02\x02\u0790\u0791\x03\x02\x02\x02\u0791\u0792\x03\x02" +
		"\x02\x02\u0792\u0793\x07\f\x02\x02\u0793\u0794\x05\xACW\x02\u0794\u0131" +
		"\x03\x02\x02\x02\u0795\u0797\x05\u0160\xB1\x02\u0796\u0795\x03\x02\x02" +
		"\x02\u0796\u0797\x03\x02\x02\x02\u0797\u0798\x03\x02\x02\x02\u0798\u0799" +
		"\x07S\x02\x02\u0799\u079A\x05\xACW\x02\u079A\u0133\x03\x02\x02\x02\u079B" +
		"\u07B2\x07\x89\x02\x02\u079C\u07B2\x07\x8A\x02\x02\u079D\u07B2\x07\x91" +
		"\x02\x02\u079E\u07B2\x07\x92\x02\x02\u079F\u07B2\x07\x99\x02\x02\u07A0" +
		"\u07B2\x07\x9A\x02\x02\u07A1\u07B2\x07b\x02\x02\u07A2\u07B2\x07,\x02\x02" +
		"\u07A3\u07B2\x07\x8B\x02\x02\u07A4\u07B2\x07\x8C\x02\x02\u07A5\u07B2\x07" +
		"\x8D\x02\x02\u07A6\u07B2\x07\x8E\x02\x02\u07A7\u07B2\x07\x8F\x02\x02\u07A8" +
		"\u07B2\x07\x90\x02\x02\u07A9\u07B2\x07\xAA\x02\x02\u07AA\u07B2\x05\u017A" +
		"\xBE\x02\u07AB\u07B2\x07\x9E\x02\x02\u07AC\u07B2\x07\x9F\x02\x02\u07AD" +
		"\u07B2\x07\x95\x02\x02\u07AE\u07B2\x07\x94\x02\x02\u07AF\u07B2\x07\xA1" +
		"\x02\x02\u07B0\u07B2\x07\xA0\x02\x02\u07B1\u079B\x03\x02\x02\x02\u07B1" +
		"\u079C\x03\x02\x02\x02\u07B1\u079D\x03\x02\x02\x02\u07B1\u079E\x03\x02" +
		"\x02\x02\u07B1\u079F\x03\x02\x02\x02\u07B1\u07A0\x03\x02\x02\x02\u07B1" +
		"\u07A1\x03\x02\x02\x02\u07B1\u07A2\x03\x02\x02\x02\u07B1\u07A3\x03\x02" +
		"\x02\x02\u07B1\u07A4\x03\x02\x02\x02\u07B1\u07A5\x03\x02\x02\x02\u07B1" +
		"\u07A6\x03\x02\x02\x02\u07B1\u07A7\x03\x02\x02\x02\u07B1\u07A8\x03\x02" +
		"\x02\x02\u07B1\u07A9\x03\x02\x02\x02\u07B1\u07AA\x03\x02\x02\x02\u07B1" +
		"\u07AB\x03\x02\x02\x02\u07B1\u07AC\x03\x02\x02\x02\u07B1\u07AD\x03\x02" +
		"\x02\x02\u07B1\u07AE\x03\x02\x02\x02\u07B1\u07AF\x03\x02\x02\x02\u07B1" +
		"\u07B0\x03\x02\x02\x02\u07B2\u0135\x03\x02\x02\x02\u07B3\u07B4\t\r\x02" +
		"\x02\u07B4\u07B5\x07H\x02\x02\u07B5\u07B6\x05\x06\x04\x02\u07B6\u07B7" +
		"\x07\x83\x02\x02\u07B7\u07B8\x05\u01AE\xD8\x02\u07B8\u07B9\x07\x84\x02" +
		"\x02\u07B9\u0137\x03\x02\x02\x02\u07BA\u07BB\x07\x87\x02\x02\u07BB\u07BC" +
		"\t\x0E\x02\x02\u07BC\u07BE\x07\x83\x02\x02\u07BD\u07BF\x05\x1A\x0E\x02" +
		"\u07BE\u07BD\x03\x02\x02\x02\u07BE\u07BF\x03\x02\x02\x02\u07BF\u07C0\x03" +
		"\x02\x02\x02\u07C0\u07C1\x07\x84\x02\x02\u07C1\u0139\x03\x02\x02\x02\u07C2" +
		"\u07C5\x05\xACW\x02\u07C3\u07C5\x07\x88\x02\x02\u07C4\u07C2\x03\x02\x02" +
		"\x02\u07C4\u07C3\x03\x02\x02\x02\u07C5\u013B\x03\x02\x02\x02\u07C6\u07C7" +
		"\x07\x87\x02\x02\u07C7\u07C8\x05\xEEx\x02\u07C8\u013D\x03\x02\x02\x02" +
		"\u07C9\u07CD\x07\x7F\x02\x02\u07CA\u07CC\x05\u0140\xA1\x02\u07CB\u07CA" +
		"\x03\x02\x02\x02\u07CC\u07CF\x03\x02\x02\x02\u07CD\u07CB\x03\x02\x02\x02" +
		"\u07CD\u07CE\x03\x02\x02\x02\u07CE\u07D0\x03\x02\x02\x02\u07CF\u07CD\x03" +
		"\x02\x02\x02\u07D0\u07D1\x07\x80\x02\x02\u07D1\u013F\x03\x02\x02\x02\u07D2" +
		"\u07D4\x05\u0160\xB1\x02\u07D3\u07D2\x03\x02\x02\x02\u07D3\u07D4\x03\x02" +
		"\x02\x02\u07D4\u07D6\x03\x02\x02\x02\u07D5\u07D7\x05\u0102\x82\x02\u07D6" +
		"\u07D5\x03\x02\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\u07E2\x03\x02" +
		"\x02\x02\u07D8\u07E3\x05\u0106\x84\x02\u07D9\u07DA\x07.\x02\x02\u07DA" +
		"\u07DC\x05\x06\x04\x02\u07DB\u07DD\x05\u0174\xBB\x02\u07DC\u07DB\x03\x02" +
		"\x02\x02\u07DD\u07DE\x03\x02\x02\x02\u07DE\u07DC\x03\x02\x02\x02\u07DE" +
		"\u07DF\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0\u07E1\x07\x88" +
		"\x02\x02\u07E1\u07E3\x03\x02\x02\x02\u07E2\u07D8\x03\x02\x02\x02\u07E2" +
		"\u07D9\x03\x02\x02\x02\u07E3\u0141\x03\x02\x02\x02\u07E4\u07EC\x05\b\x05" +
		"\x02\u07E5\u07E7\t\x0F\x02\x02\u07E6\u07E5\x03\x02\x02\x02\u07E7\u07EA" +
		"\x03\x02\x02\x02\u07E8\u07E6\x03\x02\x02\x02\u07E8\u07E9\x03\x02\x02\x02" +
		"\u07E9\u07EB\x03\x02\x02\x02\u07EA\u07E8\x03\x02\x02\x02\u07EB\u07ED\x05" +
		"\u0144\xA3\x02\u07EC\u07E8\x03\x02\x02\x02\u07ED\u07EE\x03\x02\x02\x02" +
		"\u07EE\u07EC\x03\x02\x02\x02\u07EE\u07EF\x03\x02\x02\x02\u07EF\u0143\x03" +
		"\x02\x02\x02\u07F0\u07F4\x07\x81\x02\x02\u07F1\u07F3\x07\x86\x02\x02\u07F2" +
		"\u07F1\x03\x02\x02\x02\u07F3\u07F6\x03\x02\x02\x02\u07F4\u07F2\x03\x02" +
		"\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F7\x03\x02\x02\x02\u07F6" +
		"\u07F4\x03\x02\x02\x02\u07F7\u07F8\x07\x82\x02\x02\u07F8\u0145\x03\x02" +
		"\x02\x02\u07F9\u0805\x07\x7F\x02\x02\u07FA\u07FF\x05\u0112\x8A\x02\u07FB" +
		"\u07FC\x07\x86\x02\x02\u07FC\u07FE\x05\u0112\x8A\x02\u07FD\u07FB\x03\x02" +
		"\x02\x02\u07FE\u0801\x03\x02\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u07FF" +
		"\u0800\x03\x02\x02\x02\u0800\u0803\x03\x02\x02\x02\u0801\u07FF\x03\x02" +
		"\x02\x02\u0802\u0804\x07\x86\x02\x02\u0803\u0802\x03\x02\x02\x02\u0803" +
		"\u0804\x03\x02\x02\x02\u0804\u0806\x03\x02\x02\x02\u0805\u07FA\x03\x02" +
		"\x02\x02\u0805\u0806\x03\x02\x02\x02\u0806\u0807\x03\x02\x02\x02\u0807" +
		"\u0808\x07\x80\x02\x02\u0808\u0147\x03\x02\x02\x02\u0809\u080A\x07\x94" +
		"\x02\x02\u080A\u080F\x05\u014A\xA6\x02\u080B\u080C\x07\x86\x02\x02\u080C" +
		"\u080E\x05\u014A\xA6\x02\u080D\u080B\x03\x02\x02\x02\u080E\u0811\x03\x02" +
		"\x02\x02\u080F\u080D\x03\x02\x02\x02\u080F\u0810\x03\x02\x02\x02\u0810" +
		"\u0812\x03\x02\x02\x02\u0811\u080F\x03\x02\x02\x02\u0812\u0813\x07\x95" +
		"\x02\x02\u0813\u0149\x03\x02\x02\x02\u0814\u0816\x05\u0160\xB1\x02\u0815" +
		"\u0814\x03\x02\x02\x02\u0815\u0816\x03\x02\x02\x02\u0816\u0818\x03\x02" +
		"\x02\x02\u0817\u0819\x05\u014C\xA7\x02\u0818\u0817\x03\x02\x02\x02\u0818" +
		"\u0819\x03\x02\x02\x02\u0819\u081A\x03\x02\x02\x02\u081A\u081B\x05\u01B4" +
		"\xDB\x02\u081B\u014B\x03\x02\x02\x02\u081C\u081D\t\x10\x02\x02\u081D\u014D" +
		"\x03\x02\x02\x02\u081E\u081F\x07\x87\x02\x02\u081F\u0820\x05\xEEx\x02" +
		"\u0820\u014F\x03\x02\x02\x02\u0821\u0825\x07\x7F\x02\x02\u0822\u0824\x05" +
		"\u0152\xAA\x02\u0823\u0822\x03\x02\x02\x02\u0824\u0827\x03\x02\x02\x02" +
		"\u0825\u0823\x03\x02\x02\x02\u0825\u0826\x03\x02\x02\x02\u0826\u0828\x03" +
		"\x02\x02\x02\u0827\u0825\x03\x02\x02\x02\u0828\u0829\x07\x80\x02\x02\u0829" +
		"\u0151\x03\x02\x02\x02\u082A\u082C\x05\u0160\xB1\x02\u082B\u082A\x03\x02" +
		"\x02\x02\u082B\u082C\x03\x02\x02\x02\u082C\u082E\x03\x02\x02\x02\u082D" +
		"\u082F\x07D\x02\x02\u082E\u082D\x03\x02\x02\x02\u082E\u082F\x03\x02\x02" +
		"\x02\u082F\u086F\x03\x02\x02\x02\u0830\u0832\x07i\x02\x02\u0831\u0830" +
		"\x03\x02\x02\x02\u0831\u0832\x03\x02\x02\x02\u0832\u0838\x03\x02\x02\x02" +
		"\u0833\u0839\x07R\x02\x02\u0834\u0835\x07R\x02\x02\u0835\u0839\x07Q\x02" +
		"\x02\u0836\u0837\x07Q\x02\x02\u0837\u0839\x07R\x02\x02\u0838\u0833\x03" +
		"\x02\x02\x02\u0838\u0834\x03\x02\x02\x02\u0838\u0836";
	private static readonly _serializedATNSegment4: string =
		"\x03\x02\x02\x02\u0838\u0839\x03\x02\x02\x02\u0839\u083A\x03\x02\x02\x02" +
		"\u083A\u0856\x05\x06\x04\x02\u083B\u083D\x05\u01B4\xDB\x02\u083C\u083E" +
		"\x05\xE8u\x02\u083D\u083C\x03\x02\x02\x02\u083D\u083E\x03\x02\x02\x02" +
		"\u083E\u083F\x03\x02\x02\x02\u083F\u0841\x07\x83\x02\x02\u0840\u0842\x05" +
		"\u011A\x8E\x02\u0841\u0840\x03\x02\x02\x02\u0841\u0842\x03\x02\x02\x02" +
		"\u0842\u0843\x03\x02\x02\x02\u0843\u0845\x07\x84\x02\x02\u0844\u0846\x05" +
		"\xF0y\x02\u0845\u0844\x03\x02\x02\x02\u0845\u0846\x03\x02\x02\x02\u0846" +
		"\u0847\x03\x02\x02\x02\u0847\u0848\x07\x88\x02\x02\u0848\u0857\x03\x02" +
		"\x02\x02\u0849\u084A\x05\u01B4\xDB\x02\u084A\u084B\x07\x7F\x02\x02\u084B" +
		"\u084C\x05\u0154\xAB\x02\u084C\u084D\x07\x80\x02\x02\u084D\u0857\x03\x02" +
		"\x02\x02\u084E\u084F\x07`\x02\x02\u084F\u0850\x07\x81\x02\x02\u0850\u0851" +
		"\x05\u011A\x8E\x02\u0851\u0852\x07\x82\x02\x02\u0852\u0853\x07\x7F\x02" +
		"\x02\u0853\u0854\x05\u0154\xAB\x02\u0854\u0855\x07\x80\x02\x02\u0855\u0857" +
		"\x03\x02\x02\x02\u0856\u083B\x03\x02\x02\x02\u0856\u0849\x03\x02\x02\x02" +
		"\u0856\u084E\x03\x02\x02\x02\u0857\u0870\x03\x02\x02\x02\u0858\u085A\x07" +
		"i\x02\x02\u0859\u0858\x03\x02\x02\x02\u0859\u085A\x03\x02\x02\x02\u085A" +
		"\u085B\x03\x02\x02\x02\u085B\u085C\x07n\x02\x02\u085C\u085E\x05\u01B4" +
		"\xDB\x02\u085D\u085F\x05\xE8u\x02\u085E\u085D\x03\x02\x02\x02\u085E\u085F" +
		"\x03\x02\x02\x02\u085F\u0860\x03\x02\x02\x02\u0860\u0862\x07\x83\x02\x02" +
		"\u0861\u0863\x05\u011A\x8E\x02\u0862\u0861\x03\x02\x02\x02\u0862\u0863" +
		"\x03\x02\x02\x02\u0863\u0864\x03\x02\x02\x02\u0864\u0866\x07\x84\x02\x02" +
		"\u0865\u0867\x05\xF0y\x02\u0866\u0865\x03\x02\x02\x02\u0866\u0867\x03" +
		"\x02\x02\x02\u0867\u0868\x03\x02\x02\x02\u0868\u0869\x07\x88\x02\x02\u0869" +
		"\u0870\x03\x02\x02\x02\u086A\u086B\x07)\x02\x02\u086B\u086C\x05\x06\x04" +
		"\x02\u086C\u086D\x05\u01B4\xDB\x02\u086D\u086E\x07\x88\x02\x02\u086E\u0870" +
		"\x03\x02\x02\x02\u086F\u0831\x03\x02\x02\x02\u086F\u0859\x03\x02\x02\x02" +
		"\u086F\u086A\x03\x02\x02\x02\u0870\u0153\x03\x02\x02\x02\u0871\u0873\x05" +
		"\u0160\xB1\x02\u0872\u0871\x03\x02\x02\x02\u0872\u0873\x03\x02\x02\x02" +
		"\u0873\u0886\x03\x02\x02\x02\u0874\u0875\x073\x02\x02\u0875\u087B\x07" +
		"\x88\x02\x02\u0876\u0878\x05\u0160\xB1\x02\u0877\u0876\x03\x02\x02\x02" +
		"\u0877\u0878\x03\x02\x02\x02\u0878\u0879\x03\x02\x02\x02\u0879\u087A\x07" +
		"X\x02\x02\u087A\u087C\x07\x88\x02\x02\u087B\u0877\x03\x02\x02\x02\u087B" +
		"\u087C\x03\x02\x02\x02\u087C\u0887\x03\x02\x02\x02\u087D\u087E\x07X\x02" +
		"\x02\u087E\u0884\x07\x88\x02\x02\u087F\u0881\x05\u0160\xB1\x02\u0880\u087F" +
		"\x03\x02\x02\x02\u0880\u0881\x03\x02\x02\x02\u0881\u0882\x03\x02\x02\x02" +
		"\u0882\u0883\x073\x02\x02\u0883\u0885\x07\x88\x02\x02\u0884\u0880\x03" +
		"\x02\x02\x02\u0884\u0885\x03\x02\x02\x02\u0885\u0887\x03\x02\x02\x02\u0886" +
		"\u0874\x03\x02\x02\x02\u0886\u087D\x03\x02\x02\x02\u0887\u0155\x03\x02" +
		"\x02\x02\u0888\u0889\x07\x87\x02\x02\u0889\u088A\x05\x06\x04\x02\u088A" +
		"\u0157\x03\x02\x02\x02\u088B\u0897\x07\x7F\x02\x02\u088C\u0891\x05\u015A" +
		"\xAE\x02\u088D\u088E\x07\x86\x02\x02\u088E\u0890\x05\u015A\xAE\x02\u088F" +
		"\u088D\x03\x02\x02\x02\u0890\u0893\x03\x02\x02\x02\u0891\u088F\x03\x02" +
		"\x02\x02\u0891\u0892\x03\x02\x02\x02\u0892\u0895\x03\x02\x02\x02\u0893" +
		"\u0891\x03\x02\x02\x02\u0894\u0896\x07\x86\x02\x02\u0895\u0894\x03\x02" +
		"\x02\x02\u0895\u0896\x03\x02\x02\x02\u0896\u0898\x03\x02\x02\x02\u0897" +
		"\u088C\x03\x02\x02\x02\u0897\u0898\x03\x02\x02\x02\u0898\u0899\x03\x02" +
		"\x02\x02\u0899\u089A\x07\x80\x02\x02\u089A\u0159\x03\x02\x02\x02\u089B" +
		"\u089D\x05\u0160\xB1\x02\u089C\u089B\x03\x02\x02\x02\u089C\u089D\x03\x02" +
		"\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08A1\x05\u01B4\xDB\x02\u089F" +
		"\u08A0\x07\x93\x02\x02\u08A0\u08A2\x05\x1E\x10\x02\u08A1\u089F\x03\x02" +
		"\x02\x02\u08A1\u08A2\x03\x02\x02\x02\u08A2\u015B\x03\x02\x02\x02\u08A3" +
		"\u08A4\x07\x81\x02\x02\u08A4\u08A5\x05\u015E\xB0\x02\u08A5\u08A6\x07\x87" +
		"\x02\x02\u08A6\u08A8\x05\u0166\xB4\x02\u08A7\u08A9\x07\x86\x02\x02\u08A8" +
		"\u08A7\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9\u08AA\x03\x02" +
		"\x02\x02\u08AA\u08AB\x07\x82\x02\x02\u08AB\u015D\x03\x02\x02\x02\u08AC" +
		"\u08AF\x05\u018E\xC8\x02\u08AD\u08AF\x05\u01B4\xDB\x02\u08AE\u08AC\x03" +
		"\x02\x02\x02\u08AE\u08AD\x03\x02\x02\x02\u08AF\u015F\x03\x02\x02\x02\u08B0" +
		"\u08B2\x05\u0162\xB2\x02\u08B1\u08B0\x03\x02\x02\x02\u08B2\u08B3\x03\x02" +
		"\x02\x02\u08B3\u08B1\x03\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4" +
		"\u0161\x03\x02\x02\x02\u08B5\u08B9\x07\x81\x02\x02\u08B6\u08B7\x05\u0164" +
		"\xB3\x02\u08B7\u08B8\x07\x87\x02\x02\u08B8\u08BA\x03\x02\x02\x02\u08B9" +
		"\u08B6\x03\x02\x02\x02\u08B9\u08BA\x03\x02\x02\x02\u08BA\u08BB\x03\x02" +
		"\x02\x02\u08BB\u08BD\x05\u0166\xB4\x02\u08BC\u08BE\x07\x86\x02\x02\u08BD" +
		"\u08BC\x03\x02\x02\x02\u08BD\u08BE\x03\x02\x02\x02\u08BE\u08BF\x03\x02" +
		"\x02\x02\u08BF\u08C0\x07\x82\x02\x02\u08C0\u0163\x03\x02\x02\x02\u08C1" +
		"\u08C4\x05\u018E\xC8\x02\u08C2\u08C4\x05\u01B4\xDB\x02\u08C3\u08C1\x03" +
		"\x02\x02\x02\u08C3\u08C2\x03\x02\x02\x02\u08C4\u0165\x03\x02\x02\x02\u08C5" +
		"\u08CA\x05\u0168\xB5\x02\u08C6\u08C7\x07\x86\x02\x02\u08C7\u08C9\x05\u0168" +
		"\xB5\x02\u08C8\u08C6\x03\x02\x02\x02\u08C9\u08CC\x03\x02\x02\x02\u08CA" +
		"\u08C8\x03\x02\x02\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB\u0167\x03\x02" +
		"\x02\x02\u08CC\u08CA\x03\x02\x02\x02\u08CD\u08DA\x05\x04\x03\x02\u08CE" +
		"\u08D7\x07\x83\x02\x02\u08CF\u08D4\x05\u016A\xB6\x02\u08D0\u08D1\x07\x86" +
		"\x02\x02\u08D1\u08D3\x05\u016A\xB6\x02\u08D2\u08D0\x03\x02\x02\x02\u08D3" +
		"\u08D6\x03\x02\x02\x02\u08D4\u08D2\x03\x02\x02\x02\u08D4\u08D5\x03\x02" +
		"\x02\x02\u08D5\u08D8\x03\x02\x02\x02\u08D6\u08D4\x03\x02\x02\x02\u08D7" +
		"\u08CF\x03\x02\x02\x02\u08D7\u08D8\x03\x02\x02\x02\u08D8\u08D9\x03\x02" +
		"\x02\x02\u08D9\u08DB\x07\x84\x02\x02\u08DA\u08CE\x03\x02\x02\x02\u08DA" +
		"\u08DB\x03\x02\x02\x02\u08DB\u0169\x03\x02\x02\x02\u08DC\u08DD\x05\u01B4" +
		"\xDB\x02\u08DD\u08DE\x07\x87\x02\x02\u08DE\u08E0\x03\x02\x02\x02\u08DF" +
		"\u08DC\x03\x02\x02\x02\u08DF\u08E0\x03\x02\x02\x02\u08E0\u08E1\x03\x02" +
		"\x02\x02\u08E1\u08E2\x05\x1E\x10\x02\u08E2\u016B\x03\x02\x02\x02\u08E3" +
		"\u08E6\x05\x0E\b\x02\u08E4\u08E6\x05\x16\f\x02\u08E5\u08E3\x03\x02\x02" +
		"\x02\u08E5\u08E4\x03\x02\x02\x02\u08E6\u08EB\x03\x02\x02\x02\u08E7\u08EA" +
		"\x05\u0144\xA3\x02\u08E8\u08EA\x07\x96\x02\x02\u08E9\u08E7\x03\x02\x02" +
		"\x02\u08E9\u08E8\x03\x02\x02\x02\u08EA\u08ED\x03\x02\x02\x02\u08EB\u08E9" +
		"\x03\x02\x02\x02\u08EB\u08EC\x03\x02\x02\x02\u08EC\u08EE\x03\x02\x02\x02" +
		"\u08ED\u08EB\x03\x02\x02\x02\u08EE\u08EF\x07\x8B\x02\x02\u08EF\u08F3\x03" +
		"\x02\x02\x02\u08F0\u08F1\x07n\x02\x02\u08F1\u08F3\x07\x8B\x02\x02\u08F2" +
		"\u08E5\x03\x02\x02\x02\u08F2\u08F0\x03\x02\x02\x02\u08F3\u016D\x03\x02" +
		"\x02\x02\u08F4\u08F9\x05\u0170\xB9\x02\u08F5\u08F6\x07\x86\x02\x02\u08F6" +
		"\u08F8\x05\u0170\xB9\x02\u08F7\u08F5\x03\x02\x02\x02\u08F8\u08FB\x03\x02" +
		"\x02\x02\u08F9\u08F7\x03\x02\x02\x02\u08F9\u08FA\x03\x02\x02\x02\u08FA" +
		"\u016F\x03\x02\x02\x02\u08FB\u08F9\x03\x02\x02\x02\u08FC\u08FD\x05\u01B4" +
		"\xDB\x02\u08FD\u08FE\x07\x93\x02\x02\u08FE\u08FF\x05\u0172\xBA\x02\u08FF" +
		"\u0171\x03\x02\x02\x02\u0900\u0902\x07\x8E\x02\x02\u0901\u0900\x03\x02" +
		"\x02\x02\u0901\u0902\x03\x02\x02\x02\u0902\u0903\x03\x02\x02\x02\u0903" +
		"\u0906\x05\x1E\x10\x02\u0904\u0906\x05\u0176\xBC\x02\u0905\u0901\x03\x02" +
		"\x02\x02\u0905\u0904\x03\x02\x02\x02\u0906\u0173\x03\x02\x02\x02\u0907" +
		"\u0908\x05\u01B4\xDB\x02\u0908\u0909\x07\x81\x02\x02\u0909\u090A\x05\x1E" +
		"\x10\x02\u090A\u090B\x07\x82\x02\x02\u090B\u0175\x03\x02\x02\x02\u090C" +
		"\u090D\x07[\x02\x02\u090D\u090E\x05\x06\x04\x02\u090E\u090F\x07\x81\x02" +
		"\x02\u090F\u0910\x05\x1E\x10\x02\u0910\u0911\x07\x82\x02\x02\u0911\u092A" +
		"\x03\x02\x02\x02\u0912\u0914\x07[\x02\x02\u0913\u0915\x05\x06\x04\x02" +
		"\u0914\u0913\x03\x02\x02\x02\u0914\u0915\x03\x02\x02\x02\u0915\u0916\x03" +
		"\x02\x02\x02\u0916\u0918\x07\x81\x02\x02\u0917\u0919\x05\x1E\x10\x02\u0918" +
		"\u0917\x03\x02\x02\x02\u0918\u0919\x03\x02\x02\x02\u0919\u091A\x03\x02" +
		"\x02\x02\u091A\u091B\x07\x82\x02\x02\u091B\u091C\x07\x7F\x02\x02\u091C" +
		"\u0921\x05\x1E\x10\x02\u091D\u091E\x07\x86\x02\x02\u091E\u0920\x05\x1E" +
		"\x10\x02\u091F\u091D\x03\x02\x02\x02\u0920\u0923\x03\x02\x02\x02\u0921" +
		"\u091F\x03\x02\x02\x02\u0921\u0922\x03\x02\x02\x02\u0922\u0925\x03\x02" +
		"\x02\x02\u0923\u0921\x03\x02\x02\x02\u0924\u0926\x07\x86\x02\x02\u0925" +
		"\u0924\x03\x02\x02\x02\u0925\u0926\x03\x02\x02\x02\u0926\u0927\x03\x02" +
		"\x02\x02\u0927\u0928\x07\x80\x02\x02\u0928\u092A\x03\x02\x02\x02\u0929" +
		"\u090C\x03\x02\x02\x02\u0929\u0912\x03\x02\x02\x02\u092A\u0177\x03\x02" +
		"\x02\x02\u092B\u092C\x07\x93\x02\x02\u092C\u092D\x07\x95\x02\x02\u092D" +
		"\u092E\x06\xBD\x03\x03\u092E\u0179\x03\x02\x02\x02\u092F\u0930\x07\x95" +
		"\x02\x02\u0930\u0931\x07\x95\x02\x02\u0931\u0932\x06\xBE\x04\x03\u0932" +
		"\u017B\x03\x02\x02\x02\u0933\u0934\x07\x95\x02\x02\u0934\u0935\x07\xA1" +
		"\x02\x02\u0935\u0936\x06\xBF\x05\x03\u0936\u017D\x03\x02\x02\x02\u0937" +
		"\u0940\x05\u0180\xC1\x02\u0938\u0940\x05\u0182\xC2\x02\u0939\u0940\x07" +
		"v\x02\x02\u093A\u0940\x07w\x02\x02\u093B\u0940\x07x\x02\x02\u093C\u0940" +
		"\x07y\x02\x02\u093D\u0940\x07z\x02\x02\u093E\u0940\x07E\x02\x02\u093F" +
		"\u0937\x03\x02\x02\x02\u093F\u0938\x03\x02\x02\x02\u093F\u0939\x03\x02" +
		"\x02\x02\u093F\u093A\x03\x02\x02\x02\u093F\u093B\x03\x02\x02\x02\u093F" +
		"\u093C\x03\x02\x02\x02\u093F\u093D\x03\x02\x02\x02\u093F\u093E\x03\x02" +
		"\x02\x02\u0940\u017F\x03\x02\x02\x02\u0941\u0942\t\x11\x02\x02\u0942\u0181" +
		"\x03\x02\x02\x02\u0943\u0948\x05\u0184\xC3\x02\u0944\u0948\x05\u0186\xC4" +
		"\x02\u0945\u0948\x07{\x02\x02\u0946\u0948\x07|\x02\x02\u0947\u0943\x03" +
		"\x02\x02\x02\u0947\u0944\x03\x02\x02\x02\u0947\u0945\x03\x02\x02\x02\u0947" +
		"\u0946\x03\x02\x02\x02\u0948\u0183\x03\x02\x02\x02\u0949\u094D\x07}\x02" +
		"\x02\u094A\u094C\x05\u0188\xC5\x02\u094B\u094A\x03\x02\x02\x02\u094C\u094F" +
		"\x03\x02\x02\x02\u094D\u094B\x03\x02\x02\x02\u094D\u094E\x03\x02\x02\x02" +
		"\u094E\u0950\x03\x02\x02\x02\u094F\u094D\x03\x02\x02\x02\u0950\u0951\x07" +
		"\xB2\x02\x02\u0951\u0185\x03\x02\x02\x02\u0952\u0956\x07~\x02\x02\u0953" +
		"\u0955\x05\u018A\xC6\x02\u0954\u0953\x03\x02\x02\x02\u0955\u0958\x03\x02" +
		"\x02\x02\u0956\u0954\x03\x02\x02\x02\u0956\u0957\x03\x02\x02\x02\u0957" +
		"\u0959\x03\x02\x02\x02\u0958\u0956\x03\x02\x02\x02\u0959\u095A\x07\xB2" +
		"\x02\x02\u095A\u0187\x03\x02\x02\x02\u095B\u0960\x05\u018C\xC7\x02\u095C" +
		"\u0960\x07\xAE\x02\x02\u095D\u0960\x07\xB0\x02\x02\u095E\u0960\x07\xB3" +
		"\x02\x02\u095F\u095B\x03\x02\x02\x02\u095F\u095C\x03\x02\x02\x02\u095F" +
		"\u095D\x03\x02\x02\x02\u095F\u095E\x03\x02\x02\x02\u0960\u0189\x03\x02" +
		"\x02\x02\u0961\u0966\x05\u018C\xC7\x02\u0962\u0966\x07\xAE\x02\x02\u0963" +
		"\u0966\x07\xB1\x02\x02\u0964\u0966\x07\xB4\x02\x02\u0965\u0961\x03\x02" +
		"\x02\x02\u0965\u0962\x03\x02\x02\x02\u0965\u0963\x03\x02\x02\x02\u0965" +
		"\u0964\x03\x02\x02\x02\u0966\u018B\x03\x02\x02\x02\u0967\u096C\x05\x1E" +
		"\x10\x02\u0968\u0969\x07\x86\x02\x02\u0969\u096B\x05\x1E\x10\x02\u096A" +
		"\u0968\x03\x02\x02\x02\u096B\u096E\x03\x02\x02\x02\u096C\u096A\x03\x02" +
		"\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u0975\x03\x02\x02\x02\u096E" +
		"\u096C\x03\x02\x02\x02\u096F\u0971\x07\x87\x02\x02\u0970\u0972\x07\xB6" +
		"\x02\x02\u0971\u0970\x03\x02\x02\x02\u0972\u0973\x03\x02\x02\x02\u0973" +
		"\u0971\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974\u0976\x03\x02" +
		"\x02\x02\u0975\u096F\x03\x02\x02\x02\u0975\u0976\x03\x02\x02\x02\u0976" +
		"\u018D\x03\x02\x02\x02\u0977\u0978\t\x12\x02\x02\u0978\u018F\x03\x02\x02" +
		"\x02\u0979\u097A\x07\x1C\x02\x02\u097A\u097C\x05\u01B4\xDB\x02\u097B\u097D" +
		"\x05\xE8u\x02\u097C\u097B\x03\x02\x02\x02\u097C\u097D\x03\x02\x02\x02" +
		"\u097D\u097F\x03\x02\x02\x02\u097E\u0980\x05\xECw\x02\u097F\u097E\x03" +
		"\x02\x02\x02\u097F\u0980\x03\x02\x02\x02\u0980\u0982\x03\x02\x02\x02\u0981" +
		"\u0983\x05\xF0y\x02\u0982\u0981\x03\x02\x02\x02\u0982\u0983\x03\x02\x02" +
		"\x02\u0983\u0984\x03\x02\x02\x02\u0984\u0986\x05\xFC\x7F\x02\u0985\u0987" +
		"\x07\x88\x02\x02\u0986\u0985\x03\x02\x02\x02\u0986\u0987\x03\x02\x02\x02" +
		"\u0987\u0191\x03\x02\x02\x02\u0988\u098A\t\x13\x02\x02\u0989\u0988\x03" +
		"\x02\x02\x02\u0989\u098A\x03\x02\x02\x02\u098A\u098B\x03\x02\x02\x02\u098B" +
		"\u098C\x07^\x02\x02\u098C\u098E\x05\u01B4\xDB\x02\u098D\u098F\x05\xE8" +
		"u\x02\u098E\u098D\x03\x02\x02\x02\u098E\u098F\x03\x02\x02\x02\u098F\u0991" +
		"\x03\x02\x02\x02\u0990\u0992\x05\u013C\x9F\x02\u0991\u0990\x03\x02\x02" +
		"\x02\u0991\u0992\x03\x02\x02\x02\u0992\u0994\x03\x02\x02\x02\u0993\u0995" +
		"\x05\xF0y\x02\u0994\u0993\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02" +
		"\u0995\u0996\x03\x02\x02\x02\u0996\u0998\x05\u013E\xA0\x02\u0997\u0999" +
		"\x07\x88\x02\x02\u0998\u0997\x03\x02\x02\x02\u0998\u0999\x03\x02\x02\x02" +
		"\u0999\u0193\x03\x02\x02\x02\u099A\u099B\x07:\x02\x02\u099B\u099D\x05" +
		"\u01B4\xDB\x02\u099C\u099E\x05\u0148\xA5\x02\u099D\u099C\x03\x02\x02\x02" +
		"\u099D\u099E\x03\x02\x02\x02\u099E\u09A0\x03\x02\x02\x02\u099F\u09A1\x05" +
		"\u014E\xA8\x02\u09A0\u099F\x03\x02\x02\x02\u09A0\u09A1\x03\x02\x02\x02" +
		"\u09A1\u09A3\x03\x02\x02\x02\u09A2\u09A4\x05\xF0y\x02\u09A3\u09A2\x03" +
		"\x02\x02\x02\u09A3\u09A4\x03\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5" +
		"\u09A7\x05\xFC\x7F\x02\u09A6\u09A8\x07\x88\x02\x02\u09A7\u09A6\x03\x02" +
		"\x02\x02\u09A7\u09A8\x03\x02\x02\x02\u09A8\u0195\x03\x02\x02\x02\u09A9" +
		"\u09AA\x07\'\x02\x02\u09AA\u09AC\x05\u01B4\xDB\x02\u09AB\u09AD\x05\u0156" +
		"\xAC\x02\u09AC\u09AB\x03\x02\x02\x02\u09AC\u09AD\x03\x02\x02\x02\u09AD" +
		"\u09AE\x03\x02\x02\x02\u09AE\u09B0\x05\u0158\xAD\x02\u09AF\u09B1\x07\x88" +
		"\x02\x02\u09B0\u09AF\x03\x02\x02\x02\u09B0\u09B1\x03\x02\x02\x02\u09B1" +
		"\u0197\x03\x02\x02\x02\u09B2\u09B3\x07!\x02\x02\u09B3\u09B4\x05\u0114" +
		"\x8B\x02\u09B4\u09B6\x05\u01B4\xDB\x02\u09B5\u09B7\x05\u0148\xA5\x02\u09B6" +
		"\u09B5\x03\x02\x02\x02\u09B6\u09B7\x03\x02\x02\x02\u09B7\u09B8\x03\x02" +
		"\x02\x02\u09B8\u09BA\x07\x83\x02\x02\u09B9\u09BB\x05\u011A\x8E\x02\u09BA" +
		"\u09B9\x03\x02\x02\x02\u09BA\u09BB\x03\x02\x02\x02\u09BB\u09BC\x03\x02" +
		"\x02\x02\u09BC\u09BE\x07\x84\x02\x02\u09BD\u09BF\x05\xF0y\x02\u09BE\u09BD" +
		"\x03\x02\x02\x02\u09BE\u09BF\x03\x02\x02\x02\u09BF\u09C0\x03\x02\x02\x02" +
		"\u09C0\u09C1\x07\x88\x02\x02\u09C1\u0199\x03\x02\x02\x02\u09C2\u09C3\x07" +
		")\x02\x02\u09C3\u09CC\x05\x06\x04\x02\u09C4\u09C5\x05\u010E\x88\x02\u09C5" +
		"\u09C6\x07\x88\x02\x02\u09C6\u09CD\x03\x02\x02\x02\u09C7\u09C8\x05\u0116" +
		"\x8C\x02\u09C8\u09C9\x07\x7F\x02\x02\u09C9\u09CA\x05\u012E\x98\x02\u09CA" +
		"\u09CB\x07\x80\x02\x02\u09CB\u09CD\x03\x02\x02\x02\u09CC\u09C4\x03\x02" +
		"\x02\x02\u09CC\u09C7\x03\x02\x02\x02\u09CD\u019B\x03\x02\x02\x02\u09CE" +
		"\u09CF\x05\u010E\x88\x02\u09CF\u09D0\x07\x88\x02\x02\u09D0\u019D\x03\x02" +
		"\x02\x02\u09D1\u09DF\x05\u0116\x8C\x02\u09D2\u09D3\x07\x7F\x02\x02\u09D3" +
		"\u09D4\x05\u0124\x93\x02\u09D4\u09D9\x07\x80\x02\x02\u09D5\u09D6\x07\x93" +
		"\x02\x02\u09D6\u09D7\x05\u0112\x8A\x02\u09D7\u09D8\x07\x88\x02\x02\u09D8" +
		"\u09DA\x03\x02\x02\x02\u09D9\u09D5\x03\x02\x02\x02\u09D9\u09DA\x03\x02" +
		"\x02\x02\u09DA\u09E0\x03\x02\x02\x02\u09DB\u09DC\x05\u0178\xBD\x02\u09DC" +
		"\u09DD\x05L\'\x02\u09DD\u09DE\x07\x88\x02\x02\u09DE\u09E0\x03\x02\x02" +
		"\x02\u09DF\u09D2\x03\x02\x02\x02\u09DF\u09DB\x03\x02\x02\x02\u09E0\u019F" +
		"\x03\x02\x02\x02\u09E1\u09E2\x07\x1D\x02\x02\u09E2\u09E3\x05\x06\x04\x02" +
		"\u09E3\u09E4\x05\u010A\x86\x02\u09E4\u09E5\x07\x88\x02\x02\u09E5\u01A1" +
		"\x03\x02\x02\x02\u09E6\u09E7\x07`\x02\x02\u09E7\u09E8\x07\x81\x02\x02" +
		"\u09E8\u09E9\x05\u011A\x8E\x02\u09E9\u09F2\x07\x82\x02\x02\u09EA\u09EB" +
		"\x07\x7F\x02\x02\u09EB\u09EC\x05\u0124\x93\x02\u09EC\u09ED\x07\x80\x02" +
		"\x02\u09ED\u09F3\x03\x02\x02\x02\u09EE\u09EF\x05\u0178\xBD\x02\u09EF\u09F0" +
		"\x05L\'\x02\u09F0\u09F1\x07\x88\x02\x02\u09F1\u09F3\x03\x02\x02\x02\u09F2" +
		"\u09EA\x03\x02\x02\x02\u09F2\u09EE\x03\x02\x02\x02\u09F3\u01A3\x03\x02" +
		"\x02\x02\u09F4\u09F5\x07\x92\x02\x02\u09F5\u09F6\x05\u01B4\xDB\x02\u09F6" +
		"\u09F7\x07\x83\x02\x02\u09F7\u09F8\x07\x84\x02\x02\u09F8\u09F9\x05\u013A" +
		"\x9E\x02\u09F9\u01A5\x03\x02\x02\x02\u09FA\u09FB\x05\u01B4\xDB\x02\u09FB" +
		"\u09FD\x07\x83\x02\x02\u09FC\u09FE\x05\u011A\x8E\x02\u09FD\u09FC\x03\x02" +
		"\x02\x02\u09FD\u09FE\x03\x02\x02\x02\u09FE\u09FF\x03\x02\x02\x02\u09FF" +
		"\u0A01\x07\x84\x02\x02\u0A00\u0A02\x05\u0138\x9D\x02\u0A01\u0A00\x03\x02" +
		"\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02\u0A03\x03\x02\x02\x02\u0A03" +
		"\u0A04\x05\u013A\x9E\x02\u0A04\u01A7\x03\x02\x02\x02\u0A05\u0A07\x05\u01AA" +
		"\xD6\x02\u0A06\u0A08\x05\xE8u\x02\u0A07\u0A06\x03\x02\x02\x02\u0A07\u0A08" +
		"\x03\x02\x02\x02\u0A08\u0A09\x03\x02\x02\x02\u0A09\u0A0B\x07\x83\x02\x02" +
		"\u0A0A\u0A0C\x05\u011A\x8E\x02\u0A0B\u0A0A\x03\x02\x02\x02\u0A0B\u0A0C" +
		"\x03\x02\x02\x02\u0A0C\u0A0D\x03\x02\x02\x02\u0A0D\u0A0F\x07\x84\x02\x02" +
		"\u0A0E\u0A10\x05\xF0y\x02\u0A0F\u0A0E\x03\x02\x02\x02\u0A0F\u0A10\x03" +
		"\x02\x02\x02\u0A10\u0A16\x03\x02\x02\x02\u0A11\u0A17\x05\u0118\x8D\x02" +
		"\u0A12\u0A13\x05\u0178\xBD\x02\u0A13\u0A14\x05L\'\x02\u0A14\u0A15\x07" +
		"\x88\x02\x02\u0A15\u0A17\x03\x02\x02\x02\u0A16\u0A11\x03\x02\x02\x02\u0A16" +
		"\u0A12\x03\x02\x02\x02\u0A17\u01A9\x03\x02\x02\x02\u0A18\u0A1E\x05\u01B4" +
		"\xDB\x02\u0A19\u0A1A\x05\u01B4\xDB\x02\u0A1A\u0A1B\x07\x97\x02\x02\u0A1B" +
		"\u0A1C\x05\u01B4\xDB\x02\u0A1C\u0A1E\x03\x02\x02\x02\u0A1D\u0A18\x03\x02" +
		"\x02\x02\u0A1D\u0A19\x03\x02\x02\x02\u0A1E\u0A26\x03\x02\x02\x02\u0A1F" +
		"\u0A21\x05\x18\r\x02\u0A20\u0A1F\x03\x02\x02\x02\u0A20\u0A21\x03\x02\x02" +
		"\x02\u0A21\u0A22\x03\x02\x02\x02\u0A22\u0A23\x07\x85\x02\x02\u0A23\u0A25" +
		"\x05\u01B4\xDB\x02\u0A24\u0A20\x03\x02\x02\x02\u0A25\u0A28\x03\x02\x02" +
		"\x02\u0A26\u0A24\x03\x02\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\u01AB" +
		"\x03\x02\x02\x02\u0A28\u0A26\x03\x02\x02\x02\u0A29\u0A2A\x07H\x02\x02" +
		"\u0A2A\u0A2B\x05\u0134\x9B\x02\u0A2B\u0A2D\x07\x83\x02\x02\u0A2C\u0A2E" +
		"\x078\x02\x02\u0A2D\u0A2C\x03\x02\x02\x02\u0A2D\u0A2E\x03\x02\x02\x02" +
		"\u0A2E\u0A2F\x03\x02\x02\x02\u0A2F\u0A35\x05\u01AE\xD8\x02\u0A30\u0A32" +
		"\x07\x86\x02\x02\u0A31\u0A33\x078\x02\x02\u0A32\u0A31\x03\x02\x02\x02" +
		"\u0A32\u0A33\x03\x02\x02\x02\u0A33\u0A34\x03\x02\x02\x02\u0A34\u0A36\x05" +
		"\u01AE\xD8\x02\u0A35\u0A30\x03\x02\x02\x02\u0A35\u0A36\x03\x02\x02\x02" +
		"\u0A36\u0A37\x03\x02\x02\x02\u0A37\u0A3D\x07\x84\x02\x02\u0A38\u0A3E\x05" +
		"\u013A\x9E\x02\u0A39\u0A3A\x05\u0178\xBD\x02\u0A3A\u0A3B\x05L\'\x02\u0A3B" +
		"\u0A3C\x07\x88\x02\x02\u0A3C\u0A3E\x03\x02\x02\x02\u0A3D\u0A38\x03\x02" +
		"\x02\x02\u0A3D\u0A39\x03\x02\x02\x02\u0A3E\u01AD\x03\x02\x02\x02\u0A3F" +
		"\u0A40\x05\x06\x04\x02\u0A40\u0A43\x05\u01B4\xDB\x02\u0A41\u0A42\x07\x93" +
		"\x02\x02\u0A42\u0A44\x05\x1E\x10\x02\u0A43\u0A41\x03\x02\x02\x02\u0A43" +
		"\u0A44\x03\x02\x02\x02\u0A44\u01AF\x03\x02\x02\x02\u0A45\u0A47\x07\x83" +
		"\x02\x02\u0A46\u0A48\x05\x1A\x0E\x02\u0A47\u0A46\x03\x02\x02\x02\u0A47" +
		"\u0A48\x03\x02\x02\x02\u0A48\u0A49\x03\x02\x02\x02\u0A49\u0A4A\x07\x84" +
		"\x02\x02\u0A4A\u01B1\x03\x02\x02\x02\u0A4B\u0A4D\x07\x83\x02\x02\u0A4C" +
		"\u0A4E\x05\x1A\x0E\x02\u0A4D\u0A4C\x03\x02\x02\x02\u0A4D\u0A4E\x03\x02" +
		"\x02\x02\u0A4E\u0A4F\x03\x02\x02\x02\u0A4F\u0A51\x07\x84\x02\x02\u0A50" +
		"\u0A52\x05Z.\x02\u0A51\u0A50\x03\x02\x02\x02\u0A51\u0A52\x03\x02\x02\x02" +
		"\u0A52\u01B3\x03\x02\x02\x02\u0A53\u0A54\t\x14\x02\x02\u0A54\u01B5\x03" +
		"\x02\x02\x02\u015A\u01B7\u01BA\u01BD\u01C2\u01C6\u01CC\u01CF\u01D4\u01D8" +
		"\u01DF\u01E1\u01E9\u01F1\u01F7\u01FB\u0200\u020A\u0212\u021C\u0222\u0225" +
		"\u0229\u0231\u0236\u0240\u024D\u0255\u025B\u025D\u0264\u026C\u0274\u027C" +
		"\u0284\u028C\u0296\u0298\u029E\u02A3\u02AB\u02B3\u02BB\u02BD\u02C0\u02C7" +
		"\u02CC\u02D3\u02D7\u02D9\u02F5\u02F9\u02FE\u0302\u030A\u030D\u0312\u0316" +
		"\u031A\u0320\u032E\u0334\u0340\u0344\u0349\u034D\u0353\u035B\u0364\u0376" +
		"\u0379\u037E\u0381\u0390\u0396\u039A\u03A0\u03A5\u03A8\u03B0\u03B8\u03C3" +
		"\u03C8\u03CD\u03CF\u03D8\u03E0\u03E7\u03EF\u03F3\u03FC\u0401\u0403\u040C" +
		"\u0414\u0418\u041D\u041F\u0424\u0428\u042F\u0437\u0439\u043D\u0440\u0443" +
		"\u044B\u0455\u0466\u046D\u0471\u047B\u0480\u0487\u0490\u0495\u049C\u04A8" +
		"\u04B3\u04BB\u04C0\u04C9\u04D2\u04DB\u04E1\u04E6\u04EA\u04EE\u04F2\u04F6" +
		"\u04FD\u0505\u0512\u051C\u0532\u0536\u053A\u053F\u0553\u0558\u055D\u0564" +
		"\u0567\u057D\u0589\u058D\u0595\u059F\u05A6\u05AA\u05AF\u05B2\u05B7\u05BF" +
		"\u05C4\u05CB\u05D1\u05D9\u05E1\u05E4\u05EB\u05F2\u05F6\u05F9\u05FF\u0603" +
		"\u0609\u0617\u061D\u0624\u0629\u062C\u062F\u0636\u0640\u0651\u0656\u065A" +
		"\u065D\u0660\u0667\u066D\u0675\u067B\u0685\u068D\u0693\u069E\u06A2\u06A4" +
		"\u06A9\u06AD\u06B4\u06BD\u06C4\u06C7\u06CA\u06CE\u06D3\u06E0\u06EA\u06F1" +
		"\u06FD\u0704\u0710\u0716\u071A\u071E\u0724\u072A\u072C\u0733\u0737\u073A" +
		"\u073E\u0748\u074B\u0752\u0755\u075A\u075F\u0761\u0764\u0767\u076D\u0770" +
		"\u077C\u0780\u0783\u078D\u0790\u0796\u07B1\u07BE\u07C4\u07CD\u07D3\u07D6" +
		"\u07DE\u07E2\u07E8\u07EE\u07F4\u07FF\u0803\u0805\u080F\u0815\u0818\u0825" +
		"\u082B\u082E\u0831\u0838\u083D\u0841\u0845\u0856\u0859\u085E\u0862\u0866" +
		"\u086F\u0872\u0877\u087B\u0880\u0884\u0886\u0891\u0895\u0897\u089C\u08A1" +
		"\u08A8\u08AE\u08B3\u08B9\u08BD\u08C3\u08CA\u08D4\u08D7\u08DA\u08DF\u08E5" +
		"\u08E9\u08EB\u08F2\u08F9\u0901\u0905\u0914\u0918\u0921\u0925\u0929\u093F" +
		"\u0947\u094D\u0956\u095F\u0965\u096C\u0973\u0975\u097C\u097F\u0982\u0986" +
		"\u0989\u098E\u0991\u0994\u0998\u099D\u09A0\u09A3\u09A7\u09AC\u09B0\u09B6" +
		"\u09BA\u09BE\u09CC\u09D9\u09DF\u09F2\u09FD\u0A01\u0A07\u0A0B\u0A0F\u0A16" +
		"\u0A1D\u0A20\u0A26\u0A2D\u0A32\u0A35\u0A3D\u0A43\u0A47\u0A4D\u0A51";
	public static readonly _serializedATN: string = Utils.join(
		[
			CSharpParser._serializedATNSegment0,
			CSharpParser._serializedATNSegment1,
			CSharpParser._serializedATNSegment2,
			CSharpParser._serializedATNSegment3,
			CSharpParser._serializedATNSegment4,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CSharpParser.__ATN) {
			CSharpParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CSharpParser._serializedATN));
		}

		return CSharpParser.__ATN;
	}

}

export class Compilation_unitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(CSharpParser.EOF, 0); }
	public BYTE_ORDER_MARK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE_ORDER_MARK, 0); }
	public extern_alias_directives(): Extern_alias_directivesContext | undefined {
		return this.tryGetRuleContext(0, Extern_alias_directivesContext);
	}
	public using_directives(): Using_directivesContext | undefined {
		return this.tryGetRuleContext(0, Using_directivesContext);
	}
	public global_attribute_section(): Global_attribute_sectionContext[];
	public global_attribute_section(i: number): Global_attribute_sectionContext;
	public global_attribute_section(i?: number): Global_attribute_sectionContext | Global_attribute_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Global_attribute_sectionContext);
		} else {
			return this.getRuleContext(i, Global_attribute_sectionContext);
		}
	}
	public namespace_member_declarations(): Namespace_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Namespace_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_compilation_unit; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCompilation_unit) {
			listener.enterCompilation_unit(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCompilation_unit) {
			listener.exitCompilation_unit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCompilation_unit) {
			return visitor.visitCompilation_unit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_or_type_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public qualified_alias_member(): Qualified_alias_memberContext | undefined {
		return this.tryGetRuleContext(0, Qualified_alias_memberContext);
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public type_argument_list(): Type_argument_listContext[];
	public type_argument_list(i: number): Type_argument_listContext;
	public type_argument_list(i?: number): Type_argument_listContext | Type_argument_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_argument_listContext);
		} else {
			return this.getRuleContext(i, Type_argument_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_or_type_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_or_type_name) {
			listener.enterNamespace_or_type_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_or_type_name) {
			listener.exitNamespace_or_type_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace_or_type_name) {
			return visitor.visitNamespace_or_type_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_Context extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_) {
			listener.enterType_(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_) {
			listener.exitType_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_) {
			return visitor.visitType_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Base_typeContext extends ParserRuleContext {
	public simple_type(): Simple_typeContext | undefined {
		return this.tryGetRuleContext(0, Simple_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	public tuple_type(): Tuple_typeContext | undefined {
		return this.tryGetRuleContext(0, Tuple_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_base_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBase_type) {
			listener.enterBase_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBase_type) {
			listener.exitBase_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBase_type) {
			return visitor.visitBase_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_typeContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public tuple_element(): Tuple_elementContext[];
	public tuple_element(i: number): Tuple_elementContext;
	public tuple_element(i?: number): Tuple_elementContext | Tuple_elementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Tuple_elementContext);
		} else {
			return this.getRuleContext(i, Tuple_elementContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_tuple_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTuple_type) {
			listener.enterTuple_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTuple_type) {
			listener.exitTuple_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTuple_type) {
			return visitor.visitTuple_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Tuple_elementContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_tuple_element; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTuple_element) {
			listener.enterTuple_element(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTuple_element) {
			listener.exitTuple_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTuple_element) {
			return visitor.visitTuple_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_typeContext extends ParserRuleContext {
	public numeric_type(): Numeric_typeContext | undefined {
		return this.tryGetRuleContext(0, Numeric_typeContext);
	}
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_simple_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSimple_type) {
			listener.enterSimple_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSimple_type) {
			listener.exitSimple_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSimple_type) {
			return visitor.visitSimple_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Numeric_typeContext extends ParserRuleContext {
	public integral_type(): Integral_typeContext | undefined {
		return this.tryGetRuleContext(0, Integral_typeContext);
	}
	public floating_point_type(): Floating_point_typeContext | undefined {
		return this.tryGetRuleContext(0, Floating_point_typeContext);
	}
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_numeric_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNumeric_type) {
			listener.enterNumeric_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNumeric_type) {
			listener.exitNumeric_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNumeric_type) {
			return visitor.visitNumeric_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Integral_typeContext extends ParserRuleContext {
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_integral_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIntegral_type) {
			listener.enterIntegral_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIntegral_type) {
			listener.exitIntegral_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIntegral_type) {
			return visitor.visitIntegral_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Floating_point_typeContext extends ParserRuleContext {
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_floating_point_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFloating_point_type) {
			listener.enterFloating_point_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFloating_point_type) {
			listener.exitFloating_point_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFloating_point_type) {
			return visitor.visitFloating_point_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_typeContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Namespace_or_type_nameContext);
	}
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DYNAMIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_type) {
			listener.enterClass_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_type) {
			listener.exitClass_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_type) {
			return visitor.visitClass_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_argument_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_argument_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_argument_list) {
			listener.enterType_argument_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_argument_list) {
			listener.exitType_argument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_argument_list) {
			return visitor.visitType_argument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_argument_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArgument_list) {
			listener.enterArgument_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArgument_list) {
			listener.exitArgument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitArgument_list) {
			return visitor.visitArgument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	public _refout!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArgument) {
			listener.enterArgument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArgument) {
			listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public non_assignment_expression(): Non_assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Non_assignment_expressionContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Non_assignment_expressionContext extends ParserRuleContext {
	public lambda_expression(): Lambda_expressionContext | undefined {
		return this.tryGetRuleContext(0, Lambda_expressionContext);
	}
	public query_expression(): Query_expressionContext | undefined {
		return this.tryGetRuleContext(0, Query_expressionContext);
	}
	public conditional_expression(): Conditional_expressionContext | undefined {
		return this.tryGetRuleContext(0, Conditional_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_non_assignment_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNon_assignment_expression) {
			listener.enterNon_assignment_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNon_assignment_expression) {
			listener.exitNon_assignment_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNon_assignment_expression) {
			return visitor.visitNon_assignment_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public unary_expression(): Unary_expressionContext {
		return this.getRuleContext(0, Unary_expressionContext);
	}
	public assignment_operator(): Assignment_operatorContext | undefined {
		return this.tryGetRuleContext(0, Assignment_operatorContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public OP_COALESCING_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_COALESCING_ASSIGNMENT, 0); }
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_assignment; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Assignment_operatorContext extends ParserRuleContext {
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public OP_ADD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_ADD_ASSIGNMENT, 0); }
	public OP_SUB_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_SUB_ASSIGNMENT, 0); }
	public OP_MULT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_MULT_ASSIGNMENT, 0); }
	public OP_DIV_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DIV_ASSIGNMENT, 0); }
	public OP_MOD_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_MOD_ASSIGNMENT, 0); }
	public OP_AND_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_AND_ASSIGNMENT, 0); }
	public OP_OR_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_OR_ASSIGNMENT, 0); }
	public OP_XOR_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_XOR_ASSIGNMENT, 0); }
	public OP_LEFT_SHIFT_ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LEFT_SHIFT_ASSIGNMENT, 0); }
	public right_shift_assignment(): Right_shift_assignmentContext | undefined {
		return this.tryGetRuleContext(0, Right_shift_assignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_assignment_operator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAssignment_operator) {
			listener.enterAssignment_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAssignment_operator) {
			listener.exitAssignment_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAssignment_operator) {
			return visitor.visitAssignment_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_expressionContext extends ParserRuleContext {
	public null_coalescing_expression(): Null_coalescing_expressionContext {
		return this.getRuleContext(0, Null_coalescing_expressionContext);
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public throwable_expression(): Throwable_expressionContext[];
	public throwable_expression(i: number): Throwable_expressionContext;
	public throwable_expression(i?: number): Throwable_expressionContext | Throwable_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Throwable_expressionContext);
		} else {
			return this.getRuleContext(i, Throwable_expressionContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_expression) {
			listener.enterConditional_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_expression) {
			listener.exitConditional_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConditional_expression) {
			return visitor.visitConditional_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Null_coalescing_expressionContext extends ParserRuleContext {
	public conditional_or_expression(): Conditional_or_expressionContext {
		return this.getRuleContext(0, Conditional_or_expressionContext);
	}
	public OP_COALESCING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_COALESCING, 0); }
	public null_coalescing_expression(): Null_coalescing_expressionContext | undefined {
		return this.tryGetRuleContext(0, Null_coalescing_expressionContext);
	}
	public throw_expression(): Throw_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throw_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_null_coalescing_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNull_coalescing_expression) {
			listener.enterNull_coalescing_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNull_coalescing_expression) {
			listener.exitNull_coalescing_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNull_coalescing_expression) {
			return visitor.visitNull_coalescing_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_or_expressionContext extends ParserRuleContext {
	public conditional_and_expression(): Conditional_and_expressionContext[];
	public conditional_and_expression(i: number): Conditional_and_expressionContext;
	public conditional_and_expression(i?: number): Conditional_and_expressionContext | Conditional_and_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Conditional_and_expressionContext);
		} else {
			return this.getRuleContext(i, Conditional_and_expressionContext);
		}
	}
	public OP_OR(): TerminalNode[];
	public OP_OR(i: number): TerminalNode;
	public OP_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_OR);
		} else {
			return this.getToken(CSharpParser.OP_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_or_expression) {
			listener.enterConditional_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_or_expression) {
			listener.exitConditional_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConditional_or_expression) {
			return visitor.visitConditional_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conditional_and_expressionContext extends ParserRuleContext {
	public inclusive_or_expression(): Inclusive_or_expressionContext[];
	public inclusive_or_expression(i: number): Inclusive_or_expressionContext;
	public inclusive_or_expression(i?: number): Inclusive_or_expressionContext | Inclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Inclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Inclusive_or_expressionContext);
		}
	}
	public OP_AND(): TerminalNode[];
	public OP_AND(i: number): TerminalNode;
	public OP_AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_AND);
		} else {
			return this.getToken(CSharpParser.OP_AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conditional_and_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConditional_and_expression) {
			listener.enterConditional_and_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConditional_and_expression) {
			listener.exitConditional_and_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConditional_and_expression) {
			return visitor.visitConditional_and_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inclusive_or_expressionContext extends ParserRuleContext {
	public exclusive_or_expression(): Exclusive_or_expressionContext[];
	public exclusive_or_expression(i: number): Exclusive_or_expressionContext;
	public exclusive_or_expression(i?: number): Exclusive_or_expressionContext | Exclusive_or_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Exclusive_or_expressionContext);
		} else {
			return this.getRuleContext(i, Exclusive_or_expressionContext);
		}
	}
	public BITWISE_OR(): TerminalNode[];
	public BITWISE_OR(i: number): TerminalNode;
	public BITWISE_OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.BITWISE_OR);
		} else {
			return this.getToken(CSharpParser.BITWISE_OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_inclusive_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInclusive_or_expression) {
			listener.enterInclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInclusive_or_expression) {
			listener.exitInclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInclusive_or_expression) {
			return visitor.visitInclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exclusive_or_expressionContext extends ParserRuleContext {
	public and_expression(): And_expressionContext[];
	public and_expression(i: number): And_expressionContext;
	public and_expression(i?: number): And_expressionContext | And_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(And_expressionContext);
		} else {
			return this.getRuleContext(i, And_expressionContext);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.CARET);
		} else {
			return this.getToken(CSharpParser.CARET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_exclusive_or_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExclusive_or_expression) {
			listener.enterExclusive_or_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExclusive_or_expression) {
			listener.exitExclusive_or_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExclusive_or_expression) {
			return visitor.visitExclusive_or_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class And_expressionContext extends ParserRuleContext {
	public equality_expression(): Equality_expressionContext[];
	public equality_expression(i: number): Equality_expressionContext;
	public equality_expression(i?: number): Equality_expressionContext | Equality_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Equality_expressionContext);
		} else {
			return this.getRuleContext(i, Equality_expressionContext);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.AMP);
		} else {
			return this.getToken(CSharpParser.AMP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_and_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnd_expression) {
			listener.enterAnd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnd_expression) {
			listener.exitAnd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAnd_expression) {
			return visitor.visitAnd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Equality_expressionContext extends ParserRuleContext {
	public relational_expression(): Relational_expressionContext[];
	public relational_expression(i: number): Relational_expressionContext;
	public relational_expression(i?: number): Relational_expressionContext | Relational_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Relational_expressionContext);
		} else {
			return this.getRuleContext(i, Relational_expressionContext);
		}
	}
	public OP_EQ(): TerminalNode[];
	public OP_EQ(i: number): TerminalNode;
	public OP_EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_EQ);
		} else {
			return this.getToken(CSharpParser.OP_EQ, i);
		}
	}
	public OP_NE(): TerminalNode[];
	public OP_NE(i: number): TerminalNode;
	public OP_NE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_NE);
		} else {
			return this.getToken(CSharpParser.OP_NE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_equality_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEquality_expression) {
			listener.enterEquality_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEquality_expression) {
			listener.exitEquality_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEquality_expression) {
			return visitor.visitEquality_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Relational_expressionContext extends ParserRuleContext {
	public shift_expression(): Shift_expressionContext[];
	public shift_expression(i: number): Shift_expressionContext;
	public shift_expression(i?: number): Shift_expressionContext | Shift_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Shift_expressionContext);
		} else {
			return this.getRuleContext(i, Shift_expressionContext);
		}
	}
	public IS(): TerminalNode[];
	public IS(i: number): TerminalNode;
	public IS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.IS);
		} else {
			return this.getToken(CSharpParser.IS, i);
		}
	}
	public isType(): IsTypeContext[];
	public isType(i: number): IsTypeContext;
	public isType(i?: number): IsTypeContext | IsTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsTypeContext);
		} else {
			return this.getRuleContext(i, IsTypeContext);
		}
	}
	public AS(): TerminalNode[];
	public AS(i: number): TerminalNode;
	public AS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.AS);
		} else {
			return this.getToken(CSharpParser.AS, i);
		}
	}
	public type_(): Type_Context[];
	public type_(i: number): Type_Context;
	public type_(i?: number): Type_Context | Type_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_Context);
		} else {
			return this.getRuleContext(i, Type_Context);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.LT);
		} else {
			return this.getToken(CSharpParser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.GT);
		} else {
			return this.getToken(CSharpParser.GT, i);
		}
	}
	public OP_LE(): TerminalNode[];
	public OP_LE(i: number): TerminalNode;
	public OP_LE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_LE);
		} else {
			return this.getToken(CSharpParser.OP_LE, i);
		}
	}
	public OP_GE(): TerminalNode[];
	public OP_GE(i: number): TerminalNode;
	public OP_GE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_GE);
		} else {
			return this.getToken(CSharpParser.OP_GE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_relational_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRelational_expression) {
			listener.enterRelational_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRelational_expression) {
			listener.exitRelational_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRelational_expression) {
			return visitor.visitRelational_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Shift_expressionContext extends ParserRuleContext {
	public additive_expression(): Additive_expressionContext[];
	public additive_expression(i: number): Additive_expressionContext;
	public additive_expression(i?: number): Additive_expressionContext | Additive_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Additive_expressionContext);
		} else {
			return this.getRuleContext(i, Additive_expressionContext);
		}
	}
	public OP_LEFT_SHIFT(): TerminalNode[];
	public OP_LEFT_SHIFT(i: number): TerminalNode;
	public OP_LEFT_SHIFT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_LEFT_SHIFT);
		} else {
			return this.getToken(CSharpParser.OP_LEFT_SHIFT, i);
		}
	}
	public right_shift(): Right_shiftContext[];
	public right_shift(i: number): Right_shiftContext;
	public right_shift(i?: number): Right_shiftContext | Right_shiftContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Right_shiftContext);
		} else {
			return this.getRuleContext(i, Right_shiftContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_shift_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterShift_expression) {
			listener.enterShift_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitShift_expression) {
			listener.exitShift_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitShift_expression) {
			return visitor.visitShift_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Additive_expressionContext extends ParserRuleContext {
	public multiplicative_expression(): Multiplicative_expressionContext[];
	public multiplicative_expression(i: number): Multiplicative_expressionContext;
	public multiplicative_expression(i?: number): Multiplicative_expressionContext | Multiplicative_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Multiplicative_expressionContext);
		} else {
			return this.getRuleContext(i, Multiplicative_expressionContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.PLUS);
		} else {
			return this.getToken(CSharpParser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.MINUS);
		} else {
			return this.getToken(CSharpParser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_additive_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAdditive_expression) {
			listener.enterAdditive_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAdditive_expression) {
			listener.exitAdditive_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAdditive_expression) {
			return visitor.visitAdditive_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Multiplicative_expressionContext extends ParserRuleContext {
	public switch_expression(): Switch_expressionContext[];
	public switch_expression(i: number): Switch_expressionContext;
	public switch_expression(i?: number): Switch_expressionContext | Switch_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_expressionContext);
		} else {
			return this.getRuleContext(i, Switch_expressionContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public DIV(): TerminalNode[];
	public DIV(i: number): TerminalNode;
	public DIV(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DIV);
		} else {
			return this.getToken(CSharpParser.DIV, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.PERCENT);
		} else {
			return this.getToken(CSharpParser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_multiplicative_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMultiplicative_expression) {
			listener.enterMultiplicative_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMultiplicative_expression) {
			listener.exitMultiplicative_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMultiplicative_expression) {
			return visitor.visitMultiplicative_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_expressionContext extends ParserRuleContext {
	public range_expression(): Range_expressionContext {
		return this.getRuleContext(0, Range_expressionContext);
	}
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SWITCH, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public switch_expression_arms(): Switch_expression_armsContext | undefined {
		return this.tryGetRuleContext(0, Switch_expression_armsContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_expression) {
			listener.enterSwitch_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_expression) {
			listener.exitSwitch_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitch_expression) {
			return visitor.visitSwitch_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_expression_armsContext extends ParserRuleContext {
	public switch_expression_arm(): Switch_expression_armContext[];
	public switch_expression_arm(i: number): Switch_expression_armContext;
	public switch_expression_arm(i?: number): Switch_expression_armContext | Switch_expression_armContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_expression_armContext);
		} else {
			return this.getRuleContext(i, Switch_expression_armContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_expression_arms; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_expression_arms) {
			listener.enterSwitch_expression_arms(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_expression_arms) {
			listener.exitSwitch_expression_arms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitch_expression_arms) {
			return visitor.visitSwitch_expression_arms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_expression_armContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public right_arrow(): Right_arrowContext {
		return this.getRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext {
		return this.getRuleContext(0, Throwable_expressionContext);
	}
	public case_guard(): Case_guardContext | undefined {
		return this.tryGetRuleContext(0, Case_guardContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_expression_arm; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_expression_arm) {
			listener.enterSwitch_expression_arm(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_expression_arm) {
			listener.exitSwitch_expression_arm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitch_expression_arm) {
			return visitor.visitSwitch_expression_arm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Range_expressionContext extends ParserRuleContext {
	public unary_expression(): Unary_expressionContext[];
	public unary_expression(i: number): Unary_expressionContext;
	public unary_expression(i?: number): Unary_expressionContext | Unary_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Unary_expressionContext);
		} else {
			return this.getRuleContext(i, Unary_expressionContext);
		}
	}
	public OP_RANGE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_RANGE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_range_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRange_expression) {
			listener.enterRange_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRange_expression) {
			listener.exitRange_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRange_expression) {
			return visitor.visitRange_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unary_expressionContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PLUS, 0); }
	public unary_expression(): Unary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Unary_expressionContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.MINUS, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BANG, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TILDE, 0); }
	public OP_INC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_INC, 0); }
	public OP_DEC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DEC, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AWAIT, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CARET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_unary_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnary_expression) {
			listener.enterUnary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnary_expression) {
			listener.exitUnary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUnary_expression) {
			return visitor.visitUnary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expressionContext extends ParserRuleContext {
	public _pe!: Primary_expression_startContext;
	public primary_expression_start(): Primary_expression_startContext {
		return this.getRuleContext(0, Primary_expression_startContext);
	}
	public BANG(): TerminalNode[];
	public BANG(i: number): TerminalNode;
	public BANG(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.BANG);
		} else {
			return this.getToken(CSharpParser.BANG, i);
		}
	}
	public bracket_expression(): Bracket_expressionContext[];
	public bracket_expression(i: number): Bracket_expressionContext;
	public bracket_expression(i?: number): Bracket_expressionContext | Bracket_expressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bracket_expressionContext);
		} else {
			return this.getRuleContext(i, Bracket_expressionContext);
		}
	}
	public member_access(): Member_accessContext[];
	public member_access(i: number): Member_accessContext;
	public member_access(i?: number): Member_accessContext | Member_accessContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_accessContext);
		} else {
			return this.getRuleContext(i, Member_accessContext);
		}
	}
	public method_invocation(): Method_invocationContext[];
	public method_invocation(i: number): Method_invocationContext;
	public method_invocation(i?: number): Method_invocationContext | Method_invocationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Method_invocationContext);
		} else {
			return this.getRuleContext(i, Method_invocationContext);
		}
	}
	public OP_INC(): TerminalNode[];
	public OP_INC(i: number): TerminalNode;
	public OP_INC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_INC);
		} else {
			return this.getToken(CSharpParser.OP_INC, i);
		}
	}
	public OP_DEC(): TerminalNode[];
	public OP_DEC(i: number): TerminalNode;
	public OP_DEC(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_DEC);
		} else {
			return this.getToken(CSharpParser.OP_DEC, i);
		}
	}
	public OP_PTR(): TerminalNode[];
	public OP_PTR(i: number): TerminalNode;
	public OP_PTR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.OP_PTR);
		} else {
			return this.getToken(CSharpParser.OP_PTR, i);
		}
	}
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPrimary_expression) {
			listener.enterPrimary_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPrimary_expression) {
			listener.exitPrimary_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitPrimary_expression) {
			return visitor.visitPrimary_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_expression_startContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_expression_start; }
	public copyFrom(ctx: Primary_expression_startContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends Primary_expression_startContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteralExpression) {
			listener.enterLiteralExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteralExpression) {
			listener.exitLiteralExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLiteralExpression) {
			return visitor.visitLiteralExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SimpleNameExpressionContext extends Primary_expression_startContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSimpleNameExpression) {
			listener.enterSimpleNameExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSimpleNameExpression) {
			listener.exitSimpleNameExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSimpleNameExpression) {
			return visitor.visitSimpleNameExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesisExpressionsContext extends Primary_expression_startContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParenthesisExpressions) {
			listener.enterParenthesisExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParenthesisExpressions) {
			listener.exitParenthesisExpressions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitParenthesisExpressions) {
			return visitor.visitParenthesisExpressions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessExpressionContext extends Primary_expression_startContext {
	public predefined_type(): Predefined_typeContext | undefined {
		return this.tryGetRuleContext(0, Predefined_typeContext);
	}
	public qualified_alias_member(): Qualified_alias_memberContext | undefined {
		return this.tryGetRuleContext(0, Qualified_alias_memberContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMemberAccessExpression) {
			listener.enterMemberAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMemberAccessExpression) {
			listener.exitMemberAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMemberAccessExpression) {
			return visitor.visitMemberAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralAccessExpressionContext extends Primary_expression_startContext {
	public LITERAL_ACCESS(): TerminalNode { return this.getToken(CSharpParser.LITERAL_ACCESS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteralAccessExpression) {
			listener.enterLiteralAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteralAccessExpression) {
			listener.exitLiteralAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLiteralAccessExpression) {
			return visitor.visitLiteralAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThisReferenceExpressionContext extends Primary_expression_startContext {
	public THIS(): TerminalNode { return this.getToken(CSharpParser.THIS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThisReferenceExpression) {
			listener.enterThisReferenceExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThisReferenceExpression) {
			listener.exitThisReferenceExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitThisReferenceExpression) {
			return visitor.visitThisReferenceExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BaseAccessExpressionContext extends Primary_expression_startContext {
	public BASE(): TerminalNode { return this.getToken(CSharpParser.BASE, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOT, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBaseAccessExpression) {
			listener.enterBaseAccessExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBaseAccessExpression) {
			listener.exitBaseAccessExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBaseAccessExpression) {
			return visitor.visitBaseAccessExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectCreationExpressionContext extends Primary_expression_startContext {
	public NEW(): TerminalNode { return this.getToken(CSharpParser.NEW, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public anonymous_object_initializer(): Anonymous_object_initializerContext | undefined {
		return this.tryGetRuleContext(0, Anonymous_object_initializerContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	public object_creation_expression(): Object_creation_expressionContext | undefined {
		return this.tryGetRuleContext(0, Object_creation_expressionContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObjectCreationExpression) {
			listener.enterObjectCreationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObjectCreationExpression) {
			listener.exitObjectCreationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitObjectCreationExpression) {
			return visitor.visitObjectCreationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExpressionContext extends Primary_expression_startContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public argument(): ArgumentContext[];
	public argument(i: number): ArgumentContext;
	public argument(i?: number): ArgumentContext | ArgumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentContext);
		} else {
			return this.getRuleContext(i, ArgumentContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTupleExpression) {
			listener.enterTupleExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTupleExpression) {
			listener.exitTupleExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTupleExpression) {
			return visitor.visitTupleExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeofExpressionContext extends Primary_expression_startContext {
	public TYPEOF(): TerminalNode { return this.getToken(CSharpParser.TYPEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public unbound_type_name(): Unbound_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Unbound_type_nameContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTypeofExpression) {
			listener.enterTypeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTypeofExpression) {
			listener.exitTypeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTypeofExpression) {
			return visitor.visitTypeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckedExpressionContext extends Primary_expression_startContext {
	public CHECKED(): TerminalNode { return this.getToken(CSharpParser.CHECKED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCheckedExpression) {
			listener.enterCheckedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCheckedExpression) {
			listener.exitCheckedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCheckedExpression) {
			return visitor.visitCheckedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UncheckedExpressionContext extends Primary_expression_startContext {
	public UNCHECKED(): TerminalNode { return this.getToken(CSharpParser.UNCHECKED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUncheckedExpression) {
			listener.enterUncheckedExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUncheckedExpression) {
			listener.exitUncheckedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUncheckedExpression) {
			return visitor.visitUncheckedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DefaultValueExpressionContext extends Primary_expression_startContext {
	public DEFAULT(): TerminalNode { return this.getToken(CSharpParser.DEFAULT, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDefaultValueExpression) {
			listener.enterDefaultValueExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDefaultValueExpression) {
			listener.exitDefaultValueExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitDefaultValueExpression) {
			return visitor.visitDefaultValueExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AnonymousMethodExpressionContext extends Primary_expression_startContext {
	public DELEGATE(): TerminalNode { return this.getToken(CSharpParser.DELEGATE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Explicit_anonymous_function_parameter_listContext);
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymousMethodExpression) {
			listener.enterAnonymousMethodExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymousMethodExpression) {
			listener.exitAnonymousMethodExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAnonymousMethodExpression) {
			return visitor.visitAnonymousMethodExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SizeofExpressionContext extends Primary_expression_startContext {
	public SIZEOF(): TerminalNode { return this.getToken(CSharpParser.SIZEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSizeofExpression) {
			listener.enterSizeofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSizeofExpression) {
			listener.exitSizeofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSizeofExpression) {
			return visitor.visitSizeofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NameofExpressionContext extends Primary_expression_startContext {
	public NAMEOF(): TerminalNode { return this.getToken(CSharpParser.NAMEOF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	constructor(ctx: Primary_expression_startContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNameofExpression) {
			listener.enterNameofExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNameofExpression) {
			listener.exitNameofExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNameofExpression) {
			return visitor.visitNameofExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throwable_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public throw_expression(): Throw_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throw_expressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_throwable_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThrowable_expression) {
			listener.enterThrowable_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThrowable_expression) {
			listener.exitThrowable_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitThrowable_expression) {
			return visitor.visitThrowable_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Throw_expressionContext extends ParserRuleContext {
	public THROW(): TerminalNode { return this.getToken(CSharpParser.THROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_throw_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThrow_expression) {
			listener.enterThrow_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThrow_expression) {
			listener.exitThrow_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitThrow_expression) {
			return visitor.visitThrow_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_accessContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(CSharpParser.DOT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_access; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_access) {
			listener.enterMember_access(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_access) {
			listener.exitMember_access(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_access) {
			return visitor.visitMember_access(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bracket_expressionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public indexer_argument(): Indexer_argumentContext[];
	public indexer_argument(i: number): Indexer_argumentContext;
	public indexer_argument(i?: number): Indexer_argumentContext | Indexer_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Indexer_argumentContext);
		} else {
			return this.getRuleContext(i, Indexer_argumentContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_bracket_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBracket_expression) {
			listener.enterBracket_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBracket_expression) {
			listener.exitBracket_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBracket_expression) {
			return visitor.visitBracket_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Indexer_argumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_indexer_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIndexer_argument) {
			listener.enterIndexer_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIndexer_argument) {
			listener.exitIndexer_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIndexer_argument) {
			return visitor.visitIndexer_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Predefined_typeContext extends ParserRuleContext {
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_predefined_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPredefined_type) {
			listener.enterPredefined_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPredefined_type) {
			listener.exitPredefined_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitPredefined_type) {
			return visitor.visitPredefined_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_expression_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExpression_list) {
			return visitor.visitExpression_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_or_collection_initializerContext extends ParserRuleContext {
	public object_initializer(): Object_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_initializerContext);
	}
	public collection_initializer(): Collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_or_collection_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_or_collection_initializer) {
			listener.enterObject_or_collection_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_or_collection_initializer) {
			listener.exitObject_or_collection_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitObject_or_collection_initializer) {
			return visitor.visitObject_or_collection_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public member_initializer_list(): Member_initializer_listContext | undefined {
		return this.tryGetRuleContext(0, Member_initializer_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_initializer) {
			listener.enterObject_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_initializer) {
			listener.exitObject_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitObject_initializer) {
			return visitor.visitObject_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_initializer_listContext extends ParserRuleContext {
	public member_initializer(): Member_initializerContext[];
	public member_initializer(i: number): Member_initializerContext;
	public member_initializer(i?: number): Member_initializerContext | Member_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_initializerContext);
		} else {
			return this.getRuleContext(i, Member_initializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_initializer_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_initializer_list) {
			listener.enterMember_initializer_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_initializer_list) {
			listener.exitMember_initializer_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_initializer_list) {
			return visitor.visitMember_initializer_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_initializerContext extends ParserRuleContext {
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public initializer_value(): Initializer_valueContext {
		return this.getRuleContext(0, Initializer_valueContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_initializer) {
			listener.enterMember_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_initializer) {
			listener.exitMember_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_initializer) {
			return visitor.visitMember_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Initializer_valueContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_initializer_value; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInitializer_value) {
			listener.enterInitializer_value(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInitializer_value) {
			listener.exitInitializer_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInitializer_value) {
			return visitor.visitInitializer_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public element_initializer(): Element_initializerContext[];
	public element_initializer(i: number): Element_initializerContext;
	public element_initializer(i?: number): Element_initializerContext | Element_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Element_initializerContext);
		} else {
			return this.getRuleContext(i, Element_initializerContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_collection_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCollection_initializer) {
			listener.enterCollection_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCollection_initializer) {
			listener.exitCollection_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCollection_initializer) {
			return visitor.visitCollection_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Element_initializerContext extends ParserRuleContext {
	public non_assignment_expression(): Non_assignment_expressionContext | undefined {
		return this.tryGetRuleContext(0, Non_assignment_expressionContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_element_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterElement_initializer) {
			listener.enterElement_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitElement_initializer) {
			listener.exitElement_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitElement_initializer) {
			return visitor.visitElement_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Anonymous_object_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public member_declarator_list(): Member_declarator_listContext | undefined {
		return this.tryGetRuleContext(0, Member_declarator_listContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_object_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_object_initializer) {
			listener.enterAnonymous_object_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_object_initializer) {
			listener.exitAnonymous_object_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAnonymous_object_initializer) {
			return visitor.visitAnonymous_object_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_declarator_listContext extends ParserRuleContext {
	public member_declarator(): Member_declaratorContext[];
	public member_declarator(i: number): Member_declaratorContext;
	public member_declarator(i?: number): Member_declaratorContext | Member_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Member_declaratorContext);
		} else {
			return this.getRuleContext(i, Member_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_declarator_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_declarator_list) {
			listener.enterMember_declarator_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_declarator_list) {
			listener.exitMember_declarator_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_declarator_list) {
			return visitor.visitMember_declarator_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_declaratorContext extends ParserRuleContext {
	public primary_expression(): Primary_expressionContext | undefined {
		return this.tryGetRuleContext(0, Primary_expressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_declarator) {
			listener.enterMember_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_declarator) {
			listener.exitMember_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_declarator) {
			return visitor.visitMember_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unbound_type_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_COLON, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public generic_dimension_specifier(): Generic_dimension_specifierContext[];
	public generic_dimension_specifier(i: number): Generic_dimension_specifierContext;
	public generic_dimension_specifier(i?: number): Generic_dimension_specifierContext | Generic_dimension_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Generic_dimension_specifierContext);
		} else {
			return this.getRuleContext(i, Generic_dimension_specifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_unbound_type_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnbound_type_name) {
			listener.enterUnbound_type_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnbound_type_name) {
			listener.exitUnbound_type_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUnbound_type_name) {
			return visitor.visitUnbound_type_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Generic_dimension_specifierContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_generic_dimension_specifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGeneric_dimension_specifier) {
			listener.enterGeneric_dimension_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGeneric_dimension_specifier) {
			listener.exitGeneric_dimension_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGeneric_dimension_specifier) {
			return visitor.visitGeneric_dimension_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsTypeContext extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public isTypePatternArms(): IsTypePatternArmsContext | undefined {
		return this.tryGetRuleContext(0, IsTypePatternArmsContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_isType; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIsType) {
			listener.enterIsType(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIsType) {
			listener.exitIsType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIsType) {
			return visitor.visitIsType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsTypePatternArmsContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public isTypePatternArm(): IsTypePatternArmContext[];
	public isTypePatternArm(i: number): IsTypePatternArmContext;
	public isTypePatternArm(i?: number): IsTypePatternArmContext | IsTypePatternArmContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IsTypePatternArmContext);
		} else {
			return this.getRuleContext(i, IsTypePatternArmContext);
		}
	}
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_isTypePatternArms; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIsTypePatternArms) {
			listener.enterIsTypePatternArms(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIsTypePatternArms) {
			listener.exitIsTypePatternArms(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIsTypePatternArms) {
			return visitor.visitIsTypePatternArms(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsTypePatternArmContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_isTypePatternArm; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIsTypePatternArm) {
			listener.enterIsTypePatternArm(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIsTypePatternArm) {
			listener.exitIsTypePatternArm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIsTypePatternArm) {
			return visitor.visitIsTypePatternArm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Lambda_expressionContext extends ParserRuleContext {
	public anonymous_function_signature(): Anonymous_function_signatureContext {
		return this.getRuleContext(0, Anonymous_function_signatureContext);
	}
	public right_arrow(): Right_arrowContext {
		return this.getRuleContext(0, Right_arrowContext);
	}
	public anonymous_function_body(): Anonymous_function_bodyContext {
		return this.getRuleContext(0, Anonymous_function_bodyContext);
	}
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_lambda_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLambda_expression) {
			listener.enterLambda_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLambda_expression) {
			listener.exitLambda_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLambda_expression) {
			return visitor.visitLambda_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Anonymous_function_signatureContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public explicit_anonymous_function_parameter_list(): Explicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Explicit_anonymous_function_parameter_listContext);
	}
	public implicit_anonymous_function_parameter_list(): Implicit_anonymous_function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Implicit_anonymous_function_parameter_listContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_function_signature; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_function_signature) {
			listener.enterAnonymous_function_signature(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_function_signature) {
			listener.exitAnonymous_function_signature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAnonymous_function_signature) {
			return visitor.visitAnonymous_function_signature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Explicit_anonymous_function_parameter_listContext extends ParserRuleContext {
	public explicit_anonymous_function_parameter(): Explicit_anonymous_function_parameterContext[];
	public explicit_anonymous_function_parameter(i: number): Explicit_anonymous_function_parameterContext;
	public explicit_anonymous_function_parameter(i?: number): Explicit_anonymous_function_parameterContext | Explicit_anonymous_function_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Explicit_anonymous_function_parameterContext);
		} else {
			return this.getRuleContext(i, Explicit_anonymous_function_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_explicit_anonymous_function_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExplicit_anonymous_function_parameter_list) {
			listener.enterExplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExplicit_anonymous_function_parameter_list) {
			listener.exitExplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExplicit_anonymous_function_parameter_list) {
			return visitor.visitExplicit_anonymous_function_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Explicit_anonymous_function_parameterContext extends ParserRuleContext {
	public _refout!: Token;
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_explicit_anonymous_function_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExplicit_anonymous_function_parameter) {
			listener.enterExplicit_anonymous_function_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExplicit_anonymous_function_parameter) {
			listener.exitExplicit_anonymous_function_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExplicit_anonymous_function_parameter) {
			return visitor.visitExplicit_anonymous_function_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Implicit_anonymous_function_parameter_listContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_implicit_anonymous_function_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterImplicit_anonymous_function_parameter_list) {
			listener.enterImplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitImplicit_anonymous_function_parameter_list) {
			listener.exitImplicit_anonymous_function_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitImplicit_anonymous_function_parameter_list) {
			return visitor.visitImplicit_anonymous_function_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Anonymous_function_bodyContext extends ParserRuleContext {
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_anonymous_function_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAnonymous_function_body) {
			listener.enterAnonymous_function_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAnonymous_function_body) {
			listener.exitAnonymous_function_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAnonymous_function_body) {
			return visitor.visitAnonymous_function_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Query_expressionContext extends ParserRuleContext {
	public from_clause(): From_clauseContext {
		return this.getRuleContext(0, From_clauseContext);
	}
	public query_body(): Query_bodyContext {
		return this.getRuleContext(0, Query_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_expression) {
			listener.enterQuery_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_expression) {
			listener.exitQuery_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQuery_expression) {
			return visitor.visitQuery_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class From_clauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(CSharpParser.FROM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_from_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFrom_clause) {
			listener.enterFrom_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFrom_clause) {
			listener.exitFrom_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFrom_clause) {
			return visitor.visitFrom_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Query_bodyContext extends ParserRuleContext {
	public select_or_group_clause(): Select_or_group_clauseContext {
		return this.getRuleContext(0, Select_or_group_clauseContext);
	}
	public query_body_clause(): Query_body_clauseContext[];
	public query_body_clause(i: number): Query_body_clauseContext;
	public query_body_clause(i?: number): Query_body_clauseContext | Query_body_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Query_body_clauseContext);
		} else {
			return this.getRuleContext(i, Query_body_clauseContext);
		}
	}
	public query_continuation(): Query_continuationContext | undefined {
		return this.tryGetRuleContext(0, Query_continuationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_body) {
			listener.enterQuery_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_body) {
			listener.exitQuery_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQuery_body) {
			return visitor.visitQuery_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Query_body_clauseContext extends ParserRuleContext {
	public from_clause(): From_clauseContext | undefined {
		return this.tryGetRuleContext(0, From_clauseContext);
	}
	public let_clause(): Let_clauseContext | undefined {
		return this.tryGetRuleContext(0, Let_clauseContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	public combined_join_clause(): Combined_join_clauseContext | undefined {
		return this.tryGetRuleContext(0, Combined_join_clauseContext);
	}
	public orderby_clause(): Orderby_clauseContext | undefined {
		return this.tryGetRuleContext(0, Orderby_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_body_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_body_clause) {
			listener.enterQuery_body_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_body_clause) {
			listener.exitQuery_body_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQuery_body_clause) {
			return visitor.visitQuery_body_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Let_clauseContext extends ParserRuleContext {
	public LET(): TerminalNode { return this.getToken(CSharpParser.LET, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_let_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLet_clause) {
			listener.enterLet_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLet_clause) {
			listener.exitLet_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLet_clause) {
			return visitor.visitLet_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Where_clauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(CSharpParser.WHERE, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_where_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterWhere_clause) {
			listener.enterWhere_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitWhere_clause) {
			listener.exitWhere_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitWhere_clause) {
			return visitor.visitWhere_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Combined_join_clauseContext extends ParserRuleContext {
	public JOIN(): TerminalNode { return this.getToken(CSharpParser.JOIN, 0); }
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ON(): TerminalNode { return this.getToken(CSharpParser.ON, 0); }
	public EQUALS(): TerminalNode { return this.getToken(CSharpParser.EQUALS, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public INTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_combined_join_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCombined_join_clause) {
			listener.enterCombined_join_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCombined_join_clause) {
			listener.exitCombined_join_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCombined_join_clause) {
			return visitor.visitCombined_join_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Orderby_clauseContext extends ParserRuleContext {
	public ORDERBY(): TerminalNode { return this.getToken(CSharpParser.ORDERBY, 0); }
	public ordering(): OrderingContext[];
	public ordering(i: number): OrderingContext;
	public ordering(i?: number): OrderingContext | OrderingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OrderingContext);
		} else {
			return this.getRuleContext(i, OrderingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_orderby_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOrderby_clause) {
			listener.enterOrderby_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOrderby_clause) {
			listener.exitOrderby_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitOrderby_clause) {
			return visitor.visitOrderby_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OrderingContext extends ParserRuleContext {
	public _dir!: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASCENDING, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DESCENDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_ordering; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOrdering) {
			listener.enterOrdering(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOrdering) {
			listener.exitOrdering(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitOrdering) {
			return visitor.visitOrdering(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Select_or_group_clauseContext extends ParserRuleContext {
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SELECT, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GROUP, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_select_or_group_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSelect_or_group_clause) {
			listener.enterSelect_or_group_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSelect_or_group_clause) {
			listener.exitSelect_or_group_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSelect_or_group_clause) {
			return visitor.visitSelect_or_group_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Query_continuationContext extends ParserRuleContext {
	public INTO(): TerminalNode { return this.getToken(CSharpParser.INTO, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public query_body(): Query_bodyContext {
		return this.getRuleContext(0, Query_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_query_continuation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQuery_continuation) {
			listener.enterQuery_continuation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQuery_continuation) {
			listener.exitQuery_continuation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQuery_continuation) {
			return visitor.visitQuery_continuation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public labeled_Statement(): Labeled_StatementContext | undefined {
		return this.tryGetRuleContext(0, Labeled_StatementContext);
	}
	public declarationStatement(): DeclarationStatementContext | undefined {
		return this.tryGetRuleContext(0, DeclarationStatementContext);
	}
	public embedded_statement(): Embedded_statementContext | undefined {
		return this.tryGetRuleContext(0, Embedded_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_statement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationStatementContext extends ParserRuleContext {
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public local_constant_declaration(): Local_constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_constant_declarationContext);
	}
	public local_function_declaration(): Local_function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_function_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_declarationStatement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDeclarationStatement) {
			listener.enterDeclarationStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDeclarationStatement) {
			listener.exitDeclarationStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitDeclarationStatement) {
			return visitor.visitDeclarationStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_function_declarationContext extends ParserRuleContext {
	public local_function_header(): Local_function_headerContext {
		return this.getRuleContext(0, Local_function_headerContext);
	}
	public local_function_body(): Local_function_bodyContext {
		return this.getRuleContext(0, Local_function_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_function_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_function_declaration) {
			listener.enterLocal_function_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_function_declaration) {
			listener.exitLocal_function_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_function_declaration) {
			return visitor.visitLocal_function_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_function_headerContext extends ParserRuleContext {
	public return_type(): Return_typeContext {
		return this.getRuleContext(0, Return_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public local_function_modifiers(): Local_function_modifiersContext | undefined {
		return this.tryGetRuleContext(0, Local_function_modifiersContext);
	}
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_function_header; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_function_header) {
			listener.enterLocal_function_header(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_function_header) {
			listener.exitLocal_function_header(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_function_header) {
			return visitor.visitLocal_function_header(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_function_modifiersContext extends ParserRuleContext {
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STATIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_function_modifiers; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_function_modifiers) {
			listener.enterLocal_function_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_function_modifiers) {
			listener.exitLocal_function_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_function_modifiers) {
			return visitor.visitLocal_function_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_function_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_function_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_function_body) {
			listener.enterLocal_function_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_function_body) {
			listener.exitLocal_function_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_function_body) {
			return visitor.visitLocal_function_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Labeled_StatementContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_labeled_Statement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLabeled_Statement) {
			listener.enterLabeled_Statement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLabeled_Statement) {
			listener.exitLabeled_Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLabeled_Statement) {
			return visitor.visitLabeled_Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Embedded_statementContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public simple_embedded_statement(): Simple_embedded_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_embedded_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_embedded_statement; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEmbedded_statement) {
			listener.enterEmbedded_statement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEmbedded_statement) {
			listener.exitEmbedded_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEmbedded_statement) {
			return visitor.visitEmbedded_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Simple_embedded_statementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_simple_embedded_statement; }
	public copyFrom(ctx: Simple_embedded_statementContext): void {
		super.copyFrom(ctx);
	}
}
export class TheEmptyStatementContext extends Simple_embedded_statementContext {
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTheEmptyStatement) {
			listener.enterTheEmptyStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTheEmptyStatement) {
			listener.exitTheEmptyStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTheEmptyStatement) {
			return visitor.visitTheEmptyStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionStatementContext extends Simple_embedded_statementContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfStatementContext extends Simple_embedded_statementContext {
	public IF(): TerminalNode { return this.getToken(CSharpParser.IF, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public if_body(): If_bodyContext[];
	public if_body(i: number): If_bodyContext;
	public if_body(i?: number): If_bodyContext | If_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(If_bodyContext);
		} else {
			return this.getRuleContext(i, If_bodyContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ELSE, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SwitchStatementContext extends Simple_embedded_statementContext {
	public SWITCH(): TerminalNode { return this.getToken(CSharpParser.SWITCH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public switch_section(): Switch_sectionContext[];
	public switch_section(i: number): Switch_sectionContext;
	public switch_section(i?: number): Switch_sectionContext | Switch_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_sectionContext);
		} else {
			return this.getRuleContext(i, Switch_sectionContext);
		}
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitchStatement) {
			listener.enterSwitchStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitchStatement) {
			listener.exitSwitchStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitchStatement) {
			return visitor.visitSwitchStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WhileStatementContext extends Simple_embedded_statementContext {
	public WHILE(): TerminalNode { return this.getToken(CSharpParser.WHILE, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DoStatementContext extends Simple_embedded_statementContext {
	public DO(): TerminalNode { return this.getToken(CSharpParser.DO, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	public WHILE(): TerminalNode { return this.getToken(CSharpParser.WHILE, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDoStatement) {
			listener.enterDoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDoStatement) {
			listener.exitDoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitDoStatement) {
			return visitor.visitDoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForStatementContext extends Simple_embedded_statementContext {
	public FOR(): TerminalNode { return this.getToken(CSharpParser.FOR, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.SEMICOLON);
		} else {
			return this.getToken(CSharpParser.SEMICOLON, i);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	public for_initializer(): For_initializerContext | undefined {
		return this.tryGetRuleContext(0, For_initializerContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public for_iterator(): For_iteratorContext | undefined {
		return this.tryGetRuleContext(0, For_iteratorContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ForeachStatementContext extends Simple_embedded_statementContext {
	public FOREACH(): TerminalNode { return this.getToken(CSharpParser.FOREACH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public local_variable_type(): Local_variable_typeContext {
		return this.getRuleContext(0, Local_variable_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public IN(): TerminalNode { return this.getToken(CSharpParser.IN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AWAIT, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterForeachStatement) {
			listener.enterForeachStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitForeachStatement) {
			listener.exitForeachStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitForeachStatement) {
			return visitor.visitForeachStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BreakStatementContext extends Simple_embedded_statementContext {
	public BREAK(): TerminalNode { return this.getToken(CSharpParser.BREAK, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBreakStatement) {
			listener.enterBreakStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBreakStatement) {
			listener.exitBreakStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBreakStatement) {
			return visitor.visitBreakStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ContinueStatementContext extends Simple_embedded_statementContext {
	public CONTINUE(): TerminalNode { return this.getToken(CSharpParser.CONTINUE, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterContinueStatement) {
			listener.enterContinueStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitContinueStatement) {
			listener.exitContinueStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitContinueStatement) {
			return visitor.visitContinueStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GotoStatementContext extends Simple_embedded_statementContext {
	public GOTO(): TerminalNode { return this.getToken(CSharpParser.GOTO, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGotoStatement) {
			listener.enterGotoStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGotoStatement) {
			listener.exitGotoStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGotoStatement) {
			return visitor.visitGotoStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ReturnStatementContext extends Simple_embedded_statementContext {
	public RETURN(): TerminalNode { return this.getToken(CSharpParser.RETURN, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ThrowStatementContext extends Simple_embedded_statementContext {
	public THROW(): TerminalNode { return this.getToken(CSharpParser.THROW, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterThrowStatement) {
			listener.enterThrowStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitThrowStatement) {
			listener.exitThrowStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitThrowStatement) {
			return visitor.visitThrowStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TryStatementContext extends Simple_embedded_statementContext {
	public TRY(): TerminalNode { return this.getToken(CSharpParser.TRY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public catch_clauses(): Catch_clausesContext | undefined {
		return this.tryGetRuleContext(0, Catch_clausesContext);
	}
	public finally_clause(): Finally_clauseContext | undefined {
		return this.tryGetRuleContext(0, Finally_clauseContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTryStatement) {
			listener.enterTryStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTryStatement) {
			listener.exitTryStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTryStatement) {
			return visitor.visitTryStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CheckedStatementContext extends Simple_embedded_statementContext {
	public CHECKED(): TerminalNode { return this.getToken(CSharpParser.CHECKED, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCheckedStatement) {
			listener.enterCheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCheckedStatement) {
			listener.exitCheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCheckedStatement) {
			return visitor.visitCheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UncheckedStatementContext extends Simple_embedded_statementContext {
	public UNCHECKED(): TerminalNode { return this.getToken(CSharpParser.UNCHECKED, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUncheckedStatement) {
			listener.enterUncheckedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUncheckedStatement) {
			listener.exitUncheckedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUncheckedStatement) {
			return visitor.visitUncheckedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LockStatementContext extends Simple_embedded_statementContext {
	public LOCK(): TerminalNode { return this.getToken(CSharpParser.LOCK, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLockStatement) {
			listener.enterLockStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLockStatement) {
			listener.exitLockStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLockStatement) {
			return visitor.visitLockStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UsingStatementContext extends Simple_embedded_statementContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public resource_acquisition(): Resource_acquisitionContext {
		return this.getRuleContext(0, Resource_acquisitionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingStatement) {
			listener.enterUsingStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingStatement) {
			listener.exitUsingStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUsingStatement) {
			return visitor.visitUsingStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class YieldStatementContext extends Simple_embedded_statementContext {
	public YIELD(): TerminalNode { return this.getToken(CSharpParser.YIELD, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.RETURN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BREAK, 0); }
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterYieldStatement) {
			listener.enterYieldStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitYieldStatement) {
			listener.exitYieldStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitYieldStatement) {
			return visitor.visitYieldStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnsafeStatementContext extends Simple_embedded_statementContext {
	public UNSAFE(): TerminalNode { return this.getToken(CSharpParser.UNSAFE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUnsafeStatement) {
			listener.enterUnsafeStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUnsafeStatement) {
			listener.exitUnsafeStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUnsafeStatement) {
			return visitor.visitUnsafeStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FixedStatementContext extends Simple_embedded_statementContext {
	public FIXED(): TerminalNode { return this.getToken(CSharpParser.FIXED, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public pointer_type(): Pointer_typeContext {
		return this.getRuleContext(0, Pointer_typeContext);
	}
	public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext {
		return this.getRuleContext(0, Fixed_pointer_declaratorsContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public embedded_statement(): Embedded_statementContext {
		return this.getRuleContext(0, Embedded_statementContext);
	}
	constructor(ctx: Simple_embedded_statementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixedStatement) {
			listener.enterFixedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixedStatement) {
			listener.exitFixedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixedStatement) {
			return visitor.visitFixedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public statement_list(): Statement_listContext | undefined {
		return this.tryGetRuleContext(0, Statement_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_block; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_variable_declarationContext extends ParserRuleContext {
	public local_variable_type(): Local_variable_typeContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_typeContext);
	}
	public local_variable_declarator(): Local_variable_declaratorContext[];
	public local_variable_declarator(i: number): Local_variable_declaratorContext;
	public local_variable_declarator(i?: number): Local_variable_declaratorContext | Local_variable_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Local_variable_declaratorContext);
		} else {
			return this.getRuleContext(i, Local_variable_declaratorContext);
		}
	}
	public USING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USING, 0); }
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public FIXED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FIXED, 0); }
	public pointer_type(): Pointer_typeContext | undefined {
		return this.tryGetRuleContext(0, Pointer_typeContext);
	}
	public fixed_pointer_declarators(): Fixed_pointer_declaratorsContext | undefined {
		return this.tryGetRuleContext(0, Fixed_pointer_declaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_declaration) {
			listener.enterLocal_variable_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_declaration) {
			listener.exitLocal_variable_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_variable_declaration) {
			return visitor.visitLocal_variable_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_variable_typeContext extends ParserRuleContext {
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_type) {
			listener.enterLocal_variable_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_type) {
			listener.exitLocal_variable_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_variable_type) {
			return visitor.visitLocal_variable_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_variable_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public local_variable_initializer(): Local_variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_initializerContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_declarator) {
			listener.enterLocal_variable_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_declarator) {
			listener.exitLocal_variable_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_variable_declarator) {
			return visitor.visitLocal_variable_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_variable_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	public stackalloc_initializer(): Stackalloc_initializerContext | undefined {
		return this.tryGetRuleContext(0, Stackalloc_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_variable_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_variable_initializer) {
			listener.enterLocal_variable_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_variable_initializer) {
			listener.exitLocal_variable_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_variable_initializer) {
			return visitor.visitLocal_variable_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Local_constant_declarationContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CSharpParser.CONST, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public constant_declarators(): Constant_declaratorsContext {
		return this.getRuleContext(0, Constant_declaratorsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_local_constant_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLocal_constant_declaration) {
			listener.enterLocal_constant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLocal_constant_declaration) {
			listener.exitLocal_constant_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLocal_constant_declaration) {
			return visitor.visitLocal_constant_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public simple_embedded_statement(): Simple_embedded_statementContext | undefined {
		return this.tryGetRuleContext(0, Simple_embedded_statementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_if_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIf_body) {
			listener.enterIf_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIf_body) {
			listener.exitIf_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIf_body) {
			return visitor.visitIf_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_sectionContext extends ParserRuleContext {
	public statement_list(): Statement_listContext {
		return this.getRuleContext(0, Statement_listContext);
	}
	public switch_label(): Switch_labelContext[];
	public switch_label(i: number): Switch_labelContext;
	public switch_label(i?: number): Switch_labelContext | Switch_labelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Switch_labelContext);
		} else {
			return this.getRuleContext(i, Switch_labelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_section) {
			listener.enterSwitch_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_section) {
			listener.exitSwitch_section(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitch_section) {
			return visitor.visitSwitch_section(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Switch_labelContext extends ParserRuleContext {
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public case_guard(): Case_guardContext | undefined {
		return this.tryGetRuleContext(0, Case_guardContext);
	}
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_switch_label; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSwitch_label) {
			listener.enterSwitch_label(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSwitch_label) {
			listener.exitSwitch_label(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSwitch_label) {
			return visitor.visitSwitch_label(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Case_guardContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(CSharpParser.WHEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_case_guard; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCase_guard) {
			listener.enterCase_guard(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCase_guard) {
			listener.exitCase_guard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCase_guard) {
			return visitor.visitCase_guard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Statement_listContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_statement_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStatement_list) {
			listener.enterStatement_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStatement_list) {
			listener.exitStatement_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStatement_list) {
			return visitor.visitStatement_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_initializerContext extends ParserRuleContext {
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_for_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFor_initializer) {
			listener.enterFor_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFor_initializer) {
			listener.exitFor_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFor_initializer) {
			return visitor.visitFor_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_iteratorContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_for_iterator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFor_iterator) {
			listener.enterFor_iterator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFor_iterator) {
			listener.exitFor_iterator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFor_iterator) {
			return visitor.visitFor_iterator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Catch_clausesContext extends ParserRuleContext {
	public specific_catch_clause(): Specific_catch_clauseContext[];
	public specific_catch_clause(i: number): Specific_catch_clauseContext;
	public specific_catch_clause(i?: number): Specific_catch_clauseContext | Specific_catch_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Specific_catch_clauseContext);
		} else {
			return this.getRuleContext(i, Specific_catch_clauseContext);
		}
	}
	public general_catch_clause(): General_catch_clauseContext | undefined {
		return this.tryGetRuleContext(0, General_catch_clauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_catch_clauses; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCatch_clauses) {
			listener.enterCatch_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCatch_clauses) {
			listener.exitCatch_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCatch_clauses) {
			return visitor.visitCatch_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Specific_catch_clauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(CSharpParser.CATCH, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public class_type(): Class_typeContext {
		return this.getRuleContext(0, Class_typeContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public exception_filter(): Exception_filterContext | undefined {
		return this.tryGetRuleContext(0, Exception_filterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_specific_catch_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSpecific_catch_clause) {
			listener.enterSpecific_catch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSpecific_catch_clause) {
			listener.exitSpecific_catch_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSpecific_catch_clause) {
			return visitor.visitSpecific_catch_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class General_catch_clauseContext extends ParserRuleContext {
	public CATCH(): TerminalNode { return this.getToken(CSharpParser.CATCH, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public exception_filter(): Exception_filterContext | undefined {
		return this.tryGetRuleContext(0, Exception_filterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_general_catch_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGeneral_catch_clause) {
			listener.enterGeneral_catch_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGeneral_catch_clause) {
			listener.exitGeneral_catch_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGeneral_catch_clause) {
			return visitor.visitGeneral_catch_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Exception_filterContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(CSharpParser.WHEN, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_exception_filter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterException_filter) {
			listener.enterException_filter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitException_filter) {
			listener.exitException_filter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitException_filter) {
			return visitor.visitException_filter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Finally_clauseContext extends ParserRuleContext {
	public FINALLY(): TerminalNode { return this.getToken(CSharpParser.FINALLY, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_finally_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFinally_clause) {
			listener.enterFinally_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFinally_clause) {
			listener.exitFinally_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFinally_clause) {
			return visitor.visitFinally_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resource_acquisitionContext extends ParserRuleContext {
	public local_variable_declaration(): Local_variable_declarationContext | undefined {
		return this.tryGetRuleContext(0, Local_variable_declarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_resource_acquisition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterResource_acquisition) {
			listener.enterResource_acquisition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitResource_acquisition) {
			listener.exitResource_acquisition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitResource_acquisition) {
			return visitor.visitResource_acquisition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_declarationContext extends ParserRuleContext {
	public _qi!: Qualified_identifierContext;
	public NAMESPACE(): TerminalNode { return this.getToken(CSharpParser.NAMESPACE, 0); }
	public namespace_body(): Namespace_bodyContext {
		return this.getRuleContext(0, Namespace_bodyContext);
	}
	public qualified_identifier(): Qualified_identifierContext {
		return this.getRuleContext(0, Qualified_identifierContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_declaration) {
			listener.enterNamespace_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_declaration) {
			listener.exitNamespace_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace_declaration) {
			return visitor.visitNamespace_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Qualified_identifierContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_qualified_identifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQualified_identifier) {
			listener.enterQualified_identifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQualified_identifier) {
			listener.exitQualified_identifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQualified_identifier) {
			return visitor.visitQualified_identifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public extern_alias_directives(): Extern_alias_directivesContext | undefined {
		return this.tryGetRuleContext(0, Extern_alias_directivesContext);
	}
	public using_directives(): Using_directivesContext | undefined {
		return this.tryGetRuleContext(0, Using_directivesContext);
	}
	public namespace_member_declarations(): Namespace_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Namespace_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_body) {
			listener.enterNamespace_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_body) {
			listener.exitNamespace_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace_body) {
			return visitor.visitNamespace_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extern_alias_directivesContext extends ParserRuleContext {
	public extern_alias_directive(): Extern_alias_directiveContext[];
	public extern_alias_directive(i: number): Extern_alias_directiveContext;
	public extern_alias_directive(i?: number): Extern_alias_directiveContext | Extern_alias_directiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Extern_alias_directiveContext);
		} else {
			return this.getRuleContext(i, Extern_alias_directiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_extern_alias_directives; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExtern_alias_directives) {
			listener.enterExtern_alias_directives(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExtern_alias_directives) {
			listener.exitExtern_alias_directives(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExtern_alias_directives) {
			return visitor.visitExtern_alias_directives(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Extern_alias_directiveContext extends ParserRuleContext {
	public EXTERN(): TerminalNode { return this.getToken(CSharpParser.EXTERN, 0); }
	public ALIAS(): TerminalNode { return this.getToken(CSharpParser.ALIAS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_extern_alias_directive; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterExtern_alias_directive) {
			listener.enterExtern_alias_directive(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitExtern_alias_directive) {
			listener.exitExtern_alias_directive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitExtern_alias_directive) {
			return visitor.visitExtern_alias_directive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Using_directivesContext extends ParserRuleContext {
	public using_directive(): Using_directiveContext[];
	public using_directive(i: number): Using_directiveContext;
	public using_directive(i?: number): Using_directiveContext | Using_directiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Using_directiveContext);
		} else {
			return this.getRuleContext(i, Using_directiveContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_using_directives; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsing_directives) {
			listener.enterUsing_directives(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsing_directives) {
			listener.exitUsing_directives(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUsing_directives) {
			return visitor.visitUsing_directives(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Using_directiveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_using_directive; }
	public copyFrom(ctx: Using_directiveContext): void {
		super.copyFrom(ctx);
	}
}
export class UsingAliasDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingAliasDirective) {
			listener.enterUsingAliasDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingAliasDirective) {
			listener.exitUsingAliasDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUsingAliasDirective) {
			return visitor.visitUsingAliasDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UsingNamespaceDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingNamespaceDirective) {
			listener.enterUsingNamespaceDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingNamespaceDirective) {
			listener.exitUsingNamespaceDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUsingNamespaceDirective) {
			return visitor.visitUsingNamespaceDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UsingStaticDirectiveContext extends Using_directiveContext {
	public USING(): TerminalNode { return this.getToken(CSharpParser.USING, 0); }
	public STATIC(): TerminalNode { return this.getToken(CSharpParser.STATIC, 0); }
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(ctx: Using_directiveContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterUsingStaticDirective) {
			listener.enterUsingStaticDirective(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitUsingStaticDirective) {
			listener.exitUsingStaticDirective(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitUsingStaticDirective) {
			return visitor.visitUsingStaticDirective(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_member_declarationsContext extends ParserRuleContext {
	public namespace_member_declaration(): Namespace_member_declarationContext[];
	public namespace_member_declaration(i: number): Namespace_member_declarationContext;
	public namespace_member_declaration(i?: number): Namespace_member_declarationContext | Namespace_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_member_declarationContext);
		} else {
			return this.getRuleContext(i, Namespace_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_member_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_member_declarations) {
			listener.enterNamespace_member_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_member_declarations) {
			listener.exitNamespace_member_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace_member_declarations) {
			return visitor.visitNamespace_member_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Namespace_member_declarationContext extends ParserRuleContext {
	public namespace_declaration(): Namespace_declarationContext | undefined {
		return this.tryGetRuleContext(0, Namespace_declarationContext);
	}
	public type_declaration(): Type_declarationContext | undefined {
		return this.tryGetRuleContext(0, Type_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_namespace_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterNamespace_member_declaration) {
			listener.enterNamespace_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitNamespace_member_declaration) {
			listener.exitNamespace_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitNamespace_member_declaration) {
			return visitor.visitNamespace_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_declarationContext extends ParserRuleContext {
	public class_definition(): Class_definitionContext | undefined {
		return this.tryGetRuleContext(0, Class_definitionContext);
	}
	public struct_definition(): Struct_definitionContext | undefined {
		return this.tryGetRuleContext(0, Struct_definitionContext);
	}
	public interface_definition(): Interface_definitionContext | undefined {
		return this.tryGetRuleContext(0, Interface_definitionContext);
	}
	public enum_definition(): Enum_definitionContext | undefined {
		return this.tryGetRuleContext(0, Enum_definitionContext);
	}
	public delegate_definition(): Delegate_definitionContext | undefined {
		return this.tryGetRuleContext(0, Delegate_definitionContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_declaration) {
			listener.enterType_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_declaration) {
			listener.exitType_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_declaration) {
			return visitor.visitType_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Qualified_alias_memberContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_COLON, 0); }
	public type_argument_list(): Type_argument_listContext | undefined {
		return this.tryGetRuleContext(0, Type_argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_qualified_alias_member; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterQualified_alias_member) {
			listener.enterQualified_alias_member(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitQualified_alias_member) {
			listener.exitQualified_alias_member(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitQualified_alias_member) {
			return visitor.visitQualified_alias_member(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_parameter_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public type_parameter(): Type_parameterContext[];
	public type_parameter(i: number): Type_parameterContext;
	public type_parameter(i?: number): Type_parameterContext | Type_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_parameterContext);
		} else {
			return this.getRuleContext(i, Type_parameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_list) {
			listener.enterType_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_list) {
			listener.exitType_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_parameter_list) {
			return visitor.visitType_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_parameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter) {
			listener.enterType_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter) {
			listener.exitType_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_parameter) {
			return visitor.visitType_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public class_type(): Class_typeContext {
		return this.getRuleContext(0, Class_typeContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_base) {
			listener.enterClass_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_base) {
			listener.exitClass_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_base) {
			return visitor.visitClass_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_type_listContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_type_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_type_list) {
			listener.enterInterface_type_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_type_list) {
			listener.exitInterface_type_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_type_list) {
			return visitor.visitInterface_type_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_parameter_constraints_clausesContext extends ParserRuleContext {
	public type_parameter_constraints_clause(): Type_parameter_constraints_clauseContext[];
	public type_parameter_constraints_clause(i: number): Type_parameter_constraints_clauseContext;
	public type_parameter_constraints_clause(i?: number): Type_parameter_constraints_clauseContext | Type_parameter_constraints_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_parameter_constraints_clauseContext);
		} else {
			return this.getRuleContext(i, Type_parameter_constraints_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints_clauses; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints_clauses) {
			listener.enterType_parameter_constraints_clauses(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints_clauses) {
			listener.exitType_parameter_constraints_clauses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_parameter_constraints_clauses) {
			return visitor.visitType_parameter_constraints_clauses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_parameter_constraints_clauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(CSharpParser.WHERE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public type_parameter_constraints(): Type_parameter_constraintsContext {
		return this.getRuleContext(0, Type_parameter_constraintsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints_clause; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints_clause) {
			listener.enterType_parameter_constraints_clause(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints_clause) {
			listener.exitType_parameter_constraints_clause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_parameter_constraints_clause) {
			return visitor.visitType_parameter_constraints_clause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_parameter_constraintsContext extends ParserRuleContext {
	public constructor_constraint(): Constructor_constraintContext | undefined {
		return this.tryGetRuleContext(0, Constructor_constraintContext);
	}
	public primary_constraint(): Primary_constraintContext | undefined {
		return this.tryGetRuleContext(0, Primary_constraintContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public secondary_constraints(): Secondary_constraintsContext | undefined {
		return this.tryGetRuleContext(0, Secondary_constraintsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_type_parameter_constraints; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterType_parameter_constraints) {
			listener.enterType_parameter_constraints(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitType_parameter_constraints) {
			listener.exitType_parameter_constraints(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitType_parameter_constraints) {
			return visitor.visitType_parameter_constraints(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primary_constraintContext extends ParserRuleContext {
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLASS, 0); }
	public INTERR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERR, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRUCT, 0); }
	public UNMANAGED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNMANAGED, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_primary_constraint; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPrimary_constraint) {
			listener.enterPrimary_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPrimary_constraint) {
			listener.exitPrimary_constraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitPrimary_constraint) {
			return visitor.visitPrimary_constraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Secondary_constraintsContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext[];
	public namespace_or_type_name(i: number): Namespace_or_type_nameContext;
	public namespace_or_type_name(i?: number): Namespace_or_type_nameContext | Namespace_or_type_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Namespace_or_type_nameContext);
		} else {
			return this.getRuleContext(i, Namespace_or_type_nameContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_secondary_constraints; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSecondary_constraints) {
			listener.enterSecondary_constraints(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSecondary_constraints) {
			listener.exitSecondary_constraints(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSecondary_constraints) {
			return visitor.visitSecondary_constraints(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_constraintContext extends ParserRuleContext {
	public NEW(): TerminalNode { return this.getToken(CSharpParser.NEW, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_constraint; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_constraint) {
			listener.enterConstructor_constraint(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_constraint) {
			listener.exitConstructor_constraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstructor_constraint) {
			return visitor.visitConstructor_constraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public class_member_declarations(): Class_member_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Class_member_declarationsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_body) {
			listener.enterClass_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_body) {
			listener.exitClass_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_body) {
			return visitor.visitClass_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_member_declarationsContext extends ParserRuleContext {
	public class_member_declaration(): Class_member_declarationContext[];
	public class_member_declaration(i: number): Class_member_declarationContext;
	public class_member_declaration(i?: number): Class_member_declarationContext | Class_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Class_member_declarationContext);
		} else {
			return this.getRuleContext(i, Class_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_member_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_member_declarations) {
			listener.enterClass_member_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_member_declarations) {
			listener.exitClass_member_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_member_declarations) {
			return visitor.visitClass_member_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_member_declarationContext extends ParserRuleContext {
	public common_member_declaration(): Common_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Common_member_declarationContext);
	}
	public destructor_definition(): Destructor_definitionContext | undefined {
		return this.tryGetRuleContext(0, Destructor_definitionContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_member_declaration) {
			listener.enterClass_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_member_declaration) {
			listener.exitClass_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_member_declaration) {
			return visitor.visitClass_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class All_member_modifiersContext extends ParserRuleContext {
	public all_member_modifier(): All_member_modifierContext[];
	public all_member_modifier(i: number): All_member_modifierContext;
	public all_member_modifier(i?: number): All_member_modifierContext | All_member_modifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(All_member_modifierContext);
		} else {
			return this.getRuleContext(i, All_member_modifierContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_all_member_modifiers; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAll_member_modifiers) {
			listener.enterAll_member_modifiers(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAll_member_modifiers) {
			listener.exitAll_member_modifiers(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAll_member_modifiers) {
			return visitor.visitAll_member_modifiers(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class All_member_modifierContext extends ParserRuleContext {
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PUBLIC, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOLATILE, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VIRTUAL, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEALED, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OVERRIDE, 0); }
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ABSTRACT, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STATIC, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public EXTERN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXTERN, 0); }
	public PARTIAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARTIAL, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_all_member_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAll_member_modifier) {
			listener.enterAll_member_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAll_member_modifier) {
			listener.exitAll_member_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAll_member_modifier) {
			return visitor.visitAll_member_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Common_member_declarationContext extends ParserRuleContext {
	public constant_declaration(): Constant_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constant_declarationContext);
	}
	public typed_member_declaration(): Typed_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Typed_member_declarationContext);
	}
	public event_declaration(): Event_declarationContext | undefined {
		return this.tryGetRuleContext(0, Event_declarationContext);
	}
	public conversion_operator_declarator(): Conversion_operator_declaratorContext | undefined {
		return this.tryGetRuleContext(0, Conversion_operator_declaratorContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public constructor_declaration(): Constructor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Constructor_declarationContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public method_declaration(): Method_declarationContext | undefined {
		return this.tryGetRuleContext(0, Method_declarationContext);
	}
	public class_definition(): Class_definitionContext | undefined {
		return this.tryGetRuleContext(0, Class_definitionContext);
	}
	public struct_definition(): Struct_definitionContext | undefined {
		return this.tryGetRuleContext(0, Struct_definitionContext);
	}
	public interface_definition(): Interface_definitionContext | undefined {
		return this.tryGetRuleContext(0, Interface_definitionContext);
	}
	public enum_definition(): Enum_definitionContext | undefined {
		return this.tryGetRuleContext(0, Enum_definitionContext);
	}
	public delegate_definition(): Delegate_definitionContext | undefined {
		return this.tryGetRuleContext(0, Delegate_definitionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_common_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterCommon_member_declaration) {
			listener.enterCommon_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitCommon_member_declaration) {
			listener.exitCommon_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitCommon_member_declaration) {
			return visitor.visitCommon_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Typed_member_declarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public namespace_or_type_name(): Namespace_or_type_nameContext | undefined {
		return this.tryGetRuleContext(0, Namespace_or_type_nameContext);
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOT, 0); }
	public indexer_declaration(): Indexer_declarationContext | undefined {
		return this.tryGetRuleContext(0, Indexer_declarationContext);
	}
	public method_declaration(): Method_declarationContext | undefined {
		return this.tryGetRuleContext(0, Method_declarationContext);
	}
	public property_declaration(): Property_declarationContext | undefined {
		return this.tryGetRuleContext(0, Property_declarationContext);
	}
	public operator_declaration(): Operator_declarationContext | undefined {
		return this.tryGetRuleContext(0, Operator_declarationContext);
	}
	public field_declaration(): Field_declarationContext | undefined {
		return this.tryGetRuleContext(0, Field_declarationContext);
	}
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_typed_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterTyped_member_declaration) {
			listener.enterTyped_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitTyped_member_declaration) {
			listener.exitTyped_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitTyped_member_declaration) {
			return visitor.visitTyped_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_declaratorsContext extends ParserRuleContext {
	public constant_declarator(): Constant_declaratorContext[];
	public constant_declarator(i: number): Constant_declaratorContext;
	public constant_declarator(i?: number): Constant_declaratorContext | Constant_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Constant_declaratorContext);
		} else {
			return this.getRuleContext(i, Constant_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declarators) {
			listener.enterConstant_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declarators) {
			listener.exitConstant_declarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstant_declarators) {
			return visitor.visitConstant_declarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declarator) {
			listener.enterConstant_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declarator) {
			listener.exitConstant_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstant_declarator) {
			return visitor.visitConstant_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declaratorsContext extends ParserRuleContext {
	public variable_declarator(): Variable_declaratorContext[];
	public variable_declarator(i: number): Variable_declaratorContext;
	public variable_declarator(i?: number): Variable_declaratorContext | Variable_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variable_declaratorContext);
		} else {
			return this.getRuleContext(i, Variable_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_declarators) {
			listener.enterVariable_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_declarators) {
			listener.exitVariable_declarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariable_declarators) {
			return visitor.visitVariable_declarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public variable_initializer(): Variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Variable_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_declarator) {
			listener.enterVariable_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_declarator) {
			listener.exitVariable_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariable_declarator) {
			return visitor.visitVariable_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variable_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public array_initializer(): Array_initializerContext | undefined {
		return this.tryGetRuleContext(0, Array_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variable_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariable_initializer) {
			listener.enterVariable_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariable_initializer) {
			listener.exitVariable_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariable_initializer) {
			return visitor.visitVariable_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_typeContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_return_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterReturn_type) {
			listener.enterReturn_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitReturn_type) {
			listener.exitReturn_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitReturn_type) {
			return visitor.visitReturn_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Member_nameContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_member_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMember_name) {
			listener.enterMember_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMember_name) {
			listener.exitMember_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMember_name) {
			return visitor.visitMember_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_body) {
			listener.enterMethod_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_body) {
			listener.exitMethod_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMethod_body) {
			return visitor.visitMethod_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Formal_parameter_listContext extends ParserRuleContext {
	public parameter_array(): Parameter_arrayContext | undefined {
		return this.tryGetRuleContext(0, Parameter_arrayContext);
	}
	public fixed_parameters(): Fixed_parametersContext | undefined {
		return this.tryGetRuleContext(0, Fixed_parametersContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_formal_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFormal_parameter_list) {
			listener.enterFormal_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFormal_parameter_list) {
			listener.exitFormal_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFormal_parameter_list) {
			return visitor.visitFormal_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_parametersContext extends ParserRuleContext {
	public fixed_parameter(): Fixed_parameterContext[];
	public fixed_parameter(i: number): Fixed_parameterContext;
	public fixed_parameter(i?: number): Fixed_parameterContext | Fixed_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_parameterContext);
		} else {
			return this.getRuleContext(i, Fixed_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_parameters; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_parameters) {
			listener.enterFixed_parameters(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_parameters) {
			listener.exitFixed_parameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_parameters) {
			return visitor.visitFixed_parameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_parameterContext extends ParserRuleContext {
	public arg_declaration(): Arg_declarationContext | undefined {
		return this.tryGetRuleContext(0, Arg_declarationContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public parameter_modifier(): Parameter_modifierContext | undefined {
		return this.tryGetRuleContext(0, Parameter_modifierContext);
	}
	public ARGLIST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ARGLIST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_parameter) {
			listener.enterFixed_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_parameter) {
			listener.exitFixed_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_parameter) {
			return visitor.visitFixed_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_modifierContext extends ParserRuleContext {
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_parameter_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParameter_modifier) {
			listener.enterParameter_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParameter_modifier) {
			listener.exitParameter_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitParameter_modifier) {
			return visitor.visitParameter_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_arrayContext extends ParserRuleContext {
	public PARAMS(): TerminalNode { return this.getToken(CSharpParser.PARAMS, 0); }
	public array_type(): Array_typeContext {
		return this.getRuleContext(0, Array_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_parameter_array; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterParameter_array) {
			listener.enterParameter_array(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitParameter_array) {
			listener.exitParameter_array(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitParameter_array) {
			return visitor.visitParameter_array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Accessor_declarationsContext extends ParserRuleContext {
	public _attrs!: AttributesContext;
	public _mods!: Accessor_modifierContext;
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public accessor_body(): Accessor_bodyContext | undefined {
		return this.tryGetRuleContext(0, Accessor_bodyContext);
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	public set_accessor_declaration(): Set_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Set_accessor_declarationContext);
	}
	public get_accessor_declaration(): Get_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Get_accessor_declarationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_declarations) {
			listener.enterAccessor_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_declarations) {
			listener.exitAccessor_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAccessor_declarations) {
			return visitor.visitAccessor_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Get_accessor_declarationContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(CSharpParser.GET, 0); }
	public accessor_body(): Accessor_bodyContext {
		return this.getRuleContext(0, Accessor_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_get_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGet_accessor_declaration) {
			listener.enterGet_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGet_accessor_declaration) {
			listener.exitGet_accessor_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGet_accessor_declaration) {
			return visitor.visitGet_accessor_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Set_accessor_declarationContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(CSharpParser.SET, 0); }
	public accessor_body(): Accessor_bodyContext {
		return this.getRuleContext(0, Accessor_bodyContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public accessor_modifier(): Accessor_modifierContext | undefined {
		return this.tryGetRuleContext(0, Accessor_modifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_set_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterSet_accessor_declaration) {
			listener.enterSet_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitSet_accessor_declaration) {
			listener.exitSet_accessor_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitSet_accessor_declaration) {
			return visitor.visitSet_accessor_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Accessor_modifierContext extends ParserRuleContext {
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_modifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_modifier) {
			listener.enterAccessor_modifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_modifier) {
			listener.exitAccessor_modifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAccessor_modifier) {
			return visitor.visitAccessor_modifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Accessor_bodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_accessor_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAccessor_body) {
			listener.enterAccessor_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAccessor_body) {
			listener.exitAccessor_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAccessor_body) {
			return visitor.visitAccessor_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_accessor_declarationsContext extends ParserRuleContext {
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ADD, 0); }
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public remove_accessor_declaration(): Remove_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Remove_accessor_declarationContext);
	}
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REMOVE, 0); }
	public add_accessor_declaration(): Add_accessor_declarationContext | undefined {
		return this.tryGetRuleContext(0, Add_accessor_declarationContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_event_accessor_declarations; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEvent_accessor_declarations) {
			listener.enterEvent_accessor_declarations(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEvent_accessor_declarations) {
			listener.exitEvent_accessor_declarations(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEvent_accessor_declarations) {
			return visitor.visitEvent_accessor_declarations(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Add_accessor_declarationContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(CSharpParser.ADD, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_add_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAdd_accessor_declaration) {
			listener.enterAdd_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAdd_accessor_declaration) {
			listener.exitAdd_accessor_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAdd_accessor_declaration) {
			return visitor.visitAdd_accessor_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Remove_accessor_declarationContext extends ParserRuleContext {
	public REMOVE(): TerminalNode { return this.getToken(CSharpParser.REMOVE, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_remove_accessor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRemove_accessor_declaration) {
			listener.enterRemove_accessor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRemove_accessor_declaration) {
			listener.exitRemove_accessor_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRemove_accessor_declaration) {
			return visitor.visitRemove_accessor_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Overloadable_operatorContext extends ParserRuleContext {
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.MINUS, 0); }
	public BANG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BANG, 0); }
	public TILDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TILDE, 0); }
	public OP_INC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_INC, 0); }
	public OP_DEC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_DEC, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	public STAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STAR, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DIV, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PERCENT, 0); }
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public BITWISE_OR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BITWISE_OR, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CARET, 0); }
	public OP_LEFT_SHIFT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LEFT_SHIFT, 0); }
	public right_shift(): Right_shiftContext | undefined {
		return this.tryGetRuleContext(0, Right_shiftContext);
	}
	public OP_EQ(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_EQ, 0); }
	public OP_NE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_NE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LT, 0); }
	public OP_GE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_GE, 0); }
	public OP_LE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OP_LE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_overloadable_operator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOverloadable_operator) {
			listener.enterOverloadable_operator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOverloadable_operator) {
			listener.exitOverloadable_operator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitOverloadable_operator) {
			return visitor.visitOverloadable_operator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Conversion_operator_declaratorContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(CSharpParser.OPERATOR, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public arg_declaration(): Arg_declarationContext {
		return this.getRuleContext(0, Arg_declarationContext);
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IMPLICIT, 0); }
	public EXPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXPLICIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_conversion_operator_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConversion_operator_declarator) {
			listener.enterConversion_operator_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConversion_operator_declarator) {
			listener.exitConversion_operator_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConversion_operator_declarator) {
			return visitor.visitConversion_operator_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_initializerContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public BASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BASE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_initializer) {
			listener.enterConstructor_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_initializer) {
			listener.exitConstructor_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstructor_initializer) {
			return visitor.visitConstructor_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BodyContext extends ParserRuleContext {
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBody) {
			listener.enterBody(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBody) {
			listener.exitBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBody) {
			return visitor.visitBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_interfacesContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public interface_type_list(): Interface_type_listContext {
		return this.getRuleContext(0, Interface_type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_interfaces; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_interfaces) {
			listener.enterStruct_interfaces(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_interfaces) {
			listener.exitStruct_interfaces(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStruct_interfaces) {
			return visitor.visitStruct_interfaces(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public struct_member_declaration(): Struct_member_declarationContext[];
	public struct_member_declaration(i: number): Struct_member_declarationContext;
	public struct_member_declaration(i?: number): Struct_member_declarationContext | Struct_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Struct_member_declarationContext);
		} else {
			return this.getRuleContext(i, Struct_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_body) {
			listener.enterStruct_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_body) {
			listener.exitStruct_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStruct_body) {
			return visitor.visitStruct_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_member_declarationContext extends ParserRuleContext {
	public common_member_declaration(): Common_member_declarationContext | undefined {
		return this.tryGetRuleContext(0, Common_member_declarationContext);
	}
	public FIXED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FIXED, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public all_member_modifiers(): All_member_modifiersContext | undefined {
		return this.tryGetRuleContext(0, All_member_modifiersContext);
	}
	public fixed_size_buffer_declarator(): Fixed_size_buffer_declaratorContext[];
	public fixed_size_buffer_declarator(i: number): Fixed_size_buffer_declaratorContext;
	public fixed_size_buffer_declarator(i?: number): Fixed_size_buffer_declaratorContext | Fixed_size_buffer_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_size_buffer_declaratorContext);
		} else {
			return this.getRuleContext(i, Fixed_size_buffer_declaratorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_member_declaration) {
			listener.enterStruct_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_member_declaration) {
			listener.exitStruct_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStruct_member_declaration) {
			return visitor.visitStruct_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public base_type(): Base_typeContext {
		return this.getRuleContext(0, Base_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.STAR);
		} else {
			return this.getToken(CSharpParser.STAR, i);
		}
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_array_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitArray_type) {
			return visitor.visitArray_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Rank_specifierContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_rank_specifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRank_specifier) {
			listener.enterRank_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRank_specifier) {
			listener.exitRank_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRank_specifier) {
			return visitor.visitRank_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_initializerContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public variable_initializer(): Variable_initializerContext[];
	public variable_initializer(i: number): Variable_initializerContext;
	public variable_initializer(i?: number): Variable_initializerContext | Variable_initializerContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variable_initializerContext);
		} else {
			return this.getRuleContext(i, Variable_initializerContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_array_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArray_initializer) {
			listener.enterArray_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArray_initializer) {
			listener.exitArray_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitArray_initializer) {
			return visitor.visitArray_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_type_parameter_listContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(CSharpParser.LT, 0); }
	public variant_type_parameter(): Variant_type_parameterContext[];
	public variant_type_parameter(i: number): Variant_type_parameterContext;
	public variant_type_parameter(i?: number): Variant_type_parameterContext | Variant_type_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Variant_type_parameterContext);
		} else {
			return this.getRuleContext(i, Variant_type_parameterContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variant_type_parameter_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariant_type_parameter_list) {
			listener.enterVariant_type_parameter_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariant_type_parameter_list) {
			listener.exitVariant_type_parameter_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariant_type_parameter_list) {
			return visitor.visitVariant_type_parameter_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variant_type_parameterContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public variance_annotation(): Variance_annotationContext | undefined {
		return this.tryGetRuleContext(0, Variance_annotationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variant_type_parameter; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariant_type_parameter) {
			listener.enterVariant_type_parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariant_type_parameter) {
			listener.exitVariant_type_parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariant_type_parameter) {
			return visitor.visitVariant_type_parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Variance_annotationContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_variance_annotation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterVariance_annotation) {
			listener.enterVariance_annotation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitVariance_annotation) {
			listener.exitVariance_annotation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitVariance_annotation) {
			return visitor.visitVariance_annotation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public interface_type_list(): Interface_type_listContext {
		return this.getRuleContext(0, Interface_type_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_base) {
			listener.enterInterface_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_base) {
			listener.exitInterface_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_base) {
			return visitor.visitInterface_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public interface_member_declaration(): Interface_member_declarationContext[];
	public interface_member_declaration(i: number): Interface_member_declarationContext;
	public interface_member_declaration(i?: number): Interface_member_declarationContext | Interface_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interface_member_declarationContext);
		} else {
			return this.getRuleContext(i, Interface_member_declarationContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_body) {
			listener.enterInterface_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_body) {
			listener.exitInterface_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_body) {
			return visitor.visitInterface_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_member_declarationContext extends ParserRuleContext {
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EVENT, 0); }
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public interface_accessors(): Interface_accessorsContext | undefined {
		return this.tryGetRuleContext(0, Interface_accessorsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public OPEN_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACKET, 0); }
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACKET, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_member_declaration) {
			listener.enterInterface_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_member_declaration) {
			listener.exitInterface_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_member_declaration) {
			return visitor.visitInterface_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_accessorsContext extends ParserRuleContext {
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.SEMICOLON);
		} else {
			return this.getToken(CSharpParser.SEMICOLON, i);
		}
	}
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public attributes(): AttributesContext[];
	public attributes(i: number): AttributesContext;
	public attributes(i?: number): AttributesContext | AttributesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributesContext);
		} else {
			return this.getRuleContext(i, AttributesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_accessors; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_accessors) {
			listener.enterInterface_accessors(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_accessors) {
			listener.exitInterface_accessors(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_accessors) {
			return visitor.visitInterface_accessors(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_baseContext extends ParserRuleContext {
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_base; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_base) {
			listener.enterEnum_base(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_base) {
			listener.exitEnum_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEnum_base) {
			return visitor.visitEnum_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_bodyContext extends ParserRuleContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACE, 0); }
	public enum_member_declaration(): Enum_member_declarationContext[];
	public enum_member_declaration(i: number): Enum_member_declarationContext;
	public enum_member_declaration(i?: number): Enum_member_declarationContext | Enum_member_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Enum_member_declarationContext);
		} else {
			return this.getRuleContext(i, Enum_member_declarationContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_body; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_body) {
			listener.enterEnum_body(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_body) {
			listener.exitEnum_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEnum_body) {
			return visitor.visitEnum_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_member_declarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public attributes(): AttributesContext | undefined {
		return this.tryGetRuleContext(0, AttributesContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_member_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_member_declaration) {
			listener.enterEnum_member_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_member_declaration) {
			listener.exitEnum_member_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEnum_member_declaration) {
			return visitor.visitEnum_member_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_attribute_sectionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public global_attribute_target(): Global_attribute_targetContext {
		return this.getRuleContext(0, Global_attribute_targetContext);
	}
	public COLON(): TerminalNode { return this.getToken(CSharpParser.COLON, 0); }
	public attribute_list(): Attribute_listContext {
		return this.getRuleContext(0, Attribute_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_global_attribute_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGlobal_attribute_section) {
			listener.enterGlobal_attribute_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGlobal_attribute_section) {
			listener.exitGlobal_attribute_section(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGlobal_attribute_section) {
			return visitor.visitGlobal_attribute_section(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Global_attribute_targetContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_global_attribute_target; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterGlobal_attribute_target) {
			listener.enterGlobal_attribute_target(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitGlobal_attribute_target) {
			listener.exitGlobal_attribute_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitGlobal_attribute_target) {
			return visitor.visitGlobal_attribute_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributesContext extends ParserRuleContext {
	public attribute_section(): Attribute_sectionContext[];
	public attribute_section(i: number): Attribute_sectionContext;
	public attribute_section(i?: number): Attribute_sectionContext | Attribute_sectionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attribute_sectionContext);
		} else {
			return this.getRuleContext(i, Attribute_sectionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attributes; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttributes) {
			listener.enterAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttributes) {
			listener.exitAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttributes) {
			return visitor.visitAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_sectionContext extends ParserRuleContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public attribute_list(): Attribute_listContext {
		return this.getRuleContext(0, Attribute_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public attribute_target(): Attribute_targetContext | undefined {
		return this.tryGetRuleContext(0, Attribute_targetContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_section; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_section) {
			listener.enterAttribute_section(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_section) {
			listener.exitAttribute_section(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute_section) {
			return visitor.visitAttribute_section(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_targetContext extends ParserRuleContext {
	public keyword(): KeywordContext | undefined {
		return this.tryGetRuleContext(0, KeywordContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_target; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_target) {
			listener.enterAttribute_target(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_target) {
			listener.exitAttribute_target(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute_target) {
			return visitor.visitAttribute_target(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_listContext extends ParserRuleContext {
	public attribute(): AttributeContext[];
	public attribute(i: number): AttributeContext;
	public attribute(i?: number): AttributeContext | AttributeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeContext);
		} else {
			return this.getRuleContext(i, AttributeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_list; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_list) {
			listener.enterAttribute_list(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_list) {
			listener.exitAttribute_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute_list) {
			return visitor.visitAttribute_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeContext extends ParserRuleContext {
	public namespace_or_type_name(): Namespace_or_type_nameContext {
		return this.getRuleContext(0, Namespace_or_type_nameContext);
	}
	public OPEN_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_PARENS, 0); }
	public attribute_argument(): Attribute_argumentContext[];
	public attribute_argument(i: number): Attribute_argumentContext;
	public attribute_argument(i?: number): Attribute_argumentContext | Attribute_argumentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Attribute_argumentContext);
		} else {
			return this.getRuleContext(i, Attribute_argumentContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute) {
			listener.enterAttribute(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute) {
			listener.exitAttribute(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute) {
			return visitor.visitAttribute(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Attribute_argumentContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public identifier(): IdentifierContext | undefined {
		return this.tryGetRuleContext(0, IdentifierContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_attribute_argument; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterAttribute_argument) {
			listener.enterAttribute_argument(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitAttribute_argument) {
			listener.exitAttribute_argument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitAttribute_argument) {
			return visitor.visitAttribute_argument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pointer_typeContext extends ParserRuleContext {
	public STAR(): TerminalNode { return this.getToken(CSharpParser.STAR, 0); }
	public simple_type(): Simple_typeContext | undefined {
		return this.tryGetRuleContext(0, Simple_typeContext);
	}
	public class_type(): Class_typeContext | undefined {
		return this.tryGetRuleContext(0, Class_typeContext);
	}
	public rank_specifier(): Rank_specifierContext[];
	public rank_specifier(i: number): Rank_specifierContext;
	public rank_specifier(i?: number): Rank_specifierContext | Rank_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Rank_specifierContext);
		} else {
			return this.getRuleContext(i, Rank_specifierContext);
		}
	}
	public INTERR(): TerminalNode[];
	public INTERR(i: number): TerminalNode;
	public INTERR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.INTERR);
		} else {
			return this.getToken(CSharpParser.INTERR, i);
		}
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_pointer_type; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterPointer_type) {
			listener.enterPointer_type(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitPointer_type) {
			listener.exitPointer_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitPointer_type) {
			return visitor.visitPointer_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_pointer_declaratorsContext extends ParserRuleContext {
	public fixed_pointer_declarator(): Fixed_pointer_declaratorContext[];
	public fixed_pointer_declarator(i: number): Fixed_pointer_declaratorContext;
	public fixed_pointer_declarator(i?: number): Fixed_pointer_declaratorContext | Fixed_pointer_declaratorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Fixed_pointer_declaratorContext);
		} else {
			return this.getRuleContext(i, Fixed_pointer_declaratorContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_declarators; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_declarators) {
			listener.enterFixed_pointer_declarators(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_declarators) {
			listener.exitFixed_pointer_declarators(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_pointer_declarators) {
			return visitor.visitFixed_pointer_declarators(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_pointer_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public fixed_pointer_initializer(): Fixed_pointer_initializerContext {
		return this.getRuleContext(0, Fixed_pointer_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_declarator) {
			listener.enterFixed_pointer_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_declarator) {
			listener.exitFixed_pointer_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_pointer_declarator) {
			return visitor.visitFixed_pointer_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_pointer_initializerContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public AMP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AMP, 0); }
	public stackalloc_initializer(): Stackalloc_initializerContext | undefined {
		return this.tryGetRuleContext(0, Stackalloc_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_pointer_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_pointer_initializer) {
			listener.enterFixed_pointer_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_pointer_initializer) {
			listener.exitFixed_pointer_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_pointer_initializer) {
			return visitor.visitFixed_pointer_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Fixed_size_buffer_declaratorContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_fixed_size_buffer_declarator; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterFixed_size_buffer_declarator) {
			listener.enterFixed_size_buffer_declarator(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitFixed_size_buffer_declarator) {
			listener.exitFixed_size_buffer_declarator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitFixed_size_buffer_declarator) {
			return visitor.visitFixed_size_buffer_declarator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stackalloc_initializerContext extends ParserRuleContext {
	public STACKALLOC(): TerminalNode { return this.getToken(CSharpParser.STACKALLOC, 0); }
	public type_(): Type_Context | undefined {
		return this.tryGetRuleContext(0, Type_Context);
	}
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_stackalloc_initializer; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStackalloc_initializer) {
			listener.enterStackalloc_initializer(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStackalloc_initializer) {
			listener.exitStackalloc_initializer(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStackalloc_initializer) {
			return visitor.visitStackalloc_initializer(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_arrowContext extends ParserRuleContext {
	public _first!: Token;
	public _second!: Token;
	public ASSIGNMENT(): TerminalNode { return this.getToken(CSharpParser.ASSIGNMENT, 0); }
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_arrow; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_arrow) {
			listener.enterRight_arrow(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_arrow) {
			listener.exitRight_arrow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRight_arrow) {
			return visitor.visitRight_arrow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_shiftContext extends ParserRuleContext {
	public _first!: Token;
	public _second!: Token;
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.GT);
		} else {
			return this.getToken(CSharpParser.GT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_shift; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_shift) {
			listener.enterRight_shift(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_shift) {
			listener.exitRight_shift(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRight_shift) {
			return visitor.visitRight_shift(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Right_shift_assignmentContext extends ParserRuleContext {
	public _first!: Token;
	public _second!: Token;
	public GT(): TerminalNode { return this.getToken(CSharpParser.GT, 0); }
	public OP_GE(): TerminalNode { return this.getToken(CSharpParser.OP_GE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_right_shift_assignment; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterRight_shift_assignment) {
			listener.enterRight_shift_assignment(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitRight_shift_assignment) {
			listener.exitRight_shift_assignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitRight_shift_assignment) {
			return visitor.visitRight_shift_assignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public string_literal(): String_literalContext | undefined {
		return this.tryGetRuleContext(0, String_literalContext);
	}
	public INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTEGER_LITERAL, 0); }
	public HEX_INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.HEX_INTEGER_LITERAL, 0); }
	public BIN_INTEGER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BIN_INTEGER_LITERAL, 0); }
	public REAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REAL_LITERAL, 0); }
	public CHARACTER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHARACTER_LITERAL, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NULL_, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_boolean_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterBoolean_literal) {
			listener.enterBoolean_literal(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitBoolean_literal) {
			listener.exitBoolean_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitBoolean_literal) {
			return visitor.visitBoolean_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_literalContext extends ParserRuleContext {
	public interpolated_regular_string(): Interpolated_regular_stringContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_regular_stringContext);
	}
	public interpolated_verbatium_string(): Interpolated_verbatium_stringContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_verbatium_stringContext);
	}
	public REGULAR_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_STRING, 0); }
	public VERBATIUM_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_string_literal; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterString_literal) {
			listener.enterString_literal(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitString_literal) {
			listener.exitString_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitString_literal) {
			return visitor.visitString_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolated_regular_stringContext extends ParserRuleContext {
	public INTERPOLATED_REGULAR_STRING_START(): TerminalNode { return this.getToken(CSharpParser.INTERPOLATED_REGULAR_STRING_START, 0); }
	public DOUBLE_QUOTE_INSIDE(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0); }
	public interpolated_regular_string_part(): Interpolated_regular_string_partContext[];
	public interpolated_regular_string_part(i: number): Interpolated_regular_string_partContext;
	public interpolated_regular_string_part(i?: number): Interpolated_regular_string_partContext | Interpolated_regular_string_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interpolated_regular_string_partContext);
		} else {
			return this.getRuleContext(i, Interpolated_regular_string_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_regular_string; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_regular_string) {
			listener.enterInterpolated_regular_string(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_regular_string) {
			listener.exitInterpolated_regular_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpolated_regular_string) {
			return visitor.visitInterpolated_regular_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolated_verbatium_stringContext extends ParserRuleContext {
	public INTERPOLATED_VERBATIUM_STRING_START(): TerminalNode { return this.getToken(CSharpParser.INTERPOLATED_VERBATIUM_STRING_START, 0); }
	public DOUBLE_QUOTE_INSIDE(): TerminalNode { return this.getToken(CSharpParser.DOUBLE_QUOTE_INSIDE, 0); }
	public interpolated_verbatium_string_part(): Interpolated_verbatium_string_partContext[];
	public interpolated_verbatium_string_part(i: number): Interpolated_verbatium_string_partContext;
	public interpolated_verbatium_string_part(i?: number): Interpolated_verbatium_string_partContext | Interpolated_verbatium_string_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Interpolated_verbatium_string_partContext);
		} else {
			return this.getRuleContext(i, Interpolated_verbatium_string_partContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_verbatium_string; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_verbatium_string) {
			listener.enterInterpolated_verbatium_string(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_verbatium_string) {
			listener.exitInterpolated_verbatium_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpolated_verbatium_string) {
			return visitor.visitInterpolated_verbatium_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolated_regular_string_partContext extends ParserRuleContext {
	public interpolated_string_expression(): Interpolated_string_expressionContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_string_expressionContext);
	}
	public DOUBLE_CURLY_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0); }
	public REGULAR_CHAR_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_CHAR_INSIDE, 0); }
	public REGULAR_STRING_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REGULAR_STRING_INSIDE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_regular_string_part; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_regular_string_part) {
			listener.enterInterpolated_regular_string_part(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_regular_string_part) {
			listener.exitInterpolated_regular_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpolated_regular_string_part) {
			return visitor.visitInterpolated_regular_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolated_verbatium_string_partContext extends ParserRuleContext {
	public interpolated_string_expression(): Interpolated_string_expressionContext | undefined {
		return this.tryGetRuleContext(0, Interpolated_string_expressionContext);
	}
	public DOUBLE_CURLY_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_CURLY_INSIDE, 0); }
	public VERBATIUM_DOUBLE_QUOTE_INSIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_DOUBLE_QUOTE_INSIDE, 0); }
	public VERBATIUM_INSIDE_STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VERBATIUM_INSIDE_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_verbatium_string_part; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_verbatium_string_part) {
			listener.enterInterpolated_verbatium_string_part(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_verbatium_string_part) {
			listener.exitInterpolated_verbatium_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpolated_verbatium_string_part) {
			return visitor.visitInterpolated_verbatium_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interpolated_string_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.COMMA);
		} else {
			return this.getToken(CSharpParser.COMMA, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COLON, 0); }
	public FORMAT_STRING(): TerminalNode[];
	public FORMAT_STRING(i: number): TerminalNode;
	public FORMAT_STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.FORMAT_STRING);
		} else {
			return this.getToken(CSharpParser.FORMAT_STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interpolated_string_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterpolated_string_expression) {
			listener.enterInterpolated_string_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterpolated_string_expression) {
			listener.exitInterpolated_string_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterpolated_string_expression) {
			return visitor.visitInterpolated_string_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeywordContext extends ParserRuleContext {
	public ABSTRACT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ABSTRACT, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AS, 0); }
	public BASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BASE, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BOOL, 0); }
	public BREAK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BREAK, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BYTE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CASE, 0); }
	public CATCH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CATCH, 0); }
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHAR, 0); }
	public CHECKED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CHECKED, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLASS, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CONST, 0); }
	public CONTINUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CONTINUE, 0); }
	public DECIMAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DECIMAL, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DEFAULT, 0); }
	public DELEGATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DELEGATE, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DO, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ELSE, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ENUM, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EVENT, 0); }
	public EXPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXPLICIT, 0); }
	public EXTERN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EXTERN, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FALSE, 0); }
	public FINALLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FINALLY, 0); }
	public FIXED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FIXED, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FLOAT, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FOR, 0); }
	public FOREACH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FOREACH, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IF, 0); }
	public IMPLICIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IMPLICIT, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IN, 0); }
	public INT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INT, 0); }
	public INTERFACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERFACE, 0); }
	public INTERNAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTERNAL, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IS, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LOCK, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LONG, 0); }
	public NAMESPACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NAMESPACE, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NEW, 0); }
	public NULL_(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NULL_, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OBJECT, 0); }
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPERATOR, 0); }
	public OUT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OUT, 0); }
	public OVERRIDE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OVERRIDE, 0); }
	public PARAMS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARAMS, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PRIVATE, 0); }
	public PROTECTED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PROTECTED, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PUBLIC, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.RETURN, 0); }
	public SBYTE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SBYTE, 0); }
	public SEALED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEALED, 0); }
	public SHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SHORT, 0); }
	public SIZEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SIZEOF, 0); }
	public STACKALLOC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STACKALLOC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STATIC, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRING, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.STRUCT, 0); }
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SWITCH, 0); }
	public THIS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THIS, 0); }
	public THROW(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.THROW, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRUE, 0); }
	public TRY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TRY, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.TYPEOF, 0); }
	public UINT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UINT, 0); }
	public ULONG(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ULONG, 0); }
	public UNCHECKED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNCHECKED, 0); }
	public UNMANAGED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNMANAGED, 0); }
	public UNSAFE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNSAFE, 0); }
	public USHORT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USHORT, 0); }
	public USING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.USING, 0); }
	public VIRTUAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VIRTUAL, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOID, 0); }
	public VOLATILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VOLATILE, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_keyword; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterKeyword) {
			listener.enterKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitKeyword) {
			listener.exitKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitKeyword) {
			return visitor.visitKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Class_definitionContext extends ParserRuleContext {
	public CLASS(): TerminalNode { return this.getToken(CSharpParser.CLASS, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public class_body(): Class_bodyContext {
		return this.getRuleContext(0, Class_bodyContext);
	}
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public class_base(): Class_baseContext | undefined {
		return this.tryGetRuleContext(0, Class_baseContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_class_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterClass_definition) {
			listener.enterClass_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitClass_definition) {
			listener.exitClass_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitClass_definition) {
			return visitor.visitClass_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_definitionContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(CSharpParser.STRUCT, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public struct_body(): Struct_bodyContext {
		return this.getRuleContext(0, Struct_bodyContext);
	}
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public struct_interfaces(): Struct_interfacesContext | undefined {
		return this.tryGetRuleContext(0, Struct_interfacesContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public READONLY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.READONLY, 0); }
	public REF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_struct_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterStruct_definition) {
			listener.enterStruct_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitStruct_definition) {
			listener.exitStruct_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitStruct_definition) {
			return visitor.visitStruct_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Interface_definitionContext extends ParserRuleContext {
	public INTERFACE(): TerminalNode { return this.getToken(CSharpParser.INTERFACE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public class_body(): Class_bodyContext {
		return this.getRuleContext(0, Class_bodyContext);
	}
	public variant_type_parameter_list(): Variant_type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Variant_type_parameter_listContext);
	}
	public interface_base(): Interface_baseContext | undefined {
		return this.tryGetRuleContext(0, Interface_baseContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_interface_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterInterface_definition) {
			listener.enterInterface_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitInterface_definition) {
			listener.exitInterface_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitInterface_definition) {
			return visitor.visitInterface_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Enum_definitionContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(CSharpParser.ENUM, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public enum_body(): Enum_bodyContext {
		return this.getRuleContext(0, Enum_bodyContext);
	}
	public enum_base(): Enum_baseContext | undefined {
		return this.tryGetRuleContext(0, Enum_baseContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_enum_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEnum_definition) {
			listener.enterEnum_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEnum_definition) {
			listener.exitEnum_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEnum_definition) {
			return visitor.visitEnum_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Delegate_definitionContext extends ParserRuleContext {
	public DELEGATE(): TerminalNode { return this.getToken(CSharpParser.DELEGATE, 0); }
	public return_type(): Return_typeContext {
		return this.getRuleContext(0, Return_typeContext);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	public variant_type_parameter_list(): Variant_type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Variant_type_parameter_listContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_delegate_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDelegate_definition) {
			listener.enterDelegate_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDelegate_definition) {
			listener.exitDelegate_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitDelegate_definition) {
			return visitor.visitDelegate_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Event_declarationContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(CSharpParser.EVENT, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public variable_declarators(): Variable_declaratorsContext | undefined {
		return this.tryGetRuleContext(0, Variable_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public member_name(): Member_nameContext | undefined {
		return this.tryGetRuleContext(0, Member_nameContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public event_accessor_declarations(): Event_accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Event_accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_event_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterEvent_declaration) {
			listener.enterEvent_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitEvent_declaration) {
			listener.exitEvent_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitEvent_declaration) {
			return visitor.visitEvent_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Field_declarationContext extends ParserRuleContext {
	public variable_declarators(): Variable_declaratorsContext {
		return this.getRuleContext(0, Variable_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_field_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterField_declaration) {
			listener.enterField_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitField_declaration) {
			listener.exitField_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitField_declaration) {
			return visitor.visitField_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Property_declarationContext extends ParserRuleContext {
	public member_name(): Member_nameContext {
		return this.getRuleContext(0, Member_nameContext);
	}
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public accessor_declarations(): Accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public variable_initializer(): Variable_initializerContext | undefined {
		return this.tryGetRuleContext(0, Variable_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_property_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterProperty_declaration) {
			listener.enterProperty_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitProperty_declaration) {
			listener.exitProperty_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitProperty_declaration) {
			return visitor.visitProperty_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constant_declarationContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(CSharpParser.CONST, 0); }
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public constant_declarators(): Constant_declaratorsContext {
		return this.getRuleContext(0, Constant_declaratorsContext);
	}
	public SEMICOLON(): TerminalNode { return this.getToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constant_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstant_declaration) {
			listener.enterConstant_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstant_declaration) {
			listener.exitConstant_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstant_declaration) {
			return visitor.visitConstant_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Indexer_declarationContext extends ParserRuleContext {
	public THIS(): TerminalNode { return this.getToken(CSharpParser.THIS, 0); }
	public OPEN_BRACKET(): TerminalNode { return this.getToken(CSharpParser.OPEN_BRACKET, 0); }
	public formal_parameter_list(): Formal_parameter_listContext {
		return this.getRuleContext(0, Formal_parameter_listContext);
	}
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(CSharpParser.CLOSE_BRACKET, 0); }
	public OPEN_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.OPEN_BRACE, 0); }
	public accessor_declarations(): Accessor_declarationsContext | undefined {
		return this.tryGetRuleContext(0, Accessor_declarationsContext);
	}
	public CLOSE_BRACE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.CLOSE_BRACE, 0); }
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_indexer_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIndexer_declaration) {
			listener.enterIndexer_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIndexer_declaration) {
			listener.exitIndexer_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIndexer_declaration) {
			return visitor.visitIndexer_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Destructor_definitionContext extends ParserRuleContext {
	public TILDE(): TerminalNode { return this.getToken(CSharpParser.TILDE, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_destructor_definition; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterDestructor_definition) {
			listener.enterDestructor_definition(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitDestructor_definition) {
			listener.exitDestructor_definition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitDestructor_definition) {
			return visitor.visitDestructor_definition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Constructor_declarationContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public constructor_initializer(): Constructor_initializerContext | undefined {
		return this.tryGetRuleContext(0, Constructor_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_constructor_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterConstructor_declaration) {
			listener.enterConstructor_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitConstructor_declaration) {
			listener.exitConstructor_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitConstructor_declaration) {
			return visitor.visitConstructor_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_declarationContext extends ParserRuleContext {
	public method_member_name(): Method_member_nameContext {
		return this.getRuleContext(0, Method_member_nameContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public method_body(): Method_bodyContext | undefined {
		return this.tryGetRuleContext(0, Method_bodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public type_parameter_list(): Type_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_listContext);
	}
	public formal_parameter_list(): Formal_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Formal_parameter_listContext);
	}
	public type_parameter_constraints_clauses(): Type_parameter_constraints_clausesContext | undefined {
		return this.tryGetRuleContext(0, Type_parameter_constraints_clausesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_declaration) {
			listener.enterMethod_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_declaration) {
			listener.exitMethod_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMethod_declaration) {
			return visitor.visitMethod_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_member_nameContext extends ParserRuleContext {
	public identifier(): IdentifierContext[];
	public identifier(i: number): IdentifierContext;
	public identifier(i?: number): IdentifierContext | IdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierContext);
		} else {
			return this.getRuleContext(i, IdentifierContext);
		}
	}
	public DOUBLE_COLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DOUBLE_COLON, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.DOT);
		} else {
			return this.getToken(CSharpParser.DOT, i);
		}
	}
	public type_argument_list(): Type_argument_listContext[];
	public type_argument_list(i: number): Type_argument_listContext;
	public type_argument_list(i?: number): Type_argument_listContext | Type_argument_listContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_argument_listContext);
		} else {
			return this.getRuleContext(i, Type_argument_listContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_member_name; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_member_name) {
			listener.enterMethod_member_name(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_member_name) {
			listener.exitMethod_member_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMethod_member_name) {
			return visitor.visitMethod_member_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Operator_declarationContext extends ParserRuleContext {
	public OPERATOR(): TerminalNode { return this.getToken(CSharpParser.OPERATOR, 0); }
	public overloadable_operator(): Overloadable_operatorContext {
		return this.getRuleContext(0, Overloadable_operatorContext);
	}
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public arg_declaration(): Arg_declarationContext[];
	public arg_declaration(i: number): Arg_declarationContext;
	public arg_declaration(i?: number): Arg_declarationContext | Arg_declarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Arg_declarationContext);
		} else {
			return this.getRuleContext(i, Arg_declarationContext);
		}
	}
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public right_arrow(): Right_arrowContext | undefined {
		return this.tryGetRuleContext(0, Right_arrowContext);
	}
	public throwable_expression(): Throwable_expressionContext | undefined {
		return this.tryGetRuleContext(0, Throwable_expressionContext);
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SEMICOLON, 0); }
	public IN(): TerminalNode[];
	public IN(i: number): TerminalNode;
	public IN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CSharpParser.IN);
		} else {
			return this.getToken(CSharpParser.IN, i);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_operator_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterOperator_declaration) {
			listener.enterOperator_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitOperator_declaration) {
			listener.exitOperator_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitOperator_declaration) {
			return visitor.visitOperator_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Arg_declarationContext extends ParserRuleContext {
	public type_(): Type_Context {
		return this.getRuleContext(0, Type_Context);
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public ASSIGNMENT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASSIGNMENT, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_arg_declaration; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterArg_declaration) {
			listener.enterArg_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitArg_declaration) {
			listener.exitArg_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitArg_declaration) {
			return visitor.visitArg_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Method_invocationContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_method_invocation; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterMethod_invocation) {
			listener.enterMethod_invocation(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitMethod_invocation) {
			listener.exitMethod_invocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitMethod_invocation) {
			return visitor.visitMethod_invocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Object_creation_expressionContext extends ParserRuleContext {
	public OPEN_PARENS(): TerminalNode { return this.getToken(CSharpParser.OPEN_PARENS, 0); }
	public CLOSE_PARENS(): TerminalNode { return this.getToken(CSharpParser.CLOSE_PARENS, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	public object_or_collection_initializer(): Object_or_collection_initializerContext | undefined {
		return this.tryGetRuleContext(0, Object_or_collection_initializerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_object_creation_expression; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterObject_creation_expression) {
			listener.enterObject_creation_expression(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitObject_creation_expression) {
			listener.exitObject_creation_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitObject_creation_expression) {
			return visitor.visitObject_creation_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.IDENTIFIER, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ADD, 0); }
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ALIAS, 0); }
	public ARGLIST(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ARGLIST, 0); }
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASCENDING, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ASYNC, 0); }
	public AWAIT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.AWAIT, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.BY, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DESCENDING, 0); }
	public DYNAMIC(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.DYNAMIC, 0); }
	public EQUALS(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.EQUALS, 0); }
	public FROM(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.FROM, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GET, 0); }
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.GROUP, 0); }
	public INTO(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.INTO, 0); }
	public JOIN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.JOIN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.LET, 0); }
	public NAMEOF(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.NAMEOF, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ON, 0); }
	public ORDERBY(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.ORDERBY, 0); }
	public PARTIAL(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.PARTIAL, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.REMOVE, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SELECT, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.SET, 0); }
	public UNMANAGED(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.UNMANAGED, 0); }
	public VAR(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.VAR, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHEN, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.WHERE, 0); }
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CSharpParser.YIELD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CSharpParser.RULE_identifier; }
	// @Override
	public enterRule(listener: CSharpParserListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: CSharpParserListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CSharpParserVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



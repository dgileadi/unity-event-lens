// Generated from src/grammar/CSharpParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LiteralExpressionContext } from "./CSharpParser";
import { SimpleNameExpressionContext } from "./CSharpParser";
import { ParenthesisExpressionsContext } from "./CSharpParser";
import { MemberAccessExpressionContext } from "./CSharpParser";
import { LiteralAccessExpressionContext } from "./CSharpParser";
import { ThisReferenceExpressionContext } from "./CSharpParser";
import { BaseAccessExpressionContext } from "./CSharpParser";
import { ObjectCreationExpressionContext } from "./CSharpParser";
import { TupleExpressionContext } from "./CSharpParser";
import { TypeofExpressionContext } from "./CSharpParser";
import { CheckedExpressionContext } from "./CSharpParser";
import { UncheckedExpressionContext } from "./CSharpParser";
import { DefaultValueExpressionContext } from "./CSharpParser";
import { AnonymousMethodExpressionContext } from "./CSharpParser";
import { SizeofExpressionContext } from "./CSharpParser";
import { NameofExpressionContext } from "./CSharpParser";
import { UsingAliasDirectiveContext } from "./CSharpParser";
import { UsingNamespaceDirectiveContext } from "./CSharpParser";
import { UsingStaticDirectiveContext } from "./CSharpParser";
import { TheEmptyStatementContext } from "./CSharpParser";
import { ExpressionStatementContext } from "./CSharpParser";
import { IfStatementContext } from "./CSharpParser";
import { SwitchStatementContext } from "./CSharpParser";
import { WhileStatementContext } from "./CSharpParser";
import { DoStatementContext } from "./CSharpParser";
import { ForStatementContext } from "./CSharpParser";
import { ForeachStatementContext } from "./CSharpParser";
import { BreakStatementContext } from "./CSharpParser";
import { ContinueStatementContext } from "./CSharpParser";
import { GotoStatementContext } from "./CSharpParser";
import { ReturnStatementContext } from "./CSharpParser";
import { ThrowStatementContext } from "./CSharpParser";
import { TryStatementContext } from "./CSharpParser";
import { CheckedStatementContext } from "./CSharpParser";
import { UncheckedStatementContext } from "./CSharpParser";
import { LockStatementContext } from "./CSharpParser";
import { UsingStatementContext } from "./CSharpParser";
import { YieldStatementContext } from "./CSharpParser";
import { UnsafeStatementContext } from "./CSharpParser";
import { FixedStatementContext } from "./CSharpParser";
import { Compilation_unitContext } from "./CSharpParser";
import { Namespace_or_type_nameContext } from "./CSharpParser";
import { Type_Context } from "./CSharpParser";
import { Base_typeContext } from "./CSharpParser";
import { Tuple_typeContext } from "./CSharpParser";
import { Tuple_elementContext } from "./CSharpParser";
import { Simple_typeContext } from "./CSharpParser";
import { Numeric_typeContext } from "./CSharpParser";
import { Integral_typeContext } from "./CSharpParser";
import { Floating_point_typeContext } from "./CSharpParser";
import { Class_typeContext } from "./CSharpParser";
import { Type_argument_listContext } from "./CSharpParser";
import { Argument_listContext } from "./CSharpParser";
import { ArgumentContext } from "./CSharpParser";
import { ExpressionContext } from "./CSharpParser";
import { Non_assignment_expressionContext } from "./CSharpParser";
import { AssignmentContext } from "./CSharpParser";
import { Assignment_operatorContext } from "./CSharpParser";
import { Conditional_expressionContext } from "./CSharpParser";
import { Null_coalescing_expressionContext } from "./CSharpParser";
import { Conditional_or_expressionContext } from "./CSharpParser";
import { Conditional_and_expressionContext } from "./CSharpParser";
import { Inclusive_or_expressionContext } from "./CSharpParser";
import { Exclusive_or_expressionContext } from "./CSharpParser";
import { And_expressionContext } from "./CSharpParser";
import { Equality_expressionContext } from "./CSharpParser";
import { Relational_expressionContext } from "./CSharpParser";
import { Shift_expressionContext } from "./CSharpParser";
import { Additive_expressionContext } from "./CSharpParser";
import { Multiplicative_expressionContext } from "./CSharpParser";
import { Switch_expressionContext } from "./CSharpParser";
import { Switch_expression_armsContext } from "./CSharpParser";
import { Switch_expression_armContext } from "./CSharpParser";
import { Range_expressionContext } from "./CSharpParser";
import { Unary_expressionContext } from "./CSharpParser";
import { Primary_expressionContext } from "./CSharpParser";
import { Primary_expression_startContext } from "./CSharpParser";
import { Throwable_expressionContext } from "./CSharpParser";
import { Throw_expressionContext } from "./CSharpParser";
import { Member_accessContext } from "./CSharpParser";
import { Bracket_expressionContext } from "./CSharpParser";
import { Indexer_argumentContext } from "./CSharpParser";
import { Predefined_typeContext } from "./CSharpParser";
import { Expression_listContext } from "./CSharpParser";
import { Object_or_collection_initializerContext } from "./CSharpParser";
import { Object_initializerContext } from "./CSharpParser";
import { Member_initializer_listContext } from "./CSharpParser";
import { Member_initializerContext } from "./CSharpParser";
import { Initializer_valueContext } from "./CSharpParser";
import { Collection_initializerContext } from "./CSharpParser";
import { Element_initializerContext } from "./CSharpParser";
import { Anonymous_object_initializerContext } from "./CSharpParser";
import { Member_declarator_listContext } from "./CSharpParser";
import { Member_declaratorContext } from "./CSharpParser";
import { Unbound_type_nameContext } from "./CSharpParser";
import { Generic_dimension_specifierContext } from "./CSharpParser";
import { IsTypeContext } from "./CSharpParser";
import { IsTypePatternArmsContext } from "./CSharpParser";
import { IsTypePatternArmContext } from "./CSharpParser";
import { Lambda_expressionContext } from "./CSharpParser";
import { Anonymous_function_signatureContext } from "./CSharpParser";
import { Explicit_anonymous_function_parameter_listContext } from "./CSharpParser";
import { Explicit_anonymous_function_parameterContext } from "./CSharpParser";
import { Implicit_anonymous_function_parameter_listContext } from "./CSharpParser";
import { Anonymous_function_bodyContext } from "./CSharpParser";
import { Query_expressionContext } from "./CSharpParser";
import { From_clauseContext } from "./CSharpParser";
import { Query_bodyContext } from "./CSharpParser";
import { Query_body_clauseContext } from "./CSharpParser";
import { Let_clauseContext } from "./CSharpParser";
import { Where_clauseContext } from "./CSharpParser";
import { Combined_join_clauseContext } from "./CSharpParser";
import { Orderby_clauseContext } from "./CSharpParser";
import { OrderingContext } from "./CSharpParser";
import { Select_or_group_clauseContext } from "./CSharpParser";
import { Query_continuationContext } from "./CSharpParser";
import { StatementContext } from "./CSharpParser";
import { DeclarationStatementContext } from "./CSharpParser";
import { Local_function_declarationContext } from "./CSharpParser";
import { Local_function_headerContext } from "./CSharpParser";
import { Local_function_modifiersContext } from "./CSharpParser";
import { Local_function_bodyContext } from "./CSharpParser";
import { Labeled_StatementContext } from "./CSharpParser";
import { Embedded_statementContext } from "./CSharpParser";
import { Simple_embedded_statementContext } from "./CSharpParser";
import { BlockContext } from "./CSharpParser";
import { Local_variable_declarationContext } from "./CSharpParser";
import { Local_variable_typeContext } from "./CSharpParser";
import { Local_variable_declaratorContext } from "./CSharpParser";
import { Local_variable_initializerContext } from "./CSharpParser";
import { Local_constant_declarationContext } from "./CSharpParser";
import { If_bodyContext } from "./CSharpParser";
import { Switch_sectionContext } from "./CSharpParser";
import { Switch_labelContext } from "./CSharpParser";
import { Case_guardContext } from "./CSharpParser";
import { Statement_listContext } from "./CSharpParser";
import { For_initializerContext } from "./CSharpParser";
import { For_iteratorContext } from "./CSharpParser";
import { Catch_clausesContext } from "./CSharpParser";
import { Specific_catch_clauseContext } from "./CSharpParser";
import { General_catch_clauseContext } from "./CSharpParser";
import { Exception_filterContext } from "./CSharpParser";
import { Finally_clauseContext } from "./CSharpParser";
import { Resource_acquisitionContext } from "./CSharpParser";
import { Namespace_declarationContext } from "./CSharpParser";
import { Qualified_identifierContext } from "./CSharpParser";
import { Namespace_bodyContext } from "./CSharpParser";
import { Extern_alias_directivesContext } from "./CSharpParser";
import { Extern_alias_directiveContext } from "./CSharpParser";
import { Using_directivesContext } from "./CSharpParser";
import { Using_directiveContext } from "./CSharpParser";
import { Namespace_member_declarationsContext } from "./CSharpParser";
import { Namespace_member_declarationContext } from "./CSharpParser";
import { Type_declarationContext } from "./CSharpParser";
import { Qualified_alias_memberContext } from "./CSharpParser";
import { Type_parameter_listContext } from "./CSharpParser";
import { Type_parameterContext } from "./CSharpParser";
import { Class_baseContext } from "./CSharpParser";
import { Interface_type_listContext } from "./CSharpParser";
import { Type_parameter_constraints_clausesContext } from "./CSharpParser";
import { Type_parameter_constraints_clauseContext } from "./CSharpParser";
import { Type_parameter_constraintsContext } from "./CSharpParser";
import { Primary_constraintContext } from "./CSharpParser";
import { Secondary_constraintsContext } from "./CSharpParser";
import { Constructor_constraintContext } from "./CSharpParser";
import { Class_bodyContext } from "./CSharpParser";
import { Class_member_declarationsContext } from "./CSharpParser";
import { Class_member_declarationContext } from "./CSharpParser";
import { All_member_modifiersContext } from "./CSharpParser";
import { All_member_modifierContext } from "./CSharpParser";
import { Common_member_declarationContext } from "./CSharpParser";
import { Typed_member_declarationContext } from "./CSharpParser";
import { Constant_declaratorsContext } from "./CSharpParser";
import { Constant_declaratorContext } from "./CSharpParser";
import { Variable_declaratorsContext } from "./CSharpParser";
import { Variable_declaratorContext } from "./CSharpParser";
import { Variable_initializerContext } from "./CSharpParser";
import { Return_typeContext } from "./CSharpParser";
import { Member_nameContext } from "./CSharpParser";
import { Method_bodyContext } from "./CSharpParser";
import { Formal_parameter_listContext } from "./CSharpParser";
import { Fixed_parametersContext } from "./CSharpParser";
import { Fixed_parameterContext } from "./CSharpParser";
import { Parameter_modifierContext } from "./CSharpParser";
import { Parameter_arrayContext } from "./CSharpParser";
import { Accessor_declarationsContext } from "./CSharpParser";
import { Get_accessor_declarationContext } from "./CSharpParser";
import { Set_accessor_declarationContext } from "./CSharpParser";
import { Accessor_modifierContext } from "./CSharpParser";
import { Accessor_bodyContext } from "./CSharpParser";
import { Event_accessor_declarationsContext } from "./CSharpParser";
import { Add_accessor_declarationContext } from "./CSharpParser";
import { Remove_accessor_declarationContext } from "./CSharpParser";
import { Overloadable_operatorContext } from "./CSharpParser";
import { Conversion_operator_declaratorContext } from "./CSharpParser";
import { Constructor_initializerContext } from "./CSharpParser";
import { BodyContext } from "./CSharpParser";
import { Struct_interfacesContext } from "./CSharpParser";
import { Struct_bodyContext } from "./CSharpParser";
import { Struct_member_declarationContext } from "./CSharpParser";
import { Array_typeContext } from "./CSharpParser";
import { Rank_specifierContext } from "./CSharpParser";
import { Array_initializerContext } from "./CSharpParser";
import { Variant_type_parameter_listContext } from "./CSharpParser";
import { Variant_type_parameterContext } from "./CSharpParser";
import { Variance_annotationContext } from "./CSharpParser";
import { Interface_baseContext } from "./CSharpParser";
import { Interface_bodyContext } from "./CSharpParser";
import { Interface_member_declarationContext } from "./CSharpParser";
import { Interface_accessorsContext } from "./CSharpParser";
import { Enum_baseContext } from "./CSharpParser";
import { Enum_bodyContext } from "./CSharpParser";
import { Enum_member_declarationContext } from "./CSharpParser";
import { Global_attribute_sectionContext } from "./CSharpParser";
import { Global_attribute_targetContext } from "./CSharpParser";
import { AttributesContext } from "./CSharpParser";
import { Attribute_sectionContext } from "./CSharpParser";
import { Attribute_targetContext } from "./CSharpParser";
import { Attribute_listContext } from "./CSharpParser";
import { AttributeContext } from "./CSharpParser";
import { Attribute_argumentContext } from "./CSharpParser";
import { Pointer_typeContext } from "./CSharpParser";
import { Fixed_pointer_declaratorsContext } from "./CSharpParser";
import { Fixed_pointer_declaratorContext } from "./CSharpParser";
import { Fixed_pointer_initializerContext } from "./CSharpParser";
import { Fixed_size_buffer_declaratorContext } from "./CSharpParser";
import { Stackalloc_initializerContext } from "./CSharpParser";
import { Right_arrowContext } from "./CSharpParser";
import { Right_shiftContext } from "./CSharpParser";
import { Right_shift_assignmentContext } from "./CSharpParser";
import { LiteralContext } from "./CSharpParser";
import { Boolean_literalContext } from "./CSharpParser";
import { String_literalContext } from "./CSharpParser";
import { Interpolated_regular_stringContext } from "./CSharpParser";
import { Interpolated_verbatium_stringContext } from "./CSharpParser";
import { Interpolated_regular_string_partContext } from "./CSharpParser";
import { Interpolated_verbatium_string_partContext } from "./CSharpParser";
import { Interpolated_string_expressionContext } from "./CSharpParser";
import { KeywordContext } from "./CSharpParser";
import { Class_definitionContext } from "./CSharpParser";
import { Struct_definitionContext } from "./CSharpParser";
import { Interface_definitionContext } from "./CSharpParser";
import { Enum_definitionContext } from "./CSharpParser";
import { Delegate_definitionContext } from "./CSharpParser";
import { Event_declarationContext } from "./CSharpParser";
import { Field_declarationContext } from "./CSharpParser";
import { Property_declarationContext } from "./CSharpParser";
import { Constant_declarationContext } from "./CSharpParser";
import { Indexer_declarationContext } from "./CSharpParser";
import { Destructor_definitionContext } from "./CSharpParser";
import { Constructor_declarationContext } from "./CSharpParser";
import { Method_declarationContext } from "./CSharpParser";
import { Method_member_nameContext } from "./CSharpParser";
import { Operator_declarationContext } from "./CSharpParser";
import { Arg_declarationContext } from "./CSharpParser";
import { Method_invocationContext } from "./CSharpParser";
import { Object_creation_expressionContext } from "./CSharpParser";
import { IdentifierContext } from "./CSharpParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `CSharpParser`.
 */
export interface CSharpParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `literalExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `simpleNameExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterSimpleNameExpression?: (ctx: SimpleNameExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `simpleNameExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitSimpleNameExpression?: (ctx: SimpleNameExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesisExpressions`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpressions?: (ctx: ParenthesisExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesisExpressions`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpressions?: (ctx: ParenthesisExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `memberAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitMemberAccessExpression?: (ctx: MemberAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `literalAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterLiteralAccessExpression?: (ctx: LiteralAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `literalAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitLiteralAccessExpression?: (ctx: LiteralAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `thisReferenceExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterThisReferenceExpression?: (ctx: ThisReferenceExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `thisReferenceExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitThisReferenceExpression?: (ctx: ThisReferenceExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `baseAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterBaseAccessExpression?: (ctx: BaseAccessExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `baseAccessExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitBaseAccessExpression?: (ctx: BaseAccessExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `objectCreationExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterObjectCreationExpression?: (ctx: ObjectCreationExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `objectCreationExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitObjectCreationExpression?: (ctx: ObjectCreationExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `tupleExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterTupleExpression?: (ctx: TupleExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `tupleExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitTupleExpression?: (ctx: TupleExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `typeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `typeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `checkedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterCheckedExpression?: (ctx: CheckedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `checkedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitCheckedExpression?: (ctx: CheckedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `uncheckedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterUncheckedExpression?: (ctx: UncheckedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `uncheckedExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitUncheckedExpression?: (ctx: UncheckedExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `defaultValueExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterDefaultValueExpression?: (ctx: DefaultValueExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `defaultValueExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitDefaultValueExpression?: (ctx: DefaultValueExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `anonymousMethodExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterAnonymousMethodExpression?: (ctx: AnonymousMethodExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `anonymousMethodExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitAnonymousMethodExpression?: (ctx: AnonymousMethodExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `sizeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterSizeofExpression?: (ctx: SizeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `sizeofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitSizeofExpression?: (ctx: SizeofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nameofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterNameofExpression?: (ctx: NameofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nameofExpression`
	 * labeled alternative in `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitNameofExpression?: (ctx: NameofExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `usingAliasDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	enterUsingAliasDirective?: (ctx: UsingAliasDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by the `usingAliasDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	exitUsingAliasDirective?: (ctx: UsingAliasDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by the `usingNamespaceDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	enterUsingNamespaceDirective?: (ctx: UsingNamespaceDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by the `usingNamespaceDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	exitUsingNamespaceDirective?: (ctx: UsingNamespaceDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by the `usingStaticDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	enterUsingStaticDirective?: (ctx: UsingStaticDirectiveContext) => void;
	/**
	 * Exit a parse tree produced by the `usingStaticDirective`
	 * labeled alternative in `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	exitUsingStaticDirective?: (ctx: UsingStaticDirectiveContext) => void;

	/**
	 * Enter a parse tree produced by the `theEmptyStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterTheEmptyStatement?: (ctx: TheEmptyStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `theEmptyStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitTheEmptyStatement?: (ctx: TheEmptyStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `ifStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `ifStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `switchStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterSwitchStatement?: (ctx: SwitchStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `switchStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitSwitchStatement?: (ctx: SwitchStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `whileStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `whileStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `doStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterDoStatement?: (ctx: DoStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `doStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitDoStatement?: (ctx: DoStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `forStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `forStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `foreachStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterForeachStatement?: (ctx: ForeachStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `foreachStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitForeachStatement?: (ctx: ForeachStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `breakStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterBreakStatement?: (ctx: BreakStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `breakStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitBreakStatement?: (ctx: BreakStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `continueStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterContinueStatement?: (ctx: ContinueStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `continueStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitContinueStatement?: (ctx: ContinueStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `gotoStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterGotoStatement?: (ctx: GotoStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `gotoStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitGotoStatement?: (ctx: GotoStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `throwStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterThrowStatement?: (ctx: ThrowStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `throwStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitThrowStatement?: (ctx: ThrowStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `tryStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterTryStatement?: (ctx: TryStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `tryStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitTryStatement?: (ctx: TryStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `checkedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterCheckedStatement?: (ctx: CheckedStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `checkedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitCheckedStatement?: (ctx: CheckedStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `uncheckedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterUncheckedStatement?: (ctx: UncheckedStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `uncheckedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitUncheckedStatement?: (ctx: UncheckedStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `lockStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterLockStatement?: (ctx: LockStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `lockStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitLockStatement?: (ctx: LockStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `usingStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterUsingStatement?: (ctx: UsingStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `usingStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitUsingStatement?: (ctx: UsingStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `yieldStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterYieldStatement?: (ctx: YieldStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `yieldStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitYieldStatement?: (ctx: YieldStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `unsafeStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterUnsafeStatement?: (ctx: UnsafeStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `unsafeStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitUnsafeStatement?: (ctx: UnsafeStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `fixedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterFixedStatement?: (ctx: FixedStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `fixedStatement`
	 * labeled alternative in `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitFixedStatement?: (ctx: FixedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	enterCompilation_unit?: (ctx: Compilation_unitContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	exitCompilation_unit?: (ctx: Compilation_unitContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.namespace_or_type_name`.
	 * @param ctx the parse tree
	 */
	enterNamespace_or_type_name?: (ctx: Namespace_or_type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.namespace_or_type_name`.
	 * @param ctx the parse tree
	 */
	exitNamespace_or_type_name?: (ctx: Namespace_or_type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_`.
	 * @param ctx the parse tree
	 */
	enterType_?: (ctx: Type_Context) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_`.
	 * @param ctx the parse tree
	 */
	exitType_?: (ctx: Type_Context) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.base_type`.
	 * @param ctx the parse tree
	 */
	enterBase_type?: (ctx: Base_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.base_type`.
	 * @param ctx the parse tree
	 */
	exitBase_type?: (ctx: Base_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.tuple_type`.
	 * @param ctx the parse tree
	 */
	enterTuple_type?: (ctx: Tuple_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.tuple_type`.
	 * @param ctx the parse tree
	 */
	exitTuple_type?: (ctx: Tuple_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.tuple_element`.
	 * @param ctx the parse tree
	 */
	enterTuple_element?: (ctx: Tuple_elementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.tuple_element`.
	 * @param ctx the parse tree
	 */
	exitTuple_element?: (ctx: Tuple_elementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.simple_type`.
	 * @param ctx the parse tree
	 */
	enterSimple_type?: (ctx: Simple_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.simple_type`.
	 * @param ctx the parse tree
	 */
	exitSimple_type?: (ctx: Simple_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.numeric_type`.
	 * @param ctx the parse tree
	 */
	enterNumeric_type?: (ctx: Numeric_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.numeric_type`.
	 * @param ctx the parse tree
	 */
	exitNumeric_type?: (ctx: Numeric_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.integral_type`.
	 * @param ctx the parse tree
	 */
	enterIntegral_type?: (ctx: Integral_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.integral_type`.
	 * @param ctx the parse tree
	 */
	exitIntegral_type?: (ctx: Integral_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.floating_point_type`.
	 * @param ctx the parse tree
	 */
	enterFloating_point_type?: (ctx: Floating_point_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.floating_point_type`.
	 * @param ctx the parse tree
	 */
	exitFloating_point_type?: (ctx: Floating_point_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?: (ctx: Class_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_argument_list`.
	 * @param ctx the parse tree
	 */
	enterType_argument_list?: (ctx: Type_argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_argument_list`.
	 * @param ctx the parse tree
	 */
	exitType_argument_list?: (ctx: Type_argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.argument_list`.
	 * @param ctx the parse tree
	 */
	enterArgument_list?: (ctx: Argument_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.argument_list`.
	 * @param ctx the parse tree
	 */
	exitArgument_list?: (ctx: Argument_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.non_assignment_expression`.
	 * @param ctx the parse tree
	 */
	enterNon_assignment_expression?: (ctx: Non_assignment_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.non_assignment_expression`.
	 * @param ctx the parse tree
	 */
	exitNon_assignment_expression?: (ctx: Non_assignment_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_expression?: (ctx: Conditional_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.conditional_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_expression?: (ctx: Conditional_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.null_coalescing_expression`.
	 * @param ctx the parse tree
	 */
	enterNull_coalescing_expression?: (ctx: Null_coalescing_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.null_coalescing_expression`.
	 * @param ctx the parse tree
	 */
	exitNull_coalescing_expression?: (ctx: Null_coalescing_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.conditional_or_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_or_expression?: (ctx: Conditional_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	enterConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.conditional_and_expression`.
	 * @param ctx the parse tree
	 */
	exitConditional_and_expression?: (ctx: Conditional_and_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.inclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitInclusive_or_expression?: (ctx: Inclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	enterExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.exclusive_or_expression`.
	 * @param ctx the parse tree
	 */
	exitExclusive_or_expression?: (ctx: Exclusive_or_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.and_expression`.
	 * @param ctx the parse tree
	 */
	enterAnd_expression?: (ctx: And_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.and_expression`.
	 * @param ctx the parse tree
	 */
	exitAnd_expression?: (ctx: And_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	enterEquality_expression?: (ctx: Equality_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.equality_expression`.
	 * @param ctx the parse tree
	 */
	exitEquality_expression?: (ctx: Equality_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	enterRelational_expression?: (ctx: Relational_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.relational_expression`.
	 * @param ctx the parse tree
	 */
	exitRelational_expression?: (ctx: Relational_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	enterShift_expression?: (ctx: Shift_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.shift_expression`.
	 * @param ctx the parse tree
	 */
	exitShift_expression?: (ctx: Shift_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	enterAdditive_expression?: (ctx: Additive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.additive_expression`.
	 * @param ctx the parse tree
	 */
	exitAdditive_expression?: (ctx: Additive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.multiplicative_expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative_expression?: (ctx: Multiplicative_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.switch_expression`.
	 * @param ctx the parse tree
	 */
	enterSwitch_expression?: (ctx: Switch_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.switch_expression`.
	 * @param ctx the parse tree
	 */
	exitSwitch_expression?: (ctx: Switch_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.switch_expression_arms`.
	 * @param ctx the parse tree
	 */
	enterSwitch_expression_arms?: (ctx: Switch_expression_armsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.switch_expression_arms`.
	 * @param ctx the parse tree
	 */
	exitSwitch_expression_arms?: (ctx: Switch_expression_armsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.switch_expression_arm`.
	 * @param ctx the parse tree
	 */
	enterSwitch_expression_arm?: (ctx: Switch_expression_armContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.switch_expression_arm`.
	 * @param ctx the parse tree
	 */
	exitSwitch_expression_arm?: (ctx: Switch_expression_armContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.range_expression`.
	 * @param ctx the parse tree
	 */
	enterRange_expression?: (ctx: Range_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.range_expression`.
	 * @param ctx the parse tree
	 */
	exitRange_expression?: (ctx: Range_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_expression?: (ctx: Unary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.unary_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_expression?: (ctx: Unary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression?: (ctx: Primary_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.primary_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression?: (ctx: Primary_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	enterPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.primary_expression_start`.
	 * @param ctx the parse tree
	 */
	exitPrimary_expression_start?: (ctx: Primary_expression_startContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.throwable_expression`.
	 * @param ctx the parse tree
	 */
	enterThrowable_expression?: (ctx: Throwable_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.throwable_expression`.
	 * @param ctx the parse tree
	 */
	exitThrowable_expression?: (ctx: Throwable_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.throw_expression`.
	 * @param ctx the parse tree
	 */
	enterThrow_expression?: (ctx: Throw_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.throw_expression`.
	 * @param ctx the parse tree
	 */
	exitThrow_expression?: (ctx: Throw_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_access`.
	 * @param ctx the parse tree
	 */
	enterMember_access?: (ctx: Member_accessContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_access`.
	 * @param ctx the parse tree
	 */
	exitMember_access?: (ctx: Member_accessContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	enterBracket_expression?: (ctx: Bracket_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	exitBracket_expression?: (ctx: Bracket_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.indexer_argument`.
	 * @param ctx the parse tree
	 */
	enterIndexer_argument?: (ctx: Indexer_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.indexer_argument`.
	 * @param ctx the parse tree
	 */
	exitIndexer_argument?: (ctx: Indexer_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.predefined_type`.
	 * @param ctx the parse tree
	 */
	enterPredefined_type?: (ctx: Predefined_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.predefined_type`.
	 * @param ctx the parse tree
	 */
	exitPredefined_type?: (ctx: Predefined_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.object_or_collection_initializer`.
	 * @param ctx the parse tree
	 */
	enterObject_or_collection_initializer?: (ctx: Object_or_collection_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.object_or_collection_initializer`.
	 * @param ctx the parse tree
	 */
	exitObject_or_collection_initializer?: (ctx: Object_or_collection_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.object_initializer`.
	 * @param ctx the parse tree
	 */
	enterObject_initializer?: (ctx: Object_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.object_initializer`.
	 * @param ctx the parse tree
	 */
	exitObject_initializer?: (ctx: Object_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_initializer_list`.
	 * @param ctx the parse tree
	 */
	enterMember_initializer_list?: (ctx: Member_initializer_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_initializer_list`.
	 * @param ctx the parse tree
	 */
	exitMember_initializer_list?: (ctx: Member_initializer_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_initializer`.
	 * @param ctx the parse tree
	 */
	enterMember_initializer?: (ctx: Member_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_initializer`.
	 * @param ctx the parse tree
	 */
	exitMember_initializer?: (ctx: Member_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.initializer_value`.
	 * @param ctx the parse tree
	 */
	enterInitializer_value?: (ctx: Initializer_valueContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.initializer_value`.
	 * @param ctx the parse tree
	 */
	exitInitializer_value?: (ctx: Initializer_valueContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.collection_initializer`.
	 * @param ctx the parse tree
	 */
	enterCollection_initializer?: (ctx: Collection_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.collection_initializer`.
	 * @param ctx the parse tree
	 */
	exitCollection_initializer?: (ctx: Collection_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.element_initializer`.
	 * @param ctx the parse tree
	 */
	enterElement_initializer?: (ctx: Element_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.element_initializer`.
	 * @param ctx the parse tree
	 */
	exitElement_initializer?: (ctx: Element_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.anonymous_object_initializer`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_object_initializer?: (ctx: Anonymous_object_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.anonymous_object_initializer`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_object_initializer?: (ctx: Anonymous_object_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_declarator_list`.
	 * @param ctx the parse tree
	 */
	enterMember_declarator_list?: (ctx: Member_declarator_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_declarator_list`.
	 * @param ctx the parse tree
	 */
	exitMember_declarator_list?: (ctx: Member_declarator_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_declarator`.
	 * @param ctx the parse tree
	 */
	enterMember_declarator?: (ctx: Member_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_declarator`.
	 * @param ctx the parse tree
	 */
	exitMember_declarator?: (ctx: Member_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.unbound_type_name`.
	 * @param ctx the parse tree
	 */
	enterUnbound_type_name?: (ctx: Unbound_type_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.unbound_type_name`.
	 * @param ctx the parse tree
	 */
	exitUnbound_type_name?: (ctx: Unbound_type_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.generic_dimension_specifier`.
	 * @param ctx the parse tree
	 */
	enterGeneric_dimension_specifier?: (ctx: Generic_dimension_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.generic_dimension_specifier`.
	 * @param ctx the parse tree
	 */
	exitGeneric_dimension_specifier?: (ctx: Generic_dimension_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.isType`.
	 * @param ctx the parse tree
	 */
	enterIsType?: (ctx: IsTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.isType`.
	 * @param ctx the parse tree
	 */
	exitIsType?: (ctx: IsTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.isTypePatternArms`.
	 * @param ctx the parse tree
	 */
	enterIsTypePatternArms?: (ctx: IsTypePatternArmsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.isTypePatternArms`.
	 * @param ctx the parse tree
	 */
	exitIsTypePatternArms?: (ctx: IsTypePatternArmsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.isTypePatternArm`.
	 * @param ctx the parse tree
	 */
	enterIsTypePatternArm?: (ctx: IsTypePatternArmContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.isTypePatternArm`.
	 * @param ctx the parse tree
	 */
	exitIsTypePatternArm?: (ctx: IsTypePatternArmContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.lambda_expression`.
	 * @param ctx the parse tree
	 */
	enterLambda_expression?: (ctx: Lambda_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.lambda_expression`.
	 * @param ctx the parse tree
	 */
	exitLambda_expression?: (ctx: Lambda_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.anonymous_function_signature`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_function_signature?: (ctx: Anonymous_function_signatureContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.anonymous_function_signature`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_function_signature?: (ctx: Anonymous_function_signatureContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterExplicit_anonymous_function_parameter_list?: (ctx: Explicit_anonymous_function_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitExplicit_anonymous_function_parameter_list?: (ctx: Explicit_anonymous_function_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter`.
	 * @param ctx the parse tree
	 */
	enterExplicit_anonymous_function_parameter?: (ctx: Explicit_anonymous_function_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.explicit_anonymous_function_parameter`.
	 * @param ctx the parse tree
	 */
	exitExplicit_anonymous_function_parameter?: (ctx: Explicit_anonymous_function_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.implicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterImplicit_anonymous_function_parameter_list?: (ctx: Implicit_anonymous_function_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.implicit_anonymous_function_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitImplicit_anonymous_function_parameter_list?: (ctx: Implicit_anonymous_function_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.anonymous_function_body`.
	 * @param ctx the parse tree
	 */
	enterAnonymous_function_body?: (ctx: Anonymous_function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.anonymous_function_body`.
	 * @param ctx the parse tree
	 */
	exitAnonymous_function_body?: (ctx: Anonymous_function_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.query_expression`.
	 * @param ctx the parse tree
	 */
	enterQuery_expression?: (ctx: Query_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.query_expression`.
	 * @param ctx the parse tree
	 */
	exitQuery_expression?: (ctx: Query_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.query_body`.
	 * @param ctx the parse tree
	 */
	enterQuery_body?: (ctx: Query_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.query_body`.
	 * @param ctx the parse tree
	 */
	exitQuery_body?: (ctx: Query_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.query_body_clause`.
	 * @param ctx the parse tree
	 */
	enterQuery_body_clause?: (ctx: Query_body_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.query_body_clause`.
	 * @param ctx the parse tree
	 */
	exitQuery_body_clause?: (ctx: Query_body_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.let_clause`.
	 * @param ctx the parse tree
	 */
	enterLet_clause?: (ctx: Let_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.let_clause`.
	 * @param ctx the parse tree
	 */
	exitLet_clause?: (ctx: Let_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.combined_join_clause`.
	 * @param ctx the parse tree
	 */
	enterCombined_join_clause?: (ctx: Combined_join_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.combined_join_clause`.
	 * @param ctx the parse tree
	 */
	exitCombined_join_clause?: (ctx: Combined_join_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.ordering`.
	 * @param ctx the parse tree
	 */
	enterOrdering?: (ctx: OrderingContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.ordering`.
	 * @param ctx the parse tree
	 */
	exitOrdering?: (ctx: OrderingContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.select_or_group_clause`.
	 * @param ctx the parse tree
	 */
	enterSelect_or_group_clause?: (ctx: Select_or_group_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.select_or_group_clause`.
	 * @param ctx the parse tree
	 */
	exitSelect_or_group_clause?: (ctx: Select_or_group_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.query_continuation`.
	 * @param ctx the parse tree
	 */
	enterQuery_continuation?: (ctx: Query_continuationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.query_continuation`.
	 * @param ctx the parse tree
	 */
	exitQuery_continuation?: (ctx: Query_continuationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationStatement?: (ctx: DeclarationStatementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.declarationStatement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationStatement?: (ctx: DeclarationStatementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_function_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_function_declaration?: (ctx: Local_function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_function_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_function_declaration?: (ctx: Local_function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_function_header`.
	 * @param ctx the parse tree
	 */
	enterLocal_function_header?: (ctx: Local_function_headerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_function_header`.
	 * @param ctx the parse tree
	 */
	exitLocal_function_header?: (ctx: Local_function_headerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_function_modifiers`.
	 * @param ctx the parse tree
	 */
	enterLocal_function_modifiers?: (ctx: Local_function_modifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_function_modifiers`.
	 * @param ctx the parse tree
	 */
	exitLocal_function_modifiers?: (ctx: Local_function_modifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_function_body`.
	 * @param ctx the parse tree
	 */
	enterLocal_function_body?: (ctx: Local_function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_function_body`.
	 * @param ctx the parse tree
	 */
	exitLocal_function_body?: (ctx: Local_function_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.labeled_Statement`.
	 * @param ctx the parse tree
	 */
	enterLabeled_Statement?: (ctx: Labeled_StatementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.labeled_Statement`.
	 * @param ctx the parse tree
	 */
	exitLabeled_Statement?: (ctx: Labeled_StatementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterEmbedded_statement?: (ctx: Embedded_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitEmbedded_statement?: (ctx: Embedded_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	enterSimple_embedded_statement?: (ctx: Simple_embedded_statementContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.simple_embedded_statement`.
	 * @param ctx the parse tree
	 */
	exitSimple_embedded_statement?: (ctx: Simple_embedded_statementContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_variable_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_declaration?: (ctx: Local_variable_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_variable_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_declaration?: (ctx: Local_variable_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_variable_type`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_type?: (ctx: Local_variable_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_variable_type`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_type?: (ctx: Local_variable_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_variable_declarator`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_declarator?: (ctx: Local_variable_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_variable_declarator`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_declarator?: (ctx: Local_variable_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_variable_initializer`.
	 * @param ctx the parse tree
	 */
	enterLocal_variable_initializer?: (ctx: Local_variable_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_variable_initializer`.
	 * @param ctx the parse tree
	 */
	exitLocal_variable_initializer?: (ctx: Local_variable_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.local_constant_declaration`.
	 * @param ctx the parse tree
	 */
	enterLocal_constant_declaration?: (ctx: Local_constant_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.local_constant_declaration`.
	 * @param ctx the parse tree
	 */
	exitLocal_constant_declaration?: (ctx: Local_constant_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.if_body`.
	 * @param ctx the parse tree
	 */
	enterIf_body?: (ctx: If_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.if_body`.
	 * @param ctx the parse tree
	 */
	exitIf_body?: (ctx: If_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.switch_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_section?: (ctx: Switch_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.switch_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_section?: (ctx: Switch_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.switch_label`.
	 * @param ctx the parse tree
	 */
	enterSwitch_label?: (ctx: Switch_labelContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.switch_label`.
	 * @param ctx the parse tree
	 */
	exitSwitch_label?: (ctx: Switch_labelContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.case_guard`.
	 * @param ctx the parse tree
	 */
	enterCase_guard?: (ctx: Case_guardContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.case_guard`.
	 * @param ctx the parse tree
	 */
	exitCase_guard?: (ctx: Case_guardContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.statement_list`.
	 * @param ctx the parse tree
	 */
	enterStatement_list?: (ctx: Statement_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.statement_list`.
	 * @param ctx the parse tree
	 */
	exitStatement_list?: (ctx: Statement_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.for_initializer`.
	 * @param ctx the parse tree
	 */
	enterFor_initializer?: (ctx: For_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.for_initializer`.
	 * @param ctx the parse tree
	 */
	exitFor_initializer?: (ctx: For_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.for_iterator`.
	 * @param ctx the parse tree
	 */
	enterFor_iterator?: (ctx: For_iteratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.for_iterator`.
	 * @param ctx the parse tree
	 */
	exitFor_iterator?: (ctx: For_iteratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.catch_clauses`.
	 * @param ctx the parse tree
	 */
	enterCatch_clauses?: (ctx: Catch_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.catch_clauses`.
	 * @param ctx the parse tree
	 */
	exitCatch_clauses?: (ctx: Catch_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.specific_catch_clause`.
	 * @param ctx the parse tree
	 */
	enterSpecific_catch_clause?: (ctx: Specific_catch_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.specific_catch_clause`.
	 * @param ctx the parse tree
	 */
	exitSpecific_catch_clause?: (ctx: Specific_catch_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.general_catch_clause`.
	 * @param ctx the parse tree
	 */
	enterGeneral_catch_clause?: (ctx: General_catch_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.general_catch_clause`.
	 * @param ctx the parse tree
	 */
	exitGeneral_catch_clause?: (ctx: General_catch_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.exception_filter`.
	 * @param ctx the parse tree
	 */
	enterException_filter?: (ctx: Exception_filterContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.exception_filter`.
	 * @param ctx the parse tree
	 */
	exitException_filter?: (ctx: Exception_filterContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	enterFinally_clause?: (ctx: Finally_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	exitFinally_clause?: (ctx: Finally_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.resource_acquisition`.
	 * @param ctx the parse tree
	 */
	enterResource_acquisition?: (ctx: Resource_acquisitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.resource_acquisition`.
	 * @param ctx the parse tree
	 */
	exitResource_acquisition?: (ctx: Resource_acquisitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.namespace_declaration`.
	 * @param ctx the parse tree
	 */
	enterNamespace_declaration?: (ctx: Namespace_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.namespace_declaration`.
	 * @param ctx the parse tree
	 */
	exitNamespace_declaration?: (ctx: Namespace_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.qualified_identifier`.
	 * @param ctx the parse tree
	 */
	enterQualified_identifier?: (ctx: Qualified_identifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.qualified_identifier`.
	 * @param ctx the parse tree
	 */
	exitQualified_identifier?: (ctx: Qualified_identifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.namespace_body`.
	 * @param ctx the parse tree
	 */
	enterNamespace_body?: (ctx: Namespace_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.namespace_body`.
	 * @param ctx the parse tree
	 */
	exitNamespace_body?: (ctx: Namespace_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.extern_alias_directives`.
	 * @param ctx the parse tree
	 */
	enterExtern_alias_directives?: (ctx: Extern_alias_directivesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.extern_alias_directives`.
	 * @param ctx the parse tree
	 */
	exitExtern_alias_directives?: (ctx: Extern_alias_directivesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.extern_alias_directive`.
	 * @param ctx the parse tree
	 */
	enterExtern_alias_directive?: (ctx: Extern_alias_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.extern_alias_directive`.
	 * @param ctx the parse tree
	 */
	exitExtern_alias_directive?: (ctx: Extern_alias_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.using_directives`.
	 * @param ctx the parse tree
	 */
	enterUsing_directives?: (ctx: Using_directivesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.using_directives`.
	 * @param ctx the parse tree
	 */
	exitUsing_directives?: (ctx: Using_directivesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	enterUsing_directive?: (ctx: Using_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.using_directive`.
	 * @param ctx the parse tree
	 */
	exitUsing_directive?: (ctx: Using_directiveContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.namespace_member_declarations`.
	 * @param ctx the parse tree
	 */
	enterNamespace_member_declarations?: (ctx: Namespace_member_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.namespace_member_declarations`.
	 * @param ctx the parse tree
	 */
	exitNamespace_member_declarations?: (ctx: Namespace_member_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.namespace_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterNamespace_member_declaration?: (ctx: Namespace_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.namespace_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitNamespace_member_declaration?: (ctx: Namespace_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	enterType_declaration?: (ctx: Type_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_declaration`.
	 * @param ctx the parse tree
	 */
	exitType_declaration?: (ctx: Type_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.qualified_alias_member`.
	 * @param ctx the parse tree
	 */
	enterQualified_alias_member?: (ctx: Qualified_alias_memberContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.qualified_alias_member`.
	 * @param ctx the parse tree
	 */
	exitQualified_alias_member?: (ctx: Qualified_alias_memberContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterType_parameter_list?: (ctx: Type_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitType_parameter_list?: (ctx: Type_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_parameter`.
	 * @param ctx the parse tree
	 */
	enterType_parameter?: (ctx: Type_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_parameter`.
	 * @param ctx the parse tree
	 */
	exitType_parameter?: (ctx: Type_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_base`.
	 * @param ctx the parse tree
	 */
	enterClass_base?: (ctx: Class_baseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_base`.
	 * @param ctx the parse tree
	 */
	exitClass_base?: (ctx: Class_baseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_type_list`.
	 * @param ctx the parse tree
	 */
	enterInterface_type_list?: (ctx: Interface_type_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_type_list`.
	 * @param ctx the parse tree
	 */
	exitInterface_type_list?: (ctx: Interface_type_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_parameter_constraints_clauses`.
	 * @param ctx the parse tree
	 */
	enterType_parameter_constraints_clauses?: (ctx: Type_parameter_constraints_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_parameter_constraints_clauses`.
	 * @param ctx the parse tree
	 */
	exitType_parameter_constraints_clauses?: (ctx: Type_parameter_constraints_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_parameter_constraints_clause`.
	 * @param ctx the parse tree
	 */
	enterType_parameter_constraints_clause?: (ctx: Type_parameter_constraints_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_parameter_constraints_clause`.
	 * @param ctx the parse tree
	 */
	exitType_parameter_constraints_clause?: (ctx: Type_parameter_constraints_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.type_parameter_constraints`.
	 * @param ctx the parse tree
	 */
	enterType_parameter_constraints?: (ctx: Type_parameter_constraintsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.type_parameter_constraints`.
	 * @param ctx the parse tree
	 */
	exitType_parameter_constraints?: (ctx: Type_parameter_constraintsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.primary_constraint`.
	 * @param ctx the parse tree
	 */
	enterPrimary_constraint?: (ctx: Primary_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.primary_constraint`.
	 * @param ctx the parse tree
	 */
	exitPrimary_constraint?: (ctx: Primary_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.secondary_constraints`.
	 * @param ctx the parse tree
	 */
	enterSecondary_constraints?: (ctx: Secondary_constraintsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.secondary_constraints`.
	 * @param ctx the parse tree
	 */
	exitSecondary_constraints?: (ctx: Secondary_constraintsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constructor_constraint`.
	 * @param ctx the parse tree
	 */
	enterConstructor_constraint?: (ctx: Constructor_constraintContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constructor_constraint`.
	 * @param ctx the parse tree
	 */
	exitConstructor_constraint?: (ctx: Constructor_constraintContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_body`.
	 * @param ctx the parse tree
	 */
	enterClass_body?: (ctx: Class_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_body`.
	 * @param ctx the parse tree
	 */
	exitClass_body?: (ctx: Class_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_member_declarations`.
	 * @param ctx the parse tree
	 */
	enterClass_member_declarations?: (ctx: Class_member_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_member_declarations`.
	 * @param ctx the parse tree
	 */
	exitClass_member_declarations?: (ctx: Class_member_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_member_declaration?: (ctx: Class_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_member_declaration?: (ctx: Class_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.all_member_modifiers`.
	 * @param ctx the parse tree
	 */
	enterAll_member_modifiers?: (ctx: All_member_modifiersContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.all_member_modifiers`.
	 * @param ctx the parse tree
	 */
	exitAll_member_modifiers?: (ctx: All_member_modifiersContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.all_member_modifier`.
	 * @param ctx the parse tree
	 */
	enterAll_member_modifier?: (ctx: All_member_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.all_member_modifier`.
	 * @param ctx the parse tree
	 */
	exitAll_member_modifier?: (ctx: All_member_modifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.common_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterCommon_member_declaration?: (ctx: Common_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.common_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitCommon_member_declaration?: (ctx: Common_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.typed_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterTyped_member_declaration?: (ctx: Typed_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.typed_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitTyped_member_declaration?: (ctx: Typed_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constant_declarators`.
	 * @param ctx the parse tree
	 */
	enterConstant_declarators?: (ctx: Constant_declaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constant_declarators`.
	 * @param ctx the parse tree
	 */
	exitConstant_declarators?: (ctx: Constant_declaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constant_declarator`.
	 * @param ctx the parse tree
	 */
	enterConstant_declarator?: (ctx: Constant_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constant_declarator`.
	 * @param ctx the parse tree
	 */
	exitConstant_declarator?: (ctx: Constant_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variable_declarators`.
	 * @param ctx the parse tree
	 */
	enterVariable_declarators?: (ctx: Variable_declaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variable_declarators`.
	 * @param ctx the parse tree
	 */
	exitVariable_declarators?: (ctx: Variable_declaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variable_declarator`.
	 * @param ctx the parse tree
	 */
	enterVariable_declarator?: (ctx: Variable_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variable_declarator`.
	 * @param ctx the parse tree
	 */
	exitVariable_declarator?: (ctx: Variable_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variable_initializer`.
	 * @param ctx the parse tree
	 */
	enterVariable_initializer?: (ctx: Variable_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variable_initializer`.
	 * @param ctx the parse tree
	 */
	exitVariable_initializer?: (ctx: Variable_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.return_type`.
	 * @param ctx the parse tree
	 */
	enterReturn_type?: (ctx: Return_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.return_type`.
	 * @param ctx the parse tree
	 */
	exitReturn_type?: (ctx: Return_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.member_name`.
	 * @param ctx the parse tree
	 */
	enterMember_name?: (ctx: Member_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.member_name`.
	 * @param ctx the parse tree
	 */
	exitMember_name?: (ctx: Member_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.method_body`.
	 * @param ctx the parse tree
	 */
	enterMethod_body?: (ctx: Method_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.method_body`.
	 * @param ctx the parse tree
	 */
	exitMethod_body?: (ctx: Method_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.formal_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterFormal_parameter_list?: (ctx: Formal_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.formal_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitFormal_parameter_list?: (ctx: Formal_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_parameters`.
	 * @param ctx the parse tree
	 */
	enterFixed_parameters?: (ctx: Fixed_parametersContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_parameters`.
	 * @param ctx the parse tree
	 */
	exitFixed_parameters?: (ctx: Fixed_parametersContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_parameter`.
	 * @param ctx the parse tree
	 */
	enterFixed_parameter?: (ctx: Fixed_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_parameter`.
	 * @param ctx the parse tree
	 */
	exitFixed_parameter?: (ctx: Fixed_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.parameter_modifier`.
	 * @param ctx the parse tree
	 */
	enterParameter_modifier?: (ctx: Parameter_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.parameter_modifier`.
	 * @param ctx the parse tree
	 */
	exitParameter_modifier?: (ctx: Parameter_modifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.parameter_array`.
	 * @param ctx the parse tree
	 */
	enterParameter_array?: (ctx: Parameter_arrayContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.parameter_array`.
	 * @param ctx the parse tree
	 */
	exitParameter_array?: (ctx: Parameter_arrayContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.accessor_declarations`.
	 * @param ctx the parse tree
	 */
	enterAccessor_declarations?: (ctx: Accessor_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.accessor_declarations`.
	 * @param ctx the parse tree
	 */
	exitAccessor_declarations?: (ctx: Accessor_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.get_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	enterGet_accessor_declaration?: (ctx: Get_accessor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.get_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	exitGet_accessor_declaration?: (ctx: Get_accessor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.set_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	enterSet_accessor_declaration?: (ctx: Set_accessor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.set_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	exitSet_accessor_declaration?: (ctx: Set_accessor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.accessor_modifier`.
	 * @param ctx the parse tree
	 */
	enterAccessor_modifier?: (ctx: Accessor_modifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.accessor_modifier`.
	 * @param ctx the parse tree
	 */
	exitAccessor_modifier?: (ctx: Accessor_modifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.accessor_body`.
	 * @param ctx the parse tree
	 */
	enterAccessor_body?: (ctx: Accessor_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.accessor_body`.
	 * @param ctx the parse tree
	 */
	exitAccessor_body?: (ctx: Accessor_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.event_accessor_declarations`.
	 * @param ctx the parse tree
	 */
	enterEvent_accessor_declarations?: (ctx: Event_accessor_declarationsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.event_accessor_declarations`.
	 * @param ctx the parse tree
	 */
	exitEvent_accessor_declarations?: (ctx: Event_accessor_declarationsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.add_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	enterAdd_accessor_declaration?: (ctx: Add_accessor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.add_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	exitAdd_accessor_declaration?: (ctx: Add_accessor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.remove_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	enterRemove_accessor_declaration?: (ctx: Remove_accessor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.remove_accessor_declaration`.
	 * @param ctx the parse tree
	 */
	exitRemove_accessor_declaration?: (ctx: Remove_accessor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.overloadable_operator`.
	 * @param ctx the parse tree
	 */
	enterOverloadable_operator?: (ctx: Overloadable_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.overloadable_operator`.
	 * @param ctx the parse tree
	 */
	exitOverloadable_operator?: (ctx: Overloadable_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.conversion_operator_declarator`.
	 * @param ctx the parse tree
	 */
	enterConversion_operator_declarator?: (ctx: Conversion_operator_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.conversion_operator_declarator`.
	 * @param ctx the parse tree
	 */
	exitConversion_operator_declarator?: (ctx: Conversion_operator_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constructor_initializer`.
	 * @param ctx the parse tree
	 */
	enterConstructor_initializer?: (ctx: Constructor_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constructor_initializer`.
	 * @param ctx the parse tree
	 */
	exitConstructor_initializer?: (ctx: Constructor_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.body`.
	 * @param ctx the parse tree
	 */
	enterBody?: (ctx: BodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.body`.
	 * @param ctx the parse tree
	 */
	exitBody?: (ctx: BodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.struct_interfaces`.
	 * @param ctx the parse tree
	 */
	enterStruct_interfaces?: (ctx: Struct_interfacesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.struct_interfaces`.
	 * @param ctx the parse tree
	 */
	exitStruct_interfaces?: (ctx: Struct_interfacesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.struct_body`.
	 * @param ctx the parse tree
	 */
	enterStruct_body?: (ctx: Struct_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.struct_body`.
	 * @param ctx the parse tree
	 */
	exitStruct_body?: (ctx: Struct_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.struct_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_member_declaration?: (ctx: Struct_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.struct_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_member_declaration?: (ctx: Struct_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.array_type`.
	 * @param ctx the parse tree
	 */
	enterArray_type?: (ctx: Array_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.array_type`.
	 * @param ctx the parse tree
	 */
	exitArray_type?: (ctx: Array_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.rank_specifier`.
	 * @param ctx the parse tree
	 */
	enterRank_specifier?: (ctx: Rank_specifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.rank_specifier`.
	 * @param ctx the parse tree
	 */
	exitRank_specifier?: (ctx: Rank_specifierContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.array_initializer`.
	 * @param ctx the parse tree
	 */
	enterArray_initializer?: (ctx: Array_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.array_initializer`.
	 * @param ctx the parse tree
	 */
	exitArray_initializer?: (ctx: Array_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variant_type_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterVariant_type_parameter_list?: (ctx: Variant_type_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variant_type_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitVariant_type_parameter_list?: (ctx: Variant_type_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variant_type_parameter`.
	 * @param ctx the parse tree
	 */
	enterVariant_type_parameter?: (ctx: Variant_type_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variant_type_parameter`.
	 * @param ctx the parse tree
	 */
	exitVariant_type_parameter?: (ctx: Variant_type_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.variance_annotation`.
	 * @param ctx the parse tree
	 */
	enterVariance_annotation?: (ctx: Variance_annotationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.variance_annotation`.
	 * @param ctx the parse tree
	 */
	exitVariance_annotation?: (ctx: Variance_annotationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_base`.
	 * @param ctx the parse tree
	 */
	enterInterface_base?: (ctx: Interface_baseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_base`.
	 * @param ctx the parse tree
	 */
	exitInterface_base?: (ctx: Interface_baseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_body`.
	 * @param ctx the parse tree
	 */
	enterInterface_body?: (ctx: Interface_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_body`.
	 * @param ctx the parse tree
	 */
	exitInterface_body?: (ctx: Interface_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterInterface_member_declaration?: (ctx: Interface_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitInterface_member_declaration?: (ctx: Interface_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_accessors`.
	 * @param ctx the parse tree
	 */
	enterInterface_accessors?: (ctx: Interface_accessorsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_accessors`.
	 * @param ctx the parse tree
	 */
	exitInterface_accessors?: (ctx: Interface_accessorsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.enum_base`.
	 * @param ctx the parse tree
	 */
	enterEnum_base?: (ctx: Enum_baseContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.enum_base`.
	 * @param ctx the parse tree
	 */
	exitEnum_base?: (ctx: Enum_baseContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.enum_body`.
	 * @param ctx the parse tree
	 */
	enterEnum_body?: (ctx: Enum_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.enum_body`.
	 * @param ctx the parse tree
	 */
	exitEnum_body?: (ctx: Enum_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.enum_member_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_member_declaration?: (ctx: Enum_member_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.enum_member_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_member_declaration?: (ctx: Enum_member_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.global_attribute_section`.
	 * @param ctx the parse tree
	 */
	enterGlobal_attribute_section?: (ctx: Global_attribute_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.global_attribute_section`.
	 * @param ctx the parse tree
	 */
	exitGlobal_attribute_section?: (ctx: Global_attribute_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.global_attribute_target`.
	 * @param ctx the parse tree
	 */
	enterGlobal_attribute_target?: (ctx: Global_attribute_targetContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.global_attribute_target`.
	 * @param ctx the parse tree
	 */
	exitGlobal_attribute_target?: (ctx: Global_attribute_targetContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attributes`.
	 * @param ctx the parse tree
	 */
	enterAttributes?: (ctx: AttributesContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attributes`.
	 * @param ctx the parse tree
	 */
	exitAttributes?: (ctx: AttributesContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attribute_section`.
	 * @param ctx the parse tree
	 */
	enterAttribute_section?: (ctx: Attribute_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attribute_section`.
	 * @param ctx the parse tree
	 */
	exitAttribute_section?: (ctx: Attribute_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attribute_target`.
	 * @param ctx the parse tree
	 */
	enterAttribute_target?: (ctx: Attribute_targetContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attribute_target`.
	 * @param ctx the parse tree
	 */
	exitAttribute_target?: (ctx: Attribute_targetContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attribute_list`.
	 * @param ctx the parse tree
	 */
	enterAttribute_list?: (ctx: Attribute_listContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attribute_list`.
	 * @param ctx the parse tree
	 */
	exitAttribute_list?: (ctx: Attribute_listContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attribute`.
	 * @param ctx the parse tree
	 */
	enterAttribute?: (ctx: AttributeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attribute`.
	 * @param ctx the parse tree
	 */
	exitAttribute?: (ctx: AttributeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.attribute_argument`.
	 * @param ctx the parse tree
	 */
	enterAttribute_argument?: (ctx: Attribute_argumentContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.attribute_argument`.
	 * @param ctx the parse tree
	 */
	exitAttribute_argument?: (ctx: Attribute_argumentContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.pointer_type`.
	 * @param ctx the parse tree
	 */
	enterPointer_type?: (ctx: Pointer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.pointer_type`.
	 * @param ctx the parse tree
	 */
	exitPointer_type?: (ctx: Pointer_typeContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_pointer_declarators`.
	 * @param ctx the parse tree
	 */
	enterFixed_pointer_declarators?: (ctx: Fixed_pointer_declaratorsContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_pointer_declarators`.
	 * @param ctx the parse tree
	 */
	exitFixed_pointer_declarators?: (ctx: Fixed_pointer_declaratorsContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_pointer_declarator`.
	 * @param ctx the parse tree
	 */
	enterFixed_pointer_declarator?: (ctx: Fixed_pointer_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_pointer_declarator`.
	 * @param ctx the parse tree
	 */
	exitFixed_pointer_declarator?: (ctx: Fixed_pointer_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_pointer_initializer`.
	 * @param ctx the parse tree
	 */
	enterFixed_pointer_initializer?: (ctx: Fixed_pointer_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_pointer_initializer`.
	 * @param ctx the parse tree
	 */
	exitFixed_pointer_initializer?: (ctx: Fixed_pointer_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.fixed_size_buffer_declarator`.
	 * @param ctx the parse tree
	 */
	enterFixed_size_buffer_declarator?: (ctx: Fixed_size_buffer_declaratorContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.fixed_size_buffer_declarator`.
	 * @param ctx the parse tree
	 */
	exitFixed_size_buffer_declarator?: (ctx: Fixed_size_buffer_declaratorContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.stackalloc_initializer`.
	 * @param ctx the parse tree
	 */
	enterStackalloc_initializer?: (ctx: Stackalloc_initializerContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.stackalloc_initializer`.
	 * @param ctx the parse tree
	 */
	exitStackalloc_initializer?: (ctx: Stackalloc_initializerContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.right_arrow`.
	 * @param ctx the parse tree
	 */
	enterRight_arrow?: (ctx: Right_arrowContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.right_arrow`.
	 * @param ctx the parse tree
	 */
	exitRight_arrow?: (ctx: Right_arrowContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.right_shift`.
	 * @param ctx the parse tree
	 */
	enterRight_shift?: (ctx: Right_shiftContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.right_shift`.
	 * @param ctx the parse tree
	 */
	exitRight_shift?: (ctx: Right_shiftContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.right_shift_assignment`.
	 * @param ctx the parse tree
	 */
	enterRight_shift_assignment?: (ctx: Right_shift_assignmentContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.right_shift_assignment`.
	 * @param ctx the parse tree
	 */
	exitRight_shift_assignment?: (ctx: Right_shift_assignmentContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interpolated_regular_string`.
	 * @param ctx the parse tree
	 */
	enterInterpolated_regular_string?: (ctx: Interpolated_regular_stringContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interpolated_regular_string`.
	 * @param ctx the parse tree
	 */
	exitInterpolated_regular_string?: (ctx: Interpolated_regular_stringContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interpolated_verbatium_string`.
	 * @param ctx the parse tree
	 */
	enterInterpolated_verbatium_string?: (ctx: Interpolated_verbatium_stringContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interpolated_verbatium_string`.
	 * @param ctx the parse tree
	 */
	exitInterpolated_verbatium_string?: (ctx: Interpolated_verbatium_stringContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interpolated_regular_string_part`.
	 * @param ctx the parse tree
	 */
	enterInterpolated_regular_string_part?: (ctx: Interpolated_regular_string_partContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interpolated_regular_string_part`.
	 * @param ctx the parse tree
	 */
	exitInterpolated_regular_string_part?: (ctx: Interpolated_regular_string_partContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interpolated_verbatium_string_part`.
	 * @param ctx the parse tree
	 */
	enterInterpolated_verbatium_string_part?: (ctx: Interpolated_verbatium_string_partContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interpolated_verbatium_string_part`.
	 * @param ctx the parse tree
	 */
	exitInterpolated_verbatium_string_part?: (ctx: Interpolated_verbatium_string_partContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interpolated_string_expression`.
	 * @param ctx the parse tree
	 */
	enterInterpolated_string_expression?: (ctx: Interpolated_string_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interpolated_string_expression`.
	 * @param ctx the parse tree
	 */
	exitInterpolated_string_expression?: (ctx: Interpolated_string_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.class_definition`.
	 * @param ctx the parse tree
	 */
	enterClass_definition?: (ctx: Class_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.class_definition`.
	 * @param ctx the parse tree
	 */
	exitClass_definition?: (ctx: Class_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.struct_definition`.
	 * @param ctx the parse tree
	 */
	enterStruct_definition?: (ctx: Struct_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.struct_definition`.
	 * @param ctx the parse tree
	 */
	exitStruct_definition?: (ctx: Struct_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.interface_definition`.
	 * @param ctx the parse tree
	 */
	enterInterface_definition?: (ctx: Interface_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.interface_definition`.
	 * @param ctx the parse tree
	 */
	exitInterface_definition?: (ctx: Interface_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.enum_definition`.
	 * @param ctx the parse tree
	 */
	enterEnum_definition?: (ctx: Enum_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.enum_definition`.
	 * @param ctx the parse tree
	 */
	exitEnum_definition?: (ctx: Enum_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.delegate_definition`.
	 * @param ctx the parse tree
	 */
	enterDelegate_definition?: (ctx: Delegate_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.delegate_definition`.
	 * @param ctx the parse tree
	 */
	exitDelegate_definition?: (ctx: Delegate_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.event_declaration`.
	 * @param ctx the parse tree
	 */
	enterEvent_declaration?: (ctx: Event_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.event_declaration`.
	 * @param ctx the parse tree
	 */
	exitEvent_declaration?: (ctx: Event_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	enterField_declaration?: (ctx: Field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	exitField_declaration?: (ctx: Field_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.property_declaration`.
	 * @param ctx the parse tree
	 */
	enterProperty_declaration?: (ctx: Property_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.property_declaration`.
	 * @param ctx the parse tree
	 */
	exitProperty_declaration?: (ctx: Property_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constant_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstant_declaration?: (ctx: Constant_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constant_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstant_declaration?: (ctx: Constant_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.indexer_declaration`.
	 * @param ctx the parse tree
	 */
	enterIndexer_declaration?: (ctx: Indexer_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.indexer_declaration`.
	 * @param ctx the parse tree
	 */
	exitIndexer_declaration?: (ctx: Indexer_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.destructor_definition`.
	 * @param ctx the parse tree
	 */
	enterDestructor_definition?: (ctx: Destructor_definitionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.destructor_definition`.
	 * @param ctx the parse tree
	 */
	exitDestructor_definition?: (ctx: Destructor_definitionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.constructor_declaration`.
	 * @param ctx the parse tree
	 */
	enterConstructor_declaration?: (ctx: Constructor_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.constructor_declaration`.
	 * @param ctx the parse tree
	 */
	exitConstructor_declaration?: (ctx: Constructor_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.method_declaration`.
	 * @param ctx the parse tree
	 */
	enterMethod_declaration?: (ctx: Method_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.method_declaration`.
	 * @param ctx the parse tree
	 */
	exitMethod_declaration?: (ctx: Method_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.method_member_name`.
	 * @param ctx the parse tree
	 */
	enterMethod_member_name?: (ctx: Method_member_nameContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.method_member_name`.
	 * @param ctx the parse tree
	 */
	exitMethod_member_name?: (ctx: Method_member_nameContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.operator_declaration`.
	 * @param ctx the parse tree
	 */
	enterOperator_declaration?: (ctx: Operator_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.operator_declaration`.
	 * @param ctx the parse tree
	 */
	exitOperator_declaration?: (ctx: Operator_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.arg_declaration`.
	 * @param ctx the parse tree
	 */
	enterArg_declaration?: (ctx: Arg_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.arg_declaration`.
	 * @param ctx the parse tree
	 */
	exitArg_declaration?: (ctx: Arg_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.method_invocation`.
	 * @param ctx the parse tree
	 */
	enterMethod_invocation?: (ctx: Method_invocationContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.method_invocation`.
	 * @param ctx the parse tree
	 */
	exitMethod_invocation?: (ctx: Method_invocationContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.object_creation_expression`.
	 * @param ctx the parse tree
	 */
	enterObject_creation_expression?: (ctx: Object_creation_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.object_creation_expression`.
	 * @param ctx the parse tree
	 */
	exitObject_creation_expression?: (ctx: Object_creation_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `CSharpParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `CSharpParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
}


import { Parser } from "antlr4ts/Parser";
import { Local_variable_declarationContext } from './CSharpParser';

export abstract class CSharpParserBase extends Parser
{
    protected IsLocalVariableDeclaration(): boolean
    {
        const localVarDecl = this.context as Local_variable_declarationContext;
        if (localVarDecl === null) {return true;}
        const localVariableType = localVarDecl.local_variable_type();
        if (!localVariableType) {return true;}
        if (localVariableType.text === "var") {return false;}
        return true;
    }
}

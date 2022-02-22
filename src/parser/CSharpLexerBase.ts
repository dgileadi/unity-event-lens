import { Lexer } from "antlr4ts/Lexer";
import { CSharpLexer } from "./CSharpLexer";

export abstract class CSharpLexerBase extends Lexer
{
    protected interpolatedStringLevel = 0;
    protected interpolatedVerbatiums: boolean[] = [];
    protected curlyLevels: number[] = [];
    protected verbatium = false;

    protected OnInterpolatedRegularStringStart(): void
    {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(false);
        this.verbatium = false;
    }

    protected OnInterpolatedVerbatiumStringStart(): void
    {
        this.interpolatedStringLevel++;
        this.interpolatedVerbatiums.push(true);
        this.verbatium = true;
    }

    protected OnOpenBrace(): void
    {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push(this.curlyLevels.pop() || 0 + 1);
        }
    }

    protected OnCloseBrace(): void
    {
        if (this.interpolatedStringLevel > 0) {
            this.curlyLevels.push(this.curlyLevels.pop() || 0 - 1);
            if (this.peek(this.curlyLevels) === 0) {
                this.curlyLevels.pop();
                super.skip();
                super.popMode();
            }
        }
    }

    protected OnColon(): void
    {

        if (this.interpolatedStringLevel > 0) {
            let ind = 1;
            let switchToFormatString = true;
            let c = String.fromCharCode(this._input.LA(ind));
            while (c !== '}')
            {
                if (c === ':' || c === ')') {
                    switchToFormatString = false;
                    break;
                }
                ind++;
                c = String.fromCharCode(this._input.LA(ind));
            }
            if (switchToFormatString) {
                this.mode(CSharpLexer.INTERPOLATION_FORMAT);
            }
        }
    }

    protected OpenBraceInside(): void
    {
        this.curlyLevels.push(1);
    }

    protected OnDoubleQuoteInside(): void
    {
        this.interpolatedStringLevel--;
        this.interpolatedVerbatiums.pop();
        this.verbatium = this.peek(this.interpolatedVerbatiums) || false;
    }

    protected OnCloseBraceInside(): void
    {
        this.curlyLevels.pop();
    }

    protected IsRegularCharInside(): boolean
    {
        return !this.verbatium;
    }

    protected IsVerbatiumDoubleQuoteInside(): boolean
    {
        return this.verbatium;
    }

    private peek(array: any[]): any
    {
        return array.length > 0 ? array[array.length - 1] : undefined
    }
}
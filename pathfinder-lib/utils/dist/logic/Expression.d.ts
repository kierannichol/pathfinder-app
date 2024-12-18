import { DataContext, Resolvable, ResolvedValue } from "@kierannichol/formula-js";
export default class Expression extends Resolvable {
    readonly original: string;
    private readonly parts;
    private static InlineRegex;
    static parse(text: string | Expression): Expression;
    resolve(context?: DataContext): ResolvedValue;
    asFormula(): string;
    private constructor();
}

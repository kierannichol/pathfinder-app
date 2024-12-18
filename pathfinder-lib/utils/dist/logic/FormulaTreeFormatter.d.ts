import { DataContext, Resolvable, ResolvedValue } from "@kierannichol/formula-js";
export declare enum TreeNodeOperator {
    ALL = 0,
    ANY = 1
}
export declare class FormattedValue extends ResolvedValue {
    private readonly actual;
    private readonly formatted;
    constructor(actual: ResolvedValue, formatted: string);
    asBoolean(): boolean;
    asNumber(): number;
    asText(): string;
    asFormatted(): string;
    equals(other: ResolvedValue): boolean;
}
export declare class TreeNodeValue extends FormattedValue {
    readonly operator: TreeNodeOperator;
    private readonly children;
    constructor(actual: ResolvedValue, operator: TreeNodeOperator, children: ResolvedValue[]);
    mapChildren<T>(mapFn: (r: ResolvedValue) => T): T[];
    equals(other: ResolvedValue): boolean;
}
type VariableLookup = (variable: string) => string;
export default class FormulaFormatter {
    private readonly lookup;
    private readonly Parser;
    constructor(lookup: VariableLookup);
    format(formula: Resolvable | undefined, dataContext: DataContext): TreeNodeValue | undefined;
    private static noneIfEmpty;
    private static idPartToName;
}
export {};

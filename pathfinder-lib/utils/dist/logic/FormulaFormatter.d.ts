import { DataContext, ResolvedValue } from "@kierannichol/formula-js";
type VariableLookup = (variable: string) => string;
type ValueFormat = (value: ResolvedValue, operator: string, variable?: string) => string;
export default class FormulaFormatter {
    private readonly lookup;
    private readonly valueFormat;
    private readonly Parser;
    constructor(lookup: VariableLookup, valueFormat: ValueFormat);
    format(formulaText: string | undefined, dataContext: DataContext): string | undefined;
}
export {};

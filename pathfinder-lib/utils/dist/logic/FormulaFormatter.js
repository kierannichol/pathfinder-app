import { Associativity, ResolvedValue, ShuntingYard } from "@kierannichol/formula-js";
class FormattedValue extends ResolvedValue {
    constructor(actual, name, showMarker) {
        super();
        this.actual = actual;
        this.name = name;
        this.showMarker = showMarker;
    }
    asBoolean() {
        return this.actual.asBoolean();
    }
    asNumber() {
        return this.actual.asNumber();
    }
    asText() {
        return this.actual.asText();
    }
    asFormatted() {
        return this.showMarker
            ? (this.asBoolean() ? "[Y] " : "[N] ") + this.name
            : this.asFormattedWithoutMark();
    }
    asFormattedWithoutMark() {
        return this.name;
    }
    equals(other) {
        return false;
    }
}
function formatNumberOp(a, b, mathFn, textFn, replaceMark = true) {
    const aName = a instanceof FormattedValue ? replaceMark ? a.asFormattedWithoutMark() : a.asFormatted() : a.asText();
    const bName = b instanceof FormattedValue ? replaceMark ? b.asFormattedWithoutMark() : b.asFormatted() : b.asText();
    const isTrue = mathFn(a.asNumber(), b.asNumber());
    const text = textFn(aName, bName);
    return new FormattedValue(ResolvedValue.of(isTrue), text, replaceMark);
}
function formatBooleanOp(a, b, mathFn, textFn, replaceMark = true) {
    const aName = a instanceof FormattedValue ? replaceMark ? a.asFormattedWithoutMark() : a.asFormatted() : a.asText();
    const bName = b instanceof FormattedValue ? replaceMark ? b.asFormattedWithoutMark() : b.asFormatted() : b?.asText() ?? '';
    const isTrue = mathFn(a.asBoolean(), b?.asBoolean() ?? false);
    const text = textFn(aName, bName);
    return new FormattedValue(ResolvedValue.of(isTrue), text, replaceMark);
}
export default class FormulaFormatter {
    constructor(lookup, valueFormat) {
        this.lookup = lookup;
        this.valueFormat = valueFormat;
        this.Parser = ShuntingYard.parser()
            .operator('^', 4, Associativity.Right, 2, (a, b) => ResolvedValue.of(Math.pow(a.asNumber(), b.asNumber())))
            .operator('*', 3, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() * b.asNumber()))
            .operator('/', 3, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() / b.asNumber()))
            .operator('+', 2, Associativity.Left, 2, (a, b) => ResolvedValue.of(a.asNumber() + b.asNumber()))
            .operator('-', 2, Associativity.Left, 2, (a, b) => ResolvedValue.of((a?.asNumber() ?? 0) - b.asNumber()))
            .operator('!', 2, Associativity.Left, 1, (a) => formatBooleanOp(a, undefined, a => !a, a => `not ${a}`))
            .operator('<', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a > b, (a, b) => `${a} less than ${b}`))
            .operator('<=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a >= b, (a, b) => `${a} is ${b} or less`))
            .operator('>', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a > b, (a, b) => `${a} greater than ${b}`))
            .operator('>=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a >= b, (a, b) => `${a} is ${b}+`))
            .operator('==', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a == b, (a, b) => `${a} equals ${b}`))
            .operator('!=', 3, Associativity.Left, 2, (a, b) => formatNumberOp(a, b, (a, b) => a != b, (a, b) => `${a} not equal to ${b}`))
            .operator('AND', 1, Associativity.Left, 2, (a, b) => formatBooleanOp(a, b, (a, b) => a && b, (a, b) => `${a} AND ${b}`, false))
            .operator('OR', 1, Associativity.Left, 2, (a, b) => formatBooleanOp(a, b, (a, b) => a && b, (a, b) => `${a} OR ${b}`, false))
            .term('true', () => ResolvedValue.of(true))
            .term('false', () => ResolvedValue.of(false))
            .function('abs', 1, (a) => ResolvedValue.of(Math.abs(a.asNumber())))
            .function('min', 2, (a, b) => ResolvedValue.of(Math.min(a.asNumber(), b.asNumber())))
            .function('max', 2, (a, b) => ResolvedValue.of(Math.max(a.asNumber(), b.asNumber())))
            .function('floor', 1, (a) => ResolvedValue.of(Math.floor(a.asNumber())))
            .function('ceil', 1, (a) => ResolvedValue.of(Math.ceil(a.asNumber())))
            .function('signed', 1, (a) => ResolvedValue.of((a.asNumber() < 0 ? '' : '+') + a.asNumber()))
            .function('if', 3, (a, b, c) => a.asBoolean() ? b : c)
            .function('concat', 2, (a, b) => ResolvedValue.of(a.asText() + b.asText()))
            .variable('@', '', (state, key) => {
            const actual = state.get(key);
            return actual ? new FormattedValue(actual, lookup(key), true) : ResolvedValue.None;
        })
            .variable('min(@', ')', (state, key) => ResolvedValue.of("minimum of " + lookup(key)))
            .variable('max(@', ')', (state, key) => ResolvedValue.of("maximum of " + lookup(key)))
            .variable('sum(@', ')', (state, key) => ResolvedValue.of("sum of " + lookup(key)))
            .brackets(resolved => resolved instanceof FormattedValue ? new FormattedValue(resolved, resolved.asFormatted(), false) : resolved);
    }
    format(formulaText, dataContext) {
        if (formulaText === undefined) {
            return undefined;
        }
        const resolved = this.Parser.parse(formulaText).resolve(dataContext);
        return resolved instanceof FormattedValue ? resolved.asFormatted() : resolved?.asText();
    }
}

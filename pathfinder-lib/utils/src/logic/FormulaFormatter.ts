import {Associativity, DataContext, ResolvedValue, ShuntingYard} from "@kierannichol/formula-js";

class FormattedValue extends ResolvedValue {
  constructor(private readonly actual: ResolvedValue,
              private readonly name: string,
              private readonly showMarker: boolean) {
    super();
  }

  asBoolean(): boolean {
    return this.actual.asBoolean();
  }

  asNumber(): number {
    return this.actual.asNumber();
  }

  asText(): string {
    return this.actual.asText();
  }

  asFormatted(): string {
    return this.showMarker
        ? (this.asBoolean() ? "[Y] " : "[N] ") + this.name
        : this.asFormattedWithoutMark();
  }

  asFormattedWithoutMark(): string {
    return this.name;
  }

  equals(other: ResolvedValue): boolean {
    return false;
  }
}

type VariableLookup = (variable: string) => string;
type ValueFormat = (value: ResolvedValue, operator: string, variable?: string) => string;

function formatNumberOp(a: ResolvedValue, b: ResolvedValue, mathFn: (a: number, b: number) => boolean, textFn: (a: string, b: string) => string, replaceMark: boolean = true): ResolvedValue {
  const aName = a instanceof FormattedValue ? replaceMark ? a.asFormattedWithoutMark() : a.asFormatted() : a.asText();
  const bName = b instanceof FormattedValue ? replaceMark ? b.asFormattedWithoutMark() : b.asFormatted() : b.asText();

  const isTrue = mathFn(a.asNumber(), b.asNumber());
  const text = textFn(aName, bName);
  return new FormattedValue(ResolvedValue.of(isTrue), text, replaceMark);
}

function formatBooleanOp(a: ResolvedValue, b: ResolvedValue|undefined, mathFn: (a: boolean, b: boolean) => boolean, textFn: (a: string, b: string) => string, replaceMark: boolean = true): ResolvedValue {
  const aName = a instanceof FormattedValue ? replaceMark ? a.asFormattedWithoutMark() : a.asFormatted() : a.asText();
  const bName = b instanceof FormattedValue ? replaceMark ? b.asFormattedWithoutMark() : b.asFormatted() : b?.asText() ?? '';

  const isTrue = mathFn(a.asBoolean(), b?.asBoolean() ?? false);
  const text = textFn(aName, bName);
  return new FormattedValue(ResolvedValue.of(isTrue), text, replaceMark);
}

export default class FormulaFormatter {

  private readonly Parser;

  public constructor(private readonly lookup: VariableLookup, private readonly valueFormat: ValueFormat) {

    this.Parser = ShuntingYard.parser()
        .operator('^', 4, Associativity.Right, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(Math.pow(a.asNumber(), b.asNumber())))
        .operator('*', 3, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(a.asNumber() * b.asNumber()))
        .operator('/', 3, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(a.asNumber() / b.asNumber()))
        .operator('+', 2, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(a.asNumber() + b.asNumber()))
        .operator('-', 2, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of((a?.asNumber() ?? 0) - b.asNumber()))
        .operator('!', 2, Associativity.Left, 1, (a:ResolvedValue) => formatBooleanOp(a, undefined, a => !a, a => `not ${a}`))
        .operator('<', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a > b, (a, b) => `${a} less than ${b}`))
        .operator('<=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a >= b, (a, b) => `${a} is ${b} or less`))
        .operator('>', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a > b, (a, b) => `${a} greater than ${b}`))
        .operator('>=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a >= b, (a, b) => `${a} is ${b}+`))
        .operator('==', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a == b, (a, b) => `${a} equals ${b}`))
        .operator('!=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a != b, (a, b) => `${a} not equal to ${b}`))
        .operator('AND', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatBooleanOp(a, b, (a, b)=> a && b, (a, b) => `${a} AND ${b}`, false))
        .operator('OR', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatBooleanOp(a, b, (a, b)=> a && b, (a, b) => `${a} OR ${b}`, false))
        .term('true', () => ResolvedValue.of(true))
        .term('false', () => ResolvedValue.of(false))
        .function('abs', 1, (a: ResolvedValue) => ResolvedValue.of(Math.abs(a.asNumber())))
        .function('min', 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(Math.min(a.asNumber(), b.asNumber())))
        .function('max', 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(Math.max(a.asNumber(), b.asNumber())))
        .function('floor', 1, (a: ResolvedValue) => ResolvedValue.of(Math.floor(a.asNumber())))
        .function('ceil', 1, (a: ResolvedValue) => ResolvedValue.of(Math.ceil(a.asNumber())))
        .function('signed', 1, (a: ResolvedValue) => ResolvedValue.of((a.asNumber() < 0 ? '' : '+') + a.asNumber()))
        .function('if', 3, (a: ResolvedValue, b: ResolvedValue, c: ResolvedValue) => a.asBoolean() ? b : c)
        .function('concat', 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(a.asText() + b.asText()))
        .variable('@', '', (state, key) => {
          const actual = state.get(key);
          return actual ? new FormattedValue(actual, lookup(key), true) : ResolvedValue.None;
        })
        .variable('min(@', ')', (state, key) => ResolvedValue.of("minimum of " + lookup(key)))
        .variable('max(@', ')', (state, key) => ResolvedValue.of("maximum of " + lookup(key)))
        .variable('sum(@', ')', (state, key) => ResolvedValue.of("sum of " + lookup(key)))
        .brackets(resolved => resolved instanceof FormattedValue ? new FormattedValue(resolved, resolved.asFormatted(), false) : resolved)
    ;
  }

  public format(formulaText: string|undefined, dataContext: DataContext): string|undefined {
    if (formulaText === undefined) {
      return undefined;
    }
    const resolved = this.Parser.parse(formulaText).resolve(dataContext);
    return resolved instanceof FormattedValue ? resolved.asFormatted() : resolved?.asText();
  }
}
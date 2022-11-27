import {DataContext} from "./DataContext";
import {ResolvedValue} from "./ResolvedValue";
import {Associativity, ShuntingYard} from "./ShuntingYard";

export enum TreeNodeOperator {
  ALL,
  ANY,
}

export class TreeNodeValue extends ResolvedValue {
  constructor(private readonly actual: ResolvedValue,
              public readonly operator: TreeNodeOperator,
              private readonly children: ResolvedValue[]) {
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

  map<T>(mapFn: (r: ResolvedValue) => T): T[] {
    return this.children.map(mapFn);
  }

  equals(other: ResolvedValue): boolean {
    return false;
  }
}

export class FormattedValue extends ResolvedValue {
  constructor(private readonly actual: ResolvedValue,
              private readonly formatted: string) {
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
    return this.formatted;
  }

  equals(other: ResolvedValue): boolean {
    return false;
  }
}

type VariableLookup = (variable: string) => string;

function formatNumberOp(a: ResolvedValue, b: ResolvedValue, mathFn: (a: number, b: number) => boolean, textFn: (a: string, b: string) => string): ResolvedValue {
  const aName = a instanceof FormattedValue ? a.asFormatted() : a.asText();
  const bName = b instanceof FormattedValue ? b.asFormatted() : b.asText();

  const isTrue = mathFn(a.asNumber(), b.asNumber());
  const text = textFn(aName, bName);
  return new FormattedValue(ResolvedValue.of(isTrue), text);
}

function formatBooleanOp(a: ResolvedValue, b: ResolvedValue|undefined, mathFn: (a: boolean, b: boolean) => boolean, textFn: (a: string, b: string) => string): ResolvedValue {
  const aName = a instanceof FormattedValue ? a.asFormatted() : a.asText();
  const bName = b instanceof FormattedValue ? b.asFormatted() : b?.asText() ?? '';

  const isTrue = mathFn(a.asBoolean(), b?.asBoolean() ?? false);
  const text = textFn(aName, bName);
  return new FormattedValue(ResolvedValue.of(isTrue), text);
}

function createTreeNode(operator: TreeNodeOperator, ...children: ResolvedValue[]) {
  let actual = undefined;
  switch (operator) {
    case TreeNodeOperator.ALL:
      actual = children.reduce((a, b) => ResolvedValue.of(a.asBoolean() && b.asBoolean()), ResolvedValue.of(true));
      break;
    case TreeNodeOperator.ANY:
      actual = children.reduce((a, b) => ResolvedValue.of(a.asBoolean() || b.asBoolean()), ResolvedValue.of(false));
      break;
  }

  return new TreeNodeValue(actual, operator, children);
}

export default class FormulaFormatter {

  private readonly Parser;

  public constructor(private readonly lookup: VariableLookup) {

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
        .operator('>=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a >= b, (a, b) => `${a} ${b}`))
        .operator('==', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a == b, (a, b) => `${a} is ${b}`))
        .operator('!=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a != b, (a, b) => `${a} is not ${b}`))
        .operator('AND', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => createTreeNode(TreeNodeOperator.ALL, a, b))
        .operator('OR', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => createTreeNode(TreeNodeOperator.ANY, a, b))
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
          return actual ? new FormattedValue(actual, lookup(key)) : ResolvedValue.none();
        })
        .variable('min(@', ')', (state, key) => {
          const actual = state.get(key);
          return actual ? new FormattedValue(actual, lookup(key)) : ResolvedValue.none();
        })
        .variable('max(@', ')', (state, key) => {
          const actual = state.get(key);
          return actual ? new FormattedValue(actual, lookup(key)) : ResolvedValue.none();
        })
        .variable('sum(@', ')', (state, key) => {
          const actual = state.get(key);
          return actual ? new FormattedValue(actual, lookup(key)) : ResolvedValue.none();
        })
  }

  public format(formulaText: string|undefined, dataContext: DataContext): TreeNodeValue|undefined {
    if (formulaText === undefined) {
      return undefined;
    }
    let resolved = this.Parser.parse(formulaText).resolve(dataContext);
    if (resolved === undefined) {
      return undefined;
    }
    return resolved instanceof TreeNodeValue ? resolved : new TreeNodeValue(resolved, TreeNodeOperator.ALL, [resolved]);
  }
}
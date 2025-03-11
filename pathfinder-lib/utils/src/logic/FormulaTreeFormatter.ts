import {Associativity, DataContext, Resolvable, ResolvedValue, ShuntingYard} from "@kierannichol/formula-js";
import Id from "../Id";

export enum TreeNodeOperator {
  ALL,
  ANY,
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

export class TreeNodeValue extends FormattedValue {
  constructor(actual: ResolvedValue,
              public readonly operator: TreeNodeOperator,
              private readonly children: ResolvedValue[]) {

    const parts = children.map(child => {
      return child instanceof FormattedValue
          ? child.asFormatted()
          : child.asText()
    });

    const operatorText = operator === TreeNodeOperator.ALL ? ' and ' : ' or ';
    // const separatorText = operator === TreeNodeOperator.ANY ? ', ' : '; ';

    // let formatted = parts.length > 1 ? (parts.slice(0, -1).join(separatorText) + operatorText) : '';
    // formatted = formatted + parts[parts.length-1];

    let formatted = parts.join(operatorText);

    super(actual, formatted);
  }

  mapChildren<T>(mapFn: (r: ResolvedValue) => T): T[] {
    return this.children
      .map(mapFn);
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
        .operator('!', 2, Associativity.Left, 1, (a:ResolvedValue) => formatBooleanOp(a, undefined, a => !a, a => `Do not already have ${a}`))
        .operator('<', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a > b, (a, b) => `${a} less than ${b}`))
        .operator('<=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a >= b, (a, b) => `${a} is ${b} or less`))
        .operator('>', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a > b, (a, b) => `${a} greater than ${b}`))
        .operator('>=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a >= b, (a, b) => `${a} ${b}`))
        .operator('==', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a === b, (a, b) => `${a} is ${b}`))
        .operator('!=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => formatNumberOp(a, b, (a, b)=> a !== b, (a, b) => `${a} is not ${b}`))
        .operator('AND', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => createTreeNode(TreeNodeOperator.ALL, a, b))
        .operator('OR', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => createTreeNode(TreeNodeOperator.ANY, a, b))
        .operator('d', 4, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => ResolvedValue.of(a.asNumber() + 'd' + b.asNumber()))
        // .operator('d', 4, Associativity.Left, 2, (a: ResolvedValue, b: ResolvedValue) => formatNumberOp(a, b, (a, b) => ((a * (b + 1)) / 2.0), (a, b) => `${a}d${b}`))
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
        .varargsFunction('any', (args: ResolvedValue[]) => createTreeNode(TreeNodeOperator.ANY, ...args))
        .varargsFunction('all', (args: ResolvedValue[]) => createTreeNode(TreeNodeOperator.ALL, ...args))
        .variable('@', '', (state, key) => {
          let actual = state.get(key) ?? ResolvedValue.None;
          let name = this.lookup(key);
          if (name) {
            return new FormattedValue(actual, name);
          }
          name = this.lookup(Id.withoutOption(key));
          if (name) {
            const optionName = FormulaFormatter.idPartToName(Id.justOption(key) ?? '');
            return new FormattedValue(actual, `${name} (${optionName})`);
          }
          return new FormattedValue(actual, '???');
        })
        .variable('min(@', ')', (state, key) => {
          const actual = FormulaFormatter.noneIfEmpty(state.search(key))
              .reduce((a, b) => a.asNumber() < b.asNumber() ? a : b)
          return new FormattedValue(actual, '');
        })
        .variable('max(@', ')', (state, key) => {
          const actual = FormulaFormatter.noneIfEmpty(state.search(key))
              .reduce((a, b) => a.asNumber() > b.asNumber() ? a : b)
          return new FormattedValue(actual, '');
        })
        .variable('sum(@', ')', (state, key) => {
          const actual = FormulaFormatter.noneIfEmpty(state.search(key))
              .reduce((a, b) => ResolvedValue.of(a.asNumber() + b.asNumber()))
          return new FormattedValue(actual, `${this.lookup(Id.withoutOption(key))}`);
        })
        .comment('[', ']', (text, value) => {
          return new FormattedValue(value, text)
        })
  }

  public format(formula: Resolvable|undefined, dataContext: DataContext): TreeNodeValue|undefined {
    if (formula === undefined) {
      return undefined;
    }
    const formulaText = formula.asFormula();
    let resolved = this.Parser.parse(formulaText).resolve(dataContext);
    if (resolved === undefined) {
      return undefined;
    }
    return resolved instanceof TreeNodeValue ? resolved : new TreeNodeValue(resolved, TreeNodeOperator.ALL, [resolved]);
  }

  private static noneIfEmpty(array: ResolvedValue[]): ResolvedValue[] {
    return array.length > 0 ? array : [ ResolvedValue.None ];
  }

  private static idPartToName(idPart: string): string {
    return idPart
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
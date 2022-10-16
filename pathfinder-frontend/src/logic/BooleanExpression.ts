import {Associativity, ShuntingYard} from "./ShuntingYard";
import Resolvable from "./Resolvable";
import {ResolvedValue} from "./ResolvedValue";

export default class BooleanExpression {
  private static Parser = ShuntingYard.parser()
    .operator('!', 2, Associativity.Left, 1, (a:ResolvedValue) => ResolvedValue.of(!a.asBoolean()))
    .operator('<', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(a.asNumber() < b.asNumber()))
    .operator('<=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(a.asNumber() <= b.asNumber()))
    .operator('>', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(a.asNumber() > b.asNumber()))
    .operator('>=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(a.asNumber() >= b.asNumber()))
    .operator('==', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => {
      // console.log(`${a} === ${b}: ${a.equals(b)}`);
      return ResolvedValue.of(a.equals(b))
    })
    .operator('!=', 3, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(!a.equals(b)))
    .operator('AND', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => {
      // console.log(`${a.asText()} AND ${b.asText()}: ${a.asBoolean() && b.asBoolean()}`);
      return ResolvedValue.of(a.asBoolean() && b.asBoolean())
    })
    .operator('OR', 1, Associativity.Left, 2, (a:ResolvedValue, b:ResolvedValue) => ResolvedValue.of(a.asBoolean() || b.asBoolean()))
    .term('true', () => ResolvedValue.of(true))
    .term('false', () => ResolvedValue.of(false))
    .variable('@', '',(state, key) => state.get(key))
  ;

  static parse(formula: string|Resolvable): Resolvable {
    if (formula instanceof Resolvable) {
      return formula;
    }
    return this.Parser.parse(formula);
  }
}
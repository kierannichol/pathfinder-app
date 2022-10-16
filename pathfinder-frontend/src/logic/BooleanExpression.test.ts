import BooleanExpression from "./BooleanExpression";
import {DataContext, DataContextState} from "./DataContext";

test('true/false', () => {
  expect(BooleanExpression.parse("true").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("false").resolve()?.asBoolean()).toBe(false);
});

test('AND', () => {
  expect(BooleanExpression.parse("true AND true").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("true AND false").resolve()?.asBoolean()).toBe(false);
  expect(BooleanExpression.parse("false AND true").resolve()?.asBoolean()).toBe(false);
  expect(BooleanExpression.parse("false AND false").resolve()?.asBoolean()).toBe(false);
});

test('OR', () => {
  expect(BooleanExpression.parse("true OR true").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("true OR false").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("false OR true").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("false OR false").resolve()?.asBoolean()).toBe(false);
});

test('not', () => {
  expect(BooleanExpression.parse("!true").resolve()?.asBoolean()).toBe(false);
  expect(BooleanExpression.parse("!false").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("!false AND true").resolve()?.asBoolean()).toBe(true);
});

test('less than', () => {
  expect(BooleanExpression.parse("2 < 5").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("5 < 2").resolve()?.asBoolean()).toBe(false);
});

test('less than or equal to', () => {
  expect(BooleanExpression.parse("2 <= 5").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("5 <= 2").resolve()?.asBoolean()).toBe(false);
  expect(BooleanExpression.parse("5 <= 5").resolve()?.asBoolean()).toBe(true);
});

test('greater than', () => {
  expect(BooleanExpression.parse("2 > 1").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("1 > 2").resolve()?.asBoolean()).toBe(false);
});

test('greater than or equal to', () => {
  expect(BooleanExpression.parse("2 >= 1").resolve()?.asBoolean()).toBe(true);
  expect(BooleanExpression.parse("1 >= 2").resolve()?.asBoolean()).toBe(false);
  expect(BooleanExpression.parse("2 >= 2").resolve()?.asBoolean()).toBe(true);
});

test('not test', () => {
  const context: DataContext = DataContext.of({
    'feat:power_attack': true,
    'bab': 1,
    'str_base': 13,
    'str_score': '{@str_base}'
  });
  expect(BooleanExpression.parse("@str_score >= 13 AND @bab >= 1 AND !@feat:power_attack")
      .resolve(context)?.asBoolean()).toBe(false);
});
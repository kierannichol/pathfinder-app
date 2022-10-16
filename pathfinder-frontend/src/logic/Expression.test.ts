import Expression from "./Expression";
import {DataContext} from "./DataContext";

test('text only expression', () => {
  let expression = Expression.parse("This is a test");
  expect(expression.resolve()?.asText()).toBe("This is a test");
});

test('expression with simple formula', () => {
  let expression = Expression.parse("5 + 5 = {5 + 5}");
  expect(expression.resolve()?.asText()).toBe("5 + 5 = 10");
});

test('expression with multiple formula', () => {
  let expression = Expression.parse("{2+3} + 5 = {5 + 5}");
  expect(expression.resolve()?.asText()).toBe("5 + 5 = 10");
});

test('expression with variable reference', () => {
  const expression = Expression.parse("foo = {@foo}");
  const context = DataContext.of({ foo: 'foo' });
  expect(expression.resolve(context)?.asText()).toBe("foo = foo");
});

test('escaped symbol', () => {
  const expression = Expression.parse("foo = \\{@foo\\}");
  const context = DataContext.of({ foo: 'foo' });
  expect(expression.resolve(context)?.asText()).toBe("foo = {@foo}");
});
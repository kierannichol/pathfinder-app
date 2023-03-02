import Command from "./Command";
import {DataContext} from "./DataContext";

test('SET variable to 10', () => {
  let command = Command.parse("SET foo 10")
  let context = DataContext.of({});
  command.execute(context);
  expect(context.get("foo")?.asNumber()).toBe(10);
});

test('SET variable to "bar"', () => {
  let command = Command.parse("SET foo 'bar'")
  let context = DataContext.of({});
  command.execute(context);
  expect(context.get("foo")?.asText()).toBe("bar");
});

test('INCR empty key by 1', () => {
  let command = Command.parse("INCR foo 1")
  let context = DataContext.of({});
  command.execute(context);
  expect(context.get("foo")?.asNumber()).toBe(1);
});

test('INCR existing key by 2', () => {
  let command = Command.parse("INCR foo 2")
  let context = DataContext.of({ "foo": 5 });
  command.execute(context);
  expect(context.get("foo")?.asNumber()).toBe(7);
});

test('REPLACE existing key', () => {
  let command = Command.parse("REPLACE foo bar")
  let context = DataContext.of({ "foo": 5 });
  command.execute(context);
  expect(context.get("bar")?.asNumber()).toBe(5);
  expect(context.get("foo")?.asNumber()).toBe(0);
});

test('REPLACE WITH existing key', () => {
  let command = Command.parse("REPLACE foo WITH bar")
  let context = DataContext.of({ "foo": 5 });
  command.execute(context);
  expect(context.get("bar")?.asNumber()).toBe(5);
  expect(context.get("foo")?.asNumber()).toBe(0);
});
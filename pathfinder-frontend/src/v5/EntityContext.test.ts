import {Formula, ResolvedValue} from "@kierannichol/formula-js";
import {Effect} from "./Effect";
import {EntityContext} from "./EntityContext";
import getRealSystemTime = jest.getRealSystemTime;

test('increment empty key', () => {
  let context = new EntityContext();
  context.add(Effect.givenKey('foo').incrementBy(1).incrementBy(1));
  context.add(Effect.givenKey('foo').incrementBy(1));

  expect(context.get('foo')).toEqual(ResolvedValue.of(3));
});

test('increment set key', () => {
  let context = new EntityContext();
  context.add(Effect.givenKey('foo').setTo(5));
  context.add(Effect.givenKey('foo').incrementBy(2));

  expect(context.get('foo')).toEqual(ResolvedValue.of(7));
});

test('override value', () => {
  let context = new EntityContext();
  context.add(Effect.givenKey('foo').incrementBy(2));
  context.add(Effect.givenKey('foo').setTo(5));

  expect(context.get('foo')).toEqual(ResolvedValue.of(5));
});

test('resolve formula referencing other key', () => {
  let context = new EntityContext();
  context.add(Effect.givenKey('foo').setTo(Formula.parse('@bar + 1')));
  context.add(Effect.givenKey('bar').setTo(3));

  expect(context.get('foo')).toEqual(ResolvedValue.of(4));
});

test('resolve performance test', () => {
  const iterations = 1000;
  const formula = Formula.parse("@alpha AND (@beta OR @delta) AND @sigma AND (@omega >= 5)");

  let context = new EntityContext();
  context.add(Effect.givenKey("alpha").setTo("true"));
  context.add(Effect.givenKey("beta").setTo(1));
  context.add(Effect.givenKey("delta").setTo(0));
  context.add(Effect.givenKey("sigma").setTo("Not a number"));
  context.add(Effect.givenKey("omega").setTo("22"));
  for (let j = 0; j < 20000; j++) {
    context.add(Effect.givenKey(`key_${j}`).setTo(`value_${j}`));
  }
  let startTime = getRealSystemTime();
  for (let i = 0; i < iterations; i++) {
    formula.resolve(context)?.asBoolean();
  }
  let endTime = getRealSystemTime();
  let total = endTime - startTime;
  let average = total / iterations;
  console.log(`Resolve Total: ${total}ms`);
  console.log(`Resolve Average: ${average}ms`);
})
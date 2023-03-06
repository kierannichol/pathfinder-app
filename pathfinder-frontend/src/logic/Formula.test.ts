import {DataContext} from "./DataContext";
import {Formula} from "./Formula";
import getRealSystemTime = jest.getRealSystemTime;

test('add two scalars', () => {
  let formula = Formula.parse("2 + 3")
  expect(formula.resolve()?.asNumber()).toBe(5);
});

test('exponents', () => {
  let formula = Formula.parse("2^3")
  expect(formula.resolve()?.asNumber()).toBe(8);
});

test ('with brackets', () => {
  let formula = Formula.parse('4 + 4 * 2 / ( 1 - 5 )')
  expect(formula.resolve()?.asNumber()).toBe(2);
})

test ('with comment', () => {
  let formula = Formula.parse('(4[Four] + 2[Two])')
  expect(formula.resolve()?.asNumber()).toBe(6);
})

// test ('err: multiple operators in a row', () => {
//   let formula = Formula.parse('2 + + 3')
//   expect(formula.resolve()).toBe(112);
// })

test ('multiple digit numbers', () => {
  let formula = Formula.parse('12 + 100')
  expect(formula.resolve()?.asNumber()).toBe(112);
})

test ('abs()', () => {
  let formula = Formula.parse('2 + abs(2 - 3) + 1');
  expect(formula.resolve()?.asNumber()).toBe(4);
})

test ('min()', () => {
  let formula = Formula.parse('1 + min(4, 2)');
  expect(formula.resolve()?.asNumber()).toBe(3);
})

test ('max()', () => {
  let formula = Formula.parse('1 + max(4, 2)');
  expect(formula.resolve()?.asNumber()).toBe(5);
})

test ('complex max()', () => {
  let formula = Formula.parse('max(4 - 2, 2 / 2)');
  expect(formula.resolve()?.asNumber()).toBe(2);
})

test ('floor()', () => {
  let formula = Formula.parse('1 + floor(2.9)');
  expect(formula.resolve()?.asNumber()).toBe(3);
})

test ('ceil()', () => {
  let formula = Formula.parse('1 + ceil(2.9)');
  expect(formula.resolve()?.asNumber()).toBe(4);
})

test ('signed()', () => {
  expect(Formula.parse('signed(3)').resolve()?.asText()).toBe('+3');
  expect(Formula.parse('signed(-3)').resolve()?.asText()).toBe('-3');
  expect(Formula.parse('signed(3)').resolve()?.asNumber()).toBe(3);
  expect(Formula.parse('signed(-3)').resolve()?.asNumber()).toBe(-3);
})

test ('negative integers', () => {
  expect(Formula.parse('-4').resolve()?.asNumber()).toBe(-4);
  expect(Formula.parse('1-4').resolve()?.asNumber()).toBe(-3);
  expect(Formula.parse('(1)-4').resolve()?.asNumber()).toBe(-3);
  expect(Formula.parse('1-(4)').resolve()?.asNumber()).toBe(-3);
  expect(Formula.parse('(1-4)').resolve()?.asNumber()).toBe(-3);
})

test ('trailing minus integer', () => {
  let formula = Formula.parse('(5)-1');
  expect(formula.resolve()?.asNumber()).toBe(4);
})

test ('multiply negative integer', () => {
  let formula = Formula.parse('5*-2');
  expect(formula.resolve()?.asNumber()).toBe(-10);
})

test ('simple variable', () => {
  let formula = Formula.parse('@foo');
  let context = DataContext.of({ 'foo': 12 });
  expect(formula.resolve(context)?.asNumber()).toBe(12);
})

test ('variable math', () => {
  let formula = Formula.parse('@foo + 2');
  let context = DataContext.of({ 'foo': 1 });
  expect(formula.resolve(context)?.asNumber()).toBe(3);
})

test ('variable references formula', () => {
  let formula = Formula.parse('@bar');
  let context = DataContext.of({
    'foo': 4,
    'bar': Formula.parse('@foo') });
  expect(formula.resolve(context)?.asNumber()).toBe(4);
})

test ('chained if formula', () => {
  let formula = Formula.parse('if(1==1, 1, 0) + if(2<1, -1, 0) + if(1<=2, 1, 0)');
  let context = DataContext.Empty;
  expect(formula.resolve(context)?.asNumber()).toBe(2);
})

test ('if formula', () => {
  let formula = Formula.parse('concat(if(-2 < 0, "-", "+"), 2)');
  let context = DataContext.Empty;
  expect(formula.resolve(context)?.asText()).toBe('-2');
})

test ('else formula', () => {
  let formula = Formula.parse('concat(if(2 < 0, "-", "+"), 2)');
  let context = DataContext.Empty;
  expect(formula.resolve(context)?.asText()).toBe('+2');
})

test ('modifier formula', () => {
  let formula = Formula.parse(`concat(if((floor(@test_score/2) - 5) > 0, "+", ""), floor(@test_score/2) - 5))`);
  let context = DataContext.of({
    'test_score': 12
  });
  expect(formula.resolve(context)?.asText()).toBe('+1');
})

test ('min(wildcard)', () => {
  let formula = Formula.parse('min(@key_*)');
  let context = DataContext.of({
    'other': 2,
    'key_1': 4,
    'key_2': 3,
    'key_3': 5
  });
  expect(formula.resolve(context)?.asNumber()).toBe(3);
})

test ('max(wildcard)', () => {
  let formula = Formula.parse('max(@key_*)');
  let context = DataContext.of({
    'other': 2,
    'key_1': 4,
    'key_2': 3,
    'key_3': 5
  });
  expect(formula.resolve(context)?.asNumber()).toBe(5);
})

test ('sum(wildcard)', () => {
  let formula = Formula.parse('sum(@key_*)');
  let context = DataContext.of({
    'other': 2,
    'key_1': 4,
    'key_2': 3,
    'key_3': 5
  });
  expect(formula.resolve(context)?.asNumber()).toBe(12);
})

test ('sum(a:wildcard:b)', () => {
  let formula = Formula.parse('sum(@ability:*:lay_on_hands)');
  let context = DataContext.of({
    'ability:paladin:lay_on_hands': 1,
    // 'base:second:target': 1,
  });
  expect(formula.resolve(context)?.asNumber()).toBe(1);
})

test('parse performance test', () => {
  const iterations = 1000;
  let startTime = getRealSystemTime();
  for (let i = 0; i < iterations; i++) {
    Formula.parse("@alpha AND (@beta OR @delta) AND @sigma AND (@omega >= 5)");
  }
  let endTime = getRealSystemTime();
  let total = endTime - startTime;
  let average = total / iterations;
  console.log(`Parse Total: ${total}ms`);
  console.log(`Parse Average: ${average}ms`);
})

test('resolve performance test', () => {
  const iterations = 1000;
  const formula = Formula.parse("@alpha AND (@beta OR @delta) AND @sigma AND (@omega >= 5)");
  const context = DataContext.of({
    "alpha": "true",
    "beta": 1,
    "delta": 0,
    "sigma": "Not a number",
    "omega": "22"
  });
  for (let j = 0; j < 200; j++) {
    context.set(`key_${j}`, `value_${j}`);
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
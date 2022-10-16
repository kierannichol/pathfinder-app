import ProtoFormula from "./ProtoFormula";
import {DataContext} from "../DataContext";
import {Formula} from "../../compiled";
import Resolvable from "../Resolvable";

function protoFormula(operation: Formula.Operation): Resolvable {
  const formula: Formula = Formula.create({ operation: operation });
  return ProtoFormula.from(formula);
}

function integer(value: number | Formula.Operation): Formula.Operation {
  if (!(value instanceof Formula.Operation)) {
    value = Formula.Operation.create({ integerValue: value });
  }
  return value;
}

function add(a: number | Formula.Operation, b: number | Formula.Operation): Formula.Operation {
  return Formula.Operation.create({ addOperation: Formula.Operation.AddOperation.create({
      a: integer(a), b: integer(b)})});
}

function subtract(a: number | Formula.Operation, b: number | Formula.Operation): Formula.Operation {
  return Formula.Operation.create({ subtractOperation: Formula.Operation.SubtractOperation.create({
      a: integer(a), b: integer(b)})});
}

function multiply(a: number | Formula.Operation, b: number | Formula.Operation): Formula.Operation {
  return Formula.Operation.create({ multiplyOperation: Formula.Operation.MultiplyOperation.create({
      a: integer(a), b: integer(b)})});
}

function divide(a: number | Formula.Operation, b: number | Formula.Operation): Formula.Operation {
  return Formula.Operation.create({ divideOperation: Formula.Operation.DivideOperation.create({
      a: integer(a), b: integer(b)})});
}

function absFunc(param: number | Formula.Operation): Formula.Operation {
  return Formula.Operation.create({ absFunction: Formula.Operation.AbsFunction.create({
      param: integer(param)})});
}

test('add two scalars', () => {
  let formula = protoFormula(add(2, 3));
  expect(formula.resolve()?.asNumber()).toBe(5);
});
//
// test('exponents', () => {
//   let formula = ProtoFormula.parse("2$3")
//   expect(formula.resolve()?.asNumber()).toBe(8);
// });

test ('with brackets', () => {
  // 4 + 4 * 2 / ( 1 - 5 )
  let formula = protoFormula(add(4, divide(multiply(4, 2), subtract(1, 5))));
  expect(formula.resolve()?.asNumber()).toBe(2);
})

// // test ('err: multiple operators in a row', () => {
// //   let formula = Formula.parse('2 + + 3')
// //   expect(formula.resolve()).toBe(112);
// // })
//
test ('multiple digit numbers', () => {
  let formula = protoFormula(add(12, 100));
  expect(formula.resolve()?.asNumber()).toBe(112);
})

test ('abs()', () => {
  // let formula = ProtoFormula.parse('2 + abs(2 - 3) + 1');
  let formula = protoFormula(add(add(2, absFunc(subtract(2, 3))), 1));
  expect(formula.resolve()?.asNumber()).toBe(4);
})

// test ('min()', () => {
//   let formula = ProtoFormula.parse('1 + min(4, 2)');
//   expect(formula.resolve()?.asNumber()).toBe(3);
// })
//
// test ('max()', () => {
//   let formula = ProtoFormula.parse('1 + max(4, 2)');
//   expect(formula.resolve()?.asNumber()).toBe(5);
// })
//
// test ('complex max()', () => {
//   let formula = ProtoFormula.parse('max(4 - 2, 2 / 2)');
//   expect(formula.resolve()?.asNumber()).toBe(2);
// })
//
// test ('floor()', () => {
//   let formula = ProtoFormula.parse('1 + floor(2.9)');
//   expect(formula.resolve()?.asNumber()).toBe(3);
// })
//
// test ('ceil()', () => {
//   let formula = ProtoFormula.parse('1 + ceil(2.9)');
//   expect(formula.resolve()?.asNumber()).toBe(4);
// })
//
// test ('signed()', () => {
//   expect(ProtoFormula.parse('signed(3)').resolve()?.asText()).toBe('+3');
//   expect(ProtoFormula.parse('signed(-3)').resolve()?.asText()).toBe('-3');
//   expect(ProtoFormula.parse('signed(3)').resolve()?.asNumber()).toBe(3);
//   expect(ProtoFormula.parse('signed(-3)').resolve()?.asNumber()).toBe(-3);
// })
//
// test ('simple variable', () => {
//   let formula = ProtoFormula.parse('@foo');
//   let context = DataContext.of({ 'foo': 12 });
//   expect(formula.resolve(context)?.asNumber()).toBe(12);
// })
//
// test ('variable math', () => {
//   let formula = ProtoFormula.parse('@foo + 2');
//   let context = DataContext.of({ 'foo': 1 });
//   expect(formula.resolve(context)?.asNumber()).toBe(3);
// })
//
// test ('variable references formula', () => {
//   let formula = ProtoFormula.parse('@bar');
//   let context = DataContext.of({
//     'foo': 4,
//     'bar': ProtoFormula.parse('@foo') });
//   expect(formula.resolve(context)?.asNumber()).toBe(4);
// })
//
// test ('if formula', () => {
//   let formula = ProtoFormula.parse('concat(if(-2 < 0, "-", "+"), 2)');
//   let context = DataContext.Empty;
//   expect(formula.resolve(context)?.asText()).toBe('-2');
// })
//
// test ('else formula', () => {
//   let formula = ProtoFormula.parse('concat(if(2 < 0, "-", "+"), 2)');
//   let context = DataContext.Empty;
//   expect(formula.resolve(context)?.asText()).toBe('+2');
// })
//
// test ('modifier formula', () => {
//   let formula = ProtoFormula.parse(`concat(if((floor(@test_score/2) - 5) > 0, "+", ""), floor(@test_score/2) - 5))`);
//   let context = DataContext.of({
//     'test_score': 12
//   });
//   expect(formula.resolve(context)?.asText()).toBe('+1');
// })
import Effect from "../../core/Effect";
import {DataContext} from "../DataContext";
import {Formula} from "../Formula";
import {Decision, DecisionTree, Option, OptionMap, Outcome} from "./DecisionTree";

const MercyOptions = asOptionMapFn([
    Decision.option('mercy_1', async () => new Outcome(
        [Effect.addNumber('mercy_1', 1)],
        [])),
    Decision.option('mercy_2', async () => new Outcome(
        [Effect.addNumber('mercy_2', 1)],
        []))
]);

const RagePowerOptions = asOptionMapFn([
  Decision.option('ragepower_1', async () => new Outcome(
      [Effect.addNumber('ragepower_1', 1)],
      [])),
  Decision.option('ragepower_2', async () => new Outcome(
      [Effect.addNumber('ragepower_2', 1)],
      []))
]);

function asOptionMapFn(options: Option[]): () => OptionMap {
  const optionMap: OptionMap = {};
  options.forEach(option => optionMap[option.id] = option);
  return () => optionMap;
}

const ClassOptions = asOptionMapFn([
  Decision.option('paladin', async () => new Outcome(
      [ Effect.addNumber('paladin', 1) ],
      [
          Decision.select('mercy_1', Formula.parse('@paladin>=1'), MercyOptions),
          Decision.select('mercy_2', Formula.parse('@paladin>=2'), MercyOptions),
          Decision.select('mercy_3', Formula.parse('@paladin>=3'), MercyOptions)
      ])),
  Decision.option('barbarian', async () => new Outcome(
      [ Effect.addNumber('barbarian', 1) ],
      [
          Decision.select('ragepower_1', Formula.parse('@barbarian>=1'), RagePowerOptions),
          Decision.select('ragepower_2', Formula.parse('@barbarian>=2'), RagePowerOptions),
          Decision.select('ragepower_3', Formula.parse('@barbarian>=3'), RagePowerOptions)
      ]))
]);

const Decisions = [
  Decision.select('class_1', Formula.parse('@character_level>=1'), ClassOptions),
  Decision.select('class_2', Formula.parse('@character_level>=2'), ClassOptions),
  Decision.select('class_3', Formula.parse('@character_level>=3'), ClassOptions)
];

test('level 3', async () => {
  const tree = new DecisionTree(Decisions);

  const resolved = await tree.resolve({
    'class_1': 'barbarian',
    'class_2': 'paladin',
    'class_3': 'barbarian',
  });

  const state = DataContext.of({
    'character_level': 3
  });
  resolved.applyTo(state);

  expect(state.get('barbarian')?.asNumber()).toBe(2);
  expect(state.get('paladin')?.asNumber()).toBe(1);

  // expect(resolved.decisions(state).length).toBe(1);
});

test('level 2', async () => {
  const tree = new DecisionTree(Decisions);

  const resolved = await tree.resolve({
    'class_1': 'barbarian',
    'class_2': 'paladin',
    'class_3': 'barbarian',
  });

  const state = DataContext.of({
    'character_level': 2
  });
  resolved.applyTo(state);

  expect(state.get('barbarian')?.asNumber()).toBe(1);
  expect(state.get('paladin')?.asNumber()).toBe(1);

  console.log(resolved.decisions(state));
});

test('level 1', async () => {
  const tree = new DecisionTree(Decisions);

  const resolved = await tree.resolve({
    'class_1': 'barbarian',
    'class_2': 'paladin',
    'class_3': 'barbarian',
  });

  const state = DataContext.of({
    'character_level': 1
  });
  resolved.applyTo(state);

  expect(state.get('barbarian')?.asNumber()).toBe(1);
  expect(state.get('paladin')?.asNumber()).toBe(0);
});
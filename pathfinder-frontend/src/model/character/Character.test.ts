import {Character} from "./Character";
import {Race} from "./Race";
import CharacterChoice from "./choices/CharacterChoice";

test('make selection sets value', () => {
  let character = new Character('1');
  character = character.select(CharacterChoice.CHARACTER_NAME, 'Stronk');
  expect(character.atLevel(0).get(CharacterChoice.CHARACTER_NAME)?.asText()).toEqual('Stronk');
})

test('selecting "human" as race gives option for ability score increase', () => {
  let character = new Character('1');
  character = character
    .select(CharacterChoice.CHARACTER_NAME, 'Stronk')
    .select(CharacterChoice.RACE, Race.HUMAN);
  expect(character.atLevel(0).has(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)).toEqual(true);
})

test('changing race from "human" to "dwarf" removes ASI', () => {
  let character = new Character('1');
  character = character
  .select(CharacterChoice.CHARACTER_NAME, 'Stronk')
  .select(CharacterChoice.RACE, Race.HUMAN)
  .select(CharacterChoice.RACE, Race.DWARF);
  expect(character.atLevel(0).get(CharacterChoice.RACE)?.asText()).toEqual(Race.DWARF);
  expect(character.atLevel(0).has(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)).toEqual(false);
})

test('changing race from "dwarf" to "human" adds ASI', () => {
  let character = new Character('1');
  character = character
  .select(CharacterChoice.CHARACTER_NAME, 'Stronk')
  .select(CharacterChoice.RACE, Race.HUMAN)
  .select(CharacterChoice.RACE, Race.DWARF)
  .select(CharacterChoice.RACE, Race.HUMAN);
  expect(character.atLevel(0).get(CharacterChoice.RACE)?.asText()).toEqual(Race.HUMAN);
  expect(character.atLevel(0).has(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)).toEqual(true);
})


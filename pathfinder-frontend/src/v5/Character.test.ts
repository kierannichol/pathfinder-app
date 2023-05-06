import DataHubV4 from "../v4/DataHubV4";
import Character from "./Character";

test('simple character', () => {
  const db = new DataHubV4();
  const selections = {};

  const character = new Character('1', db, selections);
  expect(character.id).toEqual('1');
})

test('chose character name', () => {
  const db = new DataHubV4();
  const selections = { 'character_name': 'Stronk' };

  const character = new Character('1', db, selections);
  expect(character.atLevel(1).resolve('character_name')?.asText()).toEqual('Stronk');
})
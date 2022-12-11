import Character from "./Character";
import {InitialChoices, InitialState} from "./CharacterRepository";
import Choice from "./Choice";
import DataHub from "./DataHub";
import Effect from "./Effect";
import {Modification} from "./Modification";
import ModificationDatabase from "./ModificationDatabase";
import Reference from "./Reference";

const classDetails: {[id:string]: Modification} = {
  "class:paladin": new Modification('class:paladin', "Paladin", "Paladin class", [
      Effect.setState(0, "class:paladin", 1),
      Effect.setState(1, "bab", 1),
      Effect.setState(2, "bab", 2),
  ]),
  "class:rogue": new Modification('class:rogue', "Rogue", "Rogue class", [
      Effect.setState(0, "class:rogue", 1),
      Effect.setState(1, "bab", 1),
      Effect.setState(2, "bab", 1),
      Choice.selectChoice("rogue_talent:2", "Rogue Talent", 2, [ new Reference('rogue_talent') ]),
  ]),
}

const raceDetails: {[id:string]: Modification} = {
  "race:human": new Modification('race:human', "Human", "Human race", [
      Effect.setState(0, "race:human", 1),
      Choice.selectChoice('race_asi', "Ability Score Increase", 0, [ new Reference('asi') ])
  ]),
  "race:gnome": new Modification('race:gnome', "Gnome", "Gnome race", [
      Effect.setState(0, "race:gnome", 1),
      Effect.adjustState(0, "str:race", -2),
      Effect.adjustState(0, "dex:race", 2),
  ]),
}

const asiDetails: {[id:string]: Modification} = {
  "asi:str": new Modification("asi:str", "Strength", "", [Effect.adjustState(0, "str:asi", 2)]),
  "asi:dex": new Modification("asi:dex", "Dexterity", "", [Effect.adjustState(0, "dex:asi", 2)]),
}

const rogueTalentDetails: {[id:string]: Modification} = {
  "rogue_talent:acrobatic_assist": new Modification("rogue_talent:acrobatic_assist", "Acrobatic Assist (Ex)", "", [Effect.adjustState(0, "rogue_talent:acrobatic_assist", 1)]),
  "rogue_talent:finesse_rogue": new Modification("rogue_talent:finesse_rogue", "Finesse Rogue", "", [Effect.adjustState(0, "rogue_talent:finesse_rogue", 1)]),
}

const classDb = new ModificationDatabase("class", Object.values(classDetails), async id => classDetails[id]);
const raceDb = new ModificationDatabase("race", Object.values(raceDetails), async id => raceDetails[id]);
const asiDb = new ModificationDatabase("asi", Object.values(asiDetails), async id => asiDetails[id]);
const rogueTalentDb = new ModificationDatabase("rogue_talent", Object.values(rogueTalentDetails), async id => rogueTalentDetails[id]);
const database = new DataHub([ classDb, raceDb, asiDb, rogueTalentDb ]);

// const initialState: CharacterState = {
//   "str:base": 10,
//   "dex:base": 10,
//   "str_score": "{sum(@str:*)}",
//   "dex_score": "{sum(@dex:*)}",
// }
//
const newCharacter = new Character("1", InitialState, InitialChoices, database);

test("select name", async () => {
  const characterAtLevel = (await newCharacter.select('name', 'Stronk')).atLevel(1);
  expect(characterAtLevel.get('character_name').asText()).toEqual('Stronk');
});

test("select class:paladin", async () => {
  const character = await newCharacter.select("class_1", "class:paladin");
  expect(character.atLevel(1).get('class:paladin').asNumber()).toEqual(1);
  expect(character.atLevel(1).get('bab').asNumber()).toEqual(1);
  expect(character.atLevel(2).get('bab').asNumber()).toEqual(2);
})

test("select class:rogue", async () => {
  const character = await newCharacter.select("class_1", "class:rogue");
  expect(character.atLevel(1).get('class:rogue').asNumber()).toEqual(1);
  expect(character.atLevel(1).get('bab').asNumber()).toEqual(1);
  expect(character.atLevel(2).get('bab').asNumber()).toEqual(1);
})

test("select rogue talent", async () => {
  let character = await newCharacter.select("class_1", "class:rogue");
  character = await character.select("rogue_talent:2", "rogue_talent:finesse_rogue");
  expect(character.atLevel(1).get('rogue_talent:finesse_rogue').asNumber()).toEqual(0);
  expect(character.atLevel(2).get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
  expect(character.atLevel(3).get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
})

test("select race:human", async () => {
  let character = await newCharacter.select("race", "race:human");
  character = await character.select("race_asi", "asi:str")
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:human').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(12);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(10);
})

test("select race:gnome", async () => {
  const character = await newCharacter.select("race", "race:gnome");
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:gnome').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(8);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(12);
})

test("change race from human to gnome removes ASI choice", async () => {
  let character = await newCharacter.select("race", "race:human");
  character = await character.select("race_asi", "asi:str");
  character = await character.select("race", "race:gnome");
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:human').asNumber()).toEqual(0);
  expect(characterAtLevel1.get('race:gnome').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(8);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(12);
})

test("unpack character", async () => {
  const packed = {
    "name": "Stronk",
    "race": "race:human",
    "class_1": "class:rogue",
    "race_asi": "asi:dex",
    "rogue_talent:2": "rogue_talent:finesse_rogue"
  };
  const character = await newCharacter.unpack(packed);

  let characterAtLevel2 = character.atLevel(2);
  expect(characterAtLevel2.get('race:human').asNumber()).toEqual(1);
  expect(characterAtLevel2.get('str_score').asNumber()).toEqual(10);
  expect(characterAtLevel2.get('dex_score').asNumber()).toEqual(12);
  expect(characterAtLevel2.get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
});

test("pack character", async () => {
  let character = await newCharacter.select("name", "Stronk");
  character = await character.select("race", "race:human");
  character = await character.select("class_1", "class:rogue");
  character = await character.select("race_asi", "asi:dex");
  character = await character.select("rogue_talent:2", "rogue_talent:finesse_rogue");

  const actual = character.pack();
  const expected = {
    "id": "1",
    "choices": {
      "name": "Stronk",
      "race": "race:human",
      "class_1": "class:rogue",
      "race_asi": "asi:dex",
      "rogue_talent:2": "rogue_talent:finesse_rogue"
    }
  };

  expect(actual).toEqual(expected);
})
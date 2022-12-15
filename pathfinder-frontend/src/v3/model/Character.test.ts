import Character from "./Character";
import {InitialChoices, InitialState} from "./CharacterInitialState";
import Choice from "./Choice";
import DataHub from "./DataHub";
import Effect from "./Effect";
import {Modification} from "./Modification";
import ModificationDatabase from "./ModificationDatabase";
import Reference from "./Reference";

const classDetails: {[id:string]: Modification} = {
  "class:paladin": new Modification('class:paladin', "Paladin", 0, "",[], "Paladin class", "", "", "", "", [
      Effect.setState(0, "class:paladin", 1),
      Effect.setState(1, "bab", 1),
      Effect.setState(2, "bab", 2),
  ]),
  "class:rogue": new Modification('class:rogue', "Rogue", 0, "",[], "Rogue class", "", "", "", "", [
      Effect.setState(0, "class:rogue", 1),
      Effect.setState(1, "bab", 1),
      Effect.setState(2, "bab", 1),
      Choice.selectChoice("level2:rogue_talent", "Rogue Talent", 2, "class",[ new Reference('rogue_talent') ]),
  ]),
}

const raceDetails: {[id:string]: Modification} = {
  "race:human": new Modification('race:human', "Human", 0, "",[], "Human race", "", "", "", "", [
      Effect.setState(0, "race:human", 1),
      Choice.selectChoice('level0:race_asi', "Ability Score Increase", 0, "asi",[ new Reference('ability_score') ])
  ]),
  "race:gnome": new Modification('race:gnome', "Gnome", 0, "",[], "Gnome race", "", "", "", "", [
      Effect.setState(0, "race:gnome", 1),
      Effect.adjustState(0, "str:race", -2),
      Effect.adjustState(0, "dex:race", 2),
  ]),
}

const asiDetails: {[id:string]: Modification} = {
  "str": new Modification("str", "Strength", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "str:bonus", 2)]),
  "dex": new Modification("dex", "Dexterity", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "dex:bonus", 2)]),
}

const rogueTalentDetails: {[id:string]: Modification} = {
  "rogue_talent:acrobatic_assist": new Modification("rogue_talent:acrobatic_assist", "Acrobatic Assist (Ex)", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "rogue_talent:acrobatic_assist", 1)]),
  "rogue_talent:finesse_rogue": new Modification("rogue_talent:finesse_rogue", "Finesse Rogue", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "rogue_talent:finesse_rogue", 1)]),
}

const classDb = new ModificationDatabase("class", Object.values(classDetails), [], async id => classDetails[id]);
const raceDb = new ModificationDatabase("race", Object.values(raceDetails), [], async id => raceDetails[id]);
const asiDb = new ModificationDatabase("ability_score", Object.values(asiDetails), [], async id => asiDetails[id]);
const rogueTalentDb = new ModificationDatabase("rogue_talent", Object.values(rogueTalentDetails), [], async id => rogueTalentDetails[id]);
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
  const characterAtLevel = (await newCharacter.select('level0:character_name', 'Stronk')).atLevel(1);
  expect(characterAtLevel.get('character_name').asText()).toEqual('Stronk');
});

test("select class:paladin", async () => {
  const character = await newCharacter.select("level0:class_1", "class:paladin");
  expect(character.atLevel(1).get('class:paladin').asNumber()).toEqual(1);
  expect(character.atLevel(1).get('bab').asNumber()).toEqual(1);
  expect(character.atLevel(2).get('bab').asNumber()).toEqual(2);
})

test("select class:rogue", async () => {
  const character = await newCharacter.select("level0:class_1", "class:rogue");
  expect(character.atLevel(1).get('class:rogue').asNumber()).toEqual(1);
  expect(character.atLevel(1).get('bab').asNumber()).toEqual(1);
  expect(character.atLevel(2).get('bab').asNumber()).toEqual(1);
})

test("select rogue talent", async () => {
  let character = await newCharacter.select("level0:class_1", "class:rogue");
  character = await character.select("level2:rogue_talent", "rogue_talent:finesse_rogue");
  expect(character.atLevel(1).get('rogue_talent:finesse_rogue').asNumber()).toEqual(0);
  expect(character.atLevel(2).get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
  expect(character.atLevel(3).get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
})

test("select race:human", async () => {
  let character = await newCharacter.select("level0:race", "race:human");
  character = await character.select("level0:race_asi", "str")
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:human').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(12);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(10);
})

test("select race:gnome", async () => {
  const character = await newCharacter.select("level0:race", "race:gnome");
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:gnome').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(8);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(12);
})

test("change race from human to gnome removes ASI choice", async () => {
  let character = await newCharacter.select("level0:race", "race:human");
  character = await character.select("level0:race_asi", "asi:str");
  character = await character.select("level0:race", "race:gnome");
  let characterAtLevel1 = character.atLevel(1);
  expect(characterAtLevel1.get('race:human').asNumber()).toEqual(0);
  expect(characterAtLevel1.get('race:gnome').asNumber()).toEqual(1);
  expect(characterAtLevel1.get('str_score').asNumber()).toEqual(8);
  expect(characterAtLevel1.get('dex_score').asNumber()).toEqual(12);
})

test("unpack character", async () => {
  const packed = {
    "level0:character_name": "Stronk",
    "level0:race": "race:human",
    "level0:class_1": "class:rogue",
    "level0:race_asi": "dex",
    "level2:rogue_talent": "rogue_talent:finesse_rogue"
  };
  const character = await newCharacter.unpack(packed);

  let characterAtLevel2 = character.atLevel(2);
  expect(characterAtLevel2.get('race:human').asNumber()).toEqual(1);
  expect(characterAtLevel2.get('str_score').asNumber()).toEqual(10);
  expect(characterAtLevel2.get('dex_score').asNumber()).toEqual(12);
  expect(characterAtLevel2.get('rogue_talent:finesse_rogue').asNumber()).toEqual(1);
});

test("pack character", async () => {
  let character = await newCharacter.select("level0:character_name", "Stronk");
  character = await character.select("level0:race", "race:human");
  character = await character.select("level0:class_1", "class:rogue");
  character = await character.select("level0:race_asi", "dex");
  character = await character.select("level2:rogue_talent", "rogue_talent:finesse_rogue");

  const actual = character.pack();
  const expected = {
    "id": "1",
    "choices": {
      "level0:character_name": "Stronk",
      "level0:race": "race:human",
      "level0:class_1": "class:rogue",
      "level0:race_asi": "dex",
      "level2:rogue_talent": "rogue_talent:finesse_rogue"
    }
  };

  expect(actual).toEqual(expected);
})
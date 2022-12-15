import Choice from "./Choice";
import DataHub from "./DataHub";
import Effect from "./Effect";
import {Modification} from "./Modification";
import ModificationDatabase from "./ModificationDatabase";
import Reference from "./Reference";

type Details = {[id:string]: Modification};

const classDetails: Details = {
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
  "class:sorcerer": new Modification('class:sorcerer', "Sorcerer", 0, "",[], "Sorcerer class", "", "", "", "", [
    Effect.setState(0, "class:sorcerer", 1),
    Effect.setState(1, "bab", 0),
    Effect.setState(2, "bab", 0),
    Effect.setState(2, "ability:bloodline_feat", 1),
    Choice.selectChoice("level1:bloodline", "Bloodline", 2, "bloodline",[ new Reference('bloodline') ]),
  ]),
}

const raceDetails: Details = {
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

const asiDetails: Details = {
  "str": new Modification("str", "Strength", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "str:bonus", 2)]),
  "dex": new Modification("dex", "Dexterity", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "dex:bonus", 2)]),
}

const featDetails: Details = {
  "feat:acrobatic": new Modification("feat:acrobatic", "Acrobatic", 0, "", [], "", "", "", "", "", [Effect.adjustState(1, "feat:acrobatic", 1)]),
  "feat:combat_casting": new Modification("feat:combat_casting", "Combat Casting", 0, "", [], "", "", "", "", "", [Effect.adjustState(1, "feat:combat_casting", 1)]),
  "feat:iron_will": new Modification("feat:iron_will", "Iron Will", 0, "", [], "", "", "", "", "", [Effect.adjustState(1, "feat:iron_will", 1)]),
}

const rogueTalentDetails: Details = {
  "rogue_talent:acrobatic_assist": new Modification("rogue_talent:acrobatic_assist", "Acrobatic Assist (Ex)", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "rogue_talent:acrobatic_assist", 1)]),
  "rogue_talent:finesse_rogue": new Modification("rogue_talent:finesse_rogue", "Finesse Rogue", 0, "",[], "", "", "", "", "", [Effect.adjustState(0, "rogue_talent:finesse_rogue", 1)]),
}

const bloodlineDetails: Details = {
  "bloodline:arcane": new Modification("bloodline:arcane", "Arcane Bloodline", 0, "", [], "", "", "", "", "", [
      Effect.addChoicesToType(1, "bloodline_feat", [
          new Reference("feat", "feat:combat_casting"),
          new Reference("feat", "feat:iron_will")
      ])
  ])
}

const classDb = new ModificationDatabase("class", Object.values(classDetails), [], async id => classDetails[id]);
const raceDb = new ModificationDatabase("race", Object.values(raceDetails), [], async id => raceDetails[id]);
const asiDb = new ModificationDatabase("ability_score", Object.values(asiDetails), [], async id => asiDetails[id]);
const featDb = new ModificationDatabase("feat", Object.values(featDetails), [], async id => featDetails[id]);
const rogueTalentDb = new ModificationDatabase("rogue_talent", Object.values(rogueTalentDetails), [], async id => rogueTalentDetails[id]);
const bloodlineDb = new ModificationDatabase("bloodline", Object.values(bloodlineDetails), [], async id => bloodlineDetails[id]);

export const TestDataHub = new DataHub([ classDb, raceDb, asiDb, featDb, rogueTalentDb, bloodlineDb ]);
export const TestChoices = {
  Name: "level0:character_name",
  Class: "level0:class_1",

  Sorcerer: {
    Bloodline: "level1:bloodline",
    BloodlineFeat: "level2:bloodline_feat",
  }
}

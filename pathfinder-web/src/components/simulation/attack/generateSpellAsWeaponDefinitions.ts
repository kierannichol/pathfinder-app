import Database from "@/data/Database.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {WeaponDefinition} from "@/components/simulation/attack/WeaponDefinition.ts";

export async function generateSpellAsWeaponDefinitions(database: Database, characterAtLevel: CharacterAtLevel): Promise<WeaponDefinition[]> {
  const spells = await Promise.all(characterAtLevel.choicesOfType('spell')
  .flatMap(choice => characterAtLevel.selected(choice) as string[])
  .map(spellId => database.load(spellId)));

  return spells
  .filter(spell => spell !== undefined)
  .filter(spell => (spell.attacks ?? []).length > 0)
  .map(spell => {
    return WeaponDefinition.create({
      uid: spell.key,
      key: spell.key,
      name: spell.name,
      critRange: 20,
      critMultiplier: 1,
      isLight: false,
      attacks: spell.attacks,
      attackMods: [],
      requiresTwoHands: false
    });
  });
}
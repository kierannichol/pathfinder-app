import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {WeaponDefinition} from "@/components/simulation/attack/WeaponDefinition.ts";

export function generateFeaturesAsWeaponDefinitions(characterAtLevel: CharacterAtLevel): WeaponDefinition[] {
  return characterAtLevel.features
  .filter(feature => (feature.attacks ?? []).length > 0)
  .map(feature => {
    return WeaponDefinition.create({
      uid: feature.key,
      key: feature.key,
      name: feature.name,
      critRange: 0,
      critMultiplier: 1,
      isLight: false,
      attacks: feature.attacks,
      attackMods: [],
      requiresTwoHands: false
    });
  });
}
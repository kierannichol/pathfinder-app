import {CharacterAtLevel} from "./CharacterAtLevel";

export class WeaponType {

  public constructor(public readonly id: string,
                     public readonly name: string,
                     public readonly proficiency: Weapon.Proficiency,
                     public readonly range: Weapon.Range) {
  }

  public isValidFor(characterAtLevel: CharacterAtLevel): boolean {
    switch (this.proficiency) {
      case Weapon.Proficiency.Simple:
        return characterAtLevel.has("feat:simple_weapon_proficiency")
            || characterAtLevel.has("proficiency:" + this.id);
      case Weapon.Proficiency.Martial:
        return characterAtLevel.has("feat:martial_weapon_proficiency")
            || characterAtLevel.has("proficiency:" + this.id);
      case Weapon.Proficiency.Exotic:
        return characterAtLevel.has("feat:exotic_weapon_proficiency#" + this.id)
            || characterAtLevel.has("proficiency:" + this.id);
    }
    return false;
  }
}

export namespace Weapon {

  export enum Proficiency {
    Other,
    Simple,
    Martial,
    Exotic
  }

  export enum Range {
    None,
    Melee,
    Reach,
    Ranged
  }
}
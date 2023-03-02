import CharacterAtLevel from "../../core/CharacterAtLevel";

export class WeaponType {
  public readonly name: string;
  public readonly id: string;

  public constructor(name: string,
                     public readonly proficiency: Weapon.Proficiency,
                     public readonly range: Weapon.Range) {
    this.name = this.fixName(name)
        .replace(/(\b[a-z](?!\s))/g, x => x.toUpperCase());

    this.id = this.name.toLowerCase()
        .replace("'", "")
        .replaceAll(/[^a-zA-Z0-9]+/g, "_");
  }

  private fixName(name: string): string {
    const parts = name.split(", ");
    if (parts.length == 1) {
      return parts[0];
    }
    return `${parts[1]} ${[parts[0]]}`;
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
import {Formula} from "../../logic/Formula";
import {Attribute} from "./Attribute";
import {CharacterAtLevel} from "./CharacterAtLevel";

export class AbilitySummary implements Attribute {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type,
              public readonly prerequisites_formula: string) {
  }

  public displayName(): string {
    return this.name;
  }

  public isValidFor(characterAtLevel: CharacterAtLevel): boolean {
    if (this.prerequisites_formula === '') {
      return true;
    }
    const requirement = Formula.parse(this.prerequisites_formula);
    try {
      return requirement.resolve(characterAtLevel)?.asBoolean() ?? false;
    } catch (e) {
      const error = e as Error;
      console.error(`Error resolving ${this.prerequisites_formula}: ` + error.message);
      return false;
    }
  }
}

export class Ability extends AbilitySummary {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type,
              public readonly prerequisites_formula: string,
              public readonly description: string) {
    super(id, name, type, prerequisites_formula);
  }
}

export namespace Ability {

  export enum Type {
    None,
    Ex,
    Su,
    Sp
  }
}
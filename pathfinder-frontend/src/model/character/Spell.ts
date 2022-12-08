import {Formula} from "../../logic/Formula";
import {Ability} from "./Ability";
import {Attribute} from "./Attribute";
import {CharacterAtLevel} from "./CharacterAtLevel";

export class SpellSummary implements Attribute {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type,
              public readonly prerequisites_formula: string) {
  }

  public displayName(): string {
    return this.name;
  }

  public isValidFor(characterAtLevel: CharacterAtLevel): boolean {
    if (this.prerequisites_formula.trim() === '') {
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

export class Spell extends SpellSummary {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly type: Ability.Type,
              public readonly prerequisites_formula: string,
              public readonly description: string,
              public readonly effect: string) {
    super(id, name, type, prerequisites_formula);
  }
}
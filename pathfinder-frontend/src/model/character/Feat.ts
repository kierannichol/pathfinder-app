import {Formula} from "../../logic/Formula";
import Resolvable from "../../logic/Resolvable";
import {Attribute} from "./Attribute";
import {CharacterAtLevel} from "./CharacterAtLevel";

export class FeatSummary implements Attribute {

  public constructor(public readonly id: string,
                     public readonly name: string,
                     public readonly types: Feat.Type[],
                     protected readonly prerequisitesFormula: Resolvable,
                     public readonly prerequisitesFormulaText: string,
                     public readonly options: Feat.Option[]) {
  }

  public isValidFor(characterAtLevel: CharacterAtLevel): boolean {
    if (!(this.prerequisitesFormula.resolve(characterAtLevel)?.asBoolean() ?? false)) {
      return false;
    }
    for (const option of this.options) {
      if (option.isValidFor(characterAtLevel)) {
        return true;
      }
    }
    return true;
  }

  public hasOptions(): boolean {
    return this.options.length > 0;
  }

  displayName(): string {
    let displayNameText = this.name;
    if (this.id.indexOf('#') >= 0) {
      const selectedOption = this.options.find(o => o.id === this.id);
      if (selectedOption !== undefined) {
        displayNameText += `: ${selectedOption.name}`;
      }
    }
    const typesText = this.types.map(formatFeatType).join(', ');
    displayNameText += ` (${typesText})`;
    return displayNameText;
  }
}

function formatFeatType(type: Feat.Type): string {
  switch (type) {
    case Feat.Type.Combat: return 'Combat';
    case Feat.Type.General: return 'General';
    case Feat.Type.Achievement: return 'Achievement';
    case Feat.Type.Faction: return 'Faction';
    case Feat.Type.Bloodhex: return 'Blood Hex';
    case Feat.Type.Critical: return 'Critical';
    case Feat.Type.Metamagic: return 'Metamagic';
    case Feat.Type.Monster: return 'Monster';
    case Feat.Type.Mythic: return 'Mythic';
    case Feat.Type.Grit: return 'Grit';
    case Feat.Type.Panache: return 'Panache';
    case Feat.Type.Teamwork: return 'Teamwork';
    case Feat.Type.ItemCreation: return 'Item Creation';
    default: return '?';
  }
}

export class Feat extends FeatSummary {

  public constructor(public readonly id: string,
                      public readonly name: string,
                      public readonly types: Feat.Type[],
                      public readonly description: string,
                      public readonly prerequisites: string,
                      public readonly benefit: string,
                      public readonly normal: string,
                      public readonly special: string,
                      public readonly note: string,
                      protected readonly prerequisitesFormula: Resolvable,
                      public readonly prerequisitesFormulaText: string,
                      public readonly options: Feat.Option[]) {
    super(id, name, types, prerequisitesFormula, prerequisitesFormulaText, options);
  }
}

export namespace Feat {
  export enum Type {
    None = -1,
    General = 0,
    Combat,
    Critical,
    ItemCreation,
    Metamagic,
    Achievement,
    Bloodhex,
    Faction,
    Grit,
    Panache,
    Mythic,
    Teamwork,
    Monster,
  }

  export class Option {
    protected readonly prerequisitesFormula: Resolvable

    public constructor(public readonly id: string, public readonly name: string, public readonly prerequisitesFormulaText: string) {
      this.prerequisitesFormula = prerequisitesFormulaText === ''
          ? Resolvable.just(true)
          : Formula.parse(prerequisitesFormulaText);
    }

    public isValidFor(characterAtLevel: CharacterAtLevel): boolean {
      return this.prerequisitesFormula.resolve(characterAtLevel)?.asBoolean() ?? false;
    }
  }
}
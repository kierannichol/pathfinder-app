import {Ability, AbilitySummary} from "./Ability";
import Type = Ability.Type;

export class FeatSummary extends AbilitySummary {

  public constructor(public readonly id: string,
                     public readonly name: string,
                     public readonly types: Feat.Type[],
                     public readonly prerequisites_formula: string,
                     public readonly options: Feat.Option[]) {
    super(id, name, Type.None, prerequisites_formula);
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
                      public readonly prerequisites_formula: string,
                      public readonly options: Feat.Option[]) {
    super(id, name, types, prerequisites_formula, options);
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

    public constructor(public readonly id: string, public readonly name: string, public readonly prerequisites_formula: string) {
    }

    public toFeatSummary(parent: FeatSummary): FeatSummary {
      const prerequisitesFormulaText = [ parent.prerequisites_formula,
        this.prerequisites_formula,
        `!@${this.id}` ]
        .filter(x => x !== '')
        .join(" AND ");

      return new FeatSummary(this.id,
          parent.name + ': ' + this.name,
          parent.types,
          prerequisitesFormulaText,
          []);
    }

    public toFeat(parent: Feat): Feat {
      const prerequisitesFormulaText = [ parent.prerequisites_formula,
        this.prerequisites_formula,
        `!@${this.id}` ]
      .filter(x => x !== '')
      .join(" AND ");

      return new Feat(this.id,
          parent.name + ': ' + this.name,
          parent.types,
          parent.description,
          parent.prerequisites,
          parent.benefit,
          parent.normal,
          parent.special,
          parent.note,
          prerequisitesFormulaText,
          []);
    }
  }
}
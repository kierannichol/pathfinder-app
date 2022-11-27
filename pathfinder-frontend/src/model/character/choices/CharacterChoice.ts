abstract class CharacterChoice {
  static readonly CHARACTER_NAME = 'level0:character_name';
  static readonly CHARACTER_ALIGNMENT = 'level0:alignment';
  static readonly RACE = 'level0:race';
  static readonly CLASS_1 = 'level0:class_1';
  static readonly RACE_ABILITY_SCORE_INCREASE = 'level0:race_asi';

  abstract get type(): ChoiceType;

  abstract get key(): string;

  abstract get current(): string;

  abstract get dependsOn(): string | undefined;

  get label(): string {
    switch (this.type) {
      case ChoiceType.ABILITY_SCORE: return "Ability Score";
      case ChoiceType.CHARACTER_RACE: return "Race";
      case ChoiceType.CHARACTER_NAME: return "Character Name";
      case ChoiceType.CHARACTER_CLASS: return "Class";
      case ChoiceType.RACE_ABILITY_SCORE: return "Race Ability Score";
      case ChoiceType.MERCY: return "Mercy";
      case ChoiceType.RAGE_POWER: return "Rage Power";
      case ChoiceType.FEAT: return "Feat";
      case ChoiceType.ROGUE_TALENT: return "Rogue Talent";
      case ChoiceType.ALIGNMENT: return "Alignment";
      default: return `#!${this.type}#`.toUpperCase();
    }
  }
}

export enum ChoiceType {
  ALIGNMENT = 'alignment',
  CHARACTER_NAME = 'character_name',
  CHARACTER_RACE = 'character_race',
  CHARACTER_CLASS = 'character_class',
  ABILITY_SCORE = 'ability_score',
  RACE_ABILITY_SCORE = 'race_asi',
  FEAT = 'feat',
  RAGE_POWER = 'rage_power',
  ROGUE_TALENT = 'rogue_talent',
  MERCY = 'mercy',
  SKILL_POINT = 'skill_point',
}

export default CharacterChoice;
export enum ChoiceType {
  ALIGNMENT = 'alignment',
  CHARACTER_NAME = 'character_name',
  CHARACTER_RACE = 'character_race',
  CHARACTER_CLASS = 'character_class',
  ABILITY_SCORE = 'ability_score',
  RACE_ABILITY_SCORE = 'race_asi',
  EFFECT_ABILITY_SCORE = 'effect_asi',
  FEAT = 'feat',
  ABILITY = 'ability',
  RAGE_POWER = 'rage_power',
  ROGUE_TALENT = 'rogue_talent',
  MAGUS_ARCANA = 'magus_arcana',
  ALCHEMIST_DISCOVERY = 'alchemist_discovery',
  WITCH_HEX = 'witch_hex',
  BARDIC_MASTERPIECE = 'masterpiece',
  SORCERER_BLOODLINE = 'bloodline',
  BLOODLINE_POWER = 'bloodline_power',
  BLOODLINE_SPELL = 'bloodline_spell',
  BLOODLINE_FEAT = 'bloodline_feat',
  MERCY = 'mercy',
  SKILL_POINT = 'skill_point',
  MODIFIER = 'modifier',
}

export enum ChoiceTag {
  BONUS,
}

export default abstract class CharacterChoice {
  static readonly CHARACTER_NAME = 'level0:character_name';
  static readonly CHARACTER_ALIGNMENT = 'level0:alignment';
  static readonly RACE = 'level0:race';
  static readonly CLASS_1 = 'level0:class_1';
  static readonly RACE_ABILITY_SCORE_INCREASE = 'level0:race_asi';

  abstract get type(): ChoiceType;

  abstract get key(): string;

  abstract get current(): string;

  abstract get dependsOn(): string | undefined;

  public readonly tags: ChoiceTag[] = [];

  abstract get label(): string;

  abstract withDependsOn(dependsOn: string | undefined): CharacterChoice;
}
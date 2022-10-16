import Trait from "../Trait";
import TextLookup from "../../TextLookup";

abstract class CharacterChoice<T = string> {
  static readonly CHARACTER_NAME = 'level0:character_name';
  static readonly RACE = 'level0:race';
  static readonly CLASS_1 = 'level0:class_1';
  static readonly RACE_ABILITY_SCORE_INCREASE = 'level0:race_asi';

  abstract select(value: T): CharacterChoice<any>[];

  abstract get type(): ChoiceType;

  abstract get key(): string;

  abstract get current(): T;

  abstract get dependsOn(): string | undefined;

  abstract traits(): Trait[];

  get label(): string {
    return TextLookup.get(this.key.split(':')[1] + "_LABEL");
  }
}

export enum ChoiceType {
  TEXT,
  NUMBER,
  ABILITY_SCORE,
  CLASS,
  RACE,
  FEAT,
  RAGE_POWER,
  ROGUE_TALENT,
  MERCY,
}

export default CharacterChoice;
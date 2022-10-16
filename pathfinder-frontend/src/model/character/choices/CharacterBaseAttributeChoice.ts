import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ValidationError from "../ValidationError";
import Trait from "../Trait";
import BaseAttributeTrait from "../traits/BaseAttributeTrait";

export default class CharacterBaseAttributeChoice extends CharacterChoice {
  public readonly dependsOn = undefined;
  public readonly type = ChoiceType.ABILITY_SCORE;

  constructor(public readonly key: string, public readonly attribute: string, private readonly value: string = '10') {
    super();
  }

  get current(): string {
    return this.value;
  }

  select(value: string): CharacterChoice[] {
    this.validate(value);
    return [
      new CharacterBaseAttributeChoice(this.key, this.attribute, value)
    ];
  }

  traits(): Trait[] {
    return [ new BaseAttributeTrait(this.attribute, parseInt(this.current)) ];
  }

  private validate(value: string): void {
    const numericValue = parseInt(value);
    if (isNaN(numericValue)) {
      throw new ValidationError("Base score must be a number");
    }

    if (numericValue < 7) {
      throw new ValidationError("Base score cannot be lower than 7");
    }
    if (numericValue > 20) {
      throw new ValidationError("Base score cannot be higher than 20");
    }
  }
}
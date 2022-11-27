import Trait from "../Trait";
import BaseAttributeTrait from "../traits/BaseAttributeTrait";
import ValidationError from "../ValidationError";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class CharacterBaseAttributeChoice extends CharacterChoice {
  public readonly dependsOn = undefined;
  public readonly type = ChoiceType.ABILITY_SCORE;

  constructor(public readonly key: string, public readonly attribute: string, private readonly value: string = '10') {
    super();
  }

  get current(): string {
    return this.value;
  }
}

export class CharacterBaseAttributeChoiceProcessor implements ICharacterChoiceProcessor<CharacterBaseAttributeChoice> {
  public readonly supportedChoiceType = ChoiceType.ABILITY_SCORE;

  async select(choice: CharacterBaseAttributeChoice, value: string): Promise<CharacterChoice[]> {
    // this.validate(value);
    return [
      new CharacterBaseAttributeChoice(choice.key, choice.attribute, value)
    ];
  }

  async traits(choice: CharacterBaseAttributeChoice): Promise<Trait[]> {
    return [ new BaseAttributeTrait(choice.attribute, parseInt(choice.current)) ];
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
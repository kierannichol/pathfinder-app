import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class RagePowerChoice extends CharacterChoice {
  public readonly type = ChoiceType.RAGE_POWER;
  public readonly key;

  static of(level: number, dependsOn: string|undefined, current: string = ''): RagePowerChoice {
    return new RagePowerChoice(level, dependsOn, current);
  }

  public withValue(value: string): RagePowerChoice {
    return new RagePowerChoice(this.level, this.dependsOn, value);
  }

  private constructor(public readonly level: number, public dependsOn: string|undefined, public readonly current = '') {
    super();
    this.key = `level${level}:ragepower`;
  }
}

export class RagePowerChoiceProcessor implements ICharacterChoiceProcessor<RagePowerChoice> {
  public readonly supportedChoiceType = ChoiceType.RAGE_POWER;

  async traits(choice: RagePowerChoice): Promise<Trait[]> {
    return [ CustomTrait.of(choice.current, true, choice.level) ];
  }

  async select(choice: RagePowerChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ]
  }
}

export default RagePowerChoice;
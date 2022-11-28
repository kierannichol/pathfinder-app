import Trait from "../Trait";
import FeatTrait from "../traits/FeatTrait";
import CharacterChoice, {ChoiceTag, ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class FeatChoice extends CharacterChoice {
  public readonly type = ChoiceType.FEAT;

  public withValue(value: string): FeatChoice {
    return new FeatChoice(this.level, this.key, this.dependsOn, this.tags, value);
  }

  constructor(public readonly level: number, public readonly key: string, public readonly dependsOn: string|undefined, public readonly tags: ChoiceTag[] = [], public readonly current = '') {
    super();
  }
}

export class FeatChoiceProcessor implements ICharacterChoiceProcessor<FeatChoice> {
  public readonly supportedChoiceType = ChoiceType.FEAT;

  async select(choice: FeatChoice, value: string): Promise<CharacterChoice[]> {
    return [ choice.withValue(value) ];
  }

  async traits(choice: FeatChoice): Promise<Trait[]> {
    if (choice.current === '') {
      return [];
    }
    return [
      FeatTrait.of(choice.level, choice.current)
    ];
  }

}

export default FeatChoice;
import Trait from "../Trait";
import FeatTrait from "../traits/FeatTrait";
import CharacterChoice, {ChoiceTag, ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class FeatChoice extends CharacterChoice {
  public readonly type = ChoiceType.FEAT;
  public readonly label = "Feat";

  public withValue(value: string): FeatChoice {
    return this.copy({ current: value });
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return this.copy({ dependsOn: dependsOn });
  }

  constructor(public readonly level: number, public readonly key: string, public readonly dependsOn: string|undefined, public readonly tags: ChoiceTag[] = [], public readonly current = '') {
    super();
  }

  protected copy(overrides: Partial<FeatChoice>): FeatChoice {
    const clone = Object.create(this);
    Object.assign(clone, overrides);
    return clone;
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
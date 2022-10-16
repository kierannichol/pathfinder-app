import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import Trait from "../Trait";
import FeatTrait from "../traits/FeatTrait";

class FeatChoice extends CharacterChoice {
  public readonly type = ChoiceType.FEAT;

  constructor(private readonly level: number, public readonly key: string, public readonly dependsOn: string|undefined, public readonly current = '') {
    super();
  }

  select(value: string): CharacterChoice[] {
    return [
        new FeatChoice(this.level, this.key, this.dependsOn, value)
    ]
  }

  traits(): Trait[] {
    if (this.current === '') {
      return [];
    }
    return [
        new FeatTrait(this.level, this.current)
    ];
  }
}

export default FeatChoice;
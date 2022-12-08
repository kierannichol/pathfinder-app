import Trait from "../Trait";
import AdditiveTrait from "../traits/AdditiveTrail";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class EffectAbilityScoreIncreaseChoice extends CharacterChoice {
  public readonly type = ChoiceType.EFFECT_ABILITY_SCORE;
  public readonly label = "Ability Score";

  constructor(public readonly key: string, public readonly level: number, public readonly amount: number, public readonly dependsOn: string|undefined, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withValue(value: string): EffectAbilityScoreIncreaseChoice {
    return new EffectAbilityScoreIncreaseChoice(this.key, this.level, this.amount, this.dependsOn, value);
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new EffectAbilityScoreIncreaseChoice(this.key, this.level, this.amount, dependsOn, this.current);
  }
}

export class EffectAbilityScoreIncreaseChoiceProcessor implements ICharacterChoiceProcessor<EffectAbilityScoreIncreaseChoice> {
  public readonly supportedChoiceType = ChoiceType.EFFECT_ABILITY_SCORE;

  async select(choice: EffectAbilityScoreIncreaseChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: EffectAbilityScoreIncreaseChoice): Promise<Trait[]> {
    if (choice.current === '') {
      return [];
    }
    return [
      new AdditiveTrait(choice.current, choice.amount, choice.level)
    ]
  }
}

export default EffectAbilityScoreIncreaseChoice;
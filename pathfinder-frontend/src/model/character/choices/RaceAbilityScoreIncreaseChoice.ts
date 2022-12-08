import Trait from "../Trait";
import RacialAsiTrait from "../traits/RacialAsiTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class RaceAbilityScoreIncreaseChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE_ABILITY_SCORE_INCREASE;
  public readonly type = ChoiceType.RACE_ABILITY_SCORE;
  public readonly label = "Ability Score";

  constructor(public readonly dependsOn: string | undefined = CharacterChoice.RACE, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withValue(value: string): RaceAbilityScoreIncreaseChoice {
    return new RaceAbilityScoreIncreaseChoice(this.dependsOn, value);
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new RaceAbilityScoreIncreaseChoice(dependsOn, this.current);
  }
}

export class RaceAbilityScoreIncreaseChoiceProcessor implements ICharacterChoiceProcessor<RaceAbilityScoreIncreaseChoice> {
  public readonly supportedChoiceType = ChoiceType.RACE_ABILITY_SCORE;

  async select(choice: RaceAbilityScoreIncreaseChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: RaceAbilityScoreIncreaseChoice): Promise<Trait[]> {
    if (choice.current === '') {
      return [];
    }
    return [
      new RacialAsiTrait(choice.current, 2)
    ]
  }
}

export default RaceAbilityScoreIncreaseChoice;
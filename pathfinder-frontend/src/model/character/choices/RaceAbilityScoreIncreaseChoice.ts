import Trait from "../Trait";
import RacialAsiTrait from "../traits/RacialAsiTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

class RaceAbilityScoreIncreaseChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE_ABILITY_SCORE_INCREASE;
  public readonly type = ChoiceType.RACE_ABILITY_SCORE;
  public readonly dependsOn = CharacterChoice.RACE;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }
}

export class RaceAbilityScoreIncreaseChoiceProcessor implements ICharacterChoiceProcessor<RaceAbilityScoreIncreaseChoice> {
  public readonly supportedChoiceType = ChoiceType.RACE_ABILITY_SCORE;

  async select(choice: RaceAbilityScoreIncreaseChoice, value: string): Promise<CharacterChoice[]> {
    return [
      new RaceAbilityScoreIncreaseChoice(value)
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
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import {DataContextState} from "../../../logic/DataContext";
import Trait from "../Trait";
import RacialAsiTrait from "../traits/RacialAsiTrait";

class RaceAbilityScoreIncreaseChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE_ABILITY_SCORE_INCREASE;
  public readonly type = ChoiceType.ABILITY_SCORE;
  public readonly dependsOn = CharacterChoice.RACE;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  select(value: string): CharacterChoice[] {
    return [
        new RaceAbilityScoreIncreaseChoice(value)
    ];
  }

  traits(): Trait[] {
    if (this.current === '') {
      return [];
    }
    return [
        new RacialAsiTrait(this.current, 2)
    ]
  }
}

export default RaceAbilityScoreIncreaseChoice;
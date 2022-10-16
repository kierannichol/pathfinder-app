import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import {Race} from "../Race"
import RaceAbilityScoreIncreaseChoice from "./RaceAbilityScoreIncreaseChoice";
import Trait from "../Trait";
import RacialAsiTrait from "../traits/RacialAsiTrait";
import CustomTrait from "../traits/CustomTrait";
import FeatChoice from "./FeatChoice";

class CharacterRaceChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE;
  public readonly type = ChoiceType.RACE;
  public readonly dependsOn = undefined;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  select(value: string): CharacterChoice[] {
    const choices: CharacterChoice[] = [ new CharacterRaceChoice(value) ];
    switch (value) {
      case Race.HUMAN:
        choices.push(new RaceAbilityScoreIncreaseChoice());
        choices.push(new FeatChoice(1, "level1:human_bonus_feat", this.key))
        break;
    }
    return choices;
  }

  traits(): Trait[] {
    let traits: Trait[] = [];
    traits.push(CustomTrait.of('race', this.current));
    switch (this.current) {
      case Race.DWARF:
        traits.push(new RacialAsiTrait('str', 2));
        // state['str_race_asi'] = 2;
        break;
    }
    return traits;
  }
}

export default CharacterRaceChoice;
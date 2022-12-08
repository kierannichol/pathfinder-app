import CharacterState from "../../../database/CharacterState";
import {RaceDatabase} from "../../../database/v2/RaceDatabase";
import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import RacialAsiTrait from "../traits/RacialAsiTrait";
import CharacterChoice, {ChoiceTag, ChoiceType} from "./CharacterChoice";
import FeatChoice from "./FeatChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";
import RaceAbilityScoreIncreaseChoice from "./RaceAbilityScoreIncreaseChoice";

class CharacterRaceChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE;
  public readonly type = ChoiceType.CHARACTER_RACE;
  public readonly label = "Race";

  constructor(public readonly dependsOn: string | undefined = undefined, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withValue(value: string): CharacterRaceChoice {
    return new CharacterRaceChoice(this.dependsOn, value);
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new CharacterRaceChoice(dependsOn, this.current);
  }
}

export class CharacterRaceChoiceProcessor implements ICharacterChoiceProcessor<CharacterRaceChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_RACE;

  constructor(private readonly raceDatabase: RaceDatabase) {
  }

  async select(choice: CharacterRaceChoice, value: string): Promise<CharacterChoice[]> {
    const choices: CharacterChoice[] = [ choice.withValue(value) ];

    const race = this.raceDatabase.summary(value);
    if (race === undefined) {
      return choices;
    }

    for (let trait of race.traits) {
      switch (trait) {
        case 'modifier:asi_2':
          choices.push(new RaceAbilityScoreIncreaseChoice());
          break;
        case 'modifier:bonus_feat':
          choices.push(new FeatChoice(1, 'level1:race_bonus_feat', choice.key, [ ChoiceTag.BONUS ]));
          break;
      }
    }

    return choices;
  }

  private static readonly traitCodeMap: {[traitCode:string]: Trait} = {
    ...CharacterState.Abilities.reduce((state, ability) => ({
      ...state,
      [`modifier:${ability}_plus_2`]: new RacialAsiTrait(ability, 2),
      [`modifier:${ability}_minus_2`]: new RacialAsiTrait(ability, -2),
      ['modifier:low_light_vision']: CustomTrait.of('ability:low_light_vision', 30),
      ['modifier:darkvision']: CustomTrait.of('ability:darkvision', 30),
      ['modifier:darkvision_60']: CustomTrait.of('ability:darkvision', 60),
      ['modifier:darkvision_120']: CustomTrait.of('ability:darkvision', 120),
    }), {})
  };

  async traits(choice: CharacterRaceChoice): Promise<Trait[]> {
    let traits: Trait[] = [];

    const race = this.raceDatabase.summary(choice.current);
    if (race === undefined) {
      return [];
    }

    traits.push(CustomTrait.of('race', choice.current));
    traits.push(CustomTrait.of('size', race.size.id));
    traits.push(CustomTrait.of('size_mod', race.size.acModifier));
    traits.push(CustomTrait.of('ac:size', race.size.acModifier));
    traits.push(CustomTrait.of('speed:base', race.speed));

    for (let traitCode of race.traits) {
      let mappedTrait = CharacterRaceChoiceProcessor.traitCodeMap[traitCode];
      if (mappedTrait === undefined && (traitCode.startsWith("ability:") || traitCode.startsWith("proficiency:"))) {
        mappedTrait = CustomTrait.of(traitCode, 1, 1);
      }

      if (mappedTrait !== undefined) {
        traits.push(mappedTrait);
      }
    }

    return traits;
  }
}

export default CharacterRaceChoice;
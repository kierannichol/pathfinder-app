import CharacterState from "../../../database/CharacterState";
import {RaceDatabase} from "../../../database/v2/RaceDatabase";
import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import RacialAsiTrait from "../traits/RacialAsiTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import FeatChoice from "./FeatChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";
import RaceAbilityScoreIncreaseChoice from "./RaceAbilityScoreIncreaseChoice";

class CharacterRaceChoice extends CharacterChoice {
  public readonly key = CharacterChoice.RACE;
  public readonly type = ChoiceType.CHARACTER_RACE;
  public readonly dependsOn = undefined;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }
}

export class CharacterRaceChoiceProcessor implements ICharacterChoiceProcessor<CharacterRaceChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_RACE;

  constructor(private readonly raceDatabase: RaceDatabase) {
  }

  async select(choice: CharacterRaceChoice, value: string): Promise<CharacterChoice[]> {
    const choices: CharacterChoice[] = [ new CharacterRaceChoice(value) ];

    const race = this.raceDatabase.summary(value);
    if (race === undefined) {
      return choices;
    }

    for (let trait of race.traits) {
      switch (trait) {
        case 'choice:asi_2':
          choices.push(new RaceAbilityScoreIncreaseChoice());
          break;
        case 'choice:bonus_feat':
          choices.push(new FeatChoice(1, 'level1:race_bonus_feat', choice.key));
          break;
      }
    }
    return choices;
  }

  private static readonly traitCodeMap: {[traitCode:string]: Trait} = {
    ...CharacterState.Abilities.reduce((state, ability) => ({
      ...state,
      [`trait:${ability}_plus_1`]: new RacialAsiTrait(ability, 1),
      [`trait:${ability}_minus_1`]: new RacialAsiTrait(ability, -1),
      [`trait:${ability}_plus_2`]: new RacialAsiTrait(ability, 2),
      [`trait:${ability}_minus_2`]: new RacialAsiTrait(ability, -2),
      [`trait:${ability}_plus_3`]: new RacialAsiTrait(ability, 3),
      [`trait:${ability}_minus_3`]: new RacialAsiTrait(ability, -3),
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
    traits.push(CustomTrait.of('ac:size', race.size.acModifier));

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
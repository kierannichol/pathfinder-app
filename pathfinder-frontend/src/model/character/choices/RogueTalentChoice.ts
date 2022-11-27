import Trait from "../Trait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class RogueTalentChoice extends CharacterChoice {
  public readonly type = ChoiceType.ROGUE_TALENT;

  public withValue(value: string): RogueTalentChoice {
    return new RogueTalentChoice(this.level, this.key, this.dependsOn, value);
  }

  constructor(public readonly level: number, public readonly key: string, public dependsOn: string | undefined, public readonly current = '') {
    super();
  }
}

export class RogueTalentChoiceProcessor implements ICharacterChoiceProcessor<RogueTalentChoice> {
  public readonly supportedChoiceType = ChoiceType.ROGUE_TALENT;

  async select(choice: RogueTalentChoice, value: string): Promise<CharacterChoice[]> {
    return [
      choice.withValue(value)
    ];
  }

  async traits(choice: RogueTalentChoice): Promise<Trait[]> {
    return [];
  }
}
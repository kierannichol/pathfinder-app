import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class RogueTalentChoice extends CharacterChoice {
  public readonly type = ChoiceType.ROGUE_TALENT;
  public readonly key;

  static of(level: number, dependsOn: string|undefined, current: string = ''): RogueTalentChoice {
    return new RogueTalentChoice(level, dependsOn, current);
  }

  public withValue(value: string): RogueTalentChoice {
    return new RogueTalentChoice(this.level, this.dependsOn, value);
  }

  constructor(public readonly level: number, public dependsOn: string | undefined, public readonly current = '') {
    super();
    this.key = `level${level}:roguetalent`;
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
    return [
        CustomTrait.of(choice.current, true, choice.level)
    ];
  }
}
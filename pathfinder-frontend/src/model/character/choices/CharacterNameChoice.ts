import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class CharacterNameChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CHARACTER_NAME;
  public readonly type = ChoiceType.CHARACTER_NAME;
  public readonly dependsOn = undefined;

  constructor(private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }
}

export class CharacterNameChoiceProcessor implements ICharacterChoiceProcessor<CharacterNameChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_NAME;

  async select(choice: CharacterNameChoice, value: string): Promise<CharacterChoice[]> {
    return [
      new CharacterNameChoice(value)
    ];
  }

  async traits(choice: CharacterNameChoice): Promise<Trait[]> {
    return [ CustomTrait.of('character_name', choice.current) ];
  }

}
import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class CharacterNameChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CHARACTER_NAME;
  public readonly type = ChoiceType.CHARACTER_NAME;
  public readonly label = "Character Name";

  constructor(public readonly dependsOn: string | undefined = undefined, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new CharacterNameChoice(dependsOn, this.current);
  }
}

export class CharacterNameChoiceProcessor implements ICharacterChoiceProcessor<CharacterNameChoice> {
  public readonly supportedChoiceType = ChoiceType.CHARACTER_NAME;

  async select(choice: CharacterNameChoice, value: string): Promise<CharacterChoice[]> {
    return [
      new CharacterNameChoice(choice.dependsOn, value)
    ];
  }

  async traits(choice: CharacterNameChoice): Promise<Trait[]> {
    return [ CustomTrait.of('character_name', choice.current) ];
  }

}
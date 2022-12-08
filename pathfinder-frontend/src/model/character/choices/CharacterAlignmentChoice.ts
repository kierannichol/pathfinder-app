import Trait from "../Trait";
import CustomTrait from "../traits/CustomTrait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";
import ICharacterChoiceProcessor from "./ICharacterChoiceProcessor";

export default class CharacterAlignmentChoice extends CharacterChoice {
  public readonly key = CharacterChoice.CHARACTER_ALIGNMENT;
  public readonly type = ChoiceType.ALIGNMENT;
  public readonly label = "Alignment";

  constructor(public readonly dependsOn: string | undefined = undefined, private readonly value: string = '') {
    super();
  }

  get current(): string {
    return this.value;
  }

  withDependsOn(dependsOn: string | undefined): CharacterChoice {
    return new CharacterAlignmentChoice(dependsOn, this.current);
  }
}

export class CharacterAlignmentChoiceProcessor implements ICharacterChoiceProcessor<CharacterAlignmentChoice> {
  public readonly supportedChoiceType = ChoiceType.ALIGNMENT;

  async select(choice: CharacterAlignmentChoice, value: string): Promise<CharacterChoice[]> {
    return [
      new CharacterAlignmentChoice(choice.dependsOn, value)
    ];
  }

  async traits(choice: CharacterAlignmentChoice): Promise<Trait[]> {
    return [
        CustomTrait.of('alignment', choice.current),
        CustomTrait.of(choice.current, 1)
    ];
  }

}
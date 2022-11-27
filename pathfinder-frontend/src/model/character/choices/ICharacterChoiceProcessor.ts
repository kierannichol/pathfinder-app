import Trait from "../Trait";
import CharacterChoice, {ChoiceType} from "./CharacterChoice";

interface ICharacterChoiceProcessor<T extends CharacterChoice> {

  get supportedChoiceType(): ChoiceType;

  select(choice: T, value: string): Promise<CharacterChoice[]>;

  traits(choice: T): Promise<Trait[]>;
}

export default ICharacterChoiceProcessor;
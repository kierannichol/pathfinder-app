import CharacterAtLevel from "../../v7/CharacterAtLevel";
import ChoiceRef, {FeatureSelectChoiceRef, TextChoiceRef} from "../../v7/ChoiceRef";
import CharacterTextInput from "./base/CharacterTextInput";
import DataChoiceSelectButton from "./DataChoiceSelectButton";

interface ChoiceSelectorProps {
  choice: ChoiceRef;
  characterAtLevel: CharacterAtLevel;
  onChange: (value: string) => void;
}

export default function ChoiceSelector({ choice, characterAtLevel, onChange }: ChoiceSelectorProps) {
  if (choice instanceof FeatureSelectChoiceRef) {
    return <DataChoiceSelectButton
        choiceRef={choice as FeatureSelectChoiceRef}
        variant={choice.type}
        search={true}
        characterAtLevel={characterAtLevel}
        onSelect={onChange} />
  }
  if (choice instanceof TextChoiceRef) {
    return <CharacterTextInput value={characterAtLevel.selected(choice) ?? ''} onChange={onChange} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}
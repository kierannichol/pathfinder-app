import CharacterAtLevel from "../../v3/model/CharacterAtLevel";
import Choice, {SelectChoice} from "../../v3/model/Choice";
import CharacterTextInput from "./base/CharacterTextInput";
import DataChoiceSelectButton from "./DataChoiceSelectButton";

interface ChoiceSelectorProps {
  choice: Choice;
  characterAtLevel: CharacterAtLevel;
  onChange: (value: string) => void;
}

export default function ChoiceSelector({ choice, characterAtLevel, onChange }: ChoiceSelectorProps) {
  switch (choice.input) {
    case "text":
      return <CharacterTextInput value={choice.current} onChange={onChange} />
    case "select":
      return <DataChoiceSelectButton
          choice={choice as SelectChoice}
          characterAtLevel={characterAtLevel}
          onSelect={onChange} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}
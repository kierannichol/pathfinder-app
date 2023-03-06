import CharacterAtLevel from "../../core/CharacterAtLevel";
import {
  ChoiceNode,
  ResolvedSelectChoiceNode,
  SelectChoiceNode,
  TextChoiceNode,
  UnresolvedSelectChoiceNode
} from "../../core/Choice";
import CharacterTextInput from "./base/CharacterTextInput";
import DataChoiceSelectButton from "./DataChoiceSelectButton";

interface ChoiceSelectorProps {
  choice: ChoiceNode;
  characterAtLevel: CharacterAtLevel;
  onChange: (value: string) => void;
}

export default function ChoiceSelector({ choice, characterAtLevel, onChange }: ChoiceSelectorProps) {
  if (choice instanceof UnresolvedSelectChoiceNode || choice instanceof ResolvedSelectChoiceNode) {
    return <DataChoiceSelectButton
        choice={choice as SelectChoiceNode}
        variant={choice.type}
        search="auto"
        characterAtLevel={characterAtLevel}
        onSelect={onChange} />
  }
  if (choice instanceof TextChoiceNode) {
    return <CharacterTextInput value={choice.current ?? ''} onChange={onChange} />
  }
  return <div className="invalid-feedback">Unknown Choice</div>
}
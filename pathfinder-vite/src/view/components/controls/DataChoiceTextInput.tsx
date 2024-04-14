import {TextChoice} from "../..//Choice.ts";
import {CharacterAtLevel} from "../..//CharacterAtLevel.ts";
import TextInput from "./TextInput.tsx";

interface DataChoiceTextInputProps {
  choiceRef: TextChoice;
  characterAtLevel: CharacterAtLevel;
  id?: string;
  onSelect?: (id: string) => void;
}

export default function DataChoiceTextInput({ choiceRef, characterAtLevel, id, onSelect }: DataChoiceTextInputProps) {
  return <TextInput id={id}
                    value={characterAtLevel.selected(choiceRef)}
                    onChange={onSelect} />
}
import TextInput from "./TextInput.tsx";
import {ChoiceRef} from "../../../data/v8/Choice.ts";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";

interface DataChoiceTextInputProps {
  choiceRef: ChoiceRef;
  characterAtLevel: CharacterAtLevel;
  id?: string;
  onSelect?: (id: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  readonly?: boolean;
}

export default function DataChoiceTextInput({ choiceRef, characterAtLevel, id, onSelect, onFocus, onBlur, readonly = false }: DataChoiceTextInputProps) {
  return <TextInput id={id}
                    value={characterAtLevel.selected(choiceRef) as string}
                    readonly={readonly}
                    onChange={onSelect}
                    onFocus={onFocus}
                    onBlur={onBlur} />
}
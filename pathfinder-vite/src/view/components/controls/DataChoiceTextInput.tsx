import {TextChoiceModel} from "../../model/ChoiceModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import TextInput from "./TextInput.tsx";

interface DataChoiceTextInputProps {
  choiceRef: TextChoiceModel;
  characterAtLevel: CharacterAtLevelModel;
  id?: string;
  onSelect?: (id: string) => void;
}

export default function DataChoiceTextInput({ choiceRef, characterAtLevel, id, onSelect }: DataChoiceTextInputProps) {
  return <TextInput id={id}
                    value={characterAtLevel.selected(choiceRef)}
                    onChange={onSelect} />
}
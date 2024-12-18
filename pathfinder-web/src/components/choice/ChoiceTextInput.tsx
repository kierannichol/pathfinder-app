import TextInput from "@/components/base/form/TextInput.tsx";
import {ChoiceRef} from "@/data/Choice.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import useChoiceValue from "@/components/choice/useChoiceValue.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";

interface ChoiceTextInputProps {
  choiceRef: ChoiceRef;
  onChange: ChoiceSelectionHandler;
  index?: number;
  characterAtLevel?: CharacterAtLevel;
  className?: string;
}

function ChoiceTextInput({ choiceRef, onChange, index, characterAtLevel, className }: ChoiceTextInputProps) {
  const _characterAtLevel = characterAtLevel
      ? characterAtLevel
      : useCharacterAtLevel(choiceRef.level);

  const selected: string | undefined = useChoiceValue(_characterAtLevel, choiceRef, index);

  function handleChange(value: string | string[]) {
    if (choiceRef) {
      onChange?.(choiceRef, value);
    }
  }

  return <TextInput value={selected ?? ''} className={className} onChange={handleChange}/>
}

export default ChoiceTextInput;
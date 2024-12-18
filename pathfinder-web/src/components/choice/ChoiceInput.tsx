import {ChoiceInputType, ChoiceRef, SelectChoiceRef} from "@/data/Choice.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import ChoiceSelectButton from "@/components/choice/ChoiceSelectButton.tsx";
import ChoiceTextInput from "@/components/choice/ChoiceTextInput.tsx";

interface ChoiceInputProps {
  choiceRef: ChoiceRef;
  onChange: ChoiceSelectionHandler;
  characterAtLevel?: CharacterAtLevel;
  index?: number;
  className?: string;
}

function ChoiceInput({choiceRef, onChange, index, characterAtLevel, className}: ChoiceInputProps) {
  return choiceRef.inputType === ChoiceInputType.Select
      ? <ChoiceSelectButton choiceRef={choiceRef as SelectChoiceRef}
                            onChange={onChange}
                            characterAtLevel={characterAtLevel}
                            index={index}
                            className={className}/>
      : <ChoiceTextInput choiceRef={choiceRef}
                         onChange={onChange}
                         index={index}
                         className={className}/>
}

export default ChoiceInput;
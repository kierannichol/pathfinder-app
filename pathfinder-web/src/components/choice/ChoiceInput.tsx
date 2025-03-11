import {ChoiceInputType, ChoiceRef, SelectChoiceRef} from "@/data/Choice.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import ChoiceSelectButton from "@/components/choice/ChoiceSelectButton.tsx";
import ChoiceTextInput from "@/components/choice/ChoiceTextInput.tsx";
import MultiSelectChoiceList from "@/components/choice/MultiSelectChoiceList.tsx";

interface ChoiceInputProps {
  choiceRef: ChoiceRef;
  onChange: ChoiceSelectionHandler;
  onDelete?: () => void;
  characterAtLevel?: CharacterAtLevel;
  index?: number;
  className?: string;
}

function ChoiceInput({choiceRef, onChange, onDelete, index, characterAtLevel, className}: ChoiceInputProps) {
  return choiceRef.inputType === ChoiceInputType.Select
      ? ((choiceRef as SelectChoiceRef).isRepeating && characterAtLevel)
          ? <MultiSelectChoiceList choiceRef={choiceRef as SelectChoiceRef}
                                   onChange={onChange}
                                   characterAtLevel={characterAtLevel} noun={choiceRef.parent.name} />
          : <ChoiceSelectButton choiceRef={choiceRef as SelectChoiceRef}
                            onChange={onChange}
                            onDelete={onDelete}
                            characterAtLevel={characterAtLevel}
                            index={index}
                            className={className}/>
      : <ChoiceTextInput choiceRef={choiceRef}
                         onChange={onChange}
                         index={index}
                         className={className}/>
}

export default ChoiceInput;
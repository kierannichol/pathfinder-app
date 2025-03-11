import {ChoiceRef} from "@/data/Choice.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import {ReactNode, useMemo} from "react";
import ChoiceInput from "@/components/choice/ChoiceInput.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";

interface ChoiceInputRowProps {
  choice: ChoiceRef|string;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel;
  label?: ReactNode;
  onDelete?: (choiceRef: ChoiceRef) => void;
}

function ChoiceInputRow({ choice, onChange, label, characterAtLevel, onDelete }: ChoiceInputRowProps) {
  const choiceRef = useMemo(() => {
    return typeof choice === 'string' ? characterAtLevel.choice(choice) : choice;
  }, [choice]);

  const characterWithoutChoiceSelected = useMemo(() => {
    return choiceRef ? characterAtLevel.withoutChoice(choiceRef.path) : characterAtLevel;
  }, [choiceRef, characterAtLevel]);

  if (!choiceRef) {
    return <div>Unknown choice</div>
  }

  const handleDelete = onDelete ? () => onDelete(choiceRef) : undefined;

  return <>
    <label>{label ?? choiceRef.label}</label>
    <ChoiceInput choiceRef={choiceRef}
                 characterAtLevel={characterWithoutChoiceSelected}
                 onChange={onChange}
                 onDelete={handleDelete}
    />
  </>
}

export default ChoiceInputRow;
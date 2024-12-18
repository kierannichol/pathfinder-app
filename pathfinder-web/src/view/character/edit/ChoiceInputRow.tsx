import {ChoiceRef} from "@/data/Choice.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import {ReactNode, useMemo} from "react";
import ChoiceInput from "@/components/choice/ChoiceInput.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {useCharacter} from "@/view/character/edit/CharacterContext.tsx";

interface ChoiceInputRowProps {
  choice: ChoiceRef|string;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel|number;
  label?: ReactNode;
}

function ChoiceInputRow({ choice, onChange, label, characterAtLevel }: ChoiceInputRowProps) {
  const character = useCharacter();
  const resolvedCharacterAtLevel = useMemo(() => {
    return typeof characterAtLevel === "number" ? character.atLevel(characterAtLevel) : characterAtLevel;
  }, [characterAtLevel]);

  const choiceRef = useMemo(() => {
    return typeof choice === 'string' ? resolvedCharacterAtLevel.choice(choice) : choice;
  }, [choice]);

  const characterWithoutChoiceSelected = useMemo(() => {
    return choiceRef ? resolvedCharacterAtLevel.withoutChoice(choiceRef.path) : resolvedCharacterAtLevel;
  }, [choiceRef, characterAtLevel]);

  if (!choiceRef) {
    return <div>Unknown choice</div>
  }

  return <>
    <label>{label ?? choiceRef.label}</label>
    <ChoiceInput choiceRef={choiceRef}
                 characterAtLevel={characterWithoutChoiceSelected}
                 onChange={onChange}/>
  </>
}

export default ChoiceInputRow;
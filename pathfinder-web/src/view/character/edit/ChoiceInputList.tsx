import {ChoiceRef} from "@/data/Choice.ts";
import ChoiceInputRow from "@/view/character/edit/ChoiceInputRow.tsx";
import {ReactNode, useMemo} from "react";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";

interface ChoiceInputListProps {
  choices: (ChoiceRef|string)[];
  labelFn?: (choiceRef: ChoiceRef) => ReactNode;
  className?: string;
}

function ChoiceInputList({ choices, labelFn = choiceRef => choiceRef.label, className }: ChoiceInputListProps) {
  const characterAtLevel = useCharacterAtLevel();
  const onChange = useCharacterUpdate();

  const choiceRefs = useMemo(() => {
    return choices.map(choice => typeof choice === 'string'
        ? characterAtLevel.choice(choice)
        : choice) as ChoiceRef[];
  }, [choices, characterAtLevel]);

  const choiceRows = useMemo(() => {
    return choiceRefs.map(choiceRef => (
        <ChoiceInputRow key={choiceRef.path}
                        label={labelFn(choiceRef)}
                        choice={choiceRef}
                        characterAtLevel={choiceRef.parent.level}
                        onChange={onChange} />));
  }, [choiceRefs, characterAtLevel, onChange]);

  return <div className={className}>
    {choiceRows}
  </div>
}

export default ChoiceInputList;
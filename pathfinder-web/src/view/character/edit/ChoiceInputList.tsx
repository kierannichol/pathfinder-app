import {ChoiceRef} from "@/data/Choice.ts";
import ChoiceInputRow from "@/view/character/edit/ChoiceInputRow.tsx";
import {ReactNode, useMemo} from "react";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {useCharacter} from "@/view/character/edit/CharacterContext.tsx";

interface ChoiceInputListProps {
  choices: (ChoiceRef|string)[];
  labelFn?: (choiceRef: ChoiceRef) => ReactNode;
  characterAtLevel: CharacterAtLevel;
  className?: string;
}

function ChoiceInputList({ choices, characterAtLevel, labelFn = choiceRef => choiceRef.label, className }: ChoiceInputListProps) {
  const onChange = useCharacterUpdate();
  const character = useCharacter();

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
                        characterAtLevel={character.atLevel(choiceRef.parent.level)}
                        onChange={onChange} />));
  }, [choiceRefs, characterAtLevel, onChange]);

  return <div className={className}>
    {choiceRows}
  </div>
}

export default ChoiceInputList;
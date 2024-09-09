import {ChoiceRef, SelectChoiceRef} from "@/data/v8/Choice.ts";
import {useMemo} from "react";
import ErrorBlock from "@/view/components/character/edit/common/ErrorBlock.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import DataChoiceSelectButton from "@/view/components/controls/DataChoiceSelectButton.tsx";

interface SelectChoiceInputProps {
  choice: string | ChoiceRef;
  className?: string;
}

export default function SelectChoiceInput({ choice, className }: SelectChoiceInputProps) {
  const character = useCharacterAtLevel();
  const choiceRef = useMemo(() => (typeof choice === 'string' ? character.choice(choice) : choice) as SelectChoiceRef, [character, choice]);
  const update = useCharacterUpdate();

  if (!choiceRef) {
    return <ErrorBlock>Invalid Choice: {choice?.toString() ?? 'undefined'}</ErrorBlock>
  }

  return <DataChoiceSelectButton variant='none'
                                 dialogVariant='default'
                                 labelPrefix={''}
                                 className={className}
                                 onSelect={id => update.select(choiceRef, id)}
                                 choiceRef={choiceRef}
                                 characterAtLevel={character} />
}
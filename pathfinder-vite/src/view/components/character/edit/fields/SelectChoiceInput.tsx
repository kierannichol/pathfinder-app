import {ChoiceRef, SelectChoiceRef} from "@/data/v8/Choice.ts";
import {useMemo} from "react";
import ErrorBlock from "@/view/components/character/edit/common/ErrorBlock.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import DataChoiceSelectButton from "@/view/components/controls/DataChoiceSelectButton.tsx";
import {array} from "@/app/pfutils.ts";

interface SelectChoiceInputProps {
  choice: string | ChoiceRef;
  choiceIndex?: number;
  className?: string;
}

export default function SelectChoiceInput({ choice, choiceIndex, className }: SelectChoiceInputProps) {
  const character = useCharacterAtLevel();
  const choiceRef = useMemo(() => (typeof choice === 'string' ? character.choice(choice) : choice) as SelectChoiceRef, [character, choice]);
  const update = useCharacterUpdate();

  const selections = useMemo(() => {
    return array(character.selected(choiceRef));
  }, [choiceRef, character]);

  if (!choiceRef) {
    return <ErrorBlock>Invalid Choice: {choice?.toString() ?? 'undefined'}</ErrorBlock>
  }

  return <DataChoiceSelectButton variant='none'
                                 dialogVariant='default'
                                 labelPrefix={''}
                                 className={className}
                                 onSelect={id => {
                                   if (choiceIndex === undefined) {
                                     update.select(choiceRef, id);
                                     return;
                                   }

                                   if (id && id !== '') {
                                     selections[choiceIndex] = id;
                                   } else {
                                     delete selections[choiceIndex];
                                   }
                                   update.select(choiceRef, selections);
                                 }}
                                 choiceRef={choiceRef}
                                 choiceIndex={choiceIndex}
                                 search={true}
                                 characterAtLevel={character} />
}
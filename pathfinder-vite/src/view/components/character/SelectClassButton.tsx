import {useMemo} from "react";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {useDatabase} from "../../../data/context.tsx";
import {SelectChoiceRef} from "../../../data/v8/Choice.ts";

interface SelectClassButtonProps {
  characterAtLevel: CharacterAtLevel;
}

export default function SelectClassButton({ characterAtLevel }: SelectClassButtonProps) {
  const database = useDatabase();
  const classChoice = useMemo(() => characterAtLevel.choices.find(choice => choice.type === 'class') as SelectChoiceRef,
      [characterAtLevel]);

  const selectedId = useMemo(() => classChoice !== undefined ? characterAtLevel.selected(classChoice) : undefined, [classChoice, characterAtLevel]);
  const label = useMemo(() => selectedId !== undefined ? database.name(selectedId as string) : <i>Select Class</i>, [database, selectedId]);

  if (classChoice === undefined) {
    return <></>
  }

  return <DataChoiceSelectButton
      variant='header-link'
      dialogVariant='class'
      choiceRef={classChoice}
      characterAtLevel={characterAtLevel} />
}
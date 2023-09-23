import {useMemo} from "react";
import {usePathfinderDatabase} from "../../../data/model/PathfinderDatabase.tsx";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";

interface SelectClassButtonProps {
  characterAtLevel: CharacterAtLevel;
}

export default function SelectClassButton({ characterAtLevel }: SelectClassButtonProps) {
  const database = usePathfinderDatabase();
  const classChoice = useMemo(() => characterAtLevel.choices.find(choice => choice.type === 'class') as FeatureSelectChoiceRef,
      [characterAtLevel]);

  const selectedId = useMemo(() => classChoice !== undefined ? characterAtLevel.selected(classChoice) : undefined, [classChoice, characterAtLevel]);
  const label = useMemo(() => selectedId !== undefined ? database.name(selectedId) : <i>Select Class</i>, [database, selectedId]);

  if (classChoice === undefined) {
    return <></>
  }

  return <DataChoiceSelectButton
      variant='header-link'
      dialogVariant='class'
      choiceRef={classChoice}
      characterAtLevel={characterAtLevel} />
}
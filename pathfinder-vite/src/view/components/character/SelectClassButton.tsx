import {useMemo} from "react";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {SelectChoiceModel} from "../../model/ChoiceModel.ts";
import {useDatabaseModel} from "../../model/ModelContext.tsx";

interface SelectClassButtonProps {
  characterAtLevel: CharacterAtLevelModel;
}

export default function SelectClassButton({ characterAtLevel }: SelectClassButtonProps) {
  const database = useDatabaseModel();
  const classChoice = useMemo(() => characterAtLevel.choices.find(choice => choice.type === 'class') as SelectChoiceModel,
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
import {CharacterChoiceSelectHandler} from "./CharacterEditor.tsx";
import React, {useMemo} from "react";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {SelectChoiceModel} from "../../model/ChoiceModel.ts";

interface ArchetypeEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  onChange: CharacterChoiceSelectHandler;
}

export default function ArchetypeEditor({ characterAtLevel, onChange }: ArchetypeEditorProps) {
  const choiceRefs = useMemo(() => characterAtLevel.choicesOfType('archetype').filter(choiceRef => characterAtLevel.hasSelection(choiceRef)) as SelectChoiceModel[], [characterAtLevel]);
  const addChoiceRefs = useMemo(() => characterAtLevel.choicesOfType('archetype').filter(choiceRef => !characterAtLevel.hasSelection(choiceRef)) as SelectChoiceModel[], [characterAtLevel]);

  if (choiceRefs.length + addChoiceRefs.length === 0) {
    return <></>;
  }

  return <div>
    <div>
      {choiceRefs.map(choiceRef =>
          <ArchetypeButton key={choiceRef.path}
                           choiceRef={choiceRef}
                           characterAtLevel={characterAtLevel}
                           onChange={onChange} />)}
    </div>
    <div>
      {addChoiceRefs.map(choiceRef =>
          <AddArchetypeButton key={choiceRef.path}
                              choiceRef={choiceRef}
                              characterAtLevel={characterAtLevel}
                              onChange={onChange} />)}
    </div>
  </div>
}

interface ArchetypeButtonProps {
  choiceRef: SelectChoiceModel;
  characterAtLevel: CharacterAtLevelModel;
  onChange: CharacterChoiceSelectHandler;
}

export function ArchetypeButton({ choiceRef, characterAtLevel, onChange }: ArchetypeButtonProps) {
  const variant = useMemo(() => {
    const selected = characterAtLevel.selected(choiceRef);
    return selected ? ["default", "list-item"] : "link";
  }, [choiceRef, characterAtLevel]);

  const children = useMemo(() => {
    const selected = characterAtLevel.selected(choiceRef);
    return selected ? undefined : "+ Add Archetype";
  }, [choiceRef, characterAtLevel]);

  return <DataChoiceSelectButton
      choiceRef={choiceRef}
      characterAtLevel={characterAtLevel}
      variant={variant}
      onSelect={value => onChange(choiceRef, value)}
      children={children} />;
}

export function AddArchetypeButton({ choiceRef, characterAtLevel, onChange }: ArchetypeButtonProps) {
  return <DataChoiceSelectButton
      choiceRef={choiceRef}
      characterAtLevel={characterAtLevel}
      variant={"link"}
      dialogVariant={"default"}
      onSelect={value => onChange(choiceRef, value)}>
    + Add Archetype
  </DataChoiceSelectButton>;
}
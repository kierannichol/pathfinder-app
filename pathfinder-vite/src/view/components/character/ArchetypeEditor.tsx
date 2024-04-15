import {CharacterChoiceSelectHandler} from "./CharacterEditor.tsx";
import React, {useMemo} from "react";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import {array} from "../../../app/pfutils.ts";
import {ButtonBlockGroup} from "../controls/ButtonBlockGroup.tsx";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {SelectChoiceRef} from "../../../data/v8/Choice.ts";

interface ArchetypeEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: CharacterChoiceSelectHandler;
}

export default function ArchetypeEditor({ characterAtLevel, onChange }: ArchetypeEditorProps) {
  const archetypeChoiceRef = useMemo(() => characterAtLevel.choicesOfType('archetype')[0] as SelectChoiceRef, [characterAtLevel]);
  if (!archetypeChoiceRef) {
    return <></>;
  }

  const selections = useMemo(() => (array(characterAtLevel.selected(archetypeChoiceRef))) ?? [], [characterAtLevel, archetypeChoiceRef]);

  return <div>
    <ButtonBlockGroup>
      {selections.map((_, index) => <EditArchetypeButton key={archetypeChoiceRef.path + "/" + index}
                                                       choiceRef={archetypeChoiceRef}
                                                       selectedIndex={index}
                                                       characterAtLevel={characterAtLevel}
                                                       onChange={onChange} />)}
    </ButtonBlockGroup>
    <AddArchetypeButton choiceRef={archetypeChoiceRef}
                        selectedIndex={-1}
                        characterAtLevel={characterAtLevel}
                        onChange={onChange} />
  </div>
}

interface ArchetypeButtonProps {
  choiceRef: SelectChoiceRef;
  selectedIndex: number;
  characterAtLevel: CharacterAtLevel;
  onChange: CharacterChoiceSelectHandler;
}

export function EditArchetypeButton({ choiceRef, selectedIndex, characterAtLevel, onChange }: ArchetypeButtonProps) {
  const selections = useMemo(() => {
    return array(characterAtLevel.selected(choiceRef));
  }, [choiceRef, characterAtLevel]);

  return <DataChoiceSelectButton
      choiceRef={choiceRef}
      choiceIndex={selectedIndex}
      characterAtLevel={characterAtLevel}
      variant={["default", "list-item"]}
      onSelect={value => {
        if (value && value !== '') {
          selections[selectedIndex] = value;
        } else {
          delete selections[selectedIndex];
        }
        onChange(choiceRef, selections)
      }} />;
}

export function AddArchetypeButton({ choiceRef, characterAtLevel, onChange }: ArchetypeButtonProps) {
  const selections = useMemo(() => {
    return array(characterAtLevel.selected(choiceRef));
  }, [choiceRef, characterAtLevel]);

  return <DataChoiceSelectButton
      choiceRef={choiceRef}
      choiceIndex={-1}
      characterAtLevel={characterAtLevel}
      variant={"link"}
      dialogVariant={"default"}
      onSelect={value => {
        selections.push(value);
        onChange(choiceRef, selections);
      }}>
    + Add Archetype
  </DataChoiceSelectButton>;
}
import * as React from 'react';
import {useMemo} from 'react';
import {SelectChoiceRef} from "@/data/Choice.ts";
import styles from "./MultiSelectChoiceList.module.css";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import ChoiceSelectButton from "@/components/choice/ChoiceSelectButton.tsx";

interface MultiSelectChoiceListProps {
  choiceRef: SelectChoiceRef;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel;
  noun?: string;
}

function MultiSelectChoiceList({ choiceRef, onChange, characterAtLevel, noun }: MultiSelectChoiceListProps) {
  const selections: string[] = useMemo(
      () => {
        const value = characterAtLevel.selected(choiceRef);
        if (value === undefined || value === '') {
          return [];
        }
        if (typeof value === 'string') {
          return [value];
        }
        return value.filter(v => (v?.length ?? 0) > 0);
      },
      [choiceRef, characterAtLevel]
  );

  const choiceLimit: number = useMemo(
      () => choiceRef.maxLimit(characterAtLevel) ?? 0,
      [choiceRef, characterAtLevel]
  );

  function handleChange(index: number, selected: string) {
    selections[index] = selected;
    onChange?.(choiceRef, selections);
  }

 return (
  <div>
    <div className={styles.choiceList}>
    {selections.map(((_, index) => (
        <ChoiceSelectButton key={choiceRef.path + index}
                     className={styles.button}
                     choiceRef={choiceRef}
                     index={index}
                     onChange={(_, value) => handleChange(index, value as string)} />
    )))}
    </div>
    {selections.length < choiceLimit &&
        <ChoiceSelectButton choiceRef={choiceRef}
                     className={styles.add}
                     index={selections.length}
                     onChange={(_, value) => handleChange(selections.length, value as string)}
                     characterAtLevel={characterAtLevel}
                      validation={false}>
          + {noun}
        </ChoiceSelectButton>
    }
  </div>
 );
}

interface AddButtonProps {

}

function AddButton({}: AddButtonProps) {
 return (
  <div>
    + Add Spell
  </div>
 )
}

export default MultiSelectChoiceList;
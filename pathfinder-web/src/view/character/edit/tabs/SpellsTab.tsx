import * as React from 'react';
import {useMemo} from 'react';
import MultiSelectChoiceList from "@/components/choice/MultiSelectChoiceList.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import styles from "./SpellsTab.module.css";
import {SelectChoiceRef} from "@/data/Choice.ts"
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";

function SpellsTab() {
  const characterAtLevel = useCharacterAtLevel();
  const onChange = useCharacterUpdate();
  const spellChoices = useMemo(() => {
    return characterAtLevel.choicesOfType('spell');
  }, [characterAtLevel]);

  return (
      <section>
        {
          spellChoices.map(choice => choice as SelectChoiceRef)
          .map(choice => <SpellLevel key={choice.path}
                                     choiceRef={choice}
                                     onChange={onChange}
                                     characterAtLevel={characterAtLevel}/>)
        }
      </section>
  );
}

interface SpellLevelProps {
  choiceRef: SelectChoiceRef;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel;
}

function SpellLevel({choiceRef, onChange, characterAtLevel}: SpellLevelProps) {
  const maxSpellCount = useMemo(() => {
    return choiceRef.maxLimit(characterAtLevel) ?? '∞';
  }, [choiceRef, characterAtLevel]);

  const usedSpellCount = useMemo(() => {
    return (characterAtLevel.selected(choiceRef) as string[] ?? []).length;
  }, [choiceRef, characterAtLevel])

  if (maxSpellCount === 0) return undefined;

  return (
      <div className={styles.spellLevel}>
        <h1>{choiceRef.label} ({usedSpellCount}/{maxSpellCount})</h1>
        <MultiSelectChoiceList choiceRef={choiceRef}
                               onChange={onChange}
                               characterAtLevel={characterAtLevel}
                               noun={`Spell`}/>
      </div>
  )
}

export default SpellsTab;
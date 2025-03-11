import * as React from 'react';
import {useMemo} from 'react';
import MultiSelectChoiceList from "@/components/choice/MultiSelectChoiceList.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import styles from "./SpellsTab.module.css";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import ChoiceSelectButton from "@/components/choice/ChoiceSelectButton.tsx";
import {SelectChoiceRef} from "@/data/Choice.ts";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";

function SpellsTab() {
  const characterAtLevel = useCharacterAtLevel();
  const onChange = useCharacterUpdate();
  const spellChoices = useMemo(() => {
    return characterAtLevel.choicesOfType('spell');
  }, [characterAtLevel]);

  const domainSpellChoices = useMemo(() => {
    return characterAtLevel.choicesOfType('domain_spell');
  }, [characterAtLevel]);

  return (
      <section className={styles.spells}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(spellLevel => (
            <SpellLevel spellLevel={spellLevel} onChange={onChange} characterAtLevel={characterAtLevel}/>
        ))}
      </section>
      // <section className={styles.spells}>
      //   {
      //     spellChoices.map(choice => choice as SelectChoiceRef)
      //     .map((choice, index) => <SpellLevel key={choice.path}
      //                                         domainChoiceRef={domainSpellChoices[index - 1] as SelectChoiceRef}
      //                                         choiceRef={choice}
      //                                         onChange={onChange}
      //                                         characterAtLevel={characterAtLevel}/>)
      //   }
      // </section>
  );
}

interface SpellLevelProps {
  spellLevel: number;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel;
}

function SpellLevel({spellLevel, onChange, characterAtLevel}: SpellLevelProps) {
  const choiceRefs = characterAtLevel.choicesOfType('spell')
  .filter(choice => choice.key.endsWith(':spells_' + spellLevel)) as SelectChoiceRef[];
  const domainChoiceRef = characterAtLevel.choice('domain_spell') as SelectChoiceRef;

  const spellTags = characterAtLevel.choicesOfType('class')
  .map(classChoiceRef => characterAtLevel.selected(classChoiceRef) as string)
  .map(value => (value.replace('class:', '') + spellLevel))
  .reduce((array, value) => {
    if (!array.includes(value)) {
      array.push(value)
    }
    return array;
  }, [] as string[])

  const maxSpellCount = useMemo(() => {
    const maxes = choiceRefs.map(choiceRef => choiceRef.maxLimit(characterAtLevel));
    if (maxes.includes(null)) {
      return '∞';
    }
    return maxes.reduce((acc, max) => (acc ?? 0) + (max ?? 0), 0);
  }, [choiceRefs, characterAtLevel]);

  const usedSpellCount = useMemo(() => {
    return choiceRefs
    .map(choiceRef => (characterAtLevel.selected(choiceRef) as string[] ?? []).length)
    .reduce((prev, curr) => prev + curr, 0);
  }, [choiceRefs, characterAtLevel])

  const fixedSpells = useMemo(() => {
    return characterAtLevel.features
    .filter(feature => feature.tags.includes('spell'))
    .filter(feature => feature.parent.type === 'feature')
    .filter(feature => spellTags.some(tag => feature.tags.includes(tag)))
  }, [characterAtLevel]);

  console.log(spellTags)
  // console.log(fixedSpells.map(feature => (feature.parent.ofType('class')?.path ?? '') + spellLevel))

  if (maxSpellCount === 0) return undefined;

  return (
      <div className={styles.spellLevel}>
        <h1>Level {spellLevel} Spells ({usedSpellCount}/{maxSpellCount}{domainChoiceRef ? "+1" : ""})</h1>
        <div className={styles.spellLevelContent}>
          {fixedSpells.length > 0 && <div>
            {fixedSpells.map(spell =>
                <details key={spell.key}>
                  <summary>{spell.name}</summary>
                  <section>
                    <DescriptionBlock description={spell.description}/>
                  </section>
                </details>)}
          </div>}
          {domainChoiceRef && <ChoiceSelectButton choiceRef={domainChoiceRef}
                                                  labelClassName={styles.domainSpell}
                                                  onChange={onChange}/>}
          {choiceRefs.map(choiceRef =>
              <MultiSelectChoiceList key={choiceRef.path}
                                     choiceRef={choiceRef}
                                     onChange={onChange}
                                     characterAtLevel={characterAtLevel}
                                     noun={`Spell`}/>
          )}
        </div>
      </div>
  )
}

interface SpellLevelChoiceProps {
  choiceRef: SelectChoiceRef;
  onChange: ChoiceSelectionHandler;
  characterAtLevel: CharacterAtLevel;
}

function SpellLevelChoice({choiceRef, onChange, characterAtLevel}: SpellLevelChoiceProps) {
  const maxSpellCount = useMemo(() => {
    return choiceRef.maxLimit(characterAtLevel) ?? '∞';
  }, [choiceRef, characterAtLevel]);
}

export default SpellsTab;
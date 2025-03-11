import * as React from 'react';
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {useDatabase} from "@/data/context.ts";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import {SelectChoiceRef} from "@/data/Choice.ts";
import {Formula} from "@kierannichol/formula-js";

export function SkillsTab() {
  const database = useDatabase();
  const characterAtLevel = useCharacterAtLevel();
  const characterUpdate = useCharacterUpdate();
  const skills = database.query(['skill']);

  const maxRanks = Formula.parse("sum(@max_skill_ranks#*)").resolve(characterAtLevel)?.asNumber() ?? 0;
  const currentRanks = Formula.parse("sum(@skill:*)").resolve(characterAtLevel)?.asNumber() ?? 0;

  return (
      <section>
        <h1>{currentRanks}/{maxRanks}</h1>
        {skills.map(skill =>
            <SkillRow key={skill.key}
                      characterAtLevel={characterAtLevel}
                      onChange={characterUpdate}
                      skill={skill}
                      ranksRemaining={maxRanks - currentRanks}/>)}
      </section>
  )
}

interface SkillRowProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectionHandler;
  skill: FeatureSummary;
  ranksRemaining: number;
}

export function SkillRow({characterAtLevel, onChange, skill, ranksRemaining}: SkillRowProps) {
  const current = characterAtLevel.get(skill.key)?.asNumber() ?? 0;

  function handleAdd() {
    const skillChoice = characterAtLevel.choicesOfType('skill')
      .sort((a, b) => a.level - b.level)
      .find(choice => {
        const selections = characterAtLevel.selected(choice) as string[] ?? []
        return !selections.includes(skill.key);
      }) as SelectChoiceRef;

    if (!skillChoice) {
      return;
    }

    const current = characterAtLevel.selected(skillChoice) as string[];
    onChange(skillChoice, [...current, skill.key]);
  }

  function handleRemove() {
    const skillChoice = characterAtLevel.choicesOfType('skill')
    .sort((a, b) => b.level - a.level)
    .find(choice => {
      const selections = characterAtLevel.selected(choice) as string[] ?? []
      return selections.includes(skill.key);
    }) as SelectChoiceRef;

    if (!skillChoice) {
      return;
    }

    const current = characterAtLevel.selected(skillChoice) as string[];
    current.splice(current.indexOf(skill.key));
    onChange(skillChoice, current);
  }

  return (
      <div>
        <div>
          {skill.name}
          <button disabled={current <= 0} onClick={handleRemove}>-</button>
          {current}
          <button disabled={current >= characterAtLevel.level || ranksRemaining === 0} onClick={handleAdd}>+</button>
        </div>
      </div>
  )
}
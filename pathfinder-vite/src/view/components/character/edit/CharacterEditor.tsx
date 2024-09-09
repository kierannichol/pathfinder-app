import React, {useMemo, useState} from "react";
import {isString} from "@/app/pfutils.ts";
import {useCharacterStore} from "@/data/context.tsx";
import Character from "../../../../data/v8/Character.ts";
import {ChoiceRef} from "@/data/v8/Choice.ts";
import {CharacterAtLevelContext} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {CharacterUpdateContext} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import CharacterInfoSection from "@/view/components/character/edit/sections/CharacterInfoSection.tsx";
import BaseAbilityScoreSection from "@/view/components/character/edit/sections/BaseAbilityScoreSection.tsx";
import FeatsSection from "@/view/components/character/edit/sections/FeatsSection.tsx";
import SkillsSection from "@/view/components/character/edit/sections/SkillsSection.tsx";
import SpecialAbilitiesSection from "@/view/components/character/edit/sections/SpecialAbilitiesSection.tsx";

interface CharacterEditorProps {
  loaded: Character;
}

export type CharacterChoiceSelectHandler = (choice: ChoiceRef, value: string|string[]) => void;

export default function CharacterEditor({ loaded }: CharacterEditorProps) {
  const [ character, setCharacter ] = useState(loaded);
  const [ showFavoredClassPrompt, setShowFavoredClassPrompt ] = useState(false);

  const characterStore = useCharacterStore();
  const characterAtLevels = useMemo(() => {
    const levels = [];
    for (let i = 0; i <= 20; i++) {
      levels[i] = character.atLevel(i);
    }
    return levels;
  }, [character]);

  const currentLevel = parseInt(loaded.selected('current_level') as string ?? "1");
  const characterAtLevel = characterAtLevels[currentLevel];

  async function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    const updated = await mappingFunction(character);
    setCharacter(updated);
    await characterStore.save(updated);
  }

  function handleChange(choice: ChoiceRef, value: string|string[]) {
    if (isString(value) && character.selected(choice.path) === value) {
      return;
    }

    if (choice.path === 'favored_class') {
      setShowFavoredClassPrompt(true);
    }

    updateCharacter(character => character.selectAll({ [choice.path]: value }));
  }

  console.log(characterAtLevel);

  const updateObj = {
    select: handleChange
  }

  return <CharacterAtLevelContext.Provider value={characterAtLevel}>
          <CharacterUpdateContext.Provider value={{ select: handleChange}}>
            <main>
              <CharacterInfoSection />
              <BaseAbilityScoreSection />
              <SpecialAbilitiesSection />
              <FeatsSection />
              <SkillsSection />
            </main>
          </CharacterUpdateContext.Provider>
        </CharacterAtLevelContext.Provider>
}
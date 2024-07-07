import React, {useMemo, useState} from "react";
import {isString} from "@/app/pfutils.ts";
import {useCharacterStore} from "@/data/context.tsx";
import Character from "../../../../data/v8/Character.ts";
import {ChoiceRef} from "@/data/v8/Choice.ts";
import styles from "@/view/components/character/edit/CharacterEditor.module.css";
import AbilityScoreSection from "@/view/components/character/edit/sections/AbilityScoreSection.tsx";
import HealthSection from "@/view/components/character/edit/sections/HealthSection.tsx";
import {CharacterAtLevelContext} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import "./edit.css";
import {CharacterUpdateContext} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import CharacterInfoSection from "@/view/components/character/edit/sections/CharacterInfoSection.tsx";
import SpeedSection from "@/view/components/character/edit/sections/SpeedSection.tsx";

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

  const updateObj = {
    select: handleChange
  }

  return <main>
    <section className={styles.layout}>
        <CharacterAtLevelContext.Provider value={characterAtLevel}>
          <CharacterUpdateContext.Provider value={{ select: handleChange}}>
              <CharacterInfoSection className={styles.characterInfo} />
              <AbilityScoreSection className={styles.abilityScores} />
              <HealthSection className={styles.health} />
              <SpeedSection className={styles.speed} />
              {/*<InitiativeSection className={styles.initiative} />*/}
              {/*<ArmorSection className={styles.armor} />*/}
              {/*<SavingThrowsSection className={styles.savingThrows} />*/}
              {/*<BabSection className={styles.bab} />*/}
              {/*<SpellResistanceSection className={styles.spellResistance} />*/}
              {/*<CombatManeuverSection className={styles.combatManeuver} />*/}
              {/*<WeaponSection />*/}
              {/*<WeaponSection />*/}
              {/*<WeaponSection />*/}
              {/*<WeaponSection />*/}
              {/*<SkillsSection />*/}
              {/*<LanguagesSection />*/}
          </CharacterUpdateContext.Provider>
        </CharacterAtLevelContext.Provider>
    </section>
  </main>
}
import React, {useMemo, useState} from "react";
import {isString} from "@/app/pfutils.ts";
import {useCharacterStore, useEquipmentSetStore} from "@/data/context.tsx";
import Character from "../../../../data/v8/Character.ts";
import {ChoiceRef} from "@/data/v8/Choice.ts";
import {CharacterAtLevelContext} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {CharacterUpdateContext} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import CharacterInfoSection from "@/view/components/character/edit/sections/CharacterInfoSection.tsx";
import BaseAbilityScoreSection from "@/view/components/character/edit/sections/BaseAbilityScoreSection.tsx";
import FeatsSection from "@/view/components/character/edit/sections/FeatsSection.tsx";
import SkillsSection from "@/view/components/character/edit/sections/SkillsSection.tsx";
import SpecialAbilitiesSection from "@/view/components/character/edit/sections/SpecialAbilitiesSection.tsx";
import {Tab, Tabs} from "react-bootstrap";
import styles from "./CharacterEditor.module.css";
import "@/view/views/editor-bootstrap-theme.css";
import SpellsSection from "@/view/components/character/edit/sections/SpellsSection.tsx";
import EquipmentSection from "@/view/components/character/edit/sections/EquipmentSection.tsx";
import ClassOptionsSection from "@/view/components/character/edit/sections/ClassOptionsSection.tsx";

interface CharacterEditorProps {
  loaded: Character;
}

export type CharacterChoiceSelectHandler = (choice: ChoiceRef, value: string|string[]) => void;

export default function CharacterEditor({ loaded }: CharacterEditorProps) {
  const [ character, setCharacter ] = useState(loaded);

  const equipmentSetStore = useEquipmentSetStore();

  const characterStore = useCharacterStore();
  const characterAtLevels = useMemo(() => {
    const levels = [];
    for (let i = 0; i <= 20; i++) {
      levels[i] = character.atLevel(i);
    }
    return levels;
  }, [character]);

  const characterAtLevel = useMemo(() => {
    const currentLevel = parseInt(character.selected('current_level') as string ?? "1");
    return characterAtLevels[currentLevel];
  }, [character]);

  async function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    const updated = await mappingFunction(character);
    setCharacter(updated);
    await characterStore.save(updated);
  }

  async function handleChange(choice: ChoiceRef, value: string|string[]) {
    if (isString(value) && character.selected(choice.path) === value) {
      return;
    }
    await updateCharacter(character => character.selectAll({ [choice.path]: value }));
  }

  console.log(characterAtLevel);

  const updateObj = {
    select: handleChange
  }

  return <CharacterAtLevelContext.Provider value={characterAtLevel}>
          <CharacterUpdateContext.Provider value={updateObj}>
            <main>
              <Tabs defaultActiveKey={'character'}
                    fill={true}
                    bsPrefix={'pf'}
                    className={styles.tabs}>
                <Tab eventKey={'character'} title={'Character'} >
                  <CharacterInfoSection />
                  <BaseAbilityScoreSection />
                </Tab>
                <Tab eventKey={'abilities'} title={'Abilities'}>
                  <FeatsSection />
                  <ClassOptionsSection />
                  <SpecialAbilitiesSection />
                </Tab>
                <Tab eventKey={'skills'} title={'Skills'}>
                  <SkillsSection />
                </Tab>
                <Tab eventKey={'spells'} title={'Spells'}>
                  <SpellsSection />
                </Tab>
                <Tab eventKey={'equipment'} title={'Equipment'}>
                  <EquipmentSection />
                </Tab>
              </Tabs>
            </main>
          </CharacterUpdateContext.Provider>
        </CharacterAtLevelContext.Provider>
}
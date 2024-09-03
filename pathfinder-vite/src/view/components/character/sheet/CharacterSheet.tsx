import {createContext, useContext} from "react";
import CharacterAtLevelDebugView from "./CharacterAtLevelDebugView";
import Section from "./common/Section";
import AbilityScoreSection from "./sections/AbilityScoreSection";
import ArmorSection from "./sections/ArmorSection";
import BabSection from "./sections/BabSection";
import CharacterInfoSection from "./sections/CharacterInfoSection";
import CombatManeuverSection from "./sections/CombatManeuverSection";
import HealthSection from "./sections/HealthSection";
import InitiativeSection from "./sections/InitiativeSection";
import LanguagesSection from "./sections/LanguagesSection";
import SavingThrowsSection from "./sections/SavingThrowsSection";
import SkillsSection from "./sections/SkillsSection";
import SpeedSection from "./sections/SpeedSection";
import SpellResistanceSection from "./sections/SpellResistanceSection";
import WeaponSection from "./sections/WeaponSection";
import PrintablePage from "../../PrintablePage";
import styles from "./CharacterSheet.module.css";
import CharacterAtLevel from "../../../../data/v8/CharacterAtLevel.ts";
import Database from "../../../../data/v8/Database.ts";
import ACItemsSection from "@/view/components/character/sheet/sections/ACItemsSection.tsx";

type CharacterSheetContextValues = {
  characterAtLevel: CharacterAtLevel;
  database: Database;
}

const CharacterSheetContext = createContext<CharacterSheetContextValues|undefined>(undefined);

function useCharacterSheetContext(): CharacterSheetContextValues {
  const context = useContext(CharacterSheetContext);
  if (context === undefined) {
    throw Error("Must be used in a provider");
  }
  return context;
}

export function useCharacterAtLevel(): CharacterAtLevel {
  return useCharacterSheetContext().characterAtLevel;
}

export default function CharacterSheet(values: CharacterSheetContextValues) {
  return <Section.Column>
    <CharacterSheetContext.Provider value={values}>
      <PrintablePage className={styles.sheet}>
        <Section.Row>
          <CharacterInfoSection className={styles.characterInfo} />
        </Section.Row>
        <Section.Row>
          <Section.Column className={styles.leftColumn}>
            <Section.Row className={"align-items-start"}>
              <AbilityScoreSection className={styles.abilityScores} />
              <Section.Column>
                <HealthSection className={styles.health} />
                <InitiativeSection className={styles.initiative} />
              </Section.Column>
            </Section.Row>
            <Section.Column>
              <ArmorSection className={styles.armor} />
              <SavingThrowsSection className={styles.savingThrows} />
              <Section.Row>
                <BabSection className={styles.bab} />
                <SpellResistanceSection className={styles.spellResistance} />
              </Section.Row>
              <CombatManeuverSection className={styles.combatManeuver} />

              <WeaponSection />
              <WeaponSection />
              <WeaponSection />
              <WeaponSection />
            </Section.Column>
          </Section.Column>
          <Section.Column className={styles.rightColumn}>
            <SpeedSection />
            <SkillsSection />
            <LanguagesSection />
          </Section.Column>
        </Section.Row>
      </PrintablePage>
      <PrintablePage className={styles.sheet}>
        <ACItemsSection />
      </PrintablePage>
      <PrintablePage style={{ display: "flex" }}>
        <CharacterAtLevelDebugView />
      </PrintablePage>
    </CharacterSheetContext.Provider>
  </Section.Column>
}
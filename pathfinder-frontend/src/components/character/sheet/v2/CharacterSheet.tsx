import {createContext, useContext} from "react";
import {CharacterClassDatabase} from "../../../../database/v2/ClassDatabase";
import {RaceDatabase} from "../../../../database/v2/RaceDatabase";
import {CharacterAtLevel} from "../../../../model/character/CharacterAtLevel";
import CharacterAtLevelDebugView from "./CharacterAtLevelDebugView";
import styles from "./CharacterSheet.module.scss";
import Section from "./Section";
import AbilityScoreSection from "./sections/AbilityScoreSection";
import ArmorSection from "./sections/ArmorSection";
import CharacterInfoSection from "./sections/CharacterInfoSection";
import HealthSection from "./sections/HealthSection";
import InitiativeSection from "./sections/InitiativeSection";
import SavingThrowsSection from "./sections/SavingThrowsSection";
import SkillsSection from "./sections/SkillsSection";

type CharacterSheetContextValues = {
  characterAtLevel: CharacterAtLevel;
  classDatabase: CharacterClassDatabase;
  raceDatabase: RaceDatabase;
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

export function useClassDatabase(): CharacterClassDatabase {
  return useCharacterSheetContext().classDatabase;
}

export function useRaceDatabase(): RaceDatabase {
  return useCharacterSheetContext().raceDatabase;
}

export default function CharacterSheet(values: CharacterSheetContextValues) {
  return <Section.Column className={styles.page}>
    <CharacterSheetContext.Provider value={values}>
      <Section.Row>
        <CharacterInfoSection className={styles.characterInfo} />
      </Section.Row>
      <Section.Row>
        <Section.Column className={"w-50 align-self-start"}>
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
          </Section.Column>
        </Section.Column>
        <Section.Column className={"w-50"}>
          <SkillsSection />
        </Section.Column>
      </Section.Row>
      <CharacterAtLevelDebugView />
    </CharacterSheetContext.Provider>
  </Section.Column>
}
import {HTMLAttributes} from "react";
import * as CharacterData from "../data/CharacterData.tsx";
import Section from "../common/Section.tsx";
import UnderlinedValue from "../common/UnderlinedValue.tsx";
import styles from "./CharacterInfoSection.module.scss";
import {classNames} from "@/utils/classNames.ts";

export default function CharacterInfoSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Section.Column className="header-gap">
      <Section.Row className={styles.row}>
        <UnderlinedValue label="Character Name" className={styles.characterName}>
          <CharacterData.CharacterName />
        </UnderlinedValue>
        <UnderlinedValue label="Alignment" className={styles.alignment}>
          <CharacterData.Alignment />
        </UnderlinedValue>
        <UnderlinedValue label="Player" className={styles.playerName}/>
      </Section.Row>
      <Section.Row className={styles.row}>
        <UnderlinedValue label="Character Level" className={styles.characterLevel}>
          <CharacterData.CharacterLevel />
        </UnderlinedValue>
        <UnderlinedValue label="Deity" className={styles.deity}>
          <CharacterData.Deity />
        </UnderlinedValue>
        <UnderlinedValue label="Homeland" className={styles.homeland}>
          <CharacterData.Homeland />
        </UnderlinedValue>
      </Section.Row>
      <Section.Row className={styles.row}>
        <UnderlinedValue label="Race" className={styles.race}>
          <CharacterData.Race />
        </UnderlinedValue>
        <UnderlinedValue label="Size" className={styles.size}>
          <CharacterData.Size />
        </UnderlinedValue>
        <UnderlinedValue label="Gender" className={styles.gender}>
          <CharacterData.Gender />
        </UnderlinedValue>
        <UnderlinedValue label="Age" className={styles.age}>
          <CharacterData.Age />
        </UnderlinedValue>
        <UnderlinedValue label="Height" className={styles.height}>
          <CharacterData.Height />
        </UnderlinedValue>
        <UnderlinedValue label="Weight" className={styles.weight}>
          <CharacterData.Weight />
        </UnderlinedValue>
        <UnderlinedValue label="Hair" className={styles.hair}>
          <CharacterData.Hair />
        </UnderlinedValue>
        <UnderlinedValue label="Eyes" className={styles.eyes}>
          <CharacterData.Eyes />
        </UnderlinedValue>
      </Section.Row>
    </Section.Column>
  </Section>
}
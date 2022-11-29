import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import * as CharacterData from "../common/CharacterData";
import Section from "../common/Section";
import UnderlinedValue from "../common/UnderlinedValue";
import styles from "./CharacterInfoSection.module.scss";

export default function CharacterInfoSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
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
        <UnderlinedValue label="Deity" className={styles.deity}/>
        <UnderlinedValue label="Homeland" className={styles.homeland}/>
      </Section.Row>
      <Section.Row className={styles.row}>
        <UnderlinedValue label="Race" className={styles.race}>
          <CharacterData.Race />
        </UnderlinedValue>
        <UnderlinedValue label="Size" className={styles.size}>
          <CharacterData.Size />
        </UnderlinedValue>
        <UnderlinedValue label="Gender" className={styles.gender}/>
        <UnderlinedValue label="Age" className={styles.age}/>
        <UnderlinedValue label="Height" className={styles.height}/>
        <UnderlinedValue label="Weight" className={styles.weight}/>
        <UnderlinedValue label="Hair" className={styles.hair}/>
        <UnderlinedValue label="Eyes" className={styles.eyes}/>
      </Section.Row>
    </Section.Column>
  </Section>
}
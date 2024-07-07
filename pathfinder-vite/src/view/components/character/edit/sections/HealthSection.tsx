import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../data/CharacterData.tsx";
import Header from "../common/Header.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./HealthSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function HealthSection({className, ...divProps}: HTMLAttributes<HTMLDivElement>) {
  return <Section title="Health" className={classNames([styles.component, className])} {...divProps}>
    <section className={styles.section}>
      <Label className={styles.label}>HP</Label>
      <BoxedValue className={styles.totalHealth} label="Total">
        <CharacterData.TotalHealth/>
      </BoxedValue>
      <BoxedValue className={styles.dr} label="DR"/>
      <Header className={styles.currentHpHeader}>Current HP</Header>
      <BoxedValue className={styles.currentHp}>
        <CharacterData.CurrentHealth/>
      </BoxedValue>
      <Header className={styles.nonlethalHeader}>Nonlethal Damage</Header>
      <BoxedValue className={styles.nonlethal}>
        <CharacterData.NonlethalDamage/>
      </BoxedValue>
    </section>
  </Section>
}
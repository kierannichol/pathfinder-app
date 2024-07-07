import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../data/CharacterData.tsx";
import Header from "../common/Header.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./SpeedSection.module.css";
import {classNames} from "@/utils/classNames.ts";

export default function SpeedSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
        <Label className={styles.speedLabel}>Speed</Label>
        <BoxedValue className={styles.baseSpeedBox}>
          <CharacterData.Speed.Base />
        </BoxedValue>
        <BoxedValue className={styles.armorSpeedBox}>
          <CharacterData.Speed.Armor />
        </BoxedValue>

        <Header className={classNames([styles.label, styles.header])}></Header>
        <Header className={classNames([styles.value, styles.header])}>Base Speed</Header>
        <Header className={classNames([styles.value, styles.header])}>With Armor</Header>

        <BoxedValue className={styles.valueFly}>
          <CharacterData.Speed.Fly />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Speed.Swim />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Speed.Climb />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Speed.Burrow />
        </BoxedValue>

        <Header className={classNames([styles.valueFly, styles.header])}>Fly</Header>
        <Header className={classNames([styles.value, styles.header])}>Swim</Header>
        <Header className={classNames([styles.value, styles.header])}>Climb</Header>
        <Header className={classNames([styles.value, styles.header])}>Burrow</Header>

      <BoxedValue className={styles.modifiers} label="Temp Modifier"></BoxedValue>

  </Section>
}
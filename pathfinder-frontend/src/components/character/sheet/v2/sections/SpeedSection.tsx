import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../BoxedValue";
import * as CharacterData from "../CharacterData";
import Header from "../Header";
import Label from "../Label";
import Section from "../Section";
import styles from "./SpeedSection.module.scss";

export default function SpeedSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Section.Row>
        <Label className={styles.label}>Speed</Label>
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={'speed:base'} />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={'speed:armor'} />
        </BoxedValue>
      </Section.Row>
      <Section.Row>
        <Header className={classNames(styles.label, styles.header)}></Header>
        <Header className={classNames(styles.value, styles.header)}>Base Speed</Header>
        <Header className={classNames(styles.value, styles.header)}>With Armor</Header>
      </Section.Row>
      <Section.Row>
        <BoxedValue className={styles.valueFly}>
          <CharacterData.Value dataKey={'speed:fly'} />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={'speed:swim'} />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={'speed:climb'} />
        </BoxedValue>
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={'speed:burrow'} />
        </BoxedValue>
      </Section.Row>
      <Section.Row>
        <Header className={classNames(styles.valueFly, styles.header)}>Fly</Header>
        <Header className={classNames(styles.value, styles.header)}>Swim</Header>
        <Header className={classNames(styles.value, styles.header)}>Climb</Header>
        <Header className={classNames(styles.value, styles.header)}>Burrow</Header>
      </Section.Row>
    </Section.Column>
    <Section.Column>
      <BoxedValue className={styles.modifiers} label="Temp Modifier"></BoxedValue>
    </Section.Column>
  </Section>
}
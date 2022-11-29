import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../common/BoxedValue";
import * as CharacterData from "../common/CharacterData";
import Header from "../common/Header";
import Label from "../common/Label";
import Section from "../common/Section";
import styles from "./HealthSection.module.scss";

export default function HealthSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Section.Row className="no-grow">
        <Label className={styles.label}>HP</Label>
        <BoxedValue className={styles.totalHealth} label="Total">
          <CharacterData.TotalHealth/>
        </BoxedValue>
        <BoxedValue className={styles.dr} label="DR"/>
      </Section.Row>
      <Section.Column className="flex-grow-1">
        <Section.Column className="no-gap flex-grow-1">
          <Header className={styles.header}>Current HP</Header>
          <BoxedValue className={styles.currentHp} />
        </Section.Column>
        <Section.Column className="no-gap no-grow">
          <Header className={styles.header}>Nonlethal Damage</Header>
          <BoxedValue />
        </Section.Column>
      </Section.Column>
    </Section.Column>
  </Section>
}
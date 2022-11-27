import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../BoxedValue";
import Header from "../Header";
import Label from "../Label";
import Section from "../Section";
import styles from "./InitiativeSection.module.scss";

export default function InitiativeSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Label className={styles.label}>Initiative</Label>
    <Section.Row>
      <Section.Row>
        <Section.Column className="no-gap">
          <BoxedValue className={styles.total} />
          <Header>Total</Header>
        </Section.Column>
        <Section.Column className="no-gap">
          <BoxedValue className={styles.dexModifier} />
          <Header>DEX Modifier</Header>
        </Section.Column>
        <Section.Column className="no-gap">
          <BoxedValue className={styles.miscModifier} />
          <Header>Misc Modifier</Header>
        </Section.Column>
      </Section.Row>
    </Section.Row>
  </Section>
}
import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../common/BoxedValue";
import * as CharacterData from "../common/CharacterData";
import Label from "../common/Label";
import Section from "../common/Section";
import styles from "./BabSection.module.scss";

export default function BabSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Label className={styles.label}>Base Attack Bonus</Label>
    <BoxedValue className={styles.value}>
      <CharacterData.BaseAttackBonus modifier={true} />
    </BoxedValue>
  </Section>
}
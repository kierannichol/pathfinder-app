import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../data/CharacterData.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./BabSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function BabSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Label className={styles.label}>Base Attack Bonus</Label>
    <BoxedValue className={styles.value}>
      <CharacterData.BaseAttackBonus modifier={true} />
    </BoxedValue>
  </Section>
}
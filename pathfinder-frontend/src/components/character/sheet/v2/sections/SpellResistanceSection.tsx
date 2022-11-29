import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../common/BoxedValue";
import * as CharacterData from "../common/CharacterData";
import Label from "../common/Label";
import Section from "../common/Section";
import styles from "./SpellResistanceSection.module.scss";

export default function SpellResistanceSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Label className={styles.label}>Spell Resistance</Label>
    <BoxedValue className={styles.value}>
      <CharacterData.Value dataKey="sr" />
    </BoxedValue>
  </Section>
}
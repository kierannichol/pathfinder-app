import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../common/CharacterData.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./SpellResistanceSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function SpellResistanceSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Label className={styles.label}>Spell Resistance</Label>
    <BoxedValue className={styles.value}>
      <CharacterData.Value dataKey="sr" />
    </BoxedValue>
  </Section>
}
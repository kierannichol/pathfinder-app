import {HTMLAttributes} from "react";
import * as CharacterData from "../data/CharacterData.tsx";
import Label from "../common/Label.tsx";
import Operator from "../common/Operator.tsx";
import Section from "../common/Section.tsx";
import styles from "./InitiativeSection.module.css";
import {classNames} from "@/utils/classNames.ts";
import BoxedValue from "@/view/components/character/edit/common/BoxedValue.tsx";

export default function InitiativeSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Label className={styles.label}>Initiative</Label>
    <BoxedValue className={styles.value1}>
      <CharacterData.Initiative />
    </BoxedValue>
    <Operator className={styles.operator1}>=</Operator>
    <BoxedValue className={styles.value2}>
      <CharacterData.DexterityMod />
    </BoxedValue>
    <Operator className={styles.operator2}>+</Operator>
    <BoxedValue className={styles.value3}>
      <CharacterData.InitiativeMisc />
    </BoxedValue>
  </Section>
}
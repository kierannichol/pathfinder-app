import {HTMLAttributes} from "react";
import CaptionedBoxedValue from "../common/CaptionedBoxedValue.tsx";
import * as CharacterData from "../common/CharacterData.tsx";
import Label from "../common/Label.tsx";
import Operator from "../common/Operator.tsx";
import Section from "../common/Section.tsx";
import styles from "./InitiativeSection.module.scss";
import {classNames} from "@/utils/classNames.ts";

export default function InitiativeSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Label className={styles.label}>Initiative</Label>
    <Section.Row>
      <Section.Row className={"align-items-start"}>
        <CaptionedBoxedValue captionBottom="Total" className={styles.value}>
          <CharacterData.Initiative />
        </CaptionedBoxedValue>
        <Operator>=</Operator>
        <CaptionedBoxedValue captionBottom="DEX Modifier" className={styles.value}>
          <CharacterData.DexterityMod />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Misc Modifier" className={styles.value}>
          <CharacterData.Value dataKey="initiative:misc" />
        </CaptionedBoxedValue>
      </Section.Row>
    </Section.Row>
  </Section>
}
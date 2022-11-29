import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import CaptionedBoxedValue from "../common/CaptionedBoxedValue";
import * as CharacterData from "../common/CharacterData";
import Label from "../common/Label";
import Operator from "../common/Operator";
import Section from "../common/Section";
import styles from "./InitiativeSection.module.scss";

export default function InitiativeSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
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
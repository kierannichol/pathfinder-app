import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import CaptionedBoxedValue from "../common/CaptionedBoxedValue.tsx";
import * as CharacterData from "../common/CharacterData.tsx";
import {CharacterValue} from "../common/CharacterData.tsx";
import Label from "../common/Label.tsx";
import Operator from "../common/Operator.tsx";
import PlainValue from "../common/PlainValue.tsx";
import Section from "../common/Section.tsx";
import styles from "./ArmorSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function ArmorSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Section.Column>
      <Section.Row className="align-items-start">
        <Label className={styles.label}>AC</Label>
        <CaptionedBoxedValue captionBottom="Total" className={styles.value}>
          <CharacterValue dataKey={"ac"} />
        </CaptionedBoxedValue>
        <Operator>=</Operator>
        <PlainValue className={styles.scalar}>10</PlainValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Armor Bonus" className={styles.value}>
          <CharacterValue dataKey={"ac:armor"} fallback={"0"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Shield Bonus" className={styles.value}>
          <CharacterValue dataKey={"ac:shield"} fallback={"0"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Dexterity Modifier" className={styles.value}>
          <CharacterData.DexterityMod />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Size Modifier" className={styles.value}>
          <CharacterData.SizeMod />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Natural Armor" className={styles.value}>
          <CharacterValue dataKey={"ac:natural"} fallback={"0"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Deflection Bonus" className={styles.value}>
          <CharacterValue dataKey={"ac:deflection"} fallback={"0"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Misc Modifier" className={styles.value}>
          <CharacterValue dataKey={"ac:misc"} />
        </CaptionedBoxedValue>
      </Section.Row>
      <Section.Row>
        <Label className={styles.label}>Touch</Label>
        <BoxedValue className={styles.touchValue}>
          <CharacterValue dataKey={"ac:touch"} />
        </BoxedValue>
        <Label className={styles.label}>Flat-Footed</Label>
        <BoxedValue className={styles.flatFootedValue}>
          <CharacterValue dataKey={"ac:flat"} />
        </BoxedValue>
        <BoxedValue className={styles.modifiersValue} label="Modifiers"/>
      </Section.Row>
    </Section.Column>
  </Section>
}
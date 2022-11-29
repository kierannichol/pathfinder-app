import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../common/BoxedValue";
import CaptionedBoxedValue from "../common/CaptionedBoxedValue";
import * as CharacterData from "../common/CharacterData";
import {CharacterValue} from "../common/CharacterData";
import Label from "../common/Label";
import Operator from "../common/Operator";
import PlainValue from "../common/PlainValue";
import Section from "../common/Section";
import styles from "./ArmorSection.module.scss";

export default function ArmorSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
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
          <CharacterValue dataKey={"ac:armor"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Shield Bonus" className={styles.value}>
          <CharacterValue dataKey={"ac:shield"} />
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
          <CharacterValue dataKey={"ac:natural"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Deflection Bonus" className={styles.value}>
          <CharacterValue dataKey={"ac:deflection"} />
        </CaptionedBoxedValue>
        <Operator>+</Operator>
        <CaptionedBoxedValue captionBottom="Misc Modifier" className={styles.value}>
          <CharacterValue dataKey={"ac:misc"} />
        </CaptionedBoxedValue>
      </Section.Row>
      <Section.Row>
        <Label className={styles.label}>Touch</Label>
        <BoxedValue className={styles.touchValue}/>
        <Label className={styles.label}>Flat-Footed</Label>
        <BoxedValue className={styles.flatFootedValue}/>
        <BoxedValue className={styles.modifiersValue} label="Modifiers"/>
      </Section.Row>
    </Section.Column>
  </Section>
}
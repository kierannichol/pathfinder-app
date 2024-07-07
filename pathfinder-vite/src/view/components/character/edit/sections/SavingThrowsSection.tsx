import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../data/CharacterData.tsx";
import Header from "../common/Header.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./SavingThrowsSection.module.scss";
import {classNames} from "@/utils/classNames.ts";

export default function SavingThrowsSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>

    <Section.Row>
      <Section.Column>
        <Section.Row>
          <Header className={classNames([styles.label, styles.header])}>Saving Throws</Header>
          <Header className={classNames([styles.value, styles.header])}>Total</Header>
          <div className={classNames([styles.operator, styles.headerDivider])}>=</div>
          <Header className={classNames([styles.value, styles.header])}>Base Save</Header>
          <div className={classNames([styles.operator, styles.headerDivider])}>+</div>
          <Header className={classNames([styles.value, styles.header])}>Ability Modifier</Header>
          <div className={classNames([styles.operator, styles.headerDivider])}>+</div>
          <Header className={classNames([styles.value, styles.header])}>Magic Modifier</Header>
          <div className={classNames([styles.operator, styles.headerDivider])}>+</div>
          <Header className={classNames([styles.value, styles.header])}>Misc Modifier</Header>
          <div className={classNames([styles.operator, styles.headerDivider])}>+</div>
          <Header className={classNames([styles.value, styles.header])}>Temporary Modifier</Header>
        </Section.Row>
        <Section.Row>
          <Label className={styles.label}>Fortitude</Label>
          <BoxedValue className={styles.value}>
            <CharacterData.FortSave fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.FortBase fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.ConstitutionMod fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
        </Section.Row>
        <Section.Row>
          <Label className={styles.label}>Reflex</Label>
          <BoxedValue className={styles.value}>
            <CharacterData.ReflexSave fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.ReflexBase fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.DexterityMod fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
        </Section.Row>
        <Section.Row>
          <Label className={styles.label}>Will</Label>
          <BoxedValue className={styles.value}>
            <CharacterData.WillSave fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.WillBase fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.WisdomMod fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}></BoxedValue>
        </Section.Row>
      </Section.Column>
      <Section.Column>
        <BoxedValue className={styles.modifiersValue} label="Modifiers" />
      </Section.Column>
    </Section.Row>
  </Section>
}
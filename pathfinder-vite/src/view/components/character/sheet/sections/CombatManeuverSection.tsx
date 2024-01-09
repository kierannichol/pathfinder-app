import {HTMLAttributes} from "react";
import BoxedValue from "../common/BoxedValue.tsx";
import * as CharacterData from "../common/CharacterData.tsx";
import Header from "../common/Header.tsx";
import Label from "../common/Label.tsx";
import Operator from "../common/Operator.tsx";
import PlainValue from "../common/PlainValue.tsx";
import Section from "../common/Section.tsx";
import styles from "./CombatManeuverSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function CombatManeuverSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>
    <Section.Column>

      <Section.Row>
        <Section.Column className="header-gap flex-grow-0" style={{ marginBottom: "0.5em" }}>
          <Section.Row>
            <Label className={styles.label}>CMB</Label>
            <BoxedValue className={styles.value}>
              <CharacterData.CMB />
            </BoxedValue>
            <Operator>=</Operator>
            <BoxedValue className={styles.value}>
              <CharacterData.BaseAttackBonus />
            </BoxedValue>
            <Operator>+</Operator>
            <BoxedValue className={styles.value}>
              <CharacterData.StrengthMod />
            </BoxedValue>
            <Operator>+</Operator>
            <BoxedValue className={styles.value}>
              <CharacterData.SizeMod />
            </BoxedValue>
          </Section.Row>
          <Section.Row className={styles.headerRow}>
            <Header className={classNames([styles.label, styles.header])}></Header>
            <Header className={classNames([styles.value, styles.header])}>Total</Header>
            <Operator className={styles.headerOperator}>=</Operator>
            <Header className={classNames([styles.value, styles.header])}>Base Attack Bonus</Header>
            <Operator className={styles.headerOperator}>=</Operator>
            <Header className={classNames([styles.value, styles.header])}>Strength Modifier</Header>
            <Operator className={styles.headerOperator}>=</Operator>
            <Header className={classNames([styles.value, styles.header])}>Size Modifier</Header>
          </Section.Row>
        </Section.Column>
        <Section.Column className="flex-fill">
          <BoxedValue className={styles.modifiers} label="Modifiers"></BoxedValue>
        </Section.Column>
      </Section.Row>

      <Section.Column className="header-gap">
        <Section.Row>
          <Label className={styles.label}>CMD</Label>
          <BoxedValue className={styles.value}>
            <CharacterData.CMD />
          </BoxedValue>
          <Operator>=</Operator>
          <BoxedValue className={styles.value}>
            <CharacterData.BaseAttackBonus />
          </BoxedValue>
          <Operator>+</Operator>
          <BoxedValue className={styles.value}>
            <CharacterData.StrengthMod />
          </BoxedValue>
          <Operator>+</Operator>
          <BoxedValue className={styles.value}>
            <CharacterData.DexterityMod />
          </BoxedValue>
          <Operator>+</Operator>
          <BoxedValue className={styles.value}>
            <CharacterData.SizeMod />
          </BoxedValue>
          <Operator>+</Operator>
          <PlainValue>10</PlainValue>
        </Section.Row>
        <Section.Row className={styles.headerRow}>
          <Header className={classNames([styles.label, styles.header])}></Header>
          <Header className={classNames([styles.value, styles.header])}>Total</Header>
          <Operator className={styles.headerOperator}>=</Operator>
          <Header className={classNames([styles.value, styles.header])}>Base Attack Bonus</Header>
          <Operator className={styles.headerOperator}>+</Operator>
          <Header className={classNames([styles.value, styles.header])}>Strength Modifier</Header>
          <Operator className={styles.headerOperator}>+</Operator>
          <Header className={classNames([styles.value, styles.header])}>Dexterity Modifier</Header>
          <Operator className={styles.headerOperator}>+</Operator>
          <Header className={classNames([styles.value, styles.header])}>Size Modifier</Header>
          <Operator className={styles.headerOperator}>+</Operator>
          <PlainValue className={styles.headerOperator}>10</PlainValue>
        </Section.Row>
      </Section.Column>

    </Section.Column>
  </Section>
}
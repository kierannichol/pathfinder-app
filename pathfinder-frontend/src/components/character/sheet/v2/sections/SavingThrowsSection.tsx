import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../BoxedValue";
import * as CharacterData from "../CharacterData";
import Header from "../Header";
import Label from "../Label";
import Section from "../Section";
import styles from "./SavingThrowsSection.module.scss";

export default function SavingThrowsSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>

    <Section.Row>
      <Section.Column>

      </Section.Column>
      <Section.Column>

      </Section.Column>
    </Section.Row>

    {/*<Section.Column>*/}
    {/*  <Section.Column className="half-gap">*/}
    {/*    <Section.Row style={{ display: "none" }}>*/}
    {/*      <Header className={styles.header}>Saving Throws</Header>*/}
    {/*      <Header className={styles.header}>Total</Header>*/}
    {/*      <Header className={styles.header}>Base Save</Header>*/}
    {/*      <Header className={styles.header}>Ability Modifier</Header>*/}
    {/*      <Header className={styles.header}>Magic Modifier</Header>*/}
    {/*      <Header className={styles.header}>Misc Modifier</Header>*/}
    {/*      <Header className={styles.header}>Temporary Modifier</Header>*/}
    {/*    </Section.Row>*/}
    {/*    <SavingThrowRow label="Fortitude" keyPrefix="fort" abilityModifierKey="con_mod" showHeaders={true} />*/}
    {/*  </Section.Column>*/}
    {/*  <SavingThrowRow label="Reflex" keyPrefix="ref" abilityModifierKey="dex_mod" showHeaders={false} />*/}
    {/*  <SavingThrowRow label="Will" keyPrefix="will" abilityModifierKey="wis_mod" showHeaders={false} />*/}
    {/*</Section.Column>*/}
    {/*<Section.Column>*/}
    {/*  <BoxedValue className={styles.modifiersValue} label="Modifiers" />*/}
    {/*</Section.Column>*/}
  </Section>
}

interface SavingThrowRowProps {
  label: string;
  keyPrefix: string;
  abilityModifierKey: string;
  showHeaders: boolean;
}

function SavingThrowRow({ label, keyPrefix, abilityModifierKey, showHeaders }: SavingThrowRowProps) {
  return <Section.Row className="align-items-end">
    <Section.Column className={classNames("half-gap", styles.label)}>
      {showHeaders && <Header>Saving Throws</Header>}
      <Label>{label}</Label>
    </Section.Column>
    <Section.Row className="half-gap align-items-end">
      <Section.Column className={classNames("half-gap", styles.value)}>
        {showHeaders && <Header>Total</Header>}
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={`${keyPrefix}_save`} fallback="0" />
        </BoxedValue>
      </Section.Column>
      <div className={styles.operator}>=</div>
      <Section.Column className={classNames("half-gap", styles.value)}>
        {showHeaders && <Header>Base Save</Header>}
        <BoxedValue className={styles.value}>
          <CharacterData.Value dataKey={`${keyPrefix}:base`} fallback="0" />
        </BoxedValue>
      </Section.Column>
      <div className={styles.operator}>+</div>
      <BoxedValue className={styles.value}>
        <CharacterData.Value dataKey={abilityModifierKey} fallback="0" />
      </BoxedValue>
      <div className={styles.operator}>+</div>
      <BoxedValue className={styles.value}></BoxedValue>
      <div className={styles.operator}>+</div>
      <BoxedValue className={styles.value}></BoxedValue>
      <div className={styles.operator}>+</div>
      <BoxedValue className={styles.value}></BoxedValue>
    </Section.Row>
  </Section.Row>
}
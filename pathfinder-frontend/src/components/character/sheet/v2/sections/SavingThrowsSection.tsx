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
        <Section.Row>
          <Header className={classNames(styles.label, styles.header)}>Saving Throws</Header>
          <Header className={classNames(styles.value, styles.header)}>Total</Header>
          <div className={classNames(styles.operator, styles.headerDivider)}>=</div>
          <Header className={classNames(styles.value, styles.header)}>Base Save</Header>
          <div className={classNames(styles.operator, styles.headerDivider)}>+</div>
          <Header className={classNames(styles.value, styles.header)}>Ability Modifier</Header>
          <div className={classNames(styles.operator, styles.headerDivider)}>+</div>
          <Header className={classNames(styles.value, styles.header)}>Magic Modifier</Header>
          <div className={classNames(styles.operator, styles.headerDivider)}>+</div>
          <Header className={classNames(styles.value, styles.header)}>Misc Modifier</Header>
          <div className={classNames(styles.operator, styles.headerDivider)}>+</div>
          <Header className={classNames(styles.value, styles.header)}>Temporary Modifier</Header>
        </Section.Row>
        <Section.Row>
          <Label className={styles.label}>Fortitude</Label>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'fort_save'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'fort:base'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'con_mod'} fallback="0" />
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
            <CharacterData.Value dataKey={'ref_save'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'ref:base'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'dex_mod'} fallback="0" />
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
            <CharacterData.Value dataKey={'will_save'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>=</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'will:base'} fallback="0" />
          </BoxedValue>
          <div className={styles.operator}>+</div>
          <BoxedValue className={styles.value}>
            <CharacterData.Value dataKey={'wis_mod'} fallback="0" />
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
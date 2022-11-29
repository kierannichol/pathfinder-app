import {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import classNames from "../../../../../app/classNames";
import {useCharacterAtLevel} from "../CharacterSheet";
import BoxedValue from "../common/BoxedValue";
import Header from "../common/Header";
import Label from "../common/Label";
import Section from "../common/Section";
import styles from "./AbilityScoreSection.module.scss";

export default function AbilityScoreSection({ className, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Section.Column className="header-gap">
        <Section.Row>
          <Header className={styles.header}>Ability Name</Header>
          <Header className={styles.header}>Ability Score</Header>
          <Header className={styles.header}>Ability Modifier</Header>
          <Header className={styles.header}>Temp Adjustment</Header>
          <Header className={styles.header}>Temp Modifier</Header>
        </Section.Row>
        <AbilityScoreRow ability="str" />
      </Section.Column>
      <AbilityScoreRow ability="dex" />
      <AbilityScoreRow ability="con" />
      <AbilityScoreRow ability="int" />
      <AbilityScoreRow ability="wis" />
      <AbilityScoreRow ability="cha" />
    </Section.Column>
  </Section>
}

interface AbilityScoreRowProps {
  ability: string;
}

function AbilityScoreRow({ ability }: AbilityScoreRowProps) {
  const characterAtLevel = useCharacterAtLevel();
  const abilityScore = useMemo(() => characterAtLevel.get(`${ability}_score`)?.asText() ?? "", [ability, characterAtLevel]);
  const abilityModifier = useMemo(() => characterAtLevel.get(`${ability}_mod`)?.asText() ?? "", [ability, characterAtLevel]);

  return <Section.Row>
    <Label className={styles.label}>{ability}</Label>
    <BoxedValue className={styles.value}>{abilityScore}</BoxedValue>
    <BoxedValue className={styles.value}>{abilityModifier}</BoxedValue>
    <BoxedValue className={styles.value}></BoxedValue>
    <BoxedValue className={styles.value}></BoxedValue>
  </Section.Row>
}
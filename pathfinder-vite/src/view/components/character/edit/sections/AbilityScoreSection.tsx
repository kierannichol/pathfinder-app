import React, {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import BoxedValue from "../common/BoxedValue.tsx";
import Header from "../common/Header.tsx";
import Label from "../common/Label.tsx";
import Section from "../common/Section.tsx";
import styles from "./AbilityScoreSection.module.scss";
import {AbilityScore, AbilityTempAdjustment,} from "@/view/components/character/edit/data/CharacterData.tsx";
import {Formula} from "@kierannichol/formula-js";

export default function AbilityScoreSection({ className, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <Section title="Ability Scores" className={className} {...divProps}>
    <section className={styles.section}>
      <Header className={styles.header}>Ability Name</Header>
      <Header className={styles.header}>Ability Score</Header>
      <Header className={styles.header}>Ability Modifier</Header>
      <Header className={styles.header}>Base Score</Header>
      <Header className={styles.header}>Ability Damage</Header>
      <Header className={styles.header}>Ability Drain</Header>
      <Header className={styles.header}>Temp Adjustment</Header>
      <AbilityScoreRow ability="str" />
      <AbilityScoreRow ability="dex" />
      <AbilityScoreRow ability="con" />
      <AbilityScoreRow ability="int" />
      <AbilityScoreRow ability="wis" />
      <AbilityScoreRow ability="cha" />
    </section>
  </Section>
}

interface AbilityScoreRowProps {
  ability: string;
}

function AbilityScoreRow({ ability }: AbilityScoreRowProps) {
  const characterAtLevel = useCharacterAtLevel();
  const abilityModifier = useMemo(() => Formula.parse(`signed(@${ability}_mod)`).resolve(characterAtLevel)?.asText() ?? "", [ability, characterAtLevel]);

  return <>
    <Label className={styles.label}>{ability}</Label>
    <BoxedValue className={styles.value}>
      <AbilityScore.Final dataKey={ability} />
    </BoxedValue>
    <BoxedValue className={styles.value}>{abilityModifier}</BoxedValue>
    <BoxedValue className={styles.value}>
      <AbilityScore.Base dataKey={ability} />
    </BoxedValue>
    <BoxedValue className={styles.value}>
      <AbilityScore.Damage dataKey={ability} />
    </BoxedValue>
    <BoxedValue className={styles.value}>
      <AbilityScore.Drain dataKey={ability} />
    </BoxedValue>
    <BoxedValue className={styles.value}>
      <AbilityTempAdjustment ability={ability} />
    </BoxedValue>
  </>
}
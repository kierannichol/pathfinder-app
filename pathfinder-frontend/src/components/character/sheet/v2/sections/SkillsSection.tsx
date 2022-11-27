import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import SkillDatabase from "../../../../../database/SkillDatabase";
import {useCharacterAtLevel} from "../CharacterSheet";
import Label from "../Label";
import Section from "../Section";
import UnderlinedValue from "../UnderlinedValue";
import styles from "./SkillsSection.module.scss";

export default function SkillsSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  const characterAtLevel = useCharacterAtLevel();
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Label className={styles.label}>Skills</Label>
      {SkillDatabase.all.map(skill => <Section.Row className={styles.skillRow}>
        <div className={styles.skillName}>{skill.name}</div>
        <UnderlinedValue className={styles.value}>{(characterAtLevel.get(skill.id)?.asNumber() ?? 0) + (characterAtLevel.get(skill.keyAbility + '_mod')?.asNumber() ?? 0)}</UnderlinedValue>
        <div className={styles.operator}>= <span className={styles.abilityName}>{skill.keyAbility}</span></div>
        <UnderlinedValue className={styles.value}>{characterAtLevel.get(skill.keyAbility + '_mod')?.asText()}</UnderlinedValue>
        <div className={styles.operator}>+</div>
        <UnderlinedValue className={styles.value}>{characterAtLevel.get(skill.id)?.asNumber()}</UnderlinedValue>
        <div className={styles.operator}>+</div>
        <UnderlinedValue className={styles.value}></UnderlinedValue>
      </Section.Row>)}
    </Section.Column>
  </Section>
}
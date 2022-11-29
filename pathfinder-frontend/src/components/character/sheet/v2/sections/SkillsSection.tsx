import {HTMLAttributes, useMemo} from "react";
import classNames from "../../../../../app/classNames";
import SkillDatabase from "../../../../../database/SkillDatabase";
import {CharacterAtLevel} from "../../../../../model/character/CharacterAtLevel";
import Skill from "../../../../../model/character/Skill";
import {useCharacterAtLevel} from "../CharacterSheet";
import Label from "../common/Label";
import Section from "../common/Section";
import UnderlinedValue from "../common/UnderlinedValue";
import styles from "./SkillsSection.module.scss";

export default function SkillsSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  const characterAtLevel = useCharacterAtLevel();
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Label className={styles.label}>Skills</Label>
      {SkillDatabase.all.map(skill => <Section.Row className={styles.skillRow}>
        <ClassTrainedBox skill={skill} characterAtLevel={characterAtLevel} />
        <div className={styles.skillName}>{skill.name}{skill.untrained ? '' : '*'}</div>
        <UnderlinedValue className={styles.value}>{(characterAtLevel.get(skill.id)?.asNumber() ?? 0) + (characterAtLevel.get(skill.keyAbility + '_mod')?.asNumber() ?? 0)}</UnderlinedValue>
        <div className={styles.operator}>= <span className={styles.abilityName}>{skill.keyAbility}</span></div>
        <UnderlinedValue className={styles.value}>{characterAtLevel.get(skill.keyAbility + '_mod')?.asText()}</UnderlinedValue>
        <div className={styles.operator}>+</div>
        <UnderlinedValue className={styles.value}>{characterAtLevel.get(skill.id)?.asNumber()}</UnderlinedValue>
        <div className={styles.operator}>+</div>
        <UnderlinedValue className={styles.value}></UnderlinedValue>
      </Section.Row>)}

      <Section.Column className="no-gap">
        <div className={classNames("title", styles.title)}>Conditional Modifiers:</div>
        <UnderlinedValue className={styles.modifierLine} />
        <UnderlinedValue className={styles.modifierLine} />
      </Section.Column>
    </Section.Column>
  </Section>
}

interface ClassTrainedBoxProps {
  skill: Skill;
  characterAtLevel: CharacterAtLevel;
}

function ClassTrainedBox({ skill, characterAtLevel }: ClassTrainedBoxProps) {
  const isChecked = useMemo(() => characterAtLevel.get(skill.id + ':trained')?.asBoolean() ?? false, [skill, characterAtLevel]);
  return <div className={isChecked ? styles.classTrainedBoxChecked : styles.classTrainedBoxUnchecked} />
}
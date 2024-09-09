import CharacterAtLevel from "@/data/v8/CharacterAtLevel.ts";
import {useMemo} from "react";
import {CharacterChoiceSelectHandler} from "@/view/components/character/edit/CharacterEditor.tsx";
import {useDatabase} from "@/data/context.tsx";
import {FeatureSummary} from "@/data/v8/FeatureSummary.ts";
import {ChoiceRef, ResolvedMultiSelectChoice} from "@/data/v8/Choice.ts";
import {array} from "@/app/pfutils.ts";
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import {classNames} from "@/utils/classNames.ts";
import styles from "./SkillsEditor.module.css";
import {Formula} from "@kierannichol/formula-js";
import Skills from "@/data/Skills.tsx";

export interface SkillsEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: CharacterChoiceSelectHandler;
}

export default function SkillsEditor({ characterAtLevel, onChange }: SkillsEditorProps) {
  const database = useDatabase();
  const skillsChoice = useMemo(() => characterAtLevel.choicesOfType("skill").at(-1) as ResolvedMultiSelectChoice, [characterAtLevel]);
  const options = useMemo(() => skillsChoice.options(database), [skillsChoice, database]);
  const selections = useMemo(() => array(characterAtLevel.selected(skillsChoice)), [characterAtLevel, skillsChoice]);

  const maxSkillRanks = useMemo(() => Formula.parse('sum(@max_skill_ranks#*)').resolve(characterAtLevel)?.asNumber() ?? 0,
      [characterAtLevel])
  const assignedRanks = useMemo(() => Formula.parse(Skills.all.map(skill => '@' + skill.id).join('+')).resolve(characterAtLevel)?.asNumber() ?? 0,
      [characterAtLevel]);

  function handleAdd(id: string) {
    selections.push(id);
    onChange?.(skillsChoice, selections);
  }

  function handleRemove(id: string) {
    const index = selections.lastIndexOf(id);
    if (index > -1) {
      selections.splice(index, 1);
    }
    onChange?.(skillsChoice, selections);
  }

  return <div className={styles['skill-list']}>
    {options.map(skill => {
      return <SkillRow key={skill.key}
                       characterAtLevel={characterAtLevel}
                       choice={skillsChoice}
                       selections={selections}
                       skill={skill}
                       remainingRanksToAssign={maxSkillRanks - assignedRanks}
                       onAdd={handleAdd}
                       onRemove={handleRemove} />
    })}
  </div>
}

interface SkillRowProps {
  characterAtLevel: CharacterAtLevel;
  choice: ChoiceRef;
  skill: FeatureSummary;
  selections: string[];
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  remainingRanksToAssign: number;
}

function SkillRow({ characterAtLevel, choice, skill, selections, onAdd, onRemove, remainingRanksToAssign }: SkillRowProps) {
  const currentPoints = useMemo(() => {
    return characterAtLevel.resolve(skill.key)?.asNumber() ?? 0;
  }, [characterAtLevel, choice]);

  const canAdd = useMemo(() => {
    return remainingRanksToAssign > 0 && currentPoints < characterAtLevel.level;
  }, [skill, selections]);

  const canRemove = useMemo(() => {
    return selections.includes(skill.key);
  }, [skill, selections]);

  function handleAdd() {
    if (canAdd) onAdd(skill.key);
  }

  function handleRemove() {
    if (canRemove) onRemove(skill.key);
  }

  return <div className={styles['skill-row']}>
    <div className={styles['skill-name']}>{skill.name}:</div>
    <div className={styles['skill-control']}>
      <FaMinusCircle onClick={handleRemove} className={classNames([styles['skill-button'], ...(canRemove ? ['clickable', styles.remove] : [styles.disabled])])} />
      <div className={styles['skill-value']}>{currentPoints}</div>
      <FaPlusCircle onClick={handleAdd} className={classNames([styles['skill-button'], ...(canAdd ? ['clickable', styles.add] : [styles.disabled])])} />
    </div>
  </div>
}
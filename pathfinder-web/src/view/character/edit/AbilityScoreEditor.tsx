import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import {useMemo} from "react";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {ChoiceRef} from "@/data/Choice.ts";
import styles from "./AbilityScoreEditor.module.css";
import {FaMinus, FaPlus} from "react-icons/fa";
import {classNames} from "@pathfinder-lib/utils/classNames"

interface AbilityScoreEditorProps {
  choiceRef: ChoiceRef;
  className?: string;
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectionHandler;
}

function AbilityScoreEditor({choiceRef, className, characterAtLevel, onChange}: AbilityScoreEditorProps) {

  const baseScore = useMemo(() => {
    let selected = characterAtLevel.selected(choiceRef) as string;
    if (selected === '') {
      selected = '10';
    }
    return parseInt(selected);
  }, [characterAtLevel, choiceRef]);

  const totalScore = useMemo(() => {
    const prefix = choiceRef.label.substring(0, 3).toLowerCase();
    return characterAtLevel.get(`${prefix}_score`)?.asNumber() ?? 10;
  }, [characterAtLevel, choiceRef]);

  const scoreClassName = useMemo(() => {
    if (totalScore > baseScore) return styles.bonus;
    if (totalScore < baseScore) return styles.penalty;
    return styles.neutral;
  }, [totalScore, baseScore]);

  function handleChangeScore(delta: number) {
    onChange?.(choiceRef, (baseScore + delta).toString())
  }

  function handleIncrementScore() {
    handleChangeScore(1);
  }

  function handleDecrementScore() {
    handleChangeScore(-1);
  }

  return <div className={classNames([styles.abilityScore, className])}>
    <label className={styles.label}>{choiceRef.label}</label>
    <div className={styles.control}>
      <div className={classNames([styles.button, styles.minus])} onClick={handleDecrementScore}><FaMinus/></div>
      <div className={styles.score}>
        <div>{baseScore}</div>
        <div className={scoreClassName}>({totalScore})</div>
      </div>
      <div className={classNames([styles.button, styles.plus])} onClick={handleIncrementScore}><FaPlus/></div>
    </div>
  </div>
}

export default AbilityScoreEditor;
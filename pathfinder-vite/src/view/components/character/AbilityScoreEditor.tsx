import styles from "./AbilityScoreEditor.module.css";
import React, {useMemo} from "react";
import {classNames} from "../../../utils/classNames.ts";

interface AbilityScoreEditorProps {
  label: string;
  score: number;
  base: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function AbilityScoreEditor({ label, score, base, onClick }: AbilityScoreEditorProps) {
  const mod = useMemo(() => {
    const mod = Math.floor((score - 10) / 2);
    return mod < 0 ? mod.toString() : '+' + mod;
  }, [score]);

  const hasBonus = score > base;
  const hasPenalty = score < base;

  return <div className={classNames([ styles.control, 'clickable', hasBonus && styles.bonus || undefined, hasPenalty && styles.penalty || undefined ])}
              onClick={onClick}>
    <div className={styles.header}>{label}</div>
    <div className={styles.input}>{score}</div>
    <div className={styles.border}></div>
    <div className={styles.mod}>{mod}</div>
  </div>
}
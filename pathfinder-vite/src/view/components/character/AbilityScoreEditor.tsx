import styles from "./AbilityScoreEditor.module.css";
import React, {useMemo} from "react";

interface AbilityScoreEditorProps {
  label: string;
  score: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function AbilityScoreEditor({ label, score, onClick }: AbilityScoreEditorProps) {
  const mod = useMemo(() => {
    const mod = Math.floor((score - 10) / 2);
    return mod < 0 ? mod.toString() : '+' + mod;
  }, [score]);

  return <div className={`${styles.control} clickable`} onClick={onClick}>
    <div className={styles.header}>{label}</div>
    <div className={styles.input}>{score}</div>
    <div className={styles.border}></div>
    <div className={styles.mod}>{mod}</div>
  </div>
}
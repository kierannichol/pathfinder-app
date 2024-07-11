import {EditorProps} from "../EditorProps";
import React, {useState} from "react";
import styles from "./TagEditor.module.css";

export function TagEditor({ value, onChange }: EditorProps<string>) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ current, setCurrent ] = useState(value);

  function handleStartEdit() {
    setIsEditing(true);
  }

  function handleCurrentChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrent(event.target.value);
  }

  function handleEndEdit() {
    setIsEditing(false);
    onChange?.(current);
  }

  return isEditing
      ? <input value={current} onChange={handleCurrentChange} onBlur={handleEndEdit} autoFocus={true}/>
      : <div className={styles.tag} onClick={handleStartEdit}>{current}</div>
}
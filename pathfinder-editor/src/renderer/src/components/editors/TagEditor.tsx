import styles from "./TagEditor.module.css";
import {ChangeEvent, useState} from "react";

interface TagEditorProps {
  value: string;
  onChange?: (value: string) => void;
  onDelete?: () => void;
}

export default function TagEditor({ value, onChange, onDelete }: TagEditorProps) {
  const [ isEditing, setIsEditing ] = useState(false);
  const [ workingValue, setWorkingValue ] = useState(value);

  function handleEditorChange(event: ChangeEvent<HTMLInputElement>) {
    setWorkingValue(event.target.value);
  }

  function handleEditStart() {
    setIsEditing(true);
  }

  function handleEditStop() {
    setIsEditing(false);
    onChange?.(workingValue);
  }

  return <div className={styles.control}>
    { isEditing
        ? <input autoFocus={true} value={workingValue} onChange={handleEditorChange} onBlur={handleEditStop} />
        : <div onClick={handleEditStart}>{value}</div> }
  </div>
}
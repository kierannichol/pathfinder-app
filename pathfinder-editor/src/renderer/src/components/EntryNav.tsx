import {useState} from "react";
import styles from "./EntryNav.module.css";

interface EntryNavProps {
  entries: string[];
  onSelect?: (selected: string|null) => void;
}

export default function EntryNav({ entries, onSelect }: EntryNavProps) {
  const [ selectedKey, setSelectedKey ] = useState<string|null>(null);

  function handleChange(selected: string|null) {
    setSelectedKey(selected);
    onSelect?.(selected);
  }

  return <div className={styles.control}>
    {entries.map(entry =>
          <div className={"clickable " + styles.item} onClick={event => handleChange(entry)}>
            <div className={styles.label + " " + (selectedKey === entry ? styles.activeLabel : styles.inactiveLabel)}>{entry}</div>
            <div className={styles.tab + " " + (selectedKey === entry ? styles.activeTab : styles.inactiveTab)} />
          </div>
    )}
  </div>
}
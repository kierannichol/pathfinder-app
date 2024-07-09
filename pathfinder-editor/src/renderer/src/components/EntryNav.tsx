import styles from "./EntryNav.module.css";
import {useMemo, useState} from "react";

interface EntryNavProps {
  entries: string[];
  search?: boolean;
  onSelect?: (selected: string|string[]|null) => void;
  keyToLabelFn?: (key: string) => string;
}

export default function EntryNav({ entries, onSelect, keyToLabelFn, search = false }: EntryNavProps) {
  const [ query, setQuery ] = useState('');

  const filteredEntries = useMemo(() => {
    if (query === '') return entries;
    return entries.filter(entry => entry.includes(query));
  }, [query, entries]);

  if (!keyToLabelFn) {
    keyToLabelFn = k => k;
  }

  function handleChange(selected: string|string[]|null) {
    onSelect?.(selected);
  }

  return <div className={styles.control}>
    {search && <input className={styles.search}
                             placeholder={'Search'}
                             value={query}
                             onChange={e => setQuery(e.target.value.trim())} />}
    <select multiple={true}
            className={styles.select}
            onChange={e => handleChange(toSelected(e.target.selectedOptions))}>
    {filteredEntries.map(entry =>
      <option key={entry} className={styles.item} value={entry}>{keyToLabelFn?.(entry)}</option>)}
  </select></div>
}

function toSelected(selectedOptions: HTMLCollectionOf<HTMLOptionElement>): string|string[]|null {
  const selected: string[] = [];

  for (let i = 0; i < selectedOptions.length; i++) {
    if (selectedOptions[i].selected) {
      selected.push(selectedOptions[i].value);
    }
  }

  switch (selected.length) {
    case 0: return null;
    case 1: return selected[0];
    default: return selected;
  }
}
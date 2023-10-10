import styles from "./EntryNav.module.css";

interface EntryNavProps {
  entries: string[];
  onSelect?: (selected: string|string[]|null) => void;
  keyToLabelFn?: (key: string) => string;
}

export default function EntryNav({ entries, onSelect, keyToLabelFn }: EntryNavProps) {

  if (!keyToLabelFn) {
    keyToLabelFn = k => k;
  }

  function handleChange(selected: string|string[]|null) {
    onSelect?.(selected);
  }

  return <select multiple={true}
                 className={styles.control}
                 onChange={e => handleChange(toSelected(e.target.selectedOptions))}>
    {entries.map(entry =>
      <option className={styles.item} value={entry}>{keyToLabelFn?.(entry)}</option>)}
  </select>
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
import React, {ReactNode, useState} from "react";
import styles from "./ListEditor.module.css";
import {MdClose} from "react-icons/md";

interface ListEditorProps<T> {
  values: T[]
  onListChanged?: (updated: T[]) => void;
  onAddItem?: (index: number) => T;
  onRemoveItem?: (item: T|null, index: number) => void;
  addButtonLabel?: ReactNode;
  children: (item: T|null) => ReactNode;
}

export default function ListEditor<T>({ values, onAddItem, onRemoveItem, addButtonLabel, children }: ListEditorProps<T>) {
  const [ items, setItems ] = useState<(T|null)[]>(values);

  if (!addButtonLabel) {
    addButtonLabel = '+ Add';
  }

  function handleAdd() {
    const newItem = onAddItem?.(items.length) ?? null;
    setItems(prev => [...prev, newItem]);
  }

  function handleRemove(value: T|null, index: number) {
    setItems(prev => prev.toSpliced(index, 1));
    onRemoveItem?.(value, index);
  }

  return <div className={styles.listContainer}>
    {items.map((value, index) => <div key={index} className={styles.itemRow}>
      <div className={styles.valueControl}>{children?.(value)}</div>
      <MdClose
          className={styles.removeButton + " clickable"}
          onClick={_ => handleRemove(value, index)}/>
    </div>)}
    <a className={styles.addButton + " clickable"} onClick={handleAdd}>{addButtonLabel}</a>
  </div>
}
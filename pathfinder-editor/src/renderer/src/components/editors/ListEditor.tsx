import React, {Dispatch, ReactNode, SetStateAction, useState} from "react";
import styles from "./ListEditor.module.css";
import {MdClose} from "react-icons/md";

interface ListEditorProps<T> {
  values: T[]
  onListChanged?: (updated: T[]) => void;
  onAddItem?: (index: number) => T;
  onRemoveItem?: (item: T|null, index: number) => void;
  addButtonLabel?: ReactNode;
  children: (item: T|null, setItem: Dispatch<SetStateAction<T>>) => ReactNode;
}

export default function ListEditor<T>({ values, onListChanged, onAddItem, onRemoveItem, addButtonLabel, children }: ListEditorProps<T>) {
  const [ items, setItems ] = useState<(T|null)[]>(values);

  function notifyUpdated(changed: (T|null)[]) {
    onListChanged?.(changed.filter(item => item !== null) as T[]);
  }

  if (!addButtonLabel) {
    addButtonLabel = '+ Add';
  }

  function handleAdd() {
    const newItem = onAddItem?.(items.length) ?? null;
    const copy = [...items, newItem];
    setItems(copy);
    notifyUpdated(copy);
  }

  function handleRemove(value: T|null, index: number) {
    const copy = items.toSpliced(index, 1);
    setItems(copy);
    onRemoveItem?.(value, index);
    notifyUpdated(copy);
  }

  function handleEdit(value: SetStateAction<T>, index: number) {
    const copy = [...items];
    copy[index] = value instanceof Function ? value(items[index] as T) : value;
    setItems(copy);
    notifyUpdated(copy);
  }

  return <div className={styles.listContainer}>
    {items.map((value, index) => <div key={index} className={styles.itemRow}>
      <div className={styles.valueControl}>{children?.(
          value,
          (edited: SetStateAction<T>) => handleEdit(edited, index))}</div>
      <MdClose
          className={styles.removeButton + " clickable"}
          onClick={_ => handleRemove(value, index)}/>
    </div>)}
    <a className={styles.addButton + " clickable"} onClick={handleAdd}>{addButtonLabel}</a>
  </div>
}
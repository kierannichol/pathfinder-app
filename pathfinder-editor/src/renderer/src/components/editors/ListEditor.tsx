import React, {Dispatch, ReactNode, SetStateAction} from "react";
import styles from "./ListEditor.module.css";

export interface ListEditorItemActions {
  remove();
}

export interface ListEditorProps<T> {
  values: T[];
  onListChanged?: (updated: T[]) => void;
  onAddItem: (index: number) => T;
  onRemoveItem?: (item: T, index: number) => void;
  addButtonLabel?: ReactNode;
  children: (item: T, index: number, setItem: Dispatch<SetStateAction<T>>, actions: ListEditorItemActions) => ReactNode;
}

export default function ListEditor<T>({ values, onListChanged, onAddItem, onRemoveItem, addButtonLabel = '+ Add', children}: ListEditorProps<T>) {

  function notifyUpdated(changed: (T|null)[]) {
    onListChanged?.(changed.filter(item => item !== null) as T[]);
  }

  function handleAdd() {
    const newItem = onAddItem?.(values.length) ?? null;
    const copy = [...values, newItem];
    notifyUpdated(copy);
  }

  function handleRemove(value: T, index: number) {
    const copy = values.splice(index, 1);
    onRemoveItem?.(value, index);
    notifyUpdated(copy);
  }

  function handleEdit(value: SetStateAction<T>, index: number) {
    const copy = [...values];
    copy[index] = (value instanceof Function ? value(values[index] as T) : value) as T;
    notifyUpdated(copy);
  }

  function createActions(value: T, index: number): ListEditorItemActions {
    return {
      remove: () => handleRemove(value, index)
    } as ListEditorItemActions;
  }

  return <div className={styles.listContainer}>
    {values.map((value, index) => {
      if (value === undefined) {
        return;
      }
        return children?.(
                value,
                index,
                (edited: SetStateAction<T>) => handleEdit(edited, index),
                createActions(value, index))
    })}
    <div className={styles.addButton + " clickable"} onClick={handleAdd}>{addButtonLabel}</div>
  </div>
}
import React, {Dispatch, ReactNode, SetStateAction, useId, useState} from "react";
import styles from "./ListEditor.module.css";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {DragEndEvent} from "@dnd-kit/core";
import {Droppable} from "../cards/Droppable";
import {Draggable} from "../cards/Draggable";

interface ListEditorItemActions {
  remove();
}

interface ListEditorProps<T extends { id: string|number }> {
  values: T[];
  onListChanged?: (updated: T[]) => void;
  onAddItem?: (index: number) => T;
  onRemoveItem?: (item: T, index: number) => void;
  addButtonLabel?: ReactNode;
  draggable?: boolean;
  children: (item: T, setItem: Dispatch<SetStateAction<T>>, actions: ListEditorItemActions) => ReactNode;
}

export default function ListEditor<T extends { id: string|number }>({ values, onListChanged, onAddItem, onRemoveItem, addButtonLabel, draggable, children }: ListEditorProps<T>) {
  const fieldId = useId();
  const [ items, setItems ] = useState<T[]>(values);

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
    const copy = [...items];
    copy.splice(index, 1);
    setItems(copy);
    onRemoveItem?.(value, index);
    notifyUpdated(copy);
  }

  function handleEdit(value: SetStateAction<T>, index: number) {
    const copy = [...items];
    copy[index] = (value instanceof Function ? value(items[index] as T) : value) as T;
    setItems(copy);
    notifyUpdated(copy);
  }

  function handleDragEnd(result: DragEndEvent) {
    const {active, over} = result;

    if (active.id !== over?.id) {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over?.id)
        const copy = arrayMove(items, oldIndex, newIndex);
        setItems(copy);
        notifyUpdated(copy);
    }
  }

  function createActions(value: T, index: number): ListEditorItemActions {
    return {
      remove: () => handleRemove(value, index)
    } as ListEditorItemActions;
  }

  return <Droppable id={fieldId} onDragEnd={handleDragEnd}>
    <div className={styles.listContainer}>
      <SortableContext items={items}
                       strategy={verticalListSortingStrategy}>
        {items.filter(value => value !== undefined).map((value, index) => <div key={value.id} className={styles.itemRow}>
          <Draggable id={value.id} className={styles.valueControl}>
          {children?.(
              value,
              (edited: SetStateAction<T>) => handleEdit(edited, index),
              createActions(value, index))}
          </Draggable>
          </div>)}
      </SortableContext>
    <a className={styles.addButton + " clickable"} onClick={handleAdd}>{addButtonLabel}</a>
    </div>
  </Droppable>
}
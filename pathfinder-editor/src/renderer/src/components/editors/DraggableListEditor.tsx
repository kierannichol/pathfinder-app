import React, {useId, useState} from "react";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {DragEndEvent, DragOverlay, DragStartEvent} from "@dnd-kit/core";
import ListEditor, {ListEditorProps} from "./ListEditor";
import {Droppable} from "../dnd/Droppable";
import styles from "./DraggableListEditor.module.css";

export default function DraggableListEditor<T extends { id: string|number }>({ values, children, onListChanged, ...remainingListEditorProps }: ListEditorProps<T>) {
  const fieldId = useId();
  const [ draggingElement, setDraggingElement ] = useState<T|null>(null);

  function handleDragStart(event: DragStartEvent) {
    setDraggingElement(values.find(val => val.id === event.active.id));
  }

  function handleDragEnd(result: DragEndEvent) {
    const {active, over} = result;

    setDraggingElement(null);

    if (active.id !== over?.id) {
        const oldIndex = values.findIndex(item => item.id === active.id)
        const newIndex = values.findIndex(item => item.id === over?.id)
        const copy = arrayMove(values, oldIndex, newIndex);
        onListChanged(copy);
    }
  }

  return <Droppable id={fieldId} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
    <SortableContext items={values}
                     strategy={verticalListSortingStrategy}>
      <ListEditor<T> values={values} onListChanged={onListChanged} {...remainingListEditorProps}>
        {(item, index, setItem, actions) =>
              item === draggingElement
                  ? <div key={item.id} className={styles.dropSpot}/>
                  : children?.(item, index, setItem, actions)
        }
      </ListEditor>
    </SortableContext>

    <DragOverlay>
      {draggingElement && children?.(draggingElement)}
    </DragOverlay>
  </Droppable>
}
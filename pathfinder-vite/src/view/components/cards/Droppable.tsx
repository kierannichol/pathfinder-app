import React, {ReactNode} from "react";
import {DragDropContext, Droppable as DndDroppable, OnDragEndResponder} from "react-beautiful-dnd";

interface DroppableProps {
  droppableId: string;
  onDragEnd: OnDragEndResponder;
  children: ReactNode;
}

export function Droppable({ droppableId, onDragEnd, children }: DroppableProps) {
  return <DragDropContext onDragEnd={onDragEnd}>
    <DndDroppable droppableId={droppableId}>
      {provided => (
          <div {...provided.droppableProps}
               ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>)}
    </DndDroppable>
  </DragDropContext>
}
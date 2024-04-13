import React, {createContext, ReactNode, useContext} from "react";
import {Draggable as DndDraggable} from "react-beautiful-dnd"

interface DraggableContextState {
  readonly draggable: boolean;
  readonly dragging: boolean;
}

const DraggableContext = createContext<DraggableContextState>({ draggable: false, dragging: false });

export function useDraggableContext(): DraggableContextState {
  return useContext(DraggableContext);
}

interface DraggableProps {
  draggableId: string;
  index: number;
  children: ReactNode;
}

export function Draggable({ draggableId, index, children }: DraggableProps) {
  return (
      <DndDraggable draggableId={draggableId} index={index}>
        {(provided, snapshot) => (
            <div ref={provided.innerRef}
                 {...provided.draggableProps}
                 {...provided.dragHandleProps}>
              <DraggableContext.Provider value={{ draggable: true, dragging: snapshot.isDragging}}>
                {children}
              </DraggableContext.Provider>
            </div>
        )}</DndDraggable>);
}
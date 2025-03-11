import {closestCenter, DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import {ReactNode} from "react";

interface DroppableProps {
  id: string;
  children: ReactNode;
  onDragEnd: (event: DragEndEvent) => void;
}

export function Droppable({ id, children, onDragEnd }: DroppableProps) {
  const sensors = useSensors(
      useSensor(MouseSensor, {
        activationConstraint: { distance: 5 },
      }),
      useSensor(TouchSensor, {
        activationConstraint: { delay: 250, tolerance: 5 },
      })
  )
  return (
      <DndContext id={id}
                  onDragEnd={onDragEnd}
                  collisionDetection={closestCenter}
                  sensors={sensors}>
            {children}
      </DndContext>
  );
}
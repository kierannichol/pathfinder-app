import {ReactNode} from "react";
import {CSS} from '@dnd-kit/utilities';
import {useSortable} from "@dnd-kit/sortable";

interface DraggableProps {
  id: string|number;
  children: ReactNode;
}

export function Draggable({ id, children }: DraggableProps) {
  const {
    attributes,
    listeners,
    index,
    isDragging,
    isSorting,
    over,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: id
  });
  const style = {
    transition: transition,
    transform: CSS.Translate.toString(transform),
  }

  return (
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {children}
      </div>
  );
}
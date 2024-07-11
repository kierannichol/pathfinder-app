import React, {ReactNode} from "react";
import {Arguments, CSS} from '@dnd-kit/utilities';
import {useSortable} from "@dnd-kit/sortable";

interface DraggableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  id: string|number;
  children: ReactNode;
}

export function Draggable({ id, children, ...divProps }: DraggableProps) {
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
  } as Arguments<any>);
  const style = {
    transition: transition,
    transform: CSS.Translate.toString(transform),
  }

  return (
      <div ref={setNodeRef} {...divProps} style={style} {...listeners} {...attributes}>
        {children}
      </div>
  );
}
import React, {forwardRef, ReactNode} from "react";
import styles from "./CardBlock.module.scss";
import variants from "../controls/ButtonVariants.module.scss";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {array} from "@/app/pfutils";
import {classNames} from "@/utils/classNames";

interface CardBlockProps extends BasicCardBlockProps {
  draggableId?: string;
}

export const CardBlock = forwardRef<HTMLDivElement, CardBlockProps>(function CardBlock({ draggableId, ...props }: CardBlockProps, ref) {
  return draggableId
      ? <DraggableCardBlock ref={ref} draggableId={draggableId} {...props} />
      : <BasicCardBlock ref={ref} {...props} />
});

interface BasicCardBlockProps extends Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
  variant?: string|string[];
  disabled?: boolean;
  labelPrefix?: ReactNode;
}

const BasicCardBlock = forwardRef<HTMLDivElement, BasicCardBlockProps>(function BasicCardBlock({ variant = 'default', className, labelPrefix = undefined, children = undefined, disabled = false, ...divProps }: BasicCardBlockProps, ref) {
  const cardClassNames = [styles.card];
  const variantArray = variant && array(variant);
  if (variantArray && !disabled) {
    variantArray.forEach(v => cardClassNames.push(variants[v]));
  }
  if (className) {
    cardClassNames.push(className);
  }
  if (disabled) {
    cardClassNames.push(styles.disabled);
  }

  return <div ref={ref} {...divProps} className={classNames(cardClassNames)}>{children}</div>
});

interface DraggableCardBlockProps extends BasicCardBlockProps{
  draggableId: string;
}

const DraggableCardBlock = forwardRef<HTMLDivElement, DraggableCardBlockProps>(
    function DraggableCardBlock({ draggableId, className, ...basicCardBlockProps }: DraggableCardBlockProps, ref) {
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
    id: draggableId
  });

  const style = {
    transition: transition,
    transform: CSS.Translate.toString(transform),
  }

  return (
      <BasicCardBlock ref={setNodeRef}
                      className={classNames([className, isDragging ? styles.dragging : undefined])}
                      style={style}
                      {...basicCardBlockProps}
                      {...attributes}
                      {...listeners} />);
});
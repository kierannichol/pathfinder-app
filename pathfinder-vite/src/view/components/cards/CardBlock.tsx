import React, {ReactNode} from "react";
import styles from "./CardBlock.module.scss";
import variants from "../controls/ButtonVariants.module.scss";
import {array} from "../../../app/pfutils.ts";
import {classNames} from "../../../utils/classNames.ts";
import {MdDragIndicator} from "react-icons/md";
import {useDraggableContext} from "./Draggable.tsx";

interface CardBlockProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: string|string[];
  disabled?: boolean;
  draggableId?: string;
  labelPrefix?: ReactNode;
}

export function CardBlock({ variant = 'default', className, draggableId, labelPrefix = undefined, children = undefined, disabled = false, ...divProps }: CardBlockProps) {
  const dragState = useDraggableContext();

  const cardClassNames = [styles.card, className];
  const variantArray = variant && array(variant);
  if (variantArray && !disabled) {
    variantArray.forEach(v => cardClassNames.push(variants[v]));
  }
  if (disabled) {
    cardClassNames.push(styles.disabled);
  }
  if (dragState.dragging) {
    cardClassNames.push(styles.dragging);
  }

  return (
      <div {...divProps} className={classNames(cardClassNames)}>
        {(draggableId !== undefined && dragState.draggable) && <MdDragIndicator />} {children}
      </div>);
}
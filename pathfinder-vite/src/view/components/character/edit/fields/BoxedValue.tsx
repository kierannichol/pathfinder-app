import {PropsWithChildren} from "react";
import styles from "./BoxedValue.module.css";
import {classNames} from "@/utils/classNames.ts";

interface BoxedValueProps extends PropsWithChildren {
  id?: string;
  className?: string;
  label?: string;
  tabIndex?: number;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function BoxedValue({ children, id = undefined, label = undefined, className = undefined, tabIndex = undefined, onClick = undefined, onFocus = undefined, onBlur = undefined }: BoxedValueProps) {
  return <div id={id} className={classNames([`${styles['boxed-value']}`, className])}>
    <div tabIndex={tabIndex}
         onFocus={onFocus}
         onBlur={onBlur}
         onClick={onClick}
         className={styles.boxed}>
      {children}
    </div>
    {label && <label>{label}</label>}
  </div>
}
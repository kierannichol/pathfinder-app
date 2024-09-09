import {PropsWithChildren, ReactNode} from "react";
import styles from "./UnderlinedValue.module.css";
import {classNames} from "@/utils/classNames.ts";

interface UnderlinedValueProps extends PropsWithChildren {
  id?: string;
  className?: string;
  label?: ReactNode;
  tabIndex?: number;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export default function UnderlinedValue({ children, id = undefined, label = undefined, className = undefined, tabIndex = undefined, onClick = undefined, onFocus = undefined, onBlur = undefined }: UnderlinedValueProps) {
  return <div id={id} className={classNames([`${styles['underlined-value']}`, className])}>
    <div tabIndex={tabIndex}
         onFocus={onFocus}
         onBlur={onBlur}
         onClick={onClick}
         className={styles.underlined}>
      {children}
    </div>
    {label && <label>{label}</label>}
  </div>
}
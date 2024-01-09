import {ReactNode} from "react";
import styles from "./BoxedValue.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

interface BoxedValueProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export default function BoxedValue({ label, className, children }: BoxedValueProps) {
  return <div className={classNames([styles.root, 'box', className])} data-label={label}>
      {children}
      {label && <div className={styles.label}>{label}</div>}
  </div>
}
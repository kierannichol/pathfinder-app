import {ReactNode} from "react";
import styles from "./UnderlinedValue.module.scss";

interface UnderlinedValueProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export default function UnderlinedValue({ label, className, children }: UnderlinedValueProps) {
  return <div className={`${styles.root} ${className ?? ''}`}>
    <div className={styles.underlined}>{children}</div>
    {label && <div className={styles.label}>{label}</div>}
  </div>
}
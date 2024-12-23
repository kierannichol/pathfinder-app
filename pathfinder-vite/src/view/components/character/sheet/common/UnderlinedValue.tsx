import {ReactNode} from "react";
import styles from "./UnderlinedValue.module.css";

interface UnderlinedValueProps {
  label?: string;
  className?: string;
  children?: ReactNode;
}

export default function UnderlinedValue({ label, className, children }: UnderlinedValueProps) {
  return <div className={`${styles['underlined-value']} ${className ?? ''}`}>
    <div className={styles.underlined}>{children}</div>
    {label && <div className={styles.label}>{label}</div>}
  </div>
}
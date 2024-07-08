import {ReactNode} from "react";
import styles from "./DataSection.module.css";

interface DataSectionProps {
  label: string;
  children: ReactNode;
}

export function DataSection({ label, children }: DataSectionProps) {
  return <div className={styles.control}>
    <div className={styles.col}>
      <header>{label}</header>
      <div className={styles.fields}>
      {children}
      </div>
    </div>
  </div>
}
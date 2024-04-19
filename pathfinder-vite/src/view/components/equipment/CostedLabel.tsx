import React, {ReactNode} from "react";
import styles from "./CostedLabel.module.css";

interface CostedLabelProps {
  name: ReactNode;
  cost?: ReactNode;
}

export function CostedLabel({ name, cost }: CostedLabelProps) {
  return <span>{name}{cost && <span className={styles.cost}> ({cost})</span>}</span>
}
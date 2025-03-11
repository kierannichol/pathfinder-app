import React, {ReactNode} from "react";
import styles from "./CardBlockList.module.css"

interface CardBlockListProps {
  children: ReactNode;
}

export function CardBlockList({ children }: CardBlockListProps) {
  return <div className={styles.list}>
    {children}
  </div>
}
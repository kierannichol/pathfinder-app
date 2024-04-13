import React, {ReactNode} from "react";
import styles from "./CardBlockList.module.scss"

interface CardBlockListProps {
  children: ReactNode;
}

export function CardBlockList({ children }: CardBlockListProps) {
  return <div className={styles.list}>
    {children}
  </div>
}
import {ReactNode} from "react";
import styles from "./ButtonBlock.module.scss";

interface ButtonBlockGroupProps {
  children?: ReactNode
}

export function ButtonBlockGroup({ children }: ButtonBlockGroupProps) {
  return <div className={styles.group}>{children}</div>
}
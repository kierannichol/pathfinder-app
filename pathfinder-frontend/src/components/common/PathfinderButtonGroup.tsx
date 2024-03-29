import {ReactNode} from "react";
import styles from "./PathfinderButton.module.scss";

interface PathfinderButtonGroupProps {
  children?: ReactNode
}

export function PathfinderButtonGroup({ children }: PathfinderButtonGroupProps) {
  return <div className={styles.group}>{children}</div>
}
import {ReactNode} from "react";
import styles from "./PathfinderButton.module.scss";

interface PathfinderButtonGroup {
  children?: ReactNode
}

export function PathfinderButtonGroup({ children }: PathfinderButtonGroup) {
  return <div className={styles.group}>{children}</div>
}
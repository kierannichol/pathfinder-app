import {HTMLAttributes, useMemo} from "react";
import styles from "./Panel.module.scss";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
}

export default function Panel({ className, children, onClick, ...divProps }: PanelProps) {
  const classNames = useMemo(() => {
    const collected = [styles.panel];
    if (onClick) {
      collected.push(styles.clickable);
    }
    if (className) {
      collected.push(className);
    }
    return collected.join(' ');
  }, [className]);

  return <div
      {...divProps}
      onClick={onClick}
      className={classNames}>
    {children}
  </div>
}
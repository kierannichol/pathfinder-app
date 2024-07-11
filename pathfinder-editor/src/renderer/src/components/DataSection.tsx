import React, {ReactNode, useState} from "react";
import styles from "./DataSection.module.css";
import {MdClose} from "react-icons/md";
import {Collapse} from "react-bootstrap";

interface DataSectionProps {
  label: string;
  children: ReactNode;
  onRemove?: () => void;
  headerProps?: Partial<React.ComponentProps<"div">>
}

export function DataSection({ label, children, onRemove = undefined, headerProps = {} }: DataSectionProps) {
  const [ open, setOpen ] = useState(true);

  return <Collapse in={open} onExited={onRemove}
                   className={styles.control}>
    <div>
      <header className={styles.header} {...headerProps}>
        <div className={styles.label}>{label}</div>
        {onRemove && <MdClose className={styles.removeButton + " clickable"} onClick={() => setOpen(false)} />}
      </header>
      <div className={styles.fields}>
      {children}
      </div>
    </div>
  </Collapse>
}
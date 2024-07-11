import {ReactNode, useState} from "react";
import {MdClose} from "react-icons/md";
import styles from "./RemovableBlock.module.css";
import {Collapse} from "react-bootstrap";

interface RemovableBlockProps {
  children: ReactNode;
  onRemove: () => void;
}

export function RemovableBlock({ onRemove, children }: RemovableBlockProps) {
  const [ removing, setRemoving ] = useState(false);

  function handleStartRemoving() {
    setRemoving(true);
  }

  function handleRemoved() {
    onRemove?.();
  }

  return <Collapse in={!removing} onExited={handleRemoved}>
    <div className={styles.control}>
      <div className={styles.children}>{children}</div>
      <MdClose className={(removing ? styles.closeButtonRemoved : '') + " " +  styles.closeButton + " clickable"} onClick={handleStartRemoving} />
    </div>
  </Collapse>
}
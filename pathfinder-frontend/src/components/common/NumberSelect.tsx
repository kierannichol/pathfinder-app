import {useState} from "react";
import {Button} from "react-bootstrap";
import styles from "./NumberSelect.module.scss";

interface NumberSelectProps {
  defaultValue?: string;
  onChange?: (value: string) => void;
  min?: number,
  max?: number,
}

export default function NumberSelect({ defaultValue = "0", onChange, min, max }: NumberSelectProps) {
  const [current, setCurrent] = useState(() => parseInt(defaultValue));

  const canPlus = max === undefined || current < max;
  const canMinus = min === undefined || current > min;

  const onMinus = (_: any) => {
    if (!canMinus) return;
    const updated = current - 1;
    setCurrent(updated);
    onChange?.(updated.toString());
  }

  const onPlus = (_: any) => {
    if (!canPlus) return;
    const updated = current + 1;
    setCurrent(updated);
    onChange?.(updated.toString());
  }

  return <div className={styles.control}>
    <Button disabled={!canMinus} className={styles.minus} onClick={onMinus}><b>-</b></Button>
    <div className={styles.value}>{current}</div>
    <Button disabled={!canPlus} className={styles.plus} onClick={onPlus}><b>+</b></Button>
  </div>
}
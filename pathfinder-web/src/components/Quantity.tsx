import styles from "./Quantity.module.css";

interface QuantityProps {
  amount: number|string;
  unit?: string;
}

export function Quantity({ amount, unit }: QuantityProps) {
  return <span className={styles.text}>{amount}{unit && <span className={styles.unit}>{unit}</span>}</span>
}
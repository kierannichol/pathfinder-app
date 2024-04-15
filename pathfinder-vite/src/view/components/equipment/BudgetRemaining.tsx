import styles from "./BudgetRemaining.module.css";
import {Currency} from "../character/Currency.tsx";

interface BudgetRemainingProps {
  budget: number;
  totalCost: number;
}

export function BudgetRemaining({ budget, totalCost }: BudgetRemainingProps) {
  const remaining = budget - totalCost;
  const styleClass = remaining < 0 ? styles.negative : styles.positive;
  return <span className={styleClass}>
    <Currency gp={remaining} />
  </span>
}
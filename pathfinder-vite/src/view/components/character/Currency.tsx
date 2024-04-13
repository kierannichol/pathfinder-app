import styles from "./Currency.module.css";
import {useMemo} from "react";

interface CurrencyProps {
  gp: number;
}

export function Currency({ gp }: CurrencyProps) {
  const [ formatted, currency ] = useMemo(() => {
    if (gp === 0) {
      return []
    }
    let formatted = gp;
    let currency = "gp";

    if (formatted < 1) {
      formatted = formatted * 10;
      currency = "sp";
    }

    if (formatted < 1) {
      formatted = formatted * 10;
      currency = "bp";
    }

    return [ Intl.NumberFormat().format(formatted), currency ];
  }, [gp]);

  if (gp === 0) {
    return <span>--</span>
  }

  return <span>{formatted} <div className={styles.gp}>{currency}</div></span>
}

export function GpIcon() {
  return <div className={styles.gp}>gp</div>
}
import styles from "./Currency.module.css";
import {useMemo} from "react";

interface CurrencyDeltaProps {
  gp: number;
}

export function CurrencyDelta({ gp }: CurrencyDeltaProps) {
  const [ formatted, currency ] = useMemo(() => {
    if (gp === 0) {
      return [Intl.NumberFormat().format(0), "gp"];
    }

    const sign = gp > 0 ? '+' : '-';

    let formatted = Math.abs(gp);
    let currency = "gp";

    if (formatted < 1) {
      formatted = formatted * 10;
      currency = "sp";
    }

    if (formatted < 1) {
      formatted = formatted * 10;
      currency = "bp";
    }

    return [ sign + Intl.NumberFormat().format(formatted), currency ];
  }, [gp]);

  return <span>{formatted}<div className={styles.gp}>{currency}</div></span>
}

export function GpIcon() {
  return <div className={styles.gp}>gp</div>
}
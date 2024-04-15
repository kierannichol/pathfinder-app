import {useMemo} from "react";
import {Quantity} from "../controls/Quantity.tsx";

interface CurrencyProps {
  gp: number;
}

export function Currency({ gp }: CurrencyProps) {
  const [ formatted, currency ] = useMemo(() => {
    if (gp === 0) {
      return [ 0, 'gp' ];
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

  return <Quantity amount={formatted} unit={currency} />
  // return <span className={styles.text}>{formatted}<div className={styles.gp}>{currency}</div></span>
}
import React, {useMemo} from "react";
import {Quantity} from "@/components/Quantity.tsx";

interface CurrencyProps {
  gp: number;
}

export function Currency({ gp }: CurrencyProps) {
  const [ formatted, currency ] = useMemo(() => {
    if (gp === 0) {
      return [Intl.NumberFormat().format(0), "gp"];
    }

    const sign = gp > 0 ? '' : '-';

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

  if (gp === 0) {
    return <span>--</span>
  }

  return <Quantity amount={formatted} unit={currency} />
}
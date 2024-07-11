import React from "react";
import {FieldProps} from "./FieldProps";
import {SimpleTextField} from "./simple/SimpleTextField";
import styles from "./EnabledFormulaField.module.css";

export function EnabledFormulaField(props: FieldProps<string>) {
  return <SimpleTextField label="Enabled Formula" className={styles.field} {...props} />
}
import React from "react";
import {FieldProps} from "./FieldProps";
import {SimpleTextField} from "./simple/SimpleTextField";

export function LabelField(props: FieldProps<string>) {
  return <SimpleTextField label="Label" {...props} />
}
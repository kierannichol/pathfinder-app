import React from "react";
import {FieldProps} from "./FieldProps";
import {SimpleTextField} from "./simple/SimpleTextField";

interface LabelFieldProps extends FieldProps<string> {
  label?: string;
}

export function LabelField({ label, ...props }: LabelFieldProps) {
  return <SimpleTextField label={label ?? "Label"} {...props} />
}
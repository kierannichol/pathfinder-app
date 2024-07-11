import React from "react";
import {FieldProps} from "./FieldProps";
import {SimpleTextField} from "./simple/SimpleTextField";

export function PrerequisitesField(props: FieldProps<string>) {
  return <SimpleTextField label="Prerequisites" {...props} />
}
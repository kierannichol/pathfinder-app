import React, {useId} from "react";
import {Form} from "react-bootstrap";
import {SimpleFieldProps} from "./SimpleFieldProps";

interface SimpleTextFieldProps extends SimpleFieldProps<string> {
  spellCheck?: boolean;
}

export function SimpleTextField({ label, value, onChange, spellCheck = false, className = undefined }: SimpleTextFieldProps) {
  const fieldId = useId();
  return <div className={(className ?? '') + " inline-field"}>
    <label htmlFor={fieldId}>{label}</label>
    <Form.Control id={fieldId}
                  as={"input"}
           spellCheck={spellCheck}
           value={value}
           onChange={event => onChange(event.target.value)} />
  </div>
}
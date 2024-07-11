import React, {useId} from "react";
import {Form} from "react-bootstrap";
import {SimpleFieldProps} from "./SimpleFieldProps";

export function SimpleNumberField({ label, value, onChange, className = undefined }: SimpleFieldProps<number>) {
  const fieldId = useId();
  return <div className={(className ?? '') + " inline-field"}>
    <label htmlFor={fieldId}>{label}</label>
    <Form.Control id={fieldId}
                  as={"input"}
                  type={"number"}
                  value={value}
                  onChange={event => onChange(parseInt(event.target.value))} />
  </div>
}
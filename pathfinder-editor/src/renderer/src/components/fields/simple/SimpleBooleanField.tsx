import React, {useId} from "react";
import {Form} from "react-bootstrap";
import {SimpleFieldProps} from "./SimpleFieldProps";

export function SimpleBooleanField({ label, value, onChange, className = undefined }: SimpleFieldProps<boolean>) {
  const fieldId = useId();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onChange?.(event.target.value === 1);
  }

  return <div className={(className ?? '') + " inline-field"}>
    <label htmlFor={fieldId}>{label}</label>
    <Form.Select id={fieldId} value={value ? 1 : 0} onChange={handleChange}>
      <option value={1}>True</option>
      <option value={0}>False</option>
    </Form.Select>
  </div>
}
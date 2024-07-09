import React, {useId} from "react";
import {FieldProps} from "./FieldProps";
import {Form} from "react-bootstrap";

export function NameField({ value, onChange }: FieldProps<string>) {
  const fieldId = useId();
  return <div className="inline-field">
    <label htmlFor={fieldId}>Name</label>
    <Form.Control id={fieldId}
           spellCheck={false}
           value={value}
           onChange={event => onChange(event.target.value)} />
  </div>
}
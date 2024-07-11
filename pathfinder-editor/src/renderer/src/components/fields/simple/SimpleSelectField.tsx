import {FieldProps} from "../FieldProps";
import React, {useId} from "react";
import {Form} from "react-bootstrap";

interface SimpleSelectFieldProps extends FieldProps<string> {
  label: string;
  children: {[label:string]: string};
}

export function SimpleSelectField({ label, value, onChange, children }: SimpleSelectFieldProps) {
  const fieldId = useId();
  function handleSelectionChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    onChange?.(selected);
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>{label}</label>
    <Form.Select id={fieldId} value={value ?? ''} onChange={handleSelectionChanged}>
      {Object.keys(children).map(label => <option key={label} value={children[label]}>{label}</option>)}
    </Form.Select>
  </div>
}
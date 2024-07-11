import {FieldProps} from "./FieldProps";
import React, {useId} from "react";
import {Form} from "react-bootstrap";

export function AbilityTypeField({ value, onChange }: FieldProps<string>) {
  const fieldId = useId();
  function handleSelectionChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    onChange?.(selected);
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>Type</label>
    <Form.Select id={fieldId} value={value ?? ''} onChange={handleSelectionChanged}>
      <option value=''></option>
      <option value='Su'>Su</option>
      <option value='Sp'>Sp</option>
      <option value='Ex'>Ex</option>
    </Form.Select>
  </div>
}
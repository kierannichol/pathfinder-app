import React, {ChangeEvent, useId} from "react";
import {FieldProps} from "../FieldProps";

export function CategoryField({ value, onChange }: FieldProps<string>) {
  const fieldId = useId();

  function handleSelectionChanged(event: ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    onChange?.(selected);
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>Category</label>
    <select id={fieldId} value={value ?? ''} onChange={handleSelectionChanged}>
      <option value=''></option>
      <option value='CORE'>Core</option>
      <option value='BASE'>Base</option>
      <option value='HYBRID'>Hybrid</option>
      <option value='OCCULT'>Occult</option>
      <option value='UNCHAINED'>Unchained</option>
    </select>
  </div>
}
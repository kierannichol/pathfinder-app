import React from "react";
import {FieldProps} from "../FieldProps";

export function HitDieField({ value, onChange }: FieldProps<string>) {
  function handleSelectionChanged(event: React.ChangeEvent<HTMLSelectElement>) {
    const selected = event.target.value;
    onChange?.(selected);
  }

  return <div className="inline-field">
    <label htmlFor="classHitDie">Hit Die</label>
    <select id="classHitDie" value={value ?? ''} onChange={handleSelectionChanged}>
      <option value=''></option>
      <option value='D4'>D4</option>
      <option value='D6'>D6</option>
      <option value='D8'>D8</option>
      <option value='D10'>D10</option>
      <option value='D12'>D12</option>
    </select>
  </div>
}
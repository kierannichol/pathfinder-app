import React, {useId} from "react";

interface NameFieldProps {
  value: string;
  onChange: ((value: (((prevState: string) => string) | string)) => void);
}

export function NameField({ value, onChange }: NameFieldProps) {
  const fieldId = useId();
  return <div className="inline-field">
    <label htmlFor={fieldId}>Name</label>
    <input id={fieldId}
           spellCheck={false}
           value={value}
           onChange={event => onChange(event.target.value)} />
  </div>
}
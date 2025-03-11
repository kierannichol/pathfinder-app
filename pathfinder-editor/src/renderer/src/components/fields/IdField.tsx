import React, {useId} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

interface IdFieldProps {
  value: string;
  onChange: (value: string) => void;
  generateFn?: () => string;
  label?: string;
}

export function IdField({ value, onChange, label, generateFn = undefined }: IdFieldProps) {
  const fieldId = useId();

  function handleGenerate() {
    if (generateFn) {
      onChange?.(generateFn());
    }
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>{label ?? "ID"}</label>
    <InputGroup>
      <Form.Control id={fieldId}
                    spellCheck={false}
                    value={value ?? ''}
                    onChange={event => onChange(event.target.value)} />
      {generateFn &&
      <Button variant="primary" id="button-addon2" onClick={handleGenerate}>
        Generate
      </Button>}
    </InputGroup>
  </div>
}
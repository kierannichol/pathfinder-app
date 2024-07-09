import React, {useId} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

interface IdFieldProps {
  value: string;
  onChange: ((value: (((prevState: string) => string) | string)) => void);
  generateFn?: () => string;
}

export function IdField({ value, onChange, generateFn = undefined }: IdFieldProps) {
  const fieldId = useId();

  function handleGenerate() {
    if (generateFn) {
      onChange?.(generateFn());
    }
  }

  return <div className="inline-field">
    <label htmlFor={fieldId}>ID</label>
    <InputGroup>
      <Form.Control id={fieldId}
                    spellCheck={false}
                    value={value}
                    onChange={event => onChange(event.target.value)} />
      {generateFn &&
      <Button variant="primary" id="button-addon2" onClick={handleGenerate}>
        Generate
      </Button>}
    </InputGroup>
  </div>
}
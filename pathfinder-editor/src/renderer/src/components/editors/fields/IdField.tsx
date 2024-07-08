import React, {useId} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

interface IdFieldProps {
  value: string;
  onChange: ((value: (((prevState: string) => string) | string)) => void);
}

export function IdField({ value, onChange }: IdFieldProps) {
  const fieldId = useId();
  return <div className="inline-field">
    <label htmlFor={fieldId}>ID</label>
    <InputGroup>
      <Form.Control id={fieldId}
                    spellCheck={false}
                    value={value}
                    onChange={event => onChange(event.target.value)} />
      <Button variant="outline-secondary" id="button-addon2">
        Button
      </Button>
    </InputGroup>
  </div>
}
import React, {useEffect, useState} from "react";
import {Form, FormControlProps} from "react-bootstrap";

interface CharacterNumericInput extends FormControlProps {
  value: string;
  onCommit?: (value: string) => void;
  readonly?: boolean;
  placeholder?: string;
  isInvalid?: boolean;
}

export default function CharacterNumericInput(
    { value, onCommit, readonly = false, placeholder, isInvalid = false, ...inputProps }: CharacterNumericInput) {

  const [current, setCurrent] = useState('');
  useEffect(() => setCurrent(value), [value])

  return (
      <Form.Control
          className={"numeric-value"}
          type={"text"}
          size={"lg"}
          value={current}
          isInvalid={isInvalid}
          readOnly={readonly}
          tabIndex={readonly ? -1 : 0}
          placeholder={placeholder}
          onChange={event => !readonly && setCurrent(event.target.value)}
          onBlur={_ => !readonly && onCommit && onCommit(current)}
          {...inputProps}
      />
  );
}
import React, {useEffect, useRef, useState} from "react";
import {Form} from "react-bootstrap";

export type Props = {
  value: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  readonly?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
};

export default function CharacterTextInput({ value, onChange, onEnter, readonly = false, placeholder, autoFocus = false }: Props) {
  const [current, setCurrent] = useState('');
  useEffect(() => setCurrent(value), [value]);

  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) {
    if (event.key === "Enter") {
      onEnter?.(current)
    }
  }

  return (
      <Form.Control
          ref={ref}
          type={"text"}
          size={"lg"}
          value={current}
          readOnly={readonly}
          tabIndex={readonly ? -1 : 0}
          placeholder={placeholder}
          onChange={event => !readonly && setCurrent(event.target.value)}
          onKeyUp={handleKeyUp}
          onBlur={_ => !readonly && onChange?.(current)}
      />
  );
}
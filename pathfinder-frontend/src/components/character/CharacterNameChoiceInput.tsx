import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

interface CharacterNameChoiceInputProps {
  value: string,
  onChange: (changed: string) => void
}

function CharacterNameChoiceInput({ value, onChange }: CharacterNameChoiceInputProps) {
  const [current, setCurrent] = useState(value);
  useEffect(() => setCurrent(value), [value])

  return (
      <Form.Control
          type={"text"}
          size={"lg"}
          value={current}
          placeholder={''}
          onChange={event => setCurrent(event.target.value)}
          onBlur={_ => onChange(current)}
      />
  );
}

export default CharacterNameChoiceInput;
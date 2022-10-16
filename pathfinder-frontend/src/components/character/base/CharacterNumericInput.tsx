import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";

export type Props = {
  value: string;
  onchange?: (value: string) => void;
  readonly?: boolean;
  placeholder?: string;
  isInvalid?: boolean;
};

export default function CharacterNumericInput(props: Props) {

  const [current, setCurrent] = useState('');
  useEffect(() => setCurrent(props.value), [props.value])

  return (
      <Form.Control
          className={"numeric-value"}
          type={"text"}
          size={"lg"}
          value={current}
          isInvalid={props.isInvalid ?? false}
          readOnly={props.readonly ?? false}
          tabIndex={(props.readonly ?? false) ? -1 : 0}
          placeholder={props.placeholder}
          onChange={event => !props.readonly && setCurrent(event.target.value)}
          onBlur={_ => !props.readonly && props.onchange && props.onchange(current)}
      />
  );
}
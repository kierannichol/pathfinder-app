import React from "react";
import {Form} from "react-bootstrap";

export default function CharacterModifierTextbox(props: {
  value: string
}) {
  return (
      <Form.Control
          className={"numeric-value"}
          type={"text"}
          size={"lg"}
          value={formatModifier(props.value)}
          readOnly={true}
          tabIndex={-1}
      />
  );
}

function formatModifier(modifier: string): string {
  return parseInt(modifier) > 0
      ? "+" + modifier
      : modifier;
}
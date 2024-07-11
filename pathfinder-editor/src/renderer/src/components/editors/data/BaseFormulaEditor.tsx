import {EditorProps} from "../EditorProps";
import {Form} from "react-bootstrap";
import React from "react";
import styles from "./BaseFormulaEditor.module.css";

export function BaseFormulaEditor({ value, onChange }: EditorProps<string>) {
  return <Form.Control spellCheck={false}
                       className={styles.input}
                       value={value}
                       onChange={event => onChange(event.target.value)} />
}
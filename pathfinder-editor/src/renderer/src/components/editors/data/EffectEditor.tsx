import {EditorProps} from "../EditorProps";
import React from "react";
import {BaseFormulaEditor} from "./BaseFormulaEditor";

export function EffectEditor({ value, onChange }: EditorProps<string>) {
  return <BaseFormulaEditor
                       value={value}
                       onChange={onChange} />
}
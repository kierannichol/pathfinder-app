import {SimpleFieldProps} from "./SimpleFieldProps";
import {Form} from "react-bootstrap";
import React from "react";
import ListEditor from "../../editors/ListEditor";
import {RemovableBlock} from "../../RemovableBlock";

interface SimpleTextListFieldProps extends SimpleFieldProps<string[]> {
  elementNoun?: string;
}

export function SimpleTextListField({ label, elementNoun, value, onChange }: SimpleTextListFieldProps) {
  return <div className="field">
    {label && <label>{label}</label>}
    <ListEditor<string> values={value ?? []} onAddItem={() => ''} onListChanged={onChange} addButtonLabel={'+ ' + elementNoun}>
      {(item, index, setItem, actions) =>
        <RemovableBlock key={item} onRemove={actions.remove}>
          <Form.Control value={item}
                        onChange={event => setItem(event.target.value)} />
        </RemovableBlock>}
    </ListEditor>
  </div>
}
import React, {useState} from "react";
import ListEditor from "../editors/ListEditor";
import {RemovableBlock} from "../RemovableBlock";
import {TagEditor} from "../editors/data/TagEditor";
import {FieldProps} from "./FieldProps";

interface TagsFieldProps extends FieldProps<string[]> {
  label?: string;
}

export function TagsField({ value, onChange, label }: TagsFieldProps) {
  const [ current, setCurrent ] = useState(value ?? []);

  function handleChange(changed: string[]) {
    setCurrent(changed);
    onChange?.(changed.filter(e => e !== undefined));
  }

  return <div className="inline-field">
    <label>{label ?? 'Tags'}</label>
    <ListEditor<string> values={current} onAddItem={() => ''} onListChanged={handleChange}>
      {(item, index, setItem, actions) =>
          <RemovableBlock key={item} onRemove={actions.remove}>
            <TagEditor value={item} onChange={setItem} />
          </RemovableBlock>}
    </ListEditor>
  </div>
}
import {EditorProps} from "../editors/EditorProps";
import React, {useState} from "react";
import ListEditor from "../editors/ListEditor";
import {RemovableBlock} from "../RemovableBlock";
import {TagEditor} from "../editors/data/TagEditor";

export function TagsField({ value, onChange }: EditorProps<string[]>) {
  const [ current, setCurrent ] = useState(value ?? []);

  function handleChange(changed: string[]) {
    setCurrent(changed);
    onChange?.(changed.filter(e => e !== undefined));
  }

  return <div className="inline-field">
    <label>Tags</label>
    <ListEditor<string> values={current} onAddItem={() => ''} onListChanged={handleChange}>
      {(item, index, setItem, actions) =>
          <RemovableBlock key={index} onRemove={actions.remove}>
            <TagEditor value={item} onChange={setItem} />
          </RemovableBlock>}
    </ListEditor>
  </div>
}
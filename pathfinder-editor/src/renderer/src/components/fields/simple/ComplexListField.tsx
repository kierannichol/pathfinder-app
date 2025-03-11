import {SimpleFieldProps} from "./SimpleFieldProps";
import ListEditor from "../../editors/ListEditor";
import React, {ReactNode} from "react";
import {DataSection} from "../../DataSection";

interface ComplexListField<T> extends SimpleFieldProps<T[]> {
  elementNoun: string;
  children: (item: T, setItem: (i: T) => void, index: number) => ReactNode;
}

export function ComplexListField<T>({ label, elementNoun, value, onChange, children }: ComplexListField<T>) {
  return <div className="field">
    <DataSection label={label}>
      <ListEditor<T> values={value ?? []} onAddItem={() => ''} onListChanged={onChange} addButtonLabel={'+ ' + elementNoun}>
        {(item, index, setItem, actions) =>
            <DataSection label={elementNoun} onRemove={actions.remove}>
              {children(item, setItem, index)}
            </DataSection>}
      </ListEditor>
    </DataSection>
  </div>
}
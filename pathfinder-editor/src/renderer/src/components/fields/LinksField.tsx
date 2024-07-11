import ListEditor from "../editors/ListEditor";
import {FieldProps} from "./FieldProps";
import React from "react";
import {RemovableBlock} from "../RemovableBlock";
import {BaseFormulaEditor} from "../editors/data/BaseFormulaEditor";
import {DataSection} from "../DataSection";

export function LinksField({ value, onChange }: FieldProps<string[]>) {
  return <div className="field">
    <DataSection label={'Links'}>
      <ListEditor<string> values={value}
                          onListChanged={onChange}
                          onAddItem={() => ''}
                          addButtonLabel="+ Link">
        {(element, index, setElement, actions) =>
            <RemovableBlock key={index} onRemove={actions.remove}>
              <BaseFormulaEditor value={element} onChange={setElement} />
            </RemovableBlock>}
      </ListEditor>
    </DataSection>
  </div>
}
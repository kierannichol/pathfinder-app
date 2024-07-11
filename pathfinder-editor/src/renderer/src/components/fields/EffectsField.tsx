import ListEditor from "../editors/ListEditor";
import {FieldProps} from "./FieldProps";
import {EffectEditor} from "../editors/data/EffectEditor";
import React from "react";
import {RemovableBlock} from "../RemovableBlock";
import {DataSection} from "../DataSection";

export function EffectsField({ value, onChange }: FieldProps<string[]>) {
  return <div className="field">
    <DataSection label={"Effects"}>
      <ListEditor<string> values={value}
                  onListChanged={onChange}
                  onAddItem={() => ''}
                  addButtonLabel="+ Effect">
        {(element, index, setElement, actions) =>
            <RemovableBlock key={index} onRemove={actions.remove}>
              <EffectEditor value={element} onChange={setElement} />
            </RemovableBlock>}
      </ListEditor>
    </DataSection>
  </div>
}
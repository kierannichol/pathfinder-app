import * as React from 'react';
import {FieldProps} from "./FieldProps";
import {ChoiceData} from "../../../../shared/pathfinder";
import {DataSection} from "../DataSection";
import ListEditor from "../editors/ListEditor";
import {RemovableBlock} from "../RemovableBlock";
import ChoiceEditor from "../editors/ChoiceEditor";

function ChoicesField({ value, onChange }: FieldProps<ChoiceData[]>) {
 return (
  <div className="field">
    <DataSection label={"Choices"}>
      <ListEditor<ChoiceData> values={value}
                          onListChanged={onChange}
                          onAddItem={() => ({} as ChoiceData)}
                          addButtonLabel="+ Choice">
        {(element, index, setElement, actions) =>
            <RemovableBlock key={index} onRemove={actions.remove}>
              <ChoiceEditor value={element} onChange={setElement} />
            </RemovableBlock>}
      </ListEditor>
    </DataSection>
  </div>
 )
}

export default ChoicesField;
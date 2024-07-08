import React from "react";
import {FieldProps} from "../FieldProps";
import {ClassFeatureData} from "../../../../../../shared/pathfinder";
import ListEditor from "../../ListEditor";
import {ClassFeatureEditor} from "../../ClassFeatureEditor";
import {DataSection} from "../../../DataSection";

export function ClassFeaturesField({ value, onChange }: FieldProps<ClassFeatureData[]>) {
  function handleAddItem(): ClassFeatureData {
    return {
      id: '',
      name: '',
      description: '',
      type: '',
      effects: []
    };
  }

  return <div>
    <label htmlFor="classClassFeatures">Class Features</label>
    <ListEditor values={value}
                onAddItem={handleAddItem}
                onListChanged={onChange}
                addButtonLabel="+ Class Feature">
      {(element, setElement) => <DataSection label={element?.name ?? 'New Class Feature'}>
        <ClassFeatureEditor value={element as ClassFeatureData} onChange={setElement} />
      </DataSection>}
    </ListEditor>
  </div>
}
import React from "react";
import {FieldProps} from "../FieldProps";
import {ClassFeatureData} from "../../../../../../shared/pathfinder";
import ListEditor from "../../ListEditor";
import {ClassFeatureEditor} from "../../ClassFeatureEditor";
import {DataSection} from "../../../DataSection";

interface ClassFeaturesField extends FieldProps<ClassFeatureData[]> {
  classId: string;
}

export function ClassFeaturesField({ value, onChange, classId }: ClassFeaturesField) {
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
      {(element, setElement, actions) =>
          <DataSection label={element?.name ?? 'New Class Feature'}
                       onRemove={actions.remove}>
        <ClassFeatureEditor value={element as ClassFeatureData}
                            onChange={setElement}
                            classId={classId} />
      </DataSection>}
    </ListEditor>
  </div>
}
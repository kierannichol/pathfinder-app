import React from "react";
import {FieldProps} from "../FieldProps";
import {ClassFeatureData} from "../../../../../shared/pathfinder";
import {DataSection} from "../../DataSection";
import {ClassFeatureEditor} from "../../editors/ClassFeatureEditor";
import DraggableListEditor from "../../editors/DraggableListEditor";
import {ListEditorItemActions} from "../../editors/ListEditor";
import {useSortable} from "@dnd-kit/sortable";
import {Arguments} from "@dnd-kit/utilities";

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
    } as ClassFeatureData;
  }

  return <div>
    <label htmlFor="classClassFeatures">Class Features</label>
    <DraggableListEditor<ClassFeatureData> values={value}
                onAddItem={handleAddItem}
                onListChanged={onChange}
                addButtonLabel="+ Class Feature">
      {(element, index, setElement, actions) =>
          <ClassFeatureElement key={element.id} element={element} setElement={setElement} actions={actions} classId={classId} />}
    </DraggableListEditor>
  </div>
}

interface ClassFeatureItemProps {
  element: ClassFeatureData;
  setElement: (element: ClassFeatureData) => void;
  actions: ListEditorItemActions;
  classId: string;
}

function ClassFeatureElement({ element, setElement, actions, classId }: ClassFeatureItemProps) {
  const {
      attributes,
      listeners,
      setNodeRef,
      setActivatorNodeRef
  } = useSortable({
    id: element.id
  } as Arguments<any>);
  const style = {
  }

  return <div ref={setNodeRef}
              className={"d-flex flex-grow-1"}
              style={style}>
    <DataSection label={element?.name ?? 'New Class Feature'}
                 onRemove={actions?.remove}
                 headerProps={{...listeners, ...attributes, ref: setActivatorNodeRef}}>
      <ClassFeatureEditor value={element as ClassFeatureData}
                          onChange={setElement}
                          classId={classId} />
    </DataSection>
  </div>
}
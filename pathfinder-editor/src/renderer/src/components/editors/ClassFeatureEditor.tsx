import {ClassFeatureData} from "../../../../shared/pathfinder";
import {useEffect, useState} from "react";
import {IdField} from "./fields/IdField";
import {NameField} from "./fields/NameField";
import {DescriptionField} from "./fields/DescriptionField";
import {AbilityTypeField} from "./fields/AbilityTypeField";
import {toId} from "../../utils/toId";
import {FieldProps} from "./fields/FieldProps";
import {StringId} from "../../utils/StringId";

interface ClassFeatureEditorProps extends FieldProps<ClassFeatureData> {
  classId: string;
}

export function ClassFeatureEditor({ value, onChange, classId }: ClassFeatureEditorProps) {
  const [ id, setId ] = useState(value.id);
  const [ name, setName ] = useState(value.name);
  const [ type, setType ] = useState(value.type);
  const [ description, setDescription ] = useState(value.description);

  useEffect(() => {
    const changed = {
      ...value,
      id: id,
      name: name,
      type: type,
      description: description,
    };
    onChange?.(changed);
  }, [ id, name, description ]);

  function generateId(): string {
    const classIdObj = StringId.of(classId);
    const affix = classIdObj.option ? classIdObj.key + '_' + classIdObj.option : classIdObj.key;
    return new StringId("ability", toId(name), affix).toString();
  }

  return <div className="d-flex flex-column gap-1">
    <NameField value={name} onChange={setName} />
    <IdField value={id} onChange={setId} generateFn={generateId} />
    <AbilityTypeField value={type} onChange={setType} />
    <DescriptionField value={description} onChange={setDescription} />
  </div>
}
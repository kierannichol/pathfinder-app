import {ClassFeatureData} from "../../../../shared/pathfinder";
import {useEffect, useState} from "react";
import {IdField} from "./fields/IdField";
import {NameField} from "./fields/NameField";
import {DescriptionField} from "./fields/DescriptionField";

interface ClassFeatureEditorProps {
  value: ClassFeatureData;
  onChange: ((value: (((prevState: ClassFeatureData) => ClassFeatureData) | ClassFeatureData)) => void);
}

export function ClassFeatureEditor({ value, onChange }: ClassFeatureEditorProps) {
  const [ id, setId ] = useState(value.id);
  const [ name, setName ] = useState(value.name);
  const [ description, setDescription ] = useState(value.description);

  useEffect(() => {
    const changed = {
      ...value,
      id: id,
      name: name,
      description: description,
    };
    onChange?.(changed);
  }, [ id, name, description ]);

  return <div className="d-flex flex-column gap-1">
    <NameField value={name} onChange={setName} />
    <IdField value={id} onChange={setId} />
    <DescriptionField value={description} onChange={setDescription} />
  </div>
}
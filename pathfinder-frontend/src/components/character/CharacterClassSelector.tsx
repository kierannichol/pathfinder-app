import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {ClassData} from "../../compiled";
import {useClassDatabase} from "../../database/ClassDatabase";
import LoadingBlock from "../common/LoadingBlock";

interface CharacterClassSelectorProps {
  value: string,
  onChange: (changed: ClassData|undefined) => void
}

function CharacterClassSelector({value, onChange}: CharacterClassSelectorProps) {
  const classDb = useClassDatabase();

  const [ options, setOptions ] = useState<ClassData[]>(() => {
    const classDef = classDb.get(value);
    return classDef && [ classDef ] || [];
  });
  useEffect(() => {
    setOptions(classDb.all);
  }, [classDb]);

  if (!classDb.isLoaded) {
    return <LoadingBlock />
  }

  return (
      <Form.Select size="lg"
                   value={value}
                   placeholder='Class'
                   onChange={event => onChange(classDb.get(event.target.value))}>
        <option value=""></option>
        {options
          .map(classData => <option key={classData.id} value={classData.id}>{classData.name}</option>)}
      </Form.Select>
  );
}

export default CharacterClassSelector;
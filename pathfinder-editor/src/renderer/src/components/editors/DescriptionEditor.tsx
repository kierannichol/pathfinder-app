import {data} from "../../../../shared/compiled";
import ListEditor from "./ListEditor";
import React from "react";
import {Form} from "react-bootstrap";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionEditorProps {
  id?: string;
  value: DescriptionDbo;
  onChange: (value: DescriptionDbo) => void;
}

export default function DescriptionEditor({ id, value, onChange }: DescriptionEditorProps) {
  function handleTextAreaChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const copy = new DescriptionDbo(value);
    copy.text = event.target.value;
    onChange?.(copy);
  }
  
  return <div id={id}>
    <Form.Control
        as="textarea"
        onChange={handleTextAreaChanged}
        value={value?.text ?? ''}
        rows={3} />
    <ListEditor values={Object.keys(value?.sections ?? [])} addButtonLabel="+ Section">
      {(key: string|null) => key && <div>{value.sections[key]}</div>}
    </ListEditor>
  </div>
}
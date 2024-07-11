import {data} from "../../../../shared/compiled";
import ListEditor from "./ListEditor";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {EditorProps} from "./EditorProps";
import {RemovableBlock} from "../RemovableBlock";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionEditorProps {
  id?: string;
  value: DescriptionDbo;
  onChange: (value: DescriptionDbo) => void;
}

interface SectionEntry {
  key: string;
  text: string;
}

export default function DescriptionEditor({ id, value, onChange }: DescriptionEditorProps) {
  const [ sections, setSections ] = useState(() => {
    return Object.keys(value?.sections ?? [])
        .map(key => {
          return {
            key: key,
            text: value?.sections[key]
          } as SectionEntry
        });
  });

  function handleTextAreaChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const copy = new DescriptionDbo(value);
    copy.text = event.target.value;
    onChange?.(copy);
  }

  function handleSectionChanged(sections: SectionEntry[]) {
    setSections(sections);
    const copy = new DescriptionDbo(value);
    copy.sections = {};
    sections.forEach(section => {
      if (section)
        copy.sections[section.key] = section.text
    });
    onChange?.(copy);
  }

  return <div id={id} className="d-flex flex-column gap-2">
    <Form.Control
        as="textarea"
        onChange={handleTextAreaChanged}
        value={value?.text ?? ''}
        rows={3} />
    <ListEditor<SectionEntry> values={sections}
                onListChanged={handleSectionChanged}
                onAddItem={() => Object.create({key:'', text: ''}) as SectionEntry}
                addButtonLabel="+ Section">
      {(item, index, setItem, actions) =>
          <RemovableBlock key={index} onRemove={actions.remove}>
            <SectionEditor value={item} onChange={setItem} />
          </RemovableBlock>}
    </ListEditor>
  </div>
}

function SectionEditor({ value, onChange }: EditorProps<SectionEntry>) {
  function handleChange(change: Partial<SectionEntry>) {
    onChange?.({
      ...value,
      ...change
    });
  }

  return <div className="d-flex flex-grow-1 gap-2">
    <Form.Control value={value?.key ?? ''} onChange={e => handleChange({ key: e.target.value })} />
    <b className="flex-grow-0 align-content-center">:</b>
    <Form.Control value={value?.text ?? ''} onChange={e => handleChange({ text: e.target.value })} />
  </div>
}
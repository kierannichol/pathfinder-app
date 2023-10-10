import {data} from "../../../../shared/compiled";
import ListEditor from "./ListEditor";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionEditorProps {
  value: DescriptionDbo;
}

export default function DescriptionEditor({ value }: DescriptionEditorProps) {
  return <div>
    <textarea>{value.text}</textarea>
    <ListEditor values={Object.keys(value.sections)}>
      {(key: string|null) => key && <div>{value.sections[key]}</div>}
    </ListEditor>
  </div>
}
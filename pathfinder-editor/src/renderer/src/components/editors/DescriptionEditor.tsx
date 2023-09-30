import {data} from "../../../../preload/compiled";
import DescriptionDbo = data.DescriptionDbo;

interface DescriptionEditorProps {
  value: DescriptionDbo;
}

export default function DescriptionEditor({ value }: DescriptionEditorProps) {
  return <div>
    <textarea>{value.text}</textarea>
  </div>
}
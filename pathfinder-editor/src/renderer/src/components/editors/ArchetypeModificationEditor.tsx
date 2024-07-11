import {FieldProps} from "../fields/FieldProps";
import {ArchetypeModificationData} from "../../../../shared/pathfinder";
import {makeArray, singleOrArray} from "../../utils/singleOrArray";
import {SimpleTextListField} from "../fields/simple/SimpleTextListField";

interface ArchetypeModificationEditorProps extends FieldProps<ArchetypeModificationData> {
  classId?: string;
}

export function ArchetypeModificationEditor({ value, onChange, classId }: ArchetypeModificationEditorProps) {
  function update(updated: Partial<ArchetypeModificationData>) {
    const changed: ArchetypeModificationData = {
      ...value,
      ...updated
    };
    onChange?.(changed);
  }

  return <div className={"d-flex flex-column gap-1 " + classId}>
    <SimpleTextListField label={"Features to Add"} elementNoun={"Feature"}
                         value={makeArray(value.add)}
                         onChange={updated => update({ add: singleOrArray(updated) })} />
    <SimpleTextListField label={"Features to Remove"} elementNoun={"Feature"}
                         value={makeArray(value.remove)}
                         onChange={updated => update({ remove: singleOrArray(updated)})} />
  </div>
}
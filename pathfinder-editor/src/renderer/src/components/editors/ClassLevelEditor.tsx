import {ClassLevelData} from "../../../../shared/pathfinder";
import {FieldProps} from "../fields/FieldProps";
import {SimpleNumberField} from "../fields/simple/SimpleNumberField";
import {SimpleTextListField} from "../fields/simple/SimpleTextListField";

interface ClassLevelEditorProps extends FieldProps<ClassLevelData> {
  classId: string;
}

export function ClassLevelEditor({ value, onChange, classId }: ClassLevelEditorProps) {
  function update(updated: Partial<ClassLevelData>) {
    const changed: ClassLevelData = {
      ...value,
      ...updated
    };
    onChange?.(changed);
  }

  return <div className="d-flex flex-column gap-1">
    <SimpleNumberField label={"Level"} value={value.level} onChange={v => update({ level: v })} />
    <SimpleTextListField label={"Class Features"} elementNoun={"Class Feature"} value={value.class_feature_names} onChange={v => update({ class_feature_names: v })} />
  </div>
}
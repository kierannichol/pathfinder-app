import {EditorProps} from "../EditorProps";
import {StackModificationData} from "../../../../../shared/pathfinder";
import {SimpleNumberField} from "../../fields/simple/SimpleNumberField";
import {SimpleTextListField} from "../../fields/simple/SimpleTextListField";

export function StackModificationEditor({ value, onChange }: EditorProps<StackModificationData>) {
  function update(data: Partial<StackModificationData>) {
    onChange?.({
      ...value,
      ...data
    });
  }

  return <div>
    <SimpleNumberField label={"Target Stack Count"}
                       value={value.targetStackCount ?? 0}
                       onChange={updated => update({ targetStackCount: updated})} />
    <SimpleTextListField label={"Features To Add"}
                         elementNoun={"Feature"}
                         value={value.featuresToAdd ?? []}
                         onChange={updated => update({ featuresToAdd: updated })} />
    <SimpleTextListField label={"Features To Remove"}
                         elementNoun={"Feature"}
                         value={value.featuresToRemove ?? []}
                         onChange={updated => update({ featuresToRemove: updated })} />
  </div>
}
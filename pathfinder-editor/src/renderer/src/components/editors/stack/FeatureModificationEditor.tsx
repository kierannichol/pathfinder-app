import {EditorProps} from "../EditorProps";
import {FeatureModificationData, StackModificationData} from "../../../../../shared/pathfinder";
import {SimpleTextField} from "../../fields/simple/SimpleTextField";
import {ComplexListField} from "../../fields/simple/ComplexListField";
import {StackModificationEditor} from "./StackModificationEditor";

export function FeatureModificationEditor({ value, onChange }: EditorProps<FeatureModificationData>) {
  function update(data: Partial<FeatureModificationData>) {
    onChange?.({
      ...value,
      ...data
    });
  }

  return <div>
    <SimpleTextField label={"Target Feature ID"}
                     value={value.targetFeatureId}
                     onChange={updated => update({ targetFeatureId: updated})} />
    <ComplexListField<StackModificationData> label={'Stack Modifications'}
                                             elementNoun={'Stack Modification'}
                                             value={value.stackModifications}
                                             onChange={updated => update({ stackModifications: updated })}>
      {(item, setItem) =>
          <StackModificationEditor value={item} onChange={setItem} />}
    </ComplexListField>
  </div>
}
import {EditorProps} from "../EditorProps";
import {FeatureModificationData, StackData} from "../../../../../shared/pathfinder";
import {EffectsField} from "../../fields/EffectsField";
import {LinksField} from "../../fields/LinksField";
import {ComplexListField} from "../../fields/simple/ComplexListField";
import {FeatureModificationEditor} from "./FeatureModificationEditor";

export function StackEditor({ value, onChange }: EditorProps<StackData>) {
  function update(data: Partial<StackData>) {
    onChange?.({
      ...value,
      ...data
    });
  }

  return <div className={"field"}>
    <EffectsField value={value.effects ?? []} onChange={updated => update({ effects: updated })} />
    <LinksField value={value.links ?? []} onChange={updated => update({ links: updated })} />
    <ComplexListField<FeatureModificationData> label={"Feature Modifications"}
                                               elementNoun={"Feature Modification"}
                                               value={value.featureModifications ?? []}
                                               onChange={updated => update({ featureModifications: updated })}>
      {(item, setItem) => <FeatureModificationEditor value={item} onChange={setItem} />}
    </ComplexListField>
  </div>
}
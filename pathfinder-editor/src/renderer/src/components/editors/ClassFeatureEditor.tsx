import {ClassFeatureData} from "../../../../shared/pathfinder";
import {IdField} from "../fields/IdField";
import {NameField} from "../fields/NameField";
import {DescriptionField} from "../fields/DescriptionField";
import {AbilityTypeField} from "../fields/AbilityTypeField";
import {toId} from "../../utils/toId";
import {FieldProps} from "../fields/FieldProps";
import {StringId} from "../../utils/StringId";
import {EffectsField} from "../fields/EffectsField";
import {LinksField} from "../fields/LinksField";
import {StacksField} from "../fields/StacksField";

interface ClassFeatureEditorProps extends FieldProps<ClassFeatureData> {
  classId: string;
}

export function ClassFeatureEditor({ value, onChange, classId }: ClassFeatureEditorProps) {
  function update(updated: Partial<ClassFeatureData>) {
    const changed: ClassFeatureData = {
      ...value,
      ...updated
    };
    onChange?.(changed);
  }

  function generateId(): string {
    const classIdObj = StringId.of(classId);
    const affix = classIdObj.option ? classIdObj.key + '_' + classIdObj.option : classIdObj.key;
    return new StringId("ability", toId(value.name ?? ''), affix).toString();
  }

  return <div className="d-flex flex-column gap-1">
    <NameField value={value.name ?? ''} onChange={updated => update({ name: updated })} />
    <IdField value={value.id ?? ''} onChange={updated => update({ id: updated })} generateFn={generateId} />
    <AbilityTypeField value={value.type ?? ''} onChange={updated => update({ type: updated })} />
    <DescriptionField value={value.description ?? ''} onChange={updated => update({ description: updated })} />
    <EffectsField value={value.effects ?? []} onChange={updated => update({ effects: updated })} />
    <LinksField value={value.links ?? []} onChange={updated => update({ links: updated })} />
    <StacksField fixedStacks={value.fixed_stacks} repeatingStack={value.repeating_stack} onChangeFixedStack={updated => update({ fixed_stacks: updated })} onChangeRepeatingStack={updated => update({ repeating_stack: updated })} />
  </div>
}
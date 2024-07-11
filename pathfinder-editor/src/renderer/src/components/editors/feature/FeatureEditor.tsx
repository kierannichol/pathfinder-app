import {useState} from "react";
import LoadingBlock from "../../LoadingBlock";
import {data} from "../../../../../shared/compiled";
import {FeatureRef} from "../../../../../shared/pathfinder";
import {IdField} from "../../fields/IdField";
import {NameField} from "../../fields/NameField";
import {DescriptionField} from "../../fields/DescriptionField";
import {SourceField} from "../../fields/SourceField";
import {SaveButton} from "../../SaveButton";
import {LabelField} from "../../fields/LabelField";
import {EnabledFormulaField} from "../../fields/EnabledFormulaField";
import {TagsField} from "../../fields/TagsField";
import {StacksField} from "../../fields/StacksField";
import DescriptionDbo = data.DescriptionDbo;

interface FeatureEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => Promise<void>;
}

export default function FeatureEditor({ feature, onSave }: FeatureEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ label, setLabel ] = useState(feature.label ?? '');
  const [ tags, setTags ] = useState(feature.tags);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ enabledFormula, setEnabledFormula ] = useState(feature.enabledFormula);
  const [ fixedStacks, setFixedStacks ] = useState(feature.fixed_stacks);
  const [ repeatingStack, setRepeatingStack ] = useState(feature.repeating_stack);
  const [ source, setSource ] = useState(feature.source);

  async function handleSave() {
    const modified = {
      ...feature,
      id: id,
      name: name,
      label: label === "" ? null : label,
      tags: tags,
      description: description,
      enabledFormula: enabledFormula,
      fixed_stacks: fixedStacks,
      repeating_stack: repeatingStack,
    } as FeatureRef;

    modified.segmentKey = feature.segmentKey;
    modified.featureKey = feature.featureKey;

    return await onSave?.(modified);
  }

  if (!feature) {
    return <LoadingBlock/>
  }

  return <div>
    <header>{name}</header>
    <section>
      <div>
        <SaveButton saveFn={handleSave} />
      </div>
      <hr/>
      <IdField value={id} onChange={setId} />
      <NameField value={name} onChange={setName} />
      <LabelField value={label} onChange={setLabel} />
      <TagsField value={tags} onChange={setTags} />
      <DescriptionField value={description} onChange={setDescription} />
      <EnabledFormulaField value={enabledFormula} onChange={setEnabledFormula} />
      <StacksField fixedStacks={fixedStacks} repeatingStack={repeatingStack} onChangeFixedStack={setFixedStacks} onChangeRepeatingStack={setRepeatingStack} />
      <SourceField value={source} onChange={setSource} />
    </section>
  </div>
}
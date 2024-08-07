import {useState} from "react";
import {data} from "../../../../../shared/compiled";
import {ArchetypeModificationData, FeatureRef} from "../../../../../shared/pathfinder";
import {IdField} from "../../fields/IdField";
import {NameField} from "../../fields/NameField";
import {DescriptionField} from "../../fields/DescriptionField";
import {SourceField} from "../../fields/SourceField";
import {ClassFeaturesField} from "../../fields/characterclass/ClassFeaturesField";
import {SaveButton} from "../../SaveButton";
import {ComplexListField} from "../../fields/simple/ComplexListField";
import {ArchetypeModificationEditor} from "../ArchetypeModificationEditor";
import DescriptionDbo = data.DescriptionDbo;

interface ArchetypeEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => Promise<void>;
}

export default function ArchetypeEditor({ feature, onSave }: ArchetypeEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ modifications, setModifications ] = useState(feature.modifications ?? []);
  const [ features, setFeatures ] = useState(feature.features);
  const [ source, setSource ] = useState(feature.source);

  async function handleSave() {
    const modified = {
      ...feature,
      id: id,
      name: name,
      description: description,
      modifications: modifications.filter(e => e !== undefined),
      features: features.filter(e => e !== undefined),
      source: source
    } as FeatureRef;

    modified.segmentKey = feature.segmentKey;
    modified.featureKey = feature.featureKey;

    return await onSave?.(modified);
  }

  return <div>
    <header>{name}</header>
    <section>
      <div>
        <SaveButton saveFn={handleSave} />
      </div>
      <hr/>
      <NameField value={name} onChange={setName} />
      <IdField value={id} onChange={setId} />
      <DescriptionField value={description} onChange={setDescription} />
      <ComplexListField<ArchetypeModificationData> elementNoun={'Modification'} label={'Modifications'} value={modifications} onChange={setModifications}>
        {(item, setItem) => <ArchetypeModificationEditor value={item} onChange={setItem} />}
      </ComplexListField>
      <ClassFeaturesField value={features} onChange={setFeatures} classId={id} />
      <SourceField value={source} onChange={setSource} />
    </section>
  </div>
}
import {useState} from "react";
import LoadingBlock from "../LoadingBlock";
import {data} from "../../../../shared/compiled";
import TagListEditor from "./TagListEditor";
import styles from "./FeatureEditor.module.css";
import {FeatureRef} from "../../../../shared/pathfinder";
import {IdField} from "./fields/IdField";
import {NameField} from "./fields/NameField";
import {DescriptionField} from "./fields/DescriptionField";
import {SourceField} from "./fields/SourceField";
import {SaveButton} from "../SaveButton";
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
  const [ source, setSource ] = useState(feature.source);

  async function handleSave() {
    const modified = {
      ...feature,
      id: id,
      name: name,
      label: label === "" ? null : label,
      tags: tags,
      description: description,
      enabledFormula: enabledFormula
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
      <div className="inline-field">
        <label htmlFor="featureLabel">Label</label>
        <input id="featureLabel" value={label} onChange={event => setLabel(event.target.value)} />
      </div>

      <div>
        <label>Tags</label>
        <TagListEditor tags={tags} onChange={setTags} />
      </div>

      <DescriptionField value={description} onChange={setDescription} />

      <div className="inline-field">
        <label htmlFor="featureEnabledFormula">Enabled Formula</label>
        <input id="featureEnabledFormula"
               value={enabledFormula}
               className={styles.enabledFormulaEdit}
               onChange={event => setEnabledFormula(event.target.value)} />
      </div>

      <SourceField value={source} onChange={setSource} />
    </section>
  </div>
}
import {useState} from "react";
import LoadingBlock from "../LoadingBlock";
import {data} from "../../../../shared/compiled";
import TagListEditor from "./TagListEditor";
import styles from "./FeatureEditor.module.css";
import DescriptionEditor from "./DescriptionEditor";
import {Button} from "react-bootstrap";
import {FeatureRef} from "../../../../shared/pathfinder";
import DescriptionDbo = data.DescriptionDbo;

interface FeatureEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => void;
}

export default function FeatureEditor({ feature, onSave }: FeatureEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ label, setLabel ] = useState(feature.label ?? '');
  const [ tags, setTags ] = useState(feature.tags);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ enabledFormula, setEnabledFormula ] = useState(feature.enabledFormula);

  function handleSave() {
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

    onSave?.(modified);
  }

  if (!feature) {
    return <LoadingBlock/>
  }

  return <div>
    <header>{name}</header>
    <section>
      <div>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </div>
      <hr/>
      <div>
        <label htmlFor="featureId">ID</label>
        <input id="featureId" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="featureName">Name</label>
        <input id="featureName" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="featureLabel">Label</label>
        <input id="featureLabel" value={label} onChange={event => setLabel(event.target.value)} />
      </div>

      <div>
        <label>Tags</label>
        <TagListEditor tags={tags} onChange={setTags} />
      </div>

      <div>
        <label>Description</label>
        <DescriptionEditor value={description} />
      </div>
      <div>
        <label htmlFor="featureEnabledFormula">Enabled Formula</label>
        <input id="featureEnabledFormula"
               value={enabledFormula}
               className={styles.enabledFormulaEdit}
               onChange={event => setEnabledFormula(event.target.value)} />
      </div>
    </section>
  </div>
}
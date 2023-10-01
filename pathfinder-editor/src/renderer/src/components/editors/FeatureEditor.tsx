import {useState} from "react";
import LoadingBlock from "../LoadingBlock";
import {data} from "../../../../preload/compiled";
import TagListEditor from "./TagListEditor";
import styles from "./FeatureEditor.module.css";
import DescriptionEditor from "./DescriptionEditor";
import {Button} from "react-bootstrap";
import FeatureDbo = data.FeatureDbo;
import DescriptionDbo = data.DescriptionDbo;

interface FeatureEditorProps {
  feature: FeatureDbo;
  onChange?: (changed: FeatureDbo) => void;
}

export default function FeatureEditor({ feature, onChange }: FeatureEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ label, setLabel ] = useState(feature.label ?? '');
  const [ tags, setTags ] = useState(feature.tags);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ enabledFormula, setEnabledFormula ] = useState(feature.enabledFormula);

  function handleSave() {
    const modified = new FeatureDbo({
      ...feature,
      id: id,
      name: name,
      label: label === "" ? null : label,
      tags: tags,
      description: description,
      enabledFormula: enabledFormula
    });
    onChange?.(modified);
  }

  if (!feature) {
    return <LoadingBlock/>
  }

  return <div className={styles.control}>
    <div>
      <Button variant="primary" onClick={handleSave}>Save</Button>
    </div>
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
    {/*<Form.Group controlId="featureDescription">*/}
    {/*  <Form.Label>Description</Form.Label>*/}
    {/*  <Form.Control id="featureDescription"*/}
    {/*                as="textarea"*/}
    {/*                value={description}*/}
    {/*                onChange={event => setDescription(event.target.value)} />*/}
    {/*</Form.Group>*/}
    <div>
      <label htmlFor="featureEnabledFormula">Enabled Formula</label>
      <input id="featureEnabledFormula"
             value={enabledFormula}
             className={styles.enabledFormulaEdit}
             onChange={event => setEnabledFormula(event.target.value)} />
    </div>
  </div>
}
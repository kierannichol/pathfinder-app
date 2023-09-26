import {Form} from "react-bootstrap";
import {useState} from "react";
import LoadingBlock from "../LoadingBlock";
import FeatureModel from "../../../../preload/pathfinder";

interface FeatureEditorProps {
  feature: FeatureModel;
}

export default function FeatureEditor({ feature }: FeatureEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ label, setLabel ] = useState(feature.label);
  const [ type, setType ] = useState(feature.type);
  const [ description, setDescription ] = useState(feature.description);
  const [ prerequisites, setPrerequisites ] = useState(feature.prerequisites);
  const [ effects, setEffects ] = useState(feature.effects);
  const [ source, setSource ] = useState(feature.source);

  if (!feature) {
    return <LoadingBlock/>
  }

  return <Form>
    <Form.Group controlId="featureId">
      <Form.Label>ID</Form.Label>
      <Form.Control id="featureId" value={id} onChange={event => setId(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featureName">
      <Form.Label>Name</Form.Label>
      <Form.Control id="featureName" value={name} onChange={event => setName(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featureLabel">
      <Form.Label>Label</Form.Label>
      <Form.Control id="featureLabel" value={label} onChange={event => setLabel(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featureType">
      <Form.Label>Type</Form.Label>
      <Form.Control id="featureType" value={type} onChange={event => setType(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featureDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control id="featureDescription"
                    as="textarea"
                    value={description}
                    onChange={event => setDescription(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featurePrerequisites">
      <Form.Label>Prerequisites</Form.Label>
      <Form.Control id="featurePrerequisites" value={prerequisites} onChange={event => setPrerequisites(event.target.value)} />
    </Form.Group>
    <Form.Group controlId="featureSource">
      <Form.Label>Source</Form.Label>
      <Form.Control id="featureSource" value={source} onChange={event => setSource(event.target.value)} />
    </Form.Group>
  </Form>
}
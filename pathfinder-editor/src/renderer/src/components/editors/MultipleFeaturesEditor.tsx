import {data} from "../../../../shared/compiled";
import {useState} from "react";
import {Button} from "react-bootstrap";
import DescriptionEditor from "./DescriptionEditor";
import {FeatureRef} from "../../../../shared/pathfinder";
import DescriptionDbo = data.DescriptionDbo;

interface MultipleFeaturesEditorProps {
  features: FeatureRef[];
  onSave: (features: FeatureRef[]) => void;
}

export default function MultipleFeaturesEditor({ features, onSave }: MultipleFeaturesEditorProps) {

  const [ description, setDescription ] = useState(() => determineDescription(features));

  function handleSave() {
    features.forEach(f => f.description = description);
    onSave?.(features);

    // const modified = new FeatureDbo({
    //   ...feature,
    //   id: id,
    //   name: name,
    //   label: label === "" ? null : label,
    //   tags: tags,
    //   description: description,
    //   enabledFormula: enabledFormula
    // });
    // onChange?.(modified);
  }

  return <div>
    <header>Editing Multiple Features</header>
    <section>
      <div>
        <Button variant="primary" onClick={handleSave}>Save</Button>
      </div>
      <hr/>
      <div>
        <label>Description</label>
        <DescriptionEditor value={description} />
      </div>
    </section>
  </div>
}

function determineDescription(features: FeatureRef[]): DescriptionDbo {
  let first: DescriptionDbo|undefined|null = undefined;
  for (let feature of features) {
    if (first === undefined) {
      first = feature?.description;
      continue;
    }

    if (feature?.description !== first) {
      return new DescriptionDbo({
        text: "<Various>"
      });
    }
  }
  return first ?? new DescriptionDbo();
}
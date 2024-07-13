import {data} from "../../../../../shared/compiled";
import {useState} from "react";
import {Button} from "react-bootstrap";
import DescriptionEditor from "../DescriptionEditor";
import {FeatureRef} from "../../../../../shared/pathfinder";
import {SimpleTextField} from "../../fields/simple/SimpleTextField";
import DescriptionDbo = data.DescriptionDbo;

interface MultipleFeaturesEditorProps {
  features: FeatureRef[];
  onSave: (features: FeatureRef[]) => Promise<void>;
}

export default function MultipleFeaturesEditor({ features, onSave }: MultipleFeaturesEditorProps) {

  const [ descriptionChanged, setDescriptionChanged ] = useState(false);
  const [ description, setDescription ] = useState(() => determineDescription(features));
  const [ appendToPrerequisitesChanged, setAppendToPrerequisitesChanged ] = useState(false);
  const [ appendToPrerequisites, setAppendToPrerequisites ] = useState('');

  async function handleSave() {
    if (descriptionChanged) {
      features.forEach(f => f.description = description);
    }
    if (appendToPrerequisitesChanged) {
      features.forEach(f => f.prerequisites = (f.prerequisites ?? '') + appendToPrerequisites)
    }
    await onSave?.(features);

    setAppendToPrerequisites('');
    setAppendToPrerequisitesChanged(false);

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

  function handleDescriptionChanged(value: DescriptionDbo) {
    setDescription(value);
    setDescriptionChanged(true);
  }

  function handleAppendToPrerequisitesChanged(value: string) {
    setAppendToPrerequisites(value);
    setAppendToPrerequisitesChanged(true);
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
        <DescriptionEditor value={description} onChange={handleDescriptionChanged}/>
        <SimpleTextField label={"Append to Prerequisites"}
                         value={appendToPrerequisites}
                         onChange={handleAppendToPrerequisitesChanged} />
      </div>
    </section>
  </div>
}

function determineDescription(features: FeatureRef[]): DescriptionDbo {
  let first: DescriptionDbo|undefined|null = undefined;
  for (let feature of features) {
    if (first === undefined) {
      const current = feature?.description;
      if (typeof current === 'string') {
        first = new DescriptionDbo();
        first.text = current;
      } else {
        first = current;
      }
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
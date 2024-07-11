import {useState} from "react";
import LoadingBlock from "../../LoadingBlock";
import {data} from "../../../../../shared/compiled";
import {FeatureRef} from "../../../../../shared/pathfinder";
import {IdField} from "../../fields/IdField";
import {NameField} from "../../fields/NameField";
import {DescriptionField} from "../../fields/DescriptionField";
import {SourceField} from "../../fields/SourceField";
import {SaveButton} from "../../SaveButton";
import {FeatTypeField} from "../../fields/FeatTypeField";
import {PrerequisitesField} from "../../fields/PrerequisitesField";
import {SimpleTextField} from "../../fields/simple/SimpleTextField";
import {SimpleBooleanField} from "../../fields/simple/SimpleBooleanField";
import {EffectsField} from "../../fields/EffectsField";
import {LinksField} from "../../fields/LinksField";
import {StacksField} from "../../fields/StacksField";
import DescriptionDbo = data.DescriptionDbo;

interface FeatEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => Promise<void>;
}

export default function FeatEditor({ feature, onSave }: FeatEditorProps) {
  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ type, setType ] = useState(feature.type);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ prerequisites, setPrerequisites ] = useState(feature.prerequisites);
  const [ source, setSource ] = useState(feature.source);
  const [ benefit, setBenefit ] = useState(feature.benefit);
  const [ normal, setNormal ] = useState(feature.normal);
  const [ special, setSpecial ] = useState(feature.special);
  const [ note, setNote ] = useState(feature.note);
  const [ multiples, setMultiples ] = useState(feature.multiples);
  const [ effects, setEffects ] = useState(feature.effects ?? []);
  const [ links, setLinks ] = useState(feature.links ?? []);
  const [ fixed_stacks, setFixedStacks ] = useState(feature.fixed_stacks);
  const [ repeating_stack, setRepeatingStack ] = useState(feature.repeating_stack);

  async function handleSave() {
    const modified = {
      ...feature,
      id: id,
      name: name,
      type: type,
      prerequisites: prerequisites,
      benefit: benefit,
      normal: normal,
      special: special,
      note: note,
      multiples: multiples,
      effects: effects,
      fixed_stacks: fixed_stacks,
      repeating_stack: repeating_stack,
      links: links
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
      <FeatTypeField value={type} onChange={setType} />
      <DescriptionField value={description} onChange={setDescription} />
      <PrerequisitesField value={prerequisites} onChange={setPrerequisites} />
      <SimpleTextField label={"Benefit"} value={benefit} onChange={setBenefit} />
      <SimpleTextField label={"Normal"} value={normal} onChange={setNormal} />
      <SimpleTextField label={"Special"} value={special} onChange={setSpecial} />
      <SimpleTextField label={"Note"} value={note} onChange={setNote} />
      <SimpleBooleanField label={"Multiples"} value={multiples} onChange={setMultiples} />
      <EffectsField value={effects} onChange={setEffects} />
      <LinksField value={links} onChange={setLinks} />
      <StacksField fixedStacks={fixed_stacks} repeatingStack={repeating_stack} onChangeFixedStack={setFixedStacks} onChangeRepeatingStack={setRepeatingStack} />
      <SourceField value={source} onChange={setSource} />
    </section>
  </div>
}
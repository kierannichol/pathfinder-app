import {useState} from "react";
import {data} from "../../../../../shared/compiled";
import {FeatureRef} from "../../../../../shared/pathfinder";
import {IdField} from "../../fields/IdField";
import {NameField} from "../../fields/NameField";
import {DescriptionField} from "../../fields/DescriptionField";
import {CategoryField} from "../../fields/characterclass/CategoryField";
import {SourceField} from "../../fields/SourceField";
import {HitDieField} from "../../fields/characterclass/HitDieField";
import {ClassFeaturesField} from "../../fields/characterclass/ClassFeaturesField";
import {SaveButton} from "../../SaveButton";
import {DataSection} from "../../DataSection";
import {SimpleTextListField} from "../../fields/simple/SimpleTextListField";
import DescriptionDbo = data.DescriptionDbo;

interface CharacterClassEditorProps {
  feature: FeatureRef;
  onSave?: (changed: FeatureRef) => Promise<void>;
}

export default function CharacterClassEditor({ feature, onSave }: CharacterClassEditorProps) {
  function useLevelsState(): [string[][], (l: number, updated: string[]) => void] {
    const [ state, setState ] = useState(() => {
      const initialState: string[][] = [];
      (feature.levels ?? []).forEach(level => {
        initialState[level.level] = level.class_feature_names;
      });

      for (let i = 1; i <= 20; i++) {
        if (!(i in initialState)) {
          initialState[i] = [];
        }
      }

      return initialState;
    });

    return [ state, (l: number, updated: string[]) => {
      const copy = [...state];
      copy[l] = updated;
      setState(copy);
    }];
  }

  const [ id, setId ] = useState(feature.id);
  const [ name, setName ] = useState(feature.name);
  const [ description, setDescription ] = useState(feature.description ?? new DescriptionDbo());
  const [ category, setCategory ] = useState(feature.category);
  const [ hitDie, setHitDie ] = useState(feature.hit_die);
  const [ levels, setLevel ] = useLevelsState();
  const [ classFeatures, setClassFeatures ] = useState(feature.class_features);
  const [ source, setSource ] = useState(feature.source);

  async function handleSave(): Promise<void> {
    const modified = {
      ...feature,
      id: id,
      name: name,
      description: description,
      category: category,
      hit_die: hitDie,
      class_features: classFeatures.filter(e => e !== undefined && e !== null),
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
      <CategoryField value={category} onChange={setCategory} />
      <DescriptionField value={description} onChange={setDescription} />
      <HitDieField value={hitDie} onChange={setHitDie} />

      {levels.map((levelClassFeatures, levelNumber) =>
          <DataSection key={levelNumber} label={`Level ${levelNumber}`}>
            <SimpleTextListField elementNoun={"Class Feature"}
                                 value={levelClassFeatures}
                                 onChange={v => setLevel(levelNumber, v)} />
          </DataSection>)}

      {/*{Array.from({length : 20}, (_, v) => (v+1))*/}
      {/*    .map(levelNumber => <ClassLevelEditor classId={id} value={levels[le]} onChange={setItem} />)}*/}

      <ClassFeaturesField value={classFeatures} onChange={setClassFeatures} classId={id} />
      <SourceField value={source} onChange={setSource} />
    </section>
  </div>
}
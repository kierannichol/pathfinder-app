import LevelStatsDisplay from "./LevelStatsDisplay.tsx";
import {useMemo} from "react";
import CharacterFeatureList from "./CharacterFeatureList.tsx";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import ChoiceRef, {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import SpellBookEditorButton from "./SpellBookEditorButton.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import Feature from "../../../data/model/Feature.ts";
import ArchetypeEditor from "./ArchetypeEditor.tsx";
import {CharacterChoiceSelectHandler} from "./CharacterEditor.tsx";

interface CharacterLevelEditorProps {
  characterAtLevel: CharacterAtLevel;
  characterAtPreviousLevel: CharacterAtLevel;
  onChange: CharacterChoiceSelectHandler;
}

export default function CharacterLevelEditor({ characterAtLevel, characterAtPreviousLevel, onChange }: CharacterLevelEditorProps) {
  const characterChanges = useMemo(() => characterAtLevel.diff(characterAtPreviousLevel),
      [characterAtLevel, characterAtPreviousLevel]);

  const newFeatures = useMemo(() => characterChanges.features.filter(showFeature), [characterChanges]);

  return <div>
    <ArchetypeEditor characterAtLevel={characterChanges} onChange={onChange} />

    <LevelStatsDisplay characterAtLevel={characterAtLevel} />

    <div>
      <SpellBookEditorButton
          characterAtLevel={characterChanges}
          onChange={onChange} />
    </div>

    {characterChanges.choices.filter(choice => showChoice(choice)).filter(choice => choice instanceof FeatureSelectChoiceRef).map(choice => <div key={choice.path}>
      <label>{choice.label}</label>
      <DataChoiceSelectButton
          choiceRef={choice as FeatureSelectChoiceRef}
          search={"auto"}
          characterAtLevel={characterAtLevel}
          onSelect={selected => onChange(choice, selected)} />
    </div>)}

    {newFeatures.length > 0 && <><label>New Features</label>
    <CharacterFeatureList characterAtLevel={characterAtLevel} features={newFeatures} /></>}
  </div>
}

function showChoice(choice: ChoiceRef): boolean {
  return !(choice.type === 'class'
    || choice.type === 'spell'
    || choice.type === 'archetype');
}

function showFeature(feature: Feature): boolean {
  return !(feature.tags.includes('archetype')
    || feature.tags.includes('class')
    || feature.id.startsWith('proficiency:')
    || feature.tags.includes('spell'));
}
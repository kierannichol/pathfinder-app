import LevelStatsDisplay from "./LevelStatsDisplay.tsx";
import {useMemo} from "react";
import CharacterFeatureList from "./CharacterFeatureList.tsx";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import SpellBookEditorButton from "./SpellBookEditorButton.tsx";
import ArchetypeEditor from "./ArchetypeEditor.tsx";
import {CharacterChoiceSelectHandler} from "./CharacterEditor.tsx";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {ChoiceModel, SelectChoiceModel} from "../../model/ChoiceModel.ts";
import {FeatureModel} from "../../model/FeatureModel.ts";

interface CharacterLevelEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  characterAtPreviousLevel: CharacterAtLevelModel;
  onChange: CharacterChoiceSelectHandler;
}

export default function CharacterLevelEditor({ characterAtLevel, characterAtPreviousLevel, onChange }: CharacterLevelEditorProps) {
  const characterChanges = useMemo(() => characterAtLevel.diff(characterAtPreviousLevel),
      [characterAtLevel, characterAtPreviousLevel]);

  const newFeatures = useMemo(() => characterChanges.features.filter(showFeature), [characterChanges]);

  return <div>
    <ArchetypeEditor characterAtLevel={characterChanges} onChange={onChange} />

    <LevelStatsDisplay characterAtLevel={characterAtLevel} />

    {characterAtLevel.search("ability:spellcasting#*")
      .filter(f => f.id.startsWith("ability:spellcasting#"))
      .map(spellcastingFeature =>
    <div key={spellcastingFeature.id}>
      <SpellBookEditorButton
          characterAtLevel={characterAtLevel}
          onChange={onChange} />
    </div>)}

    {characterChanges.choices.filter(choice => showChoice(choice)).filter(choice => choice instanceof SelectChoiceModel).map(choice => <div key={choice.path}>
      <label>{choice.label}</label>
      <DataChoiceSelectButton
          choiceRef={choice as SelectChoiceModel}
          search={"auto"}
          characterAtLevel={characterAtLevel}
          onSelect={selected => onChange(choice, selected)} />
    </div>)}

    {newFeatures.length > 0 && <><label>New Features</label>
    <CharacterFeatureList characterAtLevel={characterAtLevel} features={newFeatures} /></>}
  </div>
}

function showChoice(choice: ChoiceModel): boolean {
  return !(choice.type === 'class'
    || choice.type === 'spell'
    || choice.type === 'archetype');
}

function showFeature(feature: FeatureModel): boolean {
  return !(feature.tags.includes('archetype')
    || feature.tags.includes('class')
    || feature.key.startsWith('proficiency:')
    || feature.tags.includes('spell'));
}
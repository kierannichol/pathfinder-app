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
import EquipmentEditorButton from "./equipment/EquipmentEditorButton.tsx";

interface CharacterLevelEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  characterAtPreviousLevel: CharacterAtLevelModel;
  onChange: CharacterChoiceSelectHandler;
}

export default function CharacterLevelEditor({ characterAtLevel, characterAtPreviousLevel, onChange }: CharacterLevelEditorProps) {
  const characterChanges = useMemo(() => characterAtLevel.diff(characterAtPreviousLevel),
      [characterAtLevel, characterAtPreviousLevel]);

  const newFeatures = useMemo(() => characterChanges.features
      .filter(showFeature)
      .filter(feature => notFromChoice(feature, characterAtLevel)),
      [characterChanges]);

  return <div>
    <ArchetypeEditor characterAtLevel={characterChanges} onChange={onChange} />

    <LevelStatsDisplay characterAtLevel={characterAtLevel} />

    <div className="d-flex flex-row gap-2">
      {characterAtLevel.search("ability:spellcasting#*")
        .filter(f => f.id.startsWith("ability:spellcasting#"))
        .map(spellcastingFeature =>
          <div key={spellcastingFeature.id}>
            <SpellBookEditorButton
                characterAtLevel={characterAtLevel}
                onChange={onChange} />
          </div>)}

      <EquipmentEditorButton
          characterAtLevel={characterAtLevel}
          onChange={onChange} />
    </div>

    {characterChanges.choices.filter(choice => showChoice(choice)).filter(choice => choice instanceof SelectChoiceModel).map(choice =>
        <>
          <label>{choice.label}</label>
          <DataChoiceSelectButton
              key={choice.path}
              choiceRef={choice as SelectChoiceModel}
              search={"auto"}
              characterAtLevel={characterAtLevel}
              onSelect={selected => onChange(choice, selected)} />
        </>)}

    {newFeatures.length > 0 && <><label>New Features</label>
    <CharacterFeatureList characterAtLevel={characterAtLevel} features={newFeatures} /></>}
  </div>
}

function notFromChoice(feature: FeatureModel, characterAtLevel: CharacterAtLevelModel) {
  return !characterAtLevel.choices
      .find(choice => characterAtLevel.selected(choice) === feature.key);
}

function showChoice(choice: ChoiceModel): boolean {
  return !(choice.type === 'class'
    || choice.type === 'spell'
    || choice.type === 'archetype'
    || choice.type === 'equipment');
}

function showFeature(feature: FeatureModel): boolean {
  return !(feature.tags.includes('archetype')
    || feature.tags.includes('class')
    || feature.key.startsWith('proficiency:')
    || feature.tags.includes('spell'));
}
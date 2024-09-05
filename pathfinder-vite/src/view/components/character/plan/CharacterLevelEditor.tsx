import LevelStatsDisplay from "../LevelStatsDisplay.tsx";
import {useMemo} from "react";
import CharacterFeatureList from "../CharacterFeatureList.tsx";
import DataChoiceSelectButton from "../../controls/DataChoiceSelectButton.tsx";
import SpellBookEditorButton from "../SpellBookEditorButton.tsx";
import ArchetypeEditor from "../ArchetypeEditor.tsx";
import {CharacterChoiceSelectHandler} from "../edit/CharacterEditor.tsx";
import EquipmentEditorButton from "../equipment/EquipmentEditorButton.tsx";
import CharacterAtLevel from "../../../../data/v8/CharacterAtLevel.ts";
import {ChoiceInputType, ChoiceRef, SelectChoiceRef} from "@/data/v8/Choice.ts";
import {Feature} from "@/data/v8/Feature.ts";
import EditSkillsButton from "@/view/components/character/plan/EditSkillsButton.tsx";

interface CharacterLevelEditorProps {
  characterAtLevel: CharacterAtLevel;
  characterAtPreviousLevel: CharacterAtLevel;
  onChange: CharacterChoiceSelectHandler;
}

export default function CharacterLevelEditor({ characterAtLevel, characterAtPreviousLevel, onChange }: CharacterLevelEditorProps) {
  const characterChanges = useMemo(() => characterAtLevel.diff(characterAtPreviousLevel),
      [characterAtLevel, characterAtPreviousLevel]);

  const newFeatures = useMemo(() => characterChanges.features
      .filter(showFeature)
      .filter(feature => notFromChoice(feature, characterAtLevel)),
      [characterChanges]);

  console.log(characterAtLevel)

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

      <EditSkillsButton characterAtLevel={characterAtLevel} onChange={onChange} />
    </div>

    {characterChanges.choices.filter(choice => showChoice(choice)).filter(choice => choice.inputType === ChoiceInputType.Select).map(choice =>
        <div key={choice.path}>
          <label>{choice.label}</label>
          <DataChoiceSelectButton
              key={choice.path}
              choiceRef={choice as SelectChoiceRef}
              search={"auto"}
              characterAtLevel={characterAtLevel}
              characterAtPreviousLevel={characterAtPreviousLevel}
              onSelect={selected => onChange(choice, selected)} />
        </div>)}

    {newFeatures.length > 0 && <><label>New Features</label>
    <CharacterFeatureList characterAtLevel={characterAtLevel} features={newFeatures} /></>}
  </div>
}

function notFromChoice(feature: Feature, characterAtLevel: CharacterAtLevel) {
  return !characterAtLevel.choices
      .find(choice => characterAtLevel.selected(choice) === feature.key);
}

function showChoice(choice: ChoiceRef): boolean {
  return !(choice.type === 'class'
      || choice.type === 'spell'
      || choice.type === 'archetype'
      || choice.type === 'equipment'
      || choice.type === 'skill');
}

function showFeature(feature: Feature): boolean {
  return !(feature.tags.includes('archetype')
    || feature.tags.includes('class')
    || feature.key.startsWith('proficiency:')
    || feature.tags.includes('spell')
    || feature.key.startsWith('skill:'));
}
import ChoiceRef, {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import {useMemo} from "react";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";

interface SpellBookEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange: (choice: ChoiceRef, value: string) => void;
}

export default function SpellBookEditor({ characterAtLevel, onChange }: SpellBookEditorProps) {
  const spellChoicesByLevel = useMemo(() => {
        const byLevel: { [label: string]: FeatureSelectChoiceRef[] } = {};

        characterAtLevel.choices
            .filter(choice => choice.type === 'spell')
            .filter(choice => choice instanceof FeatureSelectChoiceRef)
            .forEach(choice => {
              const featureSelectChoice = choice as FeatureSelectChoiceRef;
              byLevel[choice.label] ??= [];
              byLevel[choice.label].push(featureSelectChoice);
            });

        return byLevel;
      },
      [characterAtLevel]);

  return <div>
    {Object.entries(spellChoicesByLevel).map(([label, choices]) => <div key={label}>
      <label>{label}</label>
      {choices.map(choice =>
      <DataChoiceSelectButton
          key={choice.path}
          choiceRef={choice as FeatureSelectChoiceRef}
          variant={['default', 'list-item']}
          search={"auto"}
          characterAtLevel={characterAtLevel}
          onSelect={selected => onChange(choice, selected)} />)}
    </div>)}
  </div>
}
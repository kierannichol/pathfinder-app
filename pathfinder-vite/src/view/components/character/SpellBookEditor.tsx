import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import {useMemo} from "react";
import {ResolvedValue} from "@kierannichol/formula-js";
import {ChoiceSelectedHandler, SelectChoiceModel} from "../../model/ChoiceModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";

interface SpellBookEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  onChange: ChoiceSelectedHandler;
}

export default function SpellBookEditor({ characterAtLevel, onChange }: SpellBookEditorProps) {
  return <table border={2} cellPadding="5px">
    <thead>
      <tr>
        <th>0th</th>
        <th>1st</th>
        <th>2nd</th>
        <th>3rd</th>
        <th>4th</th>
        <th>5th</th>
        <th>6th</th>
        <th>7th</th>
        <th>8th</th>
        <th>9th</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{spellsKnown(characterAtLevel, 0)}</td>
        <td>{spellsKnown(characterAtLevel, 1)}</td>
        <td>{spellsKnown(characterAtLevel, 2)}</td>
        <td>{spellsKnown(characterAtLevel, 3)}</td>
        <td>{spellsKnown(characterAtLevel, 4)}</td>
        <td>{spellsKnown(characterAtLevel, 5)}</td>
        <td>{spellsKnown(characterAtLevel, 6)}</td>
        <td>{spellsKnown(characterAtLevel, 7)}</td>
        <td>{spellsKnown(characterAtLevel, 8)}</td>
        <td>{spellsKnown(characterAtLevel, 9)}</td>
      </tr>
    </tbody>
  </table>
}

function spellsKnown(characterAtLevel: CharacterAtLevelModel, spellLv: number) {
  const resolved = characterAtLevel.resolve(
      // `sum(@trait:level_${spellLv}_spells_per_day#*)`
      `{sum(@trait:level_${spellLv}_spells_per_day#*)}`

  ) ?? ResolvedValue.None;
  if (resolved.equals(ResolvedValue.of(''))) {
    return "-";
  }
  return resolved.asText();
}

export function SpellBookEditor2({ characterAtLevel, onChange }: SpellBookEditorProps) {
  const spellChoicesByLevel = useMemo(() => {
        const byLevel: { [label: string]: SelectChoiceModel[] } = {};

        characterAtLevel.choices
            .filter(choice => choice.type === 'spell')
            .filter(choice => choice instanceof SelectChoiceModel)
            .forEach(choice => {
              const featureSelectChoice = choice as SelectChoiceModel;
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
          choiceRef={choice as SelectChoiceModel}
          variant={['default', 'list-item']}
          search={"auto"}
          characterAtLevel={characterAtLevel}
          onSelect={selected => onChange(choice, selected)} />)}
    </div>)}
  </div>
}
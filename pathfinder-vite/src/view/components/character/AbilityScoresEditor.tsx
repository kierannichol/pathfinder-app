import {ReactNode, useMemo, useState} from "react";
import AbilityScoreEditor from "./AbilityScoreEditor.tsx";
import styles from "./AbilityScoresEditor.module.css";
import ChoiceSelectorDialog from "../controls/ChoiceSelectorDialog.tsx";
import {ChoiceSelectorOption} from "../controls/ChoiceSelectorList.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import ChoiceRef, {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";

const AbilityScoreOptions = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
.map(score => new ChoiceSelectorOption(
    score.toString(),
    abilityScoreLabel(score),
    true
));

interface AbilityScoresEditorProps {
  characterAtLevel: CharacterAtLevel;
  onChange?: (choice: ChoiceRef, value: string) => void;
}

export default function AbilityScoresEditor({ characterAtLevel, onChange }: AbilityScoresEditorProps) {
  return <div className={styles.control}>
    <div className={styles.cost}>
      <code>Ability Point Cost: {characterAtLevel.resolve("ability_point_cost")?.asNumber()}</code>
    </div>
    <div className={styles.abilityScores}>
      {['str', 'dex', 'con', 'int', 'wis', 'cha'].map(ability =>
        <AbilityScoreItem key={ability}
                          ability={ability}
                          characterAtLevel={characterAtLevel}
                          onChange={onChange} />
      )}
    </div>
    <div>
      {characterAtLevel.choicesOfType("asi").map(choice => <DataChoiceSelectButton
          key={choice.key}
          choiceRef={choice as FeatureSelectChoiceRef}
          characterAtLevel={characterAtLevel}
          onSelect={selected => onChange?.(choice, selected)}/>)}
    </div>
  </div>
}

interface AbilityScoreItemProps {
  ability: string;
  characterAtLevel: CharacterAtLevel;
  onChange?: (choice: ChoiceRef, value: string) => void;
}

function AbilityScoreItem({ ability, characterAtLevel, onChange }: AbilityScoreItemProps) {

  const [ editing, setEditing ] = useState(false);

  const current = useMemo(() => characterAtLevel.resolve(`${ability}_score`)?.asNumber() ?? 0,
      [ability, characterAtLevel]);

  const base = useMemo(() => characterAtLevel.resolve(`${ability}:base`)?.asNumber() ?? 0,
      [ability, characterAtLevel]);

  const choice = useMemo(() => characterAtLevel.choice(ability + "_base"),
      [ability, characterAtLevel]);

  function handleSelect(selected: string) {
    if (!choice) {
      return;
    }
    onChange?.(choice, selected);
    setEditing(false);
  }

  if (!choice) {
    console.error(`No choice for ${ability}`);
    return;
  }

  return <div key={choice.path} className={styles.abilityScore}>
    <AbilityScoreEditor
        label={ability.toUpperCase()}
        score={current}
        base={base}
        onClick={() => setEditing(true)} />
    <ChoiceSelectorDialog choiceName={choice.label}
                          show={editing}
                          value={base.toString()}
                          optionsFn={() => AbilityScoreOptions}
                          onSelect={handleSelect}
                          search={false}
                          onCancel={() => setEditing(false)}
                          variant={'white'}
                          sortBy={"none"} />
  </div>
}

function abilityScoreLabel(score: number): ReactNode {
  const mod = Math.floor(score / 2) - 5;
  const modString = mod >= 0 ? `+${mod}` : mod;
  return <span key={`score-${score}`}>{score} <code>({modString})</code></span>
}
import React, {useCallback} from "react";
import AbilityScores from "../../database/AbilityScores";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface AbilityScoreSelectButtonProps {
  value: string|undefined;
  onSelect: (value: string) => void;
}

export default function AbilityScoreSelectButton({ value, onSelect }: AbilityScoreSelectButtonProps) {
  const optionsFn = useCallback(() => {
    return AbilityScores.map(ability =>
        new ChoiceSelectorOption(ability.id, ability.name,
            true,
            ''))
  }, []);
  return <ChoiceSelectButton choiceName="Ability Score" value={value} optionsFn={optionsFn} onSelect={onSelect} />
}
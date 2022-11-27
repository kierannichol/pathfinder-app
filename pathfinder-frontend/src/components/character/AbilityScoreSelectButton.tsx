import React, {useMemo} from "react";
import {Character} from "../../model/character/Character";
import TextLookup from "../../model/TextLookup";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface AbilityScoreSelectButtonProps {
  value: string|undefined;
  onSelect: (value: string) => void;
}

export default function AbilityScoreSelectButton({ value, onSelect }: AbilityScoreSelectButtonProps) {
  const options = useMemo(() => {
    return Character.ABILITIES.map(ability =>
        new ChoiceSelectorOption(ability, TextLookup.get(`ABILITY_${ability}_NAME_LONG`),
            true,
            ''))
  }, []);
  return <ChoiceSelectButton choiceName="Ability Score" value={value} options={options} onSelect={onSelect} />
}
import React, {useCallback} from "react";
import MercyDatabase from "../../database/MercyDatabase";
import {Formula} from "../../logic/Formula";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface MercySelectButtonProps {
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
}

export default function MercySelectButton({ value, onSelect, characterAtLevel }: MercySelectButtonProps) {
  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return Object.values(MercyDatabase).map(mercy =>
        new ChoiceSelectorOption(mercy.id, mercy.name,
            Formula.parse(mercy.prerequisites_formula)
            .resolve(characterWithoutCurrentSelection)?.asBoolean() ?? false,
            '',
            '',
            () => Promise.resolve(mercy.description)))
  }, [characterAtLevel, value]);
  return <ChoiceSelectButton choiceName="Mercy" value={value} optionsFn={optionsFn} onSelect={onSelect} />
}
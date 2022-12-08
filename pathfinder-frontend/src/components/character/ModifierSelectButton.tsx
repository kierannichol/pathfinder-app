import React, {useCallback} from "react";
import {BaseModifierDatabase} from "../../database/v2/BaseModifierDatabase";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface ModifierSelectButtonProps {
  choiceName: string;
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
  database: BaseModifierDatabase;
  variant?: string;
}

export default function ModifierSelectButton({ choiceName, value, onSelect, characterAtLevel, database, variant }: ModifierSelectButtonProps) {
  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return database.all.map(modifierSummary =>
        new ChoiceSelectorOption(modifierSummary.id, modifierSummary.name,
            true,
            '',
            '',
            () => database.load(modifierSummary.id)
            .then(modifier => modifier
                ? <div><p>{modifier.descriptionText}</p></div>
                : '')))
  }, [characterAtLevel, value, database]);
  return <ChoiceSelectButton
      choiceName={choiceName}
      value={value}
      optionsFn={optionsFn}
      onSelect={onSelect}
      variant={variant} />
}
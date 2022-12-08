import React, {useCallback} from "react";
import {BaseAbilityDatabase} from "../../database/v2/BaseAbilityDatabase";
import {AbilitySummary} from "../../model/character/Ability";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import AbilityDescription from "./edit/AbilityDescription";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface AbilitySelectButtonProps {
  choiceName: string;
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
  database: BaseAbilityDatabase;
  filterFn?: (ability: AbilitySummary) => boolean;
  variant?: string;
}

export default function AbilitySelectButton({ choiceName, value, onSelect, characterAtLevel, database, variant, filterFn = (_ => true) }: AbilitySelectButtonProps) {
  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return database.all.filter(ability => filterFn(ability)).map(abilitySummary =>
        new ChoiceSelectorOption(abilitySummary.id, abilitySummary.name,
            () => abilitySummary.isValidFor(characterWithoutCurrentSelection),
            '',
            '',
            () => database.load(abilitySummary.id)
                .then(ability => ability ? <AbilityDescription ability={ability} characterAtLevel={characterAtLevel} /> : '')))
  }, [characterAtLevel, value, database]);
  return <ChoiceSelectButton variant={variant} choiceName={choiceName} value={value} optionsFn={optionsFn} onSelect={onSelect} />
}
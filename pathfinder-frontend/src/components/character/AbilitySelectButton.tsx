import React, {useCallback} from "react";
import CharacterAtLevel from "../../v3/model/CharacterAtLevel";
import {SelectChoice} from "../../v3/model/Choice";
import DataHub from "../../v3/model/DataHub";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface AbilitySelectButtonProps {
  choice: SelectChoice;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
  database: DataHub;
  variant?: string;
}

export default function AbilitySelectButton({ choice, onSelect, characterAtLevel, database, variant }: AbilitySelectButtonProps) {
  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(choice.current);
    return database.options(choice.options).map(abilitySummary =>
        new ChoiceSelectorOption(abilitySummary.id, abilitySummary.name,
            () => abilitySummary.isValidFor(characterWithoutCurrentSelection),
            '',
            '',
            async () => database.description(abilitySummary.id)))
            // () => database.load(abilitySummary.id)
            //     .then(ability => ability ? <AbilityDescription ability={ability} characterAtLevel={characterAtLevel} /> : '')))
  }, [characterAtLevel, choice, database]);
  return <ChoiceSelectButton variant={variant} choiceName={choice.label} value={choice.current} optionsFn={optionsFn} onSelect={onSelect} />
}
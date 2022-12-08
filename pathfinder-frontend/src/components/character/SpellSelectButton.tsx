import React, {useCallback} from "react";
import {BaseSpellDatabase} from "../../database/v2/BaseSpellDatabase";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";
import SpellDescription from "./edit/SpellDescription";

interface SpellSelectButtonProps {
  choiceName: string;
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
  database: BaseSpellDatabase;
  variant?: string;
}

export default function SpellSelectButton({ choiceName, value, onSelect, characterAtLevel, database, variant }: SpellSelectButtonProps) {
  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return database.all.map(spellSummary =>
        new ChoiceSelectorOption(spellSummary.id, spellSummary.name,
            () => spellSummary.isValidFor(characterWithoutCurrentSelection),
            '',
            '',
            () => database.load(spellSummary.id)
                .then(spell => spell ? <SpellDescription spell={spell} characterAtLevel={characterAtLevel} /> : '')))
  }, [characterAtLevel, value, database]);
  return <ChoiceSelectButton
      choiceName={choiceName}
      value={value}
      optionsFn={optionsFn}
      onSelect={onSelect}
      variant={variant} />
}
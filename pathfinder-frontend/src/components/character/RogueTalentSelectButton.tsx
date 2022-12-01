import React, {useCallback} from "react";
import {useRogueTalentDatabase} from "../../database/v2/RogueTalentDatabase";
import {Formula} from "../../logic/Formula";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";
import PrerequisiteList from "./edit/PrerequisiteList";

interface RogueTalentSelectButtonProps {
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
}

export default function RogueTalentSelectButton({ value, onSelect, characterAtLevel }: RogueTalentSelectButtonProps) {
  const rogueTalentDatabase = useRogueTalentDatabase();

  const optionsFn = useCallback(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return rogueTalentDatabase.all.map(ability =>
        new ChoiceSelectorOption(ability.id, ability.name,
            Formula.parse(ability.prerequisites_formula)
            .resolve(characterWithoutCurrentSelection)?.asBoolean() ?? true,
            '',
            '',
            () => rogueTalentDatabase.load(ability.id).then(loaded => {
              if (loaded?.description === '') {
                return undefined;
              }
              return <div><PrerequisiteList abilitySummary={ability} characterAtLevel={characterAtLevel}/>
                <p><b>Benefit:</b> {loaded?.description}</p></div>
            })))
  }, [characterAtLevel, value, rogueTalentDatabase]);
  return <ChoiceSelectButton search={true} choiceName="Rogue Talent" value={value} optionsFn={optionsFn} onSelect={onSelect} />
}
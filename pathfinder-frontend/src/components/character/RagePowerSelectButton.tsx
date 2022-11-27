import React, {useMemo} from "react";
import {useRagePowerDatabase} from "../../database/v2/RagePowerDatabase";
import {Ability} from "../../model/character/Ability";
import {CharacterAtLevel} from "../../model/character/CharacterAtLevel";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface RagePowerSelectButtonProps {
  value: string;
  onSelect: (value: string) => void;
  characterAtLevel: CharacterAtLevel;
}

export default function RagePowerSelectButton({ value, onSelect, characterAtLevel }: RagePowerSelectButtonProps) {
  const ragePowerDatabase = useRagePowerDatabase();
  const options = useMemo(() => {
    const characterWithoutCurrentSelection = characterAtLevel.without(value);
    return ragePowerDatabase.all.map(ragePower =>
        new ChoiceSelectorOption(ragePower.id, ragePower.name,
            ragePower.isValidFor(characterWithoutCurrentSelection),
            '',
            '',
            () => ragePowerDatabase.load(ragePower.id).then(loaded => loaded ? <RagePowerDescription ability={loaded} characterAtLevel={characterAtLevel}/> : "")))
  }, [characterAtLevel]);
  return <ChoiceSelectButton choiceName="Rage Power"
                             search={true}
                             value={value}
                             options={options}
                             onSelect={onSelect} />
}

interface RagePowerDescriptionProps {
  ability: Ability;
  characterAtLevel: CharacterAtLevel;
}
function RagePowerDescription({ ability, characterAtLevel }: RagePowerDescriptionProps) {
  return <div>
    {/*<PrerequisiteList abilitySummary={ability} characterAtLevel={characterAtLevel} />*/}
    <div>{ability.description}</div>
  </div>
}
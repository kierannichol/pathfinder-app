import React, {useMemo} from "react";
import {useRaceDatabase} from "../../database/v2/RaceDatabase";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface CharacterRaceSelectButtonProps {
  value: string|undefined;
  onSelect: (value: string) => void;
}

export default function CharacterRaceSelectButton({ value, onSelect }: CharacterRaceSelectButtonProps) {
  const raceDatabase = useRaceDatabase();
  const options = useMemo(() => {
    return raceDatabase.all.map(race =>
        new ChoiceSelectorOption(race.id, race.name,
            true,
            ''))
  }, [raceDatabase]);
  return <ChoiceSelectButton choiceName="Race" value={value} options={options} onSelect={onSelect} />
}
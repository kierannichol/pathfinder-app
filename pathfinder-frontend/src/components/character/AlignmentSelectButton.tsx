import React, {useMemo} from "react";
import AlignmentDatabase from "../../database/AlignmentDatabase";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";

interface AlignmentSelectButtonProps {
  value: string|undefined;
  onSelect: (value: string|undefined) => void;
}

export default function AlignmentSelectButton({ value, onSelect }: AlignmentSelectButtonProps) {
  const options = useMemo(() => {
    return AlignmentDatabase.all.map(alignment =>
        new ChoiceSelectorOption(alignment.id, alignment.name,
            true,
            '',
            undefined,
            undefined))
  }, []);
  return <ChoiceSelectButton choiceName="Alignment" value={value} options={options} onSelect={onSelect} />
}
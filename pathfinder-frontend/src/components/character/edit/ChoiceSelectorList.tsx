import React from "react";
import PathfinderSelect from "../../common/PathfinderSelect";
import {ChoiceSelectorOption} from "./ChoiceSelectorDialog";

interface ChoiceSelectorListProps {
  options: ChoiceSelectorOption[];
  variant?: string;
  selected?: string|undefined;
  onSelect?: (optionId: string|undefined) => void;
}

export default function ChoiceSelectorList({ options, variant, selected, onSelect }: ChoiceSelectorListProps) {

  function OptionItem(option: ChoiceSelectorOption) {
    return <PathfinderSelect.Item key={option.id}
                                  itemKey={option.id}
                                  label={option.name}
                                  bodyFn={option.descriptionFn}
                                  disabled={!option.isValid}
                                  variant={variant} />
  }

  return <PathfinderSelect activeKey={selected} onChange={onSelect}>
    {options.map(option => OptionItem(option))}
  </PathfinderSelect>
}
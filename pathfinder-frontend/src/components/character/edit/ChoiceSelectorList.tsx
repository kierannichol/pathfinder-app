import React from "react";
import * as pfutils from "../../../util/pfutils";
import {PathfinderButtonVariants} from "../../common/PathfinderButton";
import PathfinderSelect from "../../common/PathfinderSelect";
import {ChoiceSelectorOption, ChoiceSelectorOptionsContainer} from "./ChoiceSelectorDialog";

interface ChoiceSelectorListProps {
  options: (ChoiceSelectorOption|ChoiceSelectorOptionsContainer)[];
  variant?: PathfinderButtonVariants;
  selected?: string|undefined;
  onSelect?: (optionId: string|undefined) => void;
}

export default function ChoiceSelectorList({ options, variant, selected, onSelect }: ChoiceSelectorListProps) {

  function OptionItem(option: ChoiceSelectorOption) {
    return <PathfinderSelect.Item key={option.id}
                                  itemKey={option.id}
                                  label={option.name}
                                  body={option.description}
                                  bodyFn={option.descriptionFn}
                                  disabled={!option.isValid}
                                  variant={variant} />
  }

  function OptionsContainerItem(option: ChoiceSelectorOptionsContainer) {
    return <PathfinderSelect.ItemContainer key={option.id}
                                  label={option.name}
                                  childrenFn={() => pfutils.array(option.options).map(option => option instanceof ChoiceSelectorOption
                                    ? OptionItem(option)
                                    : OptionsContainerItem(option))}
                                  disabled={!option.isValid}
                                  variant={variant} />
  }

  return <PathfinderSelect activeKey={selected} onChange={onSelect}>
    {options.map(option =>
        option instanceof ChoiceSelectorOption ? OptionItem(option) : OptionsContainerItem(option))}
  </PathfinderSelect>
}
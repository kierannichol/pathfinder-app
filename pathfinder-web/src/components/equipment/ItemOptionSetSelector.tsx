import {ItemOptionSummary} from "../../../data/v8/ItemOption.ts";
import {ItemOptionSet} from "../../../data/v8/ItemOptionSet.ts";
import {ItemOptionGroupSelector} from "./ItemOptionGroupSelector.tsx";

interface ItemOptionSetSelectorProps {
  optionSet: ItemOptionSet;
  selectedOptions: ItemOptionSummary[];
  onChangeOptions: (options: ItemOptionSummary[]) => void;
}

export function ItemOptionSetSelector({ optionSet, selectedOptions, onChangeOptions }: ItemOptionSetSelectorProps) {

  return <div>
    {optionSet.optionGroups.map(optionGroup =>
        <ItemOptionGroupSelector key={optionGroup.name}
                                 optionSet={optionSet}
                                 optionGroup={optionGroup}
                                 selected={selectedOptions.map(option => option.id)}
                                 onChangeOptions={onChangeOptions} />)}
  </div>
}
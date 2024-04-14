import styles from "./EquipmentDescription.module.css";
import ButtonBlock from "../controls/ButtonBlock.tsx";
import {useMemo, useState} from "react";
import {matchTags} from "../../../utils/tags.ts";
import {ItemOption, ItemOptionSet} from "../../../data/v8/Item.ts";
import {useItemDatabase} from "../../../data/context.tsx";

interface ItemOptionSetSelectorProps {
  optionSet: ItemOptionSet;
  selectedOptions: ItemOption[];
  onChangeOptions: (options: ItemOption[]) => void;
}

export function ItemOptionSetSelector({ optionSet, selectedOptions, onChangeOptions }: ItemOptionSetSelectorProps) {
  const database = useItemDatabase();

  const [ workingSelectedOptions, setWorkingSelectedOptions ] = useState<ItemOption[]>(selectedOptions);

  const availableOptions = useMemo(() => {
    if (!optionSet) return [];

    return database.options().filter(option => matchTags(option.tags, optionSet.optionTags));
  }, [database, optionSet]);

  function handleSelectOption(option: ItemOption) {
    const alreadySelected = workingSelectedOptions.find(opt => opt.id === option.id) !== undefined;
    if (alreadySelected) {
      const updated = workingSelectedOptions.filter(oid => oid.id !== option.id);
      setWorkingSelectedOptions(updated);
      onChangeOptions?.(updated);
      return;
    }

    const updated = workingSelectedOptions
      .filter(opt => opt.uniquenessTag !== option.uniquenessTag);
    updated.push(option);
    setWorkingSelectedOptions(updated);
    onChangeOptions?.(updated);
  }

  function isOptionSelected(option: ItemOption): boolean {
    return workingSelectedOptions?.map(o => o.id).includes(option.id) ?? false;
  }

  return <div className={styles.options}>
    {availableOptions.map(option =>
        <ButtonBlock key={option.id}
                     onClick={() => handleSelectOption(option)}
                     className={styles.option + " " + (isOptionSelected(option) ? styles.selectedOption : "")}>
      {option.name}
    </ButtonBlock>)}
  </div>
}
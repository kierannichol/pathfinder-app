import styles from "./EquipmentDescription.module.css";
import ButtonBlock from "../controls/ButtonBlock.tsx";
import {useItemDatabaseModel} from "../../model/ModelContext.tsx";
import {useMemo, useState} from "react";
import {ItemOptionModel, ItemOptionSetModel} from "../../model/ItemModel.ts";
import {matchTags} from "../../../utils/tags.ts";

interface ItemOptionSetSelectorProps {
  optionSet: ItemOptionSetModel;
  selectedOptions: ItemOptionModel[];
  onChangeOptions: (options: ItemOptionModel[]) => void;
}

export function ItemOptionSetSelector({ optionSet, selectedOptions, onChangeOptions }: ItemOptionSetSelectorProps) {
  const database = useItemDatabaseModel();

  const [ workingSelectedOptions, setWorkingSelectedOptions ] = useState<ItemOptionModel[]>(selectedOptions);

  const availableOptions = useMemo(() => {
    if (!optionSet) return [];

    return database.options().filter(option => matchTags(option.tags, optionSet.optionTags));
  }, [database, optionSet]);

  function handleSelectOption(option: ItemOptionModel) {
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

  function isOptionSelected(option: ItemOptionModel): boolean {
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
import {ItemModel, ItemOptionModel} from "../../model/ItemModel.ts";
import {useItemDatabaseModel} from "../../model/ModelContext.tsx";
import {useMemo} from "react";
import styles from "./EquipmentDescription.module.css";
import {onlyDefined} from "../../../app/pfutils.ts";
import {ItemOptionSetSelector} from "./ItemOptionSetSelector.tsx";

interface EquipmentDescriptionProps {
  item: ItemModel;
  selectedOptions: ItemOptionModel[];
  onChangeOptions: (options: ItemOptionModel[]) => void;
}

export function EquipmentDescription({ item, selectedOptions, onChangeOptions }: EquipmentDescriptionProps) {
  const database = useItemDatabaseModel();

  const optionSets = useMemo(() => {
    return onlyDefined(item.optionSetIds.map(optionSetId =>
        database.optionSet(optionSetId)));
  }, [database, item]);

  return <div>
    <p className={styles.description}>{item.description.text}</p>
    <div className={styles.optionSets}>
      {optionSets.map(optionSet => <ItemOptionSetSelector optionSet={optionSet}
                                                          key={optionSet.id}
                                                          selectedOptions={selectedOptions}
                                                          onChangeOptions={onChangeOptions} />)}
    </div>
  </div>
}
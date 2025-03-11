import {useMemo} from "react";
import styles from "./EquipmentDescription.module.css";
import {onlyDefined} from "@/app/pfutils.ts";
import {ItemOptionSetSelector} from "./ItemOptionSetSelector.tsx";
import {Item} from "@/data/Item.ts";
import {ItemOption} from "@/data/ItemOption.ts";
import {useItemDatabase} from "@/data/context.ts";

interface EquipmentDescriptionProps {
  item: Item;
  selectedOptions: ItemOption[];
  onChangeOptions: (options: ItemOption[]) => void;
}

export function EquipmentDescription({ item, selectedOptions, onChangeOptions }: EquipmentDescriptionProps) {
  const database = useItemDatabase();

  const optionSets = useMemo(() => {
    if (!item) return [];
    return onlyDefined(item.optionSetIds.map(optionSetId =>
        database.optionSet(optionSetId)));
  }, [database, item]);

  return <div>
    <p className={styles.description}>{item?.description.text}</p>
    <div className={styles.optionSets}>
      {optionSets.map(optionSet => <ItemOptionSetSelector optionSet={optionSet}
                                                          key={optionSet.id}
                                                          selectedOptions={selectedOptions}
                                                          onChangeOptions={onChangeOptions} />)}
    </div>
  </div>
}
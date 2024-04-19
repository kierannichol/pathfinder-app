import {useMemo} from "react";
import styles from "./EquipmentDescription.module.css";
import {onlyDefined} from "@/app/pfutils.ts";
import {ItemOptionSetSelector} from "./ItemOptionSetSelector.tsx";
import {Item} from "@/data/v8/Item.ts";
import {useItemDatabase} from "@/data/context.tsx";
import {ItemOptionSummary} from "@/data/v8/ItemOption.ts";

interface EquipmentDescriptionProps {
  item: Item;
  selectedOptions: ItemOptionSummary[];
  onChangeOptions: (options: ItemOptionSummary[]) => void;
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
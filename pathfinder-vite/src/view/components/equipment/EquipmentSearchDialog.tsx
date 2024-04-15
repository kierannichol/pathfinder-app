import React, {useEffect, useMemo, useState} from "react";
import ChoiceSelectorDialog from "../controls/ChoiceSelectorDialog.tsx";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "../controls/ChoiceSelectorList.tsx";
import {EquipmentDescription} from "./EquipmentDescription.tsx";
import {Equipment} from "../../../data/v8/Equipment.ts";
import {ItemSummary} from "../../../data/v8/ItemSummary.ts";
import {useItemDatabase} from "../../../data/context.tsx";
import {ItemOption} from "../../../data/v8/Item.ts";

interface EquipmentSearchDialogProps {
  show: boolean;
  value?: Equipment|undefined;
  onSelect?: (item: ItemSummary|undefined, options: ItemOption[]) => void;
  onCancel?: () => void;
}

export function EquipmentSearchDialog({ show, value, onSelect, onCancel }: EquipmentSearchDialogProps) {
  const database = useItemDatabase();

  const [ selectedOptions, setSelectedOptions ] = useState<ItemOption[]>(value?.options ?? []);

  function handleOptionsChanged(options: ItemOption[]) {
    setSelectedOptions(options);
  }

  useEffect(() => {
    setSelectedOptions(value?.options ?? []);
  }, [value]);

  function handleSelect(itemIdAsText: string) {
    const itemId = parseInt(itemIdAsText);
    const item = database.summary(itemId);
    onSelect?.(item, selectedOptions);
  }

  const categories = useMemo(() => {
    let categories = [
        new ChoiceSelectorCategory("Weapons", "weapon"),
        new ChoiceSelectorCategory("Armor", "armor"),
        new ChoiceSelectorCategory("Potions", "potion"),
        new ChoiceSelectorCategory("Wands", "wand"),
    ];

    if (value) {
      categories = [
          new ChoiceSelectorCategory("Edit", "*"),
          ...categories
      ];
    }

    return categories;
  }, [value]);

  return <ChoiceSelectorDialog choiceName={"Add Item"}
                               show={show}
                               search={true}
                               value={value?.item.uid}
                               onSelect={handleSelect}
                               onCancel={onCancel}
                               categories={categories}
                               variant="blue"
                               optionsFn={(query, category) => {
                                 let options = database.summaries()
                                   .filter(item => !query || item.name.toLowerCase().includes(query.toLowerCase()))
                                   .filter(item => !category?.tag || item.tags.includes(category.tag))
                                   .sort((a, b) => a.name.localeCompare(b.name));

                                 if (category?.tag === '*' && value) {
                                   options = [value.item];
                                 }

                                 return options
                                   .map(item => new ChoiceSelectorOption(item.uid, item.name, true,
                                       async () => {
                                         const loaded = await database.load(item.itemId);
                                         if (!loaded) {
                                           return <></>
                                         }
                                         return <EquipmentDescription item={loaded}
                                                                      selectedOptions={selectedOptions}
                                                                      onChangeOptions={handleOptionsChanged}/>
                                       }))
                               }} />
}
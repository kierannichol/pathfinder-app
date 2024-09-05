import React, {useMemo, useState} from "react";
import {ChoiceSelectorCategory} from "../controls/ChoiceSelectorList.tsx";
import {Equipment} from "@/data/v8/Equipment.ts";
import {ItemSummary} from "@/data/v8/ItemSummary.ts";
import {useItemDatabase} from "@/data/context.tsx";
import {ItemOptionSummary} from "@/data/v8/ItemOption.ts";
import {DescriptionBlock} from "@/view/components/DescriptionBlock.tsx";
import {EntitySelectDialog} from "@/view/components/entity/EntitySelectDialog.tsx";
import {
  EntitySelectCategory,
  EntitySelectOption,
  OptionalEntityId
} from "@/view/components/entity/EntitySelectOption.tsx";
import {EquipmentEditDialog} from "@/view/components/equipment/EquipmentEditDialog.tsx";
import {Currency} from "@/view/components/character/Currency.tsx";
import {CostedLabel} from "@/view/components/equipment/CostedLabel.tsx";

interface EquipmentSearchDialogProps {
  show: boolean;
  value?: Equipment|undefined;
  priceLimit?: number|undefined;
  onSelect?: (item: ItemSummary|undefined, options: ItemOptionSummary[]) => void;
  onCancel?: () => void;
}

export function EquipmentSearchDialog({ show, value, onSelect, onCancel, priceLimit = undefined }: EquipmentSearchDialogProps) {
  const database = useItemDatabase();

  const [ equipmentToEdit, setEquipmentToEdit ] = useState<Equipment>();

  const categories = useMemo(() => {
    let categories = [
        new EntitySelectCategory("Weapons", "weapon"),
        new EntitySelectCategory("Armor", "armor"),
        new EntitySelectCategory("Shields", "shield"),
        new EntitySelectCategory("Belts", "belt"),
        new EntitySelectCategory("Rings", "ring"),
        new EntitySelectCategory("Helms", "head"),
        new EntitySelectCategory("Headbands", "headband"),
        new EntitySelectCategory("Neck", "neck"),
        new EntitySelectCategory("Potions", "potion"),
        new EntitySelectCategory("Wands", "wand"),
        new EntitySelectCategory("Mundane", "mundane"),
    ];

    if (value) {
      categories = [
          new ChoiceSelectorCategory("Edit", "*"),
          ...categories
      ];
    }

    return categories;
  }, [value]);

  function handleSelect(id: OptionalEntityId) {
    const item = database.summary(id as number);
    if (item && item.hasOptions) {
      setEquipmentToEdit(Equipment.create(item, true, [], database));
      return;
    }
    onSelect?.(item, []);
  }

  function handleCancelEdit() {
    setEquipmentToEdit(undefined);
  }

  function handleSubmitEdit(target: Equipment, options: ItemOptionSummary[]) {
    setEquipmentToEdit(undefined);
    onSelect?.(target.item, options);
  }

  return <>
    <EntitySelectDialog title="Add Item"
                             show={show}
                             search={true}
                             value={value?.item.itemId}
                             onSelect={handleSelect}
                             onCancel={onCancel}
                             categories={categories}
                             optionsFn={(query, category) => {
                               let options = database.summaries()
                                 .filter(item => query !== '' || item.name.toLowerCase().includes(query.toLowerCase()))
                                 .filter(item => !category?.tag || item.tags.includes(category.tag))
                                 .filter(item => {
                                   console.log("item: " + item.itemId + ": " + item.name + " (" + item.sourceId + ")");
                                   if (priceLimit === undefined || query !== '') return true;
                                   return item.cost <= priceLimit;
                                 })
                                 .sort((a, b) => a.name.localeCompare(b.name));

                               if (category?.tag === '*' && value) {
                                 options = [value.item];
                               }

                               return options
                                 .map(item => new EntitySelectOption(item.itemId, <ItemOptionName item={item} />, true,
                                     async () => {
                                       const loaded = await database.load(item.itemId);
                                       if (!loaded) {
                                         return <></>
                                       }

                                       return <DescriptionBlock description={loaded.description} />
                                     }))
                             }} />

      {equipmentToEdit &&
          <EquipmentEditDialog show={true}
                               value={equipmentToEdit}
                               onCancel={handleCancelEdit}
                               onConfirm={handleSubmitEdit} />}
    </>
}

interface ItemOptionNameProps {
  item: ItemSummary;
}

function ItemOptionName({ item }: ItemOptionNameProps) {
  return <CostedLabel name={item.name} cost={<Currency gp={item.cost}/>} />
}
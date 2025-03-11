import React, {useMemo, useState} from "react";
import {Equipment} from "@/data/Equipment.ts";
import {ItemSummary} from "@/data/ItemSummary.ts";
import {useItemDatabase} from "@/data/context.ts";
import {ItemOption} from "@/data/ItemOption.ts";
import {EquipmentEditDialog} from "@/components/equipment/EquipmentEditDialog.tsx";
import {Currency} from "@/components/Currency.tsx";
import {CostedLabel} from "@/components/equipment/CostedLabel.tsx";
import SelectDialog from "@/components/base/form/select/SelectDialog.tsx";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import {Item} from "@/data/Item.ts";

interface EquipmentSearchDialogProps {
  show: boolean;
  value?: Equipment|undefined;
  priceLimit?: number|undefined;
  onSelect?: (item: Item|undefined, options: ItemOption[]) => void;
  onCancel?: () => void;
}

export function EquipmentSearchDialog({ show, value, onSelect, onCancel, priceLimit = undefined }: EquipmentSearchDialogProps) {
  const database = useItemDatabase();

  const [ equipmentToEdit, setEquipmentToEdit ] = useState<Equipment>();

  const categories = useMemo(() => {
    let categories = [
        new SelectListCategory("Weapons", "weapon"),
        new SelectListCategory("Armor", "armor"),
        new SelectListCategory("Shields", "shield"),
        new SelectListCategory("Belts", "belt"),
        new SelectListCategory("Rings", "ring"),
        new SelectListCategory("Helms", "head"),
        new SelectListCategory("Headbands", "headband"),
        new SelectListCategory("Neck", "neck"),
        new SelectListCategory("Potions", "potion"),
        new SelectListCategory("Wands", "wand"),
        new SelectListCategory("Mundane", "mundane"),
    ];

    if (value) {
      categories = [
          new SelectListCategory("Edit", "*"),
          ...categories
      ];
    }

    return categories;
  }, [value]);

  async function handleSelect(id: string) {
    const item = await database.load(parseInt(id));
    if (item && item.hasOptions) {
      setEquipmentToEdit(Equipment.create(item, true, [], database));
      return;
    }
    onSelect?.(item, []);
  }

  function handleCancelEdit() {
    setEquipmentToEdit(undefined);
  }

  function handleSubmitEdit(target: Equipment, options: ItemOption[]) {
    setEquipmentToEdit(undefined);
    onSelect?.(target.item, options);
  }

  function handleClose() {
    onCancel?.();
  }

  return <>
    <SelectDialog title="Add Item"
                             show={show}
                             // search={true}
                             value={value?.item.itemId.toString()}
                             onSelect={handleSelect}
                             onClose={handleClose}
                             categories={categories}
                             optionsFn={(query, category) => {
                               let options = database.summaries()
                                 .filter(item => !query || query === '' || item.name.toLowerCase().includes(query.toLowerCase()))
                                 .filter(item => !category?.tag || item.tags.includes(category.tag))
                                 .filter(item => {
                                   if (priceLimit === undefined || query !== '') return true;
                                   return item.cost <= priceLimit;
                                 })
                                 .sort((a, b) => a.name.localeCompare(b.name));

                               if (category?.tag === '*' && value) {
                                 const valueSummary = database.summary(value.item.itemId);
                                 if (valueSummary) {
                                   options = [valueSummary];
                                 }
                               }

                               return options.map(item => SelectListEntry.builder(item.itemId.toString(), item.name)
                                .label(<ItemOptionName item={item} />)
                                .description(async () => {
                                  const loaded = await database.load(item.itemId);
                                  if (!loaded) {
                                    return <></>;
                                  }
                                  return <DescriptionBlock description={loaded.description} />;
                                })
                                .build());
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
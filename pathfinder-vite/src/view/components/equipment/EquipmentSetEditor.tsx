import React, {useMemo, useState} from "react";
import TextInput from "../controls/TextInput.tsx";
import ButtonBlock from "../controls/ButtonBlock.tsx";
import {EquipmentSearchDialog} from "./EquipmentSearchDialog.tsx";
import {Currency} from "../character/Currency.tsx";
import {EquipmentList} from "./EquipmentList.tsx";
import styles from "./EquipmentSetEditor.module.css";
import {ItemSummary} from "../../../data/v8/ItemSummary.ts";
import {ItemOption} from "../../../data/v8/Item.ts";
import {Equipment, EquipmentSet} from "../../../data/v8/Equipment.ts";
import {useEquipmentSetStore, useItemDatabase} from "../../../data/context.tsx";

interface EquipmentSetEditorProps {
  loaded: EquipmentSet;
}

export function EquipmentSetEditor({ loaded }: EquipmentSetEditorProps) {
  const database = useItemDatabase();

  const [ equipmentSet, setEquipmentSet ] = useState(loaded);

  const [ showAddItemDialog, setShowAddItemDialog ] = useState(false);

  const equipmentSetStore = useEquipmentSetStore();

  const totalCost = useMemo(() => {
    return equipmentSet.equipment
      .filter(e => e.included)
      .map(e => e.cost)
      .reduce((a, b) => a + b, 0);
  }, [equipmentSet]);

  const totalWeight = useMemo(() => {
    return equipmentSet.equipment
    .filter(e => e.included)
    .map(e => e.weight)
    .reduce((a, b) => a + b, 0);
  }, [equipmentSet]);

  async function updateEquipmentSet(mappingFunction: (equipmentSet: EquipmentSet) => Promise<EquipmentSet>) {
    const updated = await mappingFunction(equipmentSet);
    setEquipmentSet(updated);
    await equipmentSetStore.save(updated);
  }

  function handleChangeName(value: string) {
    updateEquipmentSet(async updating => {
      updating.name = value;
      return updating;
    });
  }

  function handleRemoveEquipment(uid: string) {
    updateEquipmentSet(async updating => {
      return updating.remove(uid);
    })
  }

  function handleToggleEquipment(uid: string) {
    updateEquipmentSet(async updating => {
      return updating.modify(uid, eq => eq.include(!eq.included));
    })
  }

  function handleMoveEquipment(sourceIndex: number, destinationIndex: number) {
    updateEquipmentSet(async updating => {
      return updating.move(sourceIndex, destinationIndex);
    })
  }

  function handleUpdateItem(uid: string, updatedItem: ItemSummary|undefined, updatedOptions: ItemOption[]) {
    if (!updatedItem) return;
    updateEquipmentSet(async updating => {
      return updating.modify(uid, eq => Equipment.create(
          updatedItem,
          eq.included,
          updatedOptions,
          database));
    })
  }

  function handleDuplicateItem(uid: string) {
    const toCopyIndex = equipmentSet.equipment.findIndex(eq => eq.uid === uid);
    if (toCopyIndex < 0) return;
    const toCopy = equipmentSet.equipment[toCopyIndex];

    updateEquipmentSet(async updating => {
      return updating.add(toCopy.item.itemId, toCopy.options.map(o => o.id), toCopyIndex+1);
    });
  }

  return <div>
    <header>Equipment Set</header>
    <section>
      <label>Equipment Set Name</label>
      <TextInput value={equipmentSet.name} onChange={handleChangeName} />
    </section>
    <header>Equipment List</header>
    <section>
      <div className={styles.equipmentSummary}>
        <div><b>Total Weight: {totalWeight} lbs.</b></div>
        <div><b>Total Cost: <Currency gp={totalCost}/></b></div>
      </div>
      <EquipmentList equipment={equipmentSet.equipment}
                     onClickItem={handleToggleEquipment}
                     onUpdateItem={handleUpdateItem}
                     onDuplicateItem={handleDuplicateItem}
                     onDeleteItem={handleRemoveEquipment}
                     onMoveItem={handleMoveEquipment}
      />
      <ButtonBlock variant="link" onClick={() => setShowAddItemDialog(true)}>+ Add Item</ButtonBlock>
      <EquipmentSearchDialog show={showAddItemDialog}
                             onSelect={(item, options) => {
                               setShowAddItemDialog(false);
                               updateEquipmentSet(async es => {
                                 if (item) return es.add(item, options);
                                 return es;
                               })
                             }}
        onCancel={() => setShowAddItemDialog(false)}/>
    </section>
  </div>
}
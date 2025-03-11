import React, {useMemo, useState} from "react";
import {EquipmentSearchDialog} from "./EquipmentSearchDialog.tsx";
import {EquipmentList} from "./EquipmentList.tsx";
import styles from "./EquipmentSetEditor.module.css";
import {BudgetRemaining} from "./BudgetRemaining.tsx";
import {Equipment, EquipmentSet} from "@/data/Equipment.ts";
import {Currency} from "@/components/Currency.tsx";
import TextInput from "@/components/base/form/TextInput.tsx";
import {Quantity} from "@/components/Quantity.tsx";
import {useEquipmentSetStore, useItemDatabase} from "@/data/context.ts";
import {Item} from "@/data/Item.ts";
import {ItemOption} from "@/data/ItemOption.ts";

interface EquipmentSetEditorProps {
  equipmentSet: EquipmentSet;
}

export function EquipmentSetEditor({ equipmentSet }: EquipmentSetEditorProps) {
  const database = useItemDatabase();

  const [ showAddItemDialog, setShowAddItemDialog ] = useState(false);
  const [ showSelectBudgetDialog, setShowSelectBudgetDialog ] = useState(false);

  const [ name, setName ] = useState(equipmentSet.name);
  const [ equipment, setEquipment ] = useState(equipmentSet.equipment);
  const [ budget, setBudget ] = useState(equipmentSet.budget);
  const [ priceLimit, setPriceLimit ] = useState(equipmentSet.priceLimit);

  const equipmentSetStore = useEquipmentSetStore();

  const totalCost = useMemo(() => {
    return equipment
      .filter(e => e.included)
      .map(e => e.totalCost)
      .reduce((a, b) => a + b, 0);
  }, [equipment]);

  const totalWeight = useMemo(() => {
    return equipment
    .filter(e => e.included)
    .map(e => e.weight)
    .reduce((a, b) => a + b, 0);
  }, [equipment]);

  async function updateEquipmentSet(mappingFunction: (equipmentSet: EquipmentSet) => Promise<EquipmentSet>) {
    const updated = await mappingFunction(equipmentSet);
    await equipmentSetStore.save(updated);
  }

  function handleChangeName(value: string) {
    setName(value);
    updateEquipmentSet(async updating => updating.setName(value));
  }

  function handleShowEditBudgetDialog() {
    setShowSelectBudgetDialog(true);
  }

  function handleChangeBudget(value: string) {
    if (value.trim() === '') {
      setBudget(undefined);
      return;
    }
    setShowSelectBudgetDialog(false);
    const asNumber = parseInt(value);
    setBudget(asNumber);
    updateEquipmentSet(async updating => updating.setBudget(asNumber))
  }

  function handleChangePriceLimit(value: string) {
    if (value.trim() === '') {
      setPriceLimit(undefined);
      return;
    }
    const asNumber = parseFloat(value);
    setPriceLimit(asNumber);
    updateEquipmentSet(async updating => updating.setPriceLimit(asNumber))
  }

  function handleChangeEquipment(updated: Equipment[]) {
    setEquipment(updated);
    updateEquipmentSet(async equipmentSet =>
        equipmentSet.setEquipment(updated));
  }

  function handleSubmitAdd(item: Item|undefined, options: ItemOption[]) {
    setShowAddItemDialog(false);
    if (!item) return;
    const updated = [ ...equipment, Equipment.create(item, true, options, database) ];
    handleChangeEquipment(updated);
  }

  function handleCancelAdd() {
    setShowAddItemDialog(false);
  }

  return <div>
    <header>Equipment Set</header>
    <section>
      {/*<label>Equipment Set Name</label>*/}
      {/*<TextInput value={name} onChange={handleChangeName} />*/}
      <label>Budget</label>
      <TextInput value={budget?.toString() ?? ''} onChange={handleChangeBudget} />
      {/*{budget && <Currency gp={budget} />}*/}
      {/*<SelectBudgetDialog show={showSelectBudgetDialog}*/}
      {/*                    value={budget}*/}
      {/*                    onCancel={() => setShowSelectBudgetDialog(false)}*/}
      {/*                    onConfirm={handleChangeBudget} />*/}
      <label>Price Limit</label>
      <TextInput value={priceLimit?.toString() ?? ''}
                 onChange={handleChangePriceLimit} />
    </section>
    <header>Equipment List</header>
    <section className={styles.section}>
      <div className={styles.equipmentSummary}>
        <div className={styles.weightSection}>
          <b>Total Weight: <Quantity amount={totalWeight} unit="lbs."/></b>
        </div>
        <div className={styles.costSection}>
          <div className={styles.totalCost}>
            <b>Total Cost: <Currency gp={totalCost}/></b>
          </div>
          {budget && <div className={styles.budgetRemaining}>(<BudgetRemaining budget={budget} totalCost={totalCost}/> remaining)</div>}
        </div>
      </div>
      <EquipmentList equipment={equipment}
                     onChange={handleChangeEquipment}
      />
      <button onClick={() => setShowAddItemDialog(true)}>+ Add Item</button>
      {showAddItemDialog && <EquipmentSearchDialog show={showAddItemDialog}
                                                   priceLimit={priceLimit}
                                                   onSelect={handleSubmitAdd}
                                                   onCancel={handleCancelAdd}/>}
    </section>
  </div>
}
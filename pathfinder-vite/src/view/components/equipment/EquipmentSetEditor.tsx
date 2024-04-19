import React, {useMemo, useState} from "react";
import TextInput from "../controls/TextInput.tsx";
import ButtonBlock from "../controls/ButtonBlock.tsx";
import {EquipmentSearchDialog} from "./EquipmentSearchDialog.tsx";
import {Currency} from "../character/Currency.tsx";
import {EquipmentList} from "./EquipmentList.tsx";
import styles from "./EquipmentSetEditor.module.css";
import {Equipment, EquipmentSet} from "@/data/v8/Equipment.ts";
import {useEquipmentSetStore, useItemDatabase} from "@/data/context.tsx";
import {SelectBudgetDialog} from "./SelectBudgetDialog.tsx";
import {BudgetRemaining} from "./BudgetRemaining.tsx";
import {Quantity} from "../controls/Quantity.tsx";
import {ItemSummary} from "@/data/v8/ItemSummary.ts";
import {ItemOptionSummary} from "@/data/v8/ItemOption.ts";

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

  const equipmentSetStore = useEquipmentSetStore();

  const totalCost = useMemo(() => {
    return equipment
      .filter(e => e.included)
      .map(e => e.cost)
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
    updateEquipmentSet(async updating => {
      updating.name = value;
      return updating;
    });
  }

  function handleShowEditBudgetDialog() {
    setShowSelectBudgetDialog(true);
  }

  function handleChangeBudget(value: number|undefined) {
    setShowSelectBudgetDialog(false);
    setBudget(value);
    updateEquipmentSet(async updating => updating.setBudget(value))
  }

  function handleChangeEquipment(updated: Equipment[]) {
    setEquipment(updated);
    updateEquipmentSet(async equipmentSet =>
        equipmentSet.setEquipment(updated));
  }

  function handleSubmitAdd(item: ItemSummary|undefined, options: ItemOptionSummary[]) {
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
      <label>Equipment Set Name</label>
      <TextInput value={name} onChange={handleChangeName} />
      <label>Budget</label>
      <ButtonBlock onClick={handleShowEditBudgetDialog}>{budget && <Currency gp={budget} />}</ButtonBlock>
      <SelectBudgetDialog show={showSelectBudgetDialog}
                          value={budget}
                          onCancel={() => setShowSelectBudgetDialog(false)}
                          onConfirm={handleChangeBudget} />
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
      <ButtonBlock variant="link" onClick={() => setShowAddItemDialog(true)}>+ Add Item</ButtonBlock>
      {showAddItemDialog && <EquipmentSearchDialog show={showAddItemDialog}
                             onSelect={handleSubmitAdd}
                             onCancel={handleCancelAdd}/>}
    </section>
  </div>
}
import React, {useMemo, useState} from "react";
import {CardBlockList} from "../cards/CardBlockList.tsx";
import {EquipmentCard} from "./EquipmentCard.tsx";
import {EquipmentEditDialog} from "./EquipmentEditDialog.tsx";
import {Equipment} from "@/data/v8/Equipment.ts";

import {ItemOptionSummary} from "@/data/v8/ItemOption.ts";
import {DragEndEvent} from "@dnd-kit/core";
import {Droppable} from "../cards/Droppable.tsx";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {useItemDatabase} from "@/data/context.tsx";

interface EquipmentListProps {
  equipment: Equipment[];
  onChange?: (changed: Equipment[]) => void;
}

export function EquipmentList({ equipment, onChange }: EquipmentListProps) {
  const database = useItemDatabase();

  const [ equipmentToEdit, setEquipmentToEdit ] = useState<Equipment>();

  const equipmentIds = useMemo(() => equipment.map(e => e.uid),
      [equipment]);

  function updateEquipmentList(updateFn: (list: Equipment[]) => Equipment[]) {
    const updated = updateFn(equipment);
    onChange?.(updated);
  }

  function handleDelete(uid: string) {
    updateEquipmentList(list => list.filter(e => e.uid !== uid));
  }

  function handleClickItem(uid: string) {
    updateEquipmentList(list => {
      const updated = [ ...list ];
      const targetIndex = updated.findIndex(e => e.uid === uid);
      if (targetIndex < 0) return list;
      const target = updated[targetIndex];
      updated[targetIndex] = target.include(!target.included);
      return updated;
    });
  }

  function handleDragEnd(result: DragEndEvent) {
    const {active, over} = result;

    if (active.id !== over?.id) {
      updateEquipmentList(list => {
        const oldIndex = list.findIndex(equipment => equipment.uid === active.id)
        const newIndex = list.findIndex(equipment => equipment.uid === over?.id)
        return arrayMove(list, oldIndex, newIndex);
      });
    }
  }

  function handleEditItem(equipment: Equipment) {
    setEquipmentToEdit(equipment);
  }

  function handleSubmitEdit(target: Equipment, options: ItemOptionSummary[]) {
    if (target) {
      const targetIndex = equipment.findIndex(eq => eq.uid === target.uid);
      if (targetIndex < 0) {
        console.warn("Unable to find edited equipment in list");
        return;
      }

      const updated = [ ...equipment ];
      updated[targetIndex] = Equipment.create(target.item, target.included, options, database);
      onChange?.(updated);
    }
    setEquipmentToEdit(undefined);
  }

  function handleCancelEdit() {
    setEquipmentToEdit(undefined);
  }

  function handleChangeQuantity(uid: string, quantity: number) {
    updateEquipmentList(list => {
      const updated = [ ...list ];
      const targetIndex = updated.findIndex(e => e.uid === uid);
      if (targetIndex < 0) return list;
      const target = updated[targetIndex];
      updated[targetIndex] = target.changeQuantity(quantity);
      console.log(updated[targetIndex]);
      return updated;
    });
  }

  return <div>
    <Droppable id="equipment-set"
               onDragEnd={handleDragEnd}>
      <CardBlockList>
        <SortableContext items={equipmentIds}
                         strategy={verticalListSortingStrategy}>
        {equipment.map(equipment =>
             <EquipmentCard equipment={equipment}
                            key={equipment.uid}
                            disabled={!equipment.included}
                            onClick={() => handleClickItem(equipment.uid)}
                            onEdit={() => handleEditItem(equipment)}
                            onDelete={() => handleDelete(equipment.uid)}
                            onChangeQuantity={quantity => handleChangeQuantity(equipment.uid, quantity)}/>
        )}
        </SortableContext>
      </CardBlockList>
    </Droppable>
    {equipmentToEdit && <EquipmentEditDialog show={true}
                                             value={equipmentToEdit}
                                             onCancel={handleCancelEdit}
                                             onConfirm={handleSubmitEdit} />}
  </div>
}
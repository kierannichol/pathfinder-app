import {DropResult} from "react-beautiful-dnd";
import React, {useState} from "react";
import {Droppable} from "../cards/Droppable.tsx";
import {CardBlockList} from "../cards/CardBlockList.tsx";
import {Draggable} from "../cards/Draggable.tsx";
import {EquipmentCard} from "./EquipmentCard.tsx";
import {EquipmentEditDialog} from "./EquipmentEditDialog.tsx";
import {Equipment} from "../../../data/v8/Equipment.ts";
import {ItemSummary} from "../../../data/v8/ItemSummary.ts";
import {ItemOption} from "../../../data/v8/Item.ts";

interface EquipmentListProps {
  equipment: Equipment[];
  onDeleteItem?: (uid: string) => void;
  onClickItem?: (uid: string) => void;
  onDuplicateItem?: (uid: string) => void;
  onUpdateItem?: (uid: string, updatedItem: ItemSummary|undefined, updatedOptions: ItemOption[]) => void;
  onMoveItem?: (sourceIndex: number, destinationIndex: number) => void;
}

export function EquipmentList({ equipment, onDeleteItem, onClickItem, onUpdateItem, onDuplicateItem, onMoveItem }: EquipmentListProps) {
  const [ equipmentToEdit, setEquipmentToEdit ] = useState<Equipment>();

  function handleDelete(uid: string) {
    onDeleteItem?.(uid);
  }

  function handleClickItem(uid: string) {
    onClickItem?.(uid);
  }

  function handleDragEnd(result: DropResult) {
    if (!result.destination
        || result.source.droppableId !== result.destination.droppableId
        || result.destination === result.source) return;

    onMoveItem?.(result.source.index, result.destination.index);
  }

  function handleEditItem(equipment: Equipment) {
    setEquipmentToEdit(equipment);
  }

  function handleFinishEdit(item: ItemSummary, options: ItemOption[]) {
    if (equipmentToEdit) {
      onUpdateItem?.(equipmentToEdit.uid, item, options);
    }
    setEquipmentToEdit(undefined);
  }

  function handleCancelEdit() {
    setEquipmentToEdit(undefined);
  }

  function handleDuplicateItem(uid: string) {
    onDuplicateItem?.(uid);
  }

  return <div>
    <Droppable droppableId={"equipmentSet"} onDragEnd={handleDragEnd}>
      <CardBlockList>
        {equipment.map((equipment, index) =>
          <Draggable key={equipment.uid} draggableId={equipment.uid} index={index}>
             <EquipmentCard equipment={equipment}
                            disabled={!equipment.included}
                            onClick={() => handleClickItem(equipment.uid)}
                            onDuplicate={() => handleDuplicateItem(equipment.uid)}
                            onEdit={() => handleEditItem(equipment)}
                            onDelete={() => handleDelete(equipment.uid)} />
          </Draggable>)}
      </CardBlockList>
    </Droppable>
    {equipmentToEdit && <EquipmentEditDialog show={true}
                                             value={equipmentToEdit}
                                             onCancel={handleCancelEdit}
                                             onConfirm={handleFinishEdit} />}
  </div>
}
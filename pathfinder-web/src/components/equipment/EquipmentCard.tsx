import styles from "./EquipmentCard.module.css";
import React, {MouseEvent, useEffect, useMemo, useState} from "react";
import {CardBlock} from "../cards/CardBlock.tsx";
import {FaTimes} from "react-icons/fa";
import {Equipment} from "@/data/Equipment.ts";
import {classNames} from "../../../../pathfinder-lib/utils/src/classNames.ts";
import Collapse from "@/components/base/Collapse.tsx";
import {CostedLabel} from "@/components/equipment/CostedLabel.tsx";
import {Currency} from "@/components/Currency.tsx";
import EquipmentQuantity from "@/components/equipment/EquipmentQuantity.tsx";
import DeleteIcon from "@/components/base/icons/DeleteIcon.tsx";
import EditIcon from "../base/icons/EditIcon.tsx";
import {useItemDatabase} from "@/data/context.ts";

interface EquipmentCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  equipment: Equipment;
  disabled?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onChangeQuantity?: (quantity: number) => void;
}

export function EquipmentCard({ equipment, disabled = false, onClick, onEdit, onDelete, onChangeQuantity }: EquipmentCardProps) {
  const [removing, setRemoving] = useState(false);

  const itemDatabase = useItemDatabase();
  useEffect(() => {
    itemDatabase.load(equipment.item.itemId)
    .then(loaded => console.log(loaded));
  }, []);

  const hasOptions = useMemo(() => equipment.item.optionSetIds.length > 0,
      [equipment]);

  const startDelete = (event: MouseEvent) => {
    setRemoving(true);
    event.stopPropagation();
  };

  const finishDelete = () => {
    onDelete?.();
  };

  function handleChangeQuantity(quantity: number) {
    onChangeQuantity?.(quantity);
  }

  return <Collapse open={!removing} onCollapsed={finishDelete}>
    <div>
      <CardBlock
          draggableId={equipment.uid}
          disabled={disabled}>
        <div className={styles.label}>
          {hasOptions &&
            <div className={classNames([styles.labelSegment, styles.control, styles.editButton])}
                 onClick={onEdit}><EditIcon /></div>}
          <div className={styles.labelSegment + " " + styles.equipmentName} onClick={onClick}>
            <CostedLabel name={equipment.name} cost={<Currency gp={equipment.totalCost}/>} />
          </div>
          <FaTimes /><EquipmentQuantity quantity={equipment.quantity} onChange={handleChangeQuantity} className={styles.quantity} />
          <div className={classNames([styles.labelSegment, styles.control, styles.deleteButton])}
               onClick={startDelete}><DeleteIcon /></div>
        </div>
      </CardBlock>
    </div>
  </Collapse>
}
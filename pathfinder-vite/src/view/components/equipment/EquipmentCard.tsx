import {Collapse} from "react-bootstrap";
import {classNames} from "@/utils/classNames.ts";
import styles from "./EquipmentCard.module.css";
import {Currency} from "../character/Currency.tsx";
import DeleteIcon from "../icons/DeleteIcon.tsx";
import React, {MouseEvent, useMemo, useState} from "react";
import {CardBlock} from "../cards/CardBlock.tsx";
import EditIcon from "../icons/EditIcon.tsx";
import {Equipment} from "@/data/v8/Equipment.ts";
import {CostedLabel} from "@/view/components/equipment/CostedLabel.tsx";

interface EquipmentCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  equipment: Equipment;
  disabled?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

export function EquipmentCard({ equipment, disabled = false, onClick, onEdit, onDelete }: EquipmentCardProps) {
  const [removing, setRemoving] = useState(false);

  const hasOptions = useMemo(() => equipment.item.optionSetIds.length > 0,
      [equipment]);

  const startDelete = (event: MouseEvent) => {
    setRemoving(true);
    event.stopPropagation();
  };

  const finishDelete = () => {
    onDelete?.();
  };

  return <Collapse in={!removing} onExited={finishDelete} unmountOnExit={true}>
    <div>
      <CardBlock
          draggableId={equipment.uid}
          disabled={disabled}>
        <div className={styles.label}>
          {hasOptions &&
            <div className={classNames([styles.labelSegment, styles.control, styles.editButton])}
                 onClick={onEdit}><EditIcon /></div>}
          <div className={styles.labelSegment + " " + styles.equipmentName} onClick={onClick}>
            <CostedLabel name={equipment.name} cost={<Currency gp={equipment.cost}/>} />
          </div>
          <div className={classNames([styles.labelSegment, styles.control, styles.deleteButton])}
               onClick={startDelete}><DeleteIcon /></div>
        </div>
      </CardBlock>
    </div>
  </Collapse>
}
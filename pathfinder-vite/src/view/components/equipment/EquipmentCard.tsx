import {Collapse} from "react-bootstrap";
import {classNames} from "../../../utils/classNames.ts";
import styles from "./EquipmentCard.module.css";
import {Currency} from "../character/Currency.tsx";
import DeleteIcon from "../icons/DeleteIcon.tsx";
import React, {MouseEvent, useMemo, useState} from "react";
import {Equipment} from "../..//Equipment.ts";
import {CardBlock} from "../cards/CardBlock.tsx";
import EditIcon from "../icons/EditIcon.tsx";

interface EquipmentCardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  equipment: Equipment;
  disabled?: boolean;
  onClick?: () => void;
  onEdit?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
}

export function EquipmentCard({ equipment, disabled = false, onClick, onDuplicate, onEdit, onDelete }: EquipmentCardProps) {
  const [removing, setRemoving] = useState(false);
  const [hidden, setHidden] = useState(false);

  const hasOptions = useMemo(() => equipment.item.optionSetIds.length > 0,
      [equipment]);

  const startDelete = (event: MouseEvent) => {
    setRemoving(true);
    event.stopPropagation();
  };

  const finishDelete = () => {
    setHidden(true);
    onDelete?.();
  };

  if (hidden) {
    return <></>
  }

  return <Collapse in={!removing} onExited={finishDelete}>
    <div>
      <CardBlock
          draggableId={equipment.uid}
          disabled={disabled}>
        <div className={styles.label}>
          <div className={styles.labelSegment} onClick={onClick}>
            <div className={styles.equipmentName}>{equipment.name}</div>
            {hasOptions && <>
              <div className={classNames([styles.labelSegment, styles.control, styles.editButton])}
                   onClick={onEdit}><EditIcon /></div>
            </>}
          </div>
          <div className={styles.labelSegment}>(<Currency gp={equipment.cost} />)</div>
          <div className={classNames([styles.labelSegment, styles.control, styles.deleteButton])}
               onClick={startDelete}><DeleteIcon /></div>
        </div>
      </CardBlock>
    </div>
  </Collapse>
}
import React, {useMemo, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import styles from "../Dialog.module.scss";
import {EquipmentModel} from "../../model/EquipmentModel.ts";
import {ItemOptionModel, ItemSummaryModel} from "../../model/ItemModel.ts";
import {EquipmentDescription} from "./EquipmentDescription.tsx";
import {useItemDatabaseModel} from "../../model/ModelContext.tsx";
import useAsyncMemo from "../../../utils/useAsyncMemo.tsx";
import LoadingBlock from "../LoadingBlock.tsx";
import {Currency} from "../character/Currency.tsx";
import estyles from "./EquipmentEditDialog.module.css";

interface EquipmentEditDialogProps {
  show: boolean;
  value: EquipmentModel;
  onConfirm?: (item: ItemSummaryModel, options: ItemOptionModel[]) => void;
  onCancel?: () => void;
}

export function EquipmentEditDialog({ show, value, onConfirm, onCancel }: EquipmentEditDialogProps) {
  const database = useItemDatabaseModel();

  const [ selectedOptions, setSelectedOptions ] = useState(value.options);

  const [ item, loadingItem ] = useAsyncMemo(() => database.load(value.item.itemId),
      [database, value]);

  const itemCost = useMemo(() => {
    let cost = value.cost;
    for (let option of selectedOptions) {
      cost = option.pointCost
    }
  }, [value, selectedOptions]);

  function handleChangeOptions(options: ItemOptionModel[]) {
    setSelectedOptions(options);
  }

  function handleConfirm() {
    onConfirm?.(value.item, selectedOptions);
  }

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      fullscreen={'md-down'}
      className={styles.dialog}
  >
    <Modal.Header className={styles.title} closeButton={true} closeVariant={'white'}>
      <Modal.Title>{value.name}</Modal.Title>
    </Modal.Header>

    <Modal.Header className={styles.header}>
      <div className={estyles.equipmentSummary}>
        <div><b>Weight: {value.weight} lbs.</b></div>
        <div><b>Cost: <Currency gp={value.cost}/></b></div>
      </div>
    </Modal.Header>

    <Modal.Body className={styles.body}>
      {loadingItem ? <LoadingBlock /> : <EquipmentDescription item={item}
                                                              selectedOptions={selectedOptions}
                                                              onChangeOptions={handleChangeOptions}/>}
    </Modal.Body>

    <Modal.Footer className={styles.footer}>
      <Button size="lg" className="w-100" onClick={handleConfirm}>OK</Button>
    </Modal.Footer>

  </Modal>);
}
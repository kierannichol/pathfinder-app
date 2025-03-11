import React, {useMemo, useState} from "react";
import {EquipmentDescription} from "./EquipmentDescription.tsx";
import useAsyncMemo from "../../utils/useAsyncMemo.tsx";
import LoadingBlock from "../LoadingBlock.tsx";
import eStyles from "./EquipmentEditDialog.module.css";
import {Equipment} from "@/data/Equipment.ts";
import {ItemOption} from "@/data/ItemOption.ts";
import DialogBox from "@/components/base/DialogBox.tsx";
import {Currency} from "@/components/Currency.tsx";
import {CurrencyDelta} from "@/components/CurrencyDelta.tsx";
import {useItemDatabase} from "@/data/context.ts";

interface EquipmentEditDialogProps {
  show: boolean;
  value: Equipment;
  onConfirm?: (target: Equipment, options: ItemOption[]) => void;
  onCancel?: () => void;
}

export function EquipmentEditDialog({ show, value, onConfirm, onCancel }: EquipmentEditDialogProps) {
  const database = useItemDatabase();

  const [ selectedOptions, setSelectedOptions ] = useState(value.options);

  const [ item, loadingItem ] = useAsyncMemo(() => database.load(value.item.itemId),
      [database, value]);

  const modified = useMemo(() => Equipment.create(value.item, true, selectedOptions, database),
      [value, selectedOptions]);

  function handleChangeOptions(options: ItemOption[]) {
    setSelectedOptions(options);
  }

  function handleConfirm() {
    onConfirm?.(value, selectedOptions);
  }

  return (<DialogBox
      show={show}
      onClose={onCancel}>
    <DialogBox.Title>
      {value.name}
    </DialogBox.Title>

    <DialogBox.Header>
      <div className={eStyles.equipmentSummary}>
        <div><b>Weight: {modified.weight} lbs.</b></div>
        <div><b>Cost: <Currency gp={modified.cost}/>{(value.cost !== modified.cost) && <span> (<CurrencyDelta gp={(modified.cost - value.cost)} />)</span>}</b></div>
      </div>
    </DialogBox.Header>

    <DialogBox.Body>
      {loadingItem ? <LoadingBlock /> : <EquipmentDescription item={item}
                                                              selectedOptions={selectedOptions}
                                                              onChangeOptions={handleChangeOptions}/>}
    </DialogBox.Body>

    <DialogBox.Footer>
      <button onClick={handleConfirm}>OK</button>
    </DialogBox.Footer>

  </DialogBox>);
}
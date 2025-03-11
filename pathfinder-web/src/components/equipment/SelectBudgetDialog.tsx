import React, {useEffect, useState} from "react";
import DialogBox from "@/components/base/DialogBox.tsx";
import TextInput from "@/components/base/form/TextInput.tsx";

interface SelectBudgetDialogProps {
  show: boolean;
  value: number|undefined;
  onConfirm?: (value: number|undefined) => void;
  onCancel?: () => void;
}

const StartingWealthByLevel = {
  2: 1000,
  3: 3000,
  4: 6000,
  5: 10500,
  6: 16000,
  7: 23500,
  8: 33000,
  9: 46000,
  10: 62000,
  11: 82000,
  12: 108000,
  13: 140000,
  15: 240000,
  16: 315000,
  17: 410000,
  18: 530000,
  19: 685000,
  20: 880000
};

export function SelectBudgetDialog({ show, value, onConfirm, onCancel }: SelectBudgetDialogProps) {
  const [ budgetText, setBudgetText ] = useState(value?.toString() ?? "");

  useEffect(() => {
    setBudgetText(value?.toString() ?? "")
  }, [value]);

  function handleChange(selected: string) {
    setBudgetText(selected);
  }

  function handleConfirm(selected?: string) {
    const amountText = (selected ?? budgetText).trim();
    const amount = amountText !== '' ? parseInt(amountText) : undefined;
    onConfirm?.(amount);
  }

  return (<DialogBox
      show={show}
      onClose={onCancel}
  >
    <DialogBox.Header>
      Select Budget
    </DialogBox.Header>

    <DialogBox.Body>
        <label>Budget</label>
        <TextInput value={budgetText}
                   onChange={handleChange}
                   onEnter={handleConfirm}
                   autoFocus={true} />

      <label>New Character Starting Wealth</label>
        {Object.entries(StartingWealthByLevel).map(([level, amount]) =>
          <button key={level} onClick={() => handleConfirm(amount.toString())}>Level {level}</button>)}
    </DialogBox.Body>

    <DialogBox.Footer>
      <button onClick={() => handleConfirm()}>OK</button>
    </DialogBox.Footer>

  </DialogBox>);
}
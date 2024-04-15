import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import styles from "../Dialog.module.scss";
import TextInput from "../controls/TextInput.tsx";
import ButtonBlock from "../controls/ButtonBlock.tsx";
import {ButtonBlockGroup} from "../controls/ButtonBlockGroup.tsx";

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
      <Modal.Title>Select Budget</Modal.Title>
    </Modal.Header>

    <Modal.Body className={styles.body}>
        <label>Budget</label>
        <TextInput value={budgetText}
                   onChange={handleChange}
                   onEnter={handleConfirm}
                   autoFocus={true} />

      <label>New Character Starting Wealth</label>
      <ButtonBlockGroup>
        {Object.entries(StartingWealthByLevel).map(([level, amount]) =>
          <ButtonBlock key={level} onClick={() => handleConfirm(amount.toString())}>Level {level}</ButtonBlock>)}
      </ButtonBlockGroup>
    </Modal.Body>

    <Modal.Footer className={styles.footer}>
      <Button size="lg" className="w-100" onClick={() => handleConfirm()}>OK</Button>
    </Modal.Footer>

  </Modal>);
}
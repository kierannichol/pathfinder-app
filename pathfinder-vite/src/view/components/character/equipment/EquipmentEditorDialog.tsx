import React from "react";
import {Modal} from "react-bootstrap";
import styles from "../../Dialog.module.scss";
import EquipmentEditor from "./EquipmentEditor.tsx";
import CharacterAtLevel from "../../../../data/v8/CharacterAtLevel.ts";
import {ChoiceSelectedHandler} from "../../../../data/v8/Choice.ts";

interface EquipmentEditorDialogProps {
  characterAtLevel: CharacterAtLevel;
  show: boolean;
  onCancel: () => void;
  onChange: ChoiceSelectedHandler;
}

export default function EquipmentEditorDialog({ characterAtLevel, show, onCancel, onChange }: EquipmentEditorDialogProps) {

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
      <Modal.Title>Level {characterAtLevel.level} Equipment</Modal.Title>
    </Modal.Header>

    <Modal.Body className={styles.body}>
      <EquipmentEditor characterAtLevel={characterAtLevel} onChange={onChange} />
    </Modal.Body>

  </Modal>);
}
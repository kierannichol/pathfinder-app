import React from "react";
import {Modal} from "react-bootstrap";
import styles from "../Dialog.module.scss";
import SpellBookEditor from "./SpellBookEditor.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import ChoiceRef from "../../../data/model/ChoiceRef.ts";

interface SpellBookEditorDialogProps {
  characterAtLevel: CharacterAtLevel;
  show: boolean;
  onCancel: () => void;
  onChange: (choice: ChoiceRef, value: string) => void;
}

export default function SpellBookEditorDialog({ characterAtLevel, show, onCancel, onChange }: SpellBookEditorDialogProps) {

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
      <Modal.Title>Spell Book</Modal.Title>
    </Modal.Header>

    <Modal.Body className={styles.body}>
      <SpellBookEditor characterAtLevel={characterAtLevel} onChange={onChange} />
    </Modal.Body>

  </Modal>);
}
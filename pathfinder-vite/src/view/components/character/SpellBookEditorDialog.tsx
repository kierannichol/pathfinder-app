import React from "react";
import {Modal} from "react-bootstrap";
import styles from "../Dialog.module.scss";
import SpellBookEditor from "./SpellBookEditor.tsx";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {ChoiceSelectedHandler} from "../../../data/v8/Choice.ts";

interface SpellBookEditorDialogProps {
  characterAtLevel: CharacterAtLevel;
  show: boolean;
  onCancel: () => void;
  onChange: ChoiceSelectedHandler;
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
      <Modal.Title>Level {characterAtLevel.level} Spell Book</Modal.Title>
    </Modal.Header>

    <Modal.Body className={styles.body}>
      <SpellBookEditor characterAtLevel={characterAtLevel} onChange={onChange} />
    </Modal.Body>

  </Modal>);
}
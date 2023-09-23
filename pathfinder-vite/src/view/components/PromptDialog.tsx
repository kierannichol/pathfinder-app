import React from "react";
import {Button, Modal} from "react-bootstrap";
import styles from "./PromptDialog.module.scss";

interface PromptDialogProps {
  show: boolean;
  prompt: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export default function PromptDialog({ show, prompt, onConfirm, onCancel }: PromptDialogProps) {

  function handleConfirm() {
    onConfirm?.();
  }

  function handleCancel() {
    onConfirm?.();
  }

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      scrollable={false}
      fullscreen={'md-down'}
      className={styles.dialog}
  >
    <Modal.Header className={styles.title} closeButton={false}>
      <Modal.Title>{prompt}</Modal.Title>
    </Modal.Header>

    <Modal.Body className={styles.body}>
      <div className={"d-flex justify-content-evenly"}>
        <Button size="lg" className={"w-50 me-3"} onClick={handleConfirm}>Yes</Button>
        <Button size="lg" className={"w-50 mw-3"} onClick={handleCancel}>No</Button>
      </div>
    </Modal.Body>

  </Modal>);
}
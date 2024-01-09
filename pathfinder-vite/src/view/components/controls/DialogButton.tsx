import React, {useState} from "react";
import {GiBookmark} from "react-icons/gi";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import {ChoiceSelectedHandler} from "../../../data/model/ChoiceRef.ts";
import {Modal} from "react-bootstrap";
import styles from "../Dialog.module.scss";
import SpellBookEditor from "../character/SpellBookEditor.tsx";

interface DialogButtonProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectedHandler;
}

export default function DialogButton({ characterAtLevel, onChange }: DialogButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleCancel() {
    setShow(false);
  }

  return <>
    <GiBookmark size={64} className="clickable" onClick={_ => handleShow()} />
    <Dialog
        characterAtLevel={characterAtLevel}
        show={show}
        onCancel={handleCancel}
        onChange={onChange} />
  </>
}

interface DialogProps {
  characterAtLevel: CharacterAtLevel;
  show: boolean;
  onCancel: () => void;
  onChange: ChoiceSelectedHandler;
}

function Dialog({ characterAtLevel, show, onCancel, onChange }: DialogProps) {

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
import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {LabelRow} from "../Rows";
import CharacterTextInput from "./base/CharacterTextInput";
import "./NewCharacterDialog.scss";

interface NewCharacterDialogProps {
  show: boolean;
  onCreate: (name: string) => void;
  onCancel?: () => void;
}

function NewCharacterDialog({ show, onCreate, onCancel }: NewCharacterDialogProps) {
  const [ characterName, setCharacterName ] = useState('');

  function handleCreate() {
    onCreate(characterName);
  }

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      className={'pf-new-character-dialog'}>
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Create Character</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Container>
        <LabelRow label={'Character Name'}>
          <CharacterTextInput
              value={characterName}
              onchange={setCharacterName}
              autoFocus={true} />
        </LabelRow>
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={_ => handleCreate()}>Create</Button>
    </Modal.Footer>
  </Modal>);
}

export default NewCharacterDialog;
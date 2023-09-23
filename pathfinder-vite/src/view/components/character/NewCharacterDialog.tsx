import {Button, Container, Modal} from "react-bootstrap";
import "./NewCharacterDialog.scss";
import {useState} from "react";
import TextInput from "../controls/TextInput.tsx";

interface NewCharacterDialogProps {
  show: boolean;
  onCreate: (name: string) => void;
  onCancel?: () => void;
}

function NewCharacterDialog({ show, onCreate, onCancel }: NewCharacterDialogProps) {
  const [ characterName, setCharacterName ] = useState('');

  function handleCreate(name: string) {
    onCreate(name);
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
        <label>Character Name</label>
        <TextInput
            value={characterName}
            onChange={setCharacterName}
            onEnter={handleCreate}
            autoFocus={true} />
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={_ => handleCreate(characterName)}>Create</Button>
    </Modal.Footer>
  </Modal>);
}

export default NewCharacterDialog;
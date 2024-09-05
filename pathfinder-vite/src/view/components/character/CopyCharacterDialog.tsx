import {Button, Container, Modal} from "react-bootstrap";
import "./CopyCharacterDialog.scss";
import {useState} from "react";
import TextInput from "../controls/TextInput.tsx";

interface CopyCharacterDialogProps {
  show: boolean;
  onCreateCopy: (name: string) => void;
  onCancel?: () => void;
  defaultCharacterName?: string;
}

function CopyCharacterDialog({ show, onCreateCopy, onCancel, defaultCharacterName = '' }: CopyCharacterDialogProps) {
  const [ characterName, setCharacterName ] = useState(defaultCharacterName);

  function handleCreateCopy(newCharacterName: string) {
    onCreateCopy(newCharacterName);
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
            onEnter={handleCreateCopy}
            autoFocus={true} />
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={_ => handleCreateCopy(characterName)}>Create</Button>
    </Modal.Footer>
  </Modal>);
}

export default CopyCharacterDialog;
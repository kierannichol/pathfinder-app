import {Button, Container, Modal} from "react-bootstrap";
import "./NewEquipmentSetDialog.scss";
import {useState} from "react";
import TextInput from "../controls/TextInput.tsx";

interface NewEquipmentSetDialogProps {
  show: boolean;
  onCreate: (name: string) => void;
  onCancel?: () => void;
}

function NewEquipmentSetDialog({ show, onCreate, onCancel }: NewEquipmentSetDialogProps) {
  const [ equipmentSetName, setEquipmentSetName ] = useState('');

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
      className={'pf-new-equipment-set-dialog'}>
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Create Equipment Set</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Container>
        <label>Equipment Set Name</label>
        <TextInput
            value={equipmentSetName}
            onChange={setEquipmentSetName}
            onEnter={handleCreate}
            autoFocus={true} />
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={_ => handleCreate(equipmentSetName)}>Create</Button>
    </Modal.Footer>
  </Modal>);
}

export default NewEquipmentSetDialog;
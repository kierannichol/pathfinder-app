import {Button, Container, Modal} from "react-bootstrap";
import "./NewCharacterDialog.scss";
import {useMemo, useState} from "react";
import TextInput from "../controls/TextInput.tsx";
import {useDatabase} from "@/data/context.tsx";
import {Typeahead} from "react-bootstrap-typeahead";
import {Option} from "react-bootstrap-typeahead/types/types";

interface NewCharacterDialogProps {
  show: boolean;
  onCreate: (name: string, classId: string) => void;
  onCancel?: () => void;
  defaultCharacterName?: string;
  defaultCharacterClass?: string;
}

function NewCharacterDialog({ show, onCreate, onCancel, defaultCharacterName = '', defaultCharacterClass = '' }: NewCharacterDialogProps) {
  const [ characterName, setCharacterName ] = useState(defaultCharacterName);
  const [ characterClass, setCharacterClass ] = useState(defaultCharacterClass);

  const database = useDatabase();

  const classOptions = useMemo(() => {
    return database.query(['favored_class']).map(summary => {
      return {
        id: summary.key,
        label: summary.name
      };
    });
  }, [database]);

  const defaultSelectedOption = useMemo(() => {
    return classOptions.find(option => option.id === characterClass);
  }, [classOptions, defaultCharacterClass]);

  function handleCreate() {
    onCreate(characterName, characterClass);
  }

  function handleClassSelected(selected: Option[]) {
    const first = selected[0];
    const id = typeof first === 'string' ? first : first.id;
    setCharacterClass(id);
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
        <label>Class</label>
        <Typeahead id="new_character_class_select"
                   defaultSelected={defaultSelectedOption !== undefined ? [defaultSelectedOption] : []}
                   caseSensitive={false}
                   positionFixed={true}
                   multiple={false}
                   onChange={handleClassSelected}
                   onFocus={e => e.currentTarget?.select()}
                   options={classOptions} />
        {/*<Form.Select>*/}
        {/*  <option></option>*/}
        {/*  {database.query(['favored_class']).map(summary =>*/}
        {/*      <option key={summary.key} value={summary.key}>{summary.name}</option>)}*/}
        {/*</Form.Select>*/}
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={handleCreate}>Create</Button>
    </Modal.Footer>
  </Modal>);
}

export default NewCharacterDialog;
import {useMemo, useState} from "react";
import TextInput from "@/components/base/form/TextInput.tsx";
import DialogBox from "@/components/base/DialogBox.tsx";
import Button from "@/components/base/form/Button.tsx";
import styles from "./NewCharacterDialog.module.css";
import SelectDialog from "@/components/base/form/select/SelectDialog.tsx";
import choiceSelectButtonStyles from "@/components/choice/ChoiceSelectButton.module.css";
import {useDatabase} from "@/data/context.ts";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";

interface NewCharacterDialogProps {
  show: boolean;
  onCreate: (name: string, classId: string) => void;
  onCancel?: () => void;
  defaultCharacterName?: string;
  defaultCharacterClass?: string;
}

function NewCharacterDialog({ show, onCreate, onCancel, defaultCharacterName = '', defaultCharacterClass = undefined }: NewCharacterDialogProps) {
  const [ characterName, setCharacterName ] = useState(defaultCharacterName);
  const [ characterClass, setCharacterClass ] = useState(defaultCharacterClass);
  const [ showSelectClassDialog, setShowSelectClassDialog ] = useState(false);

  const database = useDatabase();

  const characterClassName = useMemo(() => {
    const name = database.name(characterClass);
    return name !== '' ? name : undefined;
  }, [characterClass, database]);

  const classOptions = useMemo(() => {
    return database.query(['favored_class']).map(summary => {
      return SelectListEntry.builder(summary.key, summary.name)
        .build();
    });
  }, [database]);

  function handleCreate() {
    onCreate(characterName, characterClass ?? '');
  }

  // function handleClassSelected(selected: Option[]) {
  //   const first = selected[0];
  //   const id = typeof first === 'string' ? first : first.id;
  //   setCharacterClass(id);
  // }

  return (<DialogBox
      show={show}
      onClose={onCancel}
      className={styles.newCharacterDialog}>
    <DialogBox.Title>
      <div>Create New Character</div>
    </DialogBox.Title>
    <DialogBox.Body>
      <label>Character Name</label>
      <TextInput
          value={characterName}
          onChange={setCharacterName}
          onEnter={handleCreate}
          autoFocus={true}/>
      <label>Class</label>
      <Button className={choiceSelectButtonStyles.button} onClick={() => setShowSelectClassDialog(true)}>{characterClassName ?? <i>Select Class</i>}</Button>
      <SelectDialog show={showSelectClassDialog}
                    title="Select Class"
                    onSelect={(value) => {
        setCharacterClass(value);
        setShowSelectClassDialog(false);
      }} onClose={() => setShowSelectClassDialog(false)} value={characterClass} optionsFn={() => classOptions} />
    </DialogBox.Body>
    <DialogBox.Footer>
      <Button className={styles.confirmButton} onClick={handleCreate}>Create</Button>
    </DialogBox.Footer>
  </DialogBox>);
}

export default NewCharacterDialog;
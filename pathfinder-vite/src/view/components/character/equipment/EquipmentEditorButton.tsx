import {GiLockedChest} from "react-icons/gi";
import EquipmentEditorDialog from "./EquipmentEditorDialog.tsx";
import {useState} from "react";
import {CharacterAtLevelModel} from "../../../model/CharacterAtLevelModel.ts";
import {ChoiceSelectedHandler} from "../../../model/ChoiceModel.ts";
import styles from "./EquipmentEditorButton.module.css";

interface EquipmentEditorButtonProps {
  characterAtLevel: CharacterAtLevelModel;
  onChange: ChoiceSelectedHandler;
}

export default function EquipmentEditorButton({ characterAtLevel, onChange }: EquipmentEditorButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleCancel() {
    setShow(false);
  }

  return <>
    <div className={styles.button}>
      <GiLockedChest size={64} className="clickable" onClick={_ => handleShow()} />
    </div>
    <EquipmentEditorDialog
        characterAtLevel={characterAtLevel}
        show={show}
        onCancel={handleCancel}
        onChange={onChange} />
  </>
}
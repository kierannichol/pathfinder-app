import {GiBookmark} from "react-icons/gi";
import SpellBookEditorDialog from "./SpellBookEditorDialog.tsx";
import {useState} from "react";
import {CharacterAtLevel} from "../..//CharacterAtLevel.ts";
import {ChoiceSelectedHandler} from "../..//Choice.ts";
import styles from "./SpellBookEditorButton.module.css";

interface SpellBookEditorButtonProps {
  characterAtLevel: CharacterAtLevel;
  onChange: ChoiceSelectedHandler;
}

export default function SpellBookEditorButton({ characterAtLevel, onChange }: SpellBookEditorButtonProps) {
  const [ show, setShow ] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleCancel() {
    setShow(false);
  }

  return <>
    <div className={styles.button}>
      <GiBookmark size={64} className="clickable" onClick={_ => handleShow()} />
    </div>
    <SpellBookEditorDialog
        characterAtLevel={characterAtLevel}
        show={show}
        onCancel={handleCancel}
        onChange={onChange} />
  </>
}
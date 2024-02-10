import {GiBookmark} from "react-icons/gi";
import SpellBookEditorDialog from "./SpellBookEditorDialog.tsx";
import {useState} from "react";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {ChoiceSelectedHandler} from "../../model/ChoiceModel.ts";

interface SpellBookEditorButtonProps {
  characterAtLevel: CharacterAtLevelModel;
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
    <GiBookmark size={64} className="clickable" onClick={_ => handleShow()} />
    <SpellBookEditorDialog
        characterAtLevel={characterAtLevel}
        show={show}
        onCancel={handleCancel}
        onChange={onChange} />
  </>
}
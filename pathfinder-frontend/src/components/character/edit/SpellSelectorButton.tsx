import {useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import PathfinderButton from "../../common/PathfinderButton";
import SpellSelectorDialog from "./SpellSelectorDialog";

interface SpellSelectorButtonProps {
  characterAtLevel: CharacterAtLevel;
  onChange: (key: string, value: string) => void;
}

export default function SpellSelectorButton({ characterAtLevel, onChange }: SpellSelectorButtonProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);

  const spellChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("spell");
  }, [characterAtLevel]);

  const spellsRemaining = useMemo(() => {
    return spellChoices.filter(choice => choice.current === '').length;
  }, [spellChoices]);

  if (spellChoices.length === 0) {
    return <></>;
  }

  const buttonLabel = <><Icon.PencilSquare/>&nbsp; Spells ({spellsRemaining}/{spellChoices.length})</>;

  return (<>
    <PathfinderButton variant={['white', 'pill']} onClick={_ => handleShow()}>{buttonLabel}</PathfinderButton>
    {show && <SpellSelectorDialog
        show={show}
        onCancel={handleCancel}
        onSelect={onChange}
        characterAtLevel={characterAtLevel} />}
  </>);
}
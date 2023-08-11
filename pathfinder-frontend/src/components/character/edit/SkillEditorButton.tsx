import {ComponentProps, useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import CharacterAtLevel from "../../../v7/CharacterAtLevel";
import PathfinderButton from "../../common/PathfinderButton";
import {SkillEditor} from "./SkillEditor";
import SkillEditorDialog from "./SkillEditorDialog";

interface SkillEditorButtonProps extends ComponentProps<typeof SkillEditor> {
  characterAtLevel: CharacterAtLevel;
}

export default function SkillEditorButton({ characterAtLevel, ...dialogProps }: SkillEditorButtonProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);

  const skillChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("skill");
  }, [characterAtLevel]);

  const pointsRemaining = useMemo(() => {
    return skillChoices.filter(choice => characterAtLevel.selected(choice.path) === '').length;
  }, [skillChoices]);

  const buttonLabel = <><Icon.PencilSquare/>&nbsp; Skills ({pointsRemaining}/{skillChoices.length})</>;

  return (<>
    <PathfinderButton variant={['white', 'pill']} onClick={_ => handleShow()}>{buttonLabel}</PathfinderButton>
    {show && <SkillEditorDialog
        show={show}
        onCancel={handleCancel}
        characterAtLevel={characterAtLevel}
        {...dialogProps} />}
  </>);
}
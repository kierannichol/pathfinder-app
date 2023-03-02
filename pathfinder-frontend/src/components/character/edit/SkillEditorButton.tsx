import {ComponentProps, useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import Character from "../../../core/Character";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import PathfinderButton from "../../common/PathfinderButton";
import {SkillEditor} from "./SkillEditor";
import SkillEditorDialog from "./SkillEditorDialog";

interface SkillEditorButtonProps extends ComponentProps<typeof SkillEditor> {
  character: Character;
  characterAtLevel: CharacterAtLevel;
}

export default function SkillEditorButton({ character, characterAtLevel, ...dialogProps }: SkillEditorButtonProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);

  const skillChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("skill");
  }, [character]);

  const pointsRemaining = useMemo(() => {
    return skillChoices.filter(choice => choice.current === '').length;
  }, [skillChoices]);

  const buttonLabel = <><Icon.PencilSquare/>&nbsp; Edit Skills ({pointsRemaining}/{skillChoices.length})</>;

  return (<>
    <PathfinderButton variant={'white'} onClick={_ => handleShow()}>{buttonLabel}</PathfinderButton>
    {show && <SkillEditorDialog
        show={show}
        onCancel={handleCancel}
        character={character}
        characterAtLevel={characterAtLevel}
        {...dialogProps} />}
  </>);
}
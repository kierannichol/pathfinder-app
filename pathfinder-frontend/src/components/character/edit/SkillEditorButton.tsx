import {ComponentProps, useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import {Character} from "../../../model/character/Character";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {ChoiceType} from "../../../model/character/choices/CharacterChoice";
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
    return character.choicesForLevel(characterAtLevel.level)
    .filter(choice => choice.type === ChoiceType.SKILL_POINT);
  }, [character]);

  const pointsRemaining = useMemo(() => {
    return skillChoices.filter(choice => choice.current === '').size;
  }, [skillChoices]);

  const buttonLabel = <><Icon.PencilSquare/>&nbsp; Edit Skills ({pointsRemaining}/{skillChoices.size})</>;

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
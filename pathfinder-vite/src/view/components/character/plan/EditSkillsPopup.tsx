import {Button, Container, Modal} from "react-bootstrap";
import SkillsEditor, {SkillsEditorProps} from "@/view/components/character/plan/SkillsEditor.tsx";
import CharacterAtLevel from "@/data/v8/CharacterAtLevel.ts";
import Skills from "@/data/Skills.tsx";
import {Formula} from "@kierannichol/formula-js";
import {useMemo} from "react";

interface EditSkillsPopupProps extends SkillsEditorProps {
  show: boolean;
  onClose: () => void;
}

export default function EditSkillsPopup({ show, onClose, ...skillsEditorProps }: EditSkillsPopupProps) {

  const maxSkillRanks = useMemo(() => Formula.parse('sum(@max_skill_ranks#*)').resolve(skillsEditorProps.characterAtLevel)?.asNumber() ?? 0,
      [skillsEditorProps.characterAtLevel])

  return (<Modal
      show={show}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      className={'pf-new-character-dialog'}>
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Skills</Modal.Title>
    </Modal.Header>

    <Modal.Header>
      Skill Points: {totalUsedSkillPoints(skillsEditorProps.characterAtLevel)}/{maxSkillRanks}
    </Modal.Header>

    <Modal.Body>
      <Container>
        <SkillsEditor {...skillsEditorProps} />
      </Container>
    </Modal.Body>

    <Modal.Footer>
      <Button size={'lg'} onClick={_ => onClose()}>Close</Button>
    </Modal.Footer>
  </Modal>);
}

function totalUsedSkillPoints(characterAtLevel: CharacterAtLevel) {
  const formula = Formula.parse(Skills.all.map(skill => '@' + skill.id).join('+'))
  return formula.resolve(characterAtLevel)?.asText() ?? '?'
}
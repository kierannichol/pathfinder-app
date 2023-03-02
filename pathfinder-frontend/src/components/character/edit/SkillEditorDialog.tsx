import React, {ComponentProps, useMemo} from "react";
import {Modal} from "react-bootstrap";
import styles from "./Dialog.module.scss";
import {SkillEditor} from "./SkillEditor";

interface SkillEditorDialogProps extends ComponentProps<typeof SkillEditor> {
  show: boolean;
  onCancel?: () => void;
}

export default function SkillEditorDialog({ show, onCancel, character, characterAtLevel, ...skillEditorProps }: SkillEditorDialogProps) {
  const skillChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("skill")
  }, [character]);

  const pointsRemaining = useMemo(() => {
    return skillChoices.filter(choice => choice.current === '').length;
  }, [skillChoices]);

  const pointsAvailable = skillChoices.length;

  return <Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      fullscreen={'md-down'}
      className={styles.dialog}
  >
    <Modal.Header className={styles.title} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Edit Skills</Modal.Title>
    </Modal.Header>

    <Modal.Header>
      <label>Skill Points Remaining: {pointsRemaining}/{pointsAvailable}</label>
    </Modal.Header>

    <Modal.Body>
      <SkillEditor
          character={character}
          characterAtLevel={characterAtLevel}
          {...skillEditorProps} />
    </Modal.Body>
  </Modal>
}
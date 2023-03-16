import React, {useMemo} from "react";
import {Modal} from "react-bootstrap";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import {SelectChoiceNode} from "../../../core/Choice";
import styles from "./Dialog.module.scss";
import {RepeatingChoiceSelector} from "./RepeatingChoiceSelector";

interface SpellSelectorDialogProps {
  show: boolean;
  characterAtLevel: CharacterAtLevel;
  onCancel?: () => void;
  onSelect?: (key:string, value:string) => void;
}

export default function SpellSelectorDialog({ show, onSelect, onCancel, characterAtLevel }: SpellSelectorDialogProps) {
  const spellChoices = useMemo(() => {
    return characterAtLevel.choicesOfType("spell")
  }, [characterAtLevel]);

  const pointsRemaining = useMemo(() => {
    return spellChoices.filter(choice => choice.current === '').length;
  }, [spellChoices]);

  const pointsAvailable = spellChoices.length;

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
      <Modal.Title>Spells</Modal.Title>
    </Modal.Header>

    <Modal.Header>
      <label>Spells Remaining: {pointsRemaining}/{pointsAvailable}</label>
    </Modal.Header>

    <Modal.Body>
      <RepeatingChoiceSelector
          choices={characterAtLevel.choicesOfType('spell') as SelectChoiceNode[]}
          characterAtLevel={characterAtLevel}
          onChange={onSelect} />
    </Modal.Body>
  </Modal>
}
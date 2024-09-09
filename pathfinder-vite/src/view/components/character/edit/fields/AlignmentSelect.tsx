import {Container, Modal} from "react-bootstrap";
import {useMemo, useState} from "react";
import UnderlinedValue from "@/view/components/character/edit/fields/UnderlinedValue.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useDatabase} from "@/data/context.tsx";
import styles from "./AlignmentSelect.module.css";
import HorizontalLayout from "@/view/components/character/edit/common/HorizontalLayout.tsx";
import VerticalLayout from "@/view/components/character/edit/common/VerticalLayout.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";

interface AlignmentSelectProps {
  className?: string;
}

export default function AlignmentSelect({ className = undefined }: AlignmentSelectProps) {
  const [showPopup, setShowPopup] = useState(false);

  const character = useCharacterAtLevel();
  const database = useDatabase();
  const update = useCharacterUpdate();

  const choice = useMemo(() => character.choice('alignment'), [character]);
  const current = useMemo(() => {
    if (!choice) {
      return undefined;
    }
    const value = character.selected(choice) as string;
    return database.feature(value);
  }, [character, database, choice]);

  function handleSelect(alignment: string) {
    if (choice) {
      update.select(choice, alignment);
    }
    handleClose();
  }

  function handleClose() {
    setShowPopup(false);
  }

  function handleClickValue() {
    setShowPopup(true);
  }

  return (<>
    <UnderlinedValue label={choice?.label} className={className} onClick={handleClickValue}>{current?.name}</UnderlinedValue>
    <AlignmentSelectPopup show={showPopup}
                          onSelect={handleSelect}
                          onClose={handleClose} />
  </>)
}

interface AlignmentSelectPopupProps {
  show: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}

function AlignmentSelectPopup({ show, onClose, onSelect }: AlignmentSelectPopupProps) {
  function handleSelect(alignment: string) {
    onSelect(alignment);
  }

  return (<Modal
      show={show}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      size={'sm'}
      scrollable={true}
      className={'pf-new-character-dialog'}>
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Alignment</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Container>
        <VerticalLayout>
          <HorizontalLayout>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:lg')}>LG</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:ng')}>NG</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:cg')}>CG</div>
          </HorizontalLayout>
          <HorizontalLayout>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:ln')}>LN</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:n')}>N</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:cn')}>CN</div>
          </HorizontalLayout>
          <HorizontalLayout>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:le')}>LE</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:ne')}>NE</div>
            <div className={styles['alignment-box']} onClick={_ => handleSelect('alignment:ce')}>CE</div>
          </HorizontalLayout>
        </VerticalLayout>
      </Container>
    </Modal.Body>
  </Modal>);
}
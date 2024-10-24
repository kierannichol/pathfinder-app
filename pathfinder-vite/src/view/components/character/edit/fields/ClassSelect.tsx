import {Container, Modal} from "react-bootstrap";
import {useMemo, useState} from "react";
import UnderlinedValue from "@/view/components/character/edit/fields/UnderlinedValue.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useDatabase} from "@/data/context.tsx";
import VerticalLayout from "@/view/components/character/edit/common/VerticalLayout.tsx";
import {ChoiceRef} from "@/data/v8/Choice.ts";
import {UnderlinedSelectChoiceInput} from "@/view/components/character/edit/fields/UnderlinedSelectChoiceInput.tsx";
import {classNames} from "@/utils/classNames.ts";
import styles from "./ClassSelect.module.css";
import ChoicePathLabel from "@/view/components/character/edit/common/ChoicePathLabel.tsx";
import ArchetypeEditor from "@/view/components/character/ArchetypeEditor.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";

interface ClassSelectProps {
  className?: string;
}

export default function ClassSelect({ className = undefined }: ClassSelectProps) {
  const [showPopup, setShowPopup] = useState(false);

  const character = useCharacterAtLevel();
  const database = useDatabase();

  const classChoices = useMemo(() => character.choicesOfType('class', 'archetype'), [character]);

  const current = useMemo(() => {
    const counts: {[className:string]: number} = {};

    character.choicesOfType('class').forEach(choice => {
      const selectedClassId = character.selected(choice);
      if (!selectedClassId) return;
      const selectedClass = database.feature(selectedClassId as string);
      if (selectedClass) {
        counts[selectedClass.name] = (counts[selectedClass.name] || 0) + 1;
      }
    });

    return Object.keys(counts).map(className => `${className} ${counts[className]}`).join('/');
  }, [character, database]);

  function handleClose() {
    setShowPopup(false);
  }

  function handleClickValue() {
    setShowPopup(true);
  }

  return (<>
    <UnderlinedValue label='Class' className={classNames([styles.value, className])} onClick={handleClickValue}>{current}</UnderlinedValue>
    <ClassSelectPopup show={showPopup}
                      classChoices={classChoices}
                      onClose={handleClose} />
  </>)
}

interface ClassSelectPopupProps {
  show: boolean;
  classChoices: ChoiceRef[];
  onClose: () => void;
}

function ClassSelectPopup({ show, classChoices, onClose }: ClassSelectPopupProps) {
  const characterAtLevel = useCharacterAtLevel();
  const update = useCharacterUpdate();
  return (<Modal
      show={show}
      onHide={onClose}
      aria-labelledby="contained-modal-title-vcenter"
      scrollable={true}
      className={'pf-new-character-dialog'}>
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Class</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <Container>
        <VerticalLayout>
          <UnderlinedSelectChoiceInput choice='favored_class' />
          {classChoices.map((choice) =>
              choice.type === 'class'
                ? <UnderlinedSelectChoiceInput key={choice.path}
                                           label={<ChoicePathLabel choice={choice} separator={' '} />}
                                           choice={choice} />
                  : <ArchetypeEditor key={choice.path} characterAtLevel={characterAtLevel} onChange={update.select} />
          )}
        </VerticalLayout>
      </Container>
    </Modal.Body>
  </Modal>);
}
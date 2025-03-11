import * as React from 'react';
import {useMemo, useState} from 'react';
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {useDatabase} from "@/data/context.ts";
import DialogBox from "@/components/base/DialogBox.tsx";
import {ClassEditorBlock} from "@/components/character/ClassEditorBlock.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";

interface ClassEditorButtonProps {
  characterAtLevel: CharacterAtLevel;
}

function ClassEditorButton({characterAtLevel}: ClassEditorButtonProps) {
  const database = useDatabase();
  const onChange = useCharacterUpdate();

  const [show, setShow] = useState(false);

  const label = useMemo(() => {
    const classesByLevel: {[name:string]:number} = {};
    characterAtLevel.choicesOfType('class').forEach(choice => {
      const value = characterAtLevel.selected(choice);
      if (!value) return '';
      const name = database.name(value as string);
      classesByLevel[name] = (classesByLevel[name] || 0) + 1;
    });

    return Object.keys(classesByLevel).map(name => `${name} ${classesByLevel[name]}`).join('/');
  }, [characterAtLevel, database]);

  function handleClick() {
    setShow(true);
  }

  function handleCancel() {
    setShow(false);
  }

  return (
      <>
        <button onClick={handleClick} className="field">{label}</button>
        {show && <DialogBox show={show} onClose={handleCancel}>
          <DialogBox.Title>Class Editor</DialogBox.Title>
          <DialogBox.Body>
            <ClassEditorBlock characterAtLevel={characterAtLevel} onChange={onChange} />
          </DialogBox.Body>
        </DialogBox>}
      </>
  )
}

export default ClassEditorButton;
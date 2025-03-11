import * as React from 'react';
import {useMemo} from 'react';
import ChoiceSelectButton from "@/components/choice/ChoiceSelectButton.tsx";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {SelectChoiceRef} from "@/data/Choice.ts";
import ChoiceInputList from "@/view/character/edit/ChoiceInputList.tsx";
import ChoicePathLabel from "@/components/choice/ChoicePathLabel.tsx";

interface ClassEditorBlockProps {
 characterAtLevel: CharacterAtLevel;
 onChange: ChoiceSelectionHandler;
}

export function ClassEditorBlock({ characterAtLevel, onChange }: ClassEditorBlockProps) {
 const favoriteClassRef = useMemo(
     () => characterAtLevel.choice('favored_class') as SelectChoiceRef,
     [characterAtLevel]);

 const classByLevelRefs = useMemo(
     () => characterAtLevel.choicesOfType('class', 'archetype'),
     [characterAtLevel]);

 return (
  <div>
   <label>Favored Class</label>
   <ChoiceSelectButton choiceRef={favoriteClassRef} onChange={onChange} />
   <ChoiceInputList choices={classByLevelRefs}
                    characterAtLevel={characterAtLevel}
                    labelFn={choiceRef => <ChoicePathLabel choiceRef={choiceRef} />} />
  </div>
 )
}
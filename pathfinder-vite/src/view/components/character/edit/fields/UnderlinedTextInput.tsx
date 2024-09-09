import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import {useMemo, useState} from "react";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import ErrorBlock from "@/view/components/character/edit/common/ErrorBlock.tsx";
import {ChoiceRef} from "@/data/v8/Choice.ts";
import TextInput from "@/view/components/controls/TextInput.tsx";
import UnderlinedValue from "@/view/components/character/edit/fields/UnderlinedValue.tsx";
import styles from "./UnderlinedTextInput.module.css";

interface UnderlinedTextInputProps {
  choice: string | ChoiceRef;
  id?: string;
  className?: string;
  tabIndex?: number;
}

export default function UnderlinedTextInput({ choice, id = undefined, className = undefined, tabIndex = undefined }: UnderlinedTextInputProps) {
  const character = useCharacterAtLevel();

  const [editing, setEditing] = useState(false);

  const choiceRef = useMemo(() => typeof choice === 'string' ? character.choice(choice) : choice, [character, choice]);
  const value = useMemo(() => character.selected(choiceRef ?? '') as string, [character, choiceRef]);
  const update = useCharacterUpdate();

  if (!choiceRef) {
    return <ErrorBlock>Invalid Choice: {choice?.toString() ?? 'undefined'}</ErrorBlock>
  }

  function switchToEditMode() {
    setEditing(true);
  }

  return <UnderlinedValue id={id} className={className} label={choiceRef.label}>
    {!editing && <div className={styles.value} tabIndex={tabIndex ?? 0}
                      onClick={switchToEditMode}
                      onFocus={switchToEditMode}>{value}</div>}
    {editing && <TextInput value={value}
                           className={styles.input}
                           autoFocus={true}
                           onBlur={() => setEditing(false)}
                           onChange={modified => update.select(choiceRef, modified)} />}
  </UnderlinedValue>
}
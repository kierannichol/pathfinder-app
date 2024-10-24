import {ChoiceRef} from "@/data/v8/Choice.ts";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {useMemo} from "react";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import ErrorBlock from "@/view/components/character/edit/common/ErrorBlock.tsx";
import TextInput from "@/view/components/controls/TextInput.tsx";
import {classNames} from "@/utils/classNames.ts";
import styles from "./TextChoiceInput.module.css";

interface TextChoiceInputProps {
  choice: string | ChoiceRef;
  className?: string;
  onBlur?: () => void;
  onEnter?: () => void;
}

export default function TextChoiceInput({ choice, className, onBlur, onEnter }: TextChoiceInputProps) {
  const character = useCharacterAtLevel();

  const choiceRef = useMemo(() => typeof choice === 'string' ? character.choice(choice) : choice, [character, choice]);
  const value = useMemo(() => character.selected(choiceRef ?? '') as string, [character, choiceRef]);
  const update = useCharacterUpdate();

  if (!choiceRef) {
    return <ErrorBlock>Invalid Choice: {choice?.toString() ?? 'undefined'}</ErrorBlock>
  }

  return <TextInput value={value}
                    className={classNames([styles.input, className])}
                    autoFocus={true}
                    onBlur={onBlur}
                    onEnter={(_, event) => onEnter !== undefined ? onEnter() : event.currentTarget.blur() }
                    onChange={modified => update.select(choiceRef, modified)} />
}
import {ChoiceRef} from "@/data/v8/Choice.ts";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {ReactNode, useMemo} from "react";
import UnderlinedValue from "@/view/components/character/edit/fields/UnderlinedValue.tsx";
import SelectChoiceInput from "@/view/components/character/edit/fields/SelectChoiceInput.tsx";
import ErrorBlock from "@/view/components/character/edit/common/ErrorBlock.tsx";

interface UnderlinedSelectChoiceInputProps {
  choice: string | ChoiceRef;
  choiceIndex?: number;
  label?: ReactNode;
  className?: string;
}

export function UnderlinedSelectChoiceInput({ choice, choiceIndex = undefined, label = undefined, className = undefined }: UnderlinedSelectChoiceInputProps) {
  const character = useCharacterAtLevel();
  const choiceRef = useMemo(() => typeof choice === 'string' ? character.choice(choice) : choice, [character, choice]);

  if (!choiceRef) {
    return <ErrorBlock>Invalid Choice: {choice?.toString() ?? 'undefined'}</ErrorBlock>
  }

  return <UnderlinedValue className={className} label={label || choiceRef?.label}>
    <SelectChoiceInput className="d-flex flex-grow-1"
                       choice={choiceRef}
                       choiceIndex={choiceIndex}/>
  </UnderlinedValue>
}

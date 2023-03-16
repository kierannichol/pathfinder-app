import {useMemo} from "react";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import {SelectChoiceNode} from "../../../core/Choice";
import {PathfinderButtonGroup} from "../../common/PathfinderButtonGroup";
import DataChoiceSelectButton from "../DataChoiceSelectButton";
import "./RepeatingChoiceSelector.module.scss";

interface RepeatingChoiceSelectorProps {
  choices: SelectChoiceNode[];
  characterAtLevel: CharacterAtLevel;
  variant?: string;
  dialogVariant?: string;
  onChange?: (choiceId: string, spellId: string) => void;
}

export function RepeatingChoiceSelector({choices, characterAtLevel, onChange, variant = 'default', dialogVariant = 'default' }: RepeatingChoiceSelectorProps) {
  const selectedChoices = useMemo(() => {
    return choices.filter(choice => choice.current !== '' || choice.repeatingIndex === 0);
  }, [choices]);

  const addChoice = useMemo(() => {
    return choices.find(choice => choice.current === '' && choice.repeatingIndex > 0)
  }, [choices]);

  return <div>
    <PathfinderButtonGroup>
      {selectedChoices.map(choice =>
          <DataChoiceSelectButton key={choice.key}
                                  search={true}
                                  choice={choice as SelectChoiceNode}
                                  characterAtLevel={characterAtLevel}
                                  onSelect={selected => onChange?.(choice.key, selected)}
                                  variant={variant}
                                  dialogVariant={dialogVariant}
          />)}
    </PathfinderButtonGroup>
    {addChoice && <DataChoiceSelectButton
        search={true}
        choice={addChoice}
        characterAtLevel={characterAtLevel}
        onSelect={selected => onChange?.(addChoice.key, selected)}
        variant={'link'}
        dialogVariant={dialogVariant}
    >+ Add {addChoice.label}</DataChoiceSelectButton>}
  </div>
}
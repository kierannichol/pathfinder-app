import {useMemo} from "react";
import CharacterAtLevel from "../../../v7/CharacterAtLevel";
import {FeatureSelectChoiceRef} from "../../../v7/ChoiceRef";
import {PathfinderButtonGroup} from "../../common/PathfinderButtonGroup";
import DataChoiceSelectButton from "../DataChoiceSelectButton";
import "./RepeatingChoiceSelector.module.scss";

interface RepeatingChoiceSelectorProps {
  choices: FeatureSelectChoiceRef[];
  characterAtLevel: CharacterAtLevel;
  variant?: string;
  dialogVariant?: string;
  onChange?: (choiceId: string, spellId: string) => void;
}

export function RepeatingChoiceSelector({choices, characterAtLevel, onChange, variant = 'default', dialogVariant = 'default' }: RepeatingChoiceSelectorProps) {
  const selectedChoices = useMemo(() => {
    return choices.filter(choice => characterAtLevel.selected(choice) !== '' || choice.repeatingIndex === 0);
  }, [choices]);

  const addChoice = useMemo(() => {
    return choices.find(choice => characterAtLevel.selected(choice) === '' && choice.repeatingIndex > 0)
  }, [choices]);

  return <div>
    <PathfinderButtonGroup>
      {selectedChoices.map(choice =>
          <DataChoiceSelectButton key={choice.path}
                                  search={true}
                                  choiceRef={choice as FeatureSelectChoiceRef}
                                  characterAtLevel={characterAtLevel}
                                  onSelect={selected => onChange?.(choice.path, selected)}
                                  variant={variant}
                                  dialogVariant={dialogVariant}
          />)}
    </PathfinderButtonGroup>
    {addChoice && <DataChoiceSelectButton
        search={true}
        choiceRef={addChoice}
        characterAtLevel={characterAtLevel}
        onSelect={selected => onChange?.(addChoice.path, selected)}
        variant={'link'}
        dialogVariant={dialogVariant}
    >+ Add {addChoice.label}</DataChoiceSelectButton>}
  </div>
}
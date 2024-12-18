import {useMemo} from "react";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import ChoiceInputRow from "@/view/character/edit/ChoiceInputRow.tsx";
import ChoicePathLabel from "@/components/choice/ChoicePathLabel.tsx";
import {ChoiceRef} from "@/data/Choice.ts";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {range} from "@pathfinder-lib/utils/range"


function FeaturesTab() {
  const characterAtLevel = useCharacterAtLevel();
  const handleChange = useCharacterUpdate();

  const choices = useMemo(() => {
    return characterAtLevel.choicesOfType('feat', 'bonus_feat', 'class_feature');
  }, [characterAtLevel]);

  const rows = useMemo(() => {
    return range(0, characterAtLevel.level).map(level =>
        <CharacterFeaturesAtLevel level={level}
                                  key={level}
                                  choices={choices}
                                  onChange={handleChange} />)
  }, [characterAtLevel, choices, handleChange]);

  return <>
    <section>
      {rows}
    </section>
  </>
}

interface CharacterFeaturesAtLevelProps {
  level: number;
  choices: ChoiceRef[];
  onChange: ChoiceSelectionHandler;
}

function CharacterFeaturesAtLevel({ level, choices, onChange }: CharacterFeaturesAtLevelProps) {
  const characterAtLevel = useCharacterAtLevel(level);

  return <div>
    {choices
      .filter(choice => choice.parent.level === level)
      .map(choice =>
        <ChoiceInputRow key={choice.path}
                        choice={choice}
                        onChange={onChange}
                        label={<ChoicePathLabel choiceRef={choice}/>}
                        characterAtLevel={characterAtLevel} />)}
  </div>
}

export default FeaturesTab;
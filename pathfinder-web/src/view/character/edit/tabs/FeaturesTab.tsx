import {useMemo} from "react";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import ChoiceInputRow from "@/view/character/edit/ChoiceInputRow.tsx";
import {ChoiceRef} from "@/data/Choice.ts";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";
import {range} from "@pathfinder-lib/utils/range"
import styles from "./FeaturesTab.module.css";


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
    <section className={styles.featuresByLevel}>
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

  const choicesAtLevel = choices.filter(choice => choice.parent.level === level);
  const header = level === 0 ? 'Base' : `Level ${level}`;

  if (choicesAtLevel.length === 0) {
    return <></>
  }

  function handleDelete(choiceRef: ChoiceRef) {
    onChange(choiceRef, undefined);
  }

  return <div className={styles.level}>
    <h1>{header}</h1>
    <div className={styles.content}>
    {choicesAtLevel
      .map(choice =>
        <ChoiceInputRow key={choice.path}
                        choice={choice}
                        onChange={onChange}
                        onDelete={handleDelete}
                        label={choice.label}
                        characterAtLevel={characterAtLevel} />)}
    </div>
  </div>
}

export default FeaturesTab;
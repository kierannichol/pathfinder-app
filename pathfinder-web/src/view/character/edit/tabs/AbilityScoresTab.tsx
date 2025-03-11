import styles from "@/view/character/edit/CharacterEditView.module.css";
import ExpressionLabel from "@/view/character/edit/ExpressionLabel.tsx";
import AbilityScoreEditor from "@/view/character/edit/AbilityScoreEditor.tsx";
import ChoiceInputList from "@/view/character/edit/ChoiceInputList.tsx";
import ChoicePathLabel from "@/components/choice/ChoicePathLabel.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {useCharacterUpdate} from "@/view/character/edit/CharacterUpdateContext.tsx";

function AbilityScoresTab() {
  const characterAtLevel = useCharacterAtLevel();
  const onChange = useCharacterUpdate();

  return <>
    <section className={styles.abilityScoreSection}>
      <label className={styles.pointCost}><ExpressionLabel
          expression={"Ability Point Cost: {@ability_point_cost}"}/></label>
      <div className={styles.abilityScores}>
        {characterAtLevel.choicesOfType('ability_score+base').map(choiceRef =>
            <AbilityScoreEditor key={choiceRef.path}
                                className={styles.abilityScore}
                                choiceRef={choiceRef}
                                characterAtLevel={characterAtLevel}
                                onChange={onChange}/>)}
      </div>
      <ChoiceInputList className={styles.asiList}
                       labelFn={choiceRef => <ChoicePathLabel choiceRef={choiceRef}/>}
                       characterAtLevel={characterAtLevel}
                       choices={[
                         ...characterAtLevel.choicesOfType('asi'),
                       ]}/>
    </section>
  </>
}

export default AbilityScoresTab;
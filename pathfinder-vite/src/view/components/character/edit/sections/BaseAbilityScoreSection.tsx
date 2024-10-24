import Section from "@/view/components/character/edit/common/Section.tsx";
import TextChoiceInput from "@/view/components/character/edit/fields/TextChoiceInput.tsx";
import styles from "./BaseAbilityScoreSection.module.css";
import HorizontalLayout from "@/view/components/character/edit/common/HorizontalLayout.tsx";
import {ChoiceRef, SelectChoiceRef} from "@/data/v8/Choice.ts";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import {HTMLAttributes, useMemo, useState} from "react";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";
import {useDatabase} from "@/data/context.tsx";
import BoxedValue from "@/view/components/character/edit/fields/BoxedValue.tsx";
import {Formula} from "@kierannichol/formula-js";
import {classNames} from "@/utils/classNames.ts";

interface BaseAbilityScoreSectionProps {

}

export default function BaseAbilityScoreSection({}: BaseAbilityScoreSectionProps) {
  const character = useCharacterAtLevel();
  const asiChoices = useMemo(() => character.choicesOfType('asi'), [character]);

  return <Section header='Base Ability Scores' className={styles['base-ability-scores']}>
    <HorizontalLayout className={styles['ability-row']}>
      <div></div>
      <label>Score</label>
      <label>Mod</label>
      {asiChoices.map(choice => <label
          key={choice.path}>{choice.path.substring(0, choice.path.indexOf(':'))}</label>)}
    </HorizontalLayout>
    <AbilityScoreRow ability='str' asiChoices={asiChoices}/>
    <AbilityScoreRow ability='dex' asiChoices={asiChoices}/>
    <AbilityScoreRow ability='con' asiChoices={asiChoices}/>
    <AbilityScoreRow ability='wis' asiChoices={asiChoices}/>
    <AbilityScoreRow ability='int' asiChoices={asiChoices}/>
    <AbilityScoreRow ability='cha' asiChoices={asiChoices}/>
    <code>Ability Point Cost: {character.resolve("ability_point_cost")?.asNumber()}</code>
  </Section>
}

interface AbilityScoreRowProps {
  ability: string;
  asiChoices: ChoiceRef[]
}

function AbilityScoreRow({ ability, asiChoices }: AbilityScoreRowProps) {
  const character = useCharacterAtLevel();

  const score = useMemo(() => character.resolve(`${ability}_score`)?.asText(), [character, ability]);
  const mod = useMemo(() => Formula.parse(`signed(@${ability}_mod)`).resolve(character)?.asText(), [character, ability]);

  return <HorizontalLayout className={styles['ability-row']}>
    <div className={styles['ability-label']}>{ability.toUpperCase()}</div>
    <BaseAbilityScoreBox choice={`${ability}:base`} score={score ?? '--'}/>
    <div>{mod}</div>
    {asiChoices.map(choice => <div key={choice.path}><AsiRadioButton choice={choice} ability={ability}/></div>)}
  </HorizontalLayout>
}

interface BaseAbilityScoreBoxProps {
  choice: string | ChoiceRef;
  score: string;
}

function BaseAbilityScoreBox({ choice, score }: BaseAbilityScoreBoxProps) {
  const [isEditing, setEditing] = useState(false);

  function startEdit() {
    setEditing(true);
  }

  function endEdit() {
    setEditing(false);
  }

  return isEditing
      ? <BoxedValue>
          <TextChoiceInput choice={choice}
                           className={styles['text-input']}
                           onBlur={endEdit} />
        </BoxedValue>
      : <BoxedValue onClick={startEdit}>{score}</BoxedValue>
}

interface AsiRadioButtonProps {
  choice: string | ChoiceRef;
  ability: string;
}

function AsiRadioButton({ choice, ability }: AsiRadioButtonProps) {
  const database = useDatabase();
  const character = useCharacterAtLevel();
  const choiceRef = useMemo(() => (typeof choice === 'string' ? character.choice(choice) : choice) as SelectChoiceRef, [character, choice]);
  const choiceValue = useMemo(() => character.selected(choiceRef ?? '') as string, [character, choiceRef]);
  const update = useCharacterUpdate();
  const option = useMemo(() => {
    return choiceRef.options(database)
        .find(o => o.name.toLowerCase().startsWith(ability));
  }, [choiceRef, database]);

  const selected = choiceValue === option?.key;

  function handleSelect() {
    update.select(choiceRef, option?.key ?? '');
  }

  return selected
      ? (option.tags.includes('asi_p2')
              ? <RadioCircle className={classNames([styles.radio, styles.selected, 'clickable'])}>2</RadioCircle>
              : <RadioCircle className={classNames([styles.radio, styles.selected, 'clickable'])}>1</RadioCircle>)
      : <RadioCircle className={classNames([styles.radio, 'clickable'])} onClick={handleSelect} />
      // ? <BiCheckCircle className={classNames([styles.radio, styles.selected])} />
      // : <BiCircle className={classNames([styles.radio, 'clickable'])} onClick={handleSelect} />;
}

interface RadioCircleProps extends HTMLAttributes<HTMLDivElement> {
}

function RadioCircle({ children, className, ...divProps }: RadioCircleProps) {
  // return <Badge content="+1" pill={true}>+1</Badge>
  return <div className={classNames([className, styles.radio2])} {...divProps}>{children}</div>
}
import Section from "@/view/components/character/edit/common/Section.tsx";
import TextChoiceInput from "@/view/components/character/edit/fields/TextChoiceInput.tsx";
import styles from "./BaseAbilityScoreSection.module.css";
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
    <table className={styles['base-ability-table']}>
      <caption><label>Ability Point Cost: {character.resolve("ability_point_cost")?.asNumber()}</label></caption>
      <thead>
      <tr>
        <th></th>
        <th>Mod</th>
        <th>Total</th>
          <th>Base</th>
          {asiChoices.map(choice =>
              <th key={choice.path}>{choice.path.substring(0, choice.path.indexOf(':'))}</th>)}
        </tr>
      </thead>
      <tbody>
        <AbilityScoreRow ability='str' asiChoices={asiChoices}/>
        <AbilityScoreRow ability='dex' asiChoices={asiChoices}/>
        <AbilityScoreRow ability='con' asiChoices={asiChoices}/>
        <AbilityScoreRow ability='wis' asiChoices={asiChoices}/>
        <AbilityScoreRow ability='int' asiChoices={asiChoices}/>
        <AbilityScoreRow ability='cha' asiChoices={asiChoices}/>
      </tbody>
  </table>
  </Section>
}

interface AbilityScoreRowProps {
  ability: string;
  asiChoices: ChoiceRef[]
}

function AbilityScoreRow({ ability, asiChoices }: AbilityScoreRowProps) {
  const character = useCharacterAtLevel();

  const score = useMemo(() => character.resolve(`${ability}_score`)?.asText(), [character, ability]);
  const baseChoice = useMemo(() => character.choice(`${ability}:base`), [character]);
  const mod = useMemo(() => Formula.parse(`signed(@${ability}_mod)`).resolve(character)?.asText(), [character, ability]);

  return <tr className={styles['ability-row']}>
    <td className={styles['ability-label']}>{ability.toUpperCase()}</td>
    <td><BoxedValue>{mod}</BoxedValue></td>
    <td><BoxedValue>{score}</BoxedValue></td>
    <td>
      <BoxedValue>
        <TextChoiceInput choice={baseChoice as ChoiceRef}
                           className={styles['text-input']}/>
      </BoxedValue>
    </td>
    {asiChoices.map(choice => <td key={choice.path}><AsiRadioButton choice={choice} ability={ability}/></td>)}
  </tr>
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

  const value = selected
      ? option.tags.includes('asi_p2') ? 2 : 1
      : undefined;

  function handleSelect() {
    update.select(choiceRef, option?.key ?? '');
  }

  return selected
      ? <RadioCircle className={classNames([styles.radio, styles.selected, 'clickable'])}>
          <span className={styles.sign}>+</span>
          <span>{value}</span>
        </RadioCircle>
      : <RadioCircle className={classNames([styles.radio, 'clickable'])} onClick={handleSelect} />
      // ? <BiCheckCircle className={classNames([styles.radio, styles.selected])} />
      // : <BiCircle className={classNames([styles.radio, 'clickable'])} onClick={handleSelect} />;
}

function RadioCircle({ children, className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  // return <Badge content="+1" pill={true}>+1</Badge>
  return <div className={classNames([className, styles.radio2])} {...divProps}>{children}</div>
}
import {faFileLines} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useMemo} from "react";
import {Link} from "react-router-dom";
import {useAsyncMemo} from "../../../app/reactHooks";
import {Character} from "../../../model/character/Character";
import {ChoiceType} from "../../../model/character/choices/CharacterChoice";
import ChoiceSelector from "../ChoiceSelector";
import LevelStatsDisplay from "../LevelStatsDisplay";
import "./CharacterLevel.scss";
import CharacterTraitList from "./CharacterTraitList";
import SkillEditorButton from "./SkillEditorButton";

interface CharacterLevelProps {
  character: Character;
  level: number;
  onChange: (key:string, value:string) => void;
}

export default function CharacterLevel({ character, level, onChange }: CharacterLevelProps) {

  const [ characterAtLevel ] = useAsyncMemo(() => character.atLevel(level), [character, level]);
  const choicesForLevel = useMemo(() => character.choicesForLevel(level)
      .filter(choice => choice.type !== ChoiceType.SKILL_POINT),
      [character, level]);

  const [ characterChanges ] = useAsyncMemo(async () => {
    if (characterAtLevel == undefined) {
      return undefined;
    }
    return level > 1
        ? characterAtLevel.intersection(await character.atLevel(level - 1))
        : characterAtLevel;
  }, [characterAtLevel, character]);

  const specialIds = useMemo(() => characterChanges?.features('ability'), [characterChanges]);

  if (characterAtLevel === undefined || specialIds === undefined || characterChanges === undefined) {
    return <div>Loading...</div>;
  }

  return <fieldset>
    <legend>
      <div className={'level-title'}>{'Level ' + level}</div>
      <div className={'character-sheet-button'}>
        <Link to={`/character/sheet/v2/${character.id}/${level}`} target={'_blank'} rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFileLines}/>
        </Link>
      </div>
    </legend>
    <div className='section'>
      {characterAtLevel.has('bab') && <LevelStatsDisplay characterAtLevel={characterAtLevel} />}
      <SkillEditorButton
          character={character}
          characterAtLevel={characterAtLevel}
          onChange={onChange}/>

      {choicesForLevel.map(choice =>
          <div key={choice.key}>
            <label>{choice.label}</label>
            <ChoiceSelector
                character={characterAtLevel}
                choice={choice}
                onchange={value => onChange(choice.key, value)} />
          </div>
      )}

        {specialIds.length > 0 && <>
          <label>Specials</label>
          <CharacterTraitList classIds={[ characterAtLevel.get(`class_at_${level}`)?.asText() ?? '' ]} level={level} />
          </>}
    </div>
  </fieldset>
}
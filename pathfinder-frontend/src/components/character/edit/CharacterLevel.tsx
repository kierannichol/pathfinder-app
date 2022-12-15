import {faFileLines} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useMemo} from "react";
import {Link} from "react-router-dom";
import {useAsyncMemo} from "../../../app/reactHooks";
import Character from "../../../v3/model/Character";
import ChoiceSelector from "../ChoiceSelector";
import LevelStatsDisplay from "../LevelStatsDisplay";
import CharacterFeatureList from "./CharacterFeatureList";
import "./CharacterLevel.scss";
import SkillEditorButton from "./SkillEditorButton";

interface CharacterLevelProps {
  character: Character;
  level: number;
  onChange: (key:string, value:string) => void;
}

export default function CharacterLevel({ character, level, onChange }: CharacterLevelProps) {

  const characterAtLevel = useMemo(() => character.atLevel(level), [character, level]);
  const choicesForLevel = useMemo(() => character.choicesForLevel(level)
      .filter(choice => choice.type !== 'skill'),
      [character, level]);

  const [ characterChanges ] = useAsyncMemo(async () => {
    if (characterAtLevel === undefined) {
      return undefined;
    }
    return level > 1
        ? characterAtLevel.intersection(await character.atLevel(level - 1))
        : characterAtLevel;
  }, [characterAtLevel, character]);

  const featIds = useMemo(() => characterChanges?.find('feat:*').map(a => a.id), [characterChanges]);
  const specialIds = useMemo(() => characterChanges?.find('ability:*').map(a => a.id), [characterChanges]);

  if (characterAtLevel === undefined || specialIds === undefined || featIds === undefined || characterChanges === undefined) {
    return <div>Loading...</div>;
  }

  return <fieldset>
    <legend>
      <div className={'level-title'}>{'Level ' + level}</div>
      <div className={'character-sheet-button'}>
        <Link to={`/character/sheet/${character.id}/${level}`} target={'_blank'} rel='noopener noreferrer'>
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

      {choicesForLevel.length > 0 && <div>
        <label>Choices</label>
      {choicesForLevel
          .sort((a, b) => b.input.localeCompare(a.input))
          .map(choice =>
          <div key={choice.id}>
            <label className={"label--option-type"}>{choice.label}</label>
            <ChoiceSelector
                characterAtLevel={characterAtLevel}
                choice={choice}
                onChange={value => onChange(choice.id, value)} />
          </div>
      )}
      </div>}

      {featIds.length > 0 && <div>
      <label>New Feats</label>
      <CharacterFeatureList featureIds={featIds} variant="special" />
      </div>}

      {specialIds.length > 0 && <div>
      <label>New Special Abilities</label>
      {/*<CharacterTraitList classIds={[ characterAtLevel.get(`class_at_${level}`)?.asText() ?? '' ]} level={level} />*/}
      <CharacterFeatureList featureIds={specialIds} variant="special" />
      </div>}
    </div>
  </fieldset>
}
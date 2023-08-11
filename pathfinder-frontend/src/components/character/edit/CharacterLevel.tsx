import {faFileLines} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDeferredValue, useMemo} from "react";
import * as Icon from "react-bootstrap-icons";
import {Link} from "react-router-dom";
import {uniq} from "../../../util/pfutils";
import CharacterAtLevel from "../../../v7/CharacterAtLevel";
import {FeatureSelectChoiceRef} from "../../../v7/ChoiceRef";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import ChoiceSelector from "../ChoiceSelector";
import DataChoiceSelectButton from "../DataChoiceSelectButton";
import LevelStatsDisplay from "../LevelStatsDisplay";
import CharacterFeatureList from "./CharacterFeatureList";
import "./CharacterLevel.scss";
import {RepeatingChoiceSelector} from "./RepeatingChoiceSelector";
import SkillEditorButton from "./SkillEditorButton";
import SpellSelectorButton from "./SpellSelectorButton";

interface CharacterLevelProps {
  characterId: string;
  characterAtLevel: CharacterAtLevel;
  characterAtPreviousLevel: CharacterAtLevel|undefined;
  onChange: (key:string, value:string) => void;
}

export default function CharacterLevel({ characterId, characterAtLevel, characterAtPreviousLevel, onChange }: CharacterLevelProps) {
  const database = usePathfinderDatabaseV7();
  characterAtLevel = useDeferredValue(characterAtLevel);
  characterAtPreviousLevel = useDeferredValue(characterAtPreviousLevel);

  const characterChanges = useMemo(() => {
    if (characterAtPreviousLevel === undefined) {
      return characterAtLevel;
    }
    return characterAtLevel.intersection(characterAtPreviousLevel);
  }, [characterAtLevel, characterAtPreviousLevel]);

  const classChoice = useMemo(() => (characterChanges
          && characterChanges.choicesOfType('class')[0]),
      [characterChanges]);

  const className = useMemo(() => database.name(characterAtLevel.selected(classChoice)),
      [database, classChoice]);

  const archetypeChoices = useMemo(() => (characterChanges
          && characterChanges.choicesOfType('archetype') as FeatureSelectChoiceRef[]),
      [characterChanges]);

  const choicesForLevel = useMemo(() => (characterChanges && characterChanges.choices
      .filter(choice => choice.type !== 'archetype')
      .filter(choice => choice.type !== 'skill')
      .filter(choice => choice.type !== 'spell')
      .filter(choice => choice.type !== 'class')) || [],
      [characterChanges]);

  const featIds = useMemo(() => characterChanges.search('feat:*').map(a => a.id), [characterChanges]);
  const specialIds = useMemo(() => characterChanges.search('ability:*').map(a => a.id), [characterChanges]);

  if (characterAtLevel === undefined || specialIds === undefined || featIds === undefined || characterChanges === undefined) {
    return <div>Loading...</div>;
  }

  const classEditButton = classChoice
      ? <> - <CharacterClassEditButton characterAtLevel={characterAtLevel} classChoice={classChoice as FeatureSelectChoiceRef} onChange={onChange}/></>
      : <></>;

  return <fieldset>
    <legend>
      <div className={'level-title'}><span>{`Level ${characterAtLevel.level}`}</span>{classEditButton}</div>
      <div className={'character-sheet-button'}>
        <Link to={`/character/sheet/${characterId}/${characterAtLevel.level}`} target={'_blank'} rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFileLines}/>
        </Link>
      </div>
    </legend>
    <div className='section'>
      {className !== undefined && <LevelStatsDisplay characterAtLevel={characterAtLevel} />}
      <div className='level-pillbox'>
        <SkillEditorButton
            characterAtLevel={characterChanges}
            onChange={onChange}/>
        <SpellSelectorButton
            characterAtLevel={characterAtLevel}
            onChange={onChange}/>
      </div>

      {archetypeChoices.length > 0 &&
          <>
          <label>{className} Archetypes</label>
            <RepeatingChoiceSelector
                choices={archetypeChoices}
                characterAtLevel={characterAtLevel}
                onChange={onChange}/>
          </>
      }

      {choicesForLevel.length > 0 && <div>
        <label>Choices</label>
      {choicesForLevel
          .sort((a, b) => a.type.localeCompare(b.type))
          .map(choice =>
          <div key={choice.path}>
            <label className={"label--option-type"}>{choice.label}</label>
            <ChoiceSelector
                characterAtLevel={characterAtLevel}
                choice={choice}
                onChange={value => onChange(choice.path, value)} />
          </div>
      )}
      </div>}

      {featIds.length > 0 && <div>
      <label>New Feats</label>
      <CharacterFeatureList featureIds={featIds} variant="special" />
      </div>}

      {specialIds.length > 0 && <div>
      <label>New Special Abilities</label>
      <CharacterFeatureList featureIds={specialIds} variant="special" />
      </div>}
    </div>
  </fieldset>
}


interface CharacterLevelNameProps {
  characterAtLevel: CharacterAtLevel;
  classChoice: FeatureSelectChoiceRef;
  onChange: (key:string, value:string) => void;
}

function CharacterClassEditButton({ characterAtLevel, classChoice, onChange }: CharacterLevelNameProps) {
  const database = usePathfinderDatabaseV7();

  const classLevelText = useMemo(() => {
    const classesSelected = uniq(characterAtLevel.choicesOfType('class')
      .map(choice => characterAtLevel.selected(choice)));

    return classesSelected.map(classId => {
      if (!classId) {
        return "Unknown";
      }
      const classLevel = characterAtLevel.resolve(classId)?.asNumber() ?? 0;
      const className = database.name(classId) ?? "Unknown";
      return `${className} ${classLevel}`;
    }).join('/');
  }, [characterAtLevel, database]);

  return <DataChoiceSelectButton
      variant={'header-link'}
      dialogVariant={'class'}
      characterAtLevel={characterAtLevel}
      choiceRef={classChoice}
      onSelect={value => onChange(classChoice.path, value)}>
    <Icon.PencilSquare/>&nbsp;{classLevelText}
  </DataChoiceSelectButton>
}
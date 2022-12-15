import {useEffect, useState} from "react";
import {useCharacterRepository} from "../app/reactCharacter";
import AbilityScoreSelectButton from "../components/character/AbilityScoreSelectButton";
import CharacterTextInput from "../components/character/base/CharacterTextInput";
import CharacterAttributeChoiceInputs from "../components/character/CharacterAttributeChoiceInputs";
import DataChoiceSelectButton from "../components/character/DataChoiceSelectButton";
import CharacterLevel from "../components/character/edit/CharacterLevel";
import LoadingBlock from "../components/common/LoadingBlock";
import Character from "../v3/model/Character";
import CharacterAtLevel from "../v3/model/CharacterAtLevel";
import {SelectChoice} from "../v3/model/Choice";
import "./CharacterEditView.scss";

interface CharacterEditViewProps {
  loaded: Character;
}

function CharacterEditView({ loaded }: CharacterEditViewProps) {
  const characterRepository = useCharacterRepository();
  const [ character, setCharacter ] = useState(loaded);
  const [ character0, setCharacter0 ] = useState<CharacterAtLevel>();

  function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    mappingFunction(character)
      .then(async updated => {
        setCharacter(updated);
        await characterRepository.save(updated);
      });
  }

  function selectChoice<T>(key: string, value: T) {
    updateCharacter(character => character.select(key, value));
  }

  useEffect(() => {
    let mounted = true;
    (async () => {
      const data = await character.atLevel(0);
      if (mounted) {
        setCharacter0(data);
      }
    })();
    return () => {
      mounted = false;
    }
  }, [character]);

  const nameChoice = character.choice('level0:character_name');
  const raceChoice = character.choice('level0:race') as SelectChoice;
  const classChoice = character.choice('level0:class_1') as SelectChoice;
  const alignmentChoice = character.choice('level0:alignment') as SelectChoice;

  if (character0 === undefined) {
    return <main><LoadingBlock/></main>
  }

  return (<main className={'pf-character-edit-view'}>
    <fieldset>
      <legend>Character Information</legend>
      <div className='section'>
        {nameChoice && <>
          <label htmlFor={'character_name'}>Character Name</label>
          <CharacterTextInput
              value={nameChoice.current}
              onChange={(value: string) => selectChoice(nameChoice.id, value)} />
        </>}
        {raceChoice && <>
        <label htmlFor={'character_race'}>Race</label>
        <DataChoiceSelectButton
            choice={raceChoice}
            characterAtLevel={character0}
            onSelect={value => selectChoice(raceChoice.id, value)} />
        </>}
        {classChoice && <>
        <label htmlFor={'character_class'}>Class</label>
        <DataChoiceSelectButton
            choice={classChoice}
            characterAtLevel={character0}
            onSelect={value => selectChoice(classChoice.id, value)} />
        </>}
        {alignmentChoice && <>
        <label htmlFor={'alignment'}>Alignment</label>
        <DataChoiceSelectButton
            choice={alignmentChoice}
            characterAtLevel={character0}
            onSelect={value => selectChoice(alignmentChoice.id, value)} />
        </>}
      </div>
    </fieldset>
    <fieldset>
      <legend>Attributes</legend>
      <div className='section'>
        <CharacterAttributeChoiceInputs
            characterAtLevel={character0}
            onCommit={(ability, value) => selectChoice(`level0:${ability}_base`, value)} />

        {character.choice("level0:race_asi") &&
            <>
              <label>Ability Score Increase</label>
              <AbilityScoreSelectButton
                  value={character.choice("level0:race_asi")?.current}
                  onSelect={(value: string) => selectChoice("level0:race_asi", value)} />
            </>
        }
      </div>
    </fieldset>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(level =>(
          <CharacterLevel key={`level${level}`} character={character} level={level} onChange={selectChoice} />
      ))}

  </main>);
}

export default CharacterEditView;
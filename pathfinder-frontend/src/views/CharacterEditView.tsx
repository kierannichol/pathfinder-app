import {useEffect, useState} from "react";
import {useCharacterRepository} from "../app/reactCharacter";
import AbilityScoreSelectButton from "../components/character/AbilityScoreSelectButton";
import AlignmentSelectButton from "../components/character/AlignmentSelectButton";
import CharacterAttributeChoiceInputs from "../components/character/CharacterAttributeChoiceInputs";
import CharacterClassSelectButton from "../components/character/CharacterClassSelectButton";
import CharacterNameChoiceInput from "../components/character/CharacterNameChoiceInput";
import CharacterRaceSelectButton from "../components/character/CharacterRaceSelectButton";
import CharacterLevel from "../components/character/edit/CharacterLevel";
import LoadingBlock from "../components/common/LoadingBlock";
import {Character} from "../model/character/Character";
import {CharacterAtLevel} from "../model/character/CharacterAtLevel";
import CharacterChoice from "../model/character/choices/CharacterChoice";
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

  if (character0 === undefined) {
    return <main><LoadingBlock/></main>
  }

  return (<main className={'pf-character-edit-view'}>
    <fieldset>
      <legend>Character Information</legend>
      <div className='section'>
        <label htmlFor={'character_name'}>Character Name</label>
        <CharacterNameChoiceInput
            id={'character_name'}
            value={character0.get('character_name')?.asText() ?? ''}
            onChange={(value: string) => selectChoice(CharacterChoice.CHARACTER_NAME, value)} />
        <label htmlFor={'character_race'}>Race</label>
        <CharacterRaceSelectButton
            value={character0.get('race')?.asText()}
            onSelect={value => selectChoice(CharacterChoice.RACE, value)} />
        <label htmlFor={'character_class'}>Class</label>
        <CharacterClassSelectButton
            value={character0.get('class_1')?.asText()}
            onSelect={value => selectChoice(CharacterChoice.CLASS_1, value)} />
        <label htmlFor={'alignment'}>Alignment</label>
        <AlignmentSelectButton
            value={character.getChoice(CharacterChoice.CHARACTER_ALIGNMENT)}
            onSelect={value => selectChoice(CharacterChoice.CHARACTER_ALIGNMENT, value)} />
      </div>
    </fieldset>
    <fieldset>
      <legend>Attributes</legend>
      <div className='section'>
        <CharacterAttributeChoiceInputs
            characterAtLevel={character0}
            onCommit={(ability, value) => selectChoice(`level0:${ability}_base`, value)} />

        {character.hasChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE) &&
            <>
              <label>Ability Score Increase</label>
              <AbilityScoreSelectButton
                  value={character.getChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)}
                  onSelect={(value: string) => selectChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE, value)} />
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
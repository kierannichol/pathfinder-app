import {useMemo, useState} from "react";
import {loadState, saveState} from "../app/localStorage";
import {ClassData} from "../compiled";
import CharacterAttributeChoiceInputs from "../components/character/CharacterAttributeChoiceInputs";
import CharacterClassSelector from "../components/character/CharacterClassSelector";
import CharacterNameChoiceInput from "../components/character/CharacterNameChoiceInput";
import CharacterRaceAbilityScoreIncreaseChoiceInput
  from "../components/character/CharacterRaceAbilityScoreIncreaseChoiceInput";
import CharacterRaceChoiceInput from "../components/character/CharacterRaceChoiceInput";
import CharacterLevel from "../components/character/edit/CharacterLevel";
import {HeaderRow, LabelRow} from "../components/Rows";
import {ClassContextProvider} from "../database/ClassDatabase";
import {PathfinderDatabaseContextProvider} from "../database/v2/PathfinderDatabase";
import {Character, PackedCharacter} from "../model/character/Character";
import CharacterChoice from "../model/character/choices/CharacterChoice";

function CharacterEditView(props: {
  characterId: string
}) {
  // const loadedState = new Character(props.characterId);
  const [ character, setCharacter ] = useState(() => {
    const loadedState = loadState<PackedCharacter>(`character-${props.characterId}`);
    console.log(loadedState);
    return loadedState !== undefined
        ? Character.unpack(loadedState)
        : new Character(props.characterId);
  });
  const character0 = useMemo(() => character.atLevel(0), [character]);

  function updateCharacter(mappingFunction: (character: Character) => Character) {
    const updated = mappingFunction(character);
    setCharacter(updated);
    // console.log(JSON.stringify(updated.atLevel(20)));
    saveState(`character-${props.characterId}`, updated.pack());
  }

  function selectChoice<T>(key: string, value: T) {
    updateCharacter(character => character.select(key, value));
  }

  return (<main>
    <HeaderRow>Character Information</HeaderRow>
    <ClassContextProvider>
    <PathfinderDatabaseContextProvider>
      <LabelRow label="Character Name">
        <CharacterNameChoiceInput
            value={character0.get('character_name')?.asText() ?? ''}
            onChange={(value: string) => selectChoice(CharacterChoice.CHARACTER_NAME, value)}
        />
      </LabelRow>
      <LabelRow label="Race">
        <CharacterRaceChoiceInput
            value={character0.get('race')?.asText() ?? ''}
            onChange={(value: string) => selectChoice(CharacterChoice.RACE, value)}
        />
      </LabelRow>
      <LabelRow label="Class">
        <CharacterClassSelector
            value={character0.get('class_1')?.asText() ?? ''}
            onChange={(value: ClassData|undefined) => selectChoice(CharacterChoice.CLASS_1, value)}
        />
      </LabelRow>
      <HeaderRow>Attributes</HeaderRow>
      <CharacterAttributeChoiceInputs character={character}
                                      onchange={character => updateCharacter(_ => character)} />
      <LabelRow label="Ability Score Increase"
                visible={character.hasChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)}>
        <CharacterRaceAbilityScoreIncreaseChoiceInput
            value={character.getChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE)}
            onChange={(value: string) => selectChoice(CharacterChoice.RACE_ABILITY_SCORE_INCREASE, value)}
        />
      </LabelRow>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(level =>(
          <CharacterLevel key={`level${level}`} character={character} level={level} onChange={selectChoice} />
      ))}
    </PathfinderDatabaseContextProvider>
    </ClassContextProvider>
  </main>);
}

export default CharacterEditView;
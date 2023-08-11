import {useMemo, useState} from "react";
import {useCharacterRepository} from "../app/reactCharacter";
import AbilityScoreSelectButton from "../components/character/AbilityScoreSelectButton";
import CharacterTextInput from "../components/character/base/CharacterTextInput";
import CharacterAttributeChoiceInputs from "../components/character/CharacterAttributeChoiceInputs";
import DataChoiceSelectButton from "../components/character/DataChoiceSelectButton";
import CharacterLevel from "../components/character/edit/CharacterLevel";
import PromptDialog from "../components/character/edit/PromptDialog";
import LoadingBlock from "../components/common/LoadingBlock";
import Character from "../v7/Character";
import {FeatureSelectChoiceRef} from "../v7/ChoiceRef";
import "./CharacterEditView.scss";

interface CharacterEditViewProps {
  loaded: Character;
}

function CharacterEditView({ loaded }: CharacterEditViewProps) {
  const characterRepository = useCharacterRepository();
  const [ character, setCharacter ] = useState(loaded);
  const characterAtLevels = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(level => character.atLevel(level)),
      [character]);
  const character0 = characterAtLevels[0];
  const [ showFavoredClassPrompt, setShowFavoredClassPrompt ] = useState(false);

  function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    mappingFunction(character)
      .then(async updated => {
        setCharacter(updated);
        await characterRepository.save(updated);
      });
  }

  function selectChoice(key: string, value: string) {
    updateCharacter(character => character.select(key, value));
  }

  function applyFavoredClassToAllLevels() {
    const selected: {[key:string]:string} = {};
    const favoredClass = character.selected('favored_class')?.replace("favored_class", "class");
    if (!favoredClass) {
      return;
    }
    for (let level = 1; level <= 20; level++) {
      selected[`${level}:class`] = favoredClass;
    }
    updateCharacter(character => character.selectAll(selected));
  }

  const totalAbilityPointCost = useMemo(() => character0?.resolve('ability_point_cost:str')?.asText() ?? '0', [character0]);

  if (character0 === undefined) {
    return <main><LoadingBlock/></main>
  }

  const nameChoice = character0.choice('character_name');
  const raceChoice = character0.choice('race') as FeatureSelectChoiceRef;
  const classChoice = character0.choice('favored_class') as FeatureSelectChoiceRef;
  const alignmentChoice = character0.choice('alignment') as FeatureSelectChoiceRef;

  return (<main className={'pf-character-edit-view'}>
    <fieldset>
      <legend>Character Information</legend>
      <div className='section'>
        {nameChoice && <>
          <label htmlFor={'character_name'}>Character Name</label>
          <CharacterTextInput
              value={character.selected(nameChoice.path) ?? ''}
              onChange={(value: string) => selectChoice(nameChoice?.path, value)} />
        </>}
        {raceChoice && <>
        <label htmlFor={'character_race'}>Race</label>
        <DataChoiceSelectButton
            choiceRef={raceChoice}
            characterAtLevel={character0}
            search={true}
            onSelect={value => selectChoice(raceChoice.path, value)} />
        </>}
        {classChoice && <>
        <label htmlFor={'character_class'}>Favored Class</label>
        <DataChoiceSelectButton
            choiceRef={classChoice}
            characterAtLevel={character0}
            search={true}
            onSelect={value => {
              selectChoice(classChoice.path, value);
              setShowFavoredClassPrompt(true);
            }} />
          <PromptDialog show={showFavoredClassPrompt}
                        prompt={"Change all class levels to favored class?"}
                        onCancel={() => setShowFavoredClassPrompt(false)}
                        onConfirm={() => {
                          applyFavoredClassToAllLevels();
                          setShowFavoredClassPrompt(false);
                        }}
          />
        </>}
        {alignmentChoice && <>
        <label htmlFor={'alignment'}>Alignment</label>
        <DataChoiceSelectButton
            choiceRef={alignmentChoice}
            characterAtLevel={character0}
            onSelect={value => selectChoice(alignmentChoice.path, value)} />
        </>}
      </div>
    </fieldset>
    <fieldset>
      <legend>Attributes</legend>
      <div className='section'>
        <div>Ability Point Cost: {totalAbilityPointCost}</div>
        <CharacterAttributeChoiceInputs
            characterAtLevel={character0}
            onCommit={(ability, value) => selectChoice(`${ability}_base`, value)} />

        {character0.choices.some(choice => choice.type === "asi") &&
            <>
              <label>Ability Score Increase</label>
              {character0.choices.filter(choice => choice.type === "asi").map(choice =>
              <AbilityScoreSelectButton
                  key={choice.path}
                  value={character.selected(choice.path)}
                  onSelect={(value: string) => selectChoice(choice.path, value)} />
              )}
            </>
        }
      </div>
    </fieldset>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(level =>(
          <CharacterLevel key={`level${level}`}
                          characterId={character.id}
                          characterAtLevel={characterAtLevels[level]}
                          characterAtPreviousLevel={characterAtLevels[level-1]}
                          onChange={selectChoice} />
      ))}

  </main>);
}

export default CharacterEditView;
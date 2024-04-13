import React, {useMemo, useState} from "react";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import PromptDialog from "../PromptDialog.tsx";
import AbilityScoresEditor from "./AbilityScoresEditor.tsx";
import CharacterLevelEditor from "./CharacterLevelEditor.tsx";
import SelectClassButton from "./SelectClassButton.tsx";
import {Link} from "react-router-dom";
import {FaFileLines} from "react-icons/fa6";
import {CharacterModel} from "../../model/CharacterModel.ts";
import {ChoiceInputType, ChoiceModel, SelectChoiceModel} from "../../model/ChoiceModel.ts";
import {useCharacterStoreModel} from "../../model/ModelContext.tsx";
import DataChoiceTextInput from "../controls/DataChoiceTextInput.tsx";
import {isString} from "../../../app/pfutils.ts";

interface CharacterEditorProps {
  loaded: CharacterModel;
}

export type CharacterChoiceSelectHandler = (choice: ChoiceModel, value: string|string[]) => void;

export default function CharacterEditor({ loaded }: CharacterEditorProps) {
  const [ character, setCharacter ] = useState(loaded);
  const [ showFavoredClassPrompt, setShowFavoredClassPrompt ] = useState(false);

  const characterStore = useCharacterStoreModel();
  const characterAtLevels = useMemo(() => {
    const levels = [];
    for (let i = 0; i <= 20; i++) {
      levels[i] = character.atLevel(i);
    }
    return levels;
  }, [character]);

  const characterLevel0 = characterAtLevels[0];

  async function updateCharacter(mappingFunction: (character: CharacterModel) => Promise<CharacterModel>) {
    const updated = await mappingFunction(character);
    setCharacter(updated);
    await characterStore.save(updated);
  }

  function handleChange(choice: ChoiceModel, value: string|string[]) {
    if (isString(value) && character.selected(choice.path) === value) {
      return;
    }

    if (choice.path === 'favored_class') {
      setShowFavoredClassPrompt(true);
    }

    updateCharacter(character => character.selectAll({ [choice.path]: value }));
  }

  function applyFavoredClassToAllLevels() {
    const selected: {[key:string]:string} = {};
    const favoredClass = (character.selected('favored_class') as string)?.replace("favored_class", "class");
    if (!favoredClass) {
      return;
    }
    for (let level = 1; level <= 20; level++) {
      selected[`${level}:class`] = favoredClass;
    }
    updateCharacter(character => character.selectAll(selected));
  }

  return <main>
    <header>Character Information</header>
    <section>
        {characterLevel0.choices
        .filter(choice => choice.type !== 'ability_score' && choice.type !== 'asi')
        .map(choice => <div key={choice.path}>
          <label htmlFor={choice.path}>{choice.label}</label>
          {choice.inputType === ChoiceInputType.Text &&
              <DataChoiceTextInput
                  id={choice.path}
                  choiceRef={choice as SelectChoiceModel}
                  characterAtLevel={characterLevel0.withoutChoice(choice)}
                  onSelect={value => handleChange(choice, value)} />}
          {choice.inputType === ChoiceInputType.Select &&
              <DataChoiceSelectButton
                  id={choice.path}
                  choiceRef={choice as SelectChoiceModel}
                  characterAtLevel={characterLevel0.withoutChoice(choice)}
                  onSelect={value => handleChange(choice, value)} />}
        </div>)}
      <PromptDialog show={showFavoredClassPrompt}
                    prompt="Change all class levels to favored class?"
                    onCancel={() => setShowFavoredClassPrompt(false)}
                    onConfirm={() => {
                      applyFavoredClassToAllLevels();
                      setShowFavoredClassPrompt(false);
                    }} />
    </section>
    <header>Ability Scores</header>
    <section>
      <AbilityScoresEditor
          characterAtLevel={characterLevel0}
          onChange={handleChange} />
    </section>
    {characterAtLevels.slice(1).map(characterAtLevel => <div key={`level-${characterAtLevel.level}`}>
      <header>
        <div>Level {characterAtLevel.level}</div>
        <div> - </div>
        <SelectClassButton characterAtLevel={characterAtLevel}/>
        <div className={'character-sheet-button'}>
          <Link to={`/character/sheet/${character.id}/${characterAtLevel.level}`} target={'_blank'} rel='noopener noreferrer'>
            <FaFileLines />
          </Link>
        </div>
      </header>
      <section>
        <CharacterLevelEditor characterAtLevel={characterAtLevel}
                              characterAtPreviousLevel={characterAtLevels[characterAtLevel.level - 1]}
                              onChange={handleChange} />
      </section>
    </div>)}
  </main>
}
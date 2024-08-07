import React, {useMemo, useState} from "react";
import DataChoiceSelectButton from "../../controls/DataChoiceSelectButton.tsx";
import PromptDialog from "../../PromptDialog.tsx";
import AbilityScoresEditor from "../AbilityScoresEditor.tsx";
import CharacterLevelEditor from "./CharacterLevelEditor.tsx";
import SelectClassButton from "../SelectClassButton.tsx";
import {Link} from "react-router-dom";
import {FaFileLines} from "react-icons/fa6";
import DataChoiceTextInput from "../../controls/DataChoiceTextInput.tsx";
import {isString} from "@/app/pfutils.ts";
import {useCharacterStore} from "@/data/context.tsx";
import Character from "../../../../data/v8/Character.ts";
import {ChoiceInputType, ChoiceRef, SelectChoiceRef} from "@/data/v8/Choice.ts";
import CharacterAtLevel from "@/data/v8/CharacterAtLevel.ts";

interface CharacterPlannerProps {
  loaded: Character;
}

export type CharacterChoiceSelectHandler = (choice: ChoiceRef, value: string|string[]) => void;

export default function CharacterPlanner({ loaded }: CharacterPlannerProps) {
  const [ character, setCharacter ] = useState(loaded);
  const [ showFavoredClassPrompt, setShowFavoredClassPrompt ] = useState(false);

  const characterStore = useCharacterStore();
  const characterAtLevels = useMemo(() => {
    const levels = [];
    for (let i = 0; i <= 20; i++) {
      levels[i] = character.atLevel(i);
    }
    return levels;
  }, [character]);

  const characterLevel0 = characterAtLevels[0];
  console.log(characterLevel0)

  async function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    const updated = await mappingFunction(character);
    setCharacter(updated);
    await characterStore.save(updated);
  }

  function handleChange(choice: ChoiceRef, value: string|string[]) {
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
      <ChoiceInput characterAtLevel={characterLevel0}
                   choiceKey="character_name"
                   handleChange={handleChange} />
      <ChoiceInput characterAtLevel={characterLevel0}
                   choiceKey="race"
                   handleChange={handleChange} />
      <ChoiceInput characterAtLevel={characterLevel0}
                   choiceKey="favored_class"
                   handleChange={handleChange} />
      <ChoiceInput characterAtLevel={characterLevel0}
                   choiceKey="alignment"
                   handleChange={handleChange} />

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

interface ChoiceInputProps {
  characterAtLevel: CharacterAtLevel;
  choiceKey: string;
  handleChange: (choice: ChoiceRef, value: string) => void;
}

function ChoiceInput({ characterAtLevel, choiceKey, handleChange }: ChoiceInputProps) {
    const choice = useMemo(() => characterAtLevel.choice(choiceKey),
        [characterAtLevel, choiceKey]);

    if (!choice) {
      return <div>CHOICE NOT FOUND</div>
    }

    return <div key={choice.path}>
      <label htmlFor={choice.path}>{choice.label}</label>
      {choice.inputType === ChoiceInputType.Text &&
          <DataChoiceTextInput
              id={choice.path}
              choiceRef={choice as SelectChoiceRef}
              characterAtLevel={characterAtLevel.withoutChoice(choice.path)}
              onSelect={value => handleChange(choice, value)} />}
      {choice.inputType === ChoiceInputType.Select &&
          <DataChoiceSelectButton
              id={choice.path}
              choiceRef={choice as SelectChoiceRef}
              characterAtLevel={characterAtLevel.withoutChoice(choice.path)}
              onSelect={value => handleChange(choice, value)} />}
    </div>
}
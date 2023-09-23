import {useMemo, useState} from "react";
import {useCharacterStore} from "../../../data/model/Character.react.tsx";
import TextInput from "../controls/TextInput.tsx";
import DataChoiceSelectButton from "../controls/DataChoiceSelectButton.tsx";
import PromptDialog from "../PromptDialog.tsx";
import AbilityScoresEditor from "./AbilityScoresEditor.tsx";
import CharacterLevelEditor from "./CharacterLevelEditor.tsx";
import SelectClassButton from "./SelectClassButton.tsx";
import Character from "../../../data/model/Character.ts";
import ChoiceRef, {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import {ChoiceInputType} from "../../../data/model/Choice.ts";

interface CharacterEditorProps {
  loaded: Character;
}

export type CharacterChoiceSelectHandler = (choice: ChoiceRef, value: string) => void;

export default function CharacterEditor({ loaded }: CharacterEditorProps) {
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

  async function updateCharacter(mappingFunction: (character: Character) => Promise<Character>) {
    const updated = await mappingFunction(character);
    setCharacter(updated);
    await characterStore.save(updated);
  }

  function handleChange(choice: ChoiceRef, value: string) {
    if (character.selected(choice.path) === value) {
      return;
    }

    if (choice.path === 'favored_class') {
      setShowFavoredClassPrompt(true);
    }

    updateCharacter(character => character.selectAll({ [choice.path]: value }));
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

  return <main>
    <header>Character Information</header>
    <section>
      {characterLevel0.choices
      .filter(choice => choice.type !== 'ability_score')
      .map(choice => <div key={choice.path}>
        <label htmlFor={choice.path}>{choice.label}</label>
        {choice.inputType === ChoiceInputType.Text &&
            <TextInput id={choice.path}
                       value={characterLevel0.selected(choice) ?? ''}
                       onChange={value => handleChange(choice, value)} />}
        {choice.inputType === ChoiceInputType.FeatureSelect &&
            <DataChoiceSelectButton
                id={choice.path}
                choiceRef={choice as FeatureSelectChoiceRef}
                characterAtLevel={characterLevel0.without(characterLevel0.selected(choice) ?? '')}
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
        <SelectClassButton characterAtLevel={characterAtLevel}/></header>
      <section>
        <CharacterLevelEditor characterAtLevel={characterAtLevel}
                              characterAtPreviousLevel={characterAtLevels[characterAtLevel.level - 1]}
                              onChange={handleChange} />
      </section>
    </div>)}
  </main>
}
import {DataContextState} from "../logic/DataContext";

const characterAbilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

const initialState: DataContextState = {
  'character_name': '',
  'race': '',
  'class_1': '',

  ...characterAbilities.reduce((state, ability) => ({
    ...state,
    [`${ability}_base`]: 10,
    [`${ability}_score`]: `{@${ability}_base + @${ability}_race_asi}`,
    [`${ability}_mod`]: `{floor(@${ability}_score / 2) - 5}`
  }), {})
}

const CharacterState = {
  InitialState: initialState,
  Abilities: characterAbilities
}

export default CharacterState;
import {DataContextState} from "../logic/DataContext";

const characterAbilities = ['str', 'dex', 'con', 'int', 'wis', 'cha'];

const initialState: DataContextState = {
  'character_name': '',
  'race': '',
  'class_1': '',

  'fort_save': '{sum(@fort:*) + @con_mod}',
  'ref_save': '{sum(@ref:*) + @dex_mod}',
  'will_save': '{sum(@will:*) + @wis_mod}',

  'initiative': '{@dex_mod + @initiative:misc}',

  'ac': '{10 + sum(@ac:*)}',
  'ac:size': '{2^abs(5-@size)-1}',

  'cmb': '{@bab + @str_mod + @size_mod}',
  'cmd': '{@bab + @str_mod + @dex_mod + @size_mod + 10}',

  ...characterAbilities.reduce((state, ability) => ({
    ...state,
    [`${ability}_base`]: 10,
    [`${ability}_score`]: `{sum(@${ability}:*)}`,
    [`${ability}_mod`]: `{floor(@${ability}_score / 2) - 5}`
  }), {})
}

const CharacterState = {
  InitialState: initialState,
  Abilities: characterAbilities
}

export default CharacterState;
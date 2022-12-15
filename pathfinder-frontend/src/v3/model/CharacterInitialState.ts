import AbilityScores from "../../database/AbilityScores";
import {CharacterState} from "./CharacterState";
import Choice from "./Choice";
import Reference from "./Reference";

export const InitialState: CharacterState = {
  'character_name': '',
  'race': '',
  'class_1': '',
  'alignment': '',

  'fort_save': '{sum(@fort:*) + @con_mod}',
  'ref_save': '{sum(@ref:*) + @dex_mod}',
  'will_save': '{sum(@will:*) + @wis_mod}',

  'initiative': '{@dex_mod + @initiative:misc}',

  'ac': '{10 + @ac:armor + @ac:shield + @dex_mod + @ac:size + @ac:natural + @ac:deflection + @ac:misc}',
  'ac:touch': '{10 + @dex_mod + @ac:misc}',
  'ac:size': '{2^abs(5-@size)-1}',
  'ac:flat': '{@ac - @dex_mod}',

  'cmb': '{@bab + @str_mod + @size_mod}',
  'cmd': '{@bab + @str_mod + @dex_mod + @size_mod + 10}',

  ...AbilityScores.map(s => s.id).reduce((state, ability) => ({
    ...state,
    [`${ability}:base`]: 10,
    [`${ability}_score`]: `{sum(@${ability}:*)}`,
    [`${ability}_mod`]: `{floor(@${ability}_score / 2) - 5}`
  }), {})
};

export const InitialChoices: Choice[] = [
    Choice.textChoice("level0:character_name", 'Name', 0, "name", 'character_name'),
    Choice.selectChoice("level0:race", "Race", 0, "race", [ new Reference('race') ]),
    Choice.selectChoice("level0:class_1", "Class", 0, "class", [ new Reference('class') ]),
    Choice.selectChoice("level0:alignment", "Alignment", 0, "alignment", [ new Reference('alignment') ]),
    ...AbilityScores.map(s => s.id).map(ability => Choice.textChoice(`level0:${ability}_base`, ability.toUpperCase(), 0, "ability_score", `${ability}:base`)),
];
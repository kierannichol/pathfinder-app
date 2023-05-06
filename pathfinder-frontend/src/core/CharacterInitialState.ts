import {Formula, Resolvable} from "@kierannichol/formula-js";
import AbilityScores from "../database/AbilityScores";
import {ComponentTemplate, Template} from "../v4/Template";
import {CharacterState} from "./CharacterState";
import {Choice, OptionCategory} from "./Choice";
import Effect from "./Effect";

export const InitialState: CharacterState = {
  'character_name': '',

  'fort_save': '{sum(@fort:*) + @con_mod}',
  'ref_save': '{sum(@ref:*) + @dex_mod}',
  'will_save': '{sum(@will:*) + @wis_mod}',

  'initiative': '{@dex_mod + @initiative:misc}',

  'ac': '{10 + @ac:armor + @ac:shield + @dex_mod + @ac:size + @ac:natural + @ac:deflection + @ac:misc}',
  'ac:touch': '{10 + @dex_mod + @ac:misc}',
  // 'ac:size': '{2^abs(5-@size)-1}',
  'ac:size': '{(2^abs(5-@size))-1}',
  'ac:flat': '{@ac - @dex_mod}',

  'cmb': '{@bab + @str_mod + @size_mod}',
  'cmd': '{@bab + @str_mod + @dex_mod + @size_mod + 10}',

  ...AbilityScores.map(s => s.id).reduce((state, ability) => ({
    ...state,
    [`${ability}:base`]: '10',
    [`${ability}_score`]: `{sum(@${ability}:*)}`,
    [`${ability}_mod`]: `{floor(@${ability}_score / 2) - 5}`,
    [`ability_point_cost:${ability}`]: `{if(@${ability}:base==7,-4,0) + if(@${ability}:base==8,-2,0) + if(@${ability}:base==9,-1,0) + if(@${ability}:base==10,0,0) + if(@${ability}:base==11,1,0) + if(@${ability}:base==12,2,0) + if(@${ability}:base==13,3,0) + if(@${ability}:base==14,5,0) + if(@${ability}:base==15,7,0) + if(@${ability}:base==16,10,0) + if(@${ability}:base==17,13,0) + if(@${ability}:base==18,17,0)}`
  }), {}),

  'ability_point_cost': '{sum(@ability_point_cost:*)}'
};

const CharacterClassCategories = [ new OptionCategory('core', 'Core'), new OptionCategory('base', 'Base'), new OptionCategory('hybrid', 'Hybrid'), new OptionCategory('unchained', 'Unchained') ];
const FeatCategories = [
    new OptionCategory('feat+combat', 'Combat'),
    new OptionCategory('feat+general', 'General'),
    new OptionCategory('feat+teamwork', 'Teamwork'),
    new OptionCategory('feat+metamagic', 'Metamagic')
];

export const InitialChoices = [
      Choice.text("level0:character_name", "character_name", "Character Name", value => [ Effect.setValue('character_name', value) ]),
      Choice.select("level0:race", "Race", "race",db => db.options(['race'])),
      // Choice.select("level0:favored_class", "Favored Class", "favored_class", (db, category) => db.options(['favored_class', ...(category ? [category] : [])]), [ new OptionCategory('core', 'Core'), new OptionCategory('base', 'Base'), new OptionCategory('hybrid', 'Hybrid'), new OptionCategory('unchained', 'Unchained') ]),
      Choice.select("level0:favored_class", "Favored Class", "favored_class", (db, category) => db.options(['favored_class', category ?? '']), CharacterClassCategories),
      Choice.select("level0:alignment", "Alignment", "alignment", db => db.options(['alignment'])),
      ...AbilityScores.map(s => s.id)
      .map(ability =>
          Choice.text(`level0:${ability}_base`, "Ability Score", "ability_score",  value => [ Effect.setValue(`${ability}:base`, value) ])),
];

export const BasePlayerTemplate = new Template('base', [
    new ComponentTemplate(Resolvable.True, [], InitialChoices),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    .map(level => {
      // Level-specific choices
      const choices = [ Choice.select(`level${level}:class`, "Class", "class",db => db.options(['class']), CharacterClassCategories) ];
      if ((level % 2) === 1) {
        choices.push(Choice.select(`level${level}:feat`, "Feat", "feat", (db, category) => {
          return db.options([category ?? 'feat'])
        }, FeatCategories));
      }
      return new ComponentTemplate(Formula.parse("@character_level>=" + level), [], choices)
    })
]);
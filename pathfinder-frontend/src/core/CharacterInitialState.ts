import AbilityScores from "../database/AbilityScores";
import {Formula} from "../logic/Formula";
import Resolvable from "../logic/Resolvable";
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

export const InitialChoices = [
      Choice.text("level0:character_name", "character_name", "Character Name", value => [ Effect.setValue('character_name', value) ]),
      Choice.select("level0:race", "Race", "race",db => db.options(['race'])),
      Choice.select("level0:favored_class", "Favored Class", "favored_class", db => db.options(['favored_class'])),
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
      const choices = [ Choice.select(`level${level}:class`, "Class", "class",db => db.options(['class'])) ];
      if ((level % 2) == 1) {
        choices.push(Choice.select(`level${level}:feat`, "Feat", "feat", (db, category) => {
          const tags = ['feat'];
          if (category) {
            tags.push(category);
          }

          return db.options(tags)
        }, [ new OptionCategory('combat', 'Combat'), new OptionCategory('general', 'General')]));
      }
      return new ComponentTemplate(Formula.parse("@character_level>=" + level), [], choices)
    })
]);
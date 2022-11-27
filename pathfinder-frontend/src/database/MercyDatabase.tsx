export interface Mercy {
  id: string;
  name: string;
  description: string;
  prerequisites_formula: string;
}

const MercyDatabase: {[id:string]: Mercy} = {
  'mercy:deceived': {
    id: 'mercy:deceived',
    name: 'Deceived',
    description: 'The target can immediately attempt a new saving throw to disbelieve any ongoing illusions that it failed to disbelieve within the last minute.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:deceived'
  },
  'mercy:fatigued': {
    id: 'mercy:fatigued',
    name: 'Fatigued',
    description: 'The target is no longer fatigued.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:fatigued'
  },
  'mercy:riled': {
    id: 'mercy:riled',
    name: 'Riled',
    description: 'The paladin\'s lay on hands also acts as calm emotions, but only for the purpose of suppressing morale bonuses (such as from the rage spell) and emotion effects that aren\'t fear effects. Use the paladin\'s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:riled'
  },
  'mercy:shaken': {
    id: 'mercy:shaken',
    name: 'Shaken',
    description: 'The target is no longer shaken.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:shaken'
  },
  'mercy:sickened': {
    id: 'mercy:sickened',
    name: 'Sickened',
    description: 'The target is no longer sickened.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:sickened'
  },
  'mercy:dazed': {
    id: 'mercy:dazed',
    name: 'Dazed',
    description: 'The target is no longer dazed.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:dazed'
  },
  'mercy:diseased': {
    id: 'mercy:diseased',
    name: 'Diseased',
    description: 'The paladin\'s lay on hands ability also acts as remove disease, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:diseased'
  },
  'mercy:enfeebled': {
    id: 'mercy:enfeebled',
    name: 'Enfeebled',
    description: 'The paladin dispels any magical effects that are reducing one of the target\'s ability scores (paladin\'s choice).',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:enfeebled'
  },
  'mercy:haunted': {
    id: 'mercy:haunted',
    name: 'Haunted',
    description: 'The paladin’s lay on hands also acts as protection from evil, but only for the purpose of allowing a new saving throw against enchantment (charm) and enchantment (compulsion) effects, making the target immune to any attempts to possess or exercise mental control over the target, or preventing a life force from controlling the target (all as described in the second effect of protection from evil). Use the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:haunted'
  },
  'mercy:staggered': {
    id: 'mercy:staggered',
    name: 'Staggered',
    description: 'The target is no longer staggered, unless the target is at exactly 0 hit points.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:staggered'
  },
  'mercy:targeted': {
    id: 'mercy:targeted',
    name: 'Targeted',
    description: 'The paladin’s lay on hands also acts as sanctuary, using the paladin’s level as the caster level. The saving throw DC to negate this effect is equal to 10 + 1/2 the paladin’s level + the paladin’s Charisma modifier.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:targeted'
  },
  'mercy:confused': {
    id: 'mercy:confused',
    name: 'Confused',
    description: 'The target is no longer confused. Source',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:confused'
  },
  'mercy:cursed': {
    id: 'mercy:cursed',
    name: 'Cursed',
    description: 'The paladin’s lay on hands ability also acts as remove curse, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:cursed'
  },
  'mercy:exhausted': {
    id: 'mercy:exhausted',
    name: 'Exhausted',
    description: 'The target is no longer exhausted. The paladin must have the fatigue mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:fatigue AND !@mercy:exhausted'
  },
  'mercy:frightened': {
    id: 'mercy:frightened',
    name: 'Frightened',
    description: 'The target is no longer frightened. The paladin must have the shaken mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:shaken AND !@mercy:frightened'
  },
  'mercy:injured': {
    id: 'mercy:injured',
    name: 'Injured',
    description: 'The target gains fast healing 3 for a number of rounds equal to 1/2 the paladin’s level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:injured'
  },
  'mercy:nauseated': {
    id: 'mercy:nauseated',
    name: 'Nauseated',
    description: 'The target is no longer nauseated. The paladin must have the sickened mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:sickened AND !@mercy:nauseated'
  },
  'mercy:poisoned': {
    id: 'mercy:poisoned',
    name: 'Poisoned',
    description: 'The paladin’s lay on hands ability also acts as neutralize poison, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:poisoned'
  },
  'mercy:restorative': {
    id: 'mercy:restorative',
    name: 'Restorative',
    description: 'The target heals 1d4 points of ability damage from a single ability score of the paladin’s choosing. The paladin must have the enfeebled mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:enfeebled AND !@mercy:restorative'
  },
  'mercy:amputated': {
    id: 'mercy:amputated',
    name: 'Amputated',
    description: 'The paladin’s lay on hands also acts as regenerate, but only for the purposes of regrowing severed body members, broken bones, and ruined organs. The paladin must have the injured mercy before she can select this mercy.',
    prerequisites_formula: '@class:paladin >= 12 AND @mercy:injured AND !@mercy:amputated'
  },
  'mercy:blinded': {
    id: 'mercy:blinded',
    name: 'Blinded',
    description: 'The target is no longer blinded.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:blinded'
  },
  'mercy:deafened': {
    id: 'mercy:deafened',
    name: 'Deafened',
    description: 'The target is no longer deafened.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:deafened'
  },
  'mercy:ensorcelled': {
    id: 'mercy:ensorcelled',
    name: 'Ensorcelled',
    description: 'The paladin’s lay on hands also acts as dispel magic, using the paladin’s level as her caster level (maximum 20).',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:ensorcelled'
  },
  'mercy:paralyzed': {
    id: 'mercy:paralyzed',
    name: 'Paralyzed',
    description: 'The target is no longer paralyzed.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:paralyzed'
  },
  'mercy:petrified': {
    id: 'mercy:petrified',
    name: 'Petrified',
    description: 'The paladin’s lay on hands ability also acts as stone to flesh, but only for the purpose of removing the petrified condition from a creature.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:petrified'
  },
  'mercy:stunned': {
    id: 'mercy:stunned',
    name: 'Stunned',
    description: 'The target is no longer stunned.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:stunned'
  },
}

export default MercyDatabase;
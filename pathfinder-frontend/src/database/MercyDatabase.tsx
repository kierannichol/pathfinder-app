export interface Mercy {
  id: string;
  name: string;
  description: string;
  prerequisites_formula: string;
}

const MercyDatabase: {[id:string]: Mercy} = {
  'deceived': {
    id: 'deceived',
    name: 'Deceived',
    description: 'The target can immediately attempt a new saving throw to disbelieve any ongoing illusions that it failed to disbelieve within the last minute.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:deceived'
  },
  'fatigued': {
    id: 'fatigued',
    name: 'Fatigued',
    description: 'The target is no longer fatigued.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:fatigued'
  },
  'riled': {
    id: 'riled',
    name: 'Riled',
    description: 'The paladin\'s lay on hands also acts as calm emotions, but only for the purpose of suppressing morale bonuses (such as from the rage spell) and emotion effects that aren\'t fear effects. Use the paladin\'s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:riled'
  },
  'shaken': {
    id: 'shaken',
    name: 'Shaken',
    description: 'The target is no longer shaken.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:shaken'
  },
  'sickened': {
    id: 'sickened',
    name: 'Sickened',
    description: 'The target is no longer sickened.',
    prerequisites_formula: '@class:paladin >= 3 AND !@mercy:sickened'
  },
  'dazed': {
    id: 'dazed',
    name: 'Dazed',
    description: 'The target is no longer dazed.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:dazed'
  },
  'diseased': {
    id: 'diseased',
    name: 'Diseased',
    description: 'The paladin\'s lay on hands ability also acts as remove disease, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:diseased'
  },
  'enfeebled': {
    id: 'enfeebled',
    name: 'Enfeebled',
    description: 'The paladin dispels any magical effects that are reducing one of the target\'s ability scores (paladin\'s choice).',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:enfeebled'
  },
  'haunted': {
    id: 'haunted',
    name: 'Haunted',
    description: 'The paladin’s lay on hands also acts as protection from evil, but only for the purpose of allowing a new saving throw against enchantment (charm) and enchantment (compulsion) effects, making the target immune to any attempts to possess or exercise mental control over the target, or preventing a life force from controlling the target (all as described in the second effect of protection from evil). Use the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:haunted'
  },
  'staggered': {
    id: 'staggered',
    name: 'Staggered',
    description: 'The target is no longer staggered, unless the target is at exactly 0 hit points.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:staggered'
  },
  'targeted': {
    id: 'targeted',
    name: 'Targeted',
    description: 'The paladin’s lay on hands also acts as sanctuary, using the paladin’s level as the caster level. The saving throw DC to negate this effect is equal to 10 + 1/2 the paladin’s level + the paladin’s Charisma modifier.',
    prerequisites_formula: '@class:paladin >= 6 AND !@mercy:targeted'
  },
  'confused': {
    id: 'confused',
    name: 'Confused',
    description: 'The target is no longer confused. Source',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:confused'
  },
  'cursed': {
    id: 'cursed',
    name: 'Cursed',
    description: 'The paladin’s lay on hands ability also acts as remove curse, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:cursed'
  },
  'exhausted': {
    id: 'exhausted',
    name: 'Exhausted',
    description: 'The target is no longer exhausted. The paladin must have the fatigue mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:fatigue AND !@mercy:exhausted'
  },
  'frightened': {
    id: 'frightened',
    name: 'Frightened',
    description: 'The target is no longer frightened. The paladin must have the shaken mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:shaken AND !@mercy:frightened'
  },
  'injured': {
    id: 'injured',
    name: 'Injured',
    description: 'The target gains fast healing 3 for a number of rounds equal to 1/2 the paladin’s level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:injured'
  },
  'nauseated': {
    id: 'nauseated',
    name: 'Nauseated',
    description: 'The target is no longer nauseated. The paladin must have the sickened mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:sickened AND !@mercy:nauseated'
  },
  'poisoned': {
    id: 'poisoned',
    name: 'Poisoned',
    description: 'The paladin’s lay on hands ability also acts as neutralize poison, using the paladin’s level as the caster level.',
    prerequisites_formula: '@class:paladin >= 9 AND !@mercy:poisoned'
  },
  'restorative': {
    id: 'restorative',
    name: 'Restorative',
    description: 'The target heals 1d4 points of ability damage from a single ability score of the paladin’s choosing. The paladin must have the enfeebled mercy before selecting this mercy.',
    prerequisites_formula: '@class:paladin >= 9 AND @mercy:enfeebled AND !@mercy:restorative'
  },
  'amputated': {
    id: 'amputated',
    name: 'Amputated',
    description: 'The paladin’s lay on hands also acts as regenerate, but only for the purposes of regrowing severed body members, broken bones, and ruined organs. The paladin must have the injured mercy before she can select this mercy.',
    prerequisites_formula: '@class:paladin >= 12 AND @mercy:injured AND !@mercy:amputated'
  },
  'blinded': {
    id: 'blinded',
    name: 'Blinded',
    description: 'The target is no longer blinded.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:blinded'
  },
  'deafened': {
    id: 'deafened',
    name: 'Deafened',
    description: 'The target is no longer deafened.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:deafened'
  },
  'ensorcelled': {
    id: 'ensorcelled',
    name: 'Ensorcelled',
    description: 'The paladin’s lay on hands also acts as dispel magic, using the paladin’s level as her caster level (maximum 20).',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:ensorcelled'
  },
  'paralyzed': {
    id: 'paralyzed',
    name: 'Paralyzed',
    description: 'The target is no longer paralyzed.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:paralyzed'
  },
  'petrified': {
    id: 'petrified',
    name: 'Petrified',
    description: 'The paladin’s lay on hands ability also acts as stone to flesh, but only for the purpose of removing the petrified condition from a creature.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:petrified'
  },
  'stunned': {
    id: 'stunned',
    name: 'Stunned',
    description: 'The target is no longer stunned.',
    prerequisites_formula: '@class:paladin >= 12 AND !@mercy:stunned'
  },
}

export default MercyDatabase;
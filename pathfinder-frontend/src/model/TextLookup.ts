interface ITextLookup {
  get(code: string): string;
}

class EnglishTextLookup implements ITextLookup {

  private static abilityNames: {[code:string]:string} = {
    'PROFICIENCY:SIMPLE': 'Simple Weapons',
    'PROFICIENCY:MARTIAL': 'Martial Weapons',
    'PROFICIENCY:LIGHT_ARMOR': 'Light Armor',
    'PROFICIENCY:MEDIUM_ARMOR': 'Medium Armor',
    'PROFICIENCY:HEAVY_ARMOR': 'Heavy Armor',
    'FEAT:SIMPLE_WEAPON_PROFICIENCY': 'Simple Weapon Proficiency',
    'FEAT:MARTIAL_WEAPON_PROFICIENCY': 'Martial Weapon Proficiency',
  }

  private static values: {[code:string]:string} = {
    'ABILITY_STR_NAME_SHORT': 'STR',
    'ABILITY_STR_NAME_LONG': 'Strength',
    'ABILITY_CON_NAME_SHORT': 'CON',
    'ABILITY_CON_NAME_LONG': 'Constitution',
    'ABILITY_DEX_NAME_SHORT': 'DEX',
    'ABILITY_DEX_NAME_LONG': 'Dexterity',
    'ABILITY_WIS_NAME_SHORT': 'WIS',
    'ABILITY_WIS_NAME_LONG': 'Wisdom',
    'ABILITY_INT_NAME_SHORT': 'INT',
    'ABILITY_INT_NAME_LONG': 'Intelligence',
    'ABILITY_CHA_NAME_SHORT': 'CHA',
    'ABILITY_CHA_NAME_LONG': 'Charisma',
    'CLASS_BARBARIAN_NAME': 'Barbarian',
    'CLASS_PALADIN_NAME': 'Paladin',
    'CLASS_ROGUE_NAME': 'Rogue',
    'RACE_HUMAN_NAME': 'Human',
    'RACE_DWARF_NAME': 'Dwarf',
    'FEAT_LABEL': 'Feat',
    'HUMAN_BONUS_FEAT_LABEL': 'Bonus Feat (Human)',
    'FIGHTER_BONUS_FEAT_LABEL': 'Bonus Feat (Fighter)',
    'RAGEPOWER_LABEL': 'Rage Power',
    'ROGUETALENT_LABEL': 'Rogue Talent',
    'MERCY_LABEL': 'Mercy',
    ...EnglishTextLookup.abilityNames
  };

  get(code: string): string {
    return EnglishTextLookup.values[code.toUpperCase()]
        ?? `#!${code.toUpperCase()}#`;
  }
}

let activeLookup = new EnglishTextLookup();

const TextLookup = {
  get(code: string): string {
    return activeLookup.get(code);
  }
}

export default TextLookup;
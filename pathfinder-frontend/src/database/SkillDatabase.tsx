import Skill from "../model/character/Skill";

const SkillDatabase = {

  all: [
      new Skill('skill:acrobatics', 'Acrobatics', true, true, 'dex'),
      new Skill('skill:appraise', 'Appraise', true, false, 'int'),
      new Skill('skill:bluff', 'Bluff', true, false, 'cha'),
      new Skill('skill:climb', 'Climb', true, true, 'str'),
      new Skill('skill:craft', 'Craft', true, false, 'int'),
      new Skill('skill:diplomacy', 'Diplomacy', true, false, 'cha'),
      new Skill('skill:disable_device', 'Disable Device', false, true, 'dex'),
      new Skill('skill:disguise', 'Disguise', true, false, 'cha'),
      new Skill('skill:escape_artist', 'Escape Artist', true, true, 'dex'),
      new Skill('skill:fly', 'Fly', true, true, 'dex'),
      new Skill('skill:handle_animal', 'Handle Animal', false, false, 'cha'),
      new Skill('skill:heal', 'Heal', true, false, 'wis'),
      new Skill('skill:intimidate', 'Intimidate', true, false, 'cha'),
      new Skill('skill:knowledge_arcana', 'Knowledge (arcana)', false, false, 'int'),
      new Skill('skill:knowledge_dungeoneering', 'Knowledge (dungeoneering)', false, false, 'int'),
      new Skill('skill:knowledge_engineering', 'Knowledge (engineering)', false, false, 'int'),
      new Skill('skill:knowledge_geography', 'Knowledge (geography)', false, false, 'int'),
      new Skill('skill:knowledge_history', 'Knowledge (history)', false, false, 'int'),
      new Skill('skill:knowledge_local', 'Knowledge (local)', false, false, 'int'),
      new Skill('skill:knowledge_nature', 'Knowledge (nature)', false, false, 'int'),
      new Skill('skill:knowledge_nobility', 'Knowledge (nobility)', false, false, 'int'),
      new Skill('skill:knowledge_planes', 'Knowledge (planes)', false, false, 'int'),
      new Skill('skill:knowledge_religion', 'Knowledge (religion)', false, false, 'int'),
      new Skill('skill:linguistics', 'Linguistics', false, false, 'int'),
      new Skill('skill:perception', 'Perception', true, false, 'wis'),
      new Skill('skill:perform', 'Perform', true, false, 'cha'),
      new Skill('skill:profession', 'Profession', false, false, 'wis'),
      new Skill('skill:ride', 'Ride', true, true, 'dex'),
      new Skill('skill:sense_motive', 'Sense Motive', true, false, 'wis'),
      new Skill('skill:sleight_of_hand', 'Sleight of Hand', false, true, 'dex'),
      new Skill('skill:spellcraft', 'Spellcraft', false, false, 'int'),
      new Skill('skill:stealth', 'Stealth', true, true, 'dex'),
      new Skill('skill:survival', 'Survival', true, false, 'wis'),
      new Skill('skill:swim', 'Swim', true, true, 'str'),
      new Skill('skill:use_magic_device', 'Use Magic Device', false, false, 'cha'),
  ],

    find: (id: string): Skill|undefined => {
      const [ baseId, optionId ] = id.split('#');
      const skill = SkillDatabase.all.find(skill => skill.id === baseId);
      if (!skill) {
          return undefined;
      }
      if (!optionId) {
          return skill;
      }

      return new Skill(id, `${skill.name} (${optionId})`, skill.untrained, skill.armorCheckPenalty, skill.keyAbility);
    }
}

export default SkillDatabase;

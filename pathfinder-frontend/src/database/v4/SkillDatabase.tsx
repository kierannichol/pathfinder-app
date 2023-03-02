import {ChoiceTree} from "../../core/Choice";
import Description from "../../core/Description";
import Effect from "../../core/Effect";
import Resolvable from "../../logic/Resolvable";
import Skill from "../../model/character/Skill";
import {Entity} from "../../v4/Entity";
import EntityDatabase from "../../v4/EntityDatabase";
import Skills from "../Skills";

function skillToEntity(skill: Skill): Entity {
  return new Entity(skill.id, skill.name, Resolvable.True, ['skill'], Description.empty(),
      [Effect.addNumber(skill.id, 1)],
      ChoiceTree.None);
}

const SkillDatabase = new EntityDatabase(
    "skill",
    Skills.all.map(skill => skillToEntity(skill)),
    async id => {
      let skill = Skills.find(id);
      if (skill === undefined) {
        return undefined;
      }
      return skillToEntity(skill);
    });

export default SkillDatabase;
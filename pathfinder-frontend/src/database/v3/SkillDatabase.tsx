import Effect from "../../v3/model/Effect";
import {Modification, ModificationSummary} from "../../v3/model/Modification";
import ModificationDatabase from "../../v3/model/ModificationDatabase";
import Skills from "../Skills";

const SkillDatabase = new ModificationDatabase("skill", Skills.all.map(skill =>
        new ModificationSummary(skill.id, skill.name, 0, "", [])),
    [],
    async id => {
      const skill = Skills.find(id);
      if (!skill) {
        return undefined;
      }
      return new Modification(skill.id, skill.name, 0, "", [], "", "", "", "", "", [
        Effect.adjustState(0, id, 1)
      ])
    });

export default SkillDatabase;
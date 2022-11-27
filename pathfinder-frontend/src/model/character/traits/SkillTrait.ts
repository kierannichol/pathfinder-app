import Trait from "../Trait";
import AdditiveTrait from "./AdditiveTrail";

function SkillTrait(skillId: string, level: number): Trait {
  return new AdditiveTrait(skillId, 1, level)
}

export default SkillTrait;
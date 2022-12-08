import Trait from "../Trait";
import BooleanTrait from "./BooleanTrait";

function TrainedSkillTrait(skillId: string, level: number): Trait {
  return BooleanTrait.of("trained:" + skillId, true, level)
}

export default TrainedSkillTrait;
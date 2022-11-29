import Trait from "../Trait";
import CustomTrait from "./CustomTrait";

function TrainedSkillTrait(skillId: string, level: number): Trait {
  return CustomTrait.of(skillId + ":trained", 1, level)
}

export default TrainedSkillTrait;
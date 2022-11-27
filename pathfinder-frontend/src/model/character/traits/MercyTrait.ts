import Trait from "../Trait";
import CustomTrait from "./CustomTrait";

function MercyTrait(mercyId: string, classId: string, level: number): Trait {
  return CustomTrait.of(mercyId, 1, level)
}

export default MercyTrait;
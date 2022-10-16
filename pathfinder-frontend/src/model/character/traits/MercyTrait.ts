import CustomTrait from "./CustomTrait";
import Trait from "../Trait";
import CompositeTrait from "./CompositeTrait";

function MercyTrait(mercyId: string, classId: string, level: number): Trait {
  return CompositeTrait.combine(
      CustomTrait.of(`ability:${classId}:mercy`, 1, level),
      CustomTrait.of(`mercy:${mercyId}`, 1, level)
  );
}

export default MercyTrait;
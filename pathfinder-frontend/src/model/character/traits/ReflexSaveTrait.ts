import Trait from "../Trait";
import LevelSpecificTrait from "./LevelSpecificTrait";
import CompositeTrait from "./CompositeTrait";
import CustomTrait from "./CustomTrait";

export default function ReflexSaveTrait(...valuePerLevel: number[]): Trait {
  return CompositeTrait.combine(
      LevelSpecificTrait.of(1, 'reflex_base', valuePerLevel),
      CustomTrait.of('reflex_save', '{@reflex_base + @dex_mod}', 1));
}
import Trait from "../Trait";
import LevelSpecificTrait from "./LevelSpecificTrait";
import CompositeTrait from "./CompositeTrait";
import CustomTrait from "./CustomTrait";

export default function FortSaveTrait(...valuePerLevel: number[]): Trait {
  return CompositeTrait.combine(
      LevelSpecificTrait.of(1, 'fort_base', valuePerLevel),
      CustomTrait.of('fort_save', '{@fort_base + @con_mod}'));
}
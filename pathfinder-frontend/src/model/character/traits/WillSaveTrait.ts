import Trait from "../Trait";
import LevelSpecificTrait from "./LevelSpecificTrait";
import CompositeTrait from "./CompositeTrait";
import CustomTrait from "./CustomTrait";

export default function WillSaveTrait(...valuePerLevel: number[]): Trait {
  return CompositeTrait.combine(
      LevelSpecificTrait.of(1, 'will_base', valuePerLevel),
      CustomTrait.of('will_save', '{@will_base + @wis_mod}'));
}
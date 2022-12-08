import Trait from "../Trait";
import BooleanTrait from "./BooleanTrait";

export default function SpellKnownTrait(spellId: string, level: number): Trait {
  return BooleanTrait.of(spellId, true, level);
}
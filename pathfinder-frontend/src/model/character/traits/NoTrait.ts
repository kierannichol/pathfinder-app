import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

class NoTraitClass implements Trait {
  applyTo(level: number, state: DataContextState): void {
  }
}

const NoTrait: Trait = new NoTraitClass();
export default NoTrait;
import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

class PartialBabTrait implements Trait {

  applyTo(level: number, state: DataContextState): void {
    state['bab'] = this.calculateBab(level);
  }

  private calculateBab(level: number): number {
    return Math.floor((level * 3) / 4);
  }
}

const PartialBab = new PartialBabTrait();

export default PartialBab;
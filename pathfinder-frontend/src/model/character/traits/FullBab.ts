import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

class FullBabTrait implements Trait {

  applyTo(level: number, state: DataContextState): void {
    state['bab'] = level;
  }

}

const FullBab = new FullBabTrait();

export default FullBab;
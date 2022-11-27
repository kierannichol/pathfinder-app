import {DataContextState} from "../../../logic/DataContext";
import Trait from "../Trait";

export default class RacialAsiTrait implements Trait {

  constructor(private readonly attribute: string, private readonly amount: number) {
  }

  applyTo(level: number, state: DataContextState): void {
    state[this.attribute + ':race_asi'] = this.amount;
  }

}
import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class RacialAsiTrait implements Trait {

  constructor(private readonly attribute: string, private readonly amount: number) {
  }

  applyTo(level: number, state: DataContextState): void {
    state[this.attribute + '_race_asi'] = this.amount;
  }

}
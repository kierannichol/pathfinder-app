import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class AdditiveTrait implements Trait {

  public constructor(private readonly key: string, private readonly value: number, private readonly minLevel: number = 0) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level < this.minLevel) {
      return;
    }

    const existing = state[this.key];
    if (existing === undefined) {
      state[this.key] = this.value;
      return;
    }
    if (typeof existing !== 'number') {
      throw Error("Additive Trail not set to a number value: " + existing);
    }
    state[this.key] = existing + this.value;
  }

}
import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class CustomTrait implements Trait {

  static of(key: string, value: string|number|boolean, minLevel: number = 0) {
    return new CustomTrait(key, value, minLevel);
  }

  private constructor(private readonly key: string, private readonly value: string|number|boolean, private readonly minLevel: number = 0) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level < this.minLevel) {
      return;
    }
    state[this.key] = this.value;
  }

}
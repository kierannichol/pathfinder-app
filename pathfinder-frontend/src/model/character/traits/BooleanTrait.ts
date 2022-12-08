import {DataContextState} from "../../../logic/DataContext";
import Trait from "../Trait";

export default class BooleanTrait implements Trait {

  static of(key: string, value: boolean, level: number = 1) {
    return new BooleanTrait(key, value, level);
  }

  protected constructor(private readonly key: string, private readonly value: boolean, private readonly level: number) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level < this.level || !this.value) {
      return;
    }
    state[this.key] = 1;
  }

}
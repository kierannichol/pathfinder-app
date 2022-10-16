import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class CalculatedTrait implements Trait {

  static of(level: number, key: string, formula: (level: number) => number): CalculatedTrait {
    return new CalculatedTrait(level, key, formula);
  }

  private constructor(
      private readonly level: number,
      private readonly key: string,
      private readonly formula: (level:number) => number) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level < this.level) {
      return;
    }
    state[this.key] = this.formula(level);
  }

}
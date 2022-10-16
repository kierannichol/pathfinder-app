import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class LevelSpecificTrait implements Trait {

  static of(level: number, key: string, valuePerLevel: number[]): LevelSpecificTrait {
    return new LevelSpecificTrait(level, key, valuePerLevel);
  }

  private constructor(
      private readonly level: number,
      private readonly key: string,
      private readonly valuePerLevel: number[]) {
  }

  applyTo(level: number, state: DataContextState): void {
    if (level < this.level) {
      return;
    }
    state[this.key] = this.valuePerLevel[level - 1];
  }

}
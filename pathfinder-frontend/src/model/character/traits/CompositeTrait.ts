import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class CompositeTrait implements Trait {

  static combine(...traits: Trait[]) {
    return new CompositeTrait(traits);
  }

  private constructor(private readonly traits: Trait[]) {
  }

  applyTo(level: number, state: DataContextState): void {
    this.traits.forEach(trait => trait.applyTo(level, state));
  }

}
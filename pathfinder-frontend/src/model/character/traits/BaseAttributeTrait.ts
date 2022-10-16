import Trait from "../Trait";
import {DataContextState} from "../../../logic/DataContext";

export default class BaseAttributeTrait implements Trait {

  constructor(private readonly attribute: string, private readonly value: number) {
  }

  applyTo(level: number, state: DataContextState): void {
    state[this.attribute] = this.value;
  }

}
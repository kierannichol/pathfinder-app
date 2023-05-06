import {DataContextState} from "@kierannichol/formula-js";

export default interface Trait {

  applyTo(level: number, state: DataContextState): void;
}
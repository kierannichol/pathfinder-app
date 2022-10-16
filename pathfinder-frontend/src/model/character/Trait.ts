import {DataContextState} from "../../logic/DataContext";

export default interface Trait {

  applyTo(level: number, state: DataContextState): void;
}
import {DataContext, DataContextState} from "../../logic/DataContext";
import Resolvable from "../../logic/Resolvable";
import {ResolvedValue} from "../../logic/ResolvedValue";

export type CharacterState = DataContextState;

export class CharacterStateMutator {
  public readonly state: CharacterState;

  constructor(state: CharacterState) {
    this.state = { ...state };
  }

  public set(key: string, value: string|number|boolean|Resolvable): this {
    this.state[key] = value;
    return this;
  }

  public get(key: string): ResolvedValue {
    return DataContext.of(this.state).get(key) ?? ResolvedValue.none();
  }
}
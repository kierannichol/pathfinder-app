import {DataContext, MutableDataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import {DataContextState} from "@kierannichol/formula-js";

export type CharacterState = DataContextState;

export class CharacterStateMutator extends DataContext implements MutableDataContext {
  public readonly state: CharacterState;

  constructor(state: CharacterState) {
    super();
    this.state = {...state};
  }

  resolve(key: string): ResolvedValue | undefined {
    return this.get(key)?.resolve(this);
  }

  public set(key: string, value: string|number|boolean|Resolvable): this {
    this.state[key] = value;
    return this;
  }

  public get(key: string): Resolvable|undefined {
    return DataContext.of(this.state).get(key);
  }

  public remove(key: string): this {
    delete this.state[key];
    return this;
  }

  rename(key: string, to: string): void {
    if (key in this.state) {
      this.state[to] = this.state[key];
      delete this.state[key];
    }
  }

  public has(key: string): boolean {
    return key in this.state;
  }

  keys(): string[] {
    return Object.keys(this.state);
  }
}
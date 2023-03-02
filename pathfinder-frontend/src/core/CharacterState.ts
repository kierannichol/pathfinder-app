import {DataContext, DataContextState, MutableDataContext} from "../logic/DataContext";
import Resolvable from "../logic/Resolvable";
import ResolvedValue from "../logic/ResolvedValue";
import ResolvedValueWithId from "../logic/ResolvedValueWithId";

export type CharacterState = DataContextState;

export class CharacterStateMutator implements MutableDataContext {
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

  find(pattern: string): ResolvedValue[] {
    const regex = new RegExp(this.escapeRegExp(pattern).replaceAll(/\\\*/g, ".*?"));
    return this.keys()
    .filter((key: string) => regex.test(key))
    .map(key => {
      const value = this.get(key);
      if (value === undefined) {
        return undefined;
      }
      return new ResolvedValueWithId(key, value);
    })
    .filter(value => value !== undefined)
    .map(value => value as ResolvedValueWithId);
  }

  private escapeRegExp(expression: string) {
    return expression.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  keys(): string[] {
    return Object.keys(this.state);
  }
}
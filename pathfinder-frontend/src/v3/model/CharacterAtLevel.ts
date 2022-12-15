import {DataContext} from "../../logic/DataContext";
import Expression from "../../logic/Expression";
import Resolvable from "../../logic/Resolvable";
import {ResolvedValue} from "../../logic/ResolvedValue";
import ResolvedValueWithId from "../../logic/ResolvedValueWithId";
import {CharacterState} from "./CharacterState";

export default class CharacterAtLevel implements DataContext {

  constructor(public readonly level: number, private readonly state: CharacterState) {
  }

  public modify(modifyFn: (state: CharacterState) => void): CharacterAtLevel {
    const copy = { ...this.state }
    modifyFn(copy);
    return new CharacterAtLevel(this.level, copy);
  }

  public get(key: string): ResolvedValue {
    let result: string|number|boolean|Resolvable|Expression|undefined = this.state[key];
    if (typeof result === 'string') {
      return Expression.parse(result).resolve(this) ?? ResolvedValue.none();
    }
    if (result instanceof Resolvable) {
      return result.resolve(this) ?? ResolvedValue.none();
    }
    return ResolvedValue.of(result);
  }

  public has(key: string): boolean {
    return key in this.state;
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  find(pattern: string): ResolvedValueWithId[] {
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

  intersection(otherLevel: CharacterAtLevel): CharacterAtLevel {
    const intersectedState = { ...this.state };
    for (const key of otherLevel.keys()) {
      const newer = this.get(key)?.asNumber() ?? 0;
      const older = otherLevel.get(key)?.asNumber() ?? 0;
      if (newer - older > 0) {
        continue;
      }
      delete intersectedState[key];
    }
    return new CharacterAtLevel(this.level, intersectedState);
  }

  without(key: string): CharacterAtLevel {
    const modifiedState = { ...this.state };
    delete modifiedState[key];
    return new CharacterAtLevel(this.level, modifiedState);
  }

  private escapeRegExp(expression: string) {
    return expression.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  resolve(expression: string): ResolvedValue|undefined {
    return Expression.parse(expression).resolve(this);
  }
}
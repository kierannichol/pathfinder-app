import {DataContext, DataContextState} from "../../logic/DataContext";
import Expression from "../../logic/Expression";
import Resolvable from "../../logic/Resolvable";
import {ResolvedValue} from "../../logic/ResolvedValue";
import ResolvedValueWithId from "../../logic/ResolvedValueWithId";

export class CharacterAtLevel implements DataContext {

  constructor(private readonly level: number, private readonly state: DataContextState) {
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

  public has(key: string): boolean {
    return key in this.state;
  }

  get(key: string): ResolvedValue | undefined {
    let result: string|number|boolean|Resolvable|Expression|undefined = this.state[key];
    if (typeof result === 'string') {
      return Expression.parse(result)
      .resolve(this);
    }
    if (result instanceof Resolvable) {
      return result.resolve(this);
    }
    return ResolvedValue.of(result);
  }

  resolve(expression: string|Expression): ResolvedValue | undefined {
    if (!(expression instanceof Expression)) {
      expression = Expression.parse(expression);
    }
    return expression.resolve(this);
  }

  features(type: string): string[] {
    return this.find(`${type}:*`)
      .map(feature => feature.id);
  }

  keys(): string[] {
    return Object.keys(this.state);
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
}
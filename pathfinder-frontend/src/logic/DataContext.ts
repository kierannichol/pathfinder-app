import Resolvable from "./Resolvable";
import {ResolvedValue} from "./ResolvedValue";

export type DataContextState = { [key:string]:string|number|boolean|Resolvable; };

export interface DataContext {
  get(key: string): ResolvedValue|undefined;
  find(pattern: string): ResolvedValue[];
  keys(): string[];
}

export interface ImmutableDataContext extends DataContext {
  replace(key: string, value: string|number|boolean): ImmutableDataContext;
}

export interface MutableDataContext extends DataContext {
  set(key: string, value: string|number|boolean): void;
}

class EmptyDataContext implements DataContext {

  get(key: string): undefined {
    return undefined;
  }

  keys(): string[] {
    return [];
  }

  find(pattern: string): ResolvedValue[] {
    return [];
  }

}

export class DataContext {
  public static Empty: DataContext = new EmptyDataContext();

  static of(state: { [key:string]:string|number|boolean|Resolvable; }): MutableDataContext {
    return new StaticDataContext(state);
  }
}

class StaticDataContext implements MutableDataContext {
  constructor(private readonly state: { [key:string]:string|number|boolean|Resolvable; }) {
  }

  get(key: string): ResolvedValue|undefined {
    const result: string|number|boolean|Resolvable|undefined = this.state[key];
    if (result instanceof Resolvable) {
      return result.resolve(this);
    }
    return ResolvedValue.of(result);
  }

  set(key: string, value: string|number): void {
    this.state[key] = value;
    // const existing = this.state[key];
    // if (existing === undefined || existing instanceof Resolvable) {
    //   this.state[key] = value;
    // } else {
    //   existing.setValue(value);
    // }
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  find(pattern: string): ResolvedValue[] {
    const regex = new RegExp(this.escapeRegExp(pattern).replaceAll(/\\\*/g, ".*?"));
    return this.keys()
        .filter((key: string) => regex.test(key))
        .map(key => this.get(key))
        .filter(value => value !== undefined)
        .map(value => value as ResolvedValue);
  }

  private escapeRegExp(expression: string) {
    return expression.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

export class StaticImmutableDataContext implements ImmutableDataContext {
  constructor(private readonly state: { [key:string]:string|number|boolean|Resolvable; }) {
  }

  get(key: string): ResolvedValue|undefined {
    const result: string|number|boolean|Resolvable|undefined = this.state[key];
    if (result instanceof Resolvable) {
      return result.resolve(this);
    }
    return ResolvedValue.of(result);
  }

  replace(key: string, value: string|number): ImmutableDataContext {
    return new StaticImmutableDataContext({
      ...this.state,
      [key]: value
    });
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  find(pattern: string): ResolvedValue[] {
    const regex = new RegExp(pattern.replaceAll(/\\\*/, ".*?"));
    return this.keys()
        .filter((key: string) => regex.test(key))
        .map(key => this.get(key))
        .filter(value => value !== undefined)
        .map(value => value as ResolvedValue);
  }
}
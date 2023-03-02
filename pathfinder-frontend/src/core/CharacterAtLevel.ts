import {DataContext} from "../logic/DataContext";
import Expression from "../logic/Expression";
import Resolvable from "../logic/Resolvable";
import ResolvedValue from "../logic/ResolvedValue";
import ResolvedValueWithId from "../logic/ResolvedValueWithId";
import {CharacterState} from "./CharacterState";
import {ChoiceNode} from "./Choice";

export default class CharacterAtLevel implements DataContext {

  constructor(public readonly level: number,
              private readonly state: CharacterState,
              public readonly choices: ChoiceNode[]) {
  }

  public choice(key: string): ChoiceNode|undefined {
    return this.choices
      .find(choice => choice.key === key);
  }

  public choicesOfType(type: string): ChoiceNode[] {
    return this.choices
        .filter(choice => choice.type === type);
  }
  public modify(modifyFn: (state: CharacterState) => void): CharacterAtLevel {
    const copy = { ...this.state }
    modifyFn(copy);
    return new CharacterAtLevel(this.level, copy, this.choices);
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

    // const intersectedChoices = this.choices
    //   .filter(choice => !otherLevel.choices.find(otherChoice => choice.id === otherChoice.id));

    const otherLevelChoiceKeys = new Set(otherLevel.choices.map(choice => choice.key));
    const intersectedChoices: ChoiceNode[] = this.choices.filter(choice => {
      return !otherLevelChoiceKeys.has(choice.key);
    });

    return new CharacterAtLevel(this.level, intersectedState, intersectedChoices);
  }

  without(key: string): CharacterAtLevel {
    const modifiedState = { ...this.state };
    delete modifiedState[key];
    return new CharacterAtLevel(this.level, modifiedState, this.choices);
  }

  private escapeRegExp(expression: string) {
    return expression.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  resolve(expression: string): ResolvedValue|undefined {
    return Expression.parse(expression).resolve(this);
  }
}
import {BaseDataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import Expression from "../logic/Expression";
import {CharacterState} from "./CharacterState";
import {ChoiceNode} from "./Choice";

export default class CharacterAtLevel extends BaseDataContext {

  constructor(public readonly level: number,
              private readonly state: CharacterState,
              public readonly choices: ChoiceNode[]) {
    super();
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

  public get(key: string): Resolvable|undefined {
    if (key.includes('{')) {
      return Expression.parse(key);
    }

    let result: string|number|boolean|Resolvable|ResolvedValue|Expression|undefined = this.state[key];
    if (result === undefined) {
      return Resolvable.None;
    }
    if (typeof result === 'string') {
      if (result.includes('{')) {
        return Expression.parse(result);
      }
    }
    if (result instanceof Resolvable) {
      return result;
    }
    return Resolvable.just(result);
  }

  public has(key: string): boolean {
    return key in this.state;
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  intersection(otherLevel: CharacterAtLevel): CharacterAtLevel {
    const intersectedState = { ...this.state };
    for (const key of otherLevel.keys()) {
      const newer = this.resolve(key)?.asNumber() ?? 0;
      const older = otherLevel.resolve(key)?.asNumber() ?? 0;
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
}
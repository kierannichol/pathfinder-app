import {BaseDataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import {CharacterState} from "../core/CharacterState";
import Expression from "../logic/Expression";
import Character from "./Character";
import ChoiceRef from "./ChoiceRef";
import Feature from "./Feature";

export default class CharacterAtLevel extends BaseDataContext {

  constructor(public readonly level: number,
              private readonly character: Character,
              private readonly features: Feature[] = [],
              private readonly state: CharacterState = {},
              public readonly choices: ChoiceRef[] = []) {
    super();
    this.state['character_level'] = level;
  }

  selected(choice: ChoiceRef|string): string {
    if (choice instanceof ChoiceRef) {
      choice = choice.path;
    }
    return this.character.selected(choice) ?? '';
  }

  public choice(id: string): ChoiceRef|undefined {
    return this.choices
      .find(choice => choice.path === id);
  }

  public choicesOfType(type: string): ChoiceRef[] {
    return this.choices
        .filter(choice => choice.type === type);
  }

  public modify(modifyFn: (state: CharacterState) => void): CharacterAtLevel {
    const copy = { ...this.state }
    modifyFn(copy);
    return new CharacterAtLevel(this.level, this.character, this.features, copy, this.choices);
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

    const intersectedFeatures: Feature[] = this.features.filter(feature => {
      return intersectedState[feature.id] !== undefined;
    })

    const otherLevelChoiceIds = new Set(otherLevel.choices.map(choice => choice.path));
    const intersectedChoices: ChoiceRef[] = this.choices.filter(choice => {
      return !otherLevelChoiceIds.has(choice.path);
    });

    return new CharacterAtLevel(this.level, this.character, intersectedFeatures, intersectedState, intersectedChoices);
  }

  without(key: string): CharacterAtLevel {
    const modifiedState = { ...this.state };
    delete modifiedState[key];
    return new CharacterAtLevel(this.level, this.character, this.features, modifiedState, this.choices);
  }
}
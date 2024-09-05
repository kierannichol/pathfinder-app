import {BaseDataContext, DataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import Character from "./Character.ts";
import Expression from "../../utils/logic/Expression.ts";
import {ChoiceRef} from "./Choice.ts";
import {Feature} from "./Feature.ts";
import {EntityState} from "./Entity.ts";
import {array} from "@/app/pfutils.ts";

export default class CharacterAtLevel extends BaseDataContext {

  constructor(public readonly level: number,
              private readonly character: Character,
              public readonly features: Feature[] = [],
              private readonly state: EntityState = {},
              public readonly choices: ChoiceRef[] = []) {
    super();
  }

  selected(choice: ChoiceRef|string, index?: number): string|string[] {
    if (!(typeof choice === 'string')) {
      choice = choice.path;
    }
    const value = this.character.selected(choice) ?? '';
    if (index === undefined) {
      return value ?? '';
    }
    return (array(value)[index] as string) ?? '';
  }

  hasSelection(choice: ChoiceRef|string): boolean {
    return this.selected(choice) !== '';
  }

  public choice(id: string): ChoiceRef|undefined {
    return this.choices
      .find(choice => choice.path === id);
  }

  public choicesOfType(type: string): ChoiceRef[] {
    return this.choices
        .filter(choice => choice.type === type);
  }

  public modify(modifyFn: (state: EntityState) => void): CharacterAtLevel {
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
    if (result === "") {
      return Resolvable.None;
    }
    return Resolvable.just(result);
  }

  public has(key: string): boolean {
    return key in this.state;
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  diff(otherLevel: CharacterAtLevel): CharacterAtLevel {
    const intersectedState = { ...this.state };
    for (const key of otherLevel.keys()) {
      try {
        const newer = this.resolve(key)?.asNumber() ?? 0;
        const older = otherLevel.resolve(key)?.asNumber() ?? 0;
        if (newer - older > 0) {
          continue;
        }
        delete intersectedState[key];
      } catch (ResolvableError) {}
    }

    const intersectedFeatures: Feature[] = this.features.filter(feature => {
      return intersectedState[feature.key] !== undefined;
    })

    const otherLevelChoiceIds = new Set(otherLevel.choices.map(choice => choice.path));
    const intersectedChoices: ChoiceRef[] = this.choices.filter(choice => {
      return !otherLevelChoiceIds.has(choice.path);
    });

    return new CharacterAtLevel(this.level, this.character, intersectedFeatures, intersectedState, intersectedChoices);
  }

  without(key: string): CharacterAtLevel {
    const modifiedState = { ...this.state };
    const dataContext = DataContext.of(modifiedState);
    const resolved = dataContext.resolve(key);
    const numberValueOfKey = resolved?.asNumber() ?? 0;
    if (numberValueOfKey === 0 || numberValueOfKey === 1) {
      dataContext.remove(key);
    } else {
      dataContext.set(key, numberValueOfKey - 1);
    }
    return new CharacterAtLevel(this.level, this.character, this.features, modifiedState, this.choices);
  }

  withoutChoice(path: string): CharacterAtLevel {
    return this.character.atLevel(this.level, path);
  }
}
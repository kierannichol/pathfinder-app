import Character from "./Character.ts";
import {ResolvedFeature} from "./Feature.ts";
import {EntityState} from "./Entity.ts";
import {ChoiceRef} from "./Choice.ts";
import {BaseDataContext, DataContext, Resolvable, ResolvedValue} from "@kierannichol/formula-js";
import {array} from "@/app/pfutils.ts";
import {hasTag} from "@pathfinder-lib/utils/tags";
import {AttackModification} from "@/data/AttackModification.ts";
import {EquipmentSet} from "@/data/Equipment.ts";

export default class CharacterAtLevel extends BaseDataContext {

  constructor(public readonly level: number,
              private readonly character: Character,
              public readonly features: ResolvedFeature[] = [],
              private readonly state: EntityState = {},
              public readonly choices: ChoiceRef[] = []) {
    super();
  }

  selected(choice: ChoiceRef | string, index?: number): string | string[] {
    if (!(typeof choice === 'string')) {
      choice = choice.path;
    }
    const value = this.character.selected(choice) ?? '';
    if (index === undefined) {
      return value ?? '';
    }
    return (array(value)[index] as string) ?? '';
  }

  hasSelection(choice: ChoiceRef | string): boolean {
    return this.selected(choice) !== '';
  }

  public choice(id: string): ChoiceRef | undefined {
    return this.choices
    .find(choice => choice.path === id);
  }

  public choicesOfType(...tags: string[]): ChoiceRef[] {
    return this.choices
    .filter(choice => tags.some(tag => hasTag(choice.tags, tag)));
  }

  public attackMods(): AttackModification[] {
    return this.features
    .map(feature => feature.attackMod)
    .filter((mod): mod is AttackModification => mod !== undefined);
  }

  public modify(modifyFn: (state: EntityState) => void): CharacterAtLevel {
    const copy = {...this.state}
    modifyFn(copy);
    return new CharacterAtLevel(this.level, this.character, this.features, copy, this.choices);
  }

  public get(key: string): ResolvedValue | undefined {
    let result = this.state[key];

    if (Array.isArray(result)) {
      return ResolvedValue.of(result.map(element => this.resolveValue(element)));
    }
    return this.resolveValue(result);
  }

  private resolveValue(value: string | number | boolean | Resolvable): ResolvedValue {
    if (value instanceof Resolvable) {
      return value.resolve(this) ?? ResolvedValue.None;
    }
    return ResolvedValue.of(value);
  }

  public has(key: string): boolean {
    return key in this.state;
  }

  keys(): string[] {
    return Object.keys(this.state);
  }

  diff(otherLevel: CharacterAtLevel): CharacterAtLevel {
    const intersectedState = {...this.state};
    for (const key of otherLevel.keys()) {
      try {
        const newer = this.get(key)?.asNumber() ?? 0;
        const older = otherLevel.get(key)?.asNumber() ?? 0;
        if (newer - older > 0) {
          continue;
        }
        delete intersectedState[key];
      } catch (ResolvableError) {
      }
    }

    const intersectedFeatures: ResolvedFeature[] = this.features.filter(feature => {
      return intersectedState[feature.key] !== undefined;
    })

    const otherLevelChoiceIds = new Set(otherLevel.choices.map(choice => choice.path));
    const intersectedChoices: ChoiceRef[] = this.choices.filter(choice => {
      return !otherLevelChoiceIds.has(choice.path);
    });

    return new CharacterAtLevel(this.level, this.character, intersectedFeatures, intersectedState, intersectedChoices);
  }

  without(key: string): CharacterAtLevel {
    const modifiedState = {...this.state};
    const dataContext = DataContext.of(modifiedState);
    const resolved = dataContext.get(key);
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

  withEquipment(equipmentSet: EquipmentSet): CharacterAtLevel {
    const modifiedState = {...this.state};
    const dataContext = DataContext.of(modifiedState);

    for (let equipment of equipmentSet.equipment) {
      if (!equipment.included) continue;

      for (let effect of equipment.item.effects) {
        effect.applyToDataContext(dataContext);
      }
    }

    return new CharacterAtLevel(this.level, this.character, this.features, modifiedState, this.choices);
  }
}
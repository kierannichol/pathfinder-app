import {DataContext, Formula} from "@kierannichol/formula-js";
import Description from "../core/Description";
import {combinePath} from "./Entity";
import {FeatureResolvable} from "./FeatureResolvable";
import {ResolvedEntityContext} from "./ResolvedEntityContext";
import {FixedStack, RepeatingStack, Stack, Stacks} from "./Stack";

export default class Feature implements FeatureResolvable {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null,
              public readonly description: Description,
              public readonly stacks: Stacks) {
  }

  isEnabled(context: DataContext): boolean {
    if (this.maxStacks && (context.resolve(this.id)?.asNumber() ?? 0) > this.maxStacks) {
      return false;
    }
    return Formula.parse(this.enabledFormula).resolve(context)?.asBoolean() ?? false;
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const path = combinePath(basePath, this.id);
    return this.stacks.resolve(path, context);
  }
}

export class FeatureSummary {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null) {
  }

  isEnabled(context: DataContext): boolean {
    if (this.maxStacks && (context.resolve(this.id)?.asNumber() ?? 0) >= this.maxStacks) {
      return false;
    }
    if (this.enabledFormula === '') {
      return true;
    }
    return Formula.parse(this.enabledFormula).resolve(context)?.asBoolean() ?? false;
  }
}

export class FeatureBuilder {
  private _name: string = "";
  private _tags: Set<string> = new Set();
  private _enabledFormula: string = "";
  private _maxStacks: number|null|undefined = undefined;
  private _description: Description = Description.empty();
  private _fixedStack: Stack[] = [];
  private _repeatingStack: Stack|undefined = undefined;

  public constructor(public readonly id: string) {
  }

  name(name: string): FeatureBuilder {
    this._name = name;
    return this;
  }

  tag(...tags: string[]): FeatureBuilder {
    for (const tag of tags) {
      this._tags = this._tags.add(tag);
    }
    return this;
  }

  enabledFormula(formula: string): FeatureBuilder {
    this._enabledFormula = formula;
    return this;
  }

  description(description: string|Description): FeatureBuilder {
    this._description = description instanceof Description
        ? description
        : Description.of(description);
    return this;
  }

  addFixedStack(...stack: Stack[]): FeatureBuilder {
    this._repeatingStack = undefined;
    this._fixedStack.push(...stack);
    return this;
  }

  repeatingStack(stack: Stack): FeatureBuilder {
    this._repeatingStack = stack;
    this._fixedStack = [];
    return this;
  }

  maxStacks(num: number|null): FeatureBuilder {
    this._maxStacks = num;
    return this;
  }

  build(): Feature {
    let calcMaxStacks = this._maxStacks;
    if (calcMaxStacks === undefined) {
      calcMaxStacks = this.repeatingStack !== undefined
          ? null
          : this._fixedStack.length;
    }

    return new Feature(this.id,
        this._name,
        Array.from(this._tags),
        this._enabledFormula,
        calcMaxStacks,
        this._description,
        this._repeatingStack !== undefined
          ? new RepeatingStack(this._repeatingStack)
          : new FixedStack(this._fixedStack));
  }
}
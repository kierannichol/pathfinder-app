import {DataContext, Formula} from "@kierannichol/formula-js";
import Description from "./Description.ts";
import {combinePath} from "./Entity.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {FixedStack, RepeatingStack, Stack, Stacks} from "./Stack.ts";
import FeatureModification from "./FeatureModification.ts";

export default class Feature implements FeatureResolvable {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly label: string|undefined,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null,
              public readonly description: Description,
              public readonly stacks: Stacks,
              public readonly featureModifications: FeatureModification[]) {
  }

  isEnabled(context: DataContext): boolean {
    if (this.maxStacks && (context.resolve(this.id)?.asNumber() ?? 0) > this.maxStacks) {
      return false;
    }
    return Formula.parse(this.enabledFormula).resolve(context)?.asBoolean() ?? false;
  }

  hasTag(tag: string): boolean {
    return this.tags.includes(tag);
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const count = context.featureCount(this.id);
    const path = combinePath(basePath, this.id, count);

    await this.stacks.next(count).resolve(path, context);
    for (let featureModification of this.featureModifications) {
      await featureModification.resolve(path, context);
    }
  }
}

export class FeatureSummary {

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly label: string|undefined,
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

  hasTag(tag: string): boolean {
    return this.tags.includes(tag);
  }
}

export class FeatureBuilder {
  private _name: string = "";
  private _label: string|undefined = undefined;
  private _tags: Set<string> = new Set();
  private _enabledFormula: string = "";
  private _maxStacks: number|null|undefined = undefined;
  private _description: Description = Description.empty();
  private _fixedStack: Stack[] = [];
  private _repeatingStack: Stack|undefined = undefined;
  private _featureModifications: FeatureModification[] = [];

  public constructor(public readonly id: string) {
  }

  name(name: string): FeatureBuilder {
    this._name = name;
    return this;
  }

  label(label: string|undefined): FeatureBuilder {
    this._label = label;
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
        this._label,
        Array.from(this._tags),
        this._enabledFormula,
        calcMaxStacks,
        this._description,
        this._repeatingStack !== undefined
          ? new RepeatingStack(this._repeatingStack)
          : new FixedStack(this._fixedStack),
        this._featureModifications);
  }
}
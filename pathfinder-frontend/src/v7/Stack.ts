import {Choice} from "./Choice";
import ConditionalComponent from "./ConditionalComponent";
import {Effect} from "./Effect";
import {combinePath} from "./Entity";
import {FeatureResolvable} from "./FeatureResolvable";
import Link from "./Link";
import {ResolvedEntityContext} from "./ResolvedEntityContext";
import Unlink from "./Unlink";

export class Stack implements FeatureResolvable {
  static readonly Empty: Stack = new Stack([], [], [], [], []);

  constructor(public readonly effects: Effect[],
              public readonly links: Link[],
              public readonly unlinks: Unlink[],
              public readonly choices: Choice[],
              public readonly conditionalComponents: ConditionalComponent[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    for (let link of this.links) {
      await link.resolve(basePath, context);
    }
    for (let choice of this.choices) {
      await choice.resolve(basePath, context);
    }
  }

  isEmpty() {
    return (this.effects.length
        + this.unlinks.length
        + this.links.length
        + this.choices.length
        + this.conditionalComponents.length) === 0;
  }
}

export interface Stacks extends FeatureResolvable {

  next(count: number): Stack;
}

export class FixedStack implements Stacks {

  constructor(private readonly stacks: Stack[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await Promise.all(this.stacks.map((stack, i) => {
      const path = combinePath(basePath, i+1);
      return stack.resolve(path, context);
    }));
  }

  next(count: number): Stack {
    return this.stacks[count-1] ?? Stack.Empty;
  }

}

export class RepeatingStack implements Stacks {

  constructor(private readonly stack: Stack) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await this.stack.resolve(basePath, context);
  }

  next(count: number): Stack {
    return this.stack;
  }

}

export class StackBuilder {
  private _effects: Effect[] = [];
  private _links: Link[] = [];
  private _unlinks: Unlink[] = [];
  private _choices: Choice[] = [];
  private _conditionalComponents: ConditionalComponent[] = [];

  effect(...effects: Effect[]): StackBuilder {
    this._effects.push(...effects);
    return this;
  }

  link(featureId: string, conditionFormula: string|undefined = undefined): StackBuilder {
    this._links.push(new Link(featureId, conditionFormula));
    return this;
  }

  unlink(featureId: string, conditionFormula: string|undefined = undefined): StackBuilder {
    this._unlinks.push(new Unlink(featureId, conditionFormula));
    return this;
  }

  choice(...choices: Choice[]): StackBuilder {
    this._choices.push(...choices);
    return this;
  }

  conditionalComponent(...conditionalComponents: ConditionalComponent[]): StackBuilder {
    this._conditionalComponents.push(...conditionalComponents);
    return this;
  }

  build(): Stack {
    return new Stack(
        this._effects,
        this._links,
        this._unlinks,
        this._choices,
        this._conditionalComponents);
  }
}
import {Choice} from "./Choice.ts";
import ConditionalComponent from "./ConditionalComponent.ts";
import {Effect} from "./Effect.ts";
import {combinePath} from "./Entity.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import Link from "./Link.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import Unlink from "./Unlink.ts";

export class Stack implements FeatureResolvable {
  static readonly Empty: Stack = new Stack([], [], [], [], []);

  constructor(public readonly effects: Effect[],
              public readonly links: Link[],
              public readonly unlinks: Unlink[],
              public readonly choices: Choice[],
              public readonly conditionalComponents: ConditionalComponent[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await this.links.resolveAll(basePath, context);
    await this.choices.resolveAll(basePath, context);
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
    let i = 1;
    const promises: Promise<void>[] = [];
    for (const stack of this.stacks) {
      const path = combinePath(basePath, i++);
      promises.push(stack.resolve(path, context));
    }
    await Promise.all(promises);
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
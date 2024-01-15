import {Choice} from "./Choice.ts";
import ConditionalComponent from "./ConditionalComponent.ts";
import {Effect} from "./Effect.ts";
import {combinePath} from "./Entity.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import Link from "./Link.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import Unlink from "./Unlink.ts";
import StackModification from "./StackModification.ts";

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
    await this.conditionalComponents.resolveAll(basePath, context);
  }

  modify(modification: StackModification): Stack {
    let links = [
        ...this.links.filter(link =>
            !modification.linksToRemove.find(value => value === link.featureId)),
        ...this.toLinks(modification.linksToAdd)
    ];

    return new Stack(
        [ ...this.effects ],
        links,
        [ ...this.unlinks ],
        [ ...this.choices ],
        [ ...this.conditionalComponents ]
    );
  }

  copy(): Stack {
    return new Stack(
        [ ...this.effects ],
        [ ...this.links ],
        [ ...this.unlinks ],
        [ ...this.choices ],
        [ ...this.conditionalComponents ]
    );
  }

  isEmpty() {
    return (this.effects.length
        + this.unlinks.length
        + this.links.length
        + this.choices.length
        + this.conditionalComponents.length) === 0;
  }

  private toLinks(featureIds: string[]): Link[] {
    return featureIds.map(fid => new Link(fid));
  }

  private toUnlinks(featureIds: string[]): Unlink[] {
    return featureIds.map(fid => new Unlink(fid));
  }
}

export interface Stacks {

  next(count: number): Stack;
}

export class FixedStack implements Stacks {

  constructor(private readonly stacks: Stack[]) {
  }

  next(count: number): Stack {
    return this.stacks[count-1] ?? Stack.Empty;
  }

}

export class RepeatingStack implements Stacks {

  constructor(private readonly stack: Stack) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    const promises: Promise<void>[] = [];
    for (let i = 1; i <= 100; i++) {
      const path = combinePath(basePath, i++);
      promises.push(this.stack.resolve(path, context));
    }
    await Promise.all(promises);
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
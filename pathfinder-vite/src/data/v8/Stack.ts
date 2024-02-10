import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {EntityState} from "./Entity.ts";

export class Stack implements Trait {
  static readonly Empty: Stack = new Stack([]);

  constructor(private readonly traits: Trait[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedStack> {
    return new ResolvedStack(
        await Promise.all(this.traits.map(trait =>
            trait.resolve(basePath, context))));
  }
}

export class ResolvedStack implements ResolvedTrait {

  constructor(public readonly children: ResolvedTrait[]) {
  }

  applyTo(state: EntityState): void {
    this.children.forEach(child => child.applyTo(state));
  }

}
import {FeatureStack, ResolvedStack, Stack} from "./Stack.ts";
import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {ConditionalResolvedTrait} from "./ConditionalResolvedTrait.ts";
import {FeatureRef} from "./Feature.ts";

export interface Stacks extends Trait {

}

export class FixedStack implements Stacks {

  constructor(private readonly featureId: string,
              private readonly stacks: Stack[]) {
  }

  next(count: number): FeatureStack {
    return (this.stacks[count-1] ?? Stack.Empty).instance(this.featureId, count);
  }

  resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const count = context.count(this.featureId);
    return this.next(count).resolve(parent, context);
  }

}

export class RepeatingStack implements Stacks {

  constructor(private readonly featureId: string,
              private readonly stack: Stack) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const count = context.count(this.featureId);
    return this.stack
      .instance(this.featureId, count+1)
      .resolve(parent, context);
  }

}

export class ConditionalStack implements Stacks {

  constructor(private readonly featureId: string,
              private readonly whenFormula: string,
              private readonly stack: Stack) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const resolvedStack = await this.stack.instance(this.featureId, 1).resolve(parent, context);

    return new ResolvedStack(resolvedStack.featureId,
        resolvedStack.stackNumber,
        resolvedStack.children.map(child => new ConditionalResolvedTrait(this.whenFormula, child)));
  }

}
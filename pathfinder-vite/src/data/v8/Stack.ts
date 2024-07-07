import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";

export class Stack {
  static readonly Empty: Stack = new Stack([]);

  constructor(private readonly traits: Trait[]) {
  }

  instance(featureId: string, stackNumber: number): FeatureStack {
    return new FeatureStack(featureId,
        stackNumber,
        this.traits);
  }
}

export class FeatureStack implements Trait {
  constructor(
      private readonly featureId: string,
      private readonly stackNumber: number,
      private readonly traits: Trait[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedStack> {
    return new ResolvedStack(
        this.featureId,
        this.stackNumber,
        await Promise.all(this.traits.map(trait =>
            trait.resolve(basePath, context))));
  }
}

export class ResolvedStack implements ResolvedTrait {

  constructor(
      public readonly featureId: string,
      public readonly stackNumber: number,
      public readonly children: ResolvedTrait[]) {
  }

  applyTo(state: AppliedState): void {
    this.children.forEach(child => child.applyTo(state));

    const modifications = state.modifications(this.featureId, this.stackNumber);
  }
}
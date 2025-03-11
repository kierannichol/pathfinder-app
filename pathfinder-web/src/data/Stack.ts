import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {Feature, FeatureRef} from "./Feature.ts";
import {Link} from "./Link.ts";

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

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedStack> {
    const modifications = context.modifications(this.featureId, this.stackNumber);

    const resolvedTraits = await Promise.all([
        ...this.traits.filter(trait => !this.isForbidden(trait, context)),
        ...modifications.flatMap(modification => modification.linksToAdd)]
      .map(trait => trait.resolve(parent, context)));

    return new ResolvedStack(
        this.featureId,
        this.stackNumber,
        resolvedTraits);
  }

  private isForbidden(trait: Trait, context: ResolvedEntityContext): boolean {
    if (trait instanceof Link) {
      return context.forbidAddFeature(this.featureId, this.stackNumber, trait.key);
    }
    if (trait instanceof Feature) {
      return context.forbidAddFeature(this.featureId, this.stackNumber, trait.key);
    }
    return false;
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
  }
}
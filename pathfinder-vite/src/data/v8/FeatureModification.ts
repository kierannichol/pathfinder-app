import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {Link} from "./Link.ts";
import {FeatureRef} from "@/data/v8/Feature.ts";

export class FeatureModification implements Trait {

  constructor(private readonly targetFeatureId: string,
              public readonly stackModifications: StackModification[]) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    return new ResolvedFeatureModification(this.targetFeatureId,
        await Promise.all(this.stackModifications
          .filter(stackModification => stackModification.targetStackCount <= context.count(stackModification.targetFeatureId))
          .map(stackModification => stackModification.resolve(parent, context))));
  }

}

export class ResolvedFeatureModification implements ResolvedTrait {

  constructor(private readonly targetFeatureId: string,
              private readonly stackModifications: ResolvedStackModification[]) {
  }

  get children(): ResolvedTrait[] {
    return this.stackModifications;
  }

  applyTo(state: AppliedState): void {
    this.stackModifications.forEach(sm => sm.applyTo(state));
  }

}

export class StackModification implements Trait {

  constructor(public readonly targetFeatureId: string,
              public readonly targetStackCount: number,
              public readonly linksToAdd: Link[],
              public readonly linksToRemove: string[]) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedStackModification> {
    const stackRef = context.getStackRef(this.targetFeatureId, this.targetStackCount);
    return new ResolvedStackModification(
        this.targetFeatureId,
        this.targetStackCount,
        await Promise.all(this.linksToAdd.map(link => link.resolve(stackRef, context))),
        this.linksToRemove);
  }

}

export class ResolvedStackModification implements ResolvedTrait {

  constructor(public readonly targetFeatureId: string,
              public readonly targetStackCount: number,
              private readonly linksToAdd: ResolvedTrait[],
              private readonly linksToRemove: string[]) {
  }

  applyTo(state: AppliedState): void {
    state.registerModification(this);
  }

  applyModification(state: AppliedState): void {
    this.linksToAdd.forEach(linkToAdd => linkToAdd.applyTo(state));
    this.linksToRemove.forEach(linkToRemove => state.increment(linkToRemove, -1));
  }

  get children(): ResolvedTrait[] {
    return this.linksToAdd;
  }
}
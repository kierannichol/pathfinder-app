import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {Link} from "./Link.ts";

export class FeatureModification implements Trait {

  constructor(private readonly targetFeatureId: string,
              private readonly stackModifications: StackModification[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    return new ResolvedFeatureModification(this.targetFeatureId,
        await Promise.all(this.stackModifications.map(stackModification =>
            stackModification.resolve(basePath, context))));
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

  constructor(private readonly targetFeatureId: string,
              private readonly targetStackCount: number,
              private readonly linksToAdd: Link[],
              private readonly linksToRemove: string[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedStackModification> {
    return new ResolvedStackModification(
        this.targetFeatureId,
        this.targetStackCount,
        await Promise.all(this.linksToAdd.map(link => link.resolve(basePath, context))),
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
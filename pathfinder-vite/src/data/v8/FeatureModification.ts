import {EmptyResolvedTrait, ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Link} from "./Link.ts";
import {FeatureRef} from "@/data/v8/Feature.ts";

export class FeatureModification implements Trait {

  constructor(private readonly targetFeatureId: string,
              public readonly stackModifications: StackModification[]) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    let shouldRestart = false;
    for (let modification of this.stackModifications) {
      if (modification.register(parent, context)) {
        shouldRestart = true;
      }
    }
    if (shouldRestart) {
      context.restartResolve();
    }
    return EmptyResolvedTrait;
  }
}

export class StackModification implements Trait {

  constructor(public readonly targetFeatureId: string,
              public readonly targetStackCount: number,
              public readonly linksToAdd: Link[],
              public readonly linksToRemove: string[]) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    this.register(parent, context);
    context.restartResolve();
    return EmptyResolvedTrait;
  }

  register(parent: FeatureRef, context: ResolvedEntityContext): boolean {
    const key = parent.path + ">" + this.targetFeatureId + ">" + this.targetStackCount;
    return context.registerModification(key, this);
  }

  forbidAddFeature(featureToAddKey: string) {
    return this.linksToRemove.includes(featureToAddKey);
  }
}
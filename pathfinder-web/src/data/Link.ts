import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {FeatureRef} from "./Feature.ts";

export class Link implements Trait {

  constructor(public readonly key: string) {
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const feature = await context.feature(this.key);
    context.register(this.key);
    const resolved: ResolvedTrait|undefined = await feature?.resolve(parent, context);
    if (resolved === undefined) {
      throw new Error("Feature not found: " + this.key);
    }
    return resolved;
  }
}

import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";

export class Link implements Trait {

  constructor(private readonly key: string) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const feature = await context.feature(this.key);
    const resolved: ResolvedTrait|undefined = await feature?.resolve(basePath, context);
    if (resolved === undefined) {
      throw new Error("Feature not found: " + this.key);
    }
    context.register(this.key);
    return new ResolvedLink(resolved);
  }
}

export class ResolvedLink implements ResolvedTrait {

  constructor(private readonly feature: ResolvedTrait) {
  }

  get children(): ResolvedTrait[] {
    return [ this.feature ];
  }

  applyTo(state: AppliedState): void {
    this.feature.applyTo(state);
  }
}
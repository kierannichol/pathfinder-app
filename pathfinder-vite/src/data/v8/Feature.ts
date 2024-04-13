import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Path} from "../../utils/Path.ts";
import Description from "../Description.ts";
import AppliedState from "./AppliedState.ts";

export class Feature implements Trait {
  featureModifications: any;

  constructor(public readonly key: string,
              public readonly name: string,
              public readonly label: string|undefined,
              public readonly tags: string[],
              public readonly enabledFormula: string,
              public readonly maxStacks: number|null,
              public readonly description: Description,
              private readonly traits: Trait[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(basePath, this.key);
    const resolvedTraits = await Promise.all(
        this.traits.map(trait => trait.resolve(path, context)))
    return new ResolvedFeature(path, this, resolvedTraits);
  }
}

export class ResolvedFeature implements ResolvedTrait {

  constructor(private readonly path: string,
              public readonly origin: Feature,
              public readonly children: ResolvedTrait[]) {
  }

  applyTo(state: AppliedState): void {
    state.increment(this.origin.key);
    this.children.forEach(trait => trait.applyTo(state));
  }

}
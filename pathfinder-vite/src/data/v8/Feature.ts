import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {EntityState} from "./Entity.ts";
import {Path} from "../../utils/Path.ts";
import Description from "../Description.ts";
import {DataContext} from "@kierannichol/formula-js";

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

  applyTo(state: EntityState): void {
    const context = DataContext.of(state);
    context.set(this.origin.key, context.resolve(this.origin.key)?.asNumber() ?? + 1);
    this.children.forEach(trait => trait.applyTo(state));
  }

}
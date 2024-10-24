import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {Path} from "@/utils/Path.ts";
import Description from "../Description.ts";
import AppliedState from "./AppliedState.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import SourceModule from "@/data/v8/SourceModule.ts";

export class FeatureRef {
  constructor(public readonly path: string,
              public readonly type: string,
              public readonly name: string,
              public readonly parent: FeatureRef | undefined) {
  }
}

export class Feature extends FeatureSummary implements Trait {
  featureModifications: any;

  constructor(key: string,
              name: string,
              label: string|undefined,
              tags: string[],
              enabledFormula: string,
              maxStacks: number|null,
              public readonly description: Description,
              private readonly traits: Trait[]) {
    super(key, name, label, tags, enabledFormula, maxStacks);
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(parent.path, this.key);
    const ref = new FeatureRef(path, 'feature', this.name, parent);
    const resolvedTraits = await Promise.all(
        this.traits.map(trait => trait.resolve(ref, context)))
    return new ResolvedFeature(this, parent, resolvedTraits);
  }
}

export class ResolvedFeature implements ResolvedTrait {

  constructor(public readonly origin: Feature,
              public readonly parent: FeatureRef,
              public readonly children: ResolvedTrait[]) {
  }

  applyTo(state: AppliedState): void {
    state.increment(this.origin.key);
    this.children.forEach(trait => trait.applyTo(state));
  }

  get key(): string {
    return this.origin.key;
  }
  get name(): string {
    return this.origin.name;
  }
  get label(): string | undefined {
    return this.origin.label;
  }
  get tags(): string[] {
    return this.origin.tags;
  }

  get enabledFormula(): string {
    return this.origin.enabledFormula;
  }

  get maxStacks(): number | null {
    return this.origin.maxStacks;
  }

  get description(): Description {
    return this.origin.description;
  }

  get source(): SourceModule | undefined {
    return this.origin.source;
  }

  get featureModifications(): any {
    return this.origin.featureModifications;
  }

}
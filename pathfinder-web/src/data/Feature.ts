import {ResolvedTrait, Trait} from "./Trait.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import AppliedState from "./AppliedState.ts";
import {FeatureSummary} from "./FeatureSummary.ts";
import SourceModule from "./SourceModule.ts";
import {FeatureOptionsQuery} from "./FeatureOptionsQuery.ts";
import Database from "./Database.ts";
import Description from "@/data/Description.ts";
import {Path} from "@pathfinder-lib/utils/Path";
import Id from "@pathfinder-lib/utils/Id";
import {AttackModification} from "@/data/AttackModification.ts";
import {Attack} from "@/data/Attack.ts";

export class FeatureRef {
  constructor(public readonly path: string,
              public readonly type: string,
              public readonly name: string,
              public readonly level: number,
              public readonly parent: FeatureRef | undefined) {
  }

  ofType(type: string): FeatureRef|null {
    if (this.type === type) return this;
    return this.parent?.ofType(type) ?? null;
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
              optionsQuery: FeatureOptionsQuery|undefined,
              public readonly description: Description,
              public readonly traits: Trait[],
              public readonly attackMod: AttackModification|undefined,
              public readonly attacks: Attack[]) {
    super(key, name, label, tags, enabledFormula, maxStacks, optionsQuery);
  }

  async resolve(parent: FeatureRef, context: ResolvedEntityContext): Promise<ResolvedTrait> {
    const path = Path.combine(parent.path, this.key);
    const ref = new FeatureRef(path, 'feature', this.name, parent.level, parent);
    const resolvedTraits = await Promise.all(
        this.traits.map(trait => trait.resolve(ref, context)))
    return new ResolvedFeature(this,
        parent,
        this.attackMod,
        this.attacks,
        resolvedTraits);
  }

  option(optionKey: string, database: Database): Feature | undefined {
    if (this.optionsQuery === undefined) {
      return undefined;
    }
    const optionFeature = database.query([this.optionsQuery.tag])
      .find(option => Id.justKey(option.key) === optionKey);
    return optionFeature !== undefined
        ? this.createOptionFeature(optionFeature)
        : undefined
  }

  private createOptionFeature(optionFeature: FeatureSummary): Feature {
    const optionsQuery = this.optionsQuery;
    if (!optionsQuery) throw new Error("Feature has no options");
    const optionKey: string = Id.justKey(optionFeature.key) ?? '';
    const feature = new Feature(
        optionsQuery.idTemplate.replace(/\{option.key}/g, optionKey),
        this.name + ": " + optionFeature.name,
        optionFeature.label,
        this.tags,
        optionsQuery.prerequisitesTemplate.replace(/\{option.key}/g, optionKey),
        this.maxStacks,
        undefined,
        this.description,
        this.traits,
        this.attackMod,
        this.attacks);
    feature.source = this.source;
    return feature;
  }
}

export class ResolvedFeature implements ResolvedTrait {

  constructor(public readonly origin: Feature,
              public readonly parent: FeatureRef,
              public readonly attackMod: AttackModification|undefined,
              public readonly attacks: Attack[],
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
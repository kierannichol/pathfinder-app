import {EntityChoiceSelections} from "./Entity.ts";
import {Trait} from "./Trait.ts";
import {BaseDataContext, Resolvable} from "@kierannichol/formula-js";
import {FeatureRef} from "@/data/v8/Feature.ts";

export type FeatureLoader = (key: string) => Promise<Trait | undefined>;

export class ResolvedEntityContext extends BaseDataContext {
  private readonly cache: { [key: string]: Trait } = {};
  private readonly counts: { [key: string]: number } = {};
  private readonly stackRefs: { [key: string]: FeatureRef } = {};

  get(key: string): Resolvable | undefined {
    return Resolvable.just(this.count(key));
  }

  keys(): string[] {
    return Object.keys(this.counts);
  }

  constructor(private readonly featureLoader: FeatureLoader,
              private readonly selections: EntityChoiceSelections) {
    super();
  }

  async feature(key: string): Promise<Trait|undefined> {
    const cached: Trait|undefined = this.cache[key];
    if (cached !== undefined) {
      return cached;
    }
    const loaded: Trait|undefined = await this.featureLoader(key);
    if (loaded !== undefined) {
      this.cache[key] = loaded;
    }
    return loaded;
  }

  selection(path: string): string|string[]|undefined {
    return this.selections[path];
  }

  swapSelections(path1: string, path2: string) {
    const temp = this.selections[path1];
    this.selections[path1] = this.selections[path2];
    this.selections[path2] = temp;

    if (this.selections[path1] === undefined || this.selections[path1] === '') {
      delete this.selections[path1];
    }
    if (this.selections[path2] === undefined || this.selections[path2] === '') {
      delete this.selections[path2];
    }
  }

  register(id: string | undefined, count: number = 1) {
    if (id) this.counts[id] = (this.counts[id] ?? 0) + count;
  }

  count(id: string): number {
    return this.counts[id] ?? 0;
  }

  registerStackRef(featureId: string, stackCount: number, ref: FeatureRef) {
    this.stackRefs[featureId + ":" + stackCount] = ref;
  }

  getStackRef(featureId: string, stackCount: number): FeatureRef {
    return this.stackRefs[featureId + ":" + stackCount];
  }
}
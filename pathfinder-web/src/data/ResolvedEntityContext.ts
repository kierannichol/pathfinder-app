import {EntityChoiceSelections} from "./Entity.ts";
import {Trait} from "./Trait.ts";
import {BaseDataContext, Resolvable} from "@kierannichol/formula-js";
import {StackModification} from "./FeatureModification.ts";
import {RestartApplyState} from "./RestartApplyState.ts";

export type FeatureLoader = (key: string) => Promise<Trait | undefined>;

export class ResolvedEntityContext extends BaseDataContext {
  private readonly cache: { [key: string]: Trait } = {};
  private counts: { [key: string]: number } = {};
  private readonly stackModifications: { [key: string]: StackModification } = {};

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

  hasModification(modificationKey: string): boolean {
    return modificationKey in this.stackModifications;
  }

  registerModification(modificationKey: string, modification: StackModification): boolean {
    if (this.hasModification(modificationKey)) {
      return false;
    }
    this.stackModifications[modificationKey] = modification;
    return true;
  }

  restartResolve() {
    this.counts = {};
    throw RestartApplyState;
  }

  forbidAddFeature(parentKey: string, parentStackCount: number, featureToAddKey: string): boolean {
    return this.modifications(parentKey, parentStackCount)
    .find(entry => entry.forbidAddFeature(featureToAddKey)) !== undefined;
  }

  modifications(featureId: string, stackNumber: number): StackModification[] {
    return Object.values(this.stackModifications).filter(mod =>
        mod.targetFeatureId === featureId
        && mod.targetStackCount === stackNumber);
  }

  reset() {
    this.counts = {};
  }
}
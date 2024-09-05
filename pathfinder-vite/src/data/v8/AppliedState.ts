import {EntityState} from "./Entity.ts";
import {DataContext, MutableDataContext, Resolvable} from "@kierannichol/formula-js";
import {ResolvedStackModification} from "./FeatureModification.ts";

export default class AppliedState {
  public readonly rawState: EntityState;
  private readonly dataContext: MutableDataContext;
  private readonly stackModifications: ResolvedStackModification[] = [];
  private readonly stackCounts: {[key:string]:number} = {};

  constructor(public readonly withoutChoicePath: string | undefined = undefined) {
    this.rawState = {};
    this.dataContext = DataContext.of(this.rawState);
  }

  public increment(key: string, amount: number = 1): void {
    const current = this.getAsNumber(key);
    this.stackCounts[key] = (this.stackCounts[key] ?? 0) + 1;
    this.set(key, current + amount);
  }

  public set(key: string, value: number|string|boolean|Resolvable) {
    this.dataContext.set(key, value);
    if (typeof value === "number") {
      this.stackCounts[key] = value;
    } else {
      this.stackCounts[key] = 1;
    }

    this.modifications(key, this.stackCounts[key])
      .forEach(mod => mod.applyModification(this));
  }

  public getAsNumber(key: string): number {
    return this.dataContext.resolve(key)?.asNumber() ?? 0;
  }

  registerModification(modification: ResolvedStackModification) {
    this.stackModifications.push(modification);

    const current = this.getAsNumber(modification.targetFeatureId);
    if (current >= modification.targetStackCount) {
      modification.applyModification(this);
    }
  }

  modifications(featureId: string, stackNumber: number): ResolvedStackModification[] {
    return this.stackModifications.filter(mod =>
        mod.targetFeatureId === featureId
        && mod.targetStackCount === stackNumber);
  }

  asDataContext(): DataContext {
    return this.dataContext;
  }
}
import {CharacterState} from "./CharacterState.ts";
import {Effect} from "./Effect.ts";
import FeatureModification from "./FeatureModification.ts";

export class FeatureStack {
  private readonly stack: AppliedFeature[] = [];

  constructor() {
  }

  add(feature: AppliedFeature): void {
    this.stack.push(feature);
  }

  applyTo(state: CharacterState) {
    this.stack.forEach((entry, i) => {
        entry.applyTo(state, id => this.isRemoved(id, i+1));
    });
  }

  traverse(peekFn: (appliedFeature: AppliedFeature) => void) {
    this.stack.forEach((feature, i) => {
        feature.traverse(peekFn, id => this.isRemoved(id, i+1));
    });
  }

  private isRemoved(id: string, stackCount: number): boolean {
    const removedAt = this.getRemovedAt(id, stackCount);
    const unRemovedAt = this.getUnRemovedAt(id, stackCount);
    if (removedAt !== undefined) console.log(id + " removed at " + removedAt + " and unremoved at " + unRemovedAt);
    return removedAt !== undefined
        && stackCount >= removedAt
        && (unRemovedAt === undefined || stackCount <= unRemovedAt);
  }

  getRemovedAt(id: string, stackCount: number): number|undefined {
    let min: number | undefined = undefined;
    for (let i = Math.min(this.stack.length - 1, stackCount - 1); i >= 0; i--) {
      const item = this.stack[i];
      const removedAt = item.getRemovedAt(id);
      if (removedAt !== undefined) {
        min = (min !== undefined && min < i) ? min : i;
      }
    }
    return min;
  }

  getUnRemovedAt(id: string, stackCount: number): number|undefined {
    let min: number | undefined = undefined;
    for (let i = Math.min(this.stack.length - 1, stackCount - 1); i >= 0; i--) {
      const item = this.stack[i];
      const unRemovedAt = item.getUnRemovedAt(id);
      if (unRemovedAt !== undefined) {
        min = (min !== undefined && min < i) ? min : i;
      }
    }
    return min;
  }
}

export class AppliedFeature {
  public readonly effects: Effect[] = [];
  public readonly features: AppliedFeature[] = [];
  public readonly removedAt: {[id:string]:number} = {};
  public readonly unRemovedAt: {[id:string]:number} = {};
  private readonly featureModifications: {[id:string]:FeatureModification[]} = {};

  constructor(public readonly id: string) {
  }

  getRemovedAt(id: string): number|undefined {
    if (this.removedAt[id] !== undefined) {
      return 0;
    }
    let min: number | undefined = undefined;
    for (let i = 0; i < this.features.length; i++) {
      const doesChildFeatureRemoveIt = this.features[i].getRemovedAt(id);
      if (doesChildFeatureRemoveIt !== undefined) {
        min = (min !== undefined && min < i) ? min : i;
      }
    }
    return min;
  }

  getUnRemovedAt(id: string): number|undefined {
    if (this.unRemovedAt[id] !== undefined) {
      return 0;
    }
    let min: number | undefined = undefined;
    for (let i = 0; i < this.features.length; i++) {
      const doesChildFeatureUnRemoveIt = this.features[i].getUnRemovedAt(id);
      if (doesChildFeatureUnRemoveIt !== undefined) {
        min = (min !== undefined && min < i) ? min : i;
      }
    }
    return min;
  }

  addsEffect(effect: Effect): AppliedFeature {
    this.effects.push(effect);
    return this;
  }

  addsFeature(feature: AppliedFeature): AppliedFeature {
    this.features.push(feature);
    return this;
  }

  removesFeatureAt(feature: AppliedFeature|string, stackCount: number): AppliedFeature {
    const featureId = feature instanceof AppliedFeature ? feature.id : feature;
    this.removedAt[featureId] = stackCount;
    return this;
  }

  unRemovesFeatureAt(feature: AppliedFeature|string, stackCount: number): AppliedFeature {
    const featureId = feature instanceof AppliedFeature ? feature.id : feature;
    this.unRemovedAt[featureId] = stackCount;
    return this;
  }

  modifiesFeature(modification: FeatureModification): AppliedFeature {
    if (!(modification.targetFeatureId in this.featureModifications)) {
      this.featureModifications[modification.targetFeatureId] = [];
    }
    this.featureModifications[modification.targetFeatureId].push(modification);
    // modification.stackModifications.forEach(sm => {
    //   sm.linksToAdd.forEach((featureId, targetStackCount) => this.unRemovesFeatureAt(featureId, targetStackCount));
    //   sm.linksToRemove.forEach((featureId, targetStackCount) => this.removesFeatureAt(featureId, targetStackCount));
    // })
    return this;
  }

  modificationsFor(featureId: string): FeatureModification[] {
    return [ ...this.featureModifications[featureId] ?? [],
        ...this.features.flatMap(feature => feature.modificationsFor(featureId))
    ];
  }

  applyTo(state: CharacterState, isRemovedFn: (id: string) => boolean) {
    if (!isRemovedFn(this.id)) {
      this.effects.forEach(effect => effect.applyTo(state));
      this.features.forEach(feature => feature.applyTo(state, isRemovedFn));
    }
  }

  traverse(peekFn: (appliedFeature: AppliedFeature) => void, isRemovedFn: (id: string) => boolean) {
    this.features.forEach(entry => {
      if (!isRemovedFn(this.id)) {
        peekFn(entry);
        entry.traverse(peekFn, isRemovedFn);
      }
    });
  }
}
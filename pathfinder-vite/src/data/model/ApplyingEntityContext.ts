import Feature from "./Feature.ts";
import FeatureModification from "./FeatureModification.ts";
import {Stack} from "./Stack.ts";

export default class ApplyingEntityContext {
  private readonly featureCount: {[id:string]:number} = {};
  private readonly featureModifications: {[id:string]:FeatureModification[]} = {};

  registerFeature(feature: Feature): number {
    this.featureCount[feature.id] = (this.featureCount[feature.id] ?? 0) + 1;
    return this.featureCount[feature.id];
  }

  registerModification(modification: FeatureModification) {
    if (!(modification.targetFeatureId in this.featureModifications)) {
      this.featureModifications[modification.targetFeatureId] = [];
    }
    this.featureModifications[modification.targetFeatureId].push(modification);
  }

  applyModificationToStack(featureId: string, stackCount: number, originalStack: Stack): Stack {
    const modifications = (this.featureModifications[featureId] ?? [])
      .flatMap(modification => modification.stackModifications)
      .filter(modification => modification.targetStackCount === stackCount);

    let modifiedStack = originalStack;
    for (let modification of modifications) {
      modifiedStack = modifiedStack.modify(modification);
    }
    return modifiedStack;
  }
}
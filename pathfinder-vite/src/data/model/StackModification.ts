import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";

export default class StackModification implements FeatureResolvable {

  constructor(public readonly targetStackCount: number, public readonly linksToAdd: string[], public readonly linksToRemove: string[]) {
  }

  async resolve(path: string, context: ResolvedEntityContext) {
    for (let featureId of this.linksToAdd) {
      await context.addFeature(path, featureId);
    }
  }
}
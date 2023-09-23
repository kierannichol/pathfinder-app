import {FeatureResolvable} from "./FeatureResolvable.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

export default class Link implements FeatureResolvable {

  constructor(public readonly featureId: string,
              public readonly conditionFormula?: string) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await context.addFeature(basePath, this.featureId);
  }
}
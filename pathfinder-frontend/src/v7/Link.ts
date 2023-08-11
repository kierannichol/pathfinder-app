import {FeatureResolvable} from "./FeatureResolvable";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class Link implements FeatureResolvable {

  constructor(public readonly featureId: string,
              public readonly conditionFormula?: string) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await context.add(basePath, this.featureId);
  }
}
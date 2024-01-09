import StackModification from "./StackModification.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";

export default class FeatureModification implements FeatureResolvable {

  constructor(public readonly targetFeatureId: string, public readonly stackModifications: StackModification[]) {
  }

  async resolve(path: string, context: ResolvedEntityContext) {
    for (let stackModification of this.stackModifications) {
      await stackModification.resolve(path, context);
    }
  }
}
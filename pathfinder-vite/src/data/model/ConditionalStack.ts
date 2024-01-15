import {Stack} from "./Stack";
import {FeatureResolvable} from "./FeatureResolvable";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class ConditionalStack implements FeatureResolvable {

  constructor(public readonly conditionFormula: string, public readonly stack: Stack) {
  }

  resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    return this.stack.resolve(basePath, context);
  }
}
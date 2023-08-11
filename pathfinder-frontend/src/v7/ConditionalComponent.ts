import {Choice} from "./Choice";
import {Effect} from "./Effect";
import {FeatureResolvable} from "./FeatureResolvable";
import Link from "./Link";
import {ResolvedEntityContext} from "./ResolvedEntityContext";

export default class ConditionalComponent implements FeatureResolvable {

  constructor(public readonly conditionFormula: string,
              public readonly effects: Effect[],
              public readonly links: Link[],
              public readonly choices: Choice[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    for (const link of this.links) {
      await link.resolve(basePath, context);
    }
    for (const choice of this.choices) {
      await choice.resolve(basePath, context);
    }
  }
}
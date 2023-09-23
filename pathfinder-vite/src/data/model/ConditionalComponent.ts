import {Choice} from "./Choice.ts";
import {Effect} from "./Effect.ts";
import {FeatureResolvable} from "./FeatureResolvable.ts";
import Link from "./Link.ts";
import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";
import "./FeatureResolvableExtensions.ts";

export default class ConditionalComponent implements FeatureResolvable {

  constructor(public readonly conditionFormula: string,
              public readonly effects: Effect[],
              public readonly links: Link[],
              public readonly choices: Choice[]) {
  }

  async resolve(basePath: string, context: ResolvedEntityContext): Promise<void> {
    await this.links.resolveAll(basePath, context);
    await this.choices.resolveAll(basePath, context);
  }
}
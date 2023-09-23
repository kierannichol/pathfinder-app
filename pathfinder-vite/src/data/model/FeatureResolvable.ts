import {ResolvedEntityContext} from "./ResolvedEntityContext.ts";

export interface FeatureResolvable {
  resolve(basePath: string, context: ResolvedEntityContext): Promise<void>;
}
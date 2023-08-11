import {ResolvedEntityContext} from "./ResolvedEntityContext";

export interface FeatureResolvable {
  resolve(basePath: string, context: ResolvedEntityContext): Promise<void>;
}
import {data} from "./compiled";
import FeatureDbo = data.FeatureDbo;

export interface FeatureKey {
  sourceKey: string;
  featureKey: string;
}

export function idToKey(id: string): string {
  return id
    .replace(':', '_')
    .replace('#', '_');
}

export type FeatureRef = FeatureDbo & FeatureKey;

export interface PathfinderAPI {
  list_sources(): Promise<string[]>;
  list_features(sourceKey: string): Promise<FeatureKey[]>;
  load_feature(featureKey: FeatureKey): Promise<FeatureRef>;
  save_feature(model: FeatureRef): Promise<void>;
}
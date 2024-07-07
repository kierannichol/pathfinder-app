
export interface FeatureKey {
  segmentKey: string;
  featureKey: string;
}

export interface RawFeatureData {
  id: string;
  name: string;
}

export function idToKey(id: string): string {
  return id
    .replace(':', '_')
    .replace('#', '_');
}

export type FeatureRef = RawFeatureData & FeatureKey;

export interface PathfinderAPI {
  list_segments(): Promise<string[]>;
  list_features(segmentKey: string): Promise<FeatureKey[]>;
  load_feature(featureKey: FeatureKey): Promise<FeatureRef>;
  save_feature(model: FeatureRef): Promise<void>;
}
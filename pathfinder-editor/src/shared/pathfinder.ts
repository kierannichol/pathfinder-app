import {data} from "./compiled";
import {SourceData} from "./sources";
import DescriptionDbo = data.DescriptionDbo;

export interface FeatureKey {
  segmentKey: string;
  featureKey: string;
}

export interface ClassFeatureData {
  id: string;
  name: string;
  type: string;
  description: DescriptionDbo|string;
  effects: string[];
}

export interface RawFeatureData {
  id: string;
  name: string;
  label: string;
  tags: string[];
  description: DescriptionDbo|string;
  enabledFormula: string;
  source: string;

  // character class specific
  category: string;
  hit_die: string;
  class_features: ClassFeatureData[];
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
  load_sources(): Promise<SourceData[]>;
}
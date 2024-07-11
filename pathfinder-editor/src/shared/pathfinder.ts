import {data} from "./compiled";
import {SourceData} from "./sources";
import DescriptionDbo = data.DescriptionDbo;

export interface FeatureKey {
  segmentKey: string;
  featureKey: string;
}

export interface ChoiceData {

}

export interface StackModificationData {
  targetStackCount: number;
  featuresToAdd: string[];
  featuresToRemove: string[];
}

export interface FeatureModificationData {
  targetFeatureId: string;
  stackModifications: StackModificationData[];
}

export interface ClassFeatureData {
  id: string;
  name: string;
  type: string;
  description: DescriptionDbo|string;
  effects: string[];
  links: string[];
}

export interface ClassLevelData {
  level: number;
  class_feature_names: string[];
}

export interface StackData {
  effects: string[];
  links: string[];
  choices: ChoiceData[];
  featureModifications: FeatureModificationData[];
}

export interface ArchetypeModificationData {
  add: string|string[];
  remove: string|string[];
}

export interface RawFeatureData {
  id: string;
  name: string;
  label: string;
  tags: string[];
  description: DescriptionDbo|string;
  enabledFormula: string;
  source: string;
  effects: string[];
  links: string[];

  fixed_stacks: StackData[];
  repeating_stack: StackData;

  // character class specific
  category: string;
  hit_die: string;
  levels: ClassLevelData[];
  class_features: ClassFeatureData[];

  // archetype
  features: ClassFeatureData[];
  modifications: ArchetypeModificationData[];

  // feat
  type: string;
  prerequisites: string;
  benefit: string;
  normal: string;
  special: string;
  note: string;
  multiples: boolean;
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
export default interface FeatureModel {
  id: string;
  name: string;
  label: string;
  type: string;
  description: string;
  prerequisites: string;
  effects: string[];
  source: string;
}

export interface PathfinderAPI {
  list_sections(): Promise<string[]>;
  list_entries(section: string): Promise<string[]>;
  load_feature(section: string, name: string): Promise<FeatureModel>;
}
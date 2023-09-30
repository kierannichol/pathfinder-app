import {data} from "./compiled";
import FeatureDbo = data.FeatureDbo;

export interface PathfinderAPI {
  list_sources(): Promise<string[]>;
  list_features(sourceKey: string): Promise<string[]>;
  load_feature(sourceKey: string, featureKey: string): Promise<FeatureDbo>;
  save_feature(sourceKey: string, featureKey: string, model: FeatureDbo): Promise<void>;
}
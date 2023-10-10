import * as path from "path";
import * as fs from "fs";
import {data} from "@shared/compiled";
import {FeatureKey, FeatureRef, idToKey} from "@shared/pathfinder";
import FeatureDbo = data.FeatureDbo;
import SourceModuleDbo = data.SourceModuleDbo;

const DatabaseBasePath = path.join(__dirname, "..", "..", "..", "pathfinder-vite", "public", "db");

function list_files(path: string): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(path, function (err, files) {
      if (err) {
        reject(err);
        return;
      }

      resolve(files);
    });
  });
}

function read_proto<T>(path: string, decodeFn: (binary: Uint8Array) => T): Promise<T> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, buffer) {
      if (err) {
        reject(err);
        return;
      }

      const dbo = decodeFn(buffer);
      resolve(dbo);
    });
  });
}

function write_proto<T>(path: string, message: T, encodeBinaryFn: (t: T) => Uint8Array, encodeJsonFn: (t: T) => any): Promise<void> {
  return new Promise((resolve, reject) => {

    try {
      const json = JSON.stringify(encodeJsonFn(message), null, 2);
      const binary = encodeBinaryFn(message);

      fs.writeFileSync(path + ".bin", binary);
      fs.writeFileSync(path + ".json", json);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

export const PathfinderProcess = {

  async save_feature(event: any, model: FeatureRef): Promise<void> {
    const filePath = path.join(DatabaseBasePath, model.sourceKey, model.featureKey);
    const summaryPath = path.join(DatabaseBasePath, model.sourceKey);
    await write_proto(filePath, model,
        m => FeatureDbo.encode(m).finish(),
        m => FeatureDbo.toObject(m));

    const sourceSummary = await read_proto(summaryPath + ".bin", SourceModuleDbo.decode);

    const featureIndex = sourceSummary.features.findIndex(summary =>
      idToKey(summary.id) === model.featureKey);

    const modifiedFeatures = featureIndex > -1
        ? sourceSummary.features.with(featureIndex, model)
        : [ ...sourceSummary.features, model ];

    const modifiedSummary = new SourceModuleDbo({
      sourceId: sourceSummary.sourceId,
      features: modifiedFeatures
    })

    await write_proto(summaryPath, modifiedSummary,
            m => SourceModuleDbo.encode(m).finish(),
        m => SourceModuleDbo.toObject(m));
  },

  async load_feature(event: any, featureKey: FeatureKey): Promise<FeatureRef> {
    const filePath = path.join(DatabaseBasePath, featureKey.sourceKey, featureKey.featureKey + ".bin");
    const dbo = await read_proto(filePath, FeatureDbo.decode) as FeatureRef;
    dbo.sourceKey = featureKey.sourceKey;
    dbo.featureKey = featureKey.featureKey;
    return dbo;
  },

  async list_features(event: any, sourceKey: string): Promise<FeatureKey[]> {
    const section_path = path.join(DatabaseBasePath, sourceKey);
    return (await list_files(section_path))
        .filter(file => file.endsWith(".bin"))
        .map(file => file.replace(".bin", ""))
        .map(featureKey => {
          return {
            sourceKey: sourceKey,
            featureKey: featureKey
          };
        });
  },

  async list_sources(): Promise<string[]> {
    const files = await list_files(DatabaseBasePath);
    return files.filter(file => fs.lstatSync(path.join(DatabaseBasePath, file)).isDirectory());
  }
}
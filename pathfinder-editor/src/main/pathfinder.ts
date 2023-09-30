import * as path from "path";
import * as fs from "fs";
import {data} from "../preload/compiled";
import {Message} from "protobufjs";
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

function write_proto(path: string, message: {[p:string]:any}): Promise<void> {
  return new Promise((resolve, reject) => {

    try {
      const json = JSON.stringify(message);
      const binary = Message.encode(message).finish();

      fs.writeFileSync(path + ".bin", binary);
      fs.writeFileSync(path + ".json", json);
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

export const PathfinderProcess = {

  async save_feature(sourceKey: string, featureKey: string, model: FeatureDbo): Promise<void> {
    const filePath = path.join(DatabaseBasePath, sourceKey, featureKey);
    const summaryPath = path.join(DatabaseBasePath, sourceKey);
    await write_proto(filePath, model.toJSON());

    const sourceSummary = await read_proto(summaryPath + ".bin", SourceModuleDbo.decode);

    const featureIndex = sourceSummary.features.findIndex(summary => summary.id === featureKey);

    const modifiedSummary = new SourceModuleDbo({
      sourceId: sourceSummary.sourceId,
      features: sourceSummary.features.with(featureIndex, model)
    })

    await write_proto(summaryPath, modifiedSummary);
  },

  load_feature(event: any, sourceKey: string, featureKey: string): Promise<FeatureDbo> {
    const filePath = path.join(DatabaseBasePath, sourceKey, featureKey + ".bin");
    return read_proto(filePath, FeatureDbo.decode);
  },

  async list_features(event: any, sourceKey: string): Promise<string[]> {
    const section_path = path.join(DatabaseBasePath, sourceKey);
    return (await list_files(section_path))
      .filter(file => file.endsWith(".bin"))
      .map(file => file.replace(".bin", ""));
  },

  async list_sources(): Promise<string[]> {
    const files = await list_files(DatabaseBasePath);
    return files.filter(file => fs.lstatSync(path.join(DatabaseBasePath, file)).isDirectory());
  }
}
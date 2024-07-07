import * as path from "path";
import * as fs from "fs";
import {FeatureKey, FeatureRef} from "@shared/pathfinder";
import YAML from 'yaml'


const DatabaseBasePath = path.join(__dirname, "..", "..", "..", "pathfinder-generator", "src", "main", "resources", "db");

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

function read_yaml<T>(path: string): Promise<T> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, function (err, buffer) {
      if (err) {
        reject(err);
        return;
      }

      const dbo = YAML.parse(buffer.toString());
      resolve(dbo);
    });
  });
}

function write_yaml<T>(path: string, dbo: T): Promise<void> {
  return new Promise((resolve, reject) => {

    try {
      const yaml = YAML.stringify(dbo, null, 2);
      fs.writeFileSync(path, yaml);
      resolve();
    } catch (e) {
      reject(e);
    }
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
    const filePath = path.join(DatabaseBasePath, model.segmentKey, model.featureKey) + ".yml";
    await write_yaml(filePath, model);
  },

  async load_feature(event: any, featureKey: FeatureKey): Promise<FeatureRef> {
    const filePath = path.join(DatabaseBasePath, featureKey.segmentKey, featureKey.featureKey + ".yml");
    const dbo = await read_yaml(filePath) as FeatureRef;
    dbo.segmentKey = featureKey.segmentKey;
    dbo.featureKey = featureKey.featureKey;
    return dbo;
  },

  async list_features(event: any, segmentKey: string): Promise<FeatureKey[]> {
    const section_path = path.join(DatabaseBasePath, segmentKey);
    return (await list_files(section_path))
        .filter(file => file.endsWith(".yml"))
        .map(file => file.replace(".yml", ""))
        .map(featureKey => {
          return {
            segmentKey: segmentKey,
            featureKey: featureKey
          };
        });
  },

  async list_segments(): Promise<string[]> {
    const files = await list_files(DatabaseBasePath);
    return files.filter(file => fs.lstatSync(path.join(DatabaseBasePath, file)).isDirectory());
  }
}
import * as path from "path";
import * as fs from "fs";
import FeatureModel from "../preload/pathfinder";
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

      const yaml = YAML.parse(buffer.toString());//.parse(buffer.toString());

      resolve(yaml);
    });
  });
}

export const PathfinderProcess = {

  load_feature(event: any, section: string, name: string): Promise<FeatureModel> {
    const filePath = path.join(DatabaseBasePath, section, name + ".yml");
    return read_yaml(filePath);
  },

  async list_entries(event: any, section: string): Promise<string[]> {
    const section_path = path.join(DatabaseBasePath, section);
    return (await list_files(section_path)).map(file => file.replace(".yml", ""));
  },

  list_sections(): Promise<string[]> {
    return list_files(DatabaseBasePath);
  }
}
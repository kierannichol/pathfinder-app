import {Feature} from "@ttrpg-data/Feature.js";

export interface Database {

  load(id: string): Promise<Feature|null>;
}
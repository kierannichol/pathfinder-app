import {ResolvedValue} from "@kierannichol/formula-js";
import {ResolveContext} from "@ttrpg-data/ResolveContext";
import {TraitPath} from "@ttrpg-data/TraitPath";

export interface Trait {
  apply(key: string, value: ResolvedValue): ResolvedValue;
  keys(): string[];

  resolve(path: TraitPath, context: ResolveContext): Promise<void>;

  clone(): Trait;
}
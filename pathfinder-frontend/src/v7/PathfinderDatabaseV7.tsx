import {createContext, useContext} from "react";
import {v6} from "../compiled";
import {fetchProto} from "../core/loader";
import {BaseCharacterModule} from "./BaseCharacterModule";
import Database from "./Database";
import {decodeFeatureSummary} from "./encoder";
import SourceModule, {ExternalSourceModule} from "./SourceModule";
import SourceModuleDbo = v6.SourceModuleDbo;

let globalPathfinderDatabase: Promise<Database> | undefined = undefined;

const Modules: (SourceModule|Promise<SourceModule>)[] = [
    BaseCharacterModule,
    loadModule('PZO1110'),
    loadModule('PZO1129'),
    loadModule('PZO9476'),
];

async function loadModule(id: string): Promise<SourceModule> {
  const dbo = await fetchProto(`db/v7/${id}.bin`, SourceModuleDbo.decode);
  return ExternalSourceModule.create(dbo.sourceId, dbo.features.map(decodeFeatureSummary));
}

async function initializeGlobalPathfinderDatabaseV7(): Promise<Database> {
  const modules = await Promise.all(Modules);
  return new Database(modules);
}

export function withGlobalPathfinderDatabaseV7(): Promise<Database> {
  if (globalPathfinderDatabase === undefined) {
    globalPathfinderDatabase = initializeGlobalPathfinderDatabaseV7();
  }
  return globalPathfinderDatabase;
}

export const PathfinderDatabaseContextV7 = createContext<Database|undefined>(undefined);

export function usePathfinderDatabaseV7(): Database {
  const pathfinderDb = useContext(PathfinderDatabaseContextV7);
  if (pathfinderDb === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return pathfinderDb;
}
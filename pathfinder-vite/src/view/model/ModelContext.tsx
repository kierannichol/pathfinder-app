import {createContext, useContext} from "react";
import {CharacterStoreModel} from "./CharacterStoreModel.tsx";
import {ViewBridge} from "../../data/ViewBridge.tsx";
import {DatabaseModel} from "./DatabaseModel.ts";

let globalDatabaseModel: Promise<DatabaseModel> | undefined = undefined;

function initializeGlobalDatabaseModel(): Promise<DatabaseModel> {
  return ViewBridge.createDatabaseModel();
}

export function withGlobalDatabaseModel(): Promise<DatabaseModel> {
  if (globalDatabaseModel === undefined) {
    globalDatabaseModel = initializeGlobalDatabaseModel();
  }
  return globalDatabaseModel;
}

export const DatabaseModelContext = createContext<DatabaseModel|undefined>(undefined);

export function useDatabaseModel(): DatabaseModel {
  const db = useContext(DatabaseModelContext);
  if (db === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return db;
}

export const CharacterStoreModelContext = createContext<CharacterStoreModel|undefined>(undefined);

let globalCharacterStoreModel: Promise<CharacterStoreModel> | undefined = undefined;

async function initializeCharacterStoreModel(): Promise<CharacterStoreModel> {
  return ViewBridge.createCharacterStoreModel();
}

export function withGlobalCharacterStoreModel(): Promise<CharacterStoreModel> {
  if (globalCharacterStoreModel === undefined) {
    globalCharacterStoreModel = initializeCharacterStoreModel();
  }
  return globalCharacterStoreModel;
}

export function useCharacterStoreModel(): CharacterStoreModel {
  const value = useContext(CharacterStoreModelContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}
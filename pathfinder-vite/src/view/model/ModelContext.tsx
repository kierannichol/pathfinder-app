import {createContext, useContext} from "react";
import {CharacterStoreModel} from "./CharacterStoreModel.tsx";
import {ViewBridge} from "../../data/ViewBridge.tsx";
import {DatabaseModel, ItemDatabaseModel} from "./DatabaseModel.ts";
import {EquipmentSetStoreModel} from "./EquipmentSetStoreModel.tsx";

// DATABASE

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

// ITEM DATABASE

export const ItemDatabaseModelContext = createContext<ItemDatabaseModel|undefined>(undefined);

export function useItemDatabaseModel(): ItemDatabaseModel {
  const db = useContext(ItemDatabaseModelContext);
  if (db === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return db;
}

// CHARACTER STORE

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

// EQUIPMENT SET STORE

export const EquipmentSetStoreModelContext = createContext<EquipmentSetStoreModel|undefined>(undefined);

let globalEquipmentSetStoreModel: Promise<EquipmentSetStoreModel> | undefined = undefined;

async function initializeEquipmentSetStoreModel(): Promise<EquipmentSetStoreModel> {
  return ViewBridge.createEquipmentSetStoreModel();
}

export function withGlobalEquipmentSetStoreModel(): Promise<EquipmentSetStoreModel> {
  if (globalEquipmentSetStoreModel === undefined) {
    globalEquipmentSetStoreModel = initializeEquipmentSetStoreModel();
  }
  return globalEquipmentSetStoreModel;
}

export function useEquipmentSetStoreModel(): EquipmentSetStoreModel {
  const value = useContext(EquipmentSetStoreModelContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}
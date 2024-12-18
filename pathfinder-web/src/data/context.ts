import {createContext, useContext} from "react";
import Database, {ItemDatabase} from "./Database.ts";
import CharacterStore from "./CharacterStore.ts";
import {EquipmentSetStore} from "./EquipmentSetStore.ts";

// DATABASE

export const DatabaseContext = createContext<Database|undefined>(undefined);

export function useDatabase(): Database {
  const db = useContext(DatabaseContext);
  if (db === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return db;
}

// ITEM DATABASE

export const ItemDatabaseContext = createContext<ItemDatabase|undefined>(undefined);

export function useItemDatabase(): ItemDatabase {
  const db = useContext(ItemDatabaseContext);
  if (db === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return db;
}

// CHARACTER STORE

export const CharacterStoreContext = createContext<CharacterStore|undefined>(undefined);

export function useCharacterStore(): CharacterStore {
  const value = useContext(CharacterStoreContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}

// EQUIPMENT SET STORE

export const EquipmentSetStoreContext = createContext<EquipmentSetStore|undefined>(undefined);

export function useEquipmentSetStore(): EquipmentSetStore {
  const value = useContext(EquipmentSetStoreContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}

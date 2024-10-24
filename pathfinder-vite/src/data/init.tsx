import CharacterStore, {FirebaseCharacterStore} from "./v8/CharacterStore.ts";
import Database, {ItemDatabase} from "./v8/Database.ts";
import {
  initializePathfinderDatabase,
  initializePathfinderItemDatabase,
  loadBaseCharacterTemplate
} from "./v8/PathfinderDatabase.tsx";
import {EquipmentSetStore, FirebaseEquipmentSetStore} from "./v8/EquipmentSetStore.ts";


let globalDatabase: Promise<Database> | undefined = undefined;
let globalItemDatabase: Promise<ItemDatabase> | undefined = undefined;
let globalCharacterStore: Promise<CharacterStore> | undefined = undefined;
let globalEquipmentSetStore: Promise<EquipmentSetStore> | undefined = undefined;

async function initializeCharacterStore(): Promise<CharacterStore> {
  const template = await loadBaseCharacterTemplate();
  const database = await withGlobalDatabase();
  return new FirebaseCharacterStore(template, database);
}

async function initializeEquipmentSetStore(): Promise<EquipmentSetStore> {
  const database = await withGlobalItemDatabase();
  return new FirebaseEquipmentSetStore(database);
}

export async function withGlobalCharacterStore(): Promise<CharacterStore> {
  if (!globalCharacterStore) {
    globalCharacterStore = initializeCharacterStore();
  }
  return globalCharacterStore;
}

export async function withGlobalEquipmentSetStore(): Promise<EquipmentSetStore> {
  if (!globalEquipmentSetStore) {
    globalEquipmentSetStore = initializeEquipmentSetStore();
  }
  return globalEquipmentSetStore;
}

export function withGlobalDatabase(): Promise<Database> {
  if (!globalDatabase) {
    globalDatabase = initializePathfinderDatabase();
  }
  return globalDatabase;
}

export function withGlobalItemDatabase(): Promise<ItemDatabase> {
  if (!globalItemDatabase) {
    globalItemDatabase = initializePathfinderItemDatabase();
  }
  return globalItemDatabase;
}
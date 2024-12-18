import CharacterStore, {FirebaseCharacterStore} from "./CharacterStore.ts";
import Database, {ItemDatabase} from "./Database.ts";
import {
  initializePathfinderDatabase,
  initializePathfinderItemDatabase,
  loadBaseCharacterTemplate
} from "./PathfinderDatabase.ts";
import {EquipmentSetStore, FirebaseEquipmentSetStore} from "./EquipmentSetStore.ts";


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
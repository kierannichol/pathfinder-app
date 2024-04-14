import CharacterStore, {FirebaseCharacterStore} from "./v8/CharacterStore.ts";
import Database from "./v8/Database.ts";
import {initializePathfinderDatabase, loadBaseCharacterTemplate} from "./v8/PathfinderDatabase.tsx";
import {EquipmentSetStore, FirebaseEquipmentSetStore} from "./v8/EquipmentSetStore.ts";


let globalDatabase: Promise<Database> | undefined = undefined;
let globalCharacterStore: Promise<CharacterStore> | undefined = undefined;
let globalEquipmentSetStore: Promise<EquipmentSetStore> | undefined = undefined;

async function initializeCharacterStore(): Promise<CharacterStore> {
  const template = await loadBaseCharacterTemplate();
  const database = await withGlobalDatabase();
  return new FirebaseCharacterStore(template, database);
}

async function initializeEquipmentSetStore(): Promise<EquipmentSetStore> {
  const database = await withGlobalDatabase();
  return new FirebaseEquipmentSetStore(await database.itemDatabase());
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
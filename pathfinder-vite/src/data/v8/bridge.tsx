import {DatabaseModel} from "../../view/model/DatabaseModel.ts";
import {CharacterStoreModel} from "../../view/model/CharacterStoreModel.tsx";
import CharacterStore, {FirebaseCharacterStore} from "./CharacterStore.ts";
import Database from "./Database.ts";
import {initializePathfinderDatabase, loadBaseCharacterTemplate} from "./PathfinderDatabase.tsx";
import {DatabaseBridge} from "./bridge/DatabaseBridge.ts";
import {CharacterStoreBridge} from "./bridge/CharacterStoreBridge.ts";
import {EquipmentSetStoreModel} from "../../view/model/EquipmentSetStoreModel.tsx";
import {EquipmentSetStoreBridge} from "./bridge/EquipmentSetStoreBridge.ts";
import {EquipmentSetStore, FirebaseEquipmentSetStore} from "./EquipmentSetStore.ts";


let globalDatabase: Promise<Database> | undefined = undefined;
let globalCharacterStore: Promise<CharacterStore> | undefined = undefined;
let globalEquipmentSetStore: Promise<EquipmentSetStore> | undefined = undefined;

async function initializeCharacterStore(): Promise<CharacterStore> {
  const template = await loadBaseCharacterTemplate();
  const database = await withDatabase();
  return new FirebaseCharacterStore(template, database);
}

async function withCharacterStore(): Promise<CharacterStore> {
  if (!globalCharacterStore) {
    globalCharacterStore = initializeCharacterStore();
  }
  return globalCharacterStore;
}

async function initializeEquipmentSetStore(): Promise<EquipmentSetStore> {
  const database = await withDatabase();
  return new FirebaseEquipmentSetStore(await database.itemDatabase());
}

async function withEquipmentSetStore(): Promise<EquipmentSetStore> {
  if (!globalEquipmentSetStore) {
    globalEquipmentSetStore = initializeEquipmentSetStore();
  }
  return globalEquipmentSetStore;
}

function withDatabase(): Promise<Database> {
  if (!globalDatabase) {
    globalDatabase = initializePathfinderDatabase();
  }
  return globalDatabase;
}

export async function createCharacterStoreModel(): Promise<CharacterStoreModel> {
  const characterStore = await withCharacterStore();
  return new CharacterStoreBridge(characterStore);
}


export async function createDatabaseModel(): Promise<DatabaseModel> {
  const database = await withDatabase();
  return new DatabaseBridge(database);
}

export async function createEquipmentSetStoreModel(): Promise<EquipmentSetStoreModel> {
  const store = await withEquipmentSetStore();
  return new EquipmentSetStoreBridge(store);
}

import {DatabaseModel} from "../../view/model/DatabaseModel.ts";
import {CharacterStoreModel} from "../../view/model/CharacterStoreModel.tsx";
import CharacterStore, {FirebaseCharacterStore} from "./CharacterStore.ts";
import Database from "./Database.ts";
import {initializePathfinderDatabase, loadBaseCharacterTemplate} from "./PathfinderDatabase.tsx";
import {DatabaseBridge} from "./bridge/DatabaseBridge.ts";
import {CharacterStoreBridge} from "./bridge/CharacterStoreBridge.ts";

let globalDatabase: Promise<Database> | undefined = undefined;
let globalCharacterStore: Promise<CharacterStore> | undefined = undefined;

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


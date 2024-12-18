import CharacterStore from "@/data/CharacterStore.ts";
import Database from "@/data/Database.ts";
import {withGlobalCharacterStore, withGlobalDatabase} from "@/data/init.ts";

export interface CharacterListLoaderData {
  characterStore: CharacterStore;
  database: Database;
}

export async function characterListLoader(): Promise<CharacterListLoaderData> {
  const characterStore = await withGlobalCharacterStore();
  const database = await withGlobalDatabase();
  return {
    characterStore: characterStore,
    database: database
  };
}
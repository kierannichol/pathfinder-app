import CharacterStore, {FirebaseCharacterStore} from "./CharacterStore.ts";
import {createContext, useContext} from "react";
import {loadBaseCharacterTemplate, withGlobalPathfinderDatabase} from "./PathfinderDatabase.tsx";

export const CharacterStoreContext = createContext<CharacterStore|undefined>(undefined);

let globalCharacterStore: Promise<CharacterStore> | undefined = undefined;

async function initializeCharacterStore(): Promise<CharacterStore> {
  const template = await loadBaseCharacterTemplate();
  if (!template) throw new Error("Unable to load character template");
  const database = await withGlobalPathfinderDatabase();
  return new FirebaseCharacterStore(template, database);
}

export function withGlobalCharacterStore(): Promise<CharacterStore> {
  if (globalCharacterStore === undefined) {
    globalCharacterStore = initializeCharacterStore();
  }
  return globalCharacterStore;
}

export function useCharacterStore(): CharacterStore {
  const value = useContext(CharacterStoreContext);
  if (value === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return value;
}
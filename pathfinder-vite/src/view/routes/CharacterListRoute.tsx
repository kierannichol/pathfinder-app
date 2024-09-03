import CharacterList from "../views/CharacterList.tsx";
import {RequiresAuth} from "../../app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import CharacterStore from "../../data/v8/CharacterStore.ts";
import {withGlobalCharacterStore, withGlobalDatabase} from "../../data/init.tsx";
import {CharacterStoreContext, DatabaseContext} from "../../data/context.tsx";
import Database from "@/data/v8/Database.ts";

interface CharacterListLoaderData {
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

export default function CharacterListRoute() {
  const { characterStore, database } = useLoaderData() as CharacterListLoaderData;
  return <RequiresAuth>
    <DatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterList />
      </CharacterStoreContext.Provider>
    </DatabaseContext.Provider>
  </RequiresAuth>
}
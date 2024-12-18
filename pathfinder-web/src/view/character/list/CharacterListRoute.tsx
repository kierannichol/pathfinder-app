import CharacterListView from "./CharacterListView.tsx";
import {RequiresAuth} from "@/app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import {CharacterStoreContext, DatabaseContext} from "@/data/context.ts";
import {CharacterListLoaderData} from "@/view/character/list/characterListLoader.ts";

export default function CharacterListRoute() {
  const { characterStore, database } = useLoaderData() as CharacterListLoaderData;
  return <RequiresAuth>
    <DatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterListView />
      </CharacterStoreContext.Provider>
    </DatabaseContext.Provider>
  </RequiresAuth>
}
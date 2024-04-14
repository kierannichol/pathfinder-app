import CharacterList from "../views/CharacterList.tsx";
import {RequiresAuth} from "../../app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import CharacterStore from "../../data/v8/CharacterStore.ts";
import {withGlobalCharacterStore} from "../../data/init.tsx";
import {CharacterStoreContext} from "../../data/context.tsx";

interface CharacterListLoaderData {
  characterStore: CharacterStore;
}

export async function characterListLoader(): Promise<CharacterListLoaderData> {
  const characterStore = await withGlobalCharacterStore();
  return {
    characterStore: characterStore
  };
}

export default function CharacterListRoute() {
  const { characterStore } = useLoaderData() as CharacterListLoaderData;
  return <RequiresAuth>
    <CharacterStoreContext.Provider value={characterStore}>
      <CharacterList />
    </CharacterStoreContext.Provider>
  </RequiresAuth>
}
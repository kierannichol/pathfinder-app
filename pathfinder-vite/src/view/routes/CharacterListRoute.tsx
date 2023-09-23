import CharacterList from "../views/CharacterList.tsx";
import {RequiresAuth} from "../../app/auth.tsx";
import {CharacterStoreContext, withGlobalCharacterStore} from "../../data/model/Character.react.tsx";
import {useLoaderData} from "react-router-dom";
import ICharacterStore from "../model/ICharacterStore.tsx";

interface CharacterListLoaderData {
  characterStore: ICharacterStore;
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
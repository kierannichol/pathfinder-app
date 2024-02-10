import CharacterList from "../views/CharacterList.tsx";
import {RequiresAuth} from "../../app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import {CharacterStoreModel} from "../model/CharacterStoreModel.tsx";
import {CharacterStoreModelContext, withGlobalCharacterStoreModel} from "../model/ModelContext.tsx";

interface CharacterListLoaderData {
  characterStore: CharacterStoreModel;
}

export async function characterListLoader(): Promise<CharacterListLoaderData> {
  const characterStore = await withGlobalCharacterStoreModel();
  return {
    characterStore: characterStore
  };
}

export default function CharacterListRoute() {
  const { characterStore } = useLoaderData() as CharacterListLoaderData;
  return <RequiresAuth>
    <CharacterStoreModelContext.Provider value={characterStore}>
      <CharacterList />
    </CharacterStoreModelContext.Provider>
  </RequiresAuth>
}
import CharacterEdit from "../views/CharacterEdit.tsx";
import {useLoaderData} from "react-router-dom";
import {timedAsync} from "../../app/pfutils.ts";
import {CharacterStoreModel} from "../model/CharacterStoreModel.tsx";
import {CharacterModel} from "../model/CharacterModel.ts";
import {DatabaseModel} from "../model/DatabaseModel.ts";
import {
  CharacterStoreModelContext,
  DatabaseModelContext,
  withGlobalCharacterStoreModel,
  withGlobalDatabaseModel
} from "../model/ModelContext.tsx";

interface CharacterEditLoaderData {
  character: CharacterModel;
  characterStore: CharacterStoreModel;
  database: DatabaseModel;
}

export async function characterEditLoader({ params }: any): Promise<CharacterEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No character ID specified");
  const characterStore = await withGlobalCharacterStoreModel();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');
  if (!character) throw new Error("Character not found");

  const database = await withGlobalDatabaseModel();
  if (!database) throw new Error("Unable to initialize database");

  return {
    character: character,
    characterStore: characterStore,
    database: database
  };
}

export default function CharacterEditRoute() {
  const { character, characterStore, database } = useLoaderData() as CharacterEditLoaderData;
  return <DatabaseModelContext.Provider value={database}>
      <CharacterStoreModelContext.Provider value={characterStore}>
        <CharacterEdit loaded={character} />
      </CharacterStoreModelContext.Provider>
    </DatabaseModelContext.Provider>
}
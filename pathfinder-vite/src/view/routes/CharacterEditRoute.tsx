import CharacterEdit from "../views/CharacterEdit.tsx";
import {CharacterStoreContext, withGlobalCharacterStore} from "../../data/model/Character.react.tsx";
import {useLoaderData} from "react-router-dom";
import {PathfinderDatabaseContext, withGlobalPathfinderDatabase} from "../../data/model/PathfinderDatabase.tsx";
import {timedAsync} from "../../app/pfutils.ts";
import Database from "../../data/model/Database.ts";
import CharacterStore from "../../data/model/CharacterStore.ts";
import Character from "../../data/model/Character.ts";

interface CharacterEditLoaderData {
  character: Character;
  characterStore: CharacterStore;
  database: Database;
}

export async function characterEditLoader({ params }: any): Promise<CharacterEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No character ID specified");
  const characterStore = await withGlobalCharacterStore();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');
  if (!character) throw new Error("Character not found");

  const database = await withGlobalPathfinderDatabase();
  if (!database) throw new Error("Unable to initialize database");

  return {
    character: character,
    characterStore: characterStore,
    database: database
  };
}

export default function CharacterEditRoute() {
  const { character, characterStore, database } = useLoaderData() as CharacterEditLoaderData;
  return <PathfinderDatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterEdit loaded={character} />
      </CharacterStoreContext.Provider>
    </PathfinderDatabaseContext.Provider>
}
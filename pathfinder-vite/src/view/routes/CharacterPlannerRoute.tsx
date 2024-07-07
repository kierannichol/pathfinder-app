import CharacterPlannerView from "../views/CharacterPlannerView.tsx";
import {useLoaderData} from "react-router-dom";
import {timedAsync} from "@/app/pfutils.ts";
import Character from "../../data/v8/Character.ts";
import CharacterStore from "../../data/v8/CharacterStore.ts";
import Database from "../../data/v8/Database.ts";
import {withGlobalCharacterStore, withGlobalDatabase} from "../../data/init.tsx";
import {CharacterStoreContext, DatabaseContext} from "../../data/context.tsx";

interface CharacterPlannerLoaderData {
  character: Character;
  characterStore: CharacterStore;
  database: Database;
}

export async function characterPlannerLoader({ params }: any): Promise<CharacterPlannerLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No character ID specified");
  const characterStore = await withGlobalCharacterStore();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');
  if (!character) throw new Error("Character not found");

  const database = await withGlobalDatabase();
  if (!database) throw new Error("Unable to initialize database");

  return {
    character: character,
    characterStore: characterStore,
    database: database
  };
}

export default function CharacterPlannerRoute() {
  const { character, characterStore, database } = useLoaderData() as CharacterPlannerLoaderData;
  return <DatabaseContext.Provider value={database}>
      <CharacterStoreContext.Provider value={characterStore}>
        <CharacterPlannerView loaded={character} />
      </CharacterStoreContext.Provider>
    </DatabaseContext.Provider>
}
import {withGlobalCharacterStore} from "../../data/model/Character.react.tsx";
import {useLoaderData} from "react-router-dom";
import {PathfinderDatabaseContext, withGlobalPathfinderDatabase} from "../../data/model/PathfinderDatabase.tsx";
import {timedAsync} from "../../app/pfutils.ts";
import Database from "../../data/model/Database.ts";
import CharacterSheet from "../components/character/sheet/CharacterSheet.tsx";
import CharacterAtLevel from "../../data/model/CharacterAtLevel.ts";

interface CharacterSheetLoaderData {
  characterAtLevel: CharacterAtLevel;
  database: Database;
}

export async function characterSheetLoader({ params }: any): Promise<CharacterSheetLoaderData> {
  const id = params.id as string;
  const level = params.level as number;

  if (id === undefined) {
    throw new Response("Character ID required", { status: 400 });
  }

  if (level === undefined) {
    throw new Response("Character level required", { status: 400 });
  }

  const characterStore = await withGlobalCharacterStore();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');

  if (character === undefined) {
    throw new Response("Character not found", { status: 404 });
  }

  const database = await withGlobalPathfinderDatabase();
  if (!database) throw new Error("Unable to initialize database");

  const characterAtLevel = character.atLevel(level);
  if (characterAtLevel === undefined) {
    throw new Response("Character level not found", { status: 404 });
  }

  return {
    characterAtLevel: characterAtLevel,
    database: database
  };
}

export default function CharacterSheetRoute() {
  const { characterAtLevel, database } = useLoaderData() as CharacterSheetLoaderData;
  return <PathfinderDatabaseContext.Provider value={database}>
      <CharacterSheet characterAtLevel={characterAtLevel} database={database} />
  </PathfinderDatabaseContext.Provider>
}

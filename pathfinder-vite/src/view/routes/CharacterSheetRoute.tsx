import {useLoaderData} from "react-router-dom";
import {timedAsync} from "../../app/pfutils.ts";
import CharacterSheet from "../components/character/sheet/CharacterSheet.tsx";
import CharacterAtLevel from "../../data/v8/CharacterAtLevel.ts";
import Database from "../../data/v8/Database.ts";
import {withGlobalCharacterStore, withGlobalDatabase} from "../../data/init.tsx";
import {DatabaseContext} from "../../data/context.tsx";

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

  const database = await withGlobalDatabase();
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
  return <DatabaseContext.Provider value={database}>
      <CharacterSheet characterAtLevel={characterAtLevel} database={database} />
  </DatabaseContext.Provider>
}

import Character from "@/data/Character.ts";
import CharacterStore from "@/data/CharacterStore.ts";
import Database from "@/data/Database.ts";
import {timedAsync} from "@/app/pfutils.ts";
import {withGlobalCharacterStore, withGlobalDatabase} from "@/data/init.ts";

export interface CharacterEditLoaderData {
  character: Character;
  characterStore: CharacterStore;
  database: Database;
}

export default async function characterEditLoader({ params }: any): Promise<CharacterEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No character ID specified");
  const characterStore = await withGlobalCharacterStore();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');
  if (!character) throw new Error("Character not found");
  const database = await withGlobalDatabase();

  return {
    character: character,
    characterStore: characterStore,
    database: database,
  };
}
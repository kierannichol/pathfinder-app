import {useLoaderData} from "react-router-dom";
import {timedAsync} from "@/app/pfutils.ts";
import Character from "../../data/v8/Character.ts";
import CharacterStore from "../../data/v8/CharacterStore.ts";
import Database, {ItemDatabase} from "../../data/v8/Database.ts";
import {
  withGlobalCharacterStore,
  withGlobalDatabase,
  withGlobalEquipmentSetStore,
  withGlobalItemDatabase
} from "../../data/init.tsx";
import {
  CharacterStoreContext,
  DatabaseContext,
  EquipmentSetStoreContext,
  ItemDatabaseContext
} from "../../data/context.tsx";
import CharacterEditView from "@/view/views/CharacterEditView.tsx";
import {EquipmentSetStore} from "@/data/v8/EquipmentSetStore.ts";

interface CharacterEditLoaderData {
  character: Character;
  characterStore: CharacterStore;
  itemDatabase: ItemDatabase;
  equipmentSetStore: EquipmentSetStore;
  database: Database;
}

export async function characterEditLoader({ params }: any): Promise<CharacterEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No character ID specified");
  const characterStore = await withGlobalCharacterStore();
  const character = await timedAsync(() => characterStore.load(id), 'Loading character');
  if (!character) throw new Error("Character not found");

  const itemDatabase = await withGlobalItemDatabase();
  if (!itemDatabase) throw new Error("Unable to initialize item database");

  const equipmentSetStore = await withGlobalEquipmentSetStore();
  if (!equipmentSetStore) throw new Error("Unable to initialize equipment store");

  const database = await withGlobalDatabase();
  if (!database) throw new Error("Unable to initialize database");

  return {
    character: character,
    characterStore: characterStore,
    equipmentSetStore: equipmentSetStore,
    database: database,
    itemDatabase: itemDatabase
  };
}

export default function CharacterEditRoute() {
  const { character, characterStore, equipmentSetStore, database, itemDatabase } = useLoaderData() as CharacterEditLoaderData;
  return <DatabaseContext.Provider value={database}>
    <CharacterStoreContext.Provider value={characterStore}>
      <ItemDatabaseContext.Provider value={itemDatabase}>
        <EquipmentSetStoreContext.Provider value={equipmentSetStore}>
          <CharacterEditView loaded={character} />
        </EquipmentSetStoreContext.Provider>
      </ItemDatabaseContext.Provider>
    </CharacterStoreContext.Provider>
  </DatabaseContext.Provider>
}
import EquipmentSetEdit from "../views/EquipmentSetEdit.tsx";
import {useLoaderData} from "react-router-dom";
import {timedAsync} from "../../app/pfutils.ts";
import {EquipmentSet} from "../../data/v8/Equipment.ts";
import {EquipmentSetStore} from "../../data/v8/EquipmentSetStore.ts";
import Database, {ItemDatabase} from "../../data/v8/Database.ts";
import {withGlobalDatabase, withGlobalEquipmentSetStore} from "../../data/init.tsx";
import {DatabaseContext, EquipmentSetStoreContext, ItemDatabaseContext} from "../../data/context.tsx";

interface EquipmentSetEditLoaderData {
  equipmentSet: EquipmentSet;
  equipmentSetStore: EquipmentSetStore;
  database: Database;
  itemDatabase: ItemDatabase;
}

export async function equipmentSetEditLoader({ params }: any): Promise<EquipmentSetEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No equipment set ID specified");
  const equipmentSetStore = await withGlobalEquipmentSetStore();
  const equipmentSet = await timedAsync(() => equipmentSetStore.load(id), 'Loading Equipment Set');
  if (!equipmentSet) throw new Error("Equipment Set not found");

  const database = await withGlobalDatabase();
  if (!database) throw new Error("Unable to initialize database");

  return {
    equipmentSet: equipmentSet,
    equipmentSetStore: equipmentSetStore,
    database: database,
    itemDatabase: await database.itemDatabase()
  };
}

export default function EquipmentSetEditRoute() {
  const { equipmentSet, equipmentSetStore, database, itemDatabase } = useLoaderData() as EquipmentSetEditLoaderData;
  return <DatabaseContext.Provider value={database}>
    <ItemDatabaseContext.Provider value={itemDatabase}>
      <EquipmentSetStoreContext.Provider value={equipmentSetStore}>
        <EquipmentSetEdit loaded={equipmentSet} />
      </EquipmentSetStoreContext.Provider>
    </ItemDatabaseContext.Provider>
  </DatabaseContext.Provider>
}
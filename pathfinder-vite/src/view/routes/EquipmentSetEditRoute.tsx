import EquipmentSetEdit from "../views/EquipmentSetEdit.tsx";
import {useLoaderData} from "react-router-dom";
import {timedAsync} from "../../app/pfutils.ts";
import {EquipmentSetStoreModel} from "../model/EquipmentSetStoreModel.tsx";
import {EquipmentSetModel} from "../model/EquipmentSetModel.ts";
import {DatabaseModel, ItemDatabaseModel} from "../model/DatabaseModel.ts";
import {
  DatabaseModelContext,
  EquipmentSetStoreModelContext,
  ItemDatabaseModelContext,
  withGlobalDatabaseModel,
  withGlobalEquipmentSetStoreModel
} from "../model/ModelContext.tsx";

interface EquipmentSetEditLoaderData {
  equipmentSet: EquipmentSetModel;
  equipmentSetStore: EquipmentSetStoreModel;
  database: DatabaseModel;
  itemDatabase: ItemDatabaseModel;
}

export async function equipmentSetEditLoader({ params }: any): Promise<EquipmentSetEditLoaderData> {
  const id = params.id as string;
  if (!id) throw new Error("No equipment set ID specified");
  const equipmentSetStore = await withGlobalEquipmentSetStoreModel();
  const equipmentSet = await timedAsync(() => equipmentSetStore.load(id), 'Loading Equipment Set');
  if (!equipmentSet) throw new Error("Equipment Set not found");

  const database = await withGlobalDatabaseModel();
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
  return <DatabaseModelContext.Provider value={database}>
    <ItemDatabaseModelContext.Provider value={itemDatabase}>
      <EquipmentSetStoreModelContext.Provider value={equipmentSetStore}>
        <EquipmentSetEdit loaded={equipmentSet} />
      </EquipmentSetStoreModelContext.Provider>
    </ItemDatabaseModelContext.Provider>
  </DatabaseModelContext.Provider>
}
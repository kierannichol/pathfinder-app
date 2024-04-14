import {RequiresAuth} from "../../app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import {EquipmentSetList} from "../views/EquipmentSetList.tsx";
import {EquipmentSetStore} from "../../data/v8/EquipmentSetStore.ts";
import {withGlobalEquipmentSetStore} from "../../data/init.tsx";
import {EquipmentSetStoreContext} from "../../data/context.tsx";

interface EquipmentSetListLoaderData {
  equipmentSetStore: EquipmentSetStore;
}

export async function equipmentSetListLoader(): Promise<EquipmentSetListLoaderData> {
  const EquipmentSetStore = await withGlobalEquipmentSetStore();
  return {
    equipmentSetStore: EquipmentSetStore
  };
}

export default function EquipmentSetListRoute() {
  const { equipmentSetStore } = useLoaderData() as EquipmentSetListLoaderData;
  return <RequiresAuth>
    <EquipmentSetStoreContext.Provider value={equipmentSetStore}>
      <EquipmentSetList />
    </EquipmentSetStoreContext.Provider>
  </RequiresAuth>
}
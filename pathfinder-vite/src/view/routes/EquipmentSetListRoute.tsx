import {RequiresAuth} from "../../app/auth.tsx";
import {useLoaderData} from "react-router-dom";
import {EquipmentSetStoreModel} from "../model/EquipmentSetStoreModel.tsx";
import {EquipmentSetStoreModelContext, withGlobalEquipmentSetStoreModel} from "../model/ModelContext.tsx";
import {EquipmentSetList} from "../views/EquipmentSetList.tsx";

interface EquipmentSetListLoaderData {
  equipmentSetStore: EquipmentSetStoreModel;
}

export async function equipmentSetListLoader(): Promise<EquipmentSetListLoaderData> {
  const EquipmentSetStore = await withGlobalEquipmentSetStoreModel();
  return {
    equipmentSetStore: EquipmentSetStore
  };
}

export default function EquipmentSetListRoute() {
  const { equipmentSetStore } = useLoaderData() as EquipmentSetListLoaderData;
  return <RequiresAuth>
    <EquipmentSetStoreModelContext.Provider value={equipmentSetStore}>
      <EquipmentSetList />
    </EquipmentSetStoreModelContext.Provider>
  </RequiresAuth>
}
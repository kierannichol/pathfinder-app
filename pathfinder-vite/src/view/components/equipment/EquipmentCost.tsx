import {Currency} from "../character/Currency.tsx";
import {useItemDatabaseModel} from "../../model/ModelContext.tsx";

interface EquipmentCostProps {

}

export function EquipmentCost({}: EquipmentCostProps) {
  const database = useItemDatabaseModel();

  const cost = 0;

  return <span><Currency gp={cost} /></span>
}
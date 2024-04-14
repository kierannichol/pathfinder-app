import {Currency} from "../character/Currency.tsx";
import {useItemDatabase} from "../../../data/context.tsx";

interface EquipmentCostProps {

}

export function EquipmentCost({}: EquipmentCostProps) {
  const database = useItemDatabase();

  const cost = 0;

  return <span><Currency gp={cost} /></span>
}
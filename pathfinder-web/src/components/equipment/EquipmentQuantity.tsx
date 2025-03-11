import styles from "./EquipmentQuantity.module.css";
import {classNames} from "../../../../pathfinder-lib/utils/src/classNames.ts";
import TextInput from "@/components/base/form/TextInput.tsx";

interface EquipmentQuantityProps {
  quantity: number;
  onChange: (quantity: number) => void;
  className?: string;
}

export default function EquipmentQuantity({ quantity, onChange, className = undefined }: EquipmentQuantityProps) {
  function handleChange(value: string) {
    onChange(parseInt(value));
  }

  return <TextInput className={classNames([styles['equipment-quantity'], className])}
                    value={quantity.toString()} onChange={handleChange}/>
}
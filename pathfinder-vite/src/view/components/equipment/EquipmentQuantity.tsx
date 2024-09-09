import styles from "./EquipmentQuantity.module.css";
import TextInput from "@/view/components/controls/TextInput.tsx";
import {classNames} from "@/utils/classNames.ts";

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
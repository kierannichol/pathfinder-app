import {ItemModel} from "../../../model/ItemModel.ts";
import styles from "./ItemDescription.module.css";

interface ItemDescriptionProps {
  item: ItemModel;
}

export function ItemDescription({ item }: ItemDescriptionProps) {
  return <div>
    <p className={styles.description}>{item.description.text}</p>
    <p><strong>Source:</strong> {item.sourceId}</p>
  </div>
}
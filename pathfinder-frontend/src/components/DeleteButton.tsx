import {XLg} from "react-bootstrap-icons";
import styles from "./DeleteButton.module.scss";

interface DeleteButton {
  onClick?: () => void;
}

export default function DeleteButton({ onClick }: DeleteButton) {
  return <button onClick={onClick} className={styles.button}><XLg/></button>
}
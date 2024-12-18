import {HTMLProps} from "react";
import {classNames} from "../../../pathfinder-lib/utils/classNames.ts";
import styles from "./ErrorLabel.module.css";

interface ErrorLabelProps extends HTMLProps<HTMLDivElement> {

}

function ErrorLabel({ className, ...divProps }: ErrorLabelProps) {
  return <div className={classNames([ styles.error, className ])} {...divProps} />
}

export default ErrorLabel;
import {HTMLAttributes} from "react";
import styles from "./Label.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

interface LabelProps extends HTMLAttributes<HTMLDivElement> {

}

export default function Label({ className, children, ...divProps }: LabelProps) {
  return <div className={classNames([styles.root, className])} {...divProps}>
    {children}
  </div>
}
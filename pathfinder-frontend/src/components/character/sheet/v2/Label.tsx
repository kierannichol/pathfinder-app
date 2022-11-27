import {HTMLAttributes} from "react";
import classNames from "../../../../app/classNames";
import styles from "./Label.module.scss";

interface LabelProps extends HTMLAttributes<HTMLDivElement> {

}

export default function Label({ className, children, ...divProps }: LabelProps) {
  return <div className={classNames(styles.root, 'box', className)} {...divProps}>
    {children}
  </div>
}
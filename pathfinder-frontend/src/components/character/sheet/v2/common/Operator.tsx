import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import styles from "./Operator.module.scss";

interface OperatorProps extends HTMLAttributes<HTMLDivElement> {
}

export default function Operator({ className, children, ...divProps }: OperatorProps) {
  return <div className={classNames(styles.element, 'box', className)} {...divProps}>
    {children}
  </div>
}
import {HTMLAttributes} from "react";
import styles from "./Operator.module.scss";
import {classNames} from "@/utils/classNames.ts";

interface OperatorProps extends HTMLAttributes<HTMLDivElement> {
}

export default function Operator({ className, children, ...divProps }: OperatorProps) {
  return <div className={classNames([styles.element, 'box', className])} {...divProps}>
    {children}
  </div>
}
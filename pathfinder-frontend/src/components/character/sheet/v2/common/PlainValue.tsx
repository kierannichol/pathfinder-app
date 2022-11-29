import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import styles from "./PlainValue.module.scss";

interface PlainValueProps extends HTMLAttributes<HTMLDivElement> {
}

export default function PlainValue({ className, children, ...divProps }: PlainValueProps) {
  return <div className={classNames(styles.element, 'box', className)} {...divProps}>
    {children}
  </div>
}
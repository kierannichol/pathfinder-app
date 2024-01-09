import {HTMLAttributes} from "react";
import styles from "./PlainValue.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

interface PlainValueProps extends HTMLAttributes<HTMLDivElement> {
}

export default function PlainValue({ className, children, ...divProps }: PlainValueProps) {
  return <div className={classNames([styles.element, 'box', className])} {...divProps}>
    {children}
  </div>
}
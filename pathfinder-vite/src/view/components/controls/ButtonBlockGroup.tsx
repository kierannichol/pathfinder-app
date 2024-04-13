import React, {ReactNode} from "react";
import styles from "./ButtonBlock.module.scss";
import {classNames} from "../../../utils/classNames.ts";

interface ButtonBlockGroupProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode
}

export function ButtonBlockGroup({ children, className, ...divProps }: ButtonBlockGroupProps) {
  return <div {...divProps} className={classNames([styles.group, className])}>{children}</div>
}
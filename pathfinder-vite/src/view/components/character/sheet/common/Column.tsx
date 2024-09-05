import React from "react";
import {classNames} from "@/utils/classNames.ts";
import styles from "./Column.module.css";

interface ColumnProps {
  className?: string;
  children?: React.ReactNode;
}

export function Column({ className, children }: ColumnProps) {
  return <div className={classNames([styles.column, className])}>{children}</div>
}
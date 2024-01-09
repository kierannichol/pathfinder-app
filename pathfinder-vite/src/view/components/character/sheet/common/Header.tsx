import {HTMLAttributes} from "react";
import styles from "./Header.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export default function Header({ className, children, ...divProps }: HeaderProps) {
  return <div className={classNames([styles.root, className])} {...divProps}>
    {children}
  </div>
}
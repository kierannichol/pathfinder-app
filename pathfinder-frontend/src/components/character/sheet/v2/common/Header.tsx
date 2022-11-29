import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import styles from "./Header.module.scss";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export default function Header({ className, children, ...divProps }: HeaderProps) {
  return <div className={classNames(styles.root, 'box', className)} {...divProps}>
    {children}
  </div>
}
import styles from "./VerticalLayout.module.css";
import {HTMLAttributes} from "react";
import {classNames} from "@/utils/classNames.ts";

interface VerticalLayoutProps extends HTMLAttributes<HTMLDivElement> {

}

export default function VerticalLayout({ children, className, ...divProps }: VerticalLayoutProps) {
  return <div className={classNames([styles['vertical-layout'], className])} {...divProps}>
    {children}
  </div>
}
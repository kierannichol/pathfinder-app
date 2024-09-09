import styles from "./HorizontalLayout.module.css";
import {HTMLAttributes} from "react";
import {classNames} from "@/utils/classNames.ts";

interface HorizontalLayoutProps extends HTMLAttributes<HTMLDivElement> {

}

export default function HorizontalLayout({ children, className, ...divProps }: HorizontalLayoutProps) {
  return <div className={classNames([styles['horizontal-layout'], className])} {...divProps}>
    {children}
  </div>
}
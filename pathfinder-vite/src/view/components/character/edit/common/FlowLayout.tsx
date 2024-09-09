import styles from "./FlowLayout.module.css";
import {HTMLAttributes} from "react";
import {classNames} from "@/utils/classNames.ts";

interface FlowLayoutProps extends HTMLAttributes<HTMLDivElement> {

}

export default function FlowLayout({ children, className, ...divProps }: FlowLayoutProps) {
  return <div className={classNames([styles['flow-layout'], className])} {...divProps}>
    {children}
  </div>
}
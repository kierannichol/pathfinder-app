import React, {HTMLAttributes} from "react";
import classNames from "../../app/classNames";
import styles from "./PrintablePage.module.scss";

interface PrintablePageProps extends HTMLAttributes<HTMLDivElement> {
}

export default function PrintablePage({ className, children, ...divProps }: PrintablePageProps) {
  return <div className={classNames(styles.page, className)} {...divProps}>
    {children}
  </div>
}
import styles from "./PrintablePage.module.scss";
import {HTMLAttributes} from "react";
import {classNames} from "../../utils/classNames";

interface PrintablePageProps extends HTMLAttributes<HTMLDivElement> {
}

export default function PrintablePage({ className, children, ...divProps }: PrintablePageProps) {
  return <div className={classNames([styles.page, className])} {...divProps}>
    {children}
  </div>
}
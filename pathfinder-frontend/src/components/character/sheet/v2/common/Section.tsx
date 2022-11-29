import {DetailedHTMLProps, HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import styles from "./Section.module.scss";

const Section = ({ className, children, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={classNames(styles.section, className)} {...divProps}>
    {children}
  </div>
}

Section.Row = ({className, children, ...divProps}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={classNames('hstack', styles.row, className)} {...divProps}>
    {children}
  </div>
}

Section.Column = ({className, children, ...divProps}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={classNames('vstack', styles.col, className)} {...divProps}>
    {children}
  </div>
}

export default Section;
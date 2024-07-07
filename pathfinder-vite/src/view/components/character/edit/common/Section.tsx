import {DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./Section.module.css";
import {classNames} from "@/utils/classNames.ts";

interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
}

const Section = ({ className, children, title = undefined, ...divProps }: SectionProps) => {
  return <div className={classNames([styles.section, className])} {...divProps}>
    {title && <header>{title}</header>}
    {children}
  </div>
}

Section.Row = ({className, children, ...divProps}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={classNames(['hstack', styles.row, className])} {...divProps}>
    {children}
  </div>
}

Section.Column = ({className, children, ...divProps}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return <div className={classNames(['vstack', styles.col, className])} {...divProps}>
    {children}
  </div>
}

export default Section;
import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import Section from "../common/Section";
import UnderlinedValue from "../common/UnderlinedValue";
import styles from "./LanguagesSection.module.scss";

export default function LanguagesSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames("no-gap", styles.section, className)} {...divProps}>
    <div className={classNames("title", styles.title)}>Languages:</div>
    <UnderlinedValue className={styles.value} />
    <UnderlinedValue className={styles.value} />
    <UnderlinedValue className={styles.value} />
  </Section>
}
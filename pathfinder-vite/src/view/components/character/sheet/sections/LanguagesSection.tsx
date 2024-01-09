import {HTMLAttributes} from "react";
import Section from "../common/Section.tsx";
import UnderlinedValue from "../common/UnderlinedValue.tsx";
import styles from "./LanguagesSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function LanguagesSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(["no-gap", styles.section, className])} {...divProps}>
    <div className={classNames(["title", styles.title])}>Languages:</div>
    <UnderlinedValue className={styles.value} />
    <UnderlinedValue className={styles.value} />
    <UnderlinedValue className={styles.value} />
  </Section>
}
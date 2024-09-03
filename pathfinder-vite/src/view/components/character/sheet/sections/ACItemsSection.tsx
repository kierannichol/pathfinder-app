import {classNames} from "@/utils/classNames.ts";
import Section from "@/view/components/character/sheet/common/Section.tsx";
import {DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./ACItemsSection.module.css";

export default function ACItemsSection({ className, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>

    <div className={styles.row}>
        <div className={styles.title}>AC Items</div>
        <div className={styles.title}>Bonus</div>
        <div className={styles.title}>Type</div>
        <div className={styles.title}>Check Penalty</div>
        <div className={styles.title}>Spell Failure</div>
        <div className={styles.title}>Weight</div>
        <div className={styles.title}>Properties</div>
    </div>

    <div className={styles.values}>
    {[1, 2, 3, 4, 5].map(index =>
        <div key={`ac-item-${index}`} className={styles.row}>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
          <div className={styles.value}></div>
        </div>)}
    </div>

  </Section>
}
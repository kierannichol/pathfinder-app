import {DetailedHTMLProps, HTMLAttributes} from "react";
import Section from "../common/Section.tsx";
import styles from "./WeaponSection.module.scss";
import {classNames} from "../../../../../utils/classNames.ts";

export default function WeaponSection({ className, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <Section className={classNames([styles.section, className])} {...divProps}>

    <div className={styles.row}>
      <div className={styles.element}>
        <div className={styles.title}>Weapon</div>
        <div className={classNames([styles.value, styles.leftValue])}>
        </div>
      </div>

      <div className={styles.element}>
        <div className={styles.title}>Attack Bonus</div>
        <div className={styles.value}>
        </div>
      </div>

      <div className={styles.element}>
        <div className={styles.title}>Critical</div>
        <div className={styles.value}>
        </div>
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.element}>
        <div className={styles.title}>Type</div>
        <div className={classNames([styles.value, styles.leftValue])}>
        </div>
      </div>
      <div className={styles.element}>
        <div className={styles.title}>Range</div>
        <div className={styles.value}>
        </div>
      </div>
      <div className={styles.element}>
        <div className={styles.title}>Ammunition</div>
        <div className={styles.value}>
        </div>
      </div>
      <div className={classNames([styles.element, styles.damage])}>
        <div className={styles.title}>Damage</div>
        <div className={styles.value}>
        </div>
      </div>
    </div>

  </Section>
}
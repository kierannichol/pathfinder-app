import {HTMLAttributes} from "react";
import classNames from "../../../../../app/classNames";
import BoxedValue from "../BoxedValue";
import Label from "../Label";
import Section from "../Section";
import styles from "./ArmorSection.module.scss";

export default function ArmorSection({ className, ...divProps }: HTMLAttributes<HTMLDivElement>) {
  return <Section className={classNames(styles.section, className)} {...divProps}>
    <Section.Column>
      <Section.Row>
        <Label className={styles.label}>AC</Label>
        <Section.Row className="half-gap">
          <BoxedValue className={styles.value}>
            10
          </BoxedValue>
          <div className="text-nowrap">= <b>10</b> +</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
          <div>+</div>
          <BoxedValue className={styles.value}/>
        </Section.Row>
      </Section.Row>
      <Section.Row>
        <Label className={styles.label}>Touch</Label>
        <BoxedValue className={styles.touchValue}/>
        <Label className={styles.label}>Flat-Footed</Label>
        <BoxedValue className={styles.flatFootedValue}/>
        <BoxedValue className={styles.modifiersValue} label="Modifiers"/>
      </Section.Row>
    </Section.Column>
  </Section>
}
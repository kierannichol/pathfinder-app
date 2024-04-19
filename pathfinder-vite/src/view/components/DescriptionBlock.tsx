import Description from "@/data/Description.ts";
import styles from "./DescriptionBlock.module.css";

interface DescriptionBlockProps {
  description: Description|undefined;
}

export function DescriptionBlock({ description }: DescriptionBlockProps) {
  if (!description) return undefined;

  return <div>
    <p className={styles.text}>{description.text}</p>
    {Object.entries(description.sections).map(([sectionLabel, sectionText]) =>
        <div key={sectionLabel}>
          <b>{sectionLabel}</b>
          <div className={styles.text}>{sectionText}</div>
        </div>)}
  </div>;
}
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import Description from "@/data/Description.ts";
import {useMemo} from "react";
import styles from "./DescriptionBlock.module.css";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {useDatabase} from "@/data/context.ts";

interface DescriptionBlockProps {
  feature?: FeatureSummary;
  description?: Description;
  characterAtLevel?: CharacterAtLevel;
}

function DescriptionBlock({ feature, description, characterAtLevel }: DescriptionBlockProps) {
  const database = useDatabase();

  const prerequisitesBlock = useMemo(() => {
    if (!feature || !characterAtLevel) return undefined;
    const entries = feature.checkPrerequisites(characterAtLevel, database).entries;
    if (entries.length === 0) return undefined;
    return <div className={styles.prerequisitesBlock}>
      <label>Prerequisites</label>
      <code className={styles.formula}>{feature.enabledFormula}</code>
      {entries.map((entry, index) => {
        return <div
            key={index}
            className={styles.prerequisite + ' ' + (entry.valid ? styles.valid : styles.invalid)}>{entry.description}</div>
      })}
    </div>;
  }, [feature, characterAtLevel, database]);

  return <div className={styles.description}>
    {prerequisitesBlock}
    {description?.text && <div className={styles.text}>{description?.text}</div>}
    {Object.keys(description?.sections ?? {}).map(key => {
      return <div key={key}>
        <label>{key}</label>
        <div>{description?.sections[key]}</div>
      </div>
    })}
    {feature?.source && <div><label>Source</label> {feature?.source?.title} ({feature?.source?.sourceCode})</div>}
  </div>
}

export default DescriptionBlock;
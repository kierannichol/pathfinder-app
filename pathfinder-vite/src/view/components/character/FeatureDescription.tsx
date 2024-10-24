import React, {ReactNode, useMemo} from "react";
import styles from "./EntityDescription.module.scss";
import Description from "../../../data/Description.ts";
import {Feature, ResolvedFeature} from "@/data/v8/Feature.ts";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {FeatureSummary} from "@/data/v8/FeatureSummary.ts";

interface FeatureDescriptionProps {
  feature: ResolvedFeature|Feature|FeatureSummary;
  description?: Description;
  characterAtLevel?: CharacterAtLevel;
  includeSource?: boolean;
}

export default function FeatureDescription({ feature, description, includeSource = true }: FeatureDescriptionProps) {
  description ??= 'description' in feature ? feature.description : undefined;
  description ??= Description.empty();

  const descriptionTextElement = useMemo(() => {
    if (!description || description.text === '') {
      return <></>;
    }
    let element: ReactNode = splitIntoParagraphs(description.text);
    if (!description.sections || Object.keys(description.sections).length > 0) {
      element = <i>{element}</i>
    }

    return <span>{element}</span>;
  }, [description]);

  return (
      <div>
        <span className={styles.p}>{descriptionTextElement}</span>
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><span className={styles.sectionLabel}>{sectionLabel}:</span> <span className={styles.p}>{description?.sections[sectionLabel]}</span></p>)}
        {(includeSource && feature.source) && <div><i>Source: {feature.source.title}</i></div>}
      </div>);
}

function splitIntoParagraphs(text: string): ReactNode[] {
  return text.split(/\n+/).map((paragraphText, i) => <p key={i}>{paragraphText}</p>);
}
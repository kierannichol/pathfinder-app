import React, {ReactNode, useMemo} from "react";
import styles from "./EntityDescription.module.scss";
import {FeatureModel, FeatureSummaryModel} from "../../model/FeatureModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import Description from "../../../data/Description.ts";

interface FeatureDescriptionProps {
  feature: FeatureModel|FeatureSummaryModel;
  description?: Description;
  characterAtLevel?: CharacterAtLevelModel;
}

export default function FeatureDescription({ feature, description}: FeatureDescriptionProps) {
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
      </div>);
}

function splitIntoParagraphs(text: string): ReactNode[] {
  return text.split(/\n+/).map((paragraphText, i) => <p key={i}>{paragraphText}</p>);
}
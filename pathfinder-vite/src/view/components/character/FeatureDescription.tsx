import {Formula, Resolvable} from "@kierannichol/formula-js";
import React, {ReactNode, useMemo} from "react";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList.tsx";
import Description from "../../../data/model/Description.ts";
import Feature, {FeatureSummary} from "../../../data/model/Feature.ts";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import FeatureModification from "../../../data/model/FeatureModification.ts";
import FeatureModificationInfo from "./FeatureModificationInfo.tsx";

interface FeatureDescriptionProps {
  feature: Feature|FeatureSummary;
  description?: Description;
  featureModifications?: FeatureModification[];
  characterAtLevel?: CharacterAtLevel;
}

export default function FeatureDescription({ feature, description, featureModifications, characterAtLevel}: FeatureDescriptionProps) {

  description ??= 'description' in feature ? feature.description : undefined;
  description ??= Description.empty();

  featureModifications ??= 'featureModifications' in feature ? feature.featureModifications : [];

  const isValid = useMemo(() => (feature && characterAtLevel && feature.isEnabled(characterAtLevel)),
      [feature, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

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
        <code>{feature.id}</code>
        {showPrerequisiteList && characterAtLevel !== undefined && !isValid && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList featureId={feature.id} formula={Formula.parse(feature.enabledFormula) ?? Resolvable.just(true)} maxStacks={feature.maxStacks} characterAtLevel={characterAtLevel} />
        </div>}
        <span className={styles.p}>{descriptionTextElement}</span>
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><span className={styles.sectionLabel}>{sectionLabel}:</span> <span className={styles.p}>{description?.sections[sectionLabel]}</span></p>)}
        {featureModifications.map(featureModification =>
            <FeatureModificationInfo key={`mods-${featureModification.targetFeatureId}`} featureModification={featureModification}/>)}
      </div>);
}

function splitIntoParagraphs(text: string): ReactNode[] {
  return text.split(/\n+/).map((paragraphText, i) => <p key={i}>{paragraphText}</p>);
}
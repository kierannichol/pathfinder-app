import {Resolvable} from "@kierannichol/formula-js";
import React, {ReactNode, useMemo} from "react";
import Description from "../../../core/Description";
import CharacterAtLevel from "../../../v7/CharacterAtLevel";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface FeatureDescriptionProps {
  featureId: string,
  description: Description;
  prerequisiteFormula?: Resolvable;
  maxStacks: number|null,
  characterAtLevel?: CharacterAtLevel;
}

export default function FeatureDescription({ featureId, description, prerequisiteFormula, maxStacks, characterAtLevel}: FeatureDescriptionProps) {

  const database = usePathfinderDatabaseV7();
  const feature = database.feature(featureId);
  const isValid = useMemo(() => (feature && characterAtLevel && feature.isEnabled(characterAtLevel)),
      [prerequisiteFormula, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  const descriptionTextElement = useMemo(() => {
    if (!description || description.text === '') {
      return <></>;
    }
    let element: ReactNode = description.text;
    if (!description.sections || Object.keys(description.sections).length > 0) {
      element = <i>{element}</i>
    }

    return <p>{element}</p>;
  }, [description]);

  return (
      <div>
        {showPrerequisiteList && characterAtLevel !== undefined && !isValid && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList featureId={featureId} formula={prerequisiteFormula ?? Resolvable.just(true)} maxStacks={maxStacks} characterAtLevel={characterAtLevel} />
        </div>}
        {descriptionTextElement}
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><b>{sectionLabel}:</b> {description.sections[sectionLabel]}</p>)}
      </div>);
}
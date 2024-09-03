import React, {useMemo} from "react";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList.tsx";
import Description from "../../../data/Description.ts";
import FeatureDescription from "./FeatureDescription.tsx";
import {useDatabase} from "../../../data/context.tsx";
import {Feature} from "../../../data/v8/Feature.ts";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import {FeatureSummary} from "../../../data/v8/FeatureSummary.ts";
import {PrerequisiteValidation} from "../../../data/v8/PrerequisiteValidation.ts";

interface SelectionFeatureDescriptionProps {
  feature: Feature|FeatureSummary;
  description?: Description;
  characterAtLevel?: CharacterAtLevel;
}

export default function SelectionFeatureDescription({ feature, description, characterAtLevel}: SelectionFeatureDescriptionProps) {
  const database = useDatabase();

  const validation = useMemo(() => {
    if (!feature || !characterAtLevel) return PrerequisiteValidation.Empty;
    return feature.checkPrerequisites(characterAtLevel, database);
  }, [feature, characterAtLevel]);

  const isValid = useMemo(() => validation.isValid(),
      [validation]);

  const showPrerequisiteList = !validation.isEmpty();//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  if (description === undefined || (description.text === '' && description.sections === {})) {
    return <></>
  }

  return <div>
      {showPrerequisiteList && characterAtLevel !== undefined &&
          <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
            <div className={styles.prerequisiteHeader}>Prerequisites</div>
            <PrerequisiteList validation={validation} formula={feature.enabledFormula}/>
          </div>}
      <FeatureDescription feature={feature} description={description}/>
    </div>
}
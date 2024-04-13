import React, {useMemo} from "react";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList.tsx";
import {FeatureModel, FeatureSummaryModel} from "../../model/FeatureModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import Description from "../../../data/Description.ts";
import {PrerequisiteValidationModel} from "../../model/PrerequisiteValidationModel.ts";
import {useDatabaseModel} from "../../model/ModelContext.tsx";
import FeatureDescription from "./FeatureDescription.tsx";

interface SelectionFeatureDescriptionProps {
  feature: FeatureModel|FeatureSummaryModel;
  description?: Description;
  characterAtLevel?: CharacterAtLevelModel;
}

export default function SelectionFeatureDescription({ feature, description, characterAtLevel}: SelectionFeatureDescriptionProps) {
  const database = useDatabaseModel();

  const validation = useMemo(() => {
    if (!feature || !characterAtLevel) return PrerequisiteValidationModel.Empty;
    return feature.checkPrerequisites(characterAtLevel, database);
  }, [feature, characterAtLevel]);

  const isValid = useMemo(() => validation.isValid(),
      [validation]);

  const showPrerequisiteList = !validation.isEmpty();//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  return <div>
      {showPrerequisiteList && characterAtLevel !== undefined &&
          <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
            <div className={styles.prerequisiteHeader}>Prerequisites</div>
            <PrerequisiteList validation={validation} formula={feature.enabledFormula}/>
          </div>}
      <FeatureDescription feature={feature} description={description}/>
    </div>
}
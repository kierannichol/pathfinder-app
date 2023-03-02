import React, {useMemo} from "react";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import Description from "../../../core/Description";
import {Formula} from "../../../logic/Formula";
import Resolvable from "../../../logic/Resolvable";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface EntityDescriptionProps {
  description: Description;
  prerequisiteFormula?: Resolvable;
  characterAtLevel?: CharacterAtLevel;
}

export default function EntityDescription({ description, prerequisiteFormula, characterAtLevel}: EntityDescriptionProps) {

  const isValid = useMemo(() => (!prerequisiteFormula || !characterAtLevel || Formula.parse(prerequisiteFormula).resolve(characterAtLevel)),
      [prerequisiteFormula, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  return (
      <div>
        {showPrerequisiteList && prerequisiteFormula !== undefined && prerequisiteFormula.asFormula() !== '' && prerequisiteFormula.asFormula() !== 'true' && characterAtLevel !== undefined && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={prerequisiteFormula} characterAtLevel={characterAtLevel} />
        </div>}
        {description.text !== '' && <p><i>{description.text}</i></p>}
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><b>{sectionLabel}:</b> {description.sections[sectionLabel]}</p>)}
      </div>);
}
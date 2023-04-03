import React, {ReactNode, useMemo} from "react";
import CharacterAtLevel from "../../../core/CharacterAtLevel";
import Description from "../../../core/Description";
import Resolvable from "../../../logic/Resolvable";
import styles from "./EntityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface EntityDescriptionProps {
  description: Description;
  prerequisiteFormula?: Resolvable;
  characterAtLevel?: CharacterAtLevel;
}

export default function EntityDescription({ description, prerequisiteFormula, characterAtLevel}: EntityDescriptionProps) {

  const isValid = useMemo(() => (!prerequisiteFormula || !characterAtLevel || prerequisiteFormula.resolve(characterAtLevel)),
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
        {showPrerequisiteList && prerequisiteFormula !== undefined && prerequisiteFormula.asFormula() !== '' && prerequisiteFormula.asFormula() !== 'true' && characterAtLevel !== undefined && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={prerequisiteFormula} characterAtLevel={characterAtLevel} />
        </div>}
        {descriptionTextElement}
        {Object.keys(description.sections).map(sectionLabel =>
            <p key={sectionLabel}><b>{sectionLabel}:</b> {description.sections[sectionLabel]}</p>)}
      </div>);
}
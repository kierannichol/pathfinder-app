import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import CharacterAtLevel from "../../../v3/model/CharacterAtLevel";
import {Modification} from "../../../v3/model/Modification";
import styles from "./AbilityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface OptionDescriptionProps {
  modification: Modification;
  characterAtLevel: CharacterAtLevel;
}

export default function ModificationDescription({ modification, characterAtLevel }: OptionDescriptionProps) {

  const description = useMemo(() => (modification && Expression.parse(modification.description).resolve(characterAtLevel)?.asText()) ?? modification?.description, [modification, characterAtLevel]);
  const benefit = useMemo(() => (modification && Expression.parse(modification.benefit).resolve(characterAtLevel)?.asText()) ?? modification?.benefit, [modification, characterAtLevel]);
  const normal = useMemo(() => (modification && Expression.parse(modification.normal).resolve(characterAtLevel)?.asText()) ?? modification?.normal, [modification, characterAtLevel]);
  const special = useMemo(() => (modification && Expression.parse(modification.special).resolve(characterAtLevel)?.asText()) ?? modification?.special, [modification, characterAtLevel]);
  const note = useMemo(() => (modification && Expression.parse(modification.note).resolve(characterAtLevel)?.asText()) ?? modification?.note, [modification, characterAtLevel]);

  const isValid = useMemo(() => (modification && modification.isValidFor(characterAtLevel)), [modification, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  return (
      <div>
        {showPrerequisiteList && modification.prerequisiteFormula !== '' && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={modification.prerequisiteFormula} characterAtLevel={characterAtLevel} />
        </div>}
        {description !== '' && <p><i>{description}</i></p>}
        {benefit !== '' && <p><b>Benefit:</b> {benefit}</p>}
        {normal !== '' && <p><b>Normal:</b> {normal}</p>}
        {special !== '' && <p><b>Special:</b> {special}</p>}
        {note !== '' && <p><b>Note:</b> {note}</p>}
      </div>);
}
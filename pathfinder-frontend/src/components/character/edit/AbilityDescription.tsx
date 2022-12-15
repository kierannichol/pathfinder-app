import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import CharacterAtLevel from "../../../v3/model/CharacterAtLevel";
import {Modification} from "../../../v3/model/Modification";
import styles from "./AbilityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface AbilityDescriptionProps {
  ability: Modification;
  characterAtLevel: CharacterAtLevel;
}

export default function AbilityDescription({ ability, characterAtLevel}: AbilityDescriptionProps) {

  const description = useMemo(() => (ability && Expression.parse(ability.description).resolve(characterAtLevel)?.asText()) ?? ability?.description, [ability, characterAtLevel]);
  const isValid = useMemo(() => (ability && ability.isValidFor(characterAtLevel)), [ability, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !ability.isValidFor(characterAtLevel), [ability, characterAtLevel]);


  return (
      <div>
        {showPrerequisiteList && ability.prerequisiteFormula && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={ability.prerequisiteFormula} characterAtLevel={characterAtLevel} />
        </div>}
        {description !== '' && <p><i>{description}</i></p>}
      </div>);
}
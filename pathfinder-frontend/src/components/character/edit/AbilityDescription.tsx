import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import {Ability} from "../../../model/character/Ability";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import styles from "./AbilityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface AbilityDescriptionProps {
  ability: Ability;
  characterAtLevel: CharacterAtLevel;
}

export default function AbilityDescription({ ability, characterAtLevel}: AbilityDescriptionProps) {

  const description = useMemo(() => (ability && Expression.parse(ability.description).resolve(characterAtLevel)?.asText()) ?? ability?.description, [ability, characterAtLevel]);
  const isValid = useMemo(() => (ability && ability.isValidFor(characterAtLevel)), [ability, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !ability.isValidFor(characterAtLevel), [ability, characterAtLevel]);


  return (
      <div>
        {showPrerequisiteList && ability.prerequisites_formula && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={ability.prerequisites_formula} characterAtLevel={characterAtLevel} />
        </div>}
        {description !== '' && <p><i>{description}</i></p>}
      </div>);
}
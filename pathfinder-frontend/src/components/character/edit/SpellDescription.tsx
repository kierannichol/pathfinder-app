import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Spell} from "../../../model/character/Spell";
import PrerequisiteList from "./PrerequisiteList";
import styles from "./SpellDescription.module.scss";

interface SpellDescriptionProps {
  spell: Spell;
  characterAtLevel: CharacterAtLevel;
}

export default function SpellDescription({ spell, characterAtLevel}: SpellDescriptionProps) {

  const description = useMemo(() => (spell && Expression.parse(spell.description).resolve(characterAtLevel)?.asText()) ?? spell?.description, [spell, characterAtLevel]);
  const isValid = useMemo(() => (spell && spell.isValidFor(characterAtLevel)), [spell, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !spell.isValidFor(characterAtLevel), [spell, characterAtLevel]);

  return (
      <div>
        {showPrerequisiteList && spell.prerequisites_formula && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={spell.prerequisites_formula} characterAtLevel={characterAtLevel} />
        </div>}
        {description !== '' && <p><i>{description}</i></p>}
        {spell.effect !== '' && <p><b>Effect: </b>{spell.effect}</p>}
      </div>);
}
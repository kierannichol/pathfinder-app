import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import CharacterAtLevel from "../../../v3/model/CharacterAtLevel";
import {Modification} from "../../../v3/model/Modification";
import styles from "./AbilityDescription.module.scss";
import PrerequisiteList from "./PrerequisiteList";

interface FeatDescriptionProps {
  feat: Modification;
  characterAtLevel: CharacterAtLevel;
}

export default function FeatDescription({ feat, characterAtLevel}: FeatDescriptionProps) {

  const description = useMemo(() => (feat && Expression.parse(feat.description).resolve(characterAtLevel)?.asText()) ?? feat?.description, [feat, characterAtLevel]);
  // const benefit = useMemo(() => (feat && Expression.parse(feat.benefit).resolve(characterAtLevel)?.asText()) ?? feat?.benefit, [feat, characterAtLevel]);
  // const normal = useMemo(() => (feat && Expression.parse(feat.normal).resolve(characterAtLevel)?.asText()) ?? feat?.normal, [feat, characterAtLevel]);
  // const special = useMemo(() => (feat && Expression.parse(feat.special).resolve(characterAtLevel)?.asText()) ?? feat?.special, [feat, characterAtLevel]);
  // const note = useMemo(() => (feat && Expression.parse(feat.note).resolve(characterAtLevel)?.asText()) ?? feat?.note, [feat, characterAtLevel]);

  const isValid = useMemo(() => (feat && feat.isValidFor(characterAtLevel)), [feat, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  return (
      <div>
        {showPrerequisiteList && feat.prerequisiteFormula !== '' && <div className={isValid ? styles.prerequisitesValid : styles.prerequisitesInvalid}>
          <div className={styles.prerequisiteHeader}>Prerequisites</div>
          <PrerequisiteList formula={feat.prerequisiteFormula} characterAtLevel={characterAtLevel} />
        </div>}
        {description !== '' && <p><i>{description}</i></p>}
        {/*{benefit !== '' && <p><b>Benefit:</b> {benefit}</p>}*/}
        {/*{normal !== '' && <p><b>Normal:</b> {normal}</p>}*/}
        {/*{special !== '' && <p><b>Special:</b> {special}</p>}*/}
        {/*{note !== '' && <p><b>Note:</b> {note}</p>}*/}
      </div>);
}
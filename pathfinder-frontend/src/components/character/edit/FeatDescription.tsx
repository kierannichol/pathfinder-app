import React, {useMemo} from "react";
import Expression from "../../../logic/Expression";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import PrerequisiteList from "./PrerequisiteList";

interface FeatDescriptionProps {
  feat: Feat;
  characterAtLevel: CharacterAtLevel;
}

export default function FeatDescription({ feat, characterAtLevel}: FeatDescriptionProps) {

  const description = useMemo(() => (feat && Expression.parse(feat.description).resolve(characterAtLevel)?.asText()) ?? feat?.description, [feat, characterAtLevel]);
  const prerequisites = useMemo(() => (feat && Expression.parse(feat.prerequisites).resolve(characterAtLevel)?.asText()) ?? feat?.prerequisites, [feat, characterAtLevel]);
  const benefit = useMemo(() => (feat && Expression.parse(feat.benefit).resolve(characterAtLevel)?.asText()) ?? feat?.benefit, [feat, characterAtLevel]);
  const normal = useMemo(() => (feat && Expression.parse(feat.normal).resolve(characterAtLevel)?.asText()) ?? feat?.normal, [feat, characterAtLevel]);
  const special = useMemo(() => (feat && Expression.parse(feat.special).resolve(characterAtLevel)?.asText()) ?? feat?.special, [feat, characterAtLevel]);
  const note = useMemo(() => (feat && Expression.parse(feat.note).resolve(characterAtLevel)?.asText()) ?? feat?.note, [feat, characterAtLevel]);

  const showPrerequisiteList = true;//useMemo(() => !feat.isValidFor(characterAtLevel), [feat, characterAtLevel]);

  return (
      <div>
        {description !== '' && <p><i>{description}</i></p>}
        {prerequisites !== '' && <p><b>Prerequisites:</b> {prerequisites}</p>}
        {showPrerequisiteList && <p><PrerequisiteList abilitySummary={feat} characterAtLevel={characterAtLevel} /></p>}
        {/*{prerequisitesFormulaText !== '' && <p><b>Prerequisite Formula:</b> <code>{prerequisitesFormulaText}</code></p>}*/}
        {benefit !== '' && <p><b>Benefit:</b> {benefit}</p>}
        {normal !== '' && <p><b>Normal:</b> {normal}</p>}
        {special !== '' && <p><b>Special:</b> {special}</p>}
        {note !== '' && <p><b>Note:</b> {note}</p>}
      </div>);
}
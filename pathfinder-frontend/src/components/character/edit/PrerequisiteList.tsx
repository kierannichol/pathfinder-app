import {faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useMemo} from "react";
import {PathfinderDatabase, usePathfinderDatabase} from "../../../database/v2/PathfinderDatabase";
import {Formula} from "../../../logic/Formula";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";

interface PrerequisiteListProps {
  featId: string;
  formulaText: string;
  characterAtLevel: CharacterAtLevel;
}

export default function PrerequisiteList({ featId, formulaText, characterAtLevel } : PrerequisiteListProps) {
  const database = usePathfinderDatabase();
  const lines = useMemo(() => {
    return formulaText.split('AND')
    .map(clause => clause.trim())
    .filter(clause => clause !== '!@' + featId)
    .map(clause => {
      const resolved = Formula.parse(clause).resolve(characterAtLevel);
      let statusMark = <FontAwesomeIcon style={{ color: 'green' }} icon={faCircleCheck} />;
      if (!(resolved?.asBoolean() ?? true)) {
        statusMark = <FontAwesomeIcon style={{ color: 'red' }} icon={faCircleXmark} />
      }
      return <>{statusMark} {formatPrerequisiteClause(clause, database, characterAtLevel)} <b>({resolved?.asNumber()})</b></>;
    });
  }, [formulaText, characterAtLevel]);

  return (<div>
    {lines.map(line => <div>{line}</div>)}
  </div>);
}

function formatPrerequisiteClause(clause: string, database: PathfinderDatabase, characterAtLevel: CharacterAtLevel): JSX.Element {
  const matches = clause.match(/\((.*) OR (.*)\)/);
  if (matches !== null) {
    return <span>{matches.slice(1).map(group => <>{formatPrerequisiteClause(group, database, characterAtLevel)}</>).reduce((a, b) => <>{a} <i>or</i> {b}</>)}</span>;
  }

  if (clause.startsWith("!")) {
    return <>{'Not ' + formatPrerequisiteClause(clause.substring(1), database, characterAtLevel)}</>;
  }
  if (clause.startsWith("@feat:")) {
    const featId = clause.substring(1);
    const featName = database.getAttribute(featId)?.name ?? featId;
    return <><b>{featName}</b> feat</>;
  }
  if (clause.startsWith("@ability:")) {
    const abilityId = clause.substring(1);
    const abilityName = database.getAttribute(abilityId)?.name ?? abilityId;
    return <><b>{abilityName}</b> ability</>;
  }
  if (clause.startsWith("@bab")) {
    return formatPrerequisiteClause("Base Attack Bonus +" + clause.substring("@bab >= ".length), database, characterAtLevel);
  }
  if (clause.startsWith("@str_score >= ")) {
    return formatPrerequisiteClause("Str " + clause.substring("@str_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@dex_score >= ")) {
    return formatPrerequisiteClause("Dex " + clause.substring("@dex_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@con_score >= ")) {
    return formatPrerequisiteClause("Con " + clause.substring("@con_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@int_score >= ")) {
    return formatPrerequisiteClause("Int " + clause.substring("@int_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@wis_score >= ")) {
    return formatPrerequisiteClause("Wis " + clause.substring("@wis_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@cha_score >= ")) {
    return formatPrerequisiteClause("Cha " + clause.substring("@cha_score >=  ".length-1), database, characterAtLevel);
  }
  if (clause.startsWith("@caster_level >= ")) {
    return formatPrerequisiteClause("Caster Level " + clause.substring("@caster_level >= ".length-1), database, characterAtLevel);
  }
  return <>{clause}</>;
}
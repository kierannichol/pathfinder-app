import {useEffect, useState} from "react";
import {v2} from "../../../compiled";
import {useAbilityDatabase} from "../../../database/v2/AbilityDatabase";
import {Ability, AbilitySummary} from "../../../model/character/Ability";
import FeatureBadge from "../base/FeatureBadge";
import "./AbilityBadge.css";

interface AbilityBadgeProps {
  abilityId: string;
}

export default function AbilityBadge({ abilityId }: AbilityBadgeProps) {
  const [ abilityLabel, setAbilityLabel ] = useState('...');

  const abilityDatabase = useAbilityDatabase();
  useEffect(() => {
    abilityDatabase.load(abilityId).then(ability => setAbilityLabel(formatAbilityLabel(ability) ?? `??${abilityId}??`));
  }, [abilityId]);

  return <FeatureBadge text={abilityLabel} type={'ability'} choice={false} />
}

function formatAbilityLabel(ability: AbilitySummary|undefined): string | undefined {
  if (ability === undefined) {
    return undefined;
  }
  return `${ability.name}${formatAbilityType(ability.type)}`;
}

function formatAbilityType(type: Ability.Type): string {
  switch (type) {
    case Ability.Type.None: return '';
    case Ability.Type.Ex: return ' (Ex)';
    case Ability.Type.Sp: return ' (Sp)';
    case Ability.Type.Su: return ' (Su)';
    default: return ' (???)';
  }
}
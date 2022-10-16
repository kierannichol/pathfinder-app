import {useEffect, useState} from "react";
import {useAbilityDatabase} from "../../../database/v2/AbilityDatabase";
import Expression from "../../../logic/Expression";
import {Ability, AbilitySummary} from "../../../model/character/Ability";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import FeatureBlock from "../base/FeatureBlock";
import "./AbilityBlock.scss";

interface AbilityBlockProps {
  abilityId: string;
  characterAtLevel: CharacterAtLevel;
}

export default function AbilityBlock({ abilityId, characterAtLevel }: AbilityBlockProps) {
  const [ label, setLabel ] = useState('...');
  const [ description, setDescription ] = useState('');

  const abilityDatabase = useAbilityDatabase();
  useEffect(() => {
    abilityDatabase.load(abilityId).then(ability => {
      setLabel(formatAbilityLabel(ability, characterAtLevel) ?? `??${abilityId}??`);
      setDescription(formatAbilityDescription(ability, characterAtLevel));
    });
  }, [abilityId]);

  return <FeatureBlock className={'pf-ability-block'} label={label}>
    {description}
  </FeatureBlock>
}

function formatAbilityLabel(ability: AbilitySummary|undefined, characterAtLevel: CharacterAtLevel): string | undefined {
  if (ability === undefined) {
    return undefined;
  }
  const resolvedAbilityName = Expression.parse(ability.name).resolve(characterAtLevel)?.asText()
      ?? ability.name;
  return `${resolvedAbilityName}${formatAbilityType(ability.type)}`;
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

function formatAbilityDescription(ability: Ability|undefined, characterAtLevel: CharacterAtLevel): string {
  if (ability === undefined) {
    return '';
  }

  const text = ability.description;
  return Expression.parse(text).resolve(characterAtLevel)?.asText() ?? text;
}
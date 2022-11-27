import {useMemo} from "react";
import CharacterState from "../../../database/CharacterState";
import "./AbilityScoreSection.scss";
import CharacterAtLevelProps from "./CharacterAtLevelProps";
import Section from "./Section";

function AbilityScoreSection({ characterAtLevel }: CharacterAtLevelProps) {

  return (<Section className={'pfcs-ability-score-section g-0'}>
    <div className='attribute-row'>
      <div className='attribute-heading'>Ability Name</div>
      <div className='attribute-heading'>Ability Score</div>
      <div className='attribute-heading'>Ability Modifier</div>
      <div className='attribute-heading'>Temp Adjustment</div>
      <div className='attribute-heading'>Temp Modifier</div>
    </div>
    
    {CharacterState.Abilities.map(ability =>
        <AbilityScoreRow key={`ability_score_row_${ability}`} ability={ability} characterAtLevel={characterAtLevel} />
    )}
  </Section>);
}

interface AbilityScoreRowProps extends CharacterAtLevelProps {
  ability: string;
}

function AbilityScoreRow({ characterAtLevel, ability }: AbilityScoreRowProps) {
  const abilityLabel = useMemo(() => ability.toUpperCase(), [ability]);
  const abilityScore = useMemo(() => characterAtLevel.get(`${ability}_score`)?.asText() ?? '', [characterAtLevel, ability]);
  const abilityMod = useMemo(() => characterAtLevel.resolve(`{signed(@${ability}_mod)}`)?.asText() ?? '', [characterAtLevel, ability]);

  return (<div className='attribute-row'>
    <div className='attribute-label'>{abilityLabel}</div>
    <div className='attribute-value'>{abilityScore}</div>
    <div className='attribute-value'>{abilityMod}</div>
    <div className='attribute-value'></div>
    <div className='attribute-value'></div>
  </div>);
}

export default AbilityScoreSection;
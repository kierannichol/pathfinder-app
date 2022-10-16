import React, {ForwardedRef, ReactNode, useContext, useMemo, useState} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";
import {useAbilityOnScreen} from "../../../database/v2/AbilityDatabase";
import {useFeatOnScreen} from "../../../database/v2/FeatDatabase";
import Expression from "../../../logic/Expression";
import {Ability} from "../../../model/character/Ability";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import "./CharacterTraitList.scss";
import FeatDescription from "./FeatDescription";

interface CharacterTraitListProps {
  characterAtLevel: CharacterAtLevel;
  featIds?: string[];
  abilityIds?: string[];
}

export default function CharacterTraitList({ characterAtLevel, featIds = [], abilityIds = [] }: CharacterTraitListProps) {

  return (<Accordion className={'pf-trait-list'}
                     flush={false}>
    {featIds.map(featId => <FeatElement
        key={featId}
        featId={featId}
        characterAtLevel={characterAtLevel}
    />)}
    {abilityIds.map(abilityId => <AbilityElement
        key={abilityId}
        abilityId={abilityId}
        characterAtLevel={characterAtLevel}
    />)}
  </Accordion>);
}

type FeatElementProps = {
  featId: string;
  characterAtLevel: CharacterAtLevel;
}

function FeatElement({ featId, characterAtLevel }: FeatElementProps) {
  const [ feat, itemElementRef ] = useFeatOnScreen(featId);
  
  const characterWithoutFeat = useMemo(() => characterAtLevel.without(featId), [featId, feat, characterAtLevel]);

  const featLabel = useMemo(() => feat?.displayName() ?? '???', [featId, feat]);
  const isValidFeat = useMemo(() => feat?.isValidFor(characterWithoutFeat) ?? false, [featId, feat, characterAtLevel]);
  
  const validFeatOptions = useMemo(() => feat?.options.filter(option => option.isValidFor(characterWithoutFeat)) ?? [],
      [featId, feat, characterAtLevel]);

  if (feat === undefined) {
    return <div>Loading...</div>;
  }

  return (
        <TraitElement eventKey={featId} label={featLabel} styleType={'feat'} ref={itemElementRef}>
          {feat instanceof Feat
              && <FeatDescription feat={feat} characterAtLevel={characterAtLevel} />}
        </TraitElement>);
}

type AbilityElementProps = {
  abilityId: string;
  characterAtLevel: CharacterAtLevel;
}

function AbilityElement({ abilityId, characterAtLevel }: AbilityElementProps) {
  const [ ability, itemElementRef ] = useAbilityOnScreen(abilityId);

  const abilityLabel = useMemo(() => Expression.parse(ability?.displayName() ?? '').resolve(characterAtLevel)?.asText() ?? '???', [ability, characterAtLevel]);
  const abilityDescription = useMemo(() => ability instanceof Ability
      ? Expression.parse(ability.description).resolve(characterAtLevel)?.asText() ?? ''
      : '', [ability, characterAtLevel]);

  if (ability === undefined) {
    return <div>Loading...</div>;
  }

  return (
      <TraitElement eventKey={abilityId} label={abilityLabel} styleType={'ability'} ref={itemElementRef}>
        {abilityDescription}
      </TraitElement>);
}

interface TraitElementProps {
  eventKey: string;
  styleType: string;
  label: string;
  children?: ReactNode;
}

const TraitElement = React.forwardRef<HTMLDivElement, TraitElementProps>(({ eventKey, styleType, label, children }: TraitElementProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { activeEventKey } = useContext(AccordionContext);

  const isActive = eventKey === activeEventKey;
  const [ expanded, setExpanded ] = useState(isActive);
  const [ expanding, setExpanding ] = useState(false);
  const [ collapsing, setCollapsing ] = useState(false);

  const selectTraitButton = useAccordionButton(eventKey);

  const handleExpanding = () => {
    setExpanding(true);
    setExpanded(false);
    setCollapsing(false);
  }

  const handleExpanded = () => {
    setExpanding(false);
    setExpanded(true);
  }

  const handleCollapsing = () => {
    setExpanding(false);
    setExpanded(false);
    setCollapsing(true);
  }

  const handleCollapsed = () => {
    setCollapsing(false);
    setExpanded(false);
  }

  const itemClassNames = [ 'pf-trait-list-item', styleType ];
  if (expanded) {
    itemClassNames.push('pf-trait-list-item--expanded');
  }
  if (expanding) {
    itemClassNames.push('pf-trait-list-item--expanding');
  }
  if (collapsing) {
    itemClassNames.push('pf-trait-list-item--collapsing');
  }

  return (
      <div className={itemClassNames.join(' ')} ref={ref}>
        <div className={'pf-trait-list-item-button'} onClick={selectTraitButton}>{label}</div>
        <Accordion.Collapse eventKey={eventKey}
                            onEntering={_ => handleExpanding()}
                            onEntered={_ => handleExpanded()}
                            onExiting={_ => handleCollapsing()}
                            onExited={_ => handleCollapsed()}
        >
          <div className={'pf-trait-list-item-body'}>
            {children}
          </div>
        </Accordion.Collapse>
      </div>);
});
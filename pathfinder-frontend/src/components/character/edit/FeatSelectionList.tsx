import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import {Accordion, AccordionContext, Button, useAccordionButton} from "react-bootstrap";
import {useFeatOnScreen} from "../../../database/v2/FeatDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat, FeatSummary} from "../../../model/character/Feat";
import FeatDescription from "./FeatDescription";
import "./FeatList.scss";

interface FeatSelectionListProps {
  value: string|undefined;
  feats: FeatSummary[];
  onChange?: (value: string|undefined) => void;
  characterAtLevel: CharacterAtLevel;
}

export default function FeatSelectionList({ value, onChange, feats, characterAtLevel }: FeatSelectionListProps) {
  const [ availableFeats, setAvailableFeats ] = useState<FeatSummary[]>([]);

  function populateFeatList() {
    setAvailableFeats(feats
        .sort((a, b) => {
          const aValid = a.isValidFor(characterAtLevel) ? -10 : 10;
          const bValid = b.isValidFor(characterAtLevel) ? -10 : 10;
          return (aValid - bValid) + a.name.localeCompare(b.name);
        }));
  }

  function clearFeatList() {
    setAvailableFeats([]);
  }

  useEffect(() => {
    populateFeatList();
    return () => clearFeatList();
    }, [characterAtLevel, feats]);

  const handleSelect = (eventKey: string|undefined) => {
    onChange?.(eventKey);
  }

  return (<Accordion defaultActiveKey={value}
                     className={'pf-feat-list'}
                     flush={false}>
    {availableFeats.map(feat => <FeatAccordionOption
        key={feat.id}
        featId={feat.id}
        characterAtLevel={characterAtLevel}
        onSelect={featId => handleSelect(featId?.toString())}
    />)}
  </Accordion>);
}

type FeatOptionProps = {
  featId: string;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (value: string) => void;
}

function FeatAccordionOption({ featId, characterAtLevel, onSelect }: FeatOptionProps) {
  const { activeEventKey } = useContext(AccordionContext);
  const [ feat, itemElementRef ] = useFeatOnScreen(featId);

  const isActive = featId === activeEventKey;
  const [ expanded, setExpanded ] = useState(isActive);
  const [ expanding, setExpanding ] = useState(false);
  const [ collapsing, setCollapsing ] = useState(false);

  const elementShownRef = useCallback((node: HTMLDivElement) => {
    node?.scrollIntoView({
      behavior: "auto",
      block: "center",
    });
  }, []);

  const featLabel = useMemo(() => feat?.displayName(), [featId]);

  const isValidFeat = useMemo(() => feat?.isValidFor(characterAtLevel) ?? false, [featId, characterAtLevel]);
  
  const validFeatOptions = useMemo(() => feat?.options.filter(option => option.isValidFor(characterAtLevel)) ?? [],
      [featId, characterAtLevel]);

  const selectFeatButton = useAccordionButton(featId);

  if (feat === undefined) {
    return <></>;
  }

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

  const itemClassNames = [ 'pf-feat-list-item' ];
  if (expanded) {
    itemClassNames.push('pf-feat-list-item--expanded');
  }
  if (expanding) {
    itemClassNames.push('pf-feat-list-item--expanding');
  }
  if (collapsing) {
    itemClassNames.push('pf-feat-list-item--collapsing');
  }
  if (!isValidFeat) {
    itemClassNames.push('pf-feat-list-item--invalid');
  }

  return (
      <div className={itemClassNames.join(' ')} ref={itemElementRef}>
        <div className={'pf-feat-list-item-button'} onClick={selectFeatButton}>{featLabel}</div>
        <Accordion.Collapse eventKey={featId}
                            onEntering={_ => handleExpanding()}
                            onEntered={_ => handleExpanded()}
                            onExiting={_ => handleCollapsing()}
                            onExited={_ => handleCollapsed()}
        >
          <div className={'pf-feat-list-item-body'} ref={elementShownRef}>
            {feat instanceof Feat && <>
              <div className={'d-grid'}>
                {!feat.hasOptions() && <Button
                    variant={'primary'}
                    size={'lg'}
                    disabled={!isValidFeat}
                    onClick={_ => onSelect?.(featId)}>Select</Button>}
              </div>
              <FeatDescription feat={feat} characterAtLevel={characterAtLevel} />
              {feat.hasOptions() && <div>{validFeatOptions.map(option =>
                  <FeatOptionButton option={option} onSelect={onSelect} />)}</div>}
            </>}
          </div>
        </Accordion.Collapse>
      </div>);
}

interface FeatOptionButtonProps {
  option: Feat.Option;
  onSelect?: (value: string) => void;
}
function FeatOptionButton({option, onSelect }: FeatOptionButtonProps) {
  return <div className={'d-grid'}>
    <Button
        variant={'primary'}
        onClick={_ => onSelect?.(option.id)}>{option.name}</Button><br/>
  </div>
}
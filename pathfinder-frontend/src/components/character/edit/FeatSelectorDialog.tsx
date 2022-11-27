import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useMemo, useState} from "react";
import {Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import SearchBar from "../base/SearchBar";
import FeatSelectionList from "./FeatSelectionList";
import "./FeatSelectorDialog.scss";

interface FeatSelectorDialogProps {
  show: boolean;
  value: string;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (featId: string) => void;
  onCancel?: () => void;
}

export default function FeatSelectorDialog({ show, value, characterAtLevel, onSelect, onCancel }: FeatSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>();
  const [query, setQuery] = useState('');
  const [featType, setFeatType] = useState<Feat.Type>(Feat.Type.Combat);

  const characterWithoutSelectedFeat = useMemo(() => selected !== undefined
      ? characterAtLevel.without(selected)
      : characterAtLevel, [characterAtLevel, selected]);

  const featDatabase = useFeatDatabase();

  useEffect(() => {
    setQuery('');
  }, [show, featType]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const hasSelection = selected !== undefined && selected !== '';

  function handleConfirmSelection() {
    onSelect?.(selected ?? '');
  }

  const feats = useMemo(() => {
    return featDatabase.all
      .filter(feat => {
        let matchesQuery = hasQuery;
        const formattedQuery = query.trim();
        if (hasQuery) {
          matchesQuery = feat.name.toLowerCase().includes(formattedQuery.toLowerCase());
        }

        const matchesSelectedType = featType !== undefined
            ? featType === Feat.Type.Teamwork
                ? feat.types.includes(Feat.Type.Teamwork)
                : feat.types.includes(featType) && feat.types.length === 1
            : false;

        return (matchesSelectedType || matchesQuery)
            && (hasQuery || feat.isValidFor(characterWithoutSelectedFeat))
            ;
      });
  }, [query, featType, characterWithoutSelectedFeat]);

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      fullscreen={'md-down'}
      className={'pf-feat-selector-dialog'}
  >
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Select Feat</Modal.Title>
    </Modal.Header>

    <Modal.Header>
      <ToggleButtonGroup value={featType} onChange={(value: Feat.Type) => setFeatType(value)} name={'feat-type'} type={'radio'}>
        <ToggleButton id={'feat-type-search' } value={-1}><FontAwesomeIcon icon={faMagnifyingGlass}/></ToggleButton>
        <ToggleButton id={'feat-type-general'} value={Feat.Type.General}>General</ToggleButton>
        <ToggleButton id={'feat-type-combat'} value={Feat.Type.Combat}>Combat</ToggleButton>
        <ToggleButton id={'feat-type-metamagic'} value={Feat.Type.Metamagic}>Metamagic</ToggleButton>
        <ToggleButton id={'feat-type-teamwork'} value={Feat.Type.Teamwork}>Teamwork</ToggleButton>
      </ToggleButtonGroup>
    </Modal.Header>

    {featType === Feat.Type.None && <Modal.Header>
      <SearchBar query={query} onSearch={setQuery} />
    </Modal.Header>}

    <Modal.Body>
      <FeatSelectionList
          value={selected}
          feats={feats}
          onChange={setSelected}
          characterAtLevel={characterWithoutSelectedFeat} />
    </Modal.Body>

    <Modal.Footer className={'pf-feat-selector-dialog--footer'}>
      <Button size="lg" className="w-100" disabled={!hasSelection} onClick={handleConfirmSelection}>Select</Button>
    </Modal.Footer>

  </Modal>);
}
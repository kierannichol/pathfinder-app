import React, {useEffect, useMemo, useState} from "react";
import {Modal} from "react-bootstrap";
import {useWeaponDatabase} from "../../../database/v2/WeaponDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import SearchBar from "../base/SearchBar";
import "./SelectWeaponDialog.scss";

interface SelectWeaponDialogProps {
  show: boolean;
  value: string;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (weaponId: string) => void;
  onCancel?: () => void;
}

export default function SelectWeaponDialog({ show, value, characterAtLevel, onSelect, onCancel }: SelectWeaponDialogProps) {
  const [selected, setSelected] = useState<string|undefined>();
  const [query, setQuery] = useState('');

  const weaponDatabase = useWeaponDatabase();

  useEffect(() => {
    setQuery('');
  }, [show]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const handleSelect = (featId: string|undefined) => {
    setSelected(featId);
    featId && onSelect?.(featId);
  }

  const weapons = useMemo(() => {
    return weaponDatabase.all
      .filter(weapon => {
        let matchesQuery = hasQuery;
        const formattedQuery = query.trim();
        if (hasQuery) {
          matchesQuery = weapon.name.toLowerCase().includes(formattedQuery.toLowerCase());
        }
        return (matchesQuery)
            && (hasQuery || weapon.isValidFor(characterAtLevel))
            ;
      });
  }, [query, characterAtLevel]);

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      className={'pf-feat-selector-dialog'}
  >
    <Modal.Header className={'title'} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Select Weapon</Modal.Title>
    </Modal.Header>

    <Modal.Header>
      <SearchBar query={query} onSearch={setQuery} />
    </Modal.Header>

    <Modal.Body>
      <div>
        {weapons.map(weapon => (
            <div>{weapon.name}</div>
        ))}
      </div>
    </Modal.Body>

    <Modal.Footer>
    </Modal.Footer>

  </Modal>);
}
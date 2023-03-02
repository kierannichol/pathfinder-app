import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactNode, useEffect, useMemo, useState} from "react";
import {Alert, Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {array} from "../../../util/pfutils";
import SearchBar from "../base/SearchBar";
import ChoiceSelectorList from "./ChoiceSelectorList";
import styles from "./Dialog.module.scss";

export class ChoiceSelectorOption {
  private cachedIsValid: boolean|undefined;

  constructor(public readonly id: string,
              public readonly name: string,
              private readonly isValidFn: boolean|(() => boolean),
              public readonly descriptionFn?: () => Promise<ReactNode>) {
  }

  public get isValid(): boolean {
    if (this.cachedIsValid === undefined) {
      this.cachedIsValid = typeof this.isValidFn === "boolean"
          ? this.isValidFn
          : this.isValidFn();
    }
    return this.cachedIsValid;
  }
}

export class ChoiceSelectorOptionCollection extends ChoiceSelectorOption{

  constructor(id: string,
              name: string,
              public readonly options: ChoiceSelectorOption[],
              descriptionFn?: () => Promise<ReactNode>) {
    const isValidFn = () => options.some(option => option.isValid);
    super(id, name, isValidFn, descriptionFn);
  }
}

export class ChoiceSelectorCategory {
  constructor(public readonly id: string,
              public readonly name: string) {
  }
}

export type ChoiceSelectorOptions = ChoiceSelectorOption
    | Array<ChoiceSelectorOption>;

interface ChoiceSelectorDialogProps {
  choiceName: string;
  show: boolean;
  value: string|undefined;
  onSelect?: (optionId: string) => void;
  onCancel?: () => void;
  optionsFn: (categoryId: string) => ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  search?: boolean|"auto";
  variant?: string;
}

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, optionsFn, categories = [], search = false, variant = 'special' }: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');
  const showInvalid = useMemo(() => query.length > 0, [query]);
  // const showInvalid = true;

  const [category, setCategory] = useState<string>(() => {
    return categories?.length > 0 ? categories[0].id : '';
  });

  const options: ChoiceSelectorOption[] = useMemo(() => array(optionsFn(category)), [optionsFn, category]);

  useEffect(() => {
    if (hasQuery) {
      setCategory('');
    }
  }, [query]);

  useEffect(() => {
    if (category !== '') {
      setQuery('');
    }
  }, [show, category]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const availableOptions: Array<ChoiceSelectorOption> = useMemo(() => {
    let filteredOptions = options;

    if (hasQuery) {
      filteredOptions = filteredOptions
          .filter(option => option.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (!showInvalid) {
      filteredOptions = filteredOptions
          .filter(option => option.isValid);
    }

    return filteredOptions.sort((a, b) => {
      if (a.isValid && !b.isValid) {
        return -1;
      }
      if (!a.isValid && b.isValid) {
        return 1;
      }
      return a.name.localeCompare(b.name);
    })
  }, [ options, query ]);

  const hasSelection = selected !== undefined && selected !== '';
  const includeSearch = search === true || (search === "auto" && (availableOptions.length > 10 || categories?.length > 0)) || hasQuery

  const handleChangeSelection = (optionId: string|undefined) => {
    setSelected(optionId);
  }

  function handleConfirmSelection() {
    onSelect?.(selected ?? '');
  }

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      fullscreen={'md-down'}
      className={styles.dialog}
  >
    <Modal.Header className={styles.title} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Select {choiceName}</Modal.Title>
    </Modal.Header>

    {includeSearch && <Modal.Header>
      <SearchBar query={query} onSearch={setQuery} />
    </Modal.Header>}

    {categories.length > 0 &&
    <Modal.Header>
      <ToggleButtonGroup value={category} onChange={(value: string) => setCategory(value)} name={'category'} type={'radio'}>
        {search && <ToggleButton disabled={!hasQuery} id={'cat-search'} value={''}><FontAwesomeIcon icon={faMagnifyingGlass}/></ToggleButton>}
        {categories.map(category =>
              <ToggleButton key={category.id} id={category.id} value={category.id}>{category.name}</ToggleButton>)}
      </ToggleButtonGroup>

    </Modal.Header>}

    <Modal.Body>
      {availableOptions.length > 0 &&
          <ChoiceSelectorList selected={selected}
                              options={availableOptions}
                              onSelect={handleChangeSelection}
                              variant={variant} />
          || <Alert variant="warning">None found</Alert>}
    </Modal.Body>

    <Modal.Footer className={styles.footer}>
      <Button size="lg" className="w-100" disabled={!hasSelection} onClick={handleConfirmSelection}>Select</Button>
    </Modal.Footer>

  </Modal>);
}
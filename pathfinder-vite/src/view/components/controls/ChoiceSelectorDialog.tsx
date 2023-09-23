import React, {useEffect, useMemo, useState, useTransition} from "react";
import {Alert, Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import ChoiceSelectorList, {
  ChoiceSelectorCategory,
  ChoiceSelectorOption,
  ChoiceSelectorOptions
} from "./ChoiceSelectorList";
import styles from "../Dialog.module.scss";
import {array} from "../../../app/pfutils.ts";
import LoadingBlock from "../LoadingBlock.tsx";
import SearchBar from "../SearchBar.tsx";
import {FaMagnifyingGlass} from "react-icons/fa6";

interface ChoiceSelectorDialogProps {
  choiceName: string;
  show: boolean;
  value: string|undefined;
  onSelect?: (optionId: string) => void;
  onCancel?: () => void;
  optionsFn: (query: string|undefined, category: ChoiceSelectorCategory|undefined) => ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  search?: boolean|"auto";
  sortBy?: "none" | "name";
  variant?: string|string[];
}

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, optionsFn, categories = [], search = false, variant = 'special'}: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');

  const [category, setCategory] = useState<ChoiceSelectorCategory|undefined>(() => {
    return categories?.length > 0 ? categories[0] : undefined;
  });

  const options: ChoiceSelectorOption[] = useMemo(() => array(optionsFn(query, category)), [optionsFn, query, category]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const showInvalid = useMemo(() => hasQuery || options.length <= 20, [hasQuery, options]);

  const [ isLoading, startLoading ] = useTransition();

  useEffect(() => {
    if (hasQuery) {
      setCategory(undefined);
    }
  }, [hasQuery]);

  useEffect(() => {
    if (category) {
      setQuery('');
    }
  }, [show, category]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const availableOptions: Array<ChoiceSelectorOption> = useMemo(() => {
    let filteredOptions = options;

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
      return 0;
    })
  }, [ options, query, hasQuery, showInvalid ]);

  const hasSelection = selected !== undefined && selected !== '';
  const includeSearch = search === true || (search === "auto" && (availableOptions.length > 10 || categories?.length > 0)) || hasQuery

  const handleChangeSelection = (optionId: string|undefined) => {
    setSelected(optionId);
  }

  const handleChangeCategory = (categoryTag: string|undefined) => {
    const category = categories?.find(category => category.tag === categoryTag);
    startLoading(() => setCategory(category));
  }

  function handleSearch(query: string) {
    startLoading(() => setQuery(query));
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

    {(categories?.length > 0 || includeSearch) &&
    <Modal.Header className={styles.header}>
      {categories.length > 0 &&
          <ToggleButtonGroup className={styles.categories} value={category?.tag ?? ''} onChange={handleChangeCategory} name={'category'} type={'radio'}>
            {search && <ToggleButton disabled={!hasQuery} id={'cat-search'} value={''}>
              {/*<FontAwesomeIcon icon={faMagnifyingGlass}/>*/}
              <FaMagnifyingGlass />
            </ToggleButton>}
            {categories.map(category =>
                <ToggleButton key={category.tag} id={category.tag} value={category.tag}>{category.label}</ToggleButton>)}
          </ToggleButtonGroup>}

      {includeSearch && <SearchBar query={query} onSearch={handleSearch} />}
    </Modal.Header>}

    <Modal.Body className={styles.body}>
      {isLoading
          ? <LoadingBlock/>
          : ((availableOptions.length > 0 &&
          <ChoiceSelectorList selected={selected}
                              options={availableOptions}
                              onSelect={handleChangeSelection}
                              variant={variant} />)
          || <Alert variant="warning">None found</Alert>)}
    </Modal.Body>

    <Modal.Footer className={styles.footer}>
      <Button size="lg" className="w-100" disabled={!hasSelection} onClick={handleConfirmSelection}>Select</Button>
    </Modal.Footer>

  </Modal>);
}
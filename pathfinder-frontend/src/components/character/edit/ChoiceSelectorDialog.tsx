import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {useEffect, useMemo, useState, useTransition} from "react";
import {Alert, Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {array} from "../../../util/pfutils";
import LoadingBlock from "../../common/LoadingBlock";
import SearchBar from "../base/SearchBar";
import ChoiceSelectorList, {
  ChoiceSelectorCategory,
  ChoiceSelectorOption,
  ChoiceSelectorOptions
} from "./ChoiceSelectorList";
import styles from "./Dialog.module.scss";

interface ChoiceSelectorDialogProps {
  choiceName: string;
  show: boolean;
  value: string|undefined;
  onSelect?: (optionId: string) => void;
  onCancel?: () => void;
  optionsFn: (categoryId: string|undefined) => ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  search?: boolean|"auto";
  variant?: string;
}

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, optionsFn, categories = [], search = false, variant = 'special' }: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');

  const [category, setCategory] = useState<string>(() => {
    return categories?.length > 0 ? categories[0].id : '';
  });

  const options: ChoiceSelectorOption[] = useMemo(() => array(optionsFn(category !== '' ? category : undefined)), [optionsFn, category]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const showInvalid = useMemo(() => hasQuery || options.length <= 20, [hasQuery, options]);

  const [ isLoading, startLoading ] = useTransition();

  useEffect(() => {
    if (hasQuery) {
      setCategory('');
    }
  }, [hasQuery]);

  useEffect(() => {
    if (category !== '') {
      setQuery('');
    }
  }, [show, category]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const availableOptions: Array<ChoiceSelectorOption> = useMemo(() => {
    let filteredOptions = options;

    if (hasQuery) {
      console.log(options);
      filteredOptions = filteredOptions
          .filter(option => option.name.toLowerCase().includes(query.trim().toLowerCase()));
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
  }, [ options, query, hasQuery, showInvalid ]);

  const hasSelection = selected !== undefined && selected !== '';
  const includeSearch = search === true || (search === "auto" && (availableOptions.length > 10 || categories?.length > 0)) || hasQuery

  const handleChangeSelection = (optionId: string|undefined) => {
    setSelected(optionId);
  }

  const handleChangeCategory = (categoryId: string) => {
    startLoading(() => setCategory(categoryId));
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
          <ToggleButtonGroup className={styles.categories} value={category} onChange={handleChangeCategory} name={'category'} type={'radio'}>
            {search && <ToggleButton disabled={!hasQuery} id={'cat-search'} value={''}><FontAwesomeIcon icon={faMagnifyingGlass}/></ToggleButton>}
            {categories.map(category =>
                <ToggleButton key={category.id} id={category.id} value={category.id}>{category.name}</ToggleButton>)}
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
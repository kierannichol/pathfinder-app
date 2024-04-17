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
  onChangeSelection?: (optionId: string|undefined) => void;
  optionsFn: (query: string|undefined, category: ChoiceSelectorCategory|undefined) => ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  search?: boolean|"auto";
  sortBy?: "none" | "name";
  variant?: string|string[];
}

const SearchCategory = new ChoiceSelectorCategory(<FaMagnifyingGlass />, '', '_search');

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, onChangeSelection, optionsFn, categories = [], search = false, variant = 'special'}: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');

  const [category, setCategory] = useState<ChoiceSelectorCategory|undefined>(() => {
    return categories?.length > 0 ? categories[0] : undefined;
  });

  const options: ChoiceSelectorOption[] = useMemo(() => array(optionsFn(query, category)), [optionsFn, query, category]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const showInvalid = useMemo(() => hasQuery || options.length <= 20, [hasQuery, options]);

  const [ isLoading, startLoading ] = useTransition();

  function highlight(target: string|undefined) {
    setSelected(value);

    if (target === undefined || !category) return;
    for (let category of categories) {
      const categoryOptions = array(optionsFn(undefined, category));
      for (let option of categoryOptions) {
        if (option.id !== target) {
          continue;
        }

        setCategory(category);
        return;
      }
    }
  }

  useEffect(() => {
    if (hasQuery) {
      setCategory(SearchCategory);
    }
  }, [hasQuery]);

  useEffect(() => {
    if (category !== SearchCategory) {
      setQuery('');
    }
  }, [show, category]);

  useEffect(() => {
    if (show) {
      setSelected(value);
      highlight(value);
    }
  }, [show]);

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
    onChangeSelection?.(optionId);
  }

  const handleChangeCategory = (categoryKey: string|undefined) => {
    const category =
        [ SearchCategory, ...categories ]
          .find(category => category.key === (categoryKey !== '' ? categoryKey : 'all'));
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
          <ToggleButtonGroup className={styles.categories} value={category?.key ?? ''} onChange={handleChangeCategory} name={'category'} type={'radio'}>
            {search && <ToggleButton disabled={!hasQuery} id={SearchCategory.key} value={SearchCategory.key}>
              {SearchCategory.label}
            </ToggleButton>}
            {categories.map(category => {
              const key = category.key !== '' ? category.key : '_blank';
              return <ToggleButton key={key} id={key} value={category.key}>{category.label}</ToggleButton>
            })}
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
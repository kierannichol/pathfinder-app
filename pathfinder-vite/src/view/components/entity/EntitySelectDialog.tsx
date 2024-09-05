import React, {ReactNode, useEffect, useMemo, useState, useTransition} from "react";
import {Alert, Button, Dropdown, Modal} from "react-bootstrap";
import dialogStyles from "../Dialog.module.scss";
import {array} from "@/app/pfutils.ts";
import LoadingBlock from "../LoadingBlock.tsx";
import SearchBar from "../SearchBar.tsx";
import {FaMagnifyingGlass} from "react-icons/fa6";
import {EntitySelectList} from "@/view/components/entity/EntitySelectList.tsx";
import styles from "./EntitySelectDialog.module.css";
import {
  EntityId,
  EntitySelectCategory,
  EntitySelectOption,
  EntitySelectOptions,
  OptionalEntityId
} from "@/view/components/entity/EntitySelectOption.tsx";

interface EntitySelectDialogProps {
  title: ReactNode;
  show: boolean;
  value: OptionalEntityId;
  onSelect?: (selected: OptionalEntityId) => void;
  onCancel?: () => void;
  optionsFn: (query: string|undefined, category: EntitySelectCategory|undefined) => EntitySelectOptions;
  categories?: EntitySelectCategory[];
  search?: boolean | "auto";
  sortBy?: "none" | "name";
}

const SearchCategory = new EntitySelectCategory(<span><FaMagnifyingGlass /> <i>Search</i></span>, '', '_search');

export function EntitySelectDialog({ title, show, value, onSelect, onCancel, optionsFn, categories = [], search = false}: EntitySelectDialogProps) {
  const [selected, setSelected] = useState<OptionalEntityId>(value);
  const [query, setQuery] = useState('');

  const [category, setCategory] = useState<EntitySelectCategory|undefined>(() => {
    return categories?.length > 0 ? categories[0] : undefined;
  });

  const options: EntitySelectOption[] = useMemo(() => array(optionsFn(query, category)),
      [optionsFn, query, category]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const showInvalid = useMemo(() => hasQuery || options.length <= 20, [hasQuery, options]);

  const [ isLoading, startLoading ] = useTransition();

  function highlight(target: OptionalEntityId) {
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
    setSelected(value);
    if (show) {
      highlight(value);
    }
  }, [show]);

  const availableOptions: Array<EntitySelectOption> = useMemo(() => {
    let filteredOptions = options;

    if (!showInvalid) {
      filteredOptions = filteredOptions
          .filter(option => option.valid);
    }

    return filteredOptions.sort((a, b) => {
      if (a.valid && !b.valid) {
        return -1;
      }
      if (!a.valid && b.valid) {
        return 1;
      }
      return 0;
    })
  }, [ options, query, hasQuery, showInvalid ]);

  const hasSelection = selected !== undefined && selected !== 0;
  const includeSearch = search === true || (search === "auto" && (availableOptions.length > 10 || categories?.length > 0)) || hasQuery

  const handleChangeSelection = (optionId: EntityId|undefined) => {
    setSelected(optionId);
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
    if (!selected) {
      onCancel?.();
      return;
    }
    onSelect?.(selected);
  }

  return (<Modal
      show={show}
      onHide={onCancel}
      aria-labelledby="contained-modal-title-vcenter"
      centered={true}
      size={'lg'}
      scrollable={true}
      fullscreen={'md-down'}
      className={dialogStyles.dialog}
  >
    <Modal.Header className={dialogStyles.title} closeButton={true} closeVariant={'white'}>
      <Modal.Title>Select {title}</Modal.Title>
    </Modal.Header>

    {(categories?.length > 0 || includeSearch) &&
    <Modal.Header className={dialogStyles.header}>
      {/*{categories.length > 0 &&*/}
      {/*    <ToggleButtonGroup className={styles.categories} value={category?.key ?? ''} onChange={handleChangeCategory} name={'category'} type={'radio'}>*/}
      {/*      {search && <ToggleButton disabled={!hasQuery} id={SearchCategory.key} value={SearchCategory.key}>*/}
      {/*        {SearchCategory.label}*/}
      {/*      </ToggleButton>}*/}
      {/*      {categories.map(category => {*/}
      {/*        const key = category.key !== '' ? category.key : '_blank';*/}
      {/*        return <ToggleButton key={key} id={key} value={category.key}>{category.label}</ToggleButton>*/}
      {/*      })}*/}
      {/*    </ToggleButtonGroup>}*/}

      {/*{categories.length > 0 &&*/}
      {/*    <>*/}
      {/*      <label>Category</label>*/}
      {/*      <select className="thin"*/}
      {/*              value={category?.key ?? ''}*/}
      {/*              onChange={event => handleChangeCategory(event.target.value)}>*/}
      {/*        <option value=""></option>*/}
      {/*        {categories.map(category => <option value={category.key}>{category.label}</option>)}*/}
      {/*      </select>*/}
      {/*    </>}*/}

      {/*{categories.length > 0 &&*/}
      {/*    <ToggleButtonGroup value={category?.key ?? ''}*/}
      {/*                       onChange={handleChangeCategory}*/}
      {/*                       name={'category'}*/}
      {/*                       type={'radio'}*/}
      {/*                       style={{ flexWrap: "wrap" }}>*/}
      {/*      {search && <ToggleButton disabled={!hasQuery}*/}
      {/*                               id={SearchCategory.key}*/}
      {/*                               value={SearchCategory.key}>*/}
      {/*        {SearchCategory.label}*/}
      {/*      </ToggleButton>}*/}
      {/*      {categories.map(category => {*/}
      {/*        const key = category.key !== '' ? category.key : '_blank';*/}
      {/*        return <ToggleButton key={key}*/}
      {/*                             id={key}*/}
      {/*                             value={category.key}>{category.label}</ToggleButton>*/}
      {/*      })}*/}
      {/*    </ToggleButtonGroup>}*/}

      {(categories ?? []).length > 0 &&
          <Dropdown className={styles.categoryDropdown}>
            <Dropdown.Toggle>
              {category?.label}
            </Dropdown.Toggle>

            <Dropdown.Menu className={styles.categoryDropdownMenu}>
              {categories?.map(category =>
                  <Dropdown.Item key={category.key} onClick={() => setCategory(category)}>{category.label}</Dropdown.Item>)}
            </Dropdown.Menu>
          </Dropdown>
      }

      {includeSearch && <SearchBar query={query} onSearch={handleSearch} />}
    </Modal.Header>}

    <Modal.Body className={dialogStyles.body}>
      {isLoading
          ? <LoadingBlock/>
          : ((availableOptions.length > 0 &&
          <EntitySelectList selected={selected}
                              options={availableOptions}
                              onSelect={handleChangeSelection} />)
          || <Alert variant="warning">None found</Alert>)}
    </Modal.Body>

    <Modal.Footer className={dialogStyles.footer}>
      <Button size="lg" className="w-100" disabled={!hasSelection} onClick={handleConfirmSelection}>Select</Button>
    </Modal.Footer>

  </Modal>);
}
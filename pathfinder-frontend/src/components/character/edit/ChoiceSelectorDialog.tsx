import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactNode, useEffect, useMemo, useState} from "react";
import {Alert, Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import * as pfutils from "../../../util/pfutils";
import SearchBar from "../base/SearchBar";
import ChoiceSelectorList from "./ChoiceSelectorList";
import styles from "./Dialog.module.scss";

export class ChoiceSelectorOption {
  private cachedIsValid: boolean|undefined;

  constructor(public readonly id: string,
              public readonly name: string,
              private readonly isValidFn: boolean|(() => boolean),
              public readonly category: string|string[],
              public readonly description?: ReactNode,
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

export class ChoiceSelectorOptionsContainer {
  private cachedIsValid: boolean|undefined;

  constructor(public readonly id: string,
              public readonly name: string,
              public readonly category: string|string[],
              public readonly options: ChoiceSelectorOptions) {
  }

  public filter(filterFn: (option: ChoiceSelectorOption|ChoiceSelectorOptionsContainer) => boolean): ChoiceSelectorOptionsContainer {
    return new ChoiceSelectorOptionsContainer(
        this.id,
        this.name,
        this.category,
        pfutils.array(this.options).filter(filterFn)
    );
  }

  public get isValid(): boolean {
    if (this.cachedIsValid === undefined) {
      this.cachedIsValid = pfutils.array(this.options).some(option => option.isValid);
    }
    return this.cachedIsValid;
  }
}

export class ChoiceSelectorCategory {
  constructor(public readonly id: string,
              public readonly name: string) {
  }
}

export type ChoiceSelectorOptions = ChoiceSelectorOption
    | ChoiceSelectorOptionsContainer
    | Array<ChoiceSelectorOption|ChoiceSelectorOptionsContainer>;

export function asChoiceOptionArray(options: ChoiceSelectorOptions): Array<ChoiceSelectorOption|ChoiceSelectorOptionsContainer> {
  return options instanceof Array
      ? options
      : [options];
}

interface ChoiceSelectorDialogProps {
  choiceName: string;
  show: boolean;
  value: string|undefined;
  onSelect?: (optionId: string) => void;
  onCancel?: () => void;
  options: ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  search?: boolean;
  variant?: string;
}

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, options, categories = [], search = false, variant = 'special' }: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');
  const [ showInvalid, setShowInvalid ] = useState(true);

  const optionArray = useMemo(() => asChoiceOptionArray(options), [options]);

  const [category, setCategory] = useState<string>(() => {
    let found = optionArray.find(option => option.id === value)?.category;
    if (found instanceof Array) {
      found = found[0];
    }
    return found ?? categories[0]?.id ?? ''
  });

  useEffect(() => {
    setQuery('');
  }, [show, category]);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  const hasQuery = useMemo(() => query.trim().length > 0, [query]);

  const availableOptions: Array<ChoiceSelectorOption|ChoiceSelectorOptionsContainer> = useMemo(() => {
    let filteredOptions = optionArray;

    if (category !== '') {
      filteredOptions = filteredOptions.filter(option => {
        if (option.category instanceof Array) {
          return option.category.includes(category);
        }
        return option.category === category
      });
    }

    if (hasQuery) {
      filteredOptions = filteredOptions
          .flatMap(option => option instanceof ChoiceSelectorOptionsContainer
              ? option.options
              : [ option ])
          .filter(option => option.name.toLowerCase().includes(query.toLowerCase()));
    }

    if (!showInvalid) {
      filteredOptions = filteredOptions
          .filter(option => option.isValid)
          .map(option => option instanceof ChoiceSelectorOptionsContainer
              ? option.filter(child => child.isValid)
              : option);
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
  }, [ options, category, query ]);

  const hasSelection = selected !== undefined && selected !== '';

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

    {categories.length > 0 &&
    <Modal.Header>
      <ToggleButtonGroup value={category} onChange={(value: string) => setCategory(value)} name={'category'} type={'radio'}>
        {search && <ToggleButton id={'cat-search'} value={''}><FontAwesomeIcon icon={faMagnifyingGlass}/></ToggleButton>}
        {categories.map(category =>
              <ToggleButton key={category.id} id={category.id} value={category.id}>{category.name}</ToggleButton>)}
      </ToggleButtonGroup>

    </Modal.Header>}

    {category === '' && search && <Modal.Header>
      <SearchBar query={query} onSearch={setQuery} />
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
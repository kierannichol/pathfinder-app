import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React, {ReactNode, useEffect, useMemo, useState} from "react";
import {Alert, Button, Modal, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import {PathfinderButtonVariants} from "../../common/PathfinderButton";
import PathfinderSelect from "../../common/PathfinderSelect";
import SearchBar from "../base/SearchBar";
import styles from "./Dialog.module.scss";

export class ChoiceSelectorOption {
  constructor(public readonly id: string,
              public readonly name: string,
              public readonly isValid: boolean,
              public readonly category: string|string[],
              public readonly description?: ReactNode,
              public readonly descriptionFn?: () => Promise<ReactNode>) {
  }
}

export class ChoiceSelectorCategory {
  constructor(public readonly id: string,
              public readonly name: string) {
  }
}

export type ChoiceSelectorOptions = ChoiceSelectorOption
    | Array<ChoiceSelectorOption>;

export function asChoiceOptionArray(options: ChoiceSelectorOptions): Array<ChoiceSelectorOption> {
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
  variant?: PathfinderButtonVariants;
}

export default function ChoiceSelectorDialog({ choiceName, show, value, onSelect, onCancel, options, categories = [], search = false, variant = 'special' }: ChoiceSelectorDialogProps) {
  const [selected, setSelected] = useState<string|undefined>(value);
  const [query, setQuery] = useState('');

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

  const availableOptions: Array<ChoiceSelectorOption> = useMemo(() => {
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
      filteredOptions = filteredOptions.filter(option => option.name.includes(query));
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
          <PathfinderSelect activeKey={selected} onChange={handleChangeSelection}>
            {availableOptions.map(option => <PathfinderSelect.Item key={option.id}
                                                                   itemKey={option.id}
                                                                   label={option.name}
                                                                   body={option.description}
                                                                   bodyFn={option.descriptionFn}
                                                                   disabled={!option.isValid}
                                                                   variant={variant}
                                                                   />)}
          </PathfinderSelect>
          || <Alert variant="warning">None found</Alert>}
    </Modal.Body>

    <Modal.Footer className={styles.footer}>
      <Button size="lg" className="w-100" disabled={!hasSelection} onClick={handleConfirmSelection}>Select</Button>
    </Modal.Footer>

  </Modal>);
}
import {ReactNode, SyntheticEvent, useEffect, useMemo, useState} from "react";
import styles from "./SelectList.module.css";

export interface SelectListEntry {
  value: string;
  name: string;
  label: ReactNode;
  enabled: boolean;
  type: 'option' | 'group';
}

export class SelectListOption implements SelectListEntry {
  readonly type = 'option';

  constructor(
      public readonly value: string,
      public readonly name: string,
      public readonly label: ReactNode,
      public readonly enabled: boolean,
      public readonly descriptionFn?: () => Promise<ReactNode>) {
  }
}

export class SelectListOptionGroup implements SelectListEntry {
  readonly type = 'group';

  constructor(
      public readonly value: string,
      public readonly name: string,
      public readonly label: ReactNode,
      public readonly enabled: boolean,
      public readonly optionsFn: (query: string|undefined) => SelectListEntry[],
      public readonly descriptionFn?: () => Promise<ReactNode>) {
  }
}

export class SelectListEntryBuilder {
  private _value: string;
  private _name: string;
  private _label: ReactNode;
  private _enabled: boolean;
  private _descriptionFn: (() => Promise<ReactNode>) | undefined;
  private _optionsFn: ((query:string|undefined) => SelectListEntry[]) | undefined;

  public constructor(value: string, name: string) {
    this._value = value;
    this._name = name;
    this._label = undefined;
    this._enabled = true;
    this._descriptionFn = undefined;
    this._optionsFn = undefined;
  }

  value(value: string): SelectListEntryBuilder {
    this._value = value;
    return this;
  }

  name(name: string): SelectListEntryBuilder {
    this._name = name;
    return this;
  }

  label(label: ReactNode): SelectListEntryBuilder {
    this._label = label;
    return this;
  }

  enabled(enabled: boolean): SelectListEntryBuilder {
    this._enabled = enabled;
    return this;
  }

  description(descriptionFn: () => Promise<ReactNode>): SelectListEntryBuilder {
    this._descriptionFn = descriptionFn;
    return this;
  }

  options(optionsFn: (query:string|undefined) => SelectListEntry[]) {
    this._optionsFn = optionsFn;
    return this;
  }

  build(): SelectListEntry {
    if (this._optionsFn) {
      return new SelectListOptionGroup(
          this._value,
          this._name,
          this._label,
          this._enabled,
          this._optionsFn,
          this._descriptionFn);
    }
    return new SelectListOption(
        this._value,
        this._name,
        this._label,
        this._enabled,
        this._descriptionFn);
  }
}

export class SelectListEntry {

  public static builder(value: string, name: string): SelectListEntryBuilder {
    return new SelectListEntryBuilder(value, name);
  }
}

export interface SelectListProps {
  value?: string | undefined;
  onChange?: (entry: SelectListEntry, value: string | undefined) => void;
  optionsFn: () => SelectListEntry[];
}

function SelectList({value, onChange, optionsFn}: SelectListProps) {
  const [selected, setSelected] = useState<string | undefined>(value);

  useEffect(() => {
    setSelected(value)
  }, [value]);

  function handleClick(entry: SelectListEntry, itemValue: string | undefined) {
    setSelected(itemValue);
    onChange?.(entry, itemValue);
  }

  const options = useMemo(() => optionsFn(), [optionsFn]);

  return (<div>
    {options.map(option =>
        <SelectListOptionItem key={option.value}
                              selected={option.value === selected}
                              option={option as SelectListOption}
                              onSelect={value => handleClick(option, value)}/>)}
  </div>);
}

interface SelectListOptionItemProps {
  option: SelectListOption;
  selected?: boolean;
  onSelect: (value: string | undefined) => void;
}

function SelectListOptionItem({option, onSelect, selected = false}: SelectListOptionItemProps) {
  const [description, setDescription] = useState<ReactNode | null>();

  const classNames = [styles.option];
  if (!option.enabled) {
    classNames.push(styles.disabled);
  }

  function toggleOpen() {
    setDescription("...");
    option.descriptionFn?.()
    .then(result => setDescription(result));
  }

  function toggleClose() {
    setDescription(null);
  }

  function handleDetailsToggle(event: SyntheticEvent<HTMLDetailsElement>) {
    if (event.currentTarget.open) {
      toggleOpen();
      onSelect?.(option.value);
    } else {
      toggleClose();
    }
  }

  return <details className={classNames.join(' ')} name={'option'} onToggle={handleDetailsToggle} open={selected}>
    <summary>{option.label ?? option.name}</summary>
    <section className={styles.description}>{description}</section>
  </details>
}

export default SelectList;
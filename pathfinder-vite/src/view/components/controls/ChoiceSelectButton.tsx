import React, {MouseEvent, ReactNode, useMemo, useState} from "react";
import {CloseButton} from "react-bootstrap";
import styles from "./ChoiceSelectButton.module.scss";
import ChoiceSelectorDialog from "./ChoiceSelectorDialog";
import {ChoiceSelectorCategory, ChoiceSelectorOptions} from "./ChoiceSelectorList";
import ButtonBlock from "./ButtonBlock.tsx";
import {array} from "../../../app/pfutils.ts";
import EditIcon from "../icons/EditIcon.tsx";

interface ChoiceSelectButtonProps {
  choiceName: string;
  value: string|undefined;
  id?: string;
  onSelect?: (featId: string) => void;
  optionsFn: (query: string|undefined, category: ChoiceSelectorCategory|undefined) => ChoiceSelectorOptions;
  categoriesFn?: () => ChoiceSelectorCategory[];
  variant?: string|string[];
  dialogVariant?: string|string[];
  search?: boolean|"auto";
  buttonLabel?: ReactNode;
  actionVerb?: string;
  removable?: boolean;
  sortBy?: "none" | "name";
  children?: ReactNode;
}

export default function ChoiceSelectButton({ choiceName, value, id, onSelect, optionsFn, categoriesFn, buttonLabel, children, actionVerb = 'Select', removable = false, variant = 'white', dialogVariant = variant, search = false, sortBy = "none" }: ChoiceSelectButtonProps) {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState<ChoiceSelectorCategory[]>();

  const handleShow = () => {
    if (categoriesFn) {
      setCategories(categoriesFn());
    }
    setShow(true);
  }
  const handleCancel = () => {
    setShow(false);
    setCategories(undefined);
  }
  const handleSelect = (optionId: string) => {
    onSelect?.(optionId);
    setShow(false);
    setCategories(undefined);
  };

  const handleRemove = (event: MouseEvent) => {
    onSelect?.('');
    event.stopPropagation();
  };

  const selectedName = useMemo(() => value !== '' && value !== undefined
          ? array(optionsFn(undefined, undefined))
              .filter(option => option.id === value)
              .map(option => option.label)
          : undefined,
      [value]);

  const actualButtonLabel = children ?? <div className={styles.label}><EditIcon/> {buttonLabel ?? selectedName ?? <i>{actionVerb} {choiceName}</i>}</div>;

  const removeButton = removable
      ? <CloseButton
          className={styles.removeButton}
          onClick={handleRemove} />
      : <></>;

  return (<>
        <ButtonBlock id={id} variant={variant} onClick={_ => handleShow()}>{actualButtonLabel} {removeButton}</ButtonBlock>
        {show && <ChoiceSelectorDialog
            choiceName={choiceName}
            variant={dialogVariant}
            value={value}
            show={show}
            onSelect={handleSelect}
            onCancel={handleCancel}
            optionsFn={optionsFn}
            categories={categories}
            search={search}
            sortBy={sortBy} />}
    </>);
}
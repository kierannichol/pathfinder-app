import React, {MouseEvent, ReactNode, useMemo, useState} from "react";
import {CloseButton, Collapse} from "react-bootstrap";
import styles from "./ChoiceSelectButton.module.scss";
import ChoiceSelectorDialog from "./ChoiceSelectorDialog";
import {ChoiceSelectorCategory, ChoiceSelectorOptions} from "./ChoiceSelectorList";
import ButtonBlock from "./ButtonBlock.tsx";
import {array} from "@/app/pfutils.ts";
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
  labelPrefix?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function ChoiceSelectButton({ choiceName, value, id, onSelect, optionsFn, categoriesFn, buttonLabel, children, actionVerb = 'Select', removable = false, variant = 'white', dialogVariant = variant, search = false, sortBy = "none", className = undefined, labelPrefix = <EditIcon/> }: ChoiceSelectButtonProps) {
  const [removing, setRemoving] = useState(false);
  const [hidden, setHidden] = useState(false);
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
    setRemoving(true);
    event.stopPropagation();
  };

  const finishRemove = () => {
    setHidden(true);
    onSelect?.('');
  };

  const selectedName = useMemo(() => value !== '' && value !== undefined
          ? array(optionsFn(undefined, undefined))
              .filter(option => option.id === value)
              .map(option => option.label)
              .at(0)
          : undefined,
      [value]);

  const actualButtonLabel = children
      ?? <div className={styles.label}>{labelPrefix} {buttonLabel
          ?? selectedName
          ?? <i>{actionVerb} {choiceName}</i>}
        </div>;

  const removeButton = removable
      ? <CloseButton
          className={styles.removeButton}
          onClick={handleRemove} />
      : <></>;

  if (hidden) {
    return <></>
  }

  return <>
    <Collapse in={!removing} onExited={finishRemove} className={className}>
      <div>
        <ButtonBlock id={id} variant={variant} onClick={_ => handleShow()}>
            {actualButtonLabel} {removeButton}
        </ButtonBlock>
      </div>
    </Collapse>
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
  </>
}
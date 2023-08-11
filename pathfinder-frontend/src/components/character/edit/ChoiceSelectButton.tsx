import React, {MouseEvent, ReactNode, useMemo, useState} from "react";
import {CloseButton} from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import {usePathfinderDatabaseV7} from "../../../v7/PathfinderDatabaseV7";
import PathfinderButton from "../../common/PathfinderButton";
import styles from "./ChoiceSelectButton.module.scss";
import ChoiceSelectorDialog from "./ChoiceSelectorDialog";
import {ChoiceSelectorCategory, ChoiceSelectorOptions} from "./ChoiceSelectorList";

interface ChoiceSelectButtonProps {
  choiceName: string;
  value: string|undefined;
  onSelect?: (featId: string) => void;
  optionsFn: (categoryId: string|undefined) => ChoiceSelectorOptions;
  categoriesFn?: () => ChoiceSelectorCategory[];
  variant?: string;
  dialogVariant?: string;
  search?: boolean|"auto";
  buttonLabel?: string;
  actionVerb?: string;
  removable?: boolean;
  children?: ReactNode;
}

export default function ChoiceSelectButton({ choiceName, value, onSelect, optionsFn, categoriesFn, buttonLabel, children, actionVerb = 'Select', removable = false, variant = 'white', dialogVariant = variant, search = false }: ChoiceSelectButtonProps) {
  const pathfinderDatabase = usePathfinderDatabaseV7();
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

  const selectedName = useMemo(() => value !== '' ? pathfinderDatabase.name(value) : undefined,
      [value, pathfinderDatabase]);

  const actualButtonLabel = children ?? <div className={styles.label}><Icon.PencilSquare/>&nbsp;&nbsp;{buttonLabel ?? selectedName ?? <i>{actionVerb} {choiceName}</i>}</div>;

  const removeButton = removable
      ? <CloseButton
          className={styles.removeButton}
          onClick={handleRemove} />
      : <></>;

  return (<>
        <PathfinderButton variant={variant} onClick={_ => handleShow()}>{actualButtonLabel} {removeButton}</PathfinderButton>
        {show && <ChoiceSelectorDialog
            choiceName={choiceName}
            variant={dialogVariant}
            value={value}
            show={show}
            onSelect={handleSelect}
            onCancel={handleCancel}
            optionsFn={optionsFn}
            categories={categories}
            search={search} />}
    </>);
}
import {ReactNode, useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import {usePathfinderDatabase} from "../../../database/v4/PathfinderDatabase";
import PathfinderButton from "../../common/PathfinderButton";
import "./ChoiceSelectButton.scss";
import ChoiceSelectorDialog, {ChoiceSelectorCategory, ChoiceSelectorOptions} from "./ChoiceSelectorDialog";

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
  children?: ReactNode;
}

export default function ChoiceSelectButton({ choiceName, value, onSelect, optionsFn, categoriesFn, buttonLabel, children, variant = 'white', dialogVariant = variant, search = false }: ChoiceSelectButtonProps) {
  const pathfinderDatabase = usePathfinderDatabase();
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

  const selectedName = useMemo(() => value !== '' ? pathfinderDatabase.name(value) : undefined,
      [value, pathfinderDatabase]);

  const actualButtonLabel = children ?? <><Icon.PencilSquare/>&nbsp;&nbsp;{buttonLabel ?? selectedName ?? <i>Select {choiceName}</i>}</>;

  return (<>
        <PathfinderButton variant={variant} onClick={_ => handleShow()}>{actualButtonLabel}</PathfinderButton>
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
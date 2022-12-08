import {useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import {usePathfinderDatabase} from "../../../database/v2/PathfinderDatabase";
import PathfinderButton from "../../common/PathfinderButton";
import "./ChoiceSelectButton.scss";
import ChoiceSelectorDialog, {ChoiceSelectorCategory, ChoiceSelectorOptions} from "./ChoiceSelectorDialog";

interface ChoiceSelectButtonProps {
  choiceName: string;
  value: string|undefined;
  onSelect?: (featId: string) => void;
  optionsFn: () => ChoiceSelectorOptions;
  categoriesFn?: () => ChoiceSelectorCategory[];
  variant?: string;
  dialogVariant?: string;
  search?: boolean;
}

export default function ChoiceSelectButton({ choiceName, value, onSelect, optionsFn, categoriesFn, variant = 'white', dialogVariant = variant, search = false }: ChoiceSelectButtonProps) {
  const pathfinderDatabase = usePathfinderDatabase();
  const [show, setShow] = useState(false);
  const [options, setOptions] = useState<ChoiceSelectorOptions>();
  const [categories, setCategories] = useState<ChoiceSelectorCategory[]>();

  const handleShow = () => {
    setOptions(optionsFn());
    if (categoriesFn) {
      setCategories(categoriesFn());
    }
    setShow(true);
  }
  const handleCancel = () => {
    setShow(false);
    setOptions(undefined);
    setCategories(undefined);
  }
  const handleSelect = (optionId: string) => {
    onSelect?.(optionId);
    setShow(false);
    setOptions(undefined);
    setCategories(undefined);
  };

  const selectedName = useMemo(() => value !== '' ? pathfinderDatabase.name(value) : undefined,
      [value, pathfinderDatabase]);

  const buttonLabel = selectedName ?? <><Icon.QuestionCircleFill/>&nbsp;<i> Select {choiceName}</i></>;

  return (<>
        <PathfinderButton variant={variant} onClick={_ => handleShow()}>{buttonLabel}</PathfinderButton>
        {show && <ChoiceSelectorDialog
            choiceName={choiceName}
            variant={dialogVariant}
            value={value}
            show={show}
            onSelect={handleSelect}
            onCancel={handleCancel}
            options={options ?? []}
            categories={categories}
            search={search} />}
    </>);
}
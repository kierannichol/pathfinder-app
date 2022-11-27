import {useMemo, useState} from "react";
import * as Icon from "react-bootstrap-icons";
import PathfinderButton, {PathfinderButtonVariants} from "../../common/PathfinderButton";
import "./ChoiceSelectButton.scss";
import ChoiceSelectorDialog, {
  asChoiceOptionArray,
  ChoiceSelectorCategory,
  ChoiceSelectorOptions
} from "./ChoiceSelectorDialog";


interface ChoiceSelectButtonProps {
  choiceName: string;
  value: string|undefined;
  onSelect?: (featId: string) => void;
  options: ChoiceSelectorOptions;
  categories?: ChoiceSelectorCategory[];
  variant?: PathfinderButtonVariants;
  dialogVariant?: PathfinderButtonVariants;
  search?: boolean;
}

export default function ChoiceSelectButton({ choiceName, value, onSelect, options, categories, variant = 'white', dialogVariant = 'special', search = false }: ChoiceSelectButtonProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);
  const handleSelect = (optionId: string) => {
    onSelect?.(optionId);
    setShow(false);
  };

  const selectedName = useMemo(() =>
          asChoiceOptionArray(options).find(option => option.id === value)?.name,
      [value, options]);

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
            options={options}
            categories={categories}
            search={search} />}
    </>);
}
import {useState} from "react";
import {Button} from "react-bootstrap";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import FeatSelectorDialog from "./FeatSelectorDialog";

type FeatSelectButtonProps = {
  value: string;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (featId: string) => void;
}

export default function FeatSelectButton({ value, characterAtLevel, onSelect }: FeatSelectButtonProps) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleCancel = () => setShow(false);
  const handleSelect = (featId: string) => {
    onSelect?.(featId);
    setShow(false);
  };

  return (<>
        <Button variant={'primary'} onClick={handleShow}>Select Feat</Button>
    {show && <FeatSelectorDialog
            value={value}
            characterAtLevel={characterAtLevel}
            show={show}
            onSelect={handleSelect}
            onCancel={handleCancel} />}
    </>
    );
}
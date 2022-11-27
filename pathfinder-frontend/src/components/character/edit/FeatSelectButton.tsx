import {useMemo} from "react";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat} from "../../../model/character/Feat";
import ChoiceSelectButton from "./ChoiceSelectButton";
import "./ChoiceSelectButton.scss";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./ChoiceSelectorDialog";
import FeatDescription from "./FeatDescription";

type FeatSelectButtonProps = {
  value: string;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (featId: string) => void;
}

export default function FeatSelectButton({ value, characterAtLevel, onSelect }: FeatSelectButtonProps) {
  const featDatabase = useFeatDatabase();
  const options = useMemo(() => featDatabase.all.map(
      feat => new ChoiceSelectorOption(
          feat.id,
          feat.name,
          feat.isValidFor(characterAtLevel),
          feat.types.map(type => type.toString()),
          '',
          () => featDatabase.get(feat.id)?.then(f => f && <FeatDescription feat={f} characterAtLevel={characterAtLevel} />)
      )), [characterAtLevel])

  const categories = [
      new ChoiceSelectorCategory(Feat.Type.Combat.toString(), "Combat"),
      new ChoiceSelectorCategory(Feat.Type.General.toString(), "General"),
      new ChoiceSelectorCategory(Feat.Type.Teamwork.toString(), "Teamwork"),
      new ChoiceSelectorCategory(Feat.Type.Metamagic.toString(), "Metamagic")
  ];

  return <ChoiceSelectButton
      choiceName={"Feat"}
      variant={'feat'}
      dialogVariant={'feat'}
      search={true}
      value={value}
      options={options}
      categories={categories}
      onSelect={onSelect} />
  // const [show, setShow] = useState(false);
  //
  // const handleShow = () => setShow(true);
  // const handleCancel = () => setShow(false);
  // const handleSelect = (featId: string) => {
  //   onSelect?.(featId);
  //   setShow(false);
  // };
  //
  // const featDatabase = useFeatDatabase();
  //
  // const selectedName = useMemo(() =>
  //         featDatabase.summary(value)?.name,
  //     [value, featDatabase]);
  //
  // const buttonLabel = selectedName ?? <><Icon.QuestionCircleFill/>&nbsp;<i> Select Feat</i></>
  //
  // return (<>
  //       <PathfinderButton variant={'feat'} onClick={_ => handleShow()}>{buttonLabel}</PathfinderButton>
  //       {show && <FeatSelectorDialog
  //           value={value}
  //           characterAtLevel={characterAtLevel}
  //           show={show}
  //           onSelect={handleSelect}
  //           onCancel={handleCancel} />}
  //   </>);
}
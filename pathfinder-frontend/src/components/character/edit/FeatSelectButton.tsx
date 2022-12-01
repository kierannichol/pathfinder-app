import {useCallback, useMemo} from "react";
import {useFeatDatabase} from "../../../database/v2/FeatDatabase";
import {CharacterAtLevel} from "../../../model/character/CharacterAtLevel";
import {Feat, FeatSummary} from "../../../model/character/Feat";
import ChoiceSelectButton from "./ChoiceSelectButton";
import "./ChoiceSelectButton.scss";
import {ChoiceSelectorCategory, ChoiceSelectorOption, ChoiceSelectorOptionsContainer} from "./ChoiceSelectorDialog";
import FeatDescription from "./FeatDescription";

type FeatSelectButtonProps = {
  value: string;
  characterAtLevel: CharacterAtLevel;
  bonus?: boolean;
  onSelect?: (featId: string) => void;
}

export default function FeatSelectButton({ value, characterAtLevel, onSelect, bonus = false }: FeatSelectButtonProps) {
  const featDatabase = useFeatDatabase();

  const characterWithoutFeat = useMemo(() => characterAtLevel.without(value), [value, characterAtLevel]);

  const singleFeat = (feat: FeatSummary) => new ChoiceSelectorOption(
      feat.id,
      feat.name,
      feat.isValidFor(characterWithoutFeat),
      feat.types.map(type => type.toString()),
      '',
      () => featDatabase.get(feat.id)?.then(f => f && <FeatDescription feat={f} characterAtLevel={characterAtLevel} />));

  const containerFeat = (feat: FeatSummary) => new ChoiceSelectorOptionsContainer(
      feat.id,
      feat.name,
      feat.types.map(type => type.toString()),
      feat.optionsAsSummaries().map(singleFeat));

  const options = useCallback(() => featDatabase.all.map(
      feat => feat.options.length > 0 ? containerFeat(feat) : singleFeat(feat)),
      [characterAtLevel, featDatabase])

  const categories = useCallback(() => [
      new ChoiceSelectorCategory(Feat.Type.Combat.toString(), "Combat"),
      new ChoiceSelectorCategory(Feat.Type.General.toString(), "General"),
      new ChoiceSelectorCategory(Feat.Type.Teamwork.toString(), "Teamwork"),
      new ChoiceSelectorCategory(Feat.Type.Metamagic.toString(), "Metamagic")
  ], []);

  return <ChoiceSelectButton
      choiceName={bonus ? "Bonus Feat" : "Feat"}
      variant={'feat'}
      dialogVariant={'feat'}
      search={true}
      value={value}
      optionsFn={options}
      categoriesFn={categories}
      onSelect={onSelect} />
}
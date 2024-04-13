import React, {ReactNode, useMemo} from "react";
import SelectionFeatureDescription from "../character/SelectionFeatureDescription.tsx";
import ChoiceSelectButton from "./ChoiceSelectButton.tsx";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./ChoiceSelectorList.tsx";
import {ChoiceCategoryModel, SelectChoiceModel} from "../../model/ChoiceModel.ts";
import {CharacterAtLevelModel} from "../../model/CharacterAtLevelModel.ts";
import {FeatureSummaryModel} from "../../model/FeatureModel.ts";
import {DatabaseModel} from "../../model/DatabaseModel.ts";
import Description from "../../../data/Description.ts";
import {useDatabaseModel} from "../../model/ModelContext.tsx";

interface DataChoiceSelectButtonProps {
  choiceRef: SelectChoiceModel;
  characterAtLevel: CharacterAtLevelModel;
  choiceIndex?: number;
  id?: string;
  onSelect?: (id: string) => void;
  label?: string;
  buttonLabel?: string;
  variant?: string|string[];
  dialogVariant?: string|string[];
  descriptionFn?: (description: Description) => ReactNode;
  search?: boolean|"auto";
  children?: ReactNode;
}

export default function DataChoiceSelectButton({ choiceRef, choiceIndex, characterAtLevel, id, onSelect, label, buttonLabel, variant, dialogVariant, descriptionFn, search, children }: DataChoiceSelectButtonProps) {
  const database = useDatabaseModel();
  const characterWithoutCurrent = useMemo(() => {
    const selected = characterAtLevel.selected(choiceRef);
    return selected !== undefined ? characterAtLevel.withoutChoice(choiceRef) : characterAtLevel;
  }, [characterAtLevel, choiceRef]);

  function handleSelect(id: string|undefined) {
    onSelect?.(id ?? '');
  }

  return <ChoiceSelectButton
      id={id}
      choiceName={label ?? choiceRef.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant ?? variant ?? "default"}
      value={characterAtLevel.selected(choiceRef, choiceIndex) as string}
      buttonLabel={buttonLabel}
      onSelect={handleSelect}
      search={search}
      optionsFn={(query: string|undefined, category: ChoiceSelectorCategory|undefined) => {
          return queryOptions(database, choiceRef, query, category)
            .map(summary => featureToChoiceSelectorOption(summary, database, characterWithoutCurrent, descriptionFn, handleSelect))
      }}
      categoriesFn={() => choiceRef.categories.map((category: ChoiceCategoryModel) => new ChoiceSelectorCategory(category.label, category.tag))}
      children={children}
      actionVerb={choiceRef.repeatingIndex === 0 ? 'Select' : 'Add'}
      removable={choiceRef.repeatingIndex > 0 && characterAtLevel.selected(choiceRef, choiceIndex) !== undefined}
  />
}

function queryOptions(database: DatabaseModel, choiceRef: SelectChoiceModel, query: string|undefined, category: ChoiceSelectorCategory|undefined): FeatureSummaryModel[] {
  return choiceRef.options(database, query, category?.tag);
}

function featureToChoiceSelectorOption(feature: FeatureSummaryModel, database: DatabaseModel, characterAtLevel: CharacterAtLevelModel, descriptionFn?: (description: Description) => ReactNode, onSelect?: (id: string|undefined) => void): ChoiceSelectorOption {

  const descriptionFunction = async (id: string): Promise<ReactNode> => {
    const loaded = await database.load(id);
    if (!loaded) {
      return '';
    }

    const description = loaded.description;

    if (descriptionFn !== undefined) {
      return descriptionFn(description);
    }
    return <SelectionFeatureDescription
        feature={loaded}
        description={description}
        // featureModifications={loaded.featureModifications}
        characterAtLevel={characterAtLevel} />
  };

  // if (feature.optionsTemplate) {
  //   const featureOptions = feature.optionsTemplate.queryOptions(database);
  //   const selectOptions = featureOptions.map(option => new FeatureSummary(option.id, option.name, undefined, [], undefined, option.enabledFormula, feature.maxStacks))
  //     .map(summary => {
  //       return featureToChoiceSelectorOption(summary, database, characterAtLevel, descriptionFn, onSelect)
  //     });
  //
  //   descriptionFn = desc => <ChoiceSelectorList options={selectOptions} onSelect={onSelect} />
  // }

  return new ChoiceSelectorOption(
      feature.key,
      feature.name,
      () => feature.isEnabled(characterAtLevel),
      async () => descriptionFunction(feature.key)
  )
}
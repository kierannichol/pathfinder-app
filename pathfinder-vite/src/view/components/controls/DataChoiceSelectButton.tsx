import React, {ReactNode, useMemo} from "react";
import Description from "../../../data/model/Description.ts";
import {usePathfinderDatabase} from "../../../data/model/PathfinderDatabase.tsx";
import FeatureDescription from "../character/FeatureDescription.tsx";
import ChoiceSelectButton from "./ChoiceSelectButton.tsx";
import ChoiceSelectorList, {ChoiceSelectorCategory, ChoiceSelectorOption} from "./ChoiceSelectorList.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import {FeatureSummary} from "../../../data/model/Feature.ts";
import Database from "../../../data/model/Database.ts";
import {FeatureSelectCategory} from "../../../data/model/Choice.ts";
import Id from "../../../data/model/Id.ts";

interface DataChoiceSelectButtonProps {
  choiceRef: FeatureSelectChoiceRef;
  characterAtLevel: CharacterAtLevel;
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

export default function DataChoiceSelectButton({ choiceRef, characterAtLevel, id, onSelect, label, buttonLabel, variant, dialogVariant, descriptionFn, search, children }: DataChoiceSelectButtonProps) {
  const database = usePathfinderDatabase();
  const characterWithoutCurrent = useMemo(() => {
    const selected = characterAtLevel.selected(choiceRef);
    return selected !== undefined ? characterAtLevel.without(selected) : characterAtLevel;
  }, [characterAtLevel, choiceRef]);

  function handleSelect(id: string|undefined) {
    console.log("Selecting: " + id)
    if (id) {
      const summary = database.feature(id);
      if (summary?.optionsTemplate !== undefined) {
        onSelect?.(id);
      }
    }
  }

  return <ChoiceSelectButton
      id={id}
      choiceName={label ?? choiceRef.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant ?? variant ?? "default"}
      value={Id.withoutOption(characterAtLevel.selected(choiceRef))}
      buttonLabel={buttonLabel}
      onSelect={handleSelect}
      search={search}
      optionsFn={(query: string|undefined, category: ChoiceSelectorCategory|undefined) => {
          return queryOptions(choiceRef, query, category)
            .map(summary => featureToChoiceSelectorOption(summary, database, characterWithoutCurrent, descriptionFn, handleSelect))
      }}
      categoriesFn={() => choiceRef.categories.map((category: FeatureSelectCategory) => new ChoiceSelectorCategory(category.label, category.tag))}
      children={children}
      actionVerb={choiceRef.repeatingIndex === 0 ? 'Select' : 'Add'}
      removable={choiceRef.repeatingIndex > 0 && characterAtLevel.selected(choiceRef) !== ''}
  />
}

function queryOptions(choiceRef: FeatureSelectChoiceRef, query: string|undefined, category: ChoiceSelectorCategory|undefined): FeatureSummary[] {
  return choiceRef.options(query, category?.tag);
}

function featureToChoiceSelectorOption(feature: FeatureSummary, database: Database, characterAtLevel: CharacterAtLevel, descriptionFn?: (description: Description) => ReactNode, onSelect?: (id: string|undefined) => void): ChoiceSelectorOption {

  const descriptionFunction = async (id: string): Promise<ReactNode> => {
    const loaded = await database.load(id);
    if (!loaded) {
      return '';
    }

    const description = loaded.description;

    if (descriptionFn !== undefined) {
      return descriptionFn(description);
    }
    return <FeatureDescription
        feature={loaded}
        description={description}
        featureModifications={loaded.featureModifications}
        characterAtLevel={characterAtLevel} />
  };

  if (feature.optionsTemplate) {
    const featureOptions = feature.optionsTemplate.queryOptions(database);
    const selectOptions = featureOptions.map(option => new FeatureSummary(option.id, option.name, undefined, [], undefined, option.enabledFormula, feature.maxStacks))
      .map(summary => {
        return featureToChoiceSelectorOption(summary, database, characterAtLevel, descriptionFn, onSelect)
      });

    descriptionFn = desc => <ChoiceSelectorList options={selectOptions} onSelect={onSelect} />
  }

  return new ChoiceSelectorOption(
      feature.id,
      feature.name,
      () => feature.isEnabled(characterAtLevel),
      async () => descriptionFunction(feature.id)
  )
}
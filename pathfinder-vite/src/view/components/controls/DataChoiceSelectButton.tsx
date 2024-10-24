import React, {ReactNode, useMemo} from "react";
import SelectionFeatureDescription from "../character/SelectionFeatureDescription.tsx";
import ChoiceSelectButton from "./ChoiceSelectButton.tsx";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./ChoiceSelectorList.tsx";
import Description from "../../../data/Description.ts";
import {useDatabase} from "@/data/context.tsx";
import {ChoiceCategory, SelectChoiceRef} from "@/data/v8/Choice.ts";
import CharacterAtLevel from "../../../data/v8/CharacterAtLevel.ts";
import Database from "../../../data/v8/Database.ts";
import {FeatureSummary} from "@/data/v8/FeatureSummary.ts";

interface DataChoiceSelectButtonProps {
  choiceRef: SelectChoiceRef;
  characterAtLevel: CharacterAtLevel;
  characterAtPreviousLevel?: CharacterAtLevel;
  choiceIndex?: number;
  id?: string;
  onSelect?: (id: string) => void;
  label?: string;
  buttonLabel?: string;
  variant?: string|string[];
  dialogVariant?: string|string[];
  descriptionFn?: (description: Description) => ReactNode;
  search?: boolean|"auto";
  labelPrefix?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function DataChoiceSelectButton({ choiceRef, choiceIndex, characterAtLevel, characterAtPreviousLevel, id, onSelect, label, buttonLabel, variant, dialogVariant, descriptionFn, search, labelPrefix, className, children }: DataChoiceSelectButtonProps) {
  const database = useDatabase();
  const characterWithoutCurrent = useMemo(() => {
    const selected = characterAtLevel.selected(choiceRef);
    return selected !== '' ? characterAtLevel.withoutChoice(choiceRef.path) : characterAtLevel;
  }, [characterAtLevel, choiceRef]);

  const selected = useMemo(() => characterAtLevel.selected(choiceRef, choiceIndex) as string,
      [choiceRef, choiceIndex]);

  function handleSelect(id: string|undefined) {
    onSelect?.(id ?? '');
  }

  return <ChoiceSelectButton
      id={id}
      choiceName={label ?? choiceRef.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant ?? variant ?? "default"}
      value={selected}
      buttonLabel={buttonLabel}
      onSelect={handleSelect}
      search={search}
      labelPrefix={labelPrefix}
      className={className}
      optionsFn={(query: string|undefined, category: ChoiceSelectorCategory|undefined) => {
          let options = queryOptions(database, choiceRef, query, category);

          if (characterAtPreviousLevel && category?.key === '_new') {
            options = options.filter(option => {
              return option.isEnabled(characterWithoutCurrent) && !option.isEnabled(characterAtPreviousLevel);
            })
          }

          return options.map(summary => featureToChoiceSelectorOption(summary, database, characterWithoutCurrent, descriptionFn, handleSelect));
      }}
      categoriesFn={() => {
        let categories = choiceRef.categories.map((category: ChoiceCategory) => new ChoiceSelectorCategory(category.label, category.tag));
        // if (characterAtPreviousLevel) {
        //   categories = [...categories, new ChoiceSelectorCategory('New', '', '_new')]
        // }
        return categories;
      }}
      children={children}
      actionVerb={choiceRef.isRepeating ? 'Add' : 'Select'}
      removable={choiceRef.isRepeating && selected !== ''}
  />
}

function queryOptions(database: Database, choiceRef: SelectChoiceRef, query: string|undefined, category: ChoiceSelectorCategory|undefined): FeatureSummary[] {
  return choiceRef.options(database, query, category?.tag);
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
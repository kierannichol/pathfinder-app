import React, {ReactNode, useMemo} from "react";
import Description from "../../../data/model/Description.ts";
import {usePathfinderDatabase} from "../../../data/model/PathfinderDatabase.tsx";
import FeatureDescription from "../character/FeatureDescription.tsx";
import ChoiceSelectButton from "./ChoiceSelectButton.tsx";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./ChoiceSelectorList.tsx";
import CharacterAtLevel from "../../../data/model/CharacterAtLevel.ts";
import {FeatureSelectChoiceRef} from "../../../data/model/ChoiceRef.ts";
import {FeatureSummary} from "../../../data/model/Feature.ts";
import Database from "../../../data/model/Database.ts";
import {FeatureSelectCategory} from "../../../data/model/Choice.ts";

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

  return <ChoiceSelectButton
      id={id}
      choiceName={label ?? choiceRef.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant ?? variant ?? "default"}
      value={characterAtLevel.selected(choiceRef)}
      buttonLabel={buttonLabel}
      onSelect={onSelect}
      search={search}
      optionsFn={(query: string|undefined, category: ChoiceSelectorCategory|undefined) => choiceRef.options(query, category?.tag).map((option: FeatureSummary) =>
          featureToChoiceSelectorOption(option, database, characterWithoutCurrent, descriptionFn))}
      categoriesFn={() => choiceRef.categories.map((category: FeatureSelectCategory) => new ChoiceSelectorCategory(category.label, category.tag))}
      children={children}
      actionVerb={choiceRef.repeatingIndex === 0 ? 'Select' : 'Add'}
      removable={choiceRef.repeatingIndex > 0 && characterAtLevel.selected(choiceRef) !== ''}
  />
}

function featureToChoiceSelectorOption(feature: FeatureSummary, database: Database, characterAtLevel: CharacterAtLevel, descriptionFn?: (description: Description) => ReactNode): ChoiceSelectorOption {

  return new ChoiceSelectorOption(
      feature.id,
      feature.name,
      () => feature.isEnabled(characterAtLevel),
      async () => {
        const description = await database.description(feature.id);
        if (!description) {
          return '';
        }
        if (descriptionFn !== undefined) {
          return descriptionFn(description);
        }
        return <FeatureDescription
            feature={feature}
            description={description}
            characterAtLevel={characterAtLevel} />
      }
  )
}
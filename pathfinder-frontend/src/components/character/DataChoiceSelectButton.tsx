import {Formula} from "@kierannichol/formula-js";
import React, {ReactNode} from "react";
import Description from "../../core/Description";
import CharacterAtLevel from "../../v7/CharacterAtLevel";
import {FeatureSelectChoiceRef} from "../../v7/ChoiceRef";
import Database from "../../v7/Database";
import {FeatureSummary} from "../../v7/Feature";
import {usePathfinderDatabaseV7} from "../../v7/PathfinderDatabaseV7";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorOption} from "./edit/ChoiceSelectorList";
import FeatureDescription from "./edit/FeatureDescription";

interface DataChoiceSelectButtonProps {
  choiceRef: FeatureSelectChoiceRef;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (id: string) => void;
  label?: string;
  buttonLabel?: string;
  variant?: string;
  dialogVariant?: string;
  descriptionFn?: (description: Description) => ReactNode;
  search?: boolean|"auto";
  children?: ReactNode;
}

export default function DataChoiceSelectButton({ choiceRef, characterAtLevel, onSelect, label, buttonLabel, variant, dialogVariant, descriptionFn, search, children }: DataChoiceSelectButtonProps) {
  const database = usePathfinderDatabaseV7();

  return <ChoiceSelectButton
      choiceName={label ?? choiceRef.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant}
      value={characterAtLevel.selected(choiceRef)}
      buttonLabel={buttonLabel}
      onSelect={onSelect}
      search={search}
      optionsFn={(categoryId: string|undefined) => choiceRef.options(database).map(option =>
          featureToChoiceSelectorOption(option, choiceRef, database, characterAtLevel, descriptionFn))}
      // categoriesFn={() => choice.categories.map(category => new ChoiceSelectorCategory(category.id, category.label))}
      children={children}
      // actionVerb={choice.repeatingIndex === 0 ? 'Select' : 'Add'}
      // removable={choice.repeatingIndex > 0 && choice.current !== ''}
  />
}

function featureToChoiceSelectorOption(feature: FeatureSummary, choiceRef: FeatureSelectChoiceRef, database: Database, characterAtLevel: CharacterAtLevel, descriptionFn?: (description: Description) => ReactNode): ChoiceSelectorOption {

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
            featureId={feature.id}
            description={description}
            characterAtLevel={characterAtLevel}
            maxStacks={feature.maxStacks}
            prerequisiteFormula={Formula.parse(feature.enabledFormula)}/>
      }
  )
}
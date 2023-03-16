import React, {ReactNode} from "react";
import CharacterAtLevel from "../../core/CharacterAtLevel";
import {Option, SelectChoiceNode} from "../../core/Choice";
import {IDataHub} from "../../core/DataHub";
import Description from "../../core/Description";
import {usePathfinderDatabase} from "../../database/v4/PathfinderDatabase";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorCategory, ChoiceSelectorOption,} from "./edit/ChoiceSelectorDialog";
import EntityDescription from "./edit/EntityDescription";

interface DataChoiceSelectButtonProps {
  choice: SelectChoiceNode;
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

export default function DataChoiceSelectButton({ choice, characterAtLevel, onSelect, label, buttonLabel, variant, dialogVariant, descriptionFn, search, children }: DataChoiceSelectButtonProps) {
  const database = usePathfinderDatabase();

  return <ChoiceSelectButton
      choiceName={label ?? choice.label}
      variant={variant ?? "default"}
      dialogVariant={dialogVariant}
      value={choice.current}
      buttonLabel={buttonLabel}
      onSelect={onSelect}
      search={search}
      optionsFn={(categoryId: string|undefined) => Object.values(choice.options(database, categoryId)).map(option =>
          optionToChoiceSelectorOption(option, choice, database, characterAtLevel, descriptionFn))}
      categoriesFn={() => choice.categories.map(category => new ChoiceSelectorCategory(category.id, category.label))}
      children={children}
      actionVerb={choice.repeatingIndex === 0 ? 'Select' : 'Add'}
      removable={choice.repeatingIndex > 0 && choice.current !== ''}
  />
}

function optionToChoiceSelectorOption(option: Option, choice: SelectChoiceNode, database: IDataHub, characterAtLevel: CharacterAtLevel, descriptionFn?: (description: Description) => ReactNode): ChoiceSelectorOption {

  return new ChoiceSelectorOption(
      option.id,
      option.name,
      () => option.isValidFor(characterAtLevel),
      async () => {
        const description = await database.description(option.id);
        if (!description) {
          return '';
        }
        if (descriptionFn !== undefined) {
          return descriptionFn(description);
        }
        return <EntityDescription
            description={description}
            characterAtLevel={characterAtLevel}
            prerequisiteFormula={option.prerequisiteFormula}/>
      }
  )
}
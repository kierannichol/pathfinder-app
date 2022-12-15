import {usePathfinderDatabase} from "../../database/v3/PathfinderDatabase";
import CharacterAtLevel from "../../v3/model/CharacterAtLevel";
import {SelectChoice} from "../../v3/model/Choice";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";
import ModificationDescription from "./edit/ModificationDescription";

interface DataChoiceSelectButtonProps {
  choice: SelectChoice;
  characterAtLevel: CharacterAtLevel;
  onSelect?: (id: string) => void;
}

export default function DataChoiceSelectButton({ choice, characterAtLevel, onSelect }: DataChoiceSelectButtonProps) {
  const database = usePathfinderDatabase();

  return <ChoiceSelectButton
      choiceName={choice.label}
      variant={choice.type}
      value={choice.current}
      onSelect={onSelect}
      categoriesFn={() => database.categories(choice.options).map(category =>
          new ChoiceSelectorCategory(
              category.id.toString(),
              category.name
          ))}
      optionsFn={() => database.options(choice.options).map(option =>
          new ChoiceSelectorOption(
              option.id,
              option.name,
              () => option.isValidFor(characterAtLevel),
              option.categoryId.toString(),
              undefined,
              async () => {
                const modification = await database.load(option.id);
                if (!modification) {
                  return '';
                }
                return <ModificationDescription
                    modification={modification}
                    characterAtLevel={characterAtLevel} />
              }
          ))}
  />
}
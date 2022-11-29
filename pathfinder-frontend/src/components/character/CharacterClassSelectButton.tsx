import React, {useCallback} from "react";
import {v2} from "../../compiled";
import {useCharacterClassDatabase} from "../../database/v2/ClassDatabase";
import ChoiceSelectButton from "./edit/ChoiceSelectButton";
import {ChoiceSelectorCategory, ChoiceSelectorOption} from "./edit/ChoiceSelectorDialog";
import ClassCategoryDbo = v2.ClassCategoryDbo;

interface CharacterClassSelectButtonProps {
  value: string|undefined;
  onSelect: (value: string) => void;
}

export default function CharacterClassSelectButton({ value, onSelect }: CharacterClassSelectButtonProps) {
  const classDatabase = useCharacterClassDatabase();
  const optionsFn = useCallback(() => {
    return classDatabase.all.map(classSummary =>
        new ChoiceSelectorOption(classSummary.id, classSummary.name,
            true,
            classSummary.type,
            undefined,
            () => classDatabase.load(classSummary.id)
                .then(classDefinition => classDefinition?.shortDescription ?? '')))
  }, [classDatabase]);

  const categoriesFn = useCallback(() => {
    return [
      new ChoiceSelectorCategory(ClassCategoryDbo.CORE.toString(), 'Core'),
      new ChoiceSelectorCategory(ClassCategoryDbo.BASE.toString(), 'Base'),
      new ChoiceSelectorCategory(ClassCategoryDbo.HYBRID.toString(), 'Hybrid'),
      new ChoiceSelectorCategory(ClassCategoryDbo.UNCHAINED.toString(), 'Unchained')
    ];
  }, []);

  return <ChoiceSelectButton choiceName="Class"
                             value={value}
                             optionsFn={optionsFn}
                             categoriesFn={categoriesFn}
                             onSelect={onSelect} />
}
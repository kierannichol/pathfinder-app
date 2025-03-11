import {SelectChoiceRef} from "@/data/Choice.ts";
import React, {ReactNode, useMemo} from "react";
import styles from "@/components/choice/ChoiceInput.module.css";
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";
import SelectButton from "@/components/base/form/select/SelectButton.tsx";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import useChoiceValue from "@/components/choice/useChoiceValue.tsx";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import Database from "@/data/Database.ts";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import {classNames} from "@pathfinder-lib/utils/classNames";
import {useDatabase} from "@/data/context.ts";
import {GrClose} from "react-icons/gr";

interface ChoiceSelectInputProps {
  choiceRef: SelectChoiceRef;
  onChange: ChoiceSelectionHandler;
  onDelete?: () => void;
  index?: number;
  characterAtLevel?: CharacterAtLevel;
  className?: string;
  labelClassName?: string;
  children?: ReactNode;
  validation?: boolean;
}

function ChoiceSelectButton({choiceRef, onChange, onDelete, index, characterAtLevel, className, labelClassName, children, validation = true}: ChoiceSelectInputProps) {
  const database = useDatabase();
  const _characterAtLevel = characterAtLevel
      ? characterAtLevel
      : useCharacterAtLevel(choiceRef.level);

  const selected: string | undefined = useChoiceValue(_characterAtLevel, choiceRef, index);

  const characterWithoutThisChoiceSelected = useMemo(() => {
    return selected ? _characterAtLevel.without(selected) : _characterAtLevel;
  }, [characterAtLevel, selected]);

  const buttonLabel: ReactNode = useMemo(() => {
    if (selected) return database.name(selected) ?? 'Unknown';
    return children ?? `Select ${choiceRef.label}`;
  }, [selected, choiceRef, database]);

  const buttonClassName = classNames([styles.input, className, !selected ? styles.unset : undefined]);

  const validationState = useMemo(() => {
    if (!selected) return 'unset';
    return database.feature(selected)?.isEnabled(characterWithoutThisChoiceSelected, database) ? 'valid' : 'invalid';
  }, [selected, database, characterWithoutThisChoiceSelected, database]);

  function optionsFn(query: string | undefined, category: SelectListCategory | undefined) {
    return choiceRef.options(database, query, category?.tag)
    .map(feature => featureSummaryToSelectListEntry(feature, characterWithoutThisChoiceSelected, database))
    .sort((a, b) => {
      if (a.enabled === b.enabled) {
        return a.name.localeCompare(b.name);
      }
      return a.enabled ? -1 : 1;
    })
  }

  const categories = useMemo(() => {
        if ((choiceRef.categories?.length ?? 0) === 0) return undefined;
        return choiceRef.categories.map(category =>
            new SelectListCategory(category.label, category.tag));
      },
      [choiceRef]);

  function handleChange(value: string | string[]) {
    onChange?.(choiceRef, value);
  }

  function handleDelete(event: React.MouseEvent) {
    event.stopPropagation();
    onDelete?.();
  }

  return <SelectButton value={selected}
                       title={`Select ${choiceRef.label}`}
                       className={buttonClassName}
                       onChange={handleChange}
                       optionsFn={optionsFn}
                       categories={categories}>
    {validation && <div className={classNames([styles.badge, styles[validationState]])}>
      <div className={[styles.text, labelClassName].join(' ')}>{buttonLabel}</div>
    </div>}
    {!validation && <div className={[styles.text, labelClassName].join(' ')}>{buttonLabel}</div>}
    {onDelete && <div className={styles.close}><GrClose onClick={handleDelete}/></div>}
  </SelectButton>
}

function featureSummaryToSelectListEntry(feature: FeatureSummary,
                                         characterAtLevel: CharacterAtLevel,
                                         database: Database) {
  const entry = SelectListEntry.builder(feature.key, feature.name)
  .label(feature.label ?? feature.name)
  .enabled(feature.isEnabled(characterAtLevel, database))
  .description(async () => <DescriptionBlock feature={feature}
                                             description={await database.description(feature.key)}
                                             characterAtLevel={characterAtLevel}/>);

  if (feature.hasOptions()) {
    entry.options(query => feature
    .options(database)
    .filter(child => !query || child.name.toLowerCase().includes(query.toLowerCase()))
    .map(child => featureSummaryToSelectListEntry(child, characterAtLevel, database))
    .sort((a, b) => {
      if (a.enabled === b.enabled) {
        return a.name.localeCompare(b.name);
      }
      return a.enabled ? -1 : 1;
    }));
  }

  return entry.build();
}

export default ChoiceSelectButton;
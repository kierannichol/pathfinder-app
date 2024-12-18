import * as React from 'react';
import {ReactNode, useMemo} from 'react';
import {useDatabase} from "@/data/context.tsx";
import {useCharacterAtLevel} from "@/view/character/edit/CharacterAtLevelContext.tsx";
import useChoiceValue from "@/components/choice/useChoiceValue.tsx";
import {classNames} from "../../../../pathfinder-lib/utils/classNames.ts";
import styles from "@/components/choice/ChoiceInput.module.css";
import SelectListCategory from "@/components/base/form/select/SelectListCategory.ts";
import {SelectChoiceRef} from "@/data/Choice.ts";
import {ChoiceSelectionHandler} from "@/components/choice/ChoiceSelectionHandler.tsx";
import CharacterAtLevel from "@/data/CharacterAtLevel.ts";
import {FeatureSummary} from "@/data/FeatureSummary.ts";
import Database from "@/data/Database.ts";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";
import SelectDialogLink from "@/components/base/form/select/SelectDialogLink.tsx";

interface ChoiceSelectLinkProps {
  choiceRef: SelectChoiceRef;
  onChange: ChoiceSelectionHandler;
  index?: number;
  characterAtLevel?: CharacterAtLevel;
  className?: string;
  children?: ReactNode;
}

function ChoiceSelectLink({choiceRef, onChange, index, characterAtLevel, className, children}: ChoiceSelectLinkProps) {
  const database = useDatabase();
  const _characterAtLevel = characterAtLevel
      ? characterAtLevel
      : useCharacterAtLevel(choiceRef.level);

  const selected: string | undefined = useChoiceValue(_characterAtLevel, choiceRef, index);

  const characterWithoutThisChoiceSelected = useMemo(() => {
    return selected ? _characterAtLevel.without(selected) : _characterAtLevel;
  }, [characterAtLevel, selected]);

  const buttonLabel: ReactNode = useMemo(() => {
    if (children) return children;
    if (selected) return database.name(selected) ?? 'Unknown';
    return `Select ${choiceRef.label}`
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

  return <SelectDialogLink value={selected}
                       title={`Select ${choiceRef.label}`}
                       className={buttonClassName}
                       onChange={handleChange}
                       optionsFn={optionsFn}
                       categories={categories}>
    <div className={styles.text}>{buttonLabel}</div>
  </SelectDialogLink>
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
    entry.options(() => feature
    .options(database)
    .map(child => featureSummaryToSelectListEntry(child, characterAtLevel, database)));
  }

  return entry.build();
}

export default ChoiceSelectLink;
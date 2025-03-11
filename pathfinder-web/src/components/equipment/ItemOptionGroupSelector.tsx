import {useMemo, useState} from "react";
import {onlyDefined} from "@/app/pfutils.ts";
import styles from "./ItemOptionGroupSelector.module.css";
import {ItemOptionSet} from "@/data/ItemOptionSet.ts";
import {ItemOptionGroup} from "@/data/ItemOptionGroup.ts";
import {ItemOptionSummary} from "@/data/ItemOption.ts";
import {Quantity} from "@/components/Quantity.tsx";
import {CurrencyDelta} from "@/components/CurrencyDelta.tsx";
import {CostedLabel} from "@/components/equipment/CostedLabel.tsx";
import DescriptionBlock from "@/components/DescriptionBlock.tsx";
import {useItemDatabase} from "@/data/context.ts";
import SelectDialog from "@/components/base/form/select/SelectDialog.tsx";
import {SelectListEntry} from "@/components/base/form/select/SelectList.tsx";

interface ItemOptionGroupSelectorProps {
  optionSet: ItemOptionSet;
  optionGroup: ItemOptionGroup;
  selected: number[];
  onChangeOptions: (selected: ItemOptionSummary[]) => void;
}

export function ItemOptionGroupSelector({ optionSet, optionGroup, selected, onChangeOptions}: ItemOptionGroupSelectorProps) {
  return <div>
    <label>{optionGroup.name}</label>
    {optionGroup.maxSelectable === 1
      ? <SingleOptionSelector optionSet={optionSet} optionGroup={optionGroup} selected={selected} onChangeOptions={onChangeOptions} />
      : <MultiOptionSelector optionSet={optionSet} optionGroup={optionGroup} selected={selected} onChangeOptions={onChangeOptions} />}
  </div>
}

function SingleOptionSelector({ optionSet, optionGroup, selected, onChangeOptions }: ItemOptionGroupSelectorProps) {
  const database = useItemDatabase();
  const availableOptions = useMemo(() => database.options()
      .filter(option => optionGroup.hasOption(option))
      .sort((a, b) => a.pointCost - b.pointCost),
      [optionGroup, database]);

  const selectValue = useMemo(() => {
    for (let option of availableOptions) {
      if (selected.includes(option.id)) {
        return option.id;
      }
    }
    return undefined;
  }, [selected, availableOptions]);

  const totalPointsUsed = useMemo(() => optionSet.calculatePointsUsed(database.options(selected)) - ((selectValue && database.option(selectValue)?.pointCost) ?? 0),
      [database, optionSet, selected]);

  function handleChangeOption(selectedValue: string) {
    const modified = selected.filter(id => availableOptions.every(option => option.id !== id));

    if (selectedValue) {
      const selectedId = parseInt(selectedValue);
      modified.push(selectedId);
    }

    onChangeOptions?.(onlyDefined(modified.map(id => database.option(id))));
  }

  function isDisabled(option: ItemOptionSummary): boolean {
    if (!optionSet.hasMaxPoints) return false;
    return (totalPointsUsed + option.pointCost) > optionSet.maxPoints;
  }

  return <select value={selectValue} onChange={(e => handleChangeOption(e.target.value))}>
    <option value={undefined}></option>
    {availableOptions.map(option =>
        <option key={option.id} value={option.id} disabled={isDisabled(option)}>
          {option.name}
        </option>)}
  </select>
}

function MultiOptionSelector({ optionSet, optionGroup, selected, onChangeOptions }: ItemOptionGroupSelectorProps) {
  const database = useItemDatabase();
  const availableOptions = useMemo(() => database.options()
      .filter(option => optionGroup.hasOption(option))
      .sort((a, b) => {
        let order = a.pointCost - b.pointCost;
        if (order === 0) order = a.currencyCost - b.currencyCost;
        return order;
      }),
      [optionGroup, database]);

  const [ showAddDialog, setShowAddDialog ] = useState(false);

  const selectedOptions = useMemo(() =>
          database.options(selected).filter(opt => optionGroup.hasOption(opt)),
      [database, selected]);

  const totalPointsUsed = useMemo(() => optionSet.calculatePointsUsed(database.options(selected)),
    [database, optionSet, selected]);

  function canSelectOption(option: ItemOptionSummary): boolean {
    if (selected.includes(option.id)) {
      return false;
    }
    if (optionSet.hasMaxPoints && option.pointCost >= (optionSet.maxPoints - totalPointsUsed)) {
      return false;
    }
    return !(optionGroup.hasMaxSelectable && selectedOptions.length >= optionGroup.maxSelectable);

  }

  function handleSelectChoiceToAdd(id: string) {
    if (id) {
      const modified = [ ...selected, parseInt(id) ];
      onChangeOptions?.(onlyDefined(modified.map(id => database.option(id))));
    }
    setShowAddDialog(false);
  }

  function handleDeleteOption(id: number) {
    onChangeOptions?.(database.options(selected.filter(opt => opt !== id)));
  }

  return <div>
      {selectedOptions.map(option =>
          <button key={option.id} className={styles.optionLabel}>
            <div className={styles.optionName}>{option.name}</div>
            <div className={styles.optionDelete} onClick={() => handleDeleteOption(option.id)}>
              X
            </div>
          </button>)}
    <button onClick={() => setShowAddDialog(true)}>+ Add {optionGroup.name}</button>
    <SelectDialog title={optionGroup.name}
                          show={showAddDialog}
                          value={undefined}
                          onSelect={handleSelectChoiceToAdd}
                          onClose={() => setShowAddDialog(false)}
                          optionsFn={(query, category) => availableOptions
                            .filter(option => option.name.toLowerCase().includes(query?.toLowerCase() ?? ""))
                            .map(option =>
                              SelectListEntry.builder(option.id.toString(), option.name)
                                .label(<OptionNameLabel option={option}/>)
                                .enabled(canSelectOption(option))
                                .description(async () => <DescriptionBlock description={(await database.optionDetails(option.id))?.description} />)
                                .build())} />
  </div>
}

interface OptionNameLabelProps {
    option: ItemOptionSummary;
}

function OptionNameLabel({ option }: OptionNameLabelProps) {
  const cost = option.pointCost > 0
      ? <Quantity amount={'+' + option.pointCost} unit="bonus" />
      : <CurrencyDelta gp={option.currencyCost} />
  return <CostedLabel name={option.name} cost={cost} />
}
import {ItemOptionGroup} from "@/data/v8/ItemOptionGroup.ts";
import {useItemDatabase} from "@/data/context.tsx";
import {useMemo, useState} from "react";
import {ItemOptionSummary} from "@/data/v8/ItemOption.ts";
import {onlyDefined} from "@/app/pfutils.ts";
import {ItemOptionSet} from "@/data/v8/ItemOptionSet.ts";
import ButtonBlock from "@/view/components/controls/ButtonBlock.tsx";
import {ButtonBlockGroup} from "@/view/components/controls/ButtonBlockGroup.tsx";
import {EntitySelectDialog} from "@/view/components/entity/EntitySelectDialog.tsx";
import {
  EntityId,
  entityId,
  EntitySelectOption,
  OptionalEntityId
} from "@/view/components/entity/EntitySelectOption.tsx";
import {DescriptionBlock} from "@/view/components/DescriptionBlock.tsx";
import styles from "./ItemOptionGroupSelector.module.css";
import {CloseButton} from "react-bootstrap";
import {CostedLabel} from "@/view/components/equipment/CostedLabel.tsx";
import {Quantity} from "@/view/components/controls/Quantity.tsx";
import {CurrencyDelta} from "@/view/components/character/CurrencyDelta.tsx";

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

  function handleSelectChoiceToAdd(id: OptionalEntityId) {
    const selectedId = entityId.toOptionalNumber(id);
    if (selectedId) {
      const modified = [ ...selected, selectedId ];
      onChangeOptions?.(onlyDefined(modified.map(id => database.option(id))));
    }
    setShowAddDialog(false);
  }

  function handleDeleteOption(id: EntityId) {
    onChangeOptions?.(database.options(selected.filter(opt => opt !== id)));
  }

  return <div>
    <ButtonBlockGroup>
      {selectedOptions.map(option =>
          <ButtonBlock key={option.id} className={styles.optionLabel}>
            <div className={styles.optionName}>{option.name}</div>
            <div className={styles.optionDelete} onClick={() => handleDeleteOption(option.id)}>
              <CloseButton />
            </div>
          </ButtonBlock>)}
    </ButtonBlockGroup>
    <ButtonBlock variant="link" onClick={() => setShowAddDialog(true)}>+ Add {optionGroup.name}</ButtonBlock>
    <EntitySelectDialog title={optionGroup.name}
                          show={showAddDialog}
                          value={undefined}
                          search={true}
                          onSelect={handleSelectChoiceToAdd}
                          onCancel={() => setShowAddDialog(false)}
                          optionsFn={(query, category) => availableOptions
                            .filter(option => option.name.toLowerCase().includes(query?.toLowerCase() ?? ""))
                            .map(option =>
                              new EntitySelectOption(option.id.toString(),
                                  <OptionNameLabel option={option}/>,
                                  canSelectOption(option),
                                  async () =>
                                      <DescriptionBlock description={(await database.optionDetails(option.id))?.description} />))} />
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
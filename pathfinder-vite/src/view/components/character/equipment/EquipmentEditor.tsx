import React, {ReactNode, useMemo} from "react";
import {ChoiceSelectedHandler, MultiSelectChoiceModel, SelectChoiceModel} from "../../../model/ChoiceModel.ts";
import {CharacterAtLevelModel} from "../../../model/CharacterAtLevelModel.ts";
import {useDatabaseModel} from "../../../model/ModelContext.tsx";
import useAsyncMemo from "../../../../utils/useAsyncMemo.tsx";
import LoadingBlock from "../../LoadingBlock.tsx";
import {ItemSummaryModel} from "../../../model/ItemModel.ts";
import {CharacterChoiceSelectHandler} from "../CharacterEditor.tsx";
import {array} from "../../../../app/pfutils.ts";
import ChoiceSelectButton from "../../controls/ChoiceSelectButton.tsx";
import {ItemDatabaseModel} from "../../../model/DatabaseModel.ts";
import {ChoiceSelectorOption, ChoiceSelectorOptions} from "../../controls/ChoiceSelectorList.tsx";
import {ItemDescription} from "./ItemDescription.tsx";
import {ButtonBlockGroup} from "../../controls/ButtonBlockGroup.tsx";
import {Currency} from "../Currency.tsx";

interface EquipmentEditorProps {
  characterAtLevel: CharacterAtLevelModel;
  onChange: ChoiceSelectedHandler;
}

export default function EquipmentEditor({characterAtLevel, onChange}: EquipmentEditorProps) {
  const database = useDatabaseModel();

  const [itemDb] = useAsyncMemo(() => database.itemDatabase(),
      [database]);

  const equipmentChoiceRef = useMemo(() => characterAtLevel.choicesOfType('equipment')[0],
      [characterAtLevel]) as MultiSelectChoiceModel;

  const equipmentList = useMemo(() => {
    if (itemDb === undefined || equipmentChoiceRef === undefined) {
      return [];
    }
    const keys = array(characterAtLevel.selected(equipmentChoiceRef)) ?? [];
    return keys.map(key => itemDb.item(parseInt(key)))
    .filter(i => i !== undefined) as ItemSummaryModel[];
  }, [characterAtLevel, itemDb, equipmentChoiceRef]);

  const totalCost = useMemo(() =>
          equipmentList
            .map(item => item.cost)
            .reduce((a, b) => a + b, 0),
      [equipmentList]);

  if (!itemDb) {
    return <LoadingBlock/>
  }

  if (equipmentChoiceRef === undefined) {
    return <div>Not Available</div>
  }

  return <div>
    <div>Total Cost: <Currency gp={totalCost}/></div>
    <ButtonBlockGroup>
      {equipmentList.map((summary, index) => <EditItemButton
                                                       key={summary.uid}
                                                       itemDatabase={itemDb}
                                                       choiceRef={equipmentChoiceRef}
                                                       selectedIndex={index}
                                                       characterAtLevel={characterAtLevel}
                                                       onChange={onChange}/>)}
    </ButtonBlockGroup>
    <AddItemButton choiceRef={equipmentChoiceRef}
                   itemDatabase={itemDb}
                   characterAtLevel={characterAtLevel}
                   onChange={onChange}/>
  </div>
}

interface ItemButtonProps {
  choiceRef: SelectChoiceModel;
  selectedIndex?: number;
  characterAtLevel: CharacterAtLevelModel;
  onChange: CharacterChoiceSelectHandler;
  itemDatabase: ItemDatabaseModel;
}

export function EditItemButton({
                                 choiceRef,
                                 selectedIndex = 0,
                                 characterAtLevel,
                                 itemDatabase,
                                 onChange
                               }: ItemButtonProps) {
  return <ItemChoiceSelectButton
      choiceRef={choiceRef}
      choiceIndex={selectedIndex}
      characterAtLevel={characterAtLevel}
      itemDatabase={itemDatabase}
      variant={["default", "list-item"]}
      onSelect={value => {
        let modified = array(characterAtLevel.selected(choiceRef));
        if (value && value !== '') {
          modified[selectedIndex] = value;
        } else if (selectedIndex !== undefined) {
          modified.splice(selectedIndex, 1);
        }
        onChange(choiceRef, modified)
      }}/>;
}

export function AddItemButton({choiceRef, characterAtLevel, itemDatabase, onChange}: ItemButtonProps) {
  return <ItemChoiceSelectButton
      choiceRef={choiceRef}
      characterAtLevel={characterAtLevel}
      itemDatabase={itemDatabase}
      variant={"link"}
      dialogVariant={"default"}
      onSelect={value => {
        const current = characterAtLevel.selected(choiceRef);
        const modified = current !== '' ? array(current) : [];
        modified.push(value);
        onChange(choiceRef, modified);
      }}>
    + Add Item
  </ItemChoiceSelectButton>;
}

interface ItemChoiceSelectButtonProps {
  choiceRef: MultiSelectChoiceModel;
  characterAtLevel: CharacterAtLevelModel;
  choiceIndex?: number;
  itemDatabase: ItemDatabaseModel;
  onSelect?: (id: string) => void;
  children?: ReactNode;
  variant?: string | string[];
  dialogVariant?: string | string[];
}

function ItemChoiceSelectButton({
                                  choiceRef,
                                  characterAtLevel,
                                  choiceIndex,
                                  itemDatabase,
                                  onSelect,
                                  variant,
                                  dialogVariant,
                                  children
                                }: ItemChoiceSelectButtonProps) {
  const selected = useMemo(() => choiceIndex === undefined ? undefined : characterAtLevel.selected(choiceRef, choiceIndex) as string,
      [characterAtLevel, choiceRef, choiceIndex]);

  return <ChoiceSelectButton
      choiceName={choiceRef.label}
      value={selected}
      variant={variant}
      dialogVariant={dialogVariant}
      search={true}
      removable={selected !== undefined}
      optionsFn={(query, category) => itemOptions(query, itemDatabase)}
      onSelect={onSelect}
      children={children}/>
}

interface ItemLabelProps {
  item: ItemSummaryModel;
}

function ItemLabel({ item }: ItemLabelProps) {
  return <div className="d-flex flex-grow-1">
    <div className="flex-grow-1">{item.name}</div>
    <div>(<Currency gp={item.cost} />)</div>
  </div>
}

function itemOptions(query: string | undefined, itemDatabase: ItemDatabaseModel): ChoiceSelectorOptions {
  return itemDatabase.items()
  .filter(item => !query || item.name.toLowerCase().includes(query.toLowerCase()))
  .map(item => new ChoiceSelectorOption(
      item.itemId.toString(),
      <ItemLabel item={item} />,
      true,
      async () => {
        const loaded = await itemDatabase.load(item.itemId);
        return loaded ? <ItemDescription item={loaded}/> : <></>
      }
  ))
}
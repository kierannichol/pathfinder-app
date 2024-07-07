import {useMemo, useState} from "react";
import {uniq} from "@/app/pfutils.ts";
import CreatureSize from "@/data/CreatureSize.ts";
import {useDatabase} from "@/data/context.tsx";
import {useCharacterAtLevel} from "@/view/components/character/edit/CharacterAtLevelContext.tsx";
import DataChoiceTextInput from "@/view/components/controls/DataChoiceTextInput.tsx";
import {ChoiceInputType, SelectChoiceRef} from "@/data/v8/Choice.ts";
import DataChoiceSelectButton from "@/view/components/controls/DataChoiceSelectButton.tsx";
import {useCharacterUpdate} from "@/view/components/character/edit/CharacterUpdateContext.tsx";

interface CharacterValueProps {
  dataKey: string;
  lookupFn?: (value: string) => string;
  fallback?: string;
  modifier?: boolean;
}

interface CharacterChoiceValueProps {
  choiceKey: string;
}

interface CharacterValueWithoutDataKeyProps extends Omit<CharacterValueProps, 'dataKey' | 'lookupFn'> {}
interface CharacterChoiceValueWithoutChoiceKeyProps extends Omit<CharacterChoiceValueProps, 'choiceKey'> {}

const Value = (props: CharacterValueProps) => <CharacterValue {...props} />

function value(dataKey: string, lookupFn?: (value: string) => string) {
  return (props: CharacterValueWithoutDataKeyProps) => <CharacterValue dataKey={dataKey}
                                                                       lookupFn={lookupFn}
                                                                       {...props} />
}

function valueFn(dataKeyFn: (dataKey: string) => string) {
  return ({ dataKey, ...valueProps }: CharacterValueProps) =>
      value(dataKeyFn(dataKey))(valueProps);
}

function choice(choiceKey: string) {
  return (props: CharacterChoiceValueWithoutChoiceKeyProps) => <CharacterChoiceValue
      choiceKey={choiceKey}
      {...props} />
}

function choiceFn(choiceKeyFn: (choiceKey: string) => string) {
  return ({ dataKey, ...choiceProps }: CharacterChoiceValueWithoutChoiceKeyProps & { dataKey: string }) =>
      choice(choiceKeyFn(dataKey))(choiceProps);
}

export const CharacterName = choice("character_name");
export const Alignment = choice("alignment");
export const TotalHealth = value("hp_total");
export const CurrentHealth = choice("current_hp");
export const NonlethalDamage = choice("nonlethal_damage");

export const BaseAttackBonus = value("bab");
export const CMB = value("cmb");
export const CMD = value("cmd");

export const Initiative = value("initiative");

export const InitiativeMisc = value("initiative:misc");


export const AbilityScore = {
  Final: valueFn(dataKey => dataKey + "_score"),
  Base: choiceFn(dataKey => dataKey + ":base"),
  Mod: valueFn(dataKey => dataKey + "_mod"),
  Damage: choiceFn(dataKey => dataKey + ":dmg"),
  Drain: choiceFn(dataKey => dataKey + ":drain"),
}

export const StrengthMod = value("str_mod");
export const DexterityMod = value("dex_mod");
export const ConstitutionMod = value("con_mod");
export const IntelligenceMod = value("int_mod");
export const WisdomMod = value("wis_mod");
export const CharismaMod = value("cha_mod");

export function AbilityTempAdjustment(props: { ability: string }) {
  return choice(props.ability + ":temp")({})
}

export const Deity = choice("deity");
export const Homeland = choice("homeland");
export const Gender = choice("gender");
export const Age = choice("age");
export const Height = choice("height");
export const Weight = choice("weight");
export const Hair = choice("hair");
export const Eyes = choice("eyes");

export const Race = choice("race");

export const SizeMod = value("size_mod");

export const Speed = {
  Base: value("speed:base"),
  Armor: value("speed:armor"),
  Fly: value("speed:fly"),
  Swim: value("speed:swim"),
  Climb: value("speed:climb"),
  Burrow: value("speed:burrow"),
}

export const FortSave = value("fort_save");
export const FortBase = value("fort:base");
export const WillSave = value("will_save");
export const WillBase = value("will:base");
export const ReflexSave = value("ref_save");
export const ReflexBase = value("ref:base");

export const SpellResistance = value("sr");

export function CharacterLevel() {
  const characterAtLevel = useCharacterAtLevel();
  const database = useDatabase();

  const classLevelText = useMemo(() => {
    const classesSelected = uniq(characterAtLevel.choices
        .filter(choice => choice.type === 'class')
        .map(choice => characterAtLevel.selected(choice) as string)
        .filter(selected => selected !== ''));

    return classesSelected.map(classId => {
      if (!classId) {
        return "Unknown";
      }
      const classLevel = characterAtLevel.resolve(classId)?.asNumber() ?? 0;
      const className = database.name(classId) ?? "Unknown";
      return `${className} ${classLevel}`;
    }).join('/');
  }, [characterAtLevel, database]);

  return <span>{classLevelText}</span>
}

export function Size() {
  const characterAtLevel = useCharacterAtLevel();
  const text = useMemo(() => {
    const size = characterAtLevel.resolve("size");
    if (size === undefined) {
      return "Unknown";
    }
    return CreatureSize.fromId(size.asNumber())?.longName ?? "Unknown";
  }, [characterAtLevel]);

  return <span>{text}</span>
}

export function CharacterChoiceValue({ choiceKey }: CharacterChoiceValueProps) {
  const characterAtLevel = useCharacterAtLevel();
  const characterUpdate = useCharacterUpdate();
  const [ editing, setEditing ] = useState(false);

  const choice = characterAtLevel.choice(choiceKey);

  function handleSelect(selected: string|string[]) {
    setEditing(false);
    if (choice) characterUpdate.select(choice, selected);
  }

  if (!choice) {
    return <span>CHOICE NOT FOUND</span>
  }

  if (choice.inputType === ChoiceInputType.Select) {
    return <DataChoiceSelectButton choiceRef={choice as SelectChoiceRef}
                                   variant={"none"}
                                   dialogVariant={"default"}
                                   characterAtLevel={characterAtLevel}
                                   labelPrefix={<></>}
                                   onSelect={handleSelect} />
  }

  return <DataChoiceTextInput choiceRef={choice}
                              readonly={!editing}
                              characterAtLevel={characterAtLevel}
                              onFocus={() => setEditing(true)}
                              onBlur={() => setEditing(false)}
                              onSelect={handleSelect} />
}

export function CharacterValue({ dataKey, lookupFn, fallback = "", modifier = false }: CharacterValueProps) {
  const [ editing, setEditing ] = useState(false);

  const characterAtLevel = useCharacterAtLevel();
  const resolved = useMemo(() => {
    let value = characterAtLevel.resolve(dataKey)?.asText();
    if (value === undefined || value === "") {
      return undefined;
    }
    if (lookupFn !== undefined) {
      value = lookupFn(value);
    }
    if (modifier && value !== '') {
      value = value.startsWith("-") ? value : "+" + value;
    }
    return value;
  }, [dataKey, characterAtLevel, lookupFn, modifier]);

  if (editing) {
    return
  }

  return <span>{resolved ?? fallback}</span>
}
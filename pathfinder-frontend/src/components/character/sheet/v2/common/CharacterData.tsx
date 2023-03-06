import {useMemo} from "react";
import Alignments from "../../../../../database/Alignments";
import {usePathfinderDatabase} from "../../../../../database/v4/PathfinderDatabase";
import CreatureSize from "../../../../../model/character/CreatureSize";
import {uniq} from "../../../../../util/pfutils";
import {useCharacterAtLevel} from "../CharacterSheet";

interface CharacterValueProps {
  dataKey: string;
  lookupFn?: (value: string) => string;
  fallback?: string;
  modifier?: boolean;
}

interface CharacterValueWithoutDataKeyProps extends Omit<CharacterValueProps, 'dataKey' | 'lookupFn'> {}

export const CharacterName = value("character_name");
export const Alignment = value("alignment", value => Alignments.find(value)?.name ?? "Unknown");
export const TotalHealth = value("hp_total");

export const BaseAttackBonus = value("bab");
export const CMB = value("cmb");
export const CMD = value("cmd");

export const Initiative = value("initiative");

export const StrengthMod = value("str_mod");
export const DexterityMod = value("dex_mod");
export const ConstitutionMod = value("con_mod");
export const IntelligenceMod = value("int_mod");
export const WisdomMod = value("wis_mod");
export const CharismaMod = value("cha_mod");

export const SizeMod = value("size_mod");

export const Value = (props: CharacterValueProps) => <CharacterValue {...props} />

function value(dataKey: string, lookupFn?: (value: string) => string) {
  return (props: CharacterValueWithoutDataKeyProps) => <CharacterValue dataKey={dataKey}
                                                                       lookupFn={lookupFn}
                                                                       {...props} />
}

export function CharacterLevel() {
  const characterAtLevel = useCharacterAtLevel();
  const database = usePathfinderDatabase();

  const classLevelText = useMemo(() => {
    const classesSelected = uniq(characterAtLevel.choices
        .filter(choice => choice.type === 'class')
        .filter(choice => choice.current !== '')
        .map(choice => choice.current));

    return classesSelected.map(classId => {
      if (!classId) {
        return "Unknown";
      }
      const classLevel = characterAtLevel.get(classId)?.asNumber() ?? 0;
      const className = database.name(classId) ?? "Unknown";
      return `${className} ${classLevel}`;
    }).join('/');
  }, [characterAtLevel, database]);

  return <span>{classLevelText}</span>
}

export function Race() {
  const characterAtLevel = useCharacterAtLevel();
  const database = usePathfinderDatabase();
  const text = useMemo(() => {
    const selected = characterAtLevel.choices
        .find(option => option.type === 'race')
        ?.current;

    return database.name(selected) ?? "Unknown";
  }, [characterAtLevel, database]);

  return <span>{text}</span>
}

export function Size() {
  const characterAtLevel = useCharacterAtLevel();
  const text = useMemo(() => {
    const size = characterAtLevel.get("size");
    if (size === undefined) {
      return "Unknown";
    }
    return CreatureSize.fromId(size.asNumber())?.longName ?? "Unknown";
  }, [characterAtLevel]);

  return <span>{text}</span>
}

export function CharacterValue({ dataKey, lookupFn, fallback = "", modifier = false }: CharacterValueProps) {
  const characterAtLevel = useCharacterAtLevel();
  const resolved = useMemo(() => {
    let value = characterAtLevel.get(dataKey)?.asText();
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
  return <span>{resolved ?? fallback}</span>
}
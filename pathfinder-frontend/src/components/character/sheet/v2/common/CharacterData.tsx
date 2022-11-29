import {useMemo} from "react";
import AlignmentDatabase from "../../../../../database/AlignmentDatabase";
import {useCharacterAtLevel, useClassDatabase, useRaceDatabase} from "../CharacterSheet";

interface CharacterValueProps {
  dataKey: string;
  lookupFn?: (value: string) => string;
  fallback?: string;
  modifier?: boolean;
}

interface CharacterValueWithoutDataKeyProps extends Omit<CharacterValueProps, 'dataKey' | 'lookupFn'> {}

export const CharacterName = value("character_name");
export const Alignment = value("alignment",
                                      value => AlignmentDatabase.all.find(a => a.id === value)?.name ?? 'Unknown');
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
  const classDatabase = useClassDatabase();
  const classLevelText = useMemo(() => {
    const classId = characterAtLevel.get("class_1")?.asText() ?? '';
    const classLevel = characterAtLevel.get(classId)?.asNumber() ?? 0;
    const className = classDatabase.summary(classId)?.name ?? "Unknown";
    return `${className} ${classLevel}`;
  }, [characterAtLevel, classDatabase]);

  return <span>{classLevelText}</span>
}

export function Race() {
  const characterAtLevel = useCharacterAtLevel();
  const raceDatabase = useRaceDatabase();
  const text = useMemo(() => {
    const raceId = characterAtLevel.get("race")?.asText() ?? '';
    return raceDatabase.summary(raceId)?.name ?? "Unknown";
  }, [characterAtLevel, raceDatabase]);

  return <span>{text}</span>
}

export function Size() {
  const characterAtLevel = useCharacterAtLevel();
  const raceDatabase = useRaceDatabase();
  const text = useMemo(() => {
    const raceId = characterAtLevel.get("race")?.asText() ?? '';
    return raceDatabase.summary(raceId)?.size.longName ?? "Unknown";
  }, [characterAtLevel, raceDatabase]);

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
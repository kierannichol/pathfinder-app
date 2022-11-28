import {useMemo} from "react";
import AlignmentDatabase from "../../../../database/AlignmentDatabase";
import {useCharacterAtLevel, useClassDatabase, useRaceDatabase} from "./CharacterSheet";

interface CharacterValueProps {
  dataKey: string;
  lookupFn?: (value: string) => string;
  fallback?: string;
}

export const CharacterName = () => <CharacterValue dataKey="character_name"/>
export const Alignment = () => <CharacterValue dataKey="alignment"
                                      lookupFn={value => AlignmentDatabase.all.find(a => a.id === value)?.name ?? 'Unknown'} />
export const TotalHealth = () => <CharacterValue dataKey={"hp_total"}/>

export const Value = (props: CharacterValueProps) => <CharacterValue {...props} />

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

export function CharacterValue({ dataKey, lookupFn, fallback = "" }: CharacterValueProps) {
  const characterAtLevel = useCharacterAtLevel();
  const resolved = useMemo(() => {
    let value = characterAtLevel.get(dataKey)?.asText();
    if (value === undefined || value === "") {
      return undefined;
    }
    if (lookupFn !== undefined) {
      value = lookupFn(value);
    }
    return value;
  }, [dataKey, characterAtLevel, lookupFn]);
  return <span>{resolved ?? fallback}</span>
}
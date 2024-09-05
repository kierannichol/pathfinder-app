import {DetailedHTMLProps, HTMLAttributes, useMemo} from "react";
import {classNames} from "@/utils/classNames.ts";
import Section from "@/view/components/character/sheet/common/Section.tsx";
import Label from "@/view/components/character/sheet/common/Label.tsx";
import {Column} from "@/view/components/character/sheet/common/Column.tsx";
import UnderlinedValue from "@/view/components/character/sheet/common/UnderlinedValue.tsx";
import {useCharacterAtLevel} from "@/view/components/character/sheet/CharacterSheet.tsx";
import {useDatabase} from "@/data/context.tsx";

export default function FeatsSection({ className, ...divProps }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  const characterAtLevel = useCharacterAtLevel();
  const database = useDatabase();

  const featNames = useMemo(() => {
    return characterAtLevel.features
        .filter(feature => feature.tags.includes('feat'))
        .map(feature => feature.name);
  }, [characterAtLevel, database]);

  return <Section className={classNames([className])} {...divProps}>
    <Column>
      <Label>Feats</Label>
      {featNames.map(name => <UnderlinedValue>{name}</UnderlinedValue>)}
    </Column>
  </Section>
}
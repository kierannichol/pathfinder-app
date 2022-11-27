import React, {useEffect, useState} from "react";
import {useCharacterClassDatabase} from "../../../database/v2/ClassDatabase";
import {CharacterClass} from "../../../model/character/CharacterClass";
import PathfinderSelect from "../../common/PathfinderSelect";
import "./CharacterTraitList.scss";
import Special = CharacterClass.Special;

interface CharacterTraitListProps {
  classIds: string[];
  level: number;
}

export default function CharacterTraitList({ classIds, level }: CharacterTraitListProps) {
  const classDatabase = useCharacterClassDatabase();
  const [ specials, setSpecials ] = useState<Special[]>([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const collected = [];
      for (let classId of classIds) {
        const classDefinition = await classDatabase.load(classId);
        collected.push(...(classDefinition?.levels[level - 1].specials ?? []));
      }
      if (mounted) {
        setSpecials(collected);
      }
    })();

    return () => {
      mounted = false;
    }
  }, [classIds, level]);

  return <PathfinderSelect>
    {specials.map(special => <PathfinderSelect.Item key={special.id}
                                                    itemKey={special.id}
                                                    label={special.name}
                                                    body={special.description}/>)}
  </PathfinderSelect>
}
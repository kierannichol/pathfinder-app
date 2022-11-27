import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useCharacterRepository} from "../app/reactCharacter";
import {useAsyncMemo} from "../app/reactHooks";
import LoadingBlock from "../components/common/LoadingBlock";
import {Character} from "../model/character/Character";
import {CharacterAtLevel} from "../model/character/CharacterAtLevel";
import CharacterSheetPage from "../views/CharacterSheetPage";

export default function CharacterSheetRoute() {
  const { id, level } = useParams();
  if (id === undefined) {
    throw new Response("No character ID specified", { status: 400 });
  }
  if (level === undefined) {
    throw new Response("No level specified", { status: 400 });
  }
  const characterRepository = useCharacterRepository();
  const [ character, setCharacter ] = useState<Character|undefined>();
  useEffect(() => {
    characterRepository.load(id).then(setCharacter);
  }, [characterRepository]);
  const [ characterAtLevel ] = useAsyncMemo<CharacterAtLevel>(async () => {
    if (character === undefined) {
      return undefined;
    }
    return await character.atLevel(parseInt(level));
  }, [character]);

  if (characterAtLevel === undefined) {
    return <main><LoadingBlock/></main>
  }
  return <CharacterSheetPage characterAtLevel={characterAtLevel} />
}
import {useMemo} from "react";
import {useLoaderData} from "react-router-dom";
import {RequiresAuth} from "../app/auth";
import {withGlobalCharacterRepository} from "../app/reactCharacter";
import CharacterSheet from "../components/character/sheet/v2/CharacterSheet";
import Page from "../components/common/Page";
import {withGlobalPathfinderDatabase} from "../database/v4/PathfinderDatabase";

export async function characterSheetV2Loader({ params }: any) {
  const characterId = params.id;
  const level = params.level;

  if (characterId === undefined) {
    throw new Response("Character ID required", { status: 400 });
  }

  if (level === undefined) {
    throw new Response("Character level required", { status: 400 });
  }

  const characterRepository = await withGlobalCharacterRepository();
  const character = await characterRepository.load(characterId);
  console.log(character);
  if (character === undefined) {
    throw new Response("Character not found", { status: 404 });
  }

  const characterAtLevel = await character.atLevel(level);
  console.log(characterAtLevel);
  if (characterAtLevel === undefined) {
    throw new Response("Character level not found", { status: 404 });
  }

  const database = await withGlobalPathfinderDatabase();

  return { characterAtLevel, database };
}

export default function CharacterSheetV2Route() {
  const { characterAtLevel, database } = useLoaderData() as any;

  const pageTitle = useMemo(() => characterAtLevel?.resolve('character_name')?.asText() + ' - Pathfinder App', [characterAtLevel]);

  return <Page title={pageTitle}>
    <RequiresAuth>
      <CharacterSheet characterAtLevel={characterAtLevel}
                      database={database}
      />
    </RequiresAuth>
  </Page>
}
import {useMemo} from "react";
import {useLoaderData} from "react-router-dom";
import {RequiresAuth} from "../app/auth";
import {withGlobalCharacterRepository} from "../app/reactCharacter";
import CharacterSheet from "../components/character/sheet/v2/CharacterSheet";
import Page from "../components/common/Page";
import {withGlobalCharacterClassDatabase} from "../database/v2/ClassDatabase";
import {withGlobalRaceDatabase} from "../database/v2/RaceDatabase";

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
  if (character === undefined) {
    throw new Response("Character not found", { status: 404 });
  }

  const characterAtLevel = await character.atLevel(level);
  if (characterAtLevel === undefined) {
    throw new Response("Character level not found", { status: 404 });
  }

  const classDatabase = await withGlobalCharacterClassDatabase();
  const raceDatabase = await withGlobalRaceDatabase();

  return { characterAtLevel, classDatabase, raceDatabase };
}

export default function CharacterSheetV2Route() {
  const { characterAtLevel, classDatabase, raceDatabase } = useLoaderData() as any;

  const pageTitle = useMemo(() => characterAtLevel.get('character_name')?.asText() + ' - Pathfinder App', [characterAtLevel]);

  return <Page title={pageTitle}>
    <RequiresAuth>
      <CharacterSheet characterAtLevel={characterAtLevel}
                      classDatabase={classDatabase}
                      raceDatabase={raceDatabase}
      />
    </RequiresAuth>
  </Page>
}
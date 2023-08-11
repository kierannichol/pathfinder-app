import React from "react";
import {useLoaderData} from "react-router-dom";
import {CharacterRepositoryContextProvider, withGlobalCharacterRepository} from "../app/reactCharacter";
import Page from "../components/common/Page";
import Character from "../v7/Character";
import Database from "../v7/Database";
import {PathfinderDatabaseContextV7, withGlobalPathfinderDatabaseV7} from "../v7/PathfinderDatabaseV7";
import CharacterEditView from "../views/CharacterEditView";

interface CharacterEditLoaderData {
  character: Character;
  database: Database;
}

export async function characterEditLoader({ params }: any): Promise<CharacterEditLoaderData> {
  const characterId = params.id;

  if (characterId === undefined) {
    throw new Response("Character ID required", { status: 400 });
  }

  const characterRepository = await withGlobalCharacterRepository();
  const character = await characterRepository.load(characterId);
  if (character === undefined) {
    throw new Response("Character not found", { status: 404 });
  }

  const pathfinderDb = await withGlobalPathfinderDatabaseV7();

  return {
    character: character,
    database: pathfinderDb
  };
}

export default function CharacterEditRoute() {
  const { character, database } = useLoaderData() as CharacterEditLoaderData;

  // const params = useParams();
  // const characterRepository = useCharacterRepository();

  // const id = params.id;
  // if (id === undefined) {
  //   throw new Response("No character ID specified", { status: 400 });
  // }

  return <Page title="Pathfinder App" className="pf-app">
    <PathfinderDatabaseContextV7.Provider value={database}>
      <CharacterRepositoryContextProvider database={database}>
        <CharacterEditView loaded={character} />
      </CharacterRepositoryContextProvider>
    </PathfinderDatabaseContextV7.Provider>
  </Page>

  // const [ character, setCharacter ] = useState<Character | undefined>();
  // useEffect(() => {
  //   characterRepository.load(id)
  //       .then(loaded => {
  //         if (loaded === undefined) {
  //           throw new Response("Character not found", { status: 404 });
  //         }
  //         setCharacter(loaded);
  //       });
  // }, [characterRepository]);
  //
  // if (character === undefined) {
  //   return <main><LoadingBlock /></main>
  // }

  // return <CharacterEditView character={character} setCharacter={setCharacter} />
}
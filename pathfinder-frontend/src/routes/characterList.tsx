import React from "react";
import {useLoaderData} from "react-router-dom";
import {RequiresAuth} from "../app/auth";
import {CharacterRepositoryContextProvider} from "../app/reactCharacter";
import Page from "../components/common/Page";
import Database from "../v7/Database";
import {PathfinderDatabaseContextV7, withGlobalPathfinderDatabaseV7} from "../v7/PathfinderDatabaseV7";
import CharacterListView from "../views/CharacterListView";

export async function characterListLoader() {
  const pathfinderDb = await withGlobalPathfinderDatabaseV7();

  return { database: pathfinderDb };
}

export default function CharacterListRoute() {
  const { database } = useLoaderData() as { database: Database };

  return <Page title="Pathfinder App" className="pf-app">
    <RequiresAuth>
      <PathfinderDatabaseContextV7.Provider value={database}>
        <CharacterRepositoryContextProvider database={database}>
          <CharacterListView />
        </CharacterRepositoryContextProvider>
      </PathfinderDatabaseContextV7.Provider>
    </RequiresAuth>
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